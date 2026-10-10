# Verification log — research agents

The lead agent (Claude Opus 5.5) re-checked claims from each Sonnet 5.5 research report by re-opening the cited source.

**Selection of claims:** each agent's own "3 least confident claims" + numbers (benchmarks, fees, survey figures) + legal/regulatory statements + anything surprising.

**Result codes:** `CONFIRMED` source says it · `WRONG` source says something else · `UNSUPPORTED` source does not contain it / not found · `OUTDATED` superseded by newer info · `PARTIAL` partly right / overstated

| # | Report | Claim (as written by agent) | Source checked | Result | Fix applied |
|---|---|---|---|---|---|
| C1 | 03 | Unbounce finance: financial services median 8.3%, investing 3.9%, paid social 9.3% (IG 15.5%, TikTok 10.8%, FB 10.1%), mobile 11.5% vs desktop 9% | unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate | CONFIRMED | None. Note: the page calls the mobile figure an "average", not a median, and contradicts itself on the mobile/desktop gap (22% vs 27.8%). |
| C2 | 03 | Readability: grade 5–7 → 18.1% median vs college 7.1%; 195–715 words best | same | CONFIRMED | — |
| C3 | 03 | Required GDPR consent checkbox: 47.1% → 39.8% (−15.4%), n=3,040, 8 days; "the offer was a free guide" | nextafter.com/?p=15022 | PARTIAL | Numbers correct. The page does **not** state what the offer was, so "free guide" is unsupported. Marked in report. |
| C4 | 03 | Speed: 0.1 s faster → +21.6% progression to form submission for lead-gen brands "(37 brands, 2019)" | web.dev/case-studies/milliseconds-make-millions | PARTIAL | +21.6% and +7% page views are correct. But 37 brands is the whole study across all verticals; the page doesn't give the number of lead-gen brands. Marked in report. |
| C5 | 03 | Double opt-in: 1.28% vs 0.33% sign-up, 27.36% vs 35.72% open, 2.36% vs 4.19% CTR | getresponse.com/blog/single-opt-in-vs-double-opt-in | CONFIRMED | — |
| C6 | 03 | Tykání bothers ~20% (n=513, AKA/Nielsen Admosphere, 2017), South Bohemia 34%, more over-55s | mediaguru.cz (13 Mar 2017) | CONFIRMED | March 2017 is the publication date; fieldwork date not given. |
| C7 | 03 | 77% of Czechs trust ČNB (STEM, June 2026) | cnb.cz news, 2 Jul 2026 | CONFIRMED | — |
| C8 | 03 | (agent's least-confident) Scheibehenne 2010 choice overload: 63 conditions, N=5,036, mean effect ≈ 0 | search: IDEAS/RePEc, unibas, ScienceDaily | CONFIRMED (via several secondary sources; paper itself not opened) | Agent was right to tag it INFERRED; consistent across sources. |
| C9 | 03 | ConvertFlow quiz funnels: 7.85% / 11.28% / 10.45% lead capture, 1,063 campaigns, means | convertflow.com benchmark, 23 Sep 2026 | CONFIRMED | — |
| C10 | 03 | Message match (DTS): 0.49% → 0.73% (+47.6%), n=239,607, 2016 | nextafter.com/?p=13009 | CONFIRMED | — |
| B1 | 02 | XTB e-book form: first name, surname, e-mail, phone all required + required bundled consent checkbox; "about 25" hidden attribution fields | HubSpot public form JSON (fetched with curl, parsed) | CONFIRMED | 26 hidden fields, not ~25: trivial. |
| B2 | 02 | Finax end-2025: 102,600 clients, > €1.4 bn AUM (report 27 Mar 2026) | finax.eu blog | CONFIRMED | Note: €270 m of the AUM is a B2B partnership (UnitPlus), not Finax retail. |
| B3 | 02 | Fondee 2022: revenue ~4.5 M CZK, loss 21 M CZK (CzechCrunch 2023) | cc.cz, 15 Sep 2023 | CONFIRMED | — |
| B4 | 02 | Finex ranks Fondee 5th, 87%, 25,000+ clients, updated 14 Sep 2026 (vs "test winner" badge on Fondee's site) | finex.cz/recenze/fondee | CONFIRMED | The Finex review never calls Fondee a test winner; the contradiction the agent flagged is real. |
| B5 | 02 | Finanzfluss newsletter: 135,000+ readers, weekly on Fridays | finanzfluss.de/newsletter | CONFIRMED | — |
| B6 | 02 | XTB thank-you page: "Děkujeme Vám za přihlášení", e-book by e-mail within minutes, zero-fee upsell button | cz.xtb.com/nejoblibenejsi-etf-v-xtb-typ | CONFIRMED | — |
| B7 | 02 | Finex screener: 71 ETFs incl. VTI, SPY, QQQ in USD, no listing/domicile/availability note | finex.cz/etf-screener | CONFIRMED | Extra: the currency display is inconsistent (EUR in list, USD in detail). |
| A1 | 01 | "SPY, VOO and IVV are unavailable to most EU retail clients under PRIIPs/KID; Fio and Patria are exceptions" (Finex, Sep 2026) | finex.cz/nejzajimavejsi-etf-fondy-kopirujici-sp-500 (updated 25 Sep 2026) | PARTIAL | The core claim holds: PRIIPs, Fio (7.95 USD per order up to 100 shares) and Patria are named as exceptions. But the article names **only SPY**; the agent added VOO and IVV. Corrected in the report. |
| A2 | 01 | Raiffeisenbank: 39% invest / 24% considering / 38% no plans; fear of loss 73%, lack of money or know-how 71%; retirement 78%, living standard 63%, inflation 39% | e15.cz, 20 Jul 2026 | CONFIRMED | Lack of money (71%) and lack of know-how (71%) are two separate items that the agent merged. Sample size not stated on this page. |
| A3 | 01 | "Only ETF-specific population figure: about 14% of Czechs (Generali 2025)" | e15.cz (Generali/Ipsos, Apr 2025) | WRONG (misread) | The source only says ETFs keep "a stable share around 14%" and never says of what. Reading it as 14% of the population is unsupported. Corrected in the report. |
| A4 | 01 | DIP: 244,217 contracts on 31 Mar 2026 (218k end-2025); 48,000 CZK deduction; employer up to 50,000 CZK | zpravy.kurzy.cz, 20 Apr 2026 | CONFIRMED | — |
| A5 | 01 | Ad reach: Facebook 5.00M, Instagram 3.95M, TikTok 2.13M (18+), YouTube 8.08M; Instagram 52.5% female | datareportal.com Digital 2026 Czechia | CONFIRMED | Published 8 Nov 2025 (agent wrote Oct 2025; trivial). |
| A6 | 01 | (agent's least-confident) Voice-of-customer quotes "pofidérního brokera riziko spíš zvýšit než snížit" and "nemám v ně důvěru, že vše bude bezproblémové" (6 Sep 2026) | forum.finexpert.e15.cz t=1343626 | CONFIRMED | Exact wording and dates match. Other quotes not checked one by one; re-check any quote before using it in copy. |
| D1 | 04 | Google financial-services verification covers Czechia, rolling enforcement from 23 Jul 2026; "investment" and "brokerages" in scope; third parties not authorised by a regulator cannot apply themselves | support.google.com/adspolicy/answer/17127726 | CONFIRMED | Second date (15 Sep 2026, regulator table) not re-checked; agent flagged the conflict correctly. |
| D2 | 04 | TikTok CZ: "Investment services" allowed with local licence, disclosures, 18+; "Advisory services" not allowed | ads.tiktok.com financial-services policy | CONFIRMED | — |
| D3 | 04 | ČNB (23 Jan 2025): advice = individualised recommendation on a specific instrument, needs licence; direct vs indirect recommendation; required contents of a direct one | cnb.cz notice for finfluencers | CONFIRMED | — |
| D4 | 04 | ÚOOÚ: analytics cookies need consent; "reject" must be in the first layer; 12-month consent, 6 months before re-asking; same rules for local storage/fingerprinting; pixels and server-side not covered | uoou.gov.cz Q&A cookies | PARTIAL | Everything holds except strength: the ÚOOÚ presents first-layer "reject" as good practice ("as easy as accepting, same layer, similar prominence"), not as an explicit requirement. Agent's summary said "wants". |
| D5 | 04 | ESMA factsheet via Consob (12 Jan 2026): "not investment advice" disclaimer does not protect; label paid content; disclose holdings | consob.it press release | CONFIRMED | — |
| D6 | 04 | (agent's least-confident) Meta financial-services policy: licence in targeted country "where required", verification possible | transparency.meta.com (still unreadable via fetch) + web search | UNCHANGED — INFERRED | Lead agent also could not read the policy body. Snippets agree with the agent. **Open item for the decision brief:** whether Meta requires authorisation for a non-licensed educational publisher targeting CZ is unknown. |
| E1 | 05 | 40M CZK cap on the time-test exemption for securities applied only in 2025, abolished from 1 Jan 2026, kept for crypto; 100k CZK value test stays | financnisprava.gov.cz press release, 5 Jan 2026 | CONFIRMED | **The lead agent's own prompt (05-data-facts.md, Q6) asserted the 40M cap as current. The research agent caught and corrected it.** See L1. |
| E2 | 05 | Fio: "U nás můžete obchodovat i s americkými ETF"; Fio offers no ETFs itself, only market access; no PRIIPs/KID mention | fio.cz/akcie-investice/etf | CONFIRMED | — |
| E3 | 05 | SPY, VOO, IVV, VTI, VT, SCHD listed on NYSE Arca (P); QQQ on Nasdaq; ETF counts: Arca 2,737, Cboe BZX 1,655, NYSE 79, NYSE American 0 | nasdaqtrader.com otherlisted.txt / nasdaqlisted.txt (file 2026-10-09 21:31), re-downloaded and counted by lead agent | CONFIRMED | Counts match exactly (ETF=Y, test issue=N). |
| E4 | 05 | ČNB USD rate 21.745 CZK on 2026-10-09 via JSON API | api.cnb.cz/cnbapi/exrates/daily | CONFIRMED | EUR 24.365 same day. |
| E5 | 05 | (agent's least-confident) Fio CZK/USD table: buy 21.12293 / sell 22.40707 vs ČNB 21.745 (≈ ±3%); undated; better rates above USD 10k | fio.cz devizove-konverze | CONFIRMED | Table has no date ("Ke dni" blank). Fio says actual conversions use e-Broker rates, which may differ. Treat ±3% as indicative only. |
| E6 | 05 | DEGIRO blocks new purchases of US ETFs since 2 Jan 2018; holding/selling allowed; "a KID in English is not enough, it must be in the local language and passported" | degiro.com/uk helpdesk | PARTIAL | Block, date and hold/sell confirmed. The local-language/passporting sub-claim is **not on this page**; it says documentation is missing "and/or" not in English. Sub-claim unsupported. Marked in report. |
| E7 | 05 | FMP requires a Data Display and Licensing Agreement for public display | site.financialmodelingprep.com/terms-of-service | NOT CHECKED (403) | Agent's VERIFIED tag can't be re-confirmed; the conclusion (free APIs don't allow public display) still rests on Alpha Vantage, Twelve Data and Tiingo. |
| L1 | prompt 05 | **Lead-agent error:** the prompt for agent E stated "the 40 million CZK cap introduced in 2025" as a current fact to confirm | — | WRONG (lead agent) | The cap was abolished for securities from 2026. The research agent did not just confirm the premise, it corrected it with a primary source. Lesson: prompts should ask questions, not assert facts from model memory. |
| B8 | 02 | (agent's least-confident) Similarweb traffic estimates | — | NOT CHECKED | Free-tier Similarweb needs JS/login. Already tagged INFERRED; treat only as an order-of-magnitude signal. |

## Totals

| Report | Claims re-checked | Confirmed | Partial | Wrong | Inconclusive | Not checkable |
|---|---|---|---|---|---|---|
| 01 Audience (A) | 6 | 4 | 1 | 1 | – | – |
| 02 Competitors (B) | 7 | 7 | – | – | – | 1 (Similarweb, login) |
| 03 Conversion (C) | 10 | 8 | 2 | – | – | – |
| 04 Ads & compliance (D) | 6 | 4 | 1 | – | 1 (Meta policy unreadable) | – |
| 05 Data & facts (E) | 6 | 5 | 1 | – | – | 1 (FMP ToS, 403) |
| **Total** | **35** | **28 (80%)** | **5** | **1** | **1** | **2** |

Plus one error by the lead agent itself (L1).

## Where the agents went wrong: patterns

1. **Every number was right; the qualifiers around them were not.** No re-checked figure was wrong. All 6 problems were about scope or interpretation:
   - tickers added that the source didn't name (A1);
   - an ambiguous "14% share" read as 14% of the population (A3);
   - a study-wide sample size attributed to one sub-group (C4);
   - a detail invented to fill a gap ("the offer was a free guide", C3);
   - a sub-claim merged in from elsewhere (E6);
   - guidance upgraded to a requirement (D4).
2. **The errors sat in claims tagged `VERIFIED`, not `INFERRED`.** The agents' self-reported "least confident" claims were mostly fine (C8, A6, E5) or honestly unresolved (D6). A `VERIFIED` tag means "I opened the page", not "my reading of it is correct". Interpretation is where checking pays off.
3. **Self-correction against the prompt worked.** Agent E refused a false premise in the lead agent's own prompt (L1) and cited a primary source.
4. **Access limits shaped the evidence.** Reddit, Facebook groups, YouTube comments, Meta's policy page, IBKR and Revolut help pages were not reachable by fetch. Voice of customer therefore comes from one forum and the App Store, and the Meta ad policy stays an open question.

## How this was applied
- Every PARTIAL/WRONG claim is corrected in place in the report, marked *(lead-agent check …)* with a pointer to this log.
- The decision brief (00-decision-brief.md) uses only CONFIRMED or explicitly flagged claims.
