// The comparison e-mail (design: design/previews/v12-email.html). Table layout, inline styles, 600 px:
// renders in Gmail, Outlook and Apple Mail. All numbers come from the shared model.
import { compare, formatCzk, formatPct, ROUTES, ASSUMPTIONS, DATA_AS_OF } from '../public/js/model.js';

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const site = () => (process.env.SITE_URL || 'https://veenos.vercel.app').replace(/\/$/, '');
const maskPhone = p => p ? p.replace(/\d(?=(?:\D*\d){3})/g, '•') : '';
const LOGO = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M2.5 8.5 L9.5 19 L20.5 4.5' stroke='%23cfe68a' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14.5 4 H21 V10.5' stroke='%23cfe68a' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const FONT = `font-family:Manrope,Arial,Helvetica,sans-serif;`;

export function renderComparisonEmail({ monthly, years, help = false, phone = '' }) {
  const rows = compare(monthly, years);
  const best = rows[0], max = rows[rows.length - 1].total;
  const m = monthly.toLocaleString('cs-CZ');
  const date = new Date().toLocaleDateString('cs-CZ');
  const subject = `Vaše srovnání S&P 500 ETF: ${best.ticker} vychází nejlevněji`;
  const preheader = `Nejlevněji vychází ${best.ticker}: ${formatCzk(best.total)} za ${years} let. Podívejte se, z čeho se náklady skládají.`;

  const bar = (r, i) => {
    const w = Math.max(5, Math.round(100 * r.total / max));
    const color = i === 0 ? '#8fae2f' : '#a9aaa4';
    return `<tr><td style="${FONT}font-size:14px;font-weight:800;padding-bottom:6px;">${r.ticker}</td><td align="right" style="${FONT}font-size:14px;font-weight:800;padding-bottom:6px;${i === 0 ? 'color:#5f7d14;' : ''}">${formatCzk(r.total)}</td></tr>
      <tr><td colspan="2" style="padding-bottom:14px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td width="${w}%" bgcolor="${color}" style="height:9px;border-radius:9px;font-size:0;line-height:0;">&nbsp;</td>${w < 100 ? `<td bgcolor="#e6e4dd" style="height:9px;font-size:0;line-height:0;">&nbsp;</td>` : ''}</tr></table></td></tr>`;
  };
  const td = `style="${FONT}border-top:1px solid #ebe9e3;padding:11px 0;font-size:13px;" align="right"`;
  const small = s => `<br><span style="color:#8a8b82;font-size:11.5px;">${s}</span>`;
  const breakdown = rows.map((r, i) => `<tr>
      <td style="${FONT}border-top:1px solid #ebe9e3;padding:11px 0;font-size:13px;"><b>${r.ticker}</b>${small(`${esc(r.fund.issuer)} · ${esc(r.fund.listing)} · přes ${esc(r.route.name)}`)}</td>
      <td ${td}>${formatCzk(r.feeCost)}${small(formatPct(r.fund.ter) + ' ročně')}</td>
      <td ${td}>${formatCzk(r.buyCost)}${small(r.route.commissionUsd ? 'provize + směna' : 'směna ' + formatPct(r.route.fx))}</td>
      <td ${td}><b style="${i === 0 ? 'color:#5f7d14;' : ''}">${formatCzk(r.total)}</b></td></tr>`).join('');
  const point = (n, t) => `<tr><td width="26" valign="top" style="${FONT}padding:4px 0;color:#5f7d14;font-weight:800;font-size:14.5px;">${n}</td><td style="${FONT}padding:4px 0;font-size:14.5px;line-height:1.55;color:#3a3b36;">${t}</td></tr>`;
  const callBox = help ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:26px;background:#18191c;border-radius:20px;"><tr><td style="${FONT}padding:22px;">
      <div style="font-size:16px;font-weight:800;color:#f3f3ef;">Brzy vám zavoláme</div>
      <div style="font-size:14px;line-height:1.55;color:#c9cac4;margin-top:6px;">Ozveme se do 2 pracovních dnů na číslo <span style="color:#f3f3ef;">${esc(maskPhone(phone))}</span> a projdeme s vámi výpočet i to, jak nakupovat u brokera. Nehodí se vám to? Stačí odpovědět na tento e-mail.</div>
    </td></tr></table>` : '';

  const html = `<!doctype html><html lang="cs"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><title>${esc(subject)}</title>
<style>@media (max-width:620px){.container{width:100%!important}.px{padding-left:20px!important;padding-right:20px!important}.h1{font-size:28px!important}.big{font-size:32px!important}}</style></head>
<body style="margin:0;padding:0;background:#eeede8;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#eeede8"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;">
  <tr><td class="px" bgcolor="#18191c" style="${FONT}background:#18191c;border-radius:24px 24px 0 0;padding:28px 36px 30px;">
    <div style="font-size:21px;font-weight:800;letter-spacing:-0.9px;color:#f3f3ef;"><img alt="" width="22" height="22" style="vertical-align:-4px;margin-right:6px;" src="${LOGO}">veenos</div>
    <div class="h1" style="font-size:34px;line-height:1.12;font-weight:800;letter-spacing:-1.4px;color:#f3f3ef;margin-top:30px;">Vaše srovnání<br><span style="color:#cfe68a;">S&amp;P 500 ETF</span></div>
    <div style="font-size:14px;color:#a3a49f;margin-top:10px;">${m} Kč měsíčně · ${years} let · výpočet z ${date}</div>
  </td></tr>
  <tr><td class="px" bgcolor="#ffffff" style="${FONT}background:#ffffff;padding:32px 36px 8px;color:#18191c;">
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;">Dobrý den,</p>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#3a3b36;">děkujeme, že jste si u nás spočítali náklady. Posíláme celé srovnání čtyř fondů, které sledují stejný index S&amp;P 500: tří amerických z burzy NYSE (SPY, IVV, VOO) a jednoho evropského (CSPX).</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f5f0;border-radius:20px;"><tr><td style="${FONT}padding:24px 22px 22px;">
      <div style="font-size:13px;color:#6f706a;">Nejlevněji vám z Česka vyjde</div>
      <div class="big" style="font-size:38px;font-weight:800;letter-spacing:-1.6px;line-height:1.1;margin-top:4px;">${best.ticker} <span style="color:#5f7d14;">${formatCzk(best.total)}</span></div>
      <div style="font-size:13px;color:#6f706a;margin-top:2px;">celkové náklady za ${years} let</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:22px;">${rows.map(bar).join('')}</table>
    </td></tr></table>
    <div style="font-size:19px;font-weight:800;letter-spacing:-0.6px;margin:34px 0 12px;">Z čeho se náklady skládají</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="${FONT}padding:0 0 8px;font-weight:700;color:#6f706a;font-size:11.5px;">Fond</td><td align="right" style="${FONT}padding:0 0 8px;font-weight:700;color:#6f706a;font-size:11.5px;">Poplatek fondu</td><td align="right" style="${FONT}padding:0 0 8px;font-weight:700;color:#6f706a;font-size:11.5px;">Nákup z ČR</td><td align="right" style="${FONT}padding:0 0 8px;font-weight:700;color:#6f706a;font-size:11.5px;">Celkem</td></tr>
      ${breakdown}
    </table>
    <div style="font-size:19px;font-weight:800;letter-spacing:-0.6px;margin:34px 0 10px;">Co z toho plyne</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${point(1, 'Všechny čtyři fondy kopírují stejný index, liší se hlavně cenou.')}
      ${point(2, 'Nejnižší poplatek fondu mají IVV a VOO (0,03 % ročně).')}
      ${point(3, 'Americké fondy ale v Česku koupíte jen přes Fio nebo Patria. Provize a směna na dolary je prodraží.')}
      ${point(4, 'Evropský CSPX nabízí většina brokerů, a proto z Česka vychází nejlevněji.')}
    </table>
    ${callBox}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0 8px;"><tr><td align="center">
      <a href="${site()}/navod?utm_source=email&amp;utm_medium=email&amp;utm_campaign=srovnani" style="${FONT}display:inline-block;background:#cfe68a;color:#18191c;font-weight:800;font-size:15px;text-decoration:none;padding:15px 28px;border-radius:999px;">Návod: jak koupit ETF u brokera</a>
    </td></tr></table>
    <p style="margin:26px 0 0;font-size:15px;line-height:1.6;">Hezký den<br><b>Tým Veenos</b></p>
  </td></tr>
  <tr><td class="px" bgcolor="#ffffff" style="background:#ffffff;padding:26px 36px 30px;border-radius:0 0 24px 24px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f5f0;border-radius:16px;"><tr><td style="${FONT}padding:18px;font-size:12px;line-height:1.6;color:#55564f;">
      <b style="color:#18191c;">Předpoklady a zdroje.</b> Výnos ${formatPct(ASSUMPTIONS.annualReturn)} ročně před náklady, vklad ${m} Kč každý měsíc, americké fondy nakupované jednou za čtvrtletí. Poplatky fondů: State Street, BlackRock (iShares), Vanguard. Fio: ${ROUTES.fio.commissionUsd.toLocaleString('cs-CZ')} USD za pokyn, kurzová přirážka přibližně ${formatPct(ROUTES.fio.fx)} (orientačně). XTB: 0 % provize, směna ${formatPct(ROUTES.xtb.fx)}. Kurz USD ČNB ${ASSUMPTIONS.usdCzk.toLocaleString('cs-CZ')} Kč. Data k ${new Date(DATA_AS_OF).toLocaleDateString('cs-CZ')}.
    </td></tr></table>
  </td></tr>
  <tr><td class="px" style="${FONT}padding:22px 36px 8px;font-size:11.5px;line-height:1.6;color:#8a8b82;">
    Ilustrativní výpočet, nejde o investiční doporučení. Veenos není investiční poradce ani obchodník s cennými papíry. Investování nese riziko ztráty a minulé výnosy nejsou zárukou budoucích.<br><br>
    Tento e-mail jste dostali, protože jste si srovnání vyžádali na veenos. <a href="${site()}/ochrana-udaju" style="color:#55564f;">Ochrana osobních údajů</a>
  </td></tr>
</table></td></tr></table></body></html>`;

  const text = [
    `Vaše srovnání S&P 500 ETF (${m} Kč měsíčně, ${years} let)`, '',
    `Nejlevněji vám z Česka vyjde ${best.ticker}: ${formatCzk(best.total)} za ${years} let.`, '',
    ...rows.map(r => `${r.ticker}: ${formatCzk(r.total)} (poplatek fondu ${formatCzk(r.feeCost)}, nákup z ČR ${formatCzk(r.buyCost)})`), '',
    help ? 'Brzy vám zavoláme a projdeme s vámi výpočet.\n' : '',
    `Návod: ${site()}/navod`, '',
    'Ilustrativní výpočet, nejde o investiční doporučení. Investování nese riziko ztráty.',
  ].join('\n');

  return { subject, html, text, preheader };
}

export function renderTeamEmail(lead) {
  const rows = compare(lead.monthly, lead.years);
  const subject = `Žádost o zavolání: ${lead.name}`;
  const lines = [
    `Jméno: ${lead.name}`, `E-mail: ${lead.email}`, `Telefon: ${lead.phone}`,
    `Zadání: ${lead.monthly} Kč měsíčně, ${lead.years} let`,
    `Výsledek: ${rows.map(r => `${r.ticker} ${formatCzk(r.total)}`).join(', ')}`,
    `Varianta: ${lead.variant} · zařízení: ${lead.device} · utm_content: ${lead.utm_content || '-'}`,
    '', 'Pozor: hovor slouží k pomoci s postupem (broker, výpočet). Doporučení konkrétního fondu konkrétnímu člověku je investiční poradenství a vyžaduje licenci.',
  ];
  return { subject, text: lines.join('\n'), html: `<pre style="font:14px/1.5 Menlo,Consolas,monospace">${esc(lines.join('\n'))}</pre>` };
}
