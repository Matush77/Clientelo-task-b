# Build plan: Veenos landing page (Zadanie B)

## Context
The research, verification and design phases are finished. Every decision is logged in `research/decisions.md` (rounds 1–13). The approved design is the clickable responsive prototype `design/previews/v13-site.html`, which has variants A/B, the calculator, the 4-fund bar comparison, the form with the "Chci pomoct" phone opt-in and the cookie UI. The e-mail design is `design/previews/v12-email.html`.

Now we turn the prototype into a production page. It goes on Vercel (free), with a working lead form, real e-mail delivery, cookie-free full-funnel measurement, two ad creatives and a Slovak README that meets every requirement of the assignment. Deadline **16. 10. 2026**; today is 11. 10.

Choices confirmed for this phase:
- e-mail: **Brevo**, sending from a verified address you own, no domain needed
- storage: **Upstash Redis via Vercel Marketplace**, EU region
- analytics: **no GA4 or Meta Pixel**, own funnel log only
- README: **in Slovak**

Design tweaks can follow after the build.

## Architecture (no framework: static page + Vercel Node functions)
```
public/index.html          ← v13-site.html: real <form>, labels, a11y, no preview presets
public/js/model.js         ← fund data + cost model (ES module), the single source of truth
public/js/app.js           ← UI, A/B assignment, funnel beacons, form submit
public/fonts/*.woff2       ← self-hosted Manrope (latin + latin-ext); no Google Fonts call
public/navod.html          ← neutral guide "Jak koupit ETF u brokera" (linked from the e-mail)
public/ochrana-udaju.html  ← privacy policy + cookies section (operator details = clearly marked TODO)
public/og.png              ← social share image
api/lead.js                ← POST: validate, honeypot + min fill time, rate limit, store, send e-mails
api/event.js               ← POST (sendBeacon): whitelisted funnel events → Redis counters
api/stats.js               ← GET ?token=…: funnel per day / variant / utm_content (JSON + tiny HTML view)
lib/store.js               ← Upstash Redis; in-memory fallback when env vars are missing (local/dev)
lib/mailer.js              ← Brevo transactional API via fetch; console fallback when there's no key
lib/email-template.js      ← v12-email.html as a function (numbers from model.js; help block conditional; plain-text part)
lib/validate.js            ← input schema (allowed m/y values, e-mail, optional CZ phone)
scripts/dev-server.js      ← local static + /api router (no `vercel dev`/login needed for testing)
tests/*.test.js            ← node:test (model, validation, lead handler with mocks, template)
ads/ad-a.html, ad-b.html   ← creatives → PNG 1080×1350 (feed) + 1080×1920 (story) via headless Edge
ads/README.md              ← ad copy (primary text, headline, CTA, UTM destination) per version
vercel.json, package.json, .env.example, README.md (SK)
```
Reused as-is: `scripts/export_ai_log.py` (ai-log hook). The cost model, data and UI are ported from `design/previews/v13-site.html` and `v11.html` (`fv`/`compare`, buying cost per route only).

## Key implementation decisions
- **Cost model (`public/js/model.js`)**:
  - fund data comes from the verified facts: TER SPY 0.0945 %, IVV/VOO 0.03 %, CSPX 0.07 %
  - Fio: USD 7.95 per order, ≈3 % FX, bought quarterly
  - XTB: 0 %, 0.5 % FX
  - ČNB USD rate 21.745 (9. 10. 2026); 7 % p.a. before costs
  - each data point carries its source URL and as-of date
  - the API recomputes all numbers server-side, so client values are never trusted
  - tests lock in 3 000 Kč/20 y = CSPX 27 900, IVV/VOO 131 300, SPY 142 100
- **A/B**:
  - assignment is `?v=a|b` if present, otherwise random 50/50 per page load
  - nothing is stored on the device, so no consent is needed; a reload may switch variant, which is documented
  - A = Prague Castle + "Začít investovat"; B = young man + "Spočítat poplatky"
- **Funnel events (cookie-free)**:
  - events: `page_view`, `hero_cta`, `calc_select`, `calc_compare`, `result_view`, `form_open`, `form_start`, `help_on`, `form_submit`, `lead_ok`, `lead_error`
  - each carries variant, device class and utm_*, linked by an in-memory page-load ID
  - server-side, Redis `HINCRBY` per day, variant and utm_content
  - no IP stored; rate limiting uses a short-TTL hash
- **Cookie consent** (showcase): the approved banner is **shown on first visit**:
  - phone: bottom card
  - tablet: centred card
  - desktop: full-width bar
  - "Přijmout" highlighted; a settings dialog; the footer link "Nastavení cookies" reopens it
  - the choice is saved as a strictly necessary setting (`localStorage` `veenos_consent`, 12 months; after a refusal the banner isn't shown again for 6 months)
  - consent-gated loaders for GA4 and Meta Pixel are wired but **inactive without IDs** (env vars `GA4_ID` / `META_PIXEL_ID` empty), so the mechanism is demonstrable and nothing third-party loads
  - the README says the banner is part of the showcase
- **Lead flow (`api/lead.js`)**:
  1. validate
  2. reject a filled honeypot or a fill time under 2 s
  3. rate-limit
  4. store the lead (name, e-mail, phone only if "Chci pomoct", tips opt-in, inputs, variant, utm, timestamp)
  5. send the comparison e-mail to the visitor (Brevo)
  6. if "Chci pomoct" is on, send a notification e-mail to `TEAM_EMAIL`
  7. return the numbers so the page shows "Srovnání je na cestě"
- **Performance**:
  - inline critical CSS, deferred JS, preloaded woff2
  - hero image via a responsive `srcset` (Unsplash CDN, w=640/960/1440/1920) + preload; swapped for the licensed photo later
  - target LCP ≤ 2.5 s on mobile
- **Security headers** in `vercel.json` (CSP allowing only self and images.unsplash.com, HSTS, X-Content-Type-Options, Referrer-Policy).

## Steps (each ends with a commit)
1. **Scaffold**: package.json (ESM, `@upstash/redis`, `@fontsource/manrope`), dev server, .env.example, vercel.json, .gitignore.
2. **Model + data** in `public/js/model.js`, plus `tests/model.test.js`.
3. **Page**: port v13 into `public/index.html` + `app.js`:
   - a real form with labels and autocomplete
   - an accessible dialog/sheet (focus trap, Esc)
   - the "Jak počítáme" ⓘ link
   - remove preview-only code
   - self-host the fonts
4. **API + lib**: store, mailer, validate, template; `tests/lead.test.js` + `tests/email.test.js` with mocked Redis and Brevo.
5. **Content pages**: navod.html, ochrana-udaju.html, og.png.
6. **Local verification** (see below).
7. **Deploy**: Vercel project, env vars, production deploy, smoke test.
8. **Ads**: two creatives rendered to PNG + copy with UTM links (version A: "VOO vs CSPX: stejný S&P 500" card; version B: "Kupujete S&P 500? Spočítejte, kolik vás stojí vaše cesta").
9. **README (SK)**:
   - target group, offer, moment of the ask
   - section order and the reasons for it
   - ads
   - data and sources
   - measurement (`/api/stats`)
   - expected conversion (benchmarks + funnel estimate)
   - 3 A/B hypotheses ranked by impact
   - how AI was used: prompts, verification log 35 claims / 6 errors, lead-agent error L1, design iterations v1–v13, the agents' and my own mistakes
   - decisions where the assignment was unclear (NYSE → UCITS twin)
   - what's missing
   - how to run it
10. **Wrap-up**: push to GitHub (with your OK right before the first push); you run `/export` into `ai-log/`; send-off checklist.

## Needs you (I can't create accounts or handle your keys)
- `vercel login` once in your terminal, so I can then create and deploy the project with the CLI.
- In the Vercel dashboard: Storage → Upstash Redis (EU) → connect to the project; the env vars are added automatically.
- Brevo:
  - create the account and verify the sender address
  - create an API key
  - in Vercel set `BREVO_API_KEY`, `MAIL_FROM`, `TEAM_EMAIL` and `STATS_TOKEN` (any random string)
- Confirm before the first `git push` to the public repo, and before I send a test lead to a real e-mail address.

## Verification
- `node --test`: model numbers, validation (bad e-mail, phone required only with help on, honeypot), the lead handler stores data and calls the mailer once (twice with help on), and the template renders all 4 funds.
- Local e2e in the browser pane, on the dev server at 390/768/1440:
  - cookie banner on first visit; the choice is remembered; the settings reopen from the footer; no third-party request with empty IDs
  - A and B
  - chips → bars match the model
  - form validation
  - submit → "Srovnání je na cestě"
  - the e-mail HTML is logged by the console mailer
  - `/api/stats` counts each funnel step
- After deploy:
  - prod smoke test (test lead to your address, with your OK)
  - the e-mail arrives and isn't in spam
  - stats increment
  - PageSpeed Insights mobile, LCP ≤ 2.5 s and no console errors

## Risks / known limits (go into the README)
- Vercel Hobby is for non-commercial use, so real ads would need Pro or another free host.
- The Meta ad policy for unlicensed publishers is unconfirmed, and Google Ads is closed without financial verification.
- Brevo from a Gmail sender may land in spam (DMARC); a real domain would fix this.
- Operator identity and the privacy policy need filling in plus a legal review.
- The hero photo licence needs to be confirmed or bought.
- The Fio FX spread is indicative.
- Only S&P 500 is covered.
- The phone call must stay process help, not investment advice.
- Without GA4/Pixel there is no Meta conversion signal; the consent-gated hooks are ready.
- The whole project is a showcase for the hiring process; these points describe what a real launch would still need.
