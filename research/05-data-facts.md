# Data sources & product facts: NYSE-listed ETFs for a Czech retail investor

Research only, no recommendation. All sources accessed 2026-10-10. Tags: `VERIFIED` = I opened the page/file and it states this; `INFERRED` = my reasoning, or the page could not be read (search-tool summary only). Items that changed during 2024-2026 are marked **[CHANGED 2024-26]**.

## Summary (max 10 bullets)

- **Access is the central fact.** US-domiciled ETFs (SPY, VOO, IVV, VTI, SCHD, QQQ) have no PRIIPs KID, so most EU brokers block *new purchases* by retail clients. Verified for DEGIRO, LYNX and Saxo (pages dated 2018-2022); IBKR, Trading 212 and XTB only indirectly. Fio is the Czech broker that states it lets clients trade US ETFs. No evidence found that any change in 2024-2026 opened this up.
- **Nothing changed for US ETFs in the EU rules yet.** The Retail Investment Strategy deal (Dec 2025) rewrites the KID but the Parliament release does not mention non-EU funds; formal adoption was not confirmed. **[CHANGED 2024-26]**
- **"NYSE" is usually NYSE Arca.** On 2026-10-09 the Nasdaq Trader directory lists SPY, VOO, IVV, VTI, VT, SCHD, VYM on NYSE Arca (code P); QQQ, QQQM, BND, VXUS are on Nasdaq. NYSE American lists 0 ETFs; NYSE (main board) lists only 79.
- **UCITS equivalents exist for most** (CSPX/SXR8, VUSA, VUAA, VWCE, CNDX, EQQQ; TER 0.07-0.30%). **No exact UCITS copy of SCHD was found**; the nearest are different indices and cost 0.29-0.35%.
- **Data sources:** issuer pages (SSGA, iShares, Vanguard) give the best per-data-point citations with as-of dates, but their terms limit public reuse to personal use or need written permission. Free API tiers (Alpha Vantage, FMP, Twelve Data, Tiingo) are internal/non-display; FMP and Alpha Vantage explicitly bar public display without a licence. SEC EDGAR and the Nasdaq Trader directory are free, keyless and unrestricted by stated licence (Nasdaq's lookup page notes its fund data are internal non-commercial only).
- **Costs are lopsided.** Fio US trade: USD 7.95 (<=100 pcs) but a CZK-USD spread of about 3% vs ČNB on its published table. XTB: 0% commission, 0.5% FX. Trading 212: 0.15% FX. IBKR: auto-FX 0.03%. DEGIRO: 0.25% FX + EUR 1-3 per trade.
- **Czech tax correction:** the 40 million CZK cap applied to securities **only for 2025** and was abolished from 1 Jan 2026 (Finanční správa, 5 Jan 2026). It remains for crypto. The 3-year time test and the 100 000 CZK proceeds test remain. **[CHANGED 2024-26]**
- **Dividends:** US withholding is 15% with a W-8BEN (IRS treaty table, rate also covers RIC/ETF dividends), 30% without. Foreign dividends can be put in a separate 15% base (§8(8) ZDP); foreign tax is credited (§38f).
- **ČNB FX:** text file and JSON API are free; USD = 21.745 CZK on 2026-10-09; published about 14:30 each working day. Reuse terms could not be opened.

## Findings

### 1. Accessibility of US ETFs (PRIIPs)

- **Rule.** Before a PRIIP is offered to retail investors its manufacturer must draw up a KID (Art. 5(1)); whoever sells or advises must give the KID in good time (Art. 13). A retail investor is a MiFID retail client. [VERIFIED, S1]
- **Practical effect.** US issuers do not publish KIDs. Saxo: "US ETFs have NOT issued any KIDs", so retail orders are rejected. [VERIFIED, S6, c. 2022]. DEGIRO has refused new purchases since 2 Jan 2018 but holding/selling is allowed [VERIFIED, S4]. LYNX says retail clients cannot buy US ETFs; only professional clients can [VERIFIED, S5]. ~~A KID in English is not enough for DEGIRO: it must be in the local language and passported [VERIFIED, S4].~~ *(Lead-agent check: the DEGIRO page says only that documentation is missing "and/or" not in English. The local-language/passporting detail is not on it, so treat as unsupported. See 99-verification-log E6.)*
- **Czech nuance (execution-only).** ČNB position RS2018-12: a dealer that only executes orders or gives market access, without offering or advising, need not supply the KID under Art. 13(1); offering a PRIIP without a KID breaches the regulation. [VERIFIED, S7, 2018]. Fio's current ETF page says "U nás můžete obchodovat i s americkými ETF" and that Fio offers no ETFs itself, only market access (advice only in the Osobní makléř service) [VERIFIED, S8, S9]. Fio's 2020/2022 articles claim ČNB took a lenient view, so clients can trade US ETFs "bez omezení" [VERIFIED as Fio's own claim, S10, S11]. I found no ČNB text that names US ETFs.
- **Broker matrix** (retail, new purchase of NYSE Arca ETFs):
  - Fio: allowed (above). 
  - LYNX: blocked unless professional [VERIFIED, S5]. 
  - DEGIRO: blocked (2018 notice; no newer one found) [VERIFIED, S4]. 
  - Saxo: blocked [VERIFIED, S6]. 
  - IBKR: blocked for retail; workarounds listed by IBKR are EU-listed equivalents, CFDs, professional reclassification [INFERRED: IBKR knowledge base returned 403; content from a search-tool summary, S16]. LYNX routes via Interactive Brokers Ireland [VERIFIED, S31]. 
  - Trading 212: a community moderator thread (July 2021) lists US-domiciled ETPs as ineligible for the EU entity Trading 212 Markets Ltd [VERIFIED as post content, community not official, S15]. 
  - XTB: no official statement found. A 2020 blog (updated 2022) says XTB offers only European equivalents or CFDs [INFERRED, dated, S13]; XTB's 2026 fee table has a separate "ETF CFD" section [VERIFIED, S33]. 
  - Revolut: could not read primary pages (403); availability of US-listed ETFs to Czech users unconfirmed [INFERRED]. 
  - Portu / Fondee: managed portfolios, so no direct choice of NYSE ETFs [INFERRED]; Portu base fee about 1% p.a. per a review [INFERRED, S39]. No Fondee fee found.
- **Routes around it.**
  1. *Professional client (MiFID II Annex II, II.1):* at least two of three: avg 10 trades per quarter of significant size over 4 quarters; portfolio incl. cash above EUR 500 000; at least 1 year working in the financial sector in a relevant post; plus written request and warning procedure [VERIFIED, S2]. Loses investor protections (same Annex II.2).
  2. *Options exercise:* buy US call options and exercise to receive the ETF (2020 blog; IBKR). Costs: time value, spread, contract of 100 shares; the author says options are treated as derivatives for tax, so no time test [VERIFIED as the blog's description, S14, 2020-21]. Compliance with the spirit of PRIIPs is unclear [INFERRED].
  3. *US broker account* (TradeStation, tastytrade named in 2020) [VERIFIED as blog claims, S12]; CFDs; futures.
  4. *US ETFs that publish a KID:* No evidence found of any.
  5. *UCITS equivalent* (section 3).
- **2024-2026.** Parliament/Council reached a provisional deal on the Retail Investment Strategy (Parliament release dated 18 Dec 2025): KID revised with "forward-looking" scenarios; approvals still pending; no mention of non-EU funds [VERIFIED, S17]. A Sept 2026 commentary says it does not create blanket US ETF access and names no broker that allows purchases [VERIFIED as a claim, S18]. **[CHANGED 2024-26]**

### 2. What "NYSE" means for ETFs

- NYSE describes NYSE Arca as "the leading U.S. exchange for the listing and trading of exchange-traded products" [VERIFIED, S22]. NYSE American is for "growing companies", small-cap primary listings [VERIFIED, S23].
- Nasdaq Trader `otherlisted.txt` (file stamp 2026-10-09 21:31): ETFs by listing exchange, excluding test issues, from my own count: NYSE Arca 2 737; Cboe BZX (code Z) 1 655; NYSE (N) 79; NYSE American (A) 0; code "F" 7 (undocumented in the legend; names suggest Texas Stock Exchange, e.g. TXS) [VERIFIED file, count mine; "F" meaning INFERRED, S19, S21]. Nasdaq-listed ETFs: 1 293 (S20).
- Where the big ETFs list (same file): SPY, VOO, IVV, VTI, VT, VYM, SCHD, DGRO, JEPI, IWM, GLD, AGG = NYSE Arca; QQQ, QQQM, BND, VXUS = Nasdaq [VERIFIED, S19, S20]. Issuer pages confirm NYSE Arca for SPY, IVV, VOO, VTI [VERIFIED, S24-S27]. So a page titled "NYSE ETFs" would in practice mean NYSE Arca and would exclude QQQ.
- Ticker note: SPLG is absent from the 2026-10-09 file, SPYM ("State Street SPDR Portfolio S&P 500 ETF") is present, suggesting a rename [INFERRED]. Vanguard Total Stock Market ETF is now "Vanguard Morningstar Total Stock Market ETF" (index renamed from CRSP to Morningstar, completed 28 Jul 2026, methodology unchanged) [VERIFIED, S27, S30]. **[CHANGED 2024-26]**

### 3. UCITS equivalents (data from justETF profile pages, holdings dated 31 Aug 2026, other data Oct 2026; justETF is secondary, S31)

| US ETF | UCITS fund (ISIN) | Tickers | TER | Policy | Fund size | Index |
|---|---|---|---|---|---|---|
| VOO / IVV / SPY | iShares Core S&P 500 UCITS Acc (IE00B5BMR087) | SXR8 (Xetra), CSPX | 0.07% | Acc | EUR 141.4 bn | S&P 500 |
| same | Vanguard S&P 500 UCITS Dist (IE00B3XXRP09) | VUSA | 0.07% | Dist, quarterly | EUR 48.2 bn | S&P 500 |
| same | Vanguard S&P 500 UCITS Acc (IE00BFMXXD54) | VUAA | 0.07% | Acc | EUR 33.4 bn | S&P 500 |
| VT | Vanguard FTSE All-World UCITS Acc (IE00BK5BQT80) | VWCE | 0.14% | Acc | EUR 55.1 bn | FTSE All-World |
| QQQ | iShares Nasdaq 100 UCITS Acc (IE00B53SZB19) | SXRV, CNDX | 0.30% | Acc | EUR 27.0 bn | Nasdaq-100 |
| QQQ | Invesco EQQQ Nasdaq-100 UCITS (IE0032077012) | EQQQ | 0.30% | Dist, quarterly | EUR 13.2 bn | Nasdaq-100 |
| SCHD (approx.) | SPDR S&P U.S. Dividend Aristocrats UCITS Dist (IE00B6YX5D40) | SPYD, USDV | 0.35% | Dist, quarterly | EUR 3.3 bn | S&P High Yield Dividend Aristocrats |
| SCHD (loose) | Vanguard FTSE All-World High Dividend Yield UCITS (IE00B8GKDB10) | VGWD, VHYL | 0.29% | Dist, quarterly | EUR 10.0 bn | FTSE AW High Div Yield (global, 2 348 holdings) |

All are Irish-domiciled [VERIFIED, S31]. Two blogs state no UCITS ETF tracks SCHD's Dow Jones U.S. Dividend 100 index [INFERRED, search summaries]. VT tracks a different FTSE index than VWCE (FTSE Global All Cap vs All-World): not verified this session [INFERRED]. justETF 1/3/5-year returns (e.g. CSPX +21.2% / +74.6% / +94.4%) do not state currency or annualisation; not comparable with USD issuer returns [VERIFIED as displayed].

US-side reference facts: SPY TER 0.0945%, AUM USD 817.2 bn (8 Oct 2026), quarterly [VERIFIED, S24]; IVV TER 0.03%, AUM USD 896.4 bn (9 Oct 2026), so IVV is now larger than SPY [VERIFIED, S25]; VOO TER 0.03% (as of 28 Apr 2026), inception 7 Sep 2010, 30 Sep 2026 returns about 15.7% 1y / 22.9% 3y / 13.8% 5y / 15.3% 10y, SEC yield 1.00% [VERIFIED, S26]; QQQ TER 0.18% (Invesco, 30 Jun 2026), Alpha Vantage shows net assets USD 498.9 bn [VERIFIED, S28, S32]; SCHD TER 0.06%, AUM USD 108.7 bn (5 Oct 2026), Dow Jones U.S. Dividend 100 [VERIFIED, S29].

### 4. Data sources for a public comparison page

| Source | Fields | Update | Access | Free tier | Terms on public display |
|---|---|---|---|---|---|
| SSGA (SPY) | TER, inception, AUM, holdings, returns, yields | daily | page + xlsx downloads (holdings, NAV, premium/discount, all-fund product data) | free | Site may not be "reproduced, copied or transmitted" without written consent [VERIFIED, S43] |
| iShares (IVV) | TER, inception, net assets, holdings count, YTD, distribution frequency | daily | page, holdings CSV, Excel | free | Content for "personal, non-commercial use"; public/commercial reuse needs written permission [VERIFIED, S44] |
| Vanguard (VOO, VTI) | TER, inception, returns 1/3/5/10y, SEC yield, NAV | daily/monthly | data embedded in page; no public API found | free | Personal, noncommercial licence; bars repeated automated access [VERIFIED, S45] |
| Schwab (SCHD) | n/a | n/a | HTTP 403 to automated fetch | n/a | Not readable |
| Invesco (QQQ) | TER, inception (as of 30 Jun 2026) | quarterly | page | free | Not checked |
| SEC EDGAR | prospectus fee tables, N-PORT, N-CEN; `company_tickers_mf.json` maps ticker to series (VOO, IVV, VTI, QQQ, SCHD yes; SPY no, it is a UIT) | continuous; RR and N-PORT data sets quarterly (latest 2026 Q2 / Q3) | JSON on data.sec.gov, ZIP data sets | keyless; 10 requests/s | No licence stated; accuracy disclaimer [VERIFIED, S46-S49]. Whether RR sets contain fee-table values: not confirmed |
| Nasdaq Trader `nasdaqlisted.txt`, `otherlisted.txt` | ticker, name, exchange, ETF flag, round lot, test flag | several times daily | pipe-delimited files over HTTPS | free | Directory page states no licence; Symbol Lookup says Nasdaq Fund Network data are "internal non-commercial usage only unless separately licensed" [VERIFIED, S21, S50] |
| NYSE listings directory | n/a | n/a | No evidence found of a downloadable file | n/a | n/a |
| Stooq | prices | daily | automated request got a JavaScript proof-of-work page [VERIFIED]; third parties report key/captcha and daily hit limits [INFERRED] | n/a | No evidence found (terms not located) |
| Alpha Vantage | `ETF_PROFILE`: net assets, TER, turnover, yield, inception date, sectors, holdings (demo key works for QQQ) | daily (QQQ stamped 2026-10-09) | JSON/CSV API | 25 requests/day; paid from USD 49.99/mo | ToS: personal, non-commercial; providing data to others counts as commercial [VERIFIED, S51-S53] |
| Financial Modeling Prep | EOD prices, profile; ETF holdings only on Ultimate (USD 139/mo, USD 99 annual) | daily | JSON API | 250 calls/day, 500 MB/30 days | Displaying data on a website requires a Data Display and Licensing Agreement [VERIFIED, S54-S55] |
| Twelve Data | US ETF prices; fundamentals not on Basic | real-time on paid | JSON API | 8 credits/min, 800/day | Basic = "internal non-display usage" [VERIFIED, S56] |
| Tiingo | 60 713 ETFs/funds prices; fundamentals add-on | daily | JSON API | 500 symbols/mo, 50 req/h, 1 000/day | "Internal Use Only"; redistribution via sales [VERIFIED, S57] |
| Yahoo Finance | quotes, fund data | n/a | unofficial | n/a | ToS bars automated collection and commercial reuse [VERIFIED, S58] |
| justETF | TER, index, size, replication, returns, tickers | daily | web only | free | T&C 3.1 bans programs for automated price inquiries [VERIFIED, S59] |

Takeaway for citation: per-data-point citation with as-of date is only available from issuer pages and EDGAR; every free commercial API I checked forbids public display.

### 5. Costs for a Czech investor (price-list dates in brackets)

| Broker | Commission | CZK/USD conversion | Notes |
|---|---|---|---|
| Fio e-Broker (list effective 1 Jul 2026) | US: online order free; <=100 pcs USD 7.95; >100 pcs USD 9.95; SEC fee 0.00206% of sales | No fee line; published table USD buy 21.12293 / sell 22.40707 vs ČNB 21.745 (-2.9% / +3.0%); better rates above USD 10 000, 9:00-16:30; conversion at settlement possible | Table date not shown but the ČNB column matches 9 Oct 2026; check in e-Broker. FINRA fee passed on at USD 0 since 21 Jul 2025 **[CHANGED 2024-26]** [VERIFIED, S33, S34] |
| XTB (table 29 Apr 2026) | Real stocks/ETFs: 0% to EUR 100 000 monthly turnover, then 0.2% (min EUR 10) | 0.5% markup (0.8% weekend/holiday on transfers) | Custody 0.02% p.a. above EUR 250 000; up to 30% US withholding if tax residence unidentified [VERIFIED, S35]. US NYSE Arca ETFs not shown as real instruments |
| Trading 212 | "Commission-free" [INFERRED: marketing snippet] | 0.15% FX fee (help article, undated) [VERIFIED, S36] | US ETFs not available to EU entity (2021 post) |
| Interactive Brokers Ireland (page undated; comparison "as of 3 Aug 2026") | US fixed USD 0.005/share, min USD 1, max 1%; tiered USD 0.0035 (min 0.35); Xetra/Austria fixed 0.05% min EUR 3, tiered 0.05% min EUR 1.25 max EUR 29 | Auto-FX 0.03% [VERIFIED, S37-S39]; manual 0.002% + USD 2 min [INFERRED, third parties] | US ETFs blocked for retail |
| DEGIRO (1 Jan 2026) | ETF Selection EUR 0 + EUR 1 handling; other ETFs EUR 2 + EUR 1 | 0.25% (auto); manual EUR 10 + 0.25%; EUR-CZK free | EUR 2.50 per foreign exchange per year [VERIFIED, S40] |
| LYNX (web page, undated) | US stocks USD 0.01/share, min USD 5, max 2%; Tradegate EUR 1 + 0.15% (max EUR 99) | Client converts; no rate stated; No evidence found | US ETFs professional only [VERIFIED, S41, S5] |
| Revolut (CZ ETF page) | Commission-free orders: Premium 5, Metal/Ultra 10 per month; Standard/Plus not stated on page; other sources conflict (0, 1, or CZK 25 extra) | No evidence found | [VERIFIED page, rest INFERRED, S42] |

Illustration (my arithmetic, INFERRED): buying USD 1 000 via Fio costs about USD 7.95 commission (0.8%) plus about 3.0% spread vs ČNB; via IBKR fixed about USD 1 plus 0.03%; via XTB or Trading 212 into a EUR-listed UCITS ETF the conversion is 0.5% or 0.15% plus any CZK-EUR step.

### 6. Czech tax facts (zákon č. 586/1992 Sb., version valid 1 Aug-31 Dec 2026, S60)

- **Proceeds test (hodnotový test):** §4(1)(t): sales of securities are exempt if total proceeds in the tax year do not exceed CZK 100 000 (proceeds, not profit; all securities sales are added up) [VERIFIED law; "proceeds not profit" from the wording and blogs]. 
- **Time test:** §4(1)(u): exempt if more than 3 years between acquisition and sale [VERIFIED]. Each purchase tranche has its own period [INFERRED, blog].
- **40 million CZK cap [CHANGED 2024-26]:** introduced for 2025 [INFERRED, S61, S62]; abolished from 1 Jan 2026 for securities and business shares, kept for crypto (§4(3)); Finanční správa, 5 Jan 2026 [VERIFIED, S63]. The brief's premise is therefore outdated for 2026.
- **Taxable sales:** §10(1)(b)(2) other income; income less purchase price; rates §16: 15% up to 36x average wage, 23% above [VERIFIED].
- **Dividends:** §8(1)(a) includes fund dividends. Czech-source: withholding 15% (§36) as a separate base. Foreign-source: included gross in the return (§8(4)); optional separate base at 15% (§8(8), §16a) [VERIFIED].
- **US withholding:** statutory 30%; reduced via W-8BEN [VERIFIED, IRS page reviewed 23 Jul 2026, S64]. Czech-US treaty: 15% general, 5% for qualifying companies; the 15% also applies to dividends from RICs (ETFs) [VERIFIED, IRS Table 1, Rev. May 2023, S65]. W-8BEN stays valid to the end of the 3rd calendar year after signing [VERIFIED, S66]. XTB states the 30% default when residence is unidentified [VERIFIED, S35].
- **Foreign tax credit:** §38f simple credit, capped at Czech tax on that income; proof by foreign tax authority certificate, or payer/depositary confirmation in justified cases [VERIFIED].
- **Accumulating vs distributing:** distributing funds create taxable dividends each year; accumulating funds create none and are taxed on sale under §10 with the tests [INFERRED]. No primary source read on how Czech authorities treat reinvested income of foreign accumulating funds; No evidence found. Fund-level withholding in Irish UCITS: No evidence found.
- **FX in the return:** ČNB daily rate on the day of income/expense, or the yearly "jednotný kurz" (average of month-end ČNB rates); the two cannot be mixed in one year (§38) [VERIFIED].
- **DIP:** deduction up to CZK 48 000 per year, shared with pension savings and life insurance (§15(6)); payout only after 120 months and from age 60 (§15b); on early exit the last 10 years of deducted contributions become §10 income; DIP defined per capital-markets law or an equivalent EEA product (§15(5)) [VERIFIED]. When the 48 000 limit started: not verified. Which DIP providers hold NYSE-listed ETFs: No evidence found.

### 7. ČNB FX rates

- Text file: `https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt`; first line "09.10.2026 #195", header `země|měna|množství|kód|kurz`, decimal comma; `?date=DD.MM.YYYY` selects a day [VERIFIED].
- JSON: `https://api.cnb.cz/cnbapi/exrates/daily?lang=EN` returns `{"rates":[...]}`; USD row: validFor 2026-10-09, rate 21.745; `.../daily-year?year=2026` returns the whole year [VERIFIED].
- Published each working day around 14:30; valid for that day and the following weekend/holiday [VERIFIED, S67]. §38(5) ZDP makes the ČNB rate the legal "kurz pro přepočet daně" [VERIFIED].
- Terms: the page shows "© ČNB 2026" and links to "Podmínky užívání internetových stránek ČNB", which I could not open; rate limits unknown. No evidence found.

## Evidence table

| Claim | Number/detail | Source URL | Year | Tag |
|---|---|---|---|---|
| KID required before retail offer | Art. 5(1), Art. 13 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R1286 | 2014 | VERIFIED |
| Saxo: US ETFs have no KIDs | orders rejected | https://home.saxo/content/commentaries/ppu/partner-product-update/etf-kid-solution-for-wl-partners-under-priips-23092022 | c.2022 | VERIFIED |
| DEGIRO blocks new US ETF purchases | since 2 Jan 2018 | https://www.degiro.com/uk/helpdesk/trading-possibilities/why-cant-i-trade-us-etfs | 2018 | VERIFIED |
| LYNX: retail cannot buy US ETFs | professional only | https://www.lynxbroker.com/service/products-and-regulations/regulations/key-information-document/ | undated | VERIFIED |
| ČNB: execution-only needs no KID | Art. 13(1) | https://www.cnb.cz/cs/dohled-financni-trh/legislativni-zakladna/stanoviska-k-regulaci-financniho-trhu/RS2018-12/ | 2018 | VERIFIED |
| Fio allows US ETFs | "U nás můžete obchodovat i s americkými ETF" | https://www.fio.cz/akcie-investice/etf | 2026 | VERIFIED |
| Professional criteria | 2 of 3: 10 trades/qtr; EUR 500 000; 1 year in finance | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0065 | 2014 | VERIFIED |
| RIS deal changes KID | no mention of non-EU funds | https://www.europarl.europa.eu/news/en/press-room/20251215IPR32220/deal-on-new-measures-to-boost-citizens-investments-in-financial-markets | 2025 | VERIFIED |
| SPY, VOO, IVV, VTI, SCHD on NYSE Arca; QQQ Nasdaq | code P / Nasdaq file | https://www.nasdaqtrader.com/dynamic/SymDir/otherlisted.txt | 2026 | VERIFIED |
| ETFs by venue | Arca 2 737; BZX 1 655; NYSE 79; American 0 | same (own count) | 2026 | VERIFIED |
| SPY TER / AUM | 0.0945%; USD 817.2 bn | https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy | 2026 | VERIFIED |
| IVV TER / AUM | 0.03%; USD 896.4 bn | https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf | 2026 | VERIFIED |
| VOO TER; returns | 0.03%; 15.7/22.9/13.8/15.3% | https://investor.vanguard.com/investment-products/etfs/profile/voo | 2026 | VERIFIED |
| VTI renamed Morningstar | index rename 28 Jul 2026 | https://newsroom.morningstar.com/news/news-details/2026/Morningstar-Completes-Rebrand-of-CRSP-Market-Indexes-to-Morningstar-Market-Indexes/default.aspx | 2026 | VERIFIED |
| CSPX/SXR8 TER 0.07% Acc, EUR 141 bn | IE00B5BMR087 | https://www.justetf.com/en/etf-profile.html?isin=IE00B5BMR087 | 2026 | VERIFIED |
| VWCE TER 0.14% | IE00BK5BQT80 | https://www.justetf.com/en/etf-profile.html?isin=IE00BK5BQT80 | 2026 | VERIFIED |
| FMP display needs licence | free 250 calls/day | https://financialmodelingprep.com/terms-of-service | 2026 | VERIFIED |
| Alpha Vantage free 25/day; non-commercial | ETF_PROFILE exists | https://www.alphavantage.co/terms_of_service/ | 2026 | VERIFIED |
| Fio US fee | USD 7.95 / 9.95 | https://www.fio.cz/docs/cz/C_zaklad.pdf | 2026 | VERIFIED |
| Fio USD table | 21.12293 / 22.40707 | https://www.fio.cz/akcie-investice/dalsi-sluzby-fio/devizove-konverze | 2026 | VERIFIED |
| XTB fees | 0%/0.2%/0.5% | https://www.xtb.com/cz/soubory/tabulka-poplatku-a-provizi.pdf | 2026 | VERIFIED |
| Trading 212 FX | 0.15% | https://helpcentre.trading212.com/hc/en-us/articles/360018909758-What-is-the-FX-fee-Invest-Stocks-ISA | undated | VERIFIED |
| IBKR auto-FX | 0.03% | https://www.interactivebrokers.ie/en/index.php?f=50589 | 2026 | VERIFIED |
| DEGIRO FX | 0.25% | https://www.degiro.cz/data/pdf/cs/Prehled_poplatku.pdf | 2026 | VERIFIED |
| 40M cap abolished | from 1 Jan 2026 | https://financnisprava.gov.cz/cs/financni-sprava/media-a-verejnost/tiskove-zpravy-gfr/tiskove-zpravy-2026/danove-novinky-pro-rok-2026 | 2026 | VERIFIED |
| Value / time tests | §4(1)(t) CZK 100 000; §4(1)(u) 3 years | https://www.zakonyprolidi.cz/cs/1992-586 | 2026 | VERIFIED |
| US-CZ dividend treaty | 15% (RIC), 5% direct | https://www.irs.gov/pub/irs-lbi/tax-treaty-table-1.pdf | 2023 | VERIFIED |
| ČNB USD 9 Oct 2026 | 21.745 | https://api.cnb.cz/cnbapi/exrates/daily?lang=EN | 2026 | VERIFIED |
| IBKR blocks US ETFs for retail | UCITS/CFD/professional | https://ibkb.interactivebrokers.com/node/2993 | n/a | INFERRED |
| Portu fee about 1% | standard rate | https://www.banky.cz/clanky/portu-recenze-fintech-investicni-platformy/ | n/a | INFERRED |

## Contradictions & open questions

1. **40M cap:** the task brief calls it a 2025 introduction without noting its removal; law and Finanční správa show it is gone for securities from 2026. Blogs of early 2026 vary in wording.
2. **Fio's legal basis:** Fio quotes a lenient ČNB view (2020-2022); the ČNB text I could open (RS2018-12) only exempts execution-only dealers and does not name US ETFs. Fio's current page does not mention PRIIPs.
3. **Fio FX spread:** about 3% each side of the ČNB rate on the page table, but the table has no date and large-volume rates are better. Needs a check in e-Broker.
4. **QQQ TER 0.18%** (Invesco, Alpha Vantage) differs from the 0.20% I would have assumed; date of change not established.
5. **Revolut:** Standard/Plus quota is 0, 1 or "CZK 25 per extra order" depending on source; primary pages returned 403.
6. **IBKR FX:** 0.03% auto (IBKR) vs 0.002% + USD 2 manual (third parties).
7. **Returns:** justETF (EUR, unspecified) vs issuer (USD NAV) are not comparable.
8. **RIS adoption status:** later Council documents (search summaries) suggest COREPER endorsement on 5 June 2026, but publication in the Official Journal was not confirmed.
9. **Not verified:** XTB, Trading 212 and Revolut official position on US-listed ETFs; ČNB reuse terms; Stooq terms; Schwab/Invesco terms; accumulating-fund tax treatment; who sets the SPLG-to-SPYM change; whether Alpha Vantage `ETF_PROFILE` is premium-only for production use.
10. Web search budget was exhausted once mid-session; later searches succeeded after reset.

## Options & trade-offs (input for later decisions, no recommendation)

- **Scope of "NYSE ETFs":** (a) NYSE Arca-only list (accurate, excludes QQQ, mostly not buyable by retail through EU brokers); (b) NYSE Arca + Nasdaq US-listed with a clear "listing venue" column; (c) US ETFs shown as reference with UCITS equivalents as the actionable column. Trade-off: accuracy of the "NYSE" label versus usefulness to a visitor who cannot buy the fund.
- **Fio-only access path vs UCITS path:** Fio is the one verified Czech route to US ETFs but with USD 7.95 + about 3% spread and execution-only status; UCITS via XTB/Trading 212/IBKR/DEGIRO is cheaper per trade but a different product (domicile, TER, tax mechanics).
- **Data supply:** (1) hand-curated JSON with per-field source URL and as-of date from issuer pages (best citations; terms are personal-use/permission-based, so a short permission request or only facts with link-outs may be needed); (2) licensed API with display rights (FMP, Twelve Data, Tiingo all need paid/negotiated display licences); (3) EDGAR + Nasdaq Trader for free, unrestricted but incomplete fields (no AUM or returns).
- **Tax content depth:** show only the three headline rules (3-year test, CZK 100 000 proceeds, 15% US withholding with W-8BEN) with law links, or add dividends/credit and DIP; deeper content raises accuracy and advice-boundary risk.
- **Freshness:** daily issuer numbers go stale within days; a visible "as of" date per row and a monthly refresh date reduce risk.

## Sources

S1 https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R1286 | S2 https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0065 | S3 https://www.justetf.com/en/news/etf/us-domiciled-etfs.html | S4 https://www.degiro.com/uk/helpdesk/trading-possibilities/why-cant-i-trade-us-etfs | S5 https://www.lynxbroker.com/service/products-and-regulations/regulations/key-information-document/ | S6 https://home.saxo/content/commentaries/ppu/partner-product-update/etf-kid-solution-for-wl-partners-under-priips-23092022 | S7 https://www.cnb.cz/cs/dohled-financni-trh/legislativni-zakladna/stanoviska-k-regulaci-financniho-trhu/RS2018-12/ | S8 https://www.fio.cz/akcie-investice/etf | S9 https://www.fio.cz/akcie-investice/etf/vypis-etf | S10 https://www.fio.cz/zpravodajstvi/odborne-clanky/262831-uvod-do-sveta-dluhopisu-predstaveni-nejvetsich-dluhopisovych-etf | S11 https://www.fio.cz/zpravodajstvi/odborne-clanky/238722-americka-burza-jak-investovat-do-indexu-s-p-500 | S12 https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-1-cast | S13 https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-2-cast/ | S14 https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-3-cast/ | S15 https://community.trading212.com/t/stocks-etfs-requests-help/49493 | S16 https://ibkb.interactivebrokers.com/node/2993 (unreadable, 403) | S17 https://www.europarl.europa.eu/news/en/press-room/20251215IPR32220/deal-on-new-measures-to-boost-citizens-investments-in-financial-markets | S18 https://finorum.com/us-etfs-in-europe/ | S19 https://www.nasdaqtrader.com/dynamic/SymDir/otherlisted.txt | S20 https://www.nasdaqtrader.com/dynamic/SymDir/nasdaqlisted.txt | S21 https://www.nasdaqtrader.com/trader.aspx?id=symboldirdefs | S22 https://www.nyse.com/markets/nyse-arca | S23 https://www.nyse.com/markets/nyse-american | S24 https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy | S25 https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf | S26 https://investor.vanguard.com/investment-products/etfs/profile/voo | S27 https://investor.vanguard.com/investment-products/etfs/profile/vti | S28 https://www.invesco.com/qqq-etf/en/home.html | S29 https://etf.pionline.com/fund/SCHD | S30 https://newsroom.morningstar.com/news/news-details/2026/Morningstar-Completes-Rebrand-of-CRSP-Market-Indexes-to-Morningstar-Market-Indexes/default.aspx | S31 justETF profiles: https://www.justetf.com/en/etf-profile.html?isin= + IE00B5BMR087, IE00B3XXRP09, IE00BFMXXD54, IE00BK5BQT80, IE00B53SZB19, IE0032077012, IE00B6YX5D40, IE00B8GKDB10; LYNX partner of IBIE: https://lynxbroker.cz/poplatky/severni-amerika-akcie | S32 https://www.alphavantage.co/query?function=ETF_PROFILE&symbol=QQQ&apikey=demo | S33 https://www.xtb.com/cz/soubory/tabulka-poplatku-a-provizi.pdf | S34 https://www.fio.cz/docs/cz/C_zaklad.pdf and https://www.fio.cz/akcie-investice/dalsi-sluzby-fio/devizove-konverze | S35 (XTB, as S33) | S36 https://helpcentre.trading212.com/hc/en-us/articles/360018909758-What-is-the-FX-fee-Invest-Stocks-ISA | S37 https://www.interactivebrokers.ie/en/pricing/commissions-stocks.php | S38 https://www.interactivebrokers.ie/en/pricing/commissions-stocks-europe.php | S39 https://www.interactivebrokers.ie/en/index.php?f=50589 ; Portu: https://www.banky.cz/clanky/portu-recenze-fintech-investicni-platformy/ | S40 https://www.degiro.cz/data/pdf/cs/Prehled_poplatku.pdf | S41 https://lynxbroker.cz/poplatky/severni-amerika-akcie | S42 https://www.revolut.com/cs-CZ/etfs | S43 https://www.ssga.com/us/en/intermediary/legal/terms-of-use | S44 https://www.blackrock.com/corporate/compliance/terms-and-conditions | S45 https://investor.vanguard.com/terms-conditions | S46 https://www.sec.gov/about/developer-resources | S47 https://www.sec.gov/data-research/sec-markets-data/mutual-fund-prospectus-riskreturn-summary-data-sets | S48 https://www.sec.gov/data-research/sec-markets-data/form-n-port-data-sets | S49 https://www.sec.gov/files/company_tickers_mf.json | S50 https://www.nasdaqtrader.com/Trader.aspx?id=symbollookup | S51 https://www.alphavantage.co/premium/ | S52 https://www.alphavantage.co/documentation/ | S53 https://www.alphavantage.co/terms_of_service/ | S54 https://site.financialmodelingprep.com/pricing-plans | S55 https://financialmodelingprep.com/terms-of-service | S56 https://twelvedata.com/pricing | S57 https://www.tiingo.com/about/pricing | S58 https://legal.yahoo.com/us/en/yahoo/terms/otos/index.html (Stooq: https://stooq.com/db/h/) | S59 https://www.justetf.com/documents/justETF_general_terms_and_conditions.pdf | S60 https://www.zakonyprolidi.cz/cs/1992-586 | S61 https://arws.cz/novinky-v-arrows/zruseni-limitu-40-milionu-kc-pri-prodeji-podilu-a-cennych-papiru | S62 https://www.forvismazars.com/cz/cs/prehledy/forvis-mazars-v-mediich/archiv-2025/novy-limit-pro-zdaneni-prijmu-z-obchodovani | S63 https://financnisprava.gov.cz/cs/financni-sprava/media-a-verejnost/tiskove-zpravy-gfr/tiskove-zpravy-2026/danove-novinky-pro-rok-2026 | S64 https://www.irs.gov/individuals/international-taxpayers/federal-income-tax-withholding-and-reporting-on-other-kinds-of-us-source-income-paid-to-nonresident-aliens | S65 https://www.irs.gov/pub/irs-lbi/tax-treaty-table-1.pdf | S66 https://www.irs.gov/instructions/iw8ben | S67 https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/ and https://api.cnb.cz/cnbapi/exrates/daily?lang=EN
