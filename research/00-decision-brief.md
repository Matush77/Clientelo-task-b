# Decision brief: NYSE ETF lead-magnet page for Czech retail investors

Synthesis of the five research reports (01–05), after the lead agent's verification ([99-verification-log.md](99-verification-log.md)). It lists **open decisions with options, evidence and trade-offs. Nothing here is decided.** Decisions are made with the human and recorded in `decisions.md`.

Reference format: `[02]` = report 02-competitors.md; `[log C1]` = row C1 of the verification log. ✔ = confirmed in verification; ⚠ = partial/inferred or contested.

---

## Fixed by the assignment (not up for decision)
Mobile-first page in Czech for paid traffic · lead magnet with value visible before the form · minimal form · real data with sources · full-funnel measurement · two ad versions · deployed on free hosting · README with section-order rationale, expected conversion, 3 ranked A/B hypotheses.

## Facts that constrain every decision

| # | Fact | Evidence |
|---|---|---|
| F1 | **Most Czech retail investors cannot buy NYSE-listed ETFs.** US-domiciled ETFs have no PRIIPs KID, so DEGIRO, LYNX and Saxo block new retail purchases; IBKR, Trading 212 and XTB do too, by indirect evidence. **Fio** explicitly allows them (execution-only; USD 7.95 per order up to 100 shares + ~3% indicative FX spread vs ČNB). Finex also names **Patria**. | ✔ [05], [log E2, E5, E6, A1] |
| F2 | "NYSE" for ETFs in practice means **NYSE Arca**: SPY, VOO, IVV, VTI, VT, SCHD. QQQ is Nasdaq. NYSE main board lists only 79 ETFs; NYSE American lists 0. | ✔ [log E3] |
| F3 | Czech investors talk in **UCITS tickers** (forum mentions: VWCE 185, IWDA 141, SPYL 106, SXR8 78, CSPX 25). UCITS twins exist for S&P 500 (CSPX/SXR8/VUAA, TER 0.07%), All-World (VWCE 0.14%) and Nasdaq-100 (CNDX/EQQQ 0.30%). No exact SCHD twin. | [01], [05] |
| F4 | **Nobody in the Czech market explains NYSE/US ETFs vs their buyable twins.** Finex's screener lists SPY, VTI and QQQ with no note on listing venue, domicile or availability. | ✔ [02], [log B7] |
| F5 | **Advice line (ČNB, Jan 2025):** an individualised recommendation of a specific instrument = investment advice → needs a licence. A public, non-individualised recommendation is allowed but carries MAR duties (identity, date, sources, facts vs opinion, conflicts). A "not investment advice" disclaimer does not protect (ESMA, Jan 2026). | ✔ [log D3, D5] |
| F6 | **Ad platforms:** Google requires financial-services verification in CZ since 23 Jul 2026, and an unlicensed publisher can't apply → Google Ads is likely closed. TikTok: licensed advertisers only, "advisory services" banned. **Meta: policy text unreadable, licence "where required" — open risk.** Competitors run Meta ads to all 18–65+ in CZ. | ✔ D1, D2; ⚠ D6 |
| F7 | **Consent:** marketing e-mails need prior opt-in consent (Act 480/2004 §7). Analytics cookies need opt-in (ÚOOÚ). Sending what the visitor asked for (the result/report) does not need marketing consent. | ✔ [04], ⚠ D4 |
| F8 | **Data licensing:** every free data API checked forbids public display; issuer sites allow personal use or need permission. Free and unrestricted: SEC EDGAR, Nasdaq Trader directory, ČNB FX API, broker price lists (PDF). | [05] (FMP ⚠ E7) |
| F9 | **Benchmarks** (Unbounce 2024, medians of pages that *had* conversions → optimistic): financial services 8.3%, **investing 3.9%**, finance paid social 9.3%, finance mobile 11.5%. Quiz funnels: 7.85–11.28% lead capture (means). | ✔ [log C1, C9] |

---

## D0 — How to treat "NYSE ETFs" (prerequisite; shapes everything else)

| Option | What the page does | For | Against |
|---|---|---|---|
| **0a Literal NYSE** | Compare NYSE Arca ETFs as products; state that most Czech brokers can't sell them; route = Fio/Patria. | Literal reading of the brief. | Most visitors can't act on it (F1); Fio costs USD 7.95 + ~3% FX; narrow. |
| **0b NYSE → UCITS twin bridge** | Use famous US ETFs (VOO, SPY, QQQ, VT…) as the recognisable reference; for each show its buyable UCITS twin and the cost of each route. | Fills the uncovered gap (F4); matches recognition (US tickers) and what Czechs actually buy (F3); actionable. | Partly reinterprets the brief → needs a clear README justification. |
| **0c Barrier as the hook** | Lead with the surprise: "why VOO isn't sold to you, and what to buy instead". Otherwise like 0b. | Strong curiosity/novelty angle for ads; true and sourced. | Negative framing; must avoid sounding like "you're blocked". |
| 0d UCITS-only | Ignore US listings. | Simple. | Ignores the brief. |

## D1 — Target segment

| Option | Evidence | Fit with D0 |
|---|---|---|
| A Beginner with savings in a bank | Largest pool; non-investors fear loss (73%), lack money (71%) and know-how (71%); 24% "considering" [log A2] | Low intent; NYSE detail may be too advanced |
| B DIY investor already on XTB / Trading 212 / Degiro | Busy forum threads; uses UCITS tickers; cares about TER, FX, venue, tax [01] | Best fit for 0b/0c; sceptical; many free tools |
| C DIP / 40+ retirement saver | 244k DIP contracts (Mar 2026); 48k CZK deduction; retirement motive 78% [log A2, A4] | Good fit for a tax/fee angle; less mobile-native |
| D Parents investing for children | Portu ~30k child accounts [01] | Long horizon makes the fee impact large |
| E Under-30, social-media-led | 53% follow finfluencers; 78% verify [01] | TikTok blocked for unlicensed (F6) |
| F Women starting out | 38% of Portu clients, fastest growth [01] | Plain-language need |

Targeting reality: competitors target all of CZ, 18–65+, all genders on Meta [04]. Segment choice mainly drives **message and copy**, less the targeting.

## D2 — Value in exchange for the contact (the lead magnet)

| Option | Visible before form | Advice risk (F5) | Notes |
|---|---|---|---|
| a **Personal cost result**: "what your ETF route costs you in CZK over N years" (TER + FX + commission) for the visitor's own amount, horizon and broker | Partial result (e.g. headline number) | Low if it computes costs for the visitor's chosen inputs and doesn't recommend a fund | Fee salience moves choices (FCA OP32, Choi et al.) [03]; only Portu has a fee calculator in CZ [02] |
| b **Guide/PDF**: "NYSE ETF → UCITS twin map + tax & broker checklist" | Teaser and table of contents only | Low (education) | XTB's model [02]; low perceived uniqueness unless the map is the hook |
| c **Ungated comparison table + "send me the full table/updates"** | Most of the value | Low | Weak reason to give e-mail (justETF/NerdWallet don't gate) [02] |
| d **Quiz → "your ETF shortlist"** | Questions | **High** (individualised instrument) | Strongest hook, highest regulatory exposure [04 A3] |
| e **E-mail mini-course** (e.g. 5 days) | Syllabus | Low | Longer path; welcome e-mails open at 35.5% [03] |

Combinations are possible (e.g. a + b: the calculator result plus the PDF map sent together).

## D3 — Moment and mechanism of the ask
No controlled study on gate timing exists; vendor claims conflict [03].

| Option | For | Against |
|---|---|---|
| a Upfront in the hero (XTB) | Maximum exposure of the form | XTB's form sits below the mobile first screen anyway [02]; no value shown first (brief asks for value first) |
| b **After an interaction, with a partial result visible** (Portu/Fondee/Finax pattern) | Matches brief; IKEA/endowed-progress logic (untested for leads) [03] | Some visitors leave satisfied with the partial result |
| c Optional gate / skip link | Trust; more engagement | Lower capture (Act-On anecdote, ⚠) |
| d Exit-intent / scroll pop-up | Extra chance | Weak on mobile; can look aggressive |

## D4 — Interactive element(s) and how each leads to the form
| Element | Leads to form via | Effort | Evidence |
|---|---|---|---|
| Cost calculator (amount, monthly, years, route) | "Send me the full breakdown / PDF" after the headline number | Medium | Fee salience [03]; gap in market [02] |
| US ↔ UCITS twin table (filter by index) | "Get the full map + broker costs" | Low | Unique gap F4 |
| Broker route picker (Fio vs XTB vs T212 vs IBKR) | Feeds the calculator | Low–medium | Fees in [05] |
| Quiz / portfolio builder | Shortlist gated | High | Advice risk F5 |

## D5 — Form fields and consent
- **Fields:** e-mail only · first name + e-mail · two-step (tool first, then e-mail) · + phone (XTB; lower volume, callable lead). Evidence: fewer fields usually help but the classic tests are tiny; multi-step +52.9% vs +40.3% in one test [03].
- **Consent:**
  - (i) Delivering the requested result needs no marketing consent.
  - (ii) A separate **unticked** newsletter checkbox (compliant).
  - (iii) A single required checkbox bundling marketing consent: XTB does this, and a required GDPR checkbox cut sign-ups 15% in one test [log C3]. It is legally weaker (bundled consent, GDPR Art. 7(4)).
- **Double opt-in:** not legally required; gives proof of consent; ~4× fewer sign-ups but better opens [log C5].

## D6 — What happens after submit
- a Full result shown instantly on the page + copy by e-mail.
- b Result/PDF only by e-mail (forces a valid e-mail; deliverability risk).
- c Thank-you page as a second step. Options: one qualifying question (e.g. "which broker do you use?"), a link to the twin map, a share button, or a soft next step. Matched thank-you offers did well in one case study (weak) [03].
- d Short welcome sequence (2–3 e-mails).

The brief explicitly asks to think about this, so the README needs a rationale whichever option we pick.

## D7 — Section order (skeleton options)
1. **Tool-first:** Hero (ad promise) → calculator starts on the first screen → partial result → gate → how it works / sources → twin table → FAQ → disclaimers.
2. **Form-first:** Hero with inline form → value bullets → preview of the report → repeat CTA (XTB).
3. **Table-first:** Hero → ungated twin table → calculator → gate for full report.

Mobile constraints: a cookie banner covers half the first screen on every competitor page [02]. Above-the-fold share of attention ~57% (desktop study) [03]. LCP ≤ 2.5 s; speed correlates with form progression [log C4].

## D8 — Two ad angles (message match with the first screen)
Message match lifted conversion 39–48% in two non-finance tests [log C10]. Candidate angles (copy is illustrative only, not final):

| Angle | Example hook (CZ) | Evidence | Compliance note |
|---|---|---|---|
| Fee loss | "Kolik vás za 20 let stojí poplatky a směna na dolary?" | Fee salience [03]; Fondee "no hidden fees" [04] | Must use sourced numbers; no scare tactics |
| Access surprise | "VOO si u většiny brokerů nekoupíte. Jeho evropské dvojče stojí 0,07 % ročně." | F1, F3, F4 | Factual; avoid implying a recommendation |
| Calculation | "Spočítejte si, kolik vás stojí vaše ETF" | Fondee's live hook [02] | Neutral |
| Tax | "3 roky držení = bez daně. Víte, co to znamená pro vaše ETF?" | E1 | Tax claims must say they depend on circumstances (Art. 44) |

Platform: Meta (Facebook/Instagram) is realistically the only channel open to an unlicensed publisher (F6), with an open policy risk.

## D9 — Tone of voice and visual direction
- **Addressing:** "vy" is used on every Czech finance landing page seen. "Ty" appears in XTB's and Portu's ads; ~20% find "ty" annoying, more among over-55s (2017 survey) [log C6]. No finance-specific evidence either way.
- **Copy register:** Czechs think ads exaggerate (73%, 2025) [03]. Unbounce finance: grade 5–7 reading level converted best (18.1% vs 7.1%) [log C2].
- **Visual direction** (design options; not evidence-based):
  - (a) "data journalism": serif + tabular numbers, sourced footnotes, sober palette;
  - (b) "Czech fintech friendly": the green/illustration look of Portu and Fondee, familiar but undifferentiated;
  - (c) "receipt" metaphor: the cost result rendered as an itemised bill.

  All three avoid the generic "AI landing page" look (gradient hero, emoji bullets, stock icons).

## D10 — Data scope and sources
- **ETF universe:** 5–8 famous NYSE Arca ETFs (+ QQQ labelled as Nasdaq?) with UCITS twins · or a larger list.
- **Sources per field:**
  - listing venue: Nasdaq Trader ✔
  - TER/AUM/returns: issuer pages, hand-curated with an as-of date and a link to each source; their terms are personal-use ⚠
  - broker fees: official price lists
  - FX: ČNB API ✔
  - tax: law plus a Finanční správa link ✔
- **Freshness:** a visible "as of" date per row; manual refresh.

## D11 — Measurement, consent and expected conversion
- **Funnel events (proposal for discussion):** landing (with UTM) → first-screen engaged → tool start → tool complete → partial result viewed → form viewed → form started → submit → thank-you action.
- **Options:**
  - (a) consent-gated GA4 + Meta Pixel (Consent Mode);
  - (b) cookieless analytics such as Vercel Analytics or Plausible: CZ legality contested; Matomo says consent is needed; the ÚOOÚ says nothing on cookieless [04];
  - (c) first-party server-side event log without identifiers, legally unclear;
  - (d) a hybrid.
  - Trade-off: legal cleanliness vs complete funnel data.
- **Expected conversion (input for README):** investing pages median 3.9%, financial services 8.3%, finance paid social 9.3% (optimistic medians) [log C1]. A required marketing checkbox costs about 15%; double opt-in costs about 4×. A defensible planning range is roughly **3–9% visitor → lead**, with the method shown in the README.

---

## Open questions the research could not settle
1. Does Meta require regulator authorisation for an unlicensed, educational investment-comparison advertiser targeting CZ? (D6)
2. Is cookieless or server-side analytics allowed without consent in CZ?
3. Does the "ty"/"vy" choice affect conversion in Czech finance?
4. Where should the gate go (before or after the result) for finance calculators? There is no controlled evidence.
5. Does the issuer-data terms issue (personal use) matter for a non-commercial demo page with link-outs?
