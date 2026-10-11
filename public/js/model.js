// Veenos cost model: the single source of truth for the page, the API (e-mail numbers) and the tests.
// Every data point has a source and an as-of date; facts were verified in research/05-data-facts.md
// and research/99-verification-log.md. Values are illustrative inputs, not investment advice.

export const DATA_AS_OF = '2026-10-09';

export const ASSUMPTIONS = {
  annualReturn: 0.07, // 7 % p.a. before costs (illustrative, same for all funds: they track the same index)
  usdCzk: 21.745,     // ČNB rate for 9 Oct 2026
  usdCzkSource: 'https://api.cnb.cz/cnbapi/exrates/daily?lang=EN',
};

// How a Czech retail investor can buy each fund (research/05: PRIIPs blocks US-domiciled ETFs at most brokers; Fio allows them).
export const ROUTES = {
  fio: {
    name: 'Fio e-Broker',
    commissionUsd: 7.95,   // per order up to 100 shares (US market)
    fx: 0.03,              // CZK↔USD spread vs ČNB, indicative (undated table; e-Broker rates may differ)
    ordersEveryMonths: 3,  // assumption: NYSE funds bought once a quarter (fairer than monthly USD 7.95 orders)
    sources: ['https://www.fio.cz/docs/cz/C_zaklad.pdf', 'https://www.fio.cz/akcie-investice/dalsi-sluzby-fio/devizove-konverze'],
    asOf: '2026-07-01',
  },
  xtb: {
    name: 'XTB',
    commissionUsd: 0,      // 0 % commission on stocks/ETFs up to EUR 100 000 monthly turnover
    fx: 0.005,             // 0.5 % currency conversion
    ordersEveryMonths: 1,
    sources: ['https://www.xtb.com/cz/soubory/tabulka-poplatku-a-provizi.pdf'],
    asOf: '2026-04-29',
  },
};

export const FUNDS = [
  { ticker: 'SPY', name: 'SPDR S&P 500 ETF Trust', issuer: 'State Street', listing: 'NYSE Arca', domicile: 'USA', ter: 0.000945, route: 'fio',
    source: 'https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy', asOf: '2026-10-08' },
  { ticker: 'IVV', name: 'iShares Core S&P 500 ETF', issuer: 'BlackRock (iShares)', listing: 'NYSE Arca', domicile: 'USA', ter: 0.0003, route: 'fio',
    source: 'https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf', asOf: '2026-10-09' },
  { ticker: 'VOO', name: 'Vanguard S&P 500 ETF', issuer: 'Vanguard', listing: 'NYSE Arca', domicile: 'USA', ter: 0.0003, route: 'fio',
    source: 'https://investor.vanguard.com/investment-products/etfs/profile/voo', asOf: '2026-04-28' },
  { ticker: 'CSPX', name: 'iShares Core S&P 500 UCITS ETF (Acc)', issuer: 'BlackRock (iShares)', listing: 'Londýn / Xetra (SXR8)', domicile: 'Irsko', ter: 0.0007, route: 'xtb',
    isin: 'IE00B5BMR087', source: 'https://www.justetf.com/en/etf-profile.html?isin=IE00B5BMR087', asOf: '2026-10-09' },
];

export const LISTING_SOURCE = 'https://www.nasdaqtrader.com/dynamic/SymDir/otherlisted.txt';

export const ALLOWED = { monthly: [1000, 3000, 5000, 10000], years: [5, 10, 20, 30] };

const monthlyRate = r => Math.pow(1 + r, 1 / 12) - 1;

// Future value of a monthly plan. Costs: TER (yearly, charged monthly), FX on every purchase and on the final sale,
// a fixed commission per order; contributions wait in cash until the next order.
export function futureValue(monthly, years, { ter = 0, fx = 0, commissionCzk = 0, ordersEveryMonths = 1 } = {}, annualReturn = ASSUMPTIONS.annualReturn) {
  const r = monthlyRate(annualReturn);
  let value = 0, cash = 0;
  for (let i = 0; i < years * 12; i++) {
    value = value * (1 + r) * (1 - ter / 12);
    cash += monthly;
    if ((i + 1) % ordersEveryMonths === 0) { value += cash * (1 - fx) - commissionCzk; cash = 0; }
  }
  return (value + cash) * (1 - fx);
}

function routeParams(fund) {
  const r = ROUTES[fund.route];
  return { fx: r.fx, commissionCzk: r.commissionUsd * ASSUMPTIONS.usdCzk, ordersEveryMonths: r.ordersEveryMonths };
}

// Total costs in CZK per fund, cheapest first.
// buyCost depends only on the route (identical for SPY/IVV/VOO); feeCost is the rest of the total.
export function compare(monthly, years) {
  const base = futureValue(monthly, years);
  return FUNDS.map(f => {
    const route = routeParams(f);
    const total = base - futureValue(monthly, years, { ter: f.ter, ...route });
    const buyCost = base - futureValue(monthly, years, route);
    return { ticker: f.ticker, total, feeCost: total - buyCost, buyCost, fund: f, route: ROUTES[f.route] };
  }).sort((a, b) => a.total - b.total || a.ticker.localeCompare(b.ticker));
}

export const isAllowed = (monthly, years) => ALLOWED.monthly.includes(monthly) && ALLOWED.years.includes(years);

export const roundCzk = n => Math.round(n / 100) * 100;
export const formatCzk = n => roundCzk(n).toLocaleString('cs-CZ') + ' Kč';
export const formatPct = x => (x * 100).toLocaleString('cs-CZ', { maximumFractionDigits: 4 }) + ' %';
