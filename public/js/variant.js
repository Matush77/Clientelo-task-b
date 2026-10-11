// A/B variant, decided before first paint (no flicker) and kept in memory only: nothing is stored on the device.
// ?v=a or ?v=b forces a variant (used by ad links and QA); otherwise 50/50 on each page load.
(function () {
  var q = new URLSearchParams(location.search).get('v');
  var v = q === 'a' || q === 'b' ? q : (Math.random() < 0.5 ? 'a' : 'b');
  document.documentElement.setAttribute('data-v', v);
  // Cookie banner state is also decided before first paint, so the hero doesn't jump (CLS).
  try {
    var c = JSON.parse(localStorage.getItem('veenos_consent') || 'null');
    var ttl = c && (c.a || c.m) ? 360 * 864e5 : 180 * 864e5;
    if (!c || Date.now() - c.t >= ttl) document.documentElement.classList.add('has-banner');
  } catch (e) { document.documentElement.classList.add('has-banner'); }
})();
