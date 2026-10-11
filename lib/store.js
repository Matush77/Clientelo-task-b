// Storage for funnel counters and leads. Upstash Redis in production (Vercel Marketplace integration),
// an in-memory store locally when no credentials are set.
import { Redis } from '@upstash/redis';

export const FUNNEL = ['page_view', 'hero_cta', 'calc_select', 'calc_compare', 'result_view', 'form_open', 'form_start', 'help_on', 'form_submit', 'lead_ok', 'lead_error'];
export const OTHER_EVENTS = ['consent_accept', 'consent_reject', 'faq_open'];
export const EVENTS = [...FUNNEL, ...OTHER_EVENTS];

const day = (d = new Date()) => d.toISOString().slice(0, 10);

function redisStore(redis) {
  return {
    kind: 'redis',
    async incrEvent(event, { variant, device, utmContent }) {
      const d = day();
      const p = redis.pipeline();
      p.hincrby(`ev:${d}`, `${variant}:${event}`, 1);
      p.hincrby(`evd:${d}`, `${device}:${event}`, 1);
      p.hincrby(`evc:${d}`, `${utmContent || '-'}:${event}`, 1);
      p.sadd('days', d);
      await p.exec();
    },
    async addLead(lead) { await redis.lpush('leads', JSON.stringify(lead)); },
    async leadCount() { return redis.llen('leads'); },
    async rateLimit(key, limit, windowSec) {
      const k = `rl:${key}`;
      const n = await redis.incr(k);
      if (n === 1) await redis.expire(k, windowSec);
      return n <= limit;
    },
    async raw() {
      const days = (await redis.smembers('days')).sort();
      const out = {};
      for (const d of days) {
        const [ev, evd, evc] = await Promise.all([redis.hgetall(`ev:${d}`), redis.hgetall(`evd:${d}`), redis.hgetall(`evc:${d}`)]);
        out[d] = { ev: ev || {}, evd: evd || {}, evc: evc || {} };
      }
      return out;
    },
  };
}

const mem = { counters: {}, leads: [], rl: new Map() };
function memoryStore() {
  const inc = (d, table, field) => {
    mem.counters[d] ??= { ev: {}, evd: {}, evc: {} };
    mem.counters[d][table][field] = (mem.counters[d][table][field] || 0) + 1;
  };
  return {
    kind: 'memory',
    async incrEvent(event, { variant, device, utmContent }) {
      const d = day();
      inc(d, 'ev', `${variant}:${event}`); inc(d, 'evd', `${device}:${event}`); inc(d, 'evc', `${utmContent || '-'}:${event}`);
    },
    async addLead(lead) { mem.leads.unshift(lead); },
    async leadCount() { return mem.leads.length; },
    async rateLimit(key, limit, windowSec) {
      const now = Date.now(), e = mem.rl.get(key);
      if (!e || now > e.until) { mem.rl.set(key, { n: 1, until: now + windowSec * 1000 }); return true; }
      e.n += 1; return e.n <= limit;
    },
    async raw() { return JSON.parse(JSON.stringify(mem.counters)); },
    _reset() { mem.counters = {}; mem.leads = []; mem.rl.clear(); },
    _leads() { return mem.leads; },
  };
}

export function getStore() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  return url && token ? redisStore(new Redis({ url, token })) : memoryStore();
}
