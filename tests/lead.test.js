import test, { beforeEach } from 'node:test';
import assert from 'node:assert/strict';

process.env.NODE_ENV = 'test';
delete process.env.BREVO_API_KEY;
delete process.env.UPSTASH_REDIS_REST_URL;
delete process.env.KV_REST_API_URL;

const { default: lead } = await import('../api/lead.js');
const { default: event } = await import('../api/event.js');
const { default: stats } = await import('../api/stats.js');
const { getOutbox, clearOutbox } = await import('../lib/mailer.js');
const { getStore } = await import('../lib/store.js');

let ipCounter = 0;
function call(handler, { method = 'POST', body = {}, query = {}, ip } = {}) {
  return new Promise(resolve => {
    const res = { statusCode: 200, headers: {}, body: undefined };
    res.status = c => { res.statusCode = c; return res; };
    res.json = o => { res.body = o; resolve(res); return res; };
    res.send = t => { res.body = t; resolve(res); return res; };
    res.end = () => { resolve(res); return res; };
    res.setHeader = (k, v) => { res.headers[k] = v; };
    handler({ method, body, query, headers: { 'x-forwarded-for': ip || `10.0.0.${++ipCounter}` } }, res);
  });
}
const valid = (extra = {}) => ({ name: 'Jan Novák', email: 'jan@example.cz', monthly: 3000, years: 20, help: false, tips: false, company: '', elapsedMs: 8000, variant: 'a', device: 'mobile', utm_content: 'ad_a', ...extra });

beforeEach(() => { clearOutbox(); getStore()._reset(); delete process.env.TEAM_EMAIL; });

test('valid lead → 200, stored, one comparison e-mail to the visitor', async () => {
  const r = await call(lead, { body: valid() });
  assert.equal(r.statusCode, 200); assert.equal(r.body.ok, true);
  assert.equal(getStore()._leads().length, 1);
  assert.equal(getOutbox().length, 1);
  assert.equal(getOutbox()[0].to, 'jan@example.cz');
  assert.match(getOutbox()[0].subject, /CSPX vychází nejlevněji/);
});

test('"Chci pomoct" with phone → second e-mail to the team', async () => {
  process.env.TEAM_EMAIL = 'team@example.cz';
  const r = await call(lead, { body: valid({ help: true, phone: '+420 777 123 456' }) });
  assert.equal(r.statusCode, 200);
  assert.equal(getOutbox().length, 2);
  assert.equal(getOutbox()[1].to, 'team@example.cz');
  assert.match(getOutbox()[0].html, /Brzy vám zavoláme/);
});

test('validation errors → 400', async () => {
  assert.equal((await call(lead, { body: valid({ email: 'nope' }) })).body.error, 'email');
  assert.equal((await call(lead, { body: valid({ name: '  ' }) })).body.error, 'name');
  assert.equal((await call(lead, { body: valid({ help: true, phone: '' }) })).body.error, 'phone');
  assert.equal((await call(lead, { body: valid({ monthly: 2500 }) })).body.error, 'input');
  assert.equal(getOutbox().length, 0);
});

test('phone is ignored when help is off', async () => {
  await call(lead, { body: valid({ help: false, phone: '+420 777 123 456' }) });
  assert.equal(getStore()._leads()[0].phone, '');
});

test('bots (honeypot / too fast) get 200 but nothing is stored or sent', async () => {
  await call(lead, { body: valid({ company: 'Spam s.r.o.' }) });
  await call(lead, { body: valid({ elapsedMs: 300 }) });
  assert.equal(getStore()._leads().length, 0);
  assert.equal(getOutbox().length, 0);
});

test('rate limit: 6th lead from the same IP within an hour → 429', async () => {
  for (let i = 0; i < 5; i++) assert.equal((await call(lead, { body: valid(), ip: '1.2.3.4' })).statusCode, 200);
  assert.equal((await call(lead, { body: valid(), ip: '1.2.3.4' })).statusCode, 429);
});

test('events: whitelisted only, counted per variant; stats aggregate the funnel', async () => {
  await call(event, { body: JSON.stringify({ e: 'page_view', v: 'b', d: 'tablet', utm_content: 'ad_b' }) });
  await call(event, { body: JSON.stringify({ e: 'calc_compare', v: 'b', d: 'tablet' }) });
  await call(event, { body: JSON.stringify({ e: 'lead_ok', v: 'b' }) });      // server-only → ignored
  await call(event, { body: JSON.stringify({ e: 'evil', v: 'b' }) });         // unknown → ignored
  await call(lead, { body: valid({ variant: 'b', device: 'tablet' }) });       // real lead_ok
  const s = await call(stats, { method: 'GET' });
  assert.equal(s.body.byVariant.b.page_view, 1);
  assert.equal(s.body.byVariant.b.calc_compare, 1);
  assert.equal(s.body.byVariant.b.lead_ok, 1);
  assert.equal(s.body.byVariant.b.evil, undefined);
  assert.equal(s.body.byAd.ad_b.page_view, 1);
  assert.equal(s.body.conversion.b, 100);
});
