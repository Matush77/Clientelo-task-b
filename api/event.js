// POST /api/event: cookie-free funnel beacon (navigator.sendBeacon). Only whitelisted events are counted;
// no IP, no identifiers are stored, only daily counters per variant, device and utm_content.
import { getStore, EVENTS } from '../lib/store.js';
import { ipKey } from './lead.js';

const SERVER_ONLY = ['lead_ok', 'lead_error']; // set by /api/lead, not by the browser

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  b = b || {};
  if (!EVENTS.includes(b.e) || SERVER_ONLY.includes(b.e)) return res.status(204).end();
  const store = getStore();
  if (!(await store.rateLimit('ev:' + ipKey(req), 300, 3600))) return res.status(204).end();
  await store.incrEvent(b.e, {
    variant: b.v === 'b' ? 'b' : 'a',
    device: ['mobile', 'tablet', 'desktop'].includes(b.d) ? b.d : 'mobile',
    utmContent: String(b.utm_content || '').replace(/[^a-zA-Z0-9_\-.]/g, '').slice(0, 60),
  });
  return res.status(204).end();
}
