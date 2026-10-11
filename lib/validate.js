// Server-side validation of the lead form. Client values are never trusted: numbers are recomputed from monthly/years.
import { isAllowed } from '../public/js/model.js';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_RE = /^\+?[0-9 ]{9,16}$/;
const DEVICES = ['mobile', 'tablet', 'desktop'];
const clean = (s, max) => String(s ?? '').replace(/[\u0000-\u001f\u007f<>]/g, '').trim().slice(0, max);
export const MIN_FILL_MS = 1000;  // faster than a person with autofill (tap suggestion + send ≈ 1.5 s); the honeypot catches most bots

export function validateLead(b = {}) {
  // bots: honeypot filled or form submitted faster than a human could → pretend success, do nothing
  if (clean(b.company, 100) || !(Number(b.elapsedMs) >= MIN_FILL_MS)) return { ok: false, spam: true };
  const name = clean(b.name, 80);
  const email = clean(b.email, 120).toLowerCase();
  const help = b.help === true;
  const phone = help ? clean(b.phone, 20).replace(/\s+/g, ' ') : '';
  const monthly = Number(b.monthly), years = Number(b.years);
  if (!name) return { ok: false, error: 'name' };
  if (!EMAIL_RE.test(email)) return { ok: false, error: 'email' };
  if (help && !PHONE_RE.test(phone)) return { ok: false, error: 'phone' };
  if (!isAllowed(monthly, years)) return { ok: false, error: 'input' };
  return {
    ok: true,
    lead: {
      name, email, help, phone, tips: b.tips === true, monthly, years,
      variant: b.variant === 'b' ? 'b' : 'a',
      device: DEVICES.includes(b.device) ? b.device : 'mobile',
      utm_source: clean(b.utm_source, 60), utm_medium: clean(b.utm_medium, 60),
      utm_campaign: clean(b.utm_campaign, 60), utm_content: clean(b.utm_content, 60),
    },
  };
}
