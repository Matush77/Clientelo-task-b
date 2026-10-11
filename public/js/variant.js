// A/B variant, decided before first paint (no flicker) and kept in memory only: nothing is stored on the device.
// ?v=a or ?v=b forces a variant (used by ad links and QA); otherwise 50/50 on each page load.
(function () {
  var q = new URLSearchParams(location.search).get('v');
  var v = q === 'a' || q === 'b' ? q : (Math.random() < 0.5 ? 'a' : 'b');
  document.documentElement.setAttribute('data-v', v);
})();
