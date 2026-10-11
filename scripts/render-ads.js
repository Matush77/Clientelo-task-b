// Renders the ad creatives and the share image to PNG with headless Edge/Chrome (no extra dependencies).
//   node scripts/render-ads.js
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const BROWSERS = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium',
];
const browser = BROWSERS.find(existsSync);
if (!browser) { console.error('No Edge/Chrome found'); process.exit(1); }

const JOBS = [
  ['ads/ad-a.html', 'f=feed', 1080, 1350, 'ads/png/ad-a-feed-1080x1350.png'],
  ['ads/ad-a.html', 'f=story', 1080, 1920, 'ads/png/ad-a-story-1080x1920.png'],
  ['ads/ad-b.html', 'f=feed', 1080, 1350, 'ads/png/ad-b-feed-1080x1350.png'],
  ['ads/ad-b.html', 'f=story', 1080, 1920, 'ads/png/ad-b-story-1080x1920.png'],
  ['ads/og.html', '', 1200, 630, 'public/og.png'],
  ['ads/email-logo.html', '', 240, 56, 'public/email/logo.png', true],  // transparent, for the e-mail header
];
mkdirSync('ads/png', { recursive: true });
mkdirSync('public/email', { recursive: true });
const sleep = ms => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
// Edge's launcher returns before the screenshot is written: wait until the file exists and its size is stable.
function waitFor(file, timeoutMs = 20000) {
  const start = Date.now(); let last = -1;
  while (Date.now() - start < timeoutMs) {
    if (existsSync(file)) { const size = statSync(file).size; if (size > 0 && size === last) return true; last = size; }
    sleep(300);
  }
  return false;
}
for (const [file, query, w, h, out, transparent] of JOBS) {
  const url = pathToFileURL(resolve(file)).href + (query ? '?' + query : '');
  rmSync(out, { force: true });
  execFileSync(browser, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', `--user-data-dir=${resolve('.edge-render-profile')}`,
    `--window-size=${w},${h}`, ...(transparent ? ['--default-background-color=00000000'] : []), '--virtual-time-budget=3000', `--screenshot=${resolve(out)}`, url], { stdio: 'ignore' });
  console.log(waitFor(out) ? 'rendered' : 'FAILED', out);
}
