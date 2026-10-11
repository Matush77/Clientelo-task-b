import test from 'node:test';
import assert from 'node:assert/strict';
import { renderComparisonEmail, renderTeamEmail } from '../lib/email-template.js';
import { compare, formatCzk } from '../public/js/model.js';

test('e-mail contains all four funds with the model numbers', () => {
  const { html, text, subject } = renderComparisonEmail({ monthly: 3000, years: 20 });
  for (const r of compare(3000, 20)) {
    assert.ok(html.includes(`>${r.ticker}<`) || html.includes(`<b>${r.ticker}</b>`), r.ticker);
    assert.ok(html.includes(formatCzk(r.total)), `${r.ticker} total`);
    assert.ok(text.includes(`${r.ticker}: ${formatCzk(r.total)}`));
  }
  assert.equal(subject, 'Vaše srovnání S&P 500 ETF: CSPX vychází nejlevněji');
  assert.match(html, /nejde o investiční doporučení/);
});

test('call-back block only when help is on; phone is masked', () => {
  assert.doesNotMatch(renderComparisonEmail({ monthly: 3000, years: 20 }).html, /Brzy vám zavoláme/);
  const { html } = renderComparisonEmail({ monthly: 3000, years: 20, help: true, phone: '+420 777 123 456' });
  assert.match(html, /Brzy vám zavoláme/);
  assert.ok(html.includes('456'));
  assert.ok(!html.includes('777 123'));
});

test('team notice escapes HTML in user input', () => {
  const t = renderTeamEmail({ name: '<script>x</script>', email: 'a@b.cz', phone: '+420777123456', monthly: 3000, years: 20, variant: 'a', device: 'mobile', utm_content: '' });
  assert.ok(!t.html.includes('<script>'));
  assert.ok(t.html.includes('&lt;script&gt;'));
});
