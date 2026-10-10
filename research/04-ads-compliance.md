# Agent D — Ads, compliance, GDPR/cookies and competitor ads (Czech ETF lead-magnet page)

Access date for every source: 2026-10-10. Tags: `[VERIFIED]` = I opened the page and it states this; `[INFERRED]` = my reasoning, or only a search snippet / vendor summary / unreadable page. This is research, not legal advice. No form on a third-party site was filled in or submitted.

## Summary (max 10 bullets)

- **Google Ads:** financial-services advertiser verification now covers Czechia, so a non-authorised publisher would probably be blocked from showing financial ads there. Sources conflict on the start date (23 Jul 2026 vs 15 Sep 2026), but both are in the past. Google's help text mentions no educational exemption. Czech-specific treatment of educational or comparison pages: no evidence found.
- **TikTok (Czech entry):** "Investment services" are allowed only with a local licence, 18+ targeting and disclaimers. "Advisory services" are not allowed. ETFs are not mentioned.
- **Meta:** the policy body could not be read (JS page). Search snippets say advertisers may need verification and a licence in the targeted country. The "Financial products and services" special-ad-category rules are documented for the US only, and Czechia is not mentioned. Competitors run finance ads in Czechia on broad targeting (18–65+, all genders, country-level).
- **MiFID II Art. 24(3) and Delegated Regulation 2017/565 Art. 44** bind investment firms. They set out what "fair, clear, not misleading" means: risk prominence, comparison rules, past-performance rules (5 years, complete 12-month periods, currency warning) and no use of regulator names as endorsement. A non-licensed publisher is not named as an addressee, but it is exposed through MAR Art. 20 and the advice licensing perimeter.
- **The perimeter test is individualisation.** The ČNB (Jan 2025 notice) says advice is an individualised recommendation on a specific instrument and needs a licence. A public "investment recommendation" is allowed without a licence but carries MAR duties (identity, date, facts vs. opinion, sources, conflicts). ESMA (Jan 2026) says a "not investment advice" disclaimer does not protect an influencer.
- **GDPR / ePrivacy:** separate consents are needed. Czech Act 480/2004 §7 requires prior consent for e-mailed commercial communications (fine up to CZK 10m for legal entities). Double opt-in is not legally required but is a practical way to prove consent. Non-technical cookies, including analytics, need opt-in. The ÚOOÚ presents "reject" in the first layer, as easy and visible as "accept", as good practice. *(Lead-agent check: good practice, not an explicit requirement; see 99-verification-log D4.)*
- **Measuring the funnel:** Czech authorities treat analytics as consent-requiring, and a vendor source lists Czechia among countries that require consent even for cookieless analytics. Some funnel data will therefore be consent-gated or modelled. No Czech opt-in rate was found.
- **Competitors (Meta Ad Library, accessible without login):** Fondee, Portu and XTB are active. The lead-magnet pattern (free course, e-books, webinar, free consultation) is used by XTB and by small Czech educators or advisers. Finax shows one Polish-language ad only, and Trading 212 showed none.
- **Creative evidence is mostly Weak/Medium.** TikTok's own survey (7,500 users) favours candid, human, transparent tone. Instant-form-vs-landing-page claims come from vendors, apart from Meta's own 2023 test.
- **Biggest open items:** whether paid lead-referral to brokers counts as regulated intermediation; whether Meta requires verification for Czech investment ads; Czech rules on server-side tracking.

## Findings

### 1. Ad platform policies

**Google Ads**
- Google announced on 23 June 2026 that financial services verification covers all EU/EEA countries (42 in total). Verification is checked against official registries, and unverified in-scope advertisers have financial ads restricted. [VERIFIED] ppc.land + Google blog.
- Google's help page lists Czechia among 24 EEA markets with rolling enforcement from 23 July 2026. Its regulator table says Czechia's enforcement starts 15 September 2026, listing ČNB, KAČR, KDP, the Ministry of Justice, MPO, EBA, EIOPA and ESMA. These two Google pages contradict each other. [VERIFIED] support.google.com/adspolicy/answer/17127726 and /12390454. Both dates have passed.
- In-scope categories include banking, credit cards, credit and loans, investment, brokerages and day trading, bonds and commodities, and insurance. The list is "non-exhaustive" and varies by location. Advertisers go through the Google partner G2 first. [VERIFIED]
- Third-party advertisers who promote financial services but are not directly authorised cannot apply themselves. A first-party or authorised advertiser must apply for them. [VERIFIED]
- The Germany section of the verification page says there is no educational exemption. This is Germany-specific, and no Czech-specific educational treatment was found. [VERIFIED for Germany; Czech = No evidence found]
- Competitor accounts shown in the Google Ads Transparency Center for Czechia carry a "Ověřeno" (verified) badge: Finax, o.c.p., a.s.; Direct Fondee a.s.; WOOD Retail Investments a.s. (Portu); XTB S.A. An agency-like account, Optimics s.r.o., also runs ads to portu.cz without the badge in the list. [VERIFIED]

**Meta**
- The Transparency Center body text could not be read via WebFetch. The following is from search snippets of Meta's policy and is therefore [INFERRED]: advertisers promoting financial products may have to verify identity and prove authorisation "where this is a requirement". They may need to be licensed in the targeted country. Credit-card, loan and insurance ads need 18+ targeting. Source: transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services (title only readable).
- Developer documentation: the FINANCIAL_PRODUCTS_SERVICES special ad category replaced CREDIT on 14 Jan 2025 and is required for US advertisers or US audiences. The CREDIT policy still applies to the US, Canada and "certain parts of Europe". Restrictions are fixed age 18–65+, no gender targeting, no lookalikes, interests only from an approved list, and a minimum radius of 15 km in Europe. The page does not mention Czechia. [VERIFIED]
- Meta's UK precedent requires FCA authorisation for financial advertisers (2022). No equivalent EU or Czech requirement was found. [VERIFIED for UK; EU = No evidence found]
- Meta's Ad Library "About the disclaimer" panel for a Direct Fondee ad lists advertiser and payer names and website for the Czech location ("based on where the ad is shown and the ad category"). [VERIFIED]

**TikTok**
- The Czech Republic entry (financial services policy page) allows "Investment services", credit cards, loans and BNPL if the advertiser complies with local law, makes disclosures and disclaimers, is licensed by local/regional authorities and restricts to 18+. "Advisory services", high-risk investments (forex, binary options), get-rich-quick schemes and virtual currencies are not allowed. ETFs are not mentioned. [VERIFIED] ads.tiktok.com/help/article/tiktok-ads-policy-financial-services. A search snippet dated this page's latest version to Sept 2026. [INFERRED]

### 2. Meta Instant Forms vs. external landing page (facts relevant to us)
- Meta's own 2023 test (15 global A/B tests, Nov 2022–Feb 2023) found a 20% lower cost per qualified lead for instant forms vs. website forms. Meta says results require a CRM connected via Conversions API, and performance varies. [VERIFIED] facebook.com/business/news/create-more-valuable-leads-than-ever-with-metas-instant-forms (Apr 2024).
- An agency article (Mar 2026) says instant forms ("two taps") attract more low-intent leads. A landing page adds friction that filters intent and lets you track behaviour beyond the form. [VERIFIED] trio-media.co.uk.
- Vendor claims of 20–50% cheaper leads and 20–40% worse contact/qualification rates are unsourced and conflicting. [INFERRED] (search snippets: benly.ai, stackmatix.com, elevarus.com).
- A landing page is the only option that gives page-level funnel events (arrival → scroll → calculator use → form view → submit). With an instant form the in-platform form has no page events. This is a consequence of the format and the assignment, so [INFERRED].
- Instant forms require a privacy-policy link and allow an optional custom disclaimer. Restricted data such as financial details is barred. [INFERRED] from third-party guides; Meta's Lead Ad Terms were not opened.

### 3. Regulation of marketing communications for investment products

**Binding text**
- MiFID II Art. 24(3): all information including marketing communications addressed by the investment firm to clients or potential clients must be fair, clear and not misleading and clearly identifiable. [VERIFIED] EUR-Lex 32014L0065.
- Delegated Regulation 2017/565 Art. 44 (addressed to "Investment firms") requires: firm name; risks given equal prominence with font size at least the predominant size; no obscuring of warnings; fair and balanced comparisons with sources and key assumptions named (44(3)). Past performance must not be the most prominent feature, must cover the preceding 5 years or the whole life if shorter, must use complete 12-month periods, must state reference period and source, and must carry a prominent warning. A currency other than the client's must be stated with a currency warning. Gross figures must disclose costs. Simulated performance and forecasts have extra conditions. Tax statements must say treatment depends on individual circumstances. The name of a competent authority must not suggest endorsement (44(8)). [VERIFIED] EUR-Lex 32017R0565.
- ESMA guidelines on marketing communications (ESMA34-45-1272, 2 Aug 2021) apply to UCITS management companies, AIFMs and similar fund managers, not independent publishers. They cover social-media messages that refer to a fund. Key points: prominent "marketing communication" label (paras 6–8); risks and rewards shown equally (paras 12–15); no wording such as "safe investment" or "effortless returns" (para 32); comparisons only between similar funds (para 33); short social posts should be neutral and link to detail (para 31); past performance 10 years with a KIID or 5 years otherwise, with the statement "Past performance does not predict future returns" (paras 44, 47); currency warning (para 48); for ETFs state the regulated markets where traded (para 58). [VERIFIED] (PDF text extracted locally).

**Is a comparison page "advice" or a "recommendation"?**
- MiFID investment advice = personal recommendations to a client in respect of transactions in financial instruments. [VERIFIED] Art. 4(1)(4). A recommendation is personal if made to a person as an investor and presented as suitable for them or based on their circumstances. Recommendations "issued exclusively to the public" are not personal. [VERIFIED] DR 2017/565 Art. 9.
- MAR: "investment recommendations" include information recommending or suggesting an investment strategy, including opinions on value or price, intended for distribution channels or the public. Anyone who produces or disseminates them must present them objectively and disclose interests and conflicts (Art. 20). [VERIFIED] EUR-Lex 32014R0596 Art. 3(1)(34)–(35), Art. 20.
- ČNB notice for finance influencers (23 Jan 2025): a public communication with advice, opinions or ideas on buying or selling instruments (including fund units) can be an investment recommendation under MAR. A direct recommendation is an explicit call to buy, sell or hold. An indirect one only evaluates (for example "overvalued"). Direct ones must state identity, date and time, separate facts from opinion, rely on reliable sources, and disclose conflicts. "Experts" (repeat, self-presented as expert) also owe methodology, horizon, update frequency and holdings above 0.5%. Investment advice is "individualizované doporučení" on a specific instrument and needs a licence. Replies to comments can cross the line. [VERIFIED] cnb.cz.
- ČNB board member interview (24 Jul 2026): three categories. General opinions for the public need no licence but need objectivity and conflict management. Paid marketing cooperation must be marked as advertising. Individual recommendations need a licence. No fines on finfluencers so far, with focus on education. [VERIFIED] cnb.cz. The interview does not draw a precise education-vs-recommendation line. [VERIFIED]
- ESMA factsheet (Jan 2026): telling followers what to buy or avoid may count as advice needing authorisation. A "not investment advice" statement does not shield. Disclose payments with labels like "advertisement" and disclose holdings. [VERIFIED] consob.it (relaying ESMA, 12 Jan 2026). ESMA's MAR statement on social-media recommendations: Oct 2021. [VERIFIED] amf-france.org. ESMA's supervisory briefing on the definition of advice (11 Jul 2023) was updated with influencer cases; I could not read the cases. [VERIFIED for date; content = INFERRED]
- The EU Retail Investment Strategy: a provisional deal on 18 Dec 2025 reportedly tightens marketing rules and finfluencer responsibility of firms. The legal text was still being finalised. [INFERRED] (CMS law firm briefing snippet).
- Licence for a non-licensed publisher: the Art. 24(3)/Art. 44 text is addressed to investment firms, so [INFERRED] they do not directly bind a pure publisher. The ČNB says unlicensed individualised advice is sanctionable. Whether a per-lead fee from brokers turns a comparison site into regulated "intermediation": No evidence found.

### 4. Disclaimers in Czech (real examples)

| Site | Fragment | Where |
|---|---|---|
| finax.eu/cs | "Hodnota portfolia může klesat a stoupat." | footer |
| finax.eu/cs | "Výnos v domácí měně je ovlivněn také kolísáním směnného kurzu EUR/CZK." | footer |
| finax.eu/cs | "Minulé výnosy nejsou zárukou budoucích výnosů." | product section |
| fondee.cz | "Investor může získat zpět méně než kolik investoval" | calculator area |
| fondee.cz | "Simulace nezohledňuje daňové dopady ani inflaci" | calculator area |
| fondee.cz | Says content is not an investment recommendation ("nejsou investičním doporučením") | page text |
| xtb.com/cz | "Investování je rizikové. Investujte zodpovědně." plus CFD loss banner "77 % ... ztrátových" | banner/footer |
| finex.cz (educator) | "Reklama" label on top; risk notice at bottom with "Minulá výkonnost není spolehlivým ukazatelem budoucích výsledků" | top/bottom |
| xtb.com/cz ETF page | "Výkonnost v minulosti nebo budoucí prognózy nejsou spolehlivým ukazatelem budoucí výkonnosti." | below chart |

All [VERIFIED]. Not found on the pages checked: a "marketing communication" label on Finax, Fondee and XTB; a currency-risk statement on XTB's ETF page. Portu.cz returned no readable content (JS). Investičníweb.cz showed no investment disclaimer, only privacy and copyright text.

### 5. GDPR for lead forms
- GDPR Art. 6(1)(a) consent, (b) steps requested before a contract, (f) legitimate interest. [VERIFIED] gdpr-info.eu. Art. 7(2): the consent request must be clearly distinguishable. 7(3): withdrawal as easy as giving it. 7(4): "utmost account" of whether a service is made conditional on unnecessary consent. [VERIFIED]
- Czech Act 480/2004 §7(2): e-mail addresses may be used for commercial communications only for users who gave prior consent. §7(3): own-customer exception. §7(4): messages must be clearly marked as commercial, must not hide the sender, and must carry a valid opt-out address. Fines: up to CZK 10,000,000 for legal entities, 100,000 for natural persons. [VERIFIED] zakonyprolidi.cz.
- ÚOOÚ chair (2018) criticised needless consent requests for services that rest on contract or law, and said it checks that consent is free, informed and unambiguous. [VERIFIED] pravniprostor.cz (2018, may be dated). A ÚOOÚ news item titled "Předem zaškrtnuté políčko ... není platným projevem vůle" indicates pre-ticked boxes are invalid. [INFERRED, title only]
- Double opt-in is not required by §7. It is a practical way to prove consent, since the sender bears the burden of proof. [INFERRED] from a legal commentary snippet; no ÚOOÚ prescription was found.
- ÚOOÚ's own Art. 13 notices for its own agendas show a structure (controller, DPO, purposes, legal basis, recipients). They are not a template for marketers. [INFERRED]
- Consent wording examples: Meta's guidance example "By submitting this form, you agree to receive marketing emails..." is a vendor example only. [INFERRED] No Czech ÚOOÚ-approved wording was found.

### 6. Czech cookie law (Act 127/2005, from 1 Jan 2022)
- Cookies and similar technologies are stored only with provable consent, except technical ones. Analytics, statistics and advertising need consent. [VERIFIED] ÚOOÚ news 25 Nov 2021; ÚOOÚ Q&A.
- ÚOOÚ Q&A: technical cookies need no consent (a banner is not required for technical-only use, but an information notice is). Statistical cookies are non-technical. The "reject" button should be in the first layer. Closing the banner is not consent. Consent is reasonable for 12 months, and after a refusal the banner should not reappear for at least 6 months. The same conditions apply to local storage and fingerprinting. The page does not address tracking pixels or server-side tracking. [VERIFIED] uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies
- The Q&A cites first-party analytics as an example of legitimate interest for subsequent processing, but still requires consent for the cookie. [VERIFIED]
- Matomo (vendor FAQ) lists Czechia among countries requiring consent even for first-party, anonymised, cookieless analytics. France is in the exemption group. [VERIFIED statement; vendor view]
- Google: its EU user consent policy requires consent for cookies and ad personalisation in the EEA, UK and CH, and the retention of consent records. [VERIFIED] Consent Mode parameters are ad_storage, analytics_storage, ad_user_data and ad_personalization. When denied, no new ad cookies are set, but URL passthrough and the full URL still flow. [VERIFIED] developers.google.com. Basic vs. advanced Consent Mode and conversion modelling were described only by vendor blogs. [INFERRED]
- Meta Pixel / Conversions API: vendor sources disagree on whether server-side events still need consent. No primary source (Meta terms, DPA decision) was opened. [INFERRED]
- Czech opt-in rate: No evidence found. A vendor (Didomi, via French press) puts Eastern Europe near 67% opt-in. [INFERRED, second-hand]

### 7. Competitor ads (Meta Ad Library, Czech Republic, active ads, 2026-10-10)

The Ad Library was accessible via the built-in browser without login. Keyword searches also return unrelated ads, which I ignored. Ad IDs are Library IDs.

| Advertiser | Angle / hook (copy summarised) | Format | CTA | Landing / destination | Start |
|---|---|---|---|---|---|
| Direct Fondee (~67 active ads) | "Calculate what your investment can be in 10/20/30 years" (ID 28055100750793947 and clones) | video ~40 s | none shown | not shown | 3 Aug 2026 |
| Direct Fondee | "Tailor-made, no hidden fees, no cryptic footnotes" (ID 1254974956720567) | video 34 s | Learn more | www.fondee.cz | 26 Aug 2026 |
| Direct Fondee | "You don't need millions, start from 1,000 CZK" (ID 1026310276616577) | video | none shown | not shown | 9 Jul 2026 |
| Direct Fondee | Direct insurer clients: 1,000 CZK bonus on first investment (ID 26819523864412650) | static | Get Offer | not shown | 25 Sep 2026 |
| Direct Fondee | "Transparently and under ČNB supervision"; "ETF investment simply, transparently, online" (IDs 1358723966456058, 2134152494149897) | image/text | Learn More | not shown | 9 Jul 2026 |
| Portu | "You don't need to be an expert" app install (ID 1441679956882506) | media | Install Now | app store | 29 Aug 2025 |
| Portu | "Got a bank app? Why not an investment one", 344,000 clients | video 6 s | Learn More | not shown | 23 Sep 2026 |
| Portu | Child investing, 0.25% p.a. fee (ID 2498638017229101) | media | Learn More | not shown | 16 Sep 2026 |
| Portu | "Investing a hundred isn't worth it? Think again", 2x cheaper under 26 | video 6 s | not captured | not shown | 16 Sep 2026 |
| XTB | Free course: 8 videos on stock/ETF portfolio building (ID 1496566814710793) | video + long copy | "ZÍSKEJTE INVESTIČNÍ KURZ ZDARMA" / Download | xtb.cz/tvorba-akciove-portfolia | 26 May 2025 / 3 Jun 2026 |
| XTB | E-book "Byt, nebo trh?" (ID 970452145920408) | carousel | Download | vzdelavani.xtb.com | 9 Apr 2026 |
| XTB | E-book on defence stocks (ID 26335817892756695) | video 24 s | not captured | not shown | 24 Apr 2026 |
| XTB | 5% welcome interest for 90 days (ID 2259452171512907) | image/video | See Details | xtb.cz | 24 Sep 2026 |
| XTB | Zero fees on stocks/ETFs; app install; "Byt, nebo investice?" | video | Install Now / Sign Up | xtb.cz | 2025–2026 |
| Finax | One Polish-language retirement ad with "Inwestowanie wiąże się z ryzykiem" (ID 2050594125818494) | media | Lepsza emerytura | not shown | 18 Aug 2026 |
| Trading 212 | No active ads found for the exact phrase; only an educator's video ad | – | – | – | – |
| "Investování pro holky" (educator) | Free webinar on index ETFs; comment a keyword to get the link (ID 2299367657147403) | video 55 s | Watch more | vzdelavani.investovanipropholky.cz (did not resolve in WebFetch) | 24 Jun 2025 |
| "Průvodce investicemi" | ETF handbook plus free consultation; defence-sector ETF ad (IDs 1125513139729831, 1243481053784594) | long text | Learn More | not shown | Apr 2025–Apr 2026 |
| "Finance? Sehnal" (adviser) | 45-min free diagnostic consultation, "I'm not from a bank" (ID 1012758381283058) | long text | link in text | ms.matejsehnal.finance | 10 Jun 2026 |

All [VERIFIED] from the Ad Library text. Observed patterns [INFERRED]: lead magnets are mostly free education (course, e-book, webinar) or a free consultation; Fondee/Portu push app or account opening with a calculator or fee message; cold-audience hooks use ease ("no expert needed", "from 1,000 CZK"), transparency ("no hidden fees") and a social-proof number.

Targeting and delivery (EU transparency panel) [VERIFIED]:
- Direct Fondee ad 1254974956720567: location Czech Republic (country), age 18–65+, all genders, reach 35,454. Delivery by my calculation from the breakdown: about 70% male and about 39% aged 25–44.
- Portu ad 1441679956882506: same targeting, reach 130,936. Delivery by my calculation: about 81% male and about 62% aged 25–44.

Google Ads Transparency Center (Czech region) [VERIFIED]: finax.eu 42 ads; fondee.cz about 200; portu.cz about 2,000; xtb.com 39. The TikTok Commercial Content Library was not checked.

### 8. Ad creative and copy patterns (evidence strength)

| Pattern | Evidence | Strength |
|---|---|---|
| Candid, human, transparent tone; real people at home rather than bank settings | TikTok Marketing Science, 200 top videos plus 7,500 users, 5 markets (Oct 2024). 71% want a straightforward tone, 57% want vital product information. Platform-side study. | Medium |
| Hook in the first 3–6 seconds, tied to the product | TikTok Creative Center finance guidance (snippet) | Medium (platform guidance) |
| Bold-statement hooks are the most common in finance (36.4%); creatives with discount/free-offer intent dominate | Benly analysis of 8,557 creatives from the Ad Library, Q1 2026. Longevity is a proxy, not measured KPIs; no CTR is reported. | Weak |
| UGC beats studio creative on CPA in fintech (1.6–2.4x) | Secondhand claim, original not found; most UGC data is ecommerce | Weak |
| Carousel CTR above static in lending | Mortgage benchmark by a vendor, different sources contradict | Weak |
| Free educational asset or consultation as the offer | Seen in live competitor ads (XTB, small educators), no performance data | Weak (prevalence, not effectiveness) |
| Numbers in headlines (calculator hook, fee percentages, client counts) | Seen in Fondee and Portu copy; no performance data found | Weak |
| Compliance-safe wording | ESMA para 32 lists wording to avoid ("safe investment", "effortless returns"); ESMA para 31 advises neutral short social copy | Strong as regulatory guidance, not performance |

## Evidence table

| Claim | Number/detail | Source URL | Year | Tag |
|---|---|---|---|---|
| Google financial verification covers Czechia | Enforcement from 23 Jul 2026 | https://support.google.com/adspolicy/answer/17127726 | 2026 | VERIFIED |
| Google regulator table gives a different date | Czechia 15 Sep 2026 | https://support.google.com/adspolicy/answer/12390454 | 2026 | VERIFIED |
| Google verification scope | 42 countries, 30-day window | https://blog.google/products/ads-commerce/eu-financial-advertiser-verification/ ; https://ppc.land/google-expands-financial-ad-verification-to-24-eu-and-eea-countries/ | 2026 | VERIFIED |
| TikTok Czech entry | Investment services allowed with licence and 18+; advisory not allowed | https://ads.tiktok.com/help/article/tiktok-ads-policy-financial-services?lang=en | 2026 | VERIFIED |
| Meta special ad category docs | US only; Czechia not mentioned; min radius 15 km Europe | https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category | 2026 | VERIFIED |
| Meta licence/verification language | "may be required to be licensed" | https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services | n/d | INFERRED |
| Instant forms 20% cheaper per qualified lead | 15 A/B tests | https://www.facebook.com/business/news/create-more-valuable-leads-than-ever-with-metas-instant-forms | 2024 | VERIFIED |
| MiFID II Art. 24(3) | Fair, clear, not misleading | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0065 | 2014 | VERIFIED |
| DR 2017/565 Art. 44 | 5-year past performance, currency warning, comparison rules | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0565 | 2017 | VERIFIED |
| ESMA marketing communications guidelines | Funds only; para 44, 47, 48, 58 | https://www.esma.europa.eu/sites/default/files/library/esma34-45-1272_guidelines_on_marketing_communications.pdf | 2021 | VERIFIED |
| MAR definitions and Art. 20 | Objective presentation, disclose interests | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014R0596 | 2014 | VERIFIED |
| ČNB notice for finance influencers | Direct/indirect recommendation; advice needs licence | https://www.cnb.cz/cs/dohled-financni-trh/ochrana-spotrebitele/upozorneni/Upozorneni-Ceske-narodni-banky-pro-influencery-v-oblasti-financi/ | 2025 | VERIFIED |
| ČNB interview, three categories, no fines | 24 Jul 2026 | https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Finfluencery-sledujeme-ispomociAI/ | 2026 | VERIFIED |
| ESMA finfluencer factsheet | Disclaimer does not shield | https://www.consob.it/web/consob-and-its-activities/w/press-release-of-12-january-2026-finfluencers- | 2026 | VERIFIED |
| Act 480/2004 §7, fines | Up to CZK 10m for legal entities | https://www.zakonyprolidi.cz/cs/2004-480 | 2004 | VERIFIED |
| Cookie opt-in; reject in first layer | 12 and 6 month periods | https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies | n/d | VERIFIED |
| Cookieless analytics need consent in CZ | Vendor statement | https://matomo.org/faq/general/do-i-need-consent-to-use-web-analytics-on-my-website/ | 2026 | VERIFIED (vendor) |
| Google Consent Mode parameters | Four parameters | https://developers.google.com/tag-platform/security/guides/consent | n/d | VERIFIED |
| Fondee/Portu targeting | CZ, 18–65+, all; reach 35,454 and 130,936 | Meta Ad Library IDs 1254974956720567 and 1441679956882506, https://www.facebook.com/ads/library/ | 2026 | VERIFIED |
| Competitors Google-verified | "Ověřeno" badge | https://adstransparency.google.com/?region=CZ&domain=fondee.cz (also finax.eu, xtb.com, portu.cz) | 2026 | VERIFIED |
| TikTok finance research | 71% candid tone, 57% vital info | https://ads.tiktok.com/business/pl-PL/blog/elevate-your-finance-ads | 2024 | VERIFIED |

## Contradictions & open questions

- Google gives two enforcement dates for Czechia (23 Jul vs 15 Sep 2026). Both pages are Google's own. Which one applies to a given account is shown by the in-account notice.
- Meta: the policy text itself was unreadable. Whether Meta asks for Czech regulator authorisation for investment-comparison ads is unconfirmed.
- Does an educational ETF comparison fall into Google's "investment" category for Czechia? Google's German page says no educational exemption. No Czech-specific answer was found.
- Is a "best ETFs" style ranking an indirect investment recommendation? The ČNB says an evaluation without a call to action is "indirect". The ČNB's interview says the boundary between education and recommendation is not precisely drawn.
- Does a per-lead or affiliate fee from brokers create an "investment intermediary" status or at least a conflict of interest to disclose? No evidence found. The ČNB interview treats paid promotion as a conflict viewers should weigh.
- Meta Pixel / Conversions API consent: vendors contradict each other. No primary source was opened.
- Whether the ESMA guideline for funds is applied by the ČNB to third-party publishers: not stated. It is addressed to fund managers.
- The ČNB's earlier statements differ in tone (a 2024 interview mentions possible fines, the 2026 interview says no fines so far). The ČNB says it is monitoring with AI.
- Did Fondee's "pod dohledem ČNB" ad wording conflict with the rule against implying regulator endorsement (DR 2017/565 Art. 44(8))? That rule applies to investment firms and its application to this wording is my reading only, so [INFERRED]; I make no finding.
- ESMA's UCITS rule referencing the KIID (10-year period) may be affected by the shift to PRIIPs KIDs. I did not check.
- Not accessed: TikTok Commercial Content Library; Meta ad targeting beyond two ads; Finax CZ ads on Meta (only one Polish ad appeared).

## Options & trade-offs (input for later decisions — no recommendation)

**A. Content positioning of the page**
1. *Pure data and education* (fees, tracking error, size, domicile, with sourced numbers and no ranking): lowest MAR/advice exposure. Art. 44(3) comparison standards (sources, assumptions, fairness) are a sensible self-imposed benchmark. Less persuasive.
2. *Criteria-based ranking or "best for X"*: more engaging. It may read as an indirect recommendation (ČNB), so identity, date, sources and conflict disclosures would be needed. Risk of being perceived as a recommendation grows with a single "winner".
3. *Personalised quiz or calculator output naming a specific ETF*: strongest hook. Individualisation is what the ČNB uses to define advice, and a disclaimer alone does not help (ESMA 2026). Highest regulatory exposure.

**B. Paid platform and the verification gate**
- Google Ads: reach on intent keywords, but financial-services verification now applies to Czechia and a non-authorised publisher may be unable to run ads. Third parties cannot self-apply.
- Meta: lower observed gating evidence for Czechia, but the policy text is unconfirmed. Competitors target broadly (18–65+, all genders) in Czechia. Special-category targeting limits are documented only for the US.
- TikTok: Czech entry allows "Investment services" only with licence and 18+. "Advisory services" are not allowed, so wording of the offer matters.

**C. Lead capture**
- Landing page (required by the assignment) gives page-level events and a friction filter on intent. Instant forms are cheaper per lead in Meta's own test but have no page funnel. If both were used for comparison, the data would not be comparable without extra work.
- Single "send me the report" consent versus two consents (delivery of the asset; marketing newsletter), with the second unticked. §7 480/2004 requires prior consent for marketing e-mail. A double opt-in e-mail adds friction but gives proof.

**D. Measurement under opt-in rules**
- Consent-gated analytics and pixels: clean legally, with a gap in data from non-consenters (the Czech rate is unknown).
- Consent Mode "advanced" with modelling: recovers conversions in Google, but vendors call it legally contested. "Basic" blocks tags until consent.
- Cookieless first-party counters: Matomo's FAQ says Czechia still requires consent. The ÚOOÚ Q&A treats statistics as non-technical.
- Server-side events: no Czech primary guidance found. Consent gating applies in principle.
- Funnel events that do not touch the device (for example aggregate server logs) were not researched.

**E. Disclaimers**
- Minimum set seen in the Czech market: past-performance warning, loss of capital, currency (EUR/CZK), fees and tax, and a "not a recommendation" statement. Some use an "advertisement" label (finex.cz). ESMA's rule for funds adds a "marketing communication" label, though it does not bind a non-fund-manager. Because a disclaimer alone does not solve the advice question (ESMA 2026), it complements the content positioning in A.

## Sources (full list)

1. https://ppc.land/google-expands-financial-ad-verification-to-24-eu-and-eea-countries/
2. https://blog.google/products/ads-commerce/eu-financial-advertiser-verification/
3. https://support.google.com/adspolicy/answer/17127726?hl=en-IE
4. https://support.google.com/adspolicy/answer/12390454?hl=en
5. https://support.google.com/adspolicy/answer/12492484
6. https://support.google.com/adspolicy/answer/13872758?hl=en
7. https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category
8. https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services (title only readable)
9. https://www.engageweb.co.uk/blog/authorisation-now-required-for-financial-firms-to-run-facebook-ads
10. https://ads.tiktok.com/help/article/tiktok-ads-policy-financial-services?lang=en
11. https://ads.tiktok.com/business/pl-PL/blog/elevate-your-finance-ads
12. https://www.facebook.com/business/news/create-more-valuable-leads-than-ever-with-metas-instant-forms
13. https://trio-media.co.uk/meta-lead-forms-vs-website-conversions
14. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0065
15. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0565
16. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014R0596
17. https://www.esma.europa.eu/sites/default/files/library/esma34-45-1272_guidelines_on_marketing_communications.pdf
18. https://www.regulationtomorrow.com/2021/05/esma-publishes-guidance-on-funds-marketing-communications/
19. https://www.cnb.cz/cs/dohled-financni-trh/ochrana-spotrebitele/upozorneni/Upozorneni-Ceske-narodni-banky-pro-influencery-v-oblasti-financi/
20. https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Finfluencery-sledujeme-ispomociAI/
21. https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Chceme-aby-finfluenceri-neporusovali-pravidla.-Jejich-prinos-vsak-muze-byt-i-pozitivni
22. https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Financni-influenceri-pod-dozorem-CNB-Evropsti-regulatori-zbystrili-00001
23. https://www.amf-france.org/en/news-publications/news-releases/amf-news-releases/investment-recommendations-social-media-amf-backs-esmas-reminder
24. https://www.esma.europa.eu/press-news/esma-news/esma-updates-its-guidance-definition-advice-supervisory-briefing
25. https://www.consob.it/web/consob-and-its-activities/w/press-release-of-12-january-2026-finfluencers-
26. https://cms.law/en/int/legal-updates/eu-retail-investment-strategy-political-agreement-key-points-and-implications-for-eu-and-non-eu-firms (snippet only)
27. https://www.finax.eu/cs ; https://www.fondee.cz ; https://www.xtb.com/cz ; https://www.xtb.com/cz/etf/v20d-de ; https://finex.cz/top-5-etf-s-nejvyssim-vynosem-v-roce-2023/ ; https://www.investicniweb.cz/
28. https://gdpr-info.eu/art-6-gdpr/ ; https://gdpr-info.eu/art-7-gdpr/
29. https://www.zakonyprolidi.cz/cs/2004-480
30. https://pravniprostor.cz/aktuality/uoou-firmy-chteji-souhlas-se-zpracovanim-dat-mnohdy-nadbytecne
31. https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies ; https://uoou.gov.cz/novinky/vse/cookies-od-zacatku-roku-2022-pouze-se-souhlasem
32. https://matomo.org/faq/general/do-i-need-consent-to-use-web-analytics-on-my-website/
33. https://www.google.com/about/company/user-consent-policy/ ; https://developers.google.com/tag-platform/security/guides/consent
34. https://www.facebook.com/ads/library/ (Czech Republic, queries Finax, Fondee, Portu, XTB, "Trading 212", ETF; ad detail panels for IDs 1254974956720567 and 1441679956882506)
35. https://adstransparency.google.com/?region=CZ (domains finax.eu, fondee.cz, portu.cz, xtb.com)
36. https://benly.ai/benchmarks/finance-fintech
37. Search-snippet-only vendor pages (INFERRED): benly.ai, stackmatix.com, elevarus.com, flexyconsent.com, cookiebot.com, webtonic.io, adadvisor.ai, jonloomer.com, ppchero.com
