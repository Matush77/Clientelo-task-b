// Transactional e-mail via Brevo (https://developers.brevo.com/reference/sendtransacemail).
// Without BREVO_API_KEY the mail is kept in an in-memory outbox (tests) and, locally, written to mail-outbox/ for preview.
import { mkdirSync, writeFileSync } from 'node:fs';

const outbox = [];
export const getOutbox = () => outbox;
export const clearOutbox = () => { outbox.length = 0; };

export async function sendMail({ to, toName, subject, html, text, replyTo, tags = [] }) {
  const key = process.env.BREVO_API_KEY;
  if (!key) {
    outbox.push({ to, toName, subject, html, text, replyTo, tags });
    if (!process.env.VERCEL && process.env.NODE_ENV !== 'test') {
      try { mkdirSync('mail-outbox', { recursive: true }); writeFileSync(`mail-outbox/${Date.now()}-${tags[0] || 'mail'}.html`, html); } catch { /* preview only */ }
      console.log(`[mail:console] → ${to} | ${subject}`);
    }
    return { mock: true };
  }
  const from = process.env.MAIL_FROM;
  if (!from) throw new Error('MAIL_FROM is not set');
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': key, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { email: from, name: process.env.MAIL_FROM_NAME || 'Veenos' },
      to: [{ email: to, ...(toName ? { name: toName } : {}) }],
      subject, htmlContent: html, textContent: text,
      ...(replyTo ? { replyTo } : {}),
      ...(tags.length ? { tags } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Brevo ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}
