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
