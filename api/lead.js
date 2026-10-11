// POST /api/lead: validate, store the lead, send the comparison e-mail (and a call-back notice to the team).
import { createHash } from 'node:crypto';
import { getStore } from '../lib/store.js';
import { sendMail } from '../lib/mailer.js';
import { validateLead } from '../lib/validate.js';
import { renderComparisonEmail, renderTeamEmail } from '../lib/email-template.js';

export const ipKey = req => {
  const ip = String(req.headers?.['x-forwarded-for'] || '').split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
  return createHash('sha256').update(ip + new Date().toISOString().slice(0, 10)).digest('hex').slice(0, 16); // no raw IP stored
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method' });
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }

  const v = validateLead(body || {});
  if (!v.ok) return v.spam ? res.status(200).json({ ok: true }) : res.status(400).json({ ok: false, error: v.error });

  const store = getStore();
  if (!(await store.rateLimit('lead:' + ipKey(req), 5, 3600))) return res.status(429).json({ ok: false, error: 'rate' });

  const lead = { ...v.lead, createdAt: new Date().toISOString() };
  const meta = { variant: lead.variant, device: lead.device, utmContent: lead.utm_content };
  await store.addLead(lead);

  try {
    const mail = renderComparisonEmail(lead);
    await sendMail({ to: lead.email, toName: lead.name, subject: mail.subject, html: mail.html, text: mail.text, tags: ['srovnani'] });
    if (lead.help && process.env.TEAM_EMAIL) {
      const t = renderTeamEmail(lead);
      await sendMail({ to: process.env.TEAM_EMAIL, subject: t.subject, html: t.html, text: t.text, replyTo: { email: lead.email, name: lead.name }, tags: ['callback'] });
    }
  } catch (e) {
    console.error('[lead] mail failed:', e.message);
    await store.incrEvent('lead_error', meta);
    return res.status(502).json({ ok: false, error: 'mail' });
  }

  await store.incrEvent('lead_ok', meta);
  return res.status(200).json({ ok: true });
}
