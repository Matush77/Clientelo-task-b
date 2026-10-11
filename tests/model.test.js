import test from 'node:test';
import assert from 'node:assert/strict';
import { compare, futureValue, roundCzk, isAllowed, ALLOWED, FUNDS } from '../public/js/model.js';

const byTicker = rows => Object.fromEntries(rows.map(r => [r.ticker, r]));

test('3 000 Kč a month for 20 years matches the approved design numbers', () => {
  const r = byTicker(compare(3000, 20));
  assert.equal(roundCzk(r.CSPX.total), 27900);
  assert.equal(roundCzk(r.IVV.total), 131300);
  assert.equal(roundCzk(r.VOO.total), 131300);
  assert.equal(roundCzk(r.SPY.total), 142100);
});

test('cheapest first; CSPX wins for a Czech investor in every allowed scenario', () => {
  for (const m of ALLOWED.monthly) for (const y of ALLOWED.years) {
    const rows = compare(m, y);
    for (let i = 1; i < rows.length; i++) assert.ok(rows[i - 1].total <= rows[i].total);
    assert.equal(rows[0].ticker, 'CSPX', `${m}/${y}`);
  }
});

test('buying cost depends only on the route; fee cost follows TER', () => {
  const r = byTicker(compare(3000, 20));
  assert.equal(roundCzk(r.SPY.buyCost), roundCzk(r.IVV.buyCost));
  assert.equal(roundCzk(r.IVV.buyCost), roundCzk(r.VOO.buyCost));
  assert.ok(r.SPY.feeCost > r.IVV.feeCost);
  for (const row of Object.values(r)) assert.ok(Math.abs(row.feeCost + row.buyCost - row.total) < 1e-6);
});

test('no costs = no difference; costs never increase the value', () => {
  assert.equal(futureValue(3000, 20), futureValue(3000, 20, {}));
  assert.ok(futureValue(3000, 20, { ter: 0.001 }) < futureValue(3000, 20));
  assert.ok(futureValue(3000, 20, { fx: 0.01 }) < futureValue(3000, 20));
});

test('input whitelist and data completeness', () => {
  assert.ok(isAllowed(3000, 20));
  assert.ok(!isAllowed(2999, 20));
  assert.ok(!isAllowed(3000, 21));
  for (const f of FUNDS) { assert.ok(f.source.startsWith('https://')); assert.match(f.asOf, /^\d{4}-\d{2}-\d{2}$/); }
});

test('the hero fact band shows the CSPX vs SPY saving for 3 000 Kč over 20 years', async () => {
  const { readFile } = await import('node:fs/promises');
  const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
  const band = html.match(/<div class="proof">([\s\S]*?)<\/div>/)[1]
    .replace(/<[^>]+>/g, '').replace(/&nbsp;|\s+/g, ' ').replace(/&amp;/g, '&');  // text only, plain spaces
  const rows = compare(3000, 20);
  const low = roundCzk(rows[0].total), high = roundCzk(rows[rows.length - 1].total);
  const kc = n => n.toLocaleString('cs-CZ').replace(/\s/g, ' ') + ' Kč';
  assert.ok(band.includes('3 000 Kč měsíčně · 20 let'), band);
  assert.ok(band.includes(`o ${Math.round(100 * (1 - low / high))} % nižší náklady`), band);
  assert.ok(band.includes(`(${kc(low)} vs ${kc(high)})`), band);
});
