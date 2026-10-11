# Decisions log

Decisions made by the human together with the lead agent, based on [00-decision-brief.md](00-decision-brief.md). Each entry records the choice, the alternatives rejected and the evidence used. This file is the source for the README rationale.

## Round 1 — 2026-10-10

| # | Decision | Chosen | Rejected | Why (evidence) |
|---|---|---|---|---|
| D0 | Treatment of "NYSE ETFs" | **NYSE → UCITS twin bridge, neutral framing.** Famous NYSE ETFs (VOO, SPY, …) are the recognisable reference; each is mapped to its buyable UCITS twin with the cost of each route. Framed positively as a comparison, not around "you're blocked". | Barrier-led hook (recommended by AI, overridden by human); literal NYSE-only; UCITS-only | F1 most retail brokers block US-domiciled ETFs (PRIIPs), only Fio/Patria sell them; F3 Czechs buy UCITS twins; F4 no Czech competitor maps one to the other. Human preferred a positive frame over a negative "you can't buy it" hook. |
| D1 | Target segment | **DIY investor who knows the S&P 500**: already on XTB/Trading 212/Degiro or about to start; knows tickers from YouTube/social media; cares about TER, FX and tax. | Bank-savings beginner, DIP/40+, parents | [01] forum and App Store evidence of active questions on TER, venue, FX and tax; UCITS vocabulary. Meta targeting is broad anyway, so the segment drives copy, not targeting. |
| D2 | Value for the contact | **Cost result + twin-map PDF.** The calculator shows the headline cost of the visitor's ETF route in CZK over N years *before* the form; the full breakdown plus the NYSE→UCITS map and tax/broker checklist go by e-mail. | Guide-only, quiz → shortlist (advice risk), mini-course | Fee salience changes choices (FCA OP32, Choi et al.) [03]; only Portu has a fee calculator in CZ [02]; no individualised fund recommendation → stays outside the ČNB advice line (F5). |
| D3 | Moment of the ask | **After interaction, with the partial result visible.** | Upfront hero form, optional gate | Matches the brief ("value before the form"); same pattern as Portu/Fondee/Finax [02]; no controlled test favours any timing [03], so this is a candidate A/B hypothesis. |

## Round 2 — 2026-10-10

| # | Decision | Chosen | Rejected | Why / implications |
|---|---|---|---|---|
| D4 | Interactive elements | **Calculator only.** The NYSE ETF ↔ UCITS twin choice lives inside the calculator. | Calculator + twin table (AI recommendation), table only, + broker picker | One focused tool for a few-second mobile visit. **Implication:** the brief's "comparison of NYSE ETFs" must be visible *inside* the calculator and its result (e.g. NYSE ETF vs its UCITS twin side by side, per route). |
| D5 | Form fields | **Name + e-mail + phone**, with proper `autocomplete` attributes (`name`, `email`, `tel`) so browser/OS autofill fills all three in one tap. | E-mail only (AI recommendation), e-mail + optional box, bundled consent | Human's call: a callable lead is worth more than volume. Evidence: autofill users abandon forms 75% less (Chrome Dec 2024, correlational) [03, Q3]; XTB also asks for a phone [02]. **README must justify** this against the brief's "as few fields as possible". Consent model still open (round 3). |
| D6 | After submit | **Full breakdown on the page** (instant). | PDF by e-mail, qualifying question, welcome sequence | Instant gratification. **Open conflict with D2** (which included the twin-map PDF by e-mail) → round 3. |
| D7 | Section order | **Tool-first:** hero matching the ad, calculator starting on the first screen → partial result → form → full breakdown → how it's calculated + sources → FAQ → disclaimers. | Table-first, form-first | Consistent with D3/D4. |

## Round 3 — 2026-10-10

| # | Decision | Chosen | Rejected | Why / implications |
|---|---|---|---|---|
| D2/D6 | The deal (resolves conflict) | **Headline cost before the form → after submit: full breakdown on the page instantly + the same breakdown and NYSE→UCITS twin map e-mailed as a keepsake.** | On-page only; on-page + call-back offer as the main value | Instant gratification plus something to keep. The e-mail delivery checks the address is real. Needs a free-tier e-mail service. |
| D5b | Phone purpose and consent | **One call-back about the visitor's own calculation** (help with broker/route setup), stated plainly next to the form. Further marketing only via an **optional, unticked** checkbox. | Lead passed to a partner (intermediation risk); generic bundled marketing consent (−15% in one test, legally weaker) | Explains why the phone field exists, which builds trust. **Lead-agent check (search summary of ÚOOÚ/ČTÚ sources, not a legal opinion):** since 1 Jan 2022 Act 127/2005 §96 requires prior consent for automated calls, fax and e-mail marketing. Live human calls are barred to numbers that opted out in a public directory, and ČTÚ treats even "may I offer you…" as marketing; fines up to CZK 20 m. → The form must carry **explicit consent to the one call** about the calculation, in plain words next to the phone field/button. Flag for legal review before launch. Sources: pravniprostor.cz analysis of the amendment; uoou.gov.cz telemarketing leaflet and interpretive statement; ctu.gov.cz decisions. |
| D8 | Ad angle | **"Same index, cheaper twin"** (e.g. "VOO and CSPX hold the same S&P 500. Find out which route costs you less."). Second version: open → round 4. | Fee loss, calculate-it-yourself, tax | Neutral comparison consistent with D0. |
| D9a | Addressing | **"Vy" everywhere** (ads and page) | "Ty" everywhere; "ty" in ads + "vy" on page | Every Czech finance landing page uses "vy" [02]; avoids the ad/page mismatch seen at XTB/Portu; ~20% annoyed by "ty", more among over-55s [log C6]. |

## Round 4 — 2026-10-10

| # | Decision | Chosen | Rejected | Why / implications |
|---|---|---|---|---|
| D8b | Second ad version | **Same "twin" angle, second execution.** A = static comparison card ("VOO vs CSPX: the same S&P 500"); B = question hook ("Buying the S&P 500? Work out what your route costs you."). | Fee-loss angle, calculate-it-yourself angle | A clean creative A/B test with one shared first screen; message match stays intact [log C10]. |
| D9b | Visual direction | **Open.** The human asked for 5 visual previews before deciding → `design/previews/`. | — | Design choice, not settleable by research. |
| D10 | ETF scope | **3 index families, all NYSE Arca:** S&P 500 (VOO/SPY/IVV ↔ CSPX/VUAA), total world (VT ↔ VWCE), US total market (VTI ↔ closest UCITS). | + QQQ (Nasdaq), S&P 500 only, broad 8–12 | Keeps the "NYSE" label accurate [log E3]; small enough to hand-curate with a source per data point [05]. |
| D11 | Measurement | **Hybrid.** A first-party, cookie-free event log covers the whole single-page funnel (an in-memory page-load ID, nothing stored on the device). GA4 + Meta Pixel load only after consent (ad optimisation). Banner with "reject" in the first layer. | Consent-gated only; cookieless tool without banner | Full funnel counts without consent loss; ÚOOÚ guidance covers storage/access on the device [log D4], and this log stores nothing there. **Legal reading to confirm** (Matomo's vendor view differs [04]). |

## Round 5 — 2026-10-10 (visual direction)

| # | Decision | Chosen | Rejected | Why / implications |
|---|---|---|---|---|
| D9b | Visual direction | **Minimal fintech, dark ("Noc" family):** near-black, one accent, one statement + one action per screen, 1-tap chips, one big number, bottom-sheet form. The neon lime accent is "maybe too much", so the accent is still being tuned (v3 previews). | v1 previews (all 5: data journalism, receipt, terminal, twins, Swiss grid) for being too data-heavy and cluttered for a 2-second attention span; v2 light/colour-field variants | Human design judgement: the visitor decides in ~2 seconds; less text beats more data on the first screen. Consistent with evidence that pages at a simple reading level convert better [log C2] and that only ~20–28% of words get read [03]. |
| D12 | Brand name | **Veenos**: a play on Czech "výnos" (return/yield). | "Dvojče" / "ETF dvojčata" placeholders | Short, memorable, ties to the investor's goal. |

## Round 6 — 2026-10-10 (accent, hero)

| # | Decision | Chosen | Rejected | Why / implications |
|---|---|---|---|---|
| D9c | Accent colour | **Muted lime `#cfe68a`** on near-black `#0c0c0d` | Mint, champagne, ice blue, mono white; original neon lime `#c8f53b` (too loud) | Human design choice from the v3 previews; keeps the energy of the liked neon at a calmer level. |
| D13 | Hero pattern | **Open:** the human wants to see a CTA-in-hero version (v4 previews: 5 variants) before locking the flow. | — | Chips-in-hero (v3) vs CTA-in-hero is a natural A/B hypothesis (one extra tap vs a clearer first screen). |

## Round 7 — 2026-10-10 (v5 feedback)

| # | Decision | Chosen | Why / implications |
|---|---|---|---|
| D13 | Hero | **Hero A ("Stejný index. Jiná cena." + one CTA) with D's three short trust checks.** "10 vteřin" removed from the sub-headline. | Human choice from v4/v5 previews. |
| D14 | Calculator layout | **Steps flow down the page:** each answered step folds into a one-line summary, the page scrolls to the next question, and the result appears below. | Human request; keeps context visible and feels like a page, not an app. |
| D15 | CTA label | **A/B test: "Začít investovat" (A) vs "Spočítat poplatky" (B).** | Lead agent flagged the risk that "Začít investovat" promises account opening while the tap opens a calculator; the human chose to test it. → One of the README A/B hypotheses. |
| D5c | Phone field (revises D5) | **Phone optional and opt-in:** name + e-mail required; a "Chci zavolat" switch reveals the phone field, which is required only when the switch is on. | Human request. Only visitors who want a call give a number, which also gives explicit consent for the one call (Act 127/2005 §96, see D5b). Lowers friction vs three mandatory fields. |
| D9d | Visual refinements | Background lifted from pure black to a soft dark grey; website header with a menu (mock); a footer; horizontal cost bars in the result; more generous spacing. | Human feedback: v5 "looks like an app". |

## Round 8 — 2026-10-10 (v6 feedback; design iterations continue)

| # | Decision | Change | Why / implications |
|---|---|---|---|
| D12b | Logo | Rework the mark so it reflects the name and "výnos" (return/growth). Options in v7. | Human request. |
| D13b | Hero | Trust checks smaller; **remove "Zdarma · bez registrace"**. | Human: it "will not be true" (contact details are requested). Avoids a misleading claim. |
| D2b/D6b | The deal (revises D2/D6) | **On-page result simplified** (one number + two bars + CTA, minimal text). **The detailed breakdown goes in the e-mail.** The page confirms the submission. | Human: "calculator results should be simpler with less text". The e-mail becomes the main deliverable, so a real address is needed to get the value. |
| D5d | Phone toggle copy | Switch label changes from "Chci zavolat" to a **help-oriented first-person label** ("Chci pomoct"), with a sub-line in the sense of "call me and help me with the next step". | Human request. **Lead-agent caveat:** the call must stay on process help (broker/route setup, how the calculation works). Recommending specific instruments to an individual is investment advice requiring a licence (ČNB, see log D3). Wording avoids "poradit/poradce". |
| D16 | Hero visuals | Explore heroes with a background image, motion or other dynamic elements (v7). | Human request. Motion must respect `prefers-reduced-motion` and keep LCP ≤ 2.5 s [log C4]. |

## Round 9 — 2026-10-10 (v7 feedback)

| # | Decision | Chosen / change | Why / implications |
|---|---|---|---|
| D12c | Logo | **Option 1 "V-šipka"**: a V whose right arm rises into an arrow (return going up / check mark). | Human choice from v7. |
| D16b | Hero | **Photo hero** (v7 #2). More photo options shown in v8. **No photo credit on the page**: production will use a commercially licensed photo (free or paid). | Human choice. Note: the Unsplash Licence already allows commercial use without attribution, but licences must be checked per image before launch. |
| D13c | Hero copy | H1 line-height fixed (the "á" in "Jiná" collided with the line above); **"ukusuje" replaced** in the sub-line; trust checks in regular (not bold) weight. | Human feedback. |
| D17 | Cookie consent | Design requested (v8). Constraints from research: "reject" in the first layer with the same prominence as "accept", no pre-ticked categories, a settings layer, easy to change later [log D4]; GA4 + Meta Pixel load only after consent, the cookie-free funnel log runs regardless (D11). | Human request; legal constraints from [04]. |

## Round 10 — 2026-10-10 (v8 feedback + scope check against the brief)

| # | Decision | Chosen / change | Why / implications |
|---|---|---|---|
| D16c | Hero photo | **Photo 1**: Prague Castle over the Vltava at dusk. | Human choice. Licence to be confirmed or a commercial photo bought before launch. |
| D13d | Sub-line | **"Zjistěte, kolik vás stojí poplatky za vaše ETF."** | Human choice. |
| D17b | Cookie consent | v8 design approved, with **"Přijmout" highlighted** (accent). "Odmítnout" stays in the first layer, the same size and clearly readable. | Human choice. Lead-agent note: the ÚOOÚ treats equal prominence as good practice, not a hard rule [log D4]. A highlighted accept with an equal-size, visible reject is common; small residual risk. |
| D0b | Scope check | **Human flagged that the concept drifted away from the brief's core: "porovnání ETF obchodovaných na NYSE".** The current page compares two *routes* to one index (VOO via Fio vs CSPX via XTB); it shows no side-by-side comparison of NYSE ETFs. → Concept revisit below. | The brief is the evaluation criterion. The PRIIPs finding (F1) stays, as a layer of the comparison ("can you buy it from CZ / its UCITS twin"), not as its replacement. |

## Round 11 — 2026-10-10 (comparison concept)

| # | Decision | Chosen / change | Why / implications |
|---|---|---|---|
| D4b | Page concept (revises D4 "calculator only") | **Concept A: hero → amount + years (one screen) → ranked comparison of the four S&P 500 funds** (SPY, IVV, VOO from NYSE Arca + the CSPX UCITS twin), ranked by what they really cost a Czech investor, including buying from Czechia. | Human choice from v9 (over: duel, calculator + table, comparison in the hero). Restores the brief's core ("porovnání ETF obchodovaných na NYSE"). |
| D10b | ETF scope (revises D10) | **S&P 500 only.** | Human choice. Cleanest "same index, different price" story; all TERs already verified (SPY 0.0945 %, IVV 0.03 %, VOO 0.03 %, CSPX 0.07 %). |
| D18 | Cost assumption | NYSE funds bought **via Fio once a quarter** (USD 7.95/order + ≈3 % FX spread, indicative); CSPX via XTB (0 % commission, 0.5 % FX); 7 % p.a. before costs. | Fairness: monthly USD 7.95 orders on 3 000 Kč overstate the NYSE route (MiFID Art. 44 "fair and balanced" as the benchmark). The conclusion holds either way. |
| D19 | Ranked result execution | v9 version **rejected as cluttered** (cards, badges, sub-labels, TER lines). Needs a quick-glance, readable version → v10. | Human feedback; consistent with [[minimal-fintech-design]]. |
| D19b | Ranked result execution | **v10 option 2 "Sloupce":** a context line + ⓘ, a heading "Náklady za N let", four horizontal bars on one scale (ticker left, CZK right), the cheapest in accent, one CTA. Details (TER, exchange, broker, assumptions) go to the e-mail. | Human choice from v10. Keeps all four funds comparable at a glance, which is the brief's core. |
| D17c | Cookie re-open | Floating cookie button dropped (it covered content); **"Nastavení cookies" link in the footer** reopens the settings. | Withdrawing consent stays easy (GDPR Art. 7(3)); cleaner page. |
| D20 | Consolidated candidate | v11 = every decision in one clickable page + the e-mail with the full 4-fund comparison. Cost breakdown in the e-mail: "buying from CZ" depends only on the route (identical for SPY/IVV/VOO); the fund fee takes the remainder. | Basis for the final design sign-off and the build plan. |

## Round 12 — 2026-10-10 (v11 feedback)

| # | Decision | Chosen / change | Why / implications |
|---|---|---|---|
| D15b | A/B variant B | **Variant B = CTA "Spočítat poplatky" + a different hero photo (young man with a phone, v8 #6)** to appeal to younger visitors. Variant A = "Začít investovat" + Prague Castle. | Human request. Lead-agent note: changing two elements at once makes B a *variant-level* test ("younger framing"). The result won't show whether the photo or the CTA caused the difference; a follow-up test can isolate them. → README hypothesis. |
| D2c | E-mail | Make the e-mail realistic: the website's visual language (dark header band, lime accent, logo, rounded cards, pill CTA) and proper Czech copy (subject + preheader, greeting, intro, result, breakdown, takeaways, next step, call-back note if requested, sign-off, assumptions, legal footer, unsubscribe). | Human feedback on v11. |
| D21 | Responsive | Show tablet and desktop versions. Desktop puts the calculator in the hero next to the headline; the result replaces the card in place. Tablet keeps the mobile flow, wider. | Human request; ad traffic is mostly mobile, but the page must work everywhere. |

## Round 13 — 2026-10-11 (v12 feedback)

| # | Decision | Change | Why / implications |
|---|---|---|---|
| D22 | Mobile sizing | Type and elements now **scale with viewport width** (`clamp()`), so a 390 px phone keeps the v11 proportions (headline ≈ 48 px at 390 px, 42 px at 340 px). | Human: v12 looked smaller than v11. Cause: v12 previews were shown at 66 % scale **and** v11 mocked a ~320 px-wide phone while v12 rendered a real 390 px one. Previews now shown at 82 % (≈ v11 size). |
| D22b | Tablet sizing & layout | Larger type and controls (headline ≈ 77 px, 60 px chips, 64 px CTA); **calculator centred**; **cookie card centred**; hero shifts up while the card is visible. | Human request. |
| D22c | Desktop cookie consent | **Full-width bottom bar**, text and buttons centred (Odmítnout / Přijmout equal width, Přijmout highlighted, Nastavení link). | Human request. |
| D22d | Calculator heading | Tablet + desktop: **"Kolik investovat a na jak dlouho?"**; mobile keeps "Kolik a na jak dlouho?" (space). | Human request. |

## Round 14 — 2026-10-11 (post-build design tweaks)

| # | Decision | Change | Why / implications |
|---|---|---|---|
| D23 | Calculator button | **"Porovnat 4 fondy" is always full lime** (no greyed-out disabled state). If an amount or the years are missing, that label turns lime, its chips nudge and focus moves to them. | Human: looks better without the greyed-out effect. The hint keeps the "what's missing" signal without a dead-looking button. |
| D24 | Hero position (phone + tablet) | Headline starts in the **upper part of the first screen** (≈ 23 % on a 390×844 phone) instead of being pinned to the bottom of a full-height block; the calculator card now peeks into the first screen. Photo is a shorter band above the headline (Prague Castle / face stay visible above the text). Top padding shrinks on short phones so the CTA stays above the cookie card; the hero no longer moves when the banner closes. | Human: half the mobile screen was empty. |
| D25 | Edge bleed | Fixed "Jak počítáme" touching the screen edges on phones (a section rule reset the page's side padding). Checked text-to-edge distance ≥ 12 px at 320, 375, 390, 430, 552, 700, 768, 1100, 1280, 1440 px. | Human screenshot. |
| D26 | Result animation | Bars grow over **1.6 s, staggered**, and the amounts **count up** with them; starts when the bars are on screen. Screen readers get the final amount only; reduced-motion users get no animation. | Human request: slower, with counting numbers. |
| D27 | Contrast | Cards and chips one step lighter (`#25262b` / `#2e2f35`, border `#34353b`), footer darker (`#0e0f11`) with its own top border. Same tokens on the subpages. | Human request: footer and cards more distinct. |

## Round 15 — 2026-10-11 (first screen, chips, contact)

| # | Decision | Change | Why / implications |
|---|---|---|---|
| D28 | First screen (phone + tablet) | The calculator no longer peeks into the first screen. A **fact band** closes it: "3 000 Kč měsíčně · 20 let" + ⓘ, **"114 200 Kč"** in lime, "Rozdíl v nákladech mezi nejlevnějším a nejdražším fondem na stejný index S&P 500." The hero block is one screen tall; the calculator starts at the fold. Desktop unchanged (calculator stays next to the headline). | Human request ("a % number or a marketing line"). A CZK figure over a percentage: it matches the hero promise "Poplatky v korunách, ne v procentech". The number is SPY − CSPX from `compare(3000, 20)` (142 100 − 27 900); a test fails if HTML and model drift apart. Neutral wording: a fact, not a recommendation. |
| D29 | Chips | Tapping the selected chip again **deselects it**. | Human request. |
| D30 | Contact | **"Kontakt"** in the header nav and the mobile menu → contact block in the footer (`#kontakt`): +420 715 123 456, fake@nonreal.cz (fictional, showcase). Also linked from the subpages and used in the privacy policy as the controller contact. | Human request; fictional details supplied by the human. |

## Round 16 — 2026-10-11 (fact band copy, footer, FAQ)

| # | Decision | Change | Why / implications |
|---|---|---|---|
| D28b | Fact band copy (revises D28) | Headline is now the percentage: **"o 80 % nižší náklady"** (only "80 %" in lime), smaller type (≈ 32 px phone, 42 px tablet). Sub-line keeps the CZK figures: "u nejlevnějšího ze 4 fondů na stejný index S&P 500 oproti nejdražšímu (27 900 Kč vs 142 100 Kč)." | Human choice. The CZK figures in the sub-line keep the hero promise "Poplatky v korunách, ne v procentech". 80 % = 1 − 27 900 / 142 100; the test checks percentage and both amounts against the model. |
| D31 | Meta Pixel / GA4 | **Stay off** in the showcase; no IDs. | Human: showcase only. The consent-gated loaders remain as a demonstration. |
| D32 | Footer layout | Links are **top-aligned and never wrap**; one column from tablet up (was a 2-column grid whose stretched rows centred the "Nastavení cookies" button and made a zig-zag). | Human screenshot. |
| D33 | FAQ | **5 questions** after "Jak počítáme": NYSE access (PRIIPs/KID), SPY/IVV/VOO vs CSPX, taxes, "is it advice?", what happens with my contact. One open at a time; the card height grows with a grid-rows transition, the + springs into an × on a lime disc, a soft lime glow lights the card, and the answer fades up out of a blur. Reduced-motion users get no animation. Linked from the menu and footer; opens are counted (`faq_open`). | Human request. Answers use only verified facts (05-data-facts, verification log E1/E2/E6) and avoid duplicating the numbers that live in the model. |
| D33b | FAQ look (revises D33) | **More contrast:** FAQ cards one step brighter than the other cards (`#2c2d33`, border `#3c3d43`, icon on its own disc), answer text brighter. **No gradient** in the open card (solid colour + lime border only, neutral shadow). **No numbering.** | Human request. |

## Round 17 — 2026-10-11 (bonus comparison, data re-check)

| # | Decision | Change | Why / implications |
|---|---|---|---|
| D34 | Bonus for the contact | **World pair VT (NYSE Arca) vs VWCE (UCITS, Xetra EUR), only in the e-mail.** On the page a locked card "V e-mailu navíc · Celý svět: VT vs VWCE" under the result: tickers and bar lengths visible, amounts blurred (placeholder digits in the HTML). Button → "Poslat celé srovnání e-mailem"; form and FAQ copy mention the bonus. Desktop result card tightened so the button stays on the first screen. | Human request: show that the e-mail holds more than the page. VWCE is the most-discussed ETF on the Czech forum (research/01). Indexes are similar, not identical (FTSE Global All Cap vs FTSE All-World) and the e-mail says so. VWCE wins in all 16 scenarios despite the higher fund fee (0.14 % vs 0.06 %). |
| D35 | Data re-check | All inputs re-verified at source on 11 Oct 2026; VOO source switched to Vanguard's fact sheet (30 Jun 2026). Independent Python recalculation: 16/16 scenarios identical. **Bug found and fixed:** e-mail parts were rounded separately and did not add up to the total (CSPX, VT); now fee = rounded total − rounded purchase, with a test. | Human request to double-check every number. |

## Round 18 — 2026-10-11 (form behaviour on phone and tablet)

| # | Decision | Change | Why / implications |
|---|---|---|---|
| D36 | Form stability | Tested the whole form at 320×568, 375×667, 390×844 and 768×1024 by measuring element positions before and after each step. Fixed: **"Chci pomoct" made the bottom sheet jump 70 px** in one frame (now the phone field slides open in 0.32 s); **an error message pushed the fields up 26 px** (its line is now reserved, 0 px movement); **the page behind scrolled** under the sheet on touch screens (now locked on touch devices only, where scrollbars overlay, plus `overscroll-behavior: contain` and no panning on the dim layer); **focus fell to the page** after sending (now on "Srovnání je na cestě"). Turning the switch off clears a phone error. | Human request: check skipping and moving elements. Locking via `overflow: hidden` on devices with classic scrollbars shifted the page 15 px sideways (`scrollbar-gutter` was ignored), hence touch-only. |
| D37 | Anti-spam timing | Minimum time from opening the form to sending: **2 s → 1 s**. | Too-fast submissions are dropped silently with a success screen; a person using autofill (tap suggestion + send) can finish in about 1.5 s and would have lost the e-mail without knowing. The honeypot field still catches most bots. |
