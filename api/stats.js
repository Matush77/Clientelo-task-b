// GET /api/stats?token=…  (add &format=html for a readable table)
// Funnel from arrival to submitted form, per A/B variant, device and ad (utm_content). Protected by STATS_TOKEN in production.
import { getStore, FUNNEL, OTHER_EVENTS } from '../lib/store.js';

const LABELS = {
  page_view: 'Příchod', hero_cta: 'Klik na CTA v hero', calc_select: 'Výběr v kalkulačce', calc_compare: 'Porovnat 4 fondy',
  result_view: 'Výsledek viděn', form_open: 'Otevřel formulář', form_start: 'Začal vyplňovat', help_on: '„Chci pomoct" zapnuto',
  form_submit: 'Odeslal formulář', lead_ok: 'Lead uložen + e-mail odeslán', lead_error: 'Chyba odeslání',
  consent_accept: 'Cookies: přijal', consent_reject: 'Cookies: odmítl', faq_open: 'Otevřel otázku v FAQ',
};

export function aggregate(raw) {
  const out = { byVariant: {}, byDevice: {}, byAd: {}, byDay: {}, total: {} };
  const add = (bucket, key, event, n) => { bucket[key] ??= {}; bucket[key][event] = (bucket[key][event] || 0) + Number(n); };
  for (const [day, t] of Object.entries(raw)) {
    for (const [field, n] of Object.entries(t.ev || {})) { const [v, e] = field.split(':'); add(out.byVariant, v, e, n); add(out.byDay, day, e, n); out.total[e] = (out.total[e] || 0) + Number(n); }
    for (const [field, n] of Object.entries(t.evd || {})) { const [d, e] = field.split(':'); add(out.byDevice, d, e, n); }
    for (const [field, n] of Object.entries(t.evc || {})) { const i = field.lastIndexOf(':'); add(out.byAd, field.slice(0, i), field.slice(i + 1), n); }
  }
  out.conversion = {};
  for (const [v, c] of Object.entries(out.byVariant)) out.conversion[v] = c.page_view ? +(100 * (c.lead_ok || 0) / c.page_view).toFixed(2) : null;
  return out;
}

const pct = (a, b) => (b ? (100 * a / b).toFixed(1) + ' %' : '–');
function table(title, groups) {
  const keys = Object.keys(groups).sort();
  if (!keys.length) return `<h2>${title}</h2><p>Zatím žádná data.</p>`;
  const head = `<tr><th>Krok</th>${keys.map(k => `<th>${k}</th><th>% z příchodů</th>`).join('')}</tr>`;
  const rows = [...FUNNEL, ...OTHER_EVENTS].map(e => `<tr><td>${LABELS[e]}</td>${keys.map(k => { const n = groups[k][e] || 0; return `<td>${n}</td><td>${pct(n, groups[k].page_view || 0)}</td>`; }).join('')}</tr>`).join('');
  return `<h2>${title}</h2><table>${head}${rows}</table>`;
}

export default async function handler(req, res) {
  const token = process.env.STATS_TOKEN;
  const isProd = !!process.env.VERCEL;
  if ((isProd && !token) || (token && req.query?.token !== token)) return res.status(403).json({ ok: false, error: 'forbidden' });
  const store = getStore();
  const data = aggregate(await store.raw());
  data.leads = await store.leadCount();
  data.store = store.kind;
  if (req.query?.format !== 'html') return res.status(200).json(data);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).send(`<!doctype html><html lang="cs"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Veenos: funnel</title>
<style>body{font:14px/1.5 system-ui,sans-serif;background:#18191c;color:#f3f3ef;padding:24px;max-width:1100px;margin:auto}h1{font-size:24px}h2{font-size:17px;margin-top:28px}table{border-collapse:collapse;width:100%;margin-top:8px}th,td{border-bottom:1px solid #2c2d32;padding:7px 10px;text-align:right}th:first-child,td:first-child{text-align:left}th{color:#a3a49f;font-weight:600}.k{color:#cfe68a;font-weight:800}</style></head><body>
<h1>Veenos: funnel od příchodu po odeslaný formulář</h1>
<p>Leadů celkem: <span class="k">${data.leads}</span> · konverze (lead / příchod): A ${data.conversion.a ?? '–'} %, B ${data.conversion.b ?? '–'} % · úložiště: ${data.store}</p>
${table('Podle varianty (A/B)', data.byVariant)}${table('Podle zařízení', data.byDevice)}${table('Podle reklamy (utm_content)', data.byAd)}
</body></html>`);
}
