import { compare, formatCzk, formatPct, isAllowed, FUNDS, WORLD_FUNDS, ROUTES, ASSUMPTIONS, DATA_AS_OF, LISTING_SOURCE } from './model.js';
import { TRACKERS } from './config.js';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const B = document.body;
const VARIANT = document.documentElement.dataset.v || 'a';
const desktop = () => matchMedia('(min-width: 1100px)').matches;

/* ---------- funnel tracking: cookie-free, nothing stored on the device ---------- */
const params = new URLSearchParams(location.search);
const UTM = Object.fromEntries(['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].map(k => [k, (params.get(k) || '').slice(0, 60)]));
const PID = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2)); // per page load, in memory only
const DEVICE = innerWidth < 700 ? 'mobile' : innerWidth < 1100 ? 'tablet' : 'desktop';
const sent = new Set();
function track(e, extra = {}, once = true) {
  if (once && sent.has(e)) return;
  sent.add(e);
  const body = JSON.stringify({ e, v: VARIANT, pid: PID, d: DEVICE, ...UTM, ...extra });
  try {
    if (!(navigator.sendBeacon && navigator.sendBeacon('/api/event', body))) {
      fetch('/api/event', { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'text/plain' } }).catch(() => {});
    }
  } catch { /* tracking must never break the page */ }
}
track('page_view');

addEventListener('scroll', () => B.classList.toggle('scrolled', scrollY > 30), { passive: true });

/* ---------- dialogs (menu, form, cookie settings): focus trap + Esc ---------- */
let lastFocus = null;
const openDialogs = [];
function openDialog(el, cls) {
  lastFocus = document.activeElement;
  B.classList.add(cls);
  openDialogs.push({ el, cls });
  syncLock();
  setTimeout(() => (el.querySelector('input:not([type=checkbox]):not([tabindex="-1"])') || el.querySelector('button, a') || el).focus(), 60);
}
function closeDialog(cls) {
  B.classList.remove(cls);
  const i = openDialogs.findIndex(d => d.cls === cls);
  if (i > -1) openDialogs.splice(i, 1);
  syncLock();
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
// While a dialog is open the page behind it does not scroll.
function syncLock() { document.documentElement.classList.toggle('lock', openDialogs.length > 0); }
document.addEventListener('keydown', e => {
  const top = openDialogs[openDialogs.length - 1];
  if (!top) return;
  if (e.key === 'Escape') { closeDialog(top.cls); if (top.cls === 'menu-open') $('.js-menu').setAttribute('aria-expanded', 'false'); }
  if (e.key === 'Tab') {
    const f = $$('a[href], button:not([disabled]), input:not([type=hidden]):not([tabindex="-1"])', top.el).filter(x => x.offsetParent !== null && getComputedStyle(x).visibility !== 'hidden');
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});

/* ---------- menu ---------- */
const menuBtn = $('.js-menu');
menuBtn.addEventListener('click', () => { menuBtn.setAttribute('aria-expanded', 'true'); openDialog($('#menu'), 'menu-open'); });
$('.js-mclose').addEventListener('click', () => { menuBtn.setAttribute('aria-expanded', 'false'); closeDialog('menu-open'); });
$$('.js-mlink').forEach(a => a.addEventListener('click', () => { menuBtn.setAttribute('aria-expanded', 'false'); B.classList.remove('menu-open'); openDialogs.length = 0; syncLock(); }));

/* ---------- calculator ---------- */
let monthly = null, years = null;
const goBtn = $('.js-go'), calc = $('#calc'), result = $('#result');
function pick(group, value) {
  $$(group + ' .chip').forEach(c => c.setAttribute('aria-pressed', String(Number(c.dataset.v) === value)));
}
function need(group, on) { const g = $(group); g.classList.toggle('need', on); $('#' + g.getAttribute('aria-labelledby')).classList.toggle('need', on); }
// Tapping the selected chip again clears it.
$$('.js-m .chip').forEach(c => c.addEventListener('click', () => { const v = Number(c.dataset.v); monthly = monthly === v ? null : v; pick('.js-m', monthly); need('.js-m', false); track('calc_select'); }));
$$('.js-y .chip').forEach(c => c.addEventListener('click', () => { const v = Number(c.dataset.v); years = years === v ? null : v; pick('.js-y', years); need('.js-y', false); track('calc_select'); }));
$$('.chips').forEach(g => g.addEventListener('animationend', () => g.classList.remove('need')));
$('.js-start').addEventListener('click', () => track('hero_cta'));
$('.js-mstart').addEventListener('click', () => track('hero_cta'));
$('.js-totop').addEventListener('click', () => track('hero_cta'));

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const BAR_MS = 1600, STAGGER_MS = 140;
const ease = t => 1 - Math.pow(1 - t, 3);
// Bars grow and amounts count up together, once the bars are on screen (on phones the page is still scrolling to them).
function playBars() {
  const items = $$('.js-bars .br');
  if (reduced()) { items.forEach(li => { $('.fill', li).style.width = $('.fill', li).dataset.w + '%'; $('.num', li).textContent = formatCzk(+$('.num', li).dataset.to); }); return; }
  items.forEach((li, i) => {
    const fill = $('.fill', li), num = $('.num', li), to = +num.dataset.to, delay = i * STAGGER_MS;
    fill.style.transitionDelay = delay + 'ms';
    fill.style.width = fill.dataset.w + '%';
    const start = performance.now() + delay;
    const step = now => {
      const t = Math.min(1, Math.max(0, (now - start) / BAR_MS));
      num.textContent = formatCzk(Math.round(ease(t) * to / 100) * 100);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}
let barsObs = null;
function renderResult(animate = true) {
  const rows = compare(monthly, years), max = rows[rows.length - 1].total;
  $('.js-ctx').textContent = `${monthly.toLocaleString('cs-CZ')} Kč měsíčně · ${years} let`;
  $('.js-ttl').textContent = `Náklady za ${years} let`;
  // The counting number is hidden from screen readers; they get the final amount once.
  $('.js-bars').innerHTML = rows.map((r, i) => `<li class="br${i === 0 ? ' w' : ''}"><div class="t"><b>${r.ticker}</b><span><i class="num" aria-hidden="true" data-to="${r.total}">${formatCzk(0)}</i><span class="sr-only">${formatCzk(r.total)}</span></span></div><div class="track" aria-hidden="true"><div class="fill" data-w="${Math.max(5, 100 * r.total / max).toFixed(1)}"></div></div></li>`).join('');
  // Bonus teaser: real bar lengths, amounts masked (digits shown as 8 and blurred); the real numbers are only in the e-mail.
  const world = compare(monthly, years, WORLD_FUNDS), wmax = Math.max(...world.map(r => r.total));
  $('.js-more').innerHTML = world.map(r => `<li><div class="t"><span>${r.ticker}</span><span class="hid">${formatCzk(r.total).replace(/\d/g, '8')}</span></div><div class="track"><div class="fill" style="width:${Math.max(8, 100 * r.total / wmax).toFixed(1)}%"></div></div></li>`).join('');
  result.hidden = false;
  calc.classList.add('has-result');
  if (animate) { result.classList.add('enter'); requestAnimationFrame(() => requestAnimationFrame(() => result.classList.remove('enter'))); }
  if (barsObs) barsObs.disconnect();
  barsObs = new IntersectionObserver((entries, obs) => {
    if (entries.some(en => en.isIntersecting)) { obs.disconnect(); setTimeout(playBars, animate ? 200 : 0); }
  }, { threshold: 0.6 });
  barsObs.observe($('.js-bars'));
}
goBtn.addEventListener('click', () => {
  if (!monthly || !years) {
    // No greyed-out button: point at what is still missing instead.
    if (!monthly) need('.js-m', true);
    if (!years) need('.js-y', true);
    $((!monthly ? '.js-m' : '.js-y') + ' .chip').focus();
    return;
  }
  if (!isAllowed(monthly, years)) return;
  renderResult();
  track('calc_compare', { m: monthly, y: years });
  if (!desktop()) setTimeout(() => result.scrollIntoView({ behavior: 'smooth' }), 80);
  else $('.js-back').focus({ preventScroll: true });
});
$('.js-back').addEventListener('click', () => { calc.classList.remove('has-result'); result.hidden = true; goBtn.focus(); });
new IntersectionObserver((entries, obs) => {
  if (entries.some(en => en.isIntersecting && !result.hidden)) { track('result_view'); obs.disconnect(); }
}, { threshold: 0.5 }).observe(result);

/* ---------- "Jak počítáme" rendered from the same data as the calculator ---------- */
const link = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
const fio = ROUTES.fio, xtb = ROUTES.xtb;
$('.js-how').innerHTML = `
  <div class="it"><h3>Poplatek fondu</h3><ul>${FUNDS.map(f => `<li><b>${f.ticker}</b> ${formatPct(f.ter)} ročně · ${link(f.source, f.issuer)}</li>`).join('')}</ul></div>
  <div class="it"><h3>Nákup z Česka</h3><p>Americké fondy (${FUNDS.filter(f => f.route === 'fio').map(f => f.ticker).join(', ')}) přes ${fio.name}: ${fio.commissionUsd.toLocaleString('cs-CZ')} USD za pokyn, směna přibližně ${formatPct(fio.fx)} (${link(fio.sources[0], 'ceník')}, ${link(fio.sources[1], 'kurzy')}), nákup jednou za čtvrtletí. CSPX přes ${xtb.name}: 0 % provize, směna ${formatPct(xtb.fx)} (${link(xtb.sources[0], 'ceník')}).</p></div>
  <div class="it"><h3>Kurz a výnos</h3><p>Kurz USD ${ASSUMPTIONS.usdCzk.toLocaleString('cs-CZ')} Kč (${link(ASSUMPTIONS.usdCzkSource, 'ČNB')}). Výnos ${formatPct(ASSUMPTIONS.annualReturn)} ročně před náklady pro všechny fondy, vklad každý měsíc, prodej na konci.</p></div>
  <div class="it"><h3>Proč jen Fio?</h3><p>Fondy z NYSE nemají český dokument KID (nařízení PRIIPs), proto je většina brokerů drobným investorům v EU neprodává. Burza: NYSE Arca (${link(LISTING_SOURCE, 'Nasdaq Trader')}).</p></div>`;
$('.js-asof').textContent = `Data k ${new Date(DATA_AS_OF).toLocaleDateString('cs-CZ')}. Ilustrativní výpočet, nejde o investiční doporučení.`;

/* ---------- FAQ: one answer open at a time ---------- */
$$('.js-faq .qa-q').forEach(btn => btn.addEventListener('click', () => {
  const item = btn.closest('.qa'), open = !item.classList.contains('open');
  $$('.js-faq .qa.open').forEach(o => { o.classList.remove('open'); $('.qa-q', o).setAttribute('aria-expanded', 'false'); });
  item.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', String(open));
  if (open) track('faq_open');
}));

/* ---------- lead form ---------- */
const form = $('.js-form'), F = form.elements, tg = $('.js-tg'), phoneWrap = $('#f-phone-wrap'), tel = $('#f-tel'), err = $('.js-err'), submitBtn = $('.js-submit');
let openedAt = 0;
$('.js-open').addEventListener('click', () => { openedAt = Date.now(); track('form_open'); openDialog(form, 'sheet-open'); });
$$('.js-close').forEach(el => el.addEventListener('click', () => closeDialog('sheet-open')));
form.addEventListener('focusin', e => { if (e.target.matches('input[name=name], input[name=email]')) track('form_start'); });
tg.addEventListener('click', () => {
  const on = tg.getAttribute('aria-checked') !== 'true';
  tg.setAttribute('aria-checked', String(on));
  phoneWrap.classList.toggle('on', on); tel.required = on;
  if (on) { track('help_on'); tel.focus({ preventScroll: true }); }
  else if (tel.getAttribute('aria-invalid')) { tel.removeAttribute('aria-invalid'); err.hidden = true; }
});
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9 ]{9,16}$/;
function invalid(input, msg) { input.setAttribute('aria-invalid', 'true'); err.textContent = msg; err.hidden = false; input.focus(); return false; }
function validate() {
  $$('input', form).forEach(i => i.removeAttribute('aria-invalid')); err.hidden = true;
  if (!F['name'].value.trim()) return invalid(F['name'], 'Vyplňte prosím jméno.');
  if (!EMAIL_RE.test(F['email'].value.trim())) return invalid(F['email'], 'Zkontrolujte prosím e-mail.');
  if (tel.required && !PHONE_RE.test(tel.value.trim())) return invalid(tel, 'Zadejte prosím telefon, např. +420 777 123 456.');
  return true;
}
form.addEventListener('submit', async e => {
  e.preventDefault();
  if (!validate()) return;
  track('form_submit');
  submitBtn.disabled = true; submitBtn.textContent = 'Odesílám…';
  const help = tg.getAttribute('aria-checked') === 'true';
  const payload = {
    name: F['name'].value.trim(), email: F['email'].value.trim(), help, phone: help ? tel.value.trim() : '',
    tips: F['tips'].checked, company: F['company'].value, elapsedMs: Date.now() - openedAt,
    monthly, years, variant: VARIANT, device: DEVICE, pid: PID, ...UTM,
  };
  try {
    const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || 'server');
    closeDialog('sheet-open');
    $('.js-pre').hidden = true; $('.js-post').hidden = false;
    $('.js-sentp').textContent = help ? 'Celé srovnání najdete v e-mailu. Brzy se vám ozveme.' : 'Celé srovnání najdete v e-mailu.';
    $('.js-post').focus({ preventScroll: true });  // the button that opened the form is gone; keep focus on the confirmation
    if (!desktop()) setTimeout(() => result.scrollIntoView({ behavior: 'smooth' }), 300);
  } catch (ex) {
    err.textContent = ex.message === 'rate' ? 'Příliš mnoho pokusů, zkuste to prosím za chvíli.' : 'Odeslání se nepovedlo. Zkuste to prosím znovu.';
    err.hidden = false;
  } finally {
    submitBtn.disabled = false; submitBtn.textContent = 'Poslat srovnání';
  }
});

/* ---------- cookie consent (showcase): choice stored as a strictly necessary setting ---------- */
const CK = 'veenos_consent', MONTH = 30 * 24 * 3600 * 1000;
const an = $('.js-an'), mk = $('.js-mk');
function readConsent() {
  try {
    const c = JSON.parse(localStorage.getItem(CK) || 'null');
    if (!c) return null;
    const ttl = (c.a || c.m) ? 12 * MONTH : 6 * MONTH;  // must match public/js/variant.js  // ask again after 12 months, or 6 months after a refusal
    return Date.now() - c.t < ttl ? c : null;
  } catch { return null; }
}
function setSwitch(el, on) { el.setAttribute('aria-checked', String(on)); }
function loadTrackers(c) {
  // Inactive in the showcase: IDs are empty, so nothing third-party is ever loaded.
  if (c.a && TRACKERS.ga4) { const s = document.createElement('script'); s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(TRACKERS.ga4)}`; document.head.append(s); }
  if (c.m && TRACKERS.metaPixel) { const s = document.createElement('script'); s.async = true; s.src = 'https://connect.facebook.net/en_US/fbevents.js'; document.head.append(s); }
}
function saveConsent(a, m) {
  const c = { a, m, t: Date.now() };
  try { localStorage.setItem(CK, JSON.stringify(c)); } catch { /* private mode: the banner may show again */ }
  document.documentElement.classList.remove('has-banner'); closeDialog('cs-open');
  track(a || m ? 'consent_accept' : 'consent_reject');
  loadTrackers(c);
}
const consent = readConsent();
if (consent) { setSwitch(an, consent.a); setSwitch(mk, consent.m); loadTrackers(consent); }
else document.documentElement.classList.add('has-banner');
$$('.js-acc').forEach(b => b.addEventListener('click', () => { setSwitch(an, true); setSwitch(mk, true); saveConsent(true, true); }));
$$('.js-rej').forEach(b => b.addEventListener('click', () => { setSwitch(an, false); setSwitch(mk, false); saveConsent(false, false); }));
$('.js-save').addEventListener('click', () => saveConsent(an.getAttribute('aria-checked') === 'true', mk.getAttribute('aria-checked') === 'true'));
[an, mk].forEach(sw => sw.addEventListener('click', () => setSwitch(sw, sw.getAttribute('aria-checked') !== 'true')));
$('.js-set').addEventListener('click', () => openDialog($('.cs'), 'cs-open'));
$('.js-ckfoot').addEventListener('click', () => openDialog($('.cs'), 'cs-open'));
$$('.js-cclose').forEach(el => el.addEventListener('click', () => closeDialog('cs-open')));
