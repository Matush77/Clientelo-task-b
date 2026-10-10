# Competitor teardown: Czech/Slovak retail-investing sites and 3 international references

Research date and access date for every source: 2026-10-10. Research only; no recommendation is given.

**Method (read first).** Static HTML via WebFetch/curl, plus the built-in browser pane emulating a 375x812 phone for the first screens (so "first screen" below is mostly observed, not inferred). I declined optional cookies everywhere. I opened registration pages and read public form definitions, but never typed into or submitted anything. Ads were read from the public Meta Ad Library (country filter CZ, "active"). Similarweb numbers are free-tier estimates and are ambiguous in places, so I tag them [INFERRED]. The shared web-search budget ran out part-way through, so the US/NYSE gap check (section 5) is not exhaustive.

## Summary

- Three competitors (Portu, Fondee, Finax) ask for almost nothing at first contact. Portu: e-mail plus password. Fondee: e-mail only, or Apple/Google sign-in. Finax: no contact at all in step 1; it asks for the investing goal first. All three put a calculator before the ask, and the ask is "open an account", not "get a guide". [VERIFIED]
- XTB runs the only true lead-magnet funnel I found: a free ETF e-book, with 4 required fields (first name, surname, e-mail, phone) plus a consent checkbox group. On a 375x812 viewport the form starts about 849 px down, below the first screen. [VERIFIED]
- XTB's ads use informal "ty" ("Získej", "Tvoje"); its landing pages use formal "vy". Portu ads and hero mix "ty" and "vy". Fondee and Finax use "vy". [VERIFIED]
- Ad hooks seen live on Meta in CZ: "calculate what your investment could be in 10/20/30 years", "no hidden fees", "100 CZK is enough / start for the kids", a 1,000 CZK bonus, "5% interest for 90 days", and e-book downloads. [VERIFIED]
- Attribution is built into the forms: XTB's HubSpot form carries about 25 hidden source/medium/campaign fields; Finex tags its own links with `subid`. [VERIFIED]
- International references split the job: justETF and NerdWallet monetise comparisons through partner links, not e-mail gates; Finanzfluss collects e-mail through a newsletter with a visible reader count. [VERIFIED]
- Nobody I found speaks to Czech investors about NYSE-listed (US-domiciled) ETFs. Finax says its ETFs trade on European exchanges, and Portu's brokerage list shows UCITS ETFs on London/Xetra. Only Finex's screener lists SPY, VTI and QQQ, with no note on whether a Czech retail investor can buy them. [VERIFIED; absence claim is INFERRED]
- Trust and numbers are inconsistent across the market: Portu 340,000+ vs 280,000+ clients, Fondee's "test winner" badge vs rank 5, minimum deposits of 100 / 500 / 1,000 CZK for the same product. See the Contradictions section.
- None of these sites publishes conversion rates or ad spend. Meta's library shows no spend for these ads. "Success" below is therefore based on size, awards and visible ad activity only.

## Findings

### 1. Selection and why each counts as successful

| Site | Type | Evidence of success | Tag |
|---|---|---|---|
| Portu (portu.cz) | CZ robo-advisor + brokerage | Homepage claims 340,000+ clients and 76 bn CZK; about 27 active Meta ads for its slogan; TV campaigns since 2021. Finex lists it #1 (98%, own ranking). | [VERIFIED] |
| Finax (finax.eu/cs) | SK robo-advisor, CZ-localised | 102,600 clients and above 1.4 bn EUR at end-2025 (own report, 27 Mar 2026); homepage now says 115,000+ and 1.8 bn EUR; award "Zlatá mince 2025"; Google 4.9 from 399 reviews (own page). | [VERIFIED] |
| Fondee (Direct Fondee) | CZ robo-advisor | 27,000+ clients claimed; part of Direct group; roughly 8 distinct active Meta creatives (several duplicated across 3-5 ad sets). Loss-making in 2022 (21 M CZK loss on 4.5 M revenue, per CzechCrunch 2023). | [VERIFIED] |
| XTB CZ (cz.xtb.com / vzdelavani.xtb.com) | Broker with ETF e-book funnel | 2.9 M investors worldwide, "Broker roku 2025" (own site); about 50 active CZ Meta ads for "XTB ETF", most with e-book or promo offers. | [VERIFIED] |
| Finex.cz | CZ comparison/media portal | Claims 400,000+ monthly users and a 10,000+ free club; ETF screener plus broker reviews. Similarweb estimate 277K visits per 3 months, #11 Czech investing site. | [VERIFIED] claim / [INFERRED] traffic |
| justETF | EU ETF comparison (Scalable Capital since 2021) | "Around eight million hits per month" in a Nov 2021 press release. Possibly outdated. | [VERIFIED] (2021) |
| Finanzfluss | German finance educator | Claims 1.5M+ YouTube subscribers, a bestselling book (600,000+ copies), and a newsletter with 135,000+ readers (all own claims). | [VERIFIED] |
| NerdWallet | US comparison/lead-gen benchmark | Mobile app rated 4.8 with 121,000+ reviews (own page). | [VERIFIED] |

Screened but not analysed in depth: Peníze.cz (self-described largest Czech personal-finance site; newsletter plus calculators; Similarweb 1.8M visits per 3 months, [INFERRED]); Investiční web (newsletter only; 395.7K per 3 months, [INFERRED]); Rozbité prasátko (book, newsletter, paid Herohero membership; 11.7K per 3 months, [INFERRED]); Finparáda (calculators and rankings, newsletter on a separate page); Bohatství.cz (connection refused); Trading 212 CZ (not opened).

### 2. Teardown of the five Czech/Slovak sites

**Portu — https://www.portu.cz/** (also /registrace and /investice/pro-mlade)
- First screen on mobile [VERIFIED, rendered; the site is a JS app, so static fetch returns nothing]: "Investuj. Nestresuj."; subline about simple, stress-free investing; green button "Začít investovat"; outline button "Kolik můžu vydělat?"; stats 340 000+ clients and 76 bn CZK; a bottom-sheet cookie banner ("Jen nezbytné" / "Souhlasím") covers the lower half.
- Value before the ask: a free growth calculator (30,000 one-off, 3,000 per month, 20 years; conservative/balanced/growth; pessimistic/expected/optimistic), then a fee calculator and a "which investment fits" quiz link.
- Ask: every CTA goes to /registrace. Fields: e-mail and password (four password rules) and an optional invite code; consent by implication ("by registering you agree"). The account is created before the questionnaire, ID check and deposit. No lead magnet other than a magazine newsletter (single e-mail field, no visible consent text).
- Trust: "Pod dohledem ČNB", WOOD & Company group, "every 35th Czech has Portu", 7 named testimonials, 4.3 app rating with 300k downloads, phone/chat/free consultation.
- Risk text: one line under the calculator (past returns no guarantee; investing carries risk).
- Tone: hero in "ty", body in "vy". Ads: "ty" ("Investuj na pohodu").
- Weaknesses: raw translation keys appear on the brokerage page ("brokerage.instrument-list.performance-periods.12"); "from 500 CZK" in the footer vs "from 100 CZK" on the youth page; 340,000 vs 344,000 clients (page vs ads).
- Ads (Meta, active): 6-second videos; hooks "Máte bankovní aplikaci? Tak proč ne taky investiční?", "Investovat stovku se nevyplatí. Akorát, že vůbec!", "Víte, čeho litují rodiče nejvíc?"; buttons "Learn more"; destinations are product pages (/investice/pro-mlade, /pro-deti, /dlouhodoby-investicni-produkt, homepage). [VERIFIED]

**Finax — https://www.finax.eu/cs** (also /cs/produkty/investovani-do-etf, /cs/onboarding)
- First screen on mobile [VERIFIED]: a full-screen cookie wall comes first (granular toggles, all optional ones off by default; at 375 px the text is clipped on the right and the essential-only button is at the bottom of a long scroll; this may be a pane artefact). Under it: "Také investování může znamenat relax"; subline about October deposits having a year without management fee; yellow "Prozkoumejte vaše možnosti", white "Jak to funguje?"; an illustration. Trust stats (1.8 bn EUR, 115,000+ clients) sit further down.
- Value before the ask: calculators (world investing, PEPP) with one-off, monthly and 0-6-year inputs; output compared with a bank savings account; return assumptions not stated on the page. The calculator values are passed to onboarding as URL parameters (`onetime_amount`, `monthly_amount`, `years_planned`). [VERIFIED]
- Ask: onboarding step 1 is "Jaký je Váš cíl?" (goal cards), no contact. Secondary forms: call booking (date, topic, name, e-mail, phone with prefix, consent) and newsletter (e-mail plus consent checkbox, via Exponea). Questionnaire, plan, registration and ID come later, per the Finex review.
- Trust: ČNB-equivalent supervision by the National Bank of Slovakia, 50,000 EUR guarantee fund, named founders, media logos, awards, reviews. Fee 1% + VAT; ETFs on European exchanges.
- Risk text: three short lines near the calculator plus a footer note (back-tested models, EUR/CZK effect).
- Tone: formal "vy". Illustrations, yellow/black palette.
- Weaknesses: heavy cookie wall; stats below fold; calculator slider tops out at 6 years in the text I read (INFERRED from page text). No Czech-language Meta ads found for "Finax" (one Polish ad only). [VERIFIED]

**Fondee (Direct Fondee) — https://www.fondee.cz/** (also /kampane/direct-1000-bonus, https://app.fondee.cz/registrace)
- First screen on mobile [VERIFIED]: "Investování, kterému rozumíte" with the second line highlighted; stats ČNB / 27 000+ clients / "až 11,7 %" average yearly return over 10 years; "start from 500 Kč"; buttons "Začít investovat" and "Investiční kalkulačka"; a floating mail/chat icon. Behind the cookie banner the headline is initially dark-on-dark.
- Value before the ask: calculator (30,000 + 2,000 per month, 10 years, one ESG portfolio), 3-step explainer, FAQ. The campaign page adds a 7-profile risk explorer showing the portfolio split (e.g. 71% shares; USA 36% in the "Smělý" profile) and a 1,000 CZK bonus code.
- Ask: all CTAs go to app.fondee.cz/registrace: one field (e-mail), "I have a referral code", or Apple/Google sign-in; privacy information by implication. A questionnaire follows.
- Trust: ČNB supervision, 27,000+ clients, "test winner Finex.cz July 2026" badge, three Google reviews. Counters in the awards block show "0" (placeholder bug). [VERIFIED]
- Risk text: long footer block listing market, credit, inflation, liquidity and currency risks; return footnote says simulated and before fees.
- Tone: formal "vy", green/black, photo of a man relaxing.
- Weaknesses: the headline return claim (11.7%) sits next to a footnote saying it is simulated; campaign page was blank for several seconds in my test (may be a pane artefact); ads say "from 1,000 Kč" while the site says 500 Kč.
- Ads (Meta, active since Jul-Sep 2026): video 0:33-0:50: "Spočítejte si, kolik může mít vaše investice za 10, 20 nebo 30 let", "Investice na míru. Bez skrytých poplatků...", "Na investování nepotřebujete miliony", and a 1,000 Kč bonus for Direct insurance clients (destination /kampane/direct-1000-bonus with UTM tags). [VERIFIED]

**XTB CZ — https://cz.xtb.com/nejoblibenejsi-etf-v-xtb** and https://vzdelavani.xtb.com/jak-zacit-investovat (the latter is an ad destination); main site https://www.xtb.com/cz
- First screen on mobile [VERIFIED, 375x812]: the top third is a bold CFD risk warning (77% of retail CFD accounts lose money with this provider); then logo, headline "Nejoblíbenější ETF u XTB pro rok 2026", a green "E-BOOK ZDARMA" badge and the e-book cover. The form begins about 849 px from the top, i.e. below the first screen; cookie banner ("Nastavení" / "Přijmout vše") overlays the lower half.
- Value before the ask: bullets of what the e-book covers, a short "What are ETFs" block, 3-question FAQ (no account needed; e-mail sent immediately; further offers may follow). The e-book content itself is not visible before the form.
- Ask: inline hero form, repeated as a CTA lower on the page ("STÁHNOUT E-BOOK ZDARMA"). The same HubSpot form (ID 49c7cdf6…) is reused on several landing pages. Fields, read from the public form definition: first name, surname, e-mail, phone (all required); one required checkbox group: privacy notice acknowledged, and consent to commercial messages and offers (both required, so marketing consent is bundled). About 25 hidden fields store first/last source, medium, campaign, channel and entry URL. [VERIFIED]
- After submit: redirect to a "-typ" thank-you page (title "Děkujeme Vám za přihlášení"): e-book arrives by e-mail within minutes; upsell banner about zero fees on shares/ETFs and a button to an offer; no direct account-opening link on that page. No double opt-in mentioned.
- Trust: awards strip (Investopedia, ForexBrokers.com and others), company details; the main site adds 2.9 M investors and deposit protection.
- Tone: formal "vy" on pages; informal "ty" in ads. Lots of legal text.
- Weaknesses: CFD warning dominates an "ETF" page; phone number is required for a PDF; one fetch reported both 74% and 77% loss figures on the page.
- Ads (Meta, active): e-book carousels with "Download" (real estate vs shares/ETFs; defence stocks; "first time investors"), a free 8-video course on shares/ETF portfolios, a 5% 90-day welcome interest up to 605,000 CZK, and "zero fees" video. Destination URLs carry UTMs such as `utm_content=education_ebook`. [VERIFIED]

**Finex.cz — https://finex.cz/etf/ (redirects to /etf-screener/)**; also /premium/ and /o-nas/
- First screen on mobile [VERIFIED]: header with Premium button and account menu; page title "ETF screener"; a cookie dialog (green "Souhlasím", grey "Přijmout nutné cookies" and "Zobrazit předvolby") covers most of the first screen; below it the list of cards (VTI first, price in USD, 24h change).
- Value: free screener of 71 ETFs with filters (TER, AUM, dividends, valuation ratios). There is no form on the page. The only "ask" is the Premium button and a "free membership" box on the homepage.
- Premium: 99 CZK for 7 days, then 699 CZK per month (annual price unclear on the page); gated items include a 2,500+ asset screener, analyses and an academy. Links carry `subid=toolbar` / `account_menu`.
- Trust: bylined authors, "since 2014", 5,000+ community, 17 courses; broker reviews show percentage scores.
- Disclaimers: affiliate disclosure, "not investment advice", loss-of-capital warning (CFD 77% line in the footer). [VERIFIED]
- Tone: formal "vy".
- Weaknesses: the screener shows US-listed tickers with no listing/domicile column and no availability note for Czech buyers; ranking of brokers is paid-link adjacent (affiliate), which the footer discloses.

### 3. International references

**justETF — https://www.justetf.com/en/** [VERIFIED]
- Mobile first screen: logo, search bar ("ETFs, ISIN, WKN…"), then a hero with a broker-comparison widget (chips for order size from 500 EUR, "Compare now"). Desktop hero: "ETF portfolios made simple" with "Sign up for free".
- Value before the ask: screener, comparison basket, savings-plan and retirement calculators, broker/savings-plan comparisons are open without login. Registration is offered for portfolios and watchlists; a monthly newsletter has a sign-up block. Closing CTA repeats "Sign up free now".
- Monetisation: broker links carry partner IDs; "test winner" language; no visible risk disclaimer or affiliate note in the captured text. Consent banner gives "Only essentials" the same weight as "Accept all".
- Tone: neutral English/German; owned by Scalable Capital since 2021.

**Finanzfluss — https://www.finanzfluss.de/** (newsletter at /newsletter/; business model at /so-verdienen-wir-geld/) [VERIFIED]
- First screen: promo banner for a new pension-depot calculator, headline "Werde zum finanziellen Selbstentscheider", founder photo with name tag, then category tiles (account, depot, crypto…). No main button.
- Ask: newsletter ("Mache mehr aus deinem Geld, in nur 5 Min. pro Woche"), free, weekly on Fridays, "135.000+ Leser" next to the form, consent line only; fields not visible in the text I read (likely e-mail). Also an ETF search, calculators and a finance-overview app.
- Business model stated openly: affiliate commissions, paid placements, insurance brokerage, app subscription. Informal "du".

**NerdWallet — https://www.nerdwallet.com/investing/learn/sp-500-etfs** [VERIFIED from page source]
- Page order: advertiser disclosure ("Our partners compensate us"), headline "The Top S&P 500 ETFs for October 2026: IVV, VOO, SPY and SPYM", three named authors with expertise, "Fact Checked" label, a short takeaway list, then a 4-row table (ETF, ticker, 5-year return 13.2-13.3%, expense ratio 0.02-0.09%, source Finviz, dated 1 Oct 2026).
- Ask: no e-mail gate on the page text; a single inline link ("Shopping for a brokerage? See our list of the best brokers for ETF investing") sends readers to the monetised broker list. Disclaimer states it is not an adviser or broker, past performance is no guarantee.
- Relevance: this is the only reference that compares NYSE Arca-listed ETFs head-to-head, aimed at US readers.

### 4. Comparison matrix

| | First ask | Fields at first ask | Interactive element | Value shown before ask | Tone | Risk text prominence |
|---|---|---|---|---|---|---|
| Portu | Account | e-mail + password | Growth calc, fee calc, quiz | Yes | ty/vy mix | One line under calc |
| Finax | Goal (no contact); call and newsletter forms lower | Step 1: none; call form 5 | Growth calc, plan widget | Yes | vy | Short lines near calc |
| Fondee | Account | e-mail (or Apple/Google) | Growth calc, risk explorer | Yes | vy | Long footer block |
| XTB CZ | E-book | 4 + consent group | None (e-book) | Teaser only | vy (ads ty) | Top banner, very heavy |
| Finex | Premium/club | none on page | ETF screener | Yes (screener open) | vy | Footer, long |
| justETF | Sign up / newsletter | not visible | Screener, comparisons, calculators | Yes | neutral | None seen |
| Finanzfluss | Newsletter | e-mail (likely) | ETF search, calculators | Yes | du | None seen |
| NerdWallet | Broker list click | none | Comparison table | Yes | neutral | Short, in body |

### 5. Recurring patterns
1. Interaction first, contact second. All three Czech robo-advisors show a calculator and defer identity data until after a short account step. [VERIFIED]
2. The first ask is usually e-mail only, or goal-only. The one outlier is the XTB e-book with phone required. [VERIFIED]
3. The hero trust bar is regulator plus client count (Portu, Fondee). Finax pushes it below the fold. [VERIFIED]
4. Return claims are paired with a back-test or simulation footnote (Fondee, Finax, Portu). [VERIFIED]
5. Ad hooks are calculable or fear-of-waiting hooks; videos run 6 to 50 seconds; button labels are "Learn more", "Download", "Install Now". [VERIFIED]
6. Campaign pages exist for offers (Fondee bonus page, XTB e-book pages), but Portu's ads point at product pages. [VERIFIED]
7. Attribution and campaign naming are explicit (UTM on XTB and Fondee links, `subid` on Finex). [VERIFIED]
8. Cookie dialogs are a first-screen obstacle on mobile in every case I opened (Portu, Fondee, XTB, Finex, justETF; Finax worst). [VERIFIED]

### 6. Gaps nobody covers well
- **NYSE-listed ETFs for Czech investors.** Finax: ETFs on European exchanges. Portu brokerage: first page of the instrument list shows UCITS ETFs on London/Xetra (CSPX, VWCE, IS3N), US single stocks, no NYSE Arca ETFs. Fondee: exposure to the US via portfolios (USA 36% in one profile). Finex: lists SPY, VTI, QQQ, IWF, GLD and others in USD with no availability or tax note. XTB's e-books are broker-product oriented. [VERIFIED]
- **Why the gap may exist.** EU retail brokers have long been unable to sell US-domiciled ETFs because they lack a PRIIPs KID (justETF article, 2018; Finhacker, 2020). Current availability at Czech brokers was not verified; both sources are old. [VERIFIED for the sources; current status unknown]
- No Czech page I found compares a US-listed ETF with its UCITS equivalent (e.g. fee, domicile, withholding tax, estate-tax note). [INFERRED from a non-exhaustive review]
- Fee-impact tools are rare: only Portu has a fee calculator; most calculators show growth, not cost of ETF choice. [VERIFIED for those inspected]

## Evidence table

| Claim | Detail | Source | Year | Tag |
|---|---|---|---|---|
| Portu mobile hero | "Investuj. Nestresuj.", two CTAs, 340 000+ clients, 76 bn CZK | https://www.portu.cz/ | 2026 | VERIFIED |
| Portu registration | e-mail + password + optional invite code | https://www.portu.cz/registrace | 2026 | VERIFIED |
| Portu clients per Finex | 280,000+ clients, 55 bn CZK AUM, updated 18 Jun 2026 | https://finex.cz/recenze/portu/ | 2026 | VERIFIED |
| Portu ads | 6-second videos, "344 000 klientů", destinations include /investice/pro-mlade | Meta Ad Library, CZ, query "Investuj. Nestresuj." (ads/library) | 2026 | VERIFIED |
| Portu earlier campaign | about 43,000 registrations in 5 months, TV + online | https://www.mediaguru.cz/clanky/2022/10/v-nove-kampani-portu-vystupuji-realni-investori/ | 2022 | VERIFIED |
| Portu brokerage list | UCITS ETFs on LSE/Xetra, US stocks | https://www.portu.cz/investice/jednotlive-akcie-etf | 2026 | VERIFIED |
| Finax 2025 results | 102,600 clients; above 1.4 bn EUR AUM | https://www.finax.eu/en/blog/finax-2025-business-figures-and-statistics | 2026 | VERIFIED |
| Finax homepage | 1.8 bn EUR, 115,000+ clients, Google 4.9 (399) | https://www.finax.eu/cs | 2026 | VERIFIED |
| Finax step 1 | goal question, no contact | https://www.finax.eu/cs/onboarding | 2026 | VERIFIED |
| Finax call form | date, topic, name, e-mail, phone, consent | https://www.finax.eu/cs (page source) | 2026 | VERIFIED |
| Finax ETFs on European exchanges, fee 1% + VAT | text | https://www.finax.eu/cs/produkty/investovani-do-etf | 2026 | VERIFIED |
| Fondee hero and stats | 27 000+ clients, "až 11,7 %" | https://www.fondee.cz/ | 2026 | VERIFIED |
| Fondee registration | e-mail only + Apple/Google | https://app.fondee.cz/registrace | 2026 | VERIFIED |
| Fondee campaign page | 1,000 Kč bonus, 7-profile explorer, USA 36% | https://www.fondee.cz/kampane/direct-1000-bonus | 2026 | VERIFIED |
| Fondee finances | revenue about 4.5 M CZK, loss 21 M CZK (2022) | https://cc.cz/trzby-45-milionu-ale-se-ztratou-21-milionu-platforma-fondee-masivne-investuje-do-expanze/ | 2023 | VERIFIED |
| Fondee per Finex | rank 5, 87%, 25,000+ clients, updated 14 Sep 2026 | https://finex.cz/recenze/fondee/ | 2026 | VERIFIED |
| XTB form definition | 4 required fields, bundled consent, hidden attribution fields | https://forms.hsforms.com/embed/v3/form/2106565/49c7cdf6-dc85-4e93-ae62-356333c62b23/json | 2026 | VERIFIED |
| XTB form below fold | first field about 849 px down at 375x812 | https://cz.xtb.com/nejoblibenejsi-etf-v-xtb | 2026 | VERIFIED |
| XTB thank-you page | e-book by e-mail in minutes, upsell button | https://cz.xtb.com/nejoblibenejsi-etf-v-xtb-typ | 2026 | VERIFIED |
| XTB ads | e-book carousels, free course, 5% for 90 days up to 605,000 CZK; UTM destinations | Meta Ad Library, CZ, query "XTB ETF" | 2026 | VERIFIED |
| XTB scale | 2.9 M investors, "Broker roku 2025" | https://www.xtb.com/cz | 2026 | VERIFIED |
| Finex screener | 71 ETFs incl. VTI, SPY, QQQ in USD | https://finex.cz/etf/ | 2026 | VERIFIED |
| Finex audience | 400,000+ monthly users claimed | https://finex.cz/o-nas/ | 2026 | VERIFIED |
| Finex Premium | 99 CZK trial, 699 CZK per month | https://finex.cz/premium/ | 2026 | VERIFIED |
| Similarweb estimates | Portu 301.1K, Finax 149.8K, Fondee 19.8K, Finex 277.3K visits per 3 months | https://www.similarweb.com/website/portu.cz/ and sibling pages | 2026 | INFERRED |
| justETF hero, tools, partner links | see section 3 | https://www.justetf.com/en/ | 2026 | VERIFIED |
| justETF audience | around 8 M hits per month | https://at.scalable.capital/newsroom/scalable-acquires-justetf | 2021 | VERIFIED (old) |
| Finanzfluss newsletter | 135.000+ readers, weekly on Fridays | https://www.finanzfluss.de/newsletter/ | 2026 | VERIFIED |
| NerdWallet table | 4 ETFs, source Finviz, 1 Oct 2026 | https://www.nerdwallet.com/investing/learn/sp-500-etfs | 2026 | VERIFIED |
| US ETFs blocked by PRIIPs/KID | explanation, UK-oriented | https://www.justetf.com/en/news/etf/us-domiciled-etfs.html | 2018 | VERIFIED (old) |
| Workarounds, estate-tax warning | US broker, professional status | https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-1-cast | 2020 | VERIFIED (old) |

## Contradictions & open questions

- **Portu size:** homepage 340,000+ clients and 76 bn CZK (hero says "invested", footer says "managed"); ads say 344,000; Finex (18 Jun 2026) says 280,000+ and 55 bn; a search summary of Portu's 2025 annual report also said about 280,000 and 55 bn, but I could not read the PDF [INFERRED]. Different dates or definitions are likely.
- **Fondee "test winner":** homepage badge cites Finex.cz (July 2026); Finex's own review page ranks Fondee 5th with 87%. Possibly a sub-category win.
- **Fondee and Finax client counts differ by source:** Fondee 27,000+ vs 25,000+; Finax 115,000+ (site) vs 102,600 (year-end) vs 43,000+ (Finex, Mar 2025, probably Czech-only or stale).
- **Minimum deposit:** Portu 100 vs 500 CZK; Fondee 500 on-site, 1,000 in an ad, 1 CZK in a Finex table.
- **Returns:** Fondee "up to 11.7%" vs 8.5% for a different profile; Portu 10.24% vs 10.81% depending on page; all simulated or back-tested.
- **Finex traffic:** 400,000+ monthly users (own claim) vs about 92K visits per month (Similarweb estimate). Metrics differ.
- **XTB loss figure:** one fetch reported both 74% and 77% on the same page; I confirmed only 77% in the rendered banner.
- **Not found:** any competitor conversion rate, cost per lead or ad spend; whether XTB's e-book covers US-listed ETFs; the current availability of US-domiciled ETFs at Czech brokers (only 2018/2020 sources); Portu's and Fondee's actual onboarding steps after step 1 beyond Finex's descriptions.

## Options & trade-offs (input only)

- **Ask size.** E-mail only (Fondee, Finanzfluss) is low friction but yields a weaker lead; the XTB model (4 fields + phone) yields a callable lead but puts the form below the mobile first screen and bundles marketing consent. Goal-first (Finax) delays contact entirely and relies on the later steps.
- **Moment of ask.** After a calculation (Portu, Fondee, Finax) ties the ask to a personal result; in the hero (XTB, inline form) is visible earlier but competes with the risk banner; soft inline links (NerdWallet) keep trust but give no direct lead.
- **Interactive element types seen.** Growth calculator (3 sites), fee calculator (Portu), risk-profile explorer (Fondee), ETF screener (Finex, justETF), comparison table (NerdWallet), e-book (XTB). Each differs in how naturally it leads to a contact.
- **Tone.** "Ty" matches ad creatives of XTB and Portu's hero; "vy" is used on every Czech landing page body and by Fondee, Finax and Finex. Mixing has been done, but the mismatch between ad and page is visible at XTB and Portu.
- **Trust devices.** Regulator + client count; testimonials; named founders; own awards; media logos. Several claims are self-reported or inconsistent, so sourcing matters.
- **NYSE angle.** Open ground, but with a regulatory caveat: educate on US-listed ETFs and their UCITS equivalents, or compare NYSE-listed funds with an availability note. The legal availability for Czech retail investors needs checking before any such claim.
- **Risk text.** Range runs from XTB's heavy banner to one line (Portu) to none (justETF, Finanzfluss as captured); a finance ad page will need a visible, but proportionate, notice.

## Sources

Czech/Slovak: https://www.portu.cz/ ; https://www.portu.cz/registrace ; https://www.portu.cz/investice/pro-mlade ; https://www.portu.cz/investice/jednotlive-akcie-etf ; https://magazin.portu.cz/ ; https://magazin.portu.cz/pruvodce-portu/ ; https://finex.cz/recenze/portu/ ; https://finex.cz/recenze/fondee/ ; https://finex.cz/recenze/finax/ ; https://www.mediaguru.cz/clanky/2022/10/v-nove-kampani-portu-vystupuji-realni-investori/ ; https://www.finax.eu/cs ; https://www.finax.eu/cs/produkty/investovani-do-etf ; https://www.finax.eu/cs/onboarding ; https://www.finax.eu/en/blog/finax-2025-business-figures-and-statistics ; https://www.fondee.cz/ ; https://www.fondee.cz/kampane/direct-1000-bonus ; https://app.fondee.cz/registrace ; https://cc.cz/trzby-45-milionu-ale-se-ztratou-21-milionu-platforma-fondee-masivne-investuje-do-expanze/ ; https://www.xtb.com/cz ; https://www.xtb.com/cz/videokurzy ; https://cz.xtb.com/nejoblibenejsi-etf-v-xtb ; https://cz.xtb.com/nejoblibenejsi-etf-v-xtb-typ ; https://vzdelavani.xtb.com/jak-zacit-investovat ; https://forms.hsforms.com/embed/v3/form/2106565/49c7cdf6-dc85-4e93-ae62-356333c62b23/json ; https://finex.cz/ ; https://finex.cz/etf/ ; https://finex.cz/premium/ ; https://finex.cz/o-nas/ ; https://www.penize.cz/ ; https://www.investicniweb.cz/ ; https://www.rozbiteprasatko.cz/ ; https://www.finparada.cz/

International: https://www.justetf.com/en/ ; https://at.scalable.capital/newsroom/scalable-acquires-justetf ; https://www.justetf.com/en/news/etf/us-domiciled-etfs.html ; https://www.finanzfluss.de/ ; https://www.finanzfluss.de/newsletter/ ; https://www.finanzfluss.de/so-verdienen-wir-geld/ ; https://www.nerdwallet.com/investing/learn/sp-500-etfs ; https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-1-cast

Traffic estimates (Similarweb, Sept 2026): https://www.similarweb.com/website/portu.cz/ ; /finax.eu/ ; /fondee.cz/ ; /finex.cz/ ; /penize.cz/ ; /investicniweb.cz/ ; /rozbiteprasatko.cz/ ; /xtb.com/ ; /trading212.com/

Ads (Meta Ad Library, public, country CZ, active, read 2026-10-10): https://www.facebook.com/ads/library/ with queries "Fondee", "fondee.cz", "portu.cz", "Investuj. Nestresuj." (exact phrase), "Finax", "XTB ETF"
