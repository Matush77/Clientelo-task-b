# Subagent: Research: ads and compliance (general-purpose, model: sonnet)

## 👤 User · 2026-10-10 12:58:05

You are a research agent. Your complete task instructions are in two files written by the lead agent. Read both first and follow them exactly:
1. C:\Users\matus\Desktop\B_project\research\prompts\00-shared-rules.md (shared context and rules)
2. C:\Users\matus\Desktop\B_project\research\prompts\04-ads-compliance.md (your specific task and output path)

Write only the output file named in your task file. Finish with the short reply described in rule 8.

*[context injected: ]*

**→ Read** `C:\Users\matus\Desktop\B_project\research\prompts\00-shared-rules.md`

<details><summary>result</summary>

```
1	# Shared context & rules for all research agents
2	
3	Written by the lead agent (Claude Opus 5.5). Every research agent (Claude Sonnet 5.5, `general-purpose`) reads this file plus its own task file.
4	
5	## Context
6	You are a research agent supporting a hiring assignment. The final product is a mobile-first landing page (in Czech) that compares ETFs traded on NYSE for a Czech retail investor. The visitor arrives from a paid ad on mobile and gives the page only a few seconds. The page is a lead magnet: it offers value and collects the visitor's contact in exchange. It will be judged mainly on the question "could we run paid ads to it tomorrow?". The page must use real data with cited sources, measure the full journey from arrival to form submission, and be deployed on free hosting (e.g. Vercel). Two ad versions must also be proposed. The original assignment (in Slovak) is in `C:\Users\matus\Desktop\B_project\research\assignment.md`.
7	
8	Today's date is 2026-10-10.
9	
10	Your job is RESEARCH ONLY. Decisions about the target segment, the lead magnet, the copy and the design will be made later by a human together with the lead agent, based on your findings.
11	
12	## Rules
13	1. Ev
… [truncated, 1936 more chars]
```

</details>

**→ Read** `C:\Users\matus\Desktop\B_project\research\prompts\04-ads-compliance.md`

<details><summary>result</summary>

```
1	# Agent D — Ads & compliance
2	
3	Output file: `C:\Users\matus\Desktop\B_project\research\04-ads-compliance.md`
4	
5	## Research questions
6	1. **Ad platform policies** for financial products & services when targeting the Czech Republic / EU:
7	   - Meta (Facebook/Instagram): financial products and services policy, special ad categories and their targeting restrictions in the EU, advertiser verification, prohibited claims.
8	   - Google Ads: Financial services verification — is it required for Czechia? What content triggers it?
9	   - TikTok: financial services ad policy for CZ.
10	2. **Meta Instant Forms vs. an external landing page** — only facts that matter for us (the assignment requires a landing page).
11	3. **Regulation of marketing communications for investment products** (Czech/EU): MiFID II Art. 24(3) and Delegated Regulation (EU) 2017/565 Art. 44 (fair, clear, not misleading; rules on past performance — e.g. 5-year periods, currency warnings, simulated performance), ESMA guidelines on marketing communications (under the cross-border distribution regulation), ESMA/ČNB statements on finfluencers (2023–2025), ČNB stance. Key question: would a lead-magnet page that compare
… [truncated, 1644 more chars]
```

</details>

**→ ToolSearch**

```
{
 "query": "select:WebSearch,WebFetch",
 "max_results": 5
}
```

<details><summary>result</summary>

```
[tool_reference]
[tool_reference]
```

</details>

**→ WebFetch** https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-products-services

> prompt: Summarize Meta's financial products and services ad policy: what is prohibited, what needs authorization, any EU/country-specific requirements, claims restrictions. Quote only short fragments (<15 words).

**→ WebFetch** https://support.google.com/adspolicy/answer/9703665

> prompt: Summarize Google Ads financial services verification: which countries require it, is Czech Republic included, what products trigger it, what documents needed.

**→ WebSearch** `Google Ads financial services verification countries list Czech Republic`

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
The page mentions financial services only briefly and doesn't cover the rest of your question.

- **Countries:** The page doesn't list any countries that require financial services verification.
- **Czech Republic:** The page doesn't say whether it's included.
- **Products that trigger it:** The page doesn't list specific financial products. It says verification may be triggered when "You're running ads for certain industries, like financial services." It also lists "Offering financial products or services under false pretenses" as a reason an account may be paused during verification. For certain industries, it says "you'll need to complete extra tasks and meet certain requirements per Google Ads policy," but it doesn't specify those tasks.
- **Documents needed:** The page doesn't specify financial services documents. It says you "may be required to submit a document as part of verification" and links to a separate page on document requirements, which isn't included here. It also notes that submitted documents may be rejected for a mismatched organization name, expired documents, or missing key information.

For country lists, product definitions, and document requirements, check 
… [truncated, 144 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Google Ads financial services verification countries list Czech Republic"

Links: [{"title":"google expands financial ad verification to 24 eu and eea countries","url":"https://ppc.land/google-expands-financial-ad-verification-to-24-eu-and-eea-countries/"},{"title":"Financial Services Verification","url":"https://support.google.com/adspolicy/answer/12492484"},{"title":"Google financial ads: verification in 24 markets","url":"https://www.seo-day.de/news/article/google-expands-financial-services-ad-verification-across-24?lang=en"},{"title":"Financial Services Verification","url":"https://support.google.com/adspolicy/answer/13872758?hl=en"},{"title":"google expands financial services advertiser verification programme to 24 countries","url":"https://www.dawan.africa/news/google-expands-financial-services-advertiser-verification-programme-to-24-countries"},{"title":"google expands financial services advertiser verification program to 24 countries","url":"https://www.dawan.africa/news/google-expands-financial-services-advertiser-verification-program-to-24-countries"},{"title":"Financial Services Verification","url":"https://support.google.com/adspolicy/answ
… [truncated, 2610 more chars]
```

</details>

**→ WebFetch** https://ppc.land/google-expands-financial-ad-verification-to-24-eu-and-eea-countries/

> prompt: Extract: announcement date, list of countries, enforcement dates per country/group (especially Czechia), what triggers verification, what products are covered, 30-day window, what documents/registry checks.

**→ WebFetch** https://blog.google/products/ads-commerce/eu-financial-advertiser-verification/

> prompt: Extract date, countries, what is required, which advertisers/categories, timelines.

**→ WebFetch** https://support.google.com/adspolicy/answer/12492484

> prompt: Extract the financial services verification requirements: list of countries (is Czechia there), what ad content triggers it (which product categories), what verification requires (licenses, registry), exceptions e.g. educational content.

<details><summary>result</summary>

```
**Date:** June 23, 2026 (blog post date)

**Countries:** Every member state of the European Union (EU) and European Economic Area (EEA). The post says the rollout adds "24 additional countries" to the existing program, which is already active in 18 countries worldwide, including six EU member states and the UK. It does not list the countries by name.

**Requirements:**
- Advertisers must complete Google's financial services verification process to run financial ads.
- Verification checks credentials against the relevant official registry in each EU/EEA country.
- The goal is to confirm advertisers are authorized by their national regulators.

**Advertisers/categories:** Financial services advertisers. The post's examples include banks, loans, and insurance advice.

**Timeline:**
- The requirements will be introduced in phases.
- Businesses have 30 days to complete verification.
- If an advertiser isn't verified in that window, its financial services ads are restricted until verification is complete.
- The post doesn't say when each phase starts or when the 30-day clock begins. The page's AI-generated summary refers to "30 days of notification," which the article itself doesn't stat
… [truncated, 2 more chars]
```

</details>

<details><summary>result</summary>

```
**Announcement:** Google announced the expansion on June 23, 2026. Keerat Sharma, VP and General Manager of Ads Privacy and Safety, made the announcement. According to the article, the program will cover 42 countries in total, up from 18.

**Countries and enforcement dates:**
- **July 23, 2026:** The article names Austria, Belgium, Denmark, Finland, Hungary, Iceland, Liechtenstein, Luxembourg, the Netherlands, Norway, and Sweden. The timeline also says "among others," so the list is not complete.
- **Phased rollout:** The article says the remaining new countries will be introduced in phases, so activation dates can vary by advertiser.
- **Czechia:** The article does not mention Czechia, so I can't give its enforcement date.
- **Sweden:** The article lists Sweden among the existing six EU countries, but also among the July 23 enforcement countries. The article doesn't resolve this.
- **Earlier enforcement dates (for context):** Ireland, New Zealand, South Korea, and Thailand (November 7, 2024); Malaysia (April 14, 2026).

**What triggers verification:** Financial services advertisers that want to run ads in a targeted country must be authorized by that country's national regulator. 
… [truncated, 1319 more chars]
```

</details>

<details><summary>result</summary>

```
**Countries:** Czechia is listed in the page's location selector. The content provided, however, covers only Germany's specific requirements, so Czech rules aren't included. The selector lists: Australia, Austria, Belgium, Brazil, Bulgaria, Croatia, Cyprus, Czechia, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, India, Indonesia, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malaysia, Malta, Netherlands, New Zealand, Norway, Poland, Portugal, Romania, Singapore, Slovakia, Slovenia, South Korea, Spain, Sweden, Taiwan, Thailand, Türkiye, and the United Kingdom.

**Triggering content:** Verification applies when you run ads or target audiences who appear to be seeking certain financial services. Examples of covered categories include:
- Banking, credit cards, credit, and loans
- Investment, brokerages, and day trading
- Bonds, commodities, and futures trading
- Insurance
- Claims management services for financial products, such as scam redress, which have limited eligibility

In Germany, the requirement also covers financial service categories that the regulators may not oversee. Verification is required for all ad formats and assets.

**What ver
… [truncated, 1702 more chars]
```

</details>

**→ WebFetch** https://support.google.com/adspolicy/answer/13872758?hl=en

> prompt: What does this page say about Czechia / Czech Republic specifically? Enforcement date, who needs verification, recognized regulators (ČNB, etc.), educational content treatment.

**→ WebSearch** `Google Ads ověření finančních služeb Česko ČNB inzerenti finanční služby 2026`

**→ WebSearch** `Google Ads "Czechia" financial services verification enforcement date regulator`

<details><summary>result</summary>

```
The page doesn't say anything specific about Czechia or the Czech Republic. It is the Italy version of the policy, and the only Czech reference is "Czechia" in the country selector list.

- **Enforcement date:** Not stated. The page links to a separate "Relevant Regulators and Enforcement Dates" article for dates, but that content isn't included here.
- **Who needs verification:** Not stated for Czechia. The general policy says verification is needed when running financial services ads or targeting users seeking them in certain locations, and that some locations have extra requirements.
- **Recognized regulators (such as ČNB):** Not named. The Italian section refers to a linked list of European and Italian regulators, but that list isn't in the page text.
- **Educational content:** Not addressed for Czechia. The only related example is a general one under non-financial services advertisers: "Educational programs or institutions that provide information on financial aid." This is not Czech-specific.

To get the Czech details, check the "Relevant Regulators and Enforcement Dates" page (support.google.com/adspolicy/answer/12390454) or select Czechia in the country dropdown.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Google Ads "Czechia" financial services verification enforcement date regulator"

Links: [{"title":"Introducing new verification requirements for certain financial services advertisers (June 2026)","url":"https://support.google.com/adspolicy/answer/17127726?hl=en-IE"},{"title":"Google financial ads: verification in 24 markets","url":"https://www.seo-day.de/news/article/google-expands-financial-services-ad-verification-across-24?lang=en"},{"title":"Financial Services Verification: Relevant Regulators and Enforcement Dates","url":"https://support.google.com/adspolicy/answer/12390454"},{"title":"Financial Services Verification: Relevant Regulators and Enforcement Dates","url":"https://support.google.com/adspolicy/answer/12390454?hl=en"},{"title":"google ads expands financial advertiser verification in europe","url":"https://www.optimixed.com/google-ads-expands-financial-advertiser-verification-in-europe/"},{"title":"www.optimixed.com","url":"https://www.optimixed.com/?p=53447"},{"title":"Google Ads","url":"https://blog.google/products/ads-commerce/eu-financial-advertiser-verification/"},{"title":"google expands financial services advertiser verification 
… [truncated, 2057 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Google Ads ověření finančních služeb Česko ČNB inzerenti finanční služby 2026"

Links: [{"title":"Google Ads: financial verification in 24 EEA markets","url":"https://www.seo-day.de/news/article/google-ads-expands-financial-advertiser-verification-across?lang=en"},{"title":"google expands financial ad verification to 24 eu and eea countries","url":"https://ppc.land/google-expands-financial-ad-verification-to-24-eu-and-eea-countries/"},{"title":"Introducing new verification requirements for certain financial services advertisers (June 2026)","url":"https://support.google.com/adspolicy/answer/17127726?hl=en-IE"},{"title":"Google financial ads: verification in 24 markets","url":"https://www.seo-day.de/news/article/google-expands-financial-services-ad-verification-across-24?lang=en"},{"title":"Only Licensed Banks Can Run Financial Ads On Google In Malaysia Starting April 2026","url":"https://says.com/my/tech/only-licensed-banks-can-run-google-ads-in-malaysia-starting-april-2026"},{"title":"Google clamps down on financial services adverts with new policy","url":"https://professionaladviser.com/news/4033736/google-clamps-financial-services-adverts-policy"},
… [truncated, 3494 more chars]
```

</details>

**→ WebFetch** https://support.google.com/adspolicy/answer/17127726?hl=en-IE

> prompt: Does this page list Czechia with enforcement date? Quote the exact list of locations and dates. What are the requirements, what is G2, and what categories are covered? Any educational content exemption?

**→ WebFetch** https://support.google.com/adspolicy/answer/12390454?hl=en

> prompt: Find the row for Czechia: regulator names and enforcement date. Also whether the table includes Czech.

<details><summary>result</summary>

```
**Czechia** (enforcement starts **September 15, 2026**):

- Czech National Bank (CNB)
- Chamber of Auditors (KAČR)
- Chamber of Tax Advisors (KDP)
- Ministry of Justice
- Ministry of Industry and Trade (MIT)
- European Banking Authority (EBA)
- European Insurance and Occupational Pensions Authority (EIOPA)
- European Securities and Markets Authority (ESMA)

The table doesn't use "Czech" as a country label. The row is titled "Czechia." The word "Czech" appears only in the regulator name "Czech National Bank (CNB)."
```

</details>

<details><summary>result</summary>

```
Yes. The page lists Czechia among the locations where enforcement applies. Rolling enforcement begins on "23 July 2026" for advertisers targeting these 24 EEA markets: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czechia, Denmark, Estonia, Finland, Greece, Hungary, Iceland, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Romania, Slovakia, Slovenia, and Sweden.

**Requirements**
- Advertisers in an in-scope financial services category may be asked to verify. Google notifies affected advertisers through in-account notifications.
- Advertisers must first get verified through G2, then apply for financial services verification with Google as either "first party" or "authorised advertisers," using the code they receive from G2.
- Advertisers must show that a financial services regulator directly authorises them, or that they are exempt from that requirement.
- Unverified in-scope advertisers won't be able to show financial services ads in the targeted locations after their enforcement date.
- Agencies and other customers managing campaigns for affected advertisers also need verification for those accounts.
- Third-party advertisers who promote financial
… [truncated, 796 more chars]
```

</details>

**→ WebSearch** `Meta Ad Standards financial products and services policy Advertising Standards "financial products and services"`

**→ WebSearch** `Meta Financial products and services special ad category EU targeting restrictions authorization verification Europe 2025 licensed`

<details><summary>result</summary>

```
Web search results for query: "Meta Ad Standards financial products and services policy Advertising Standards "financial products and services""

Links: [{"title":"Financial and insurance products and services","url":"https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/financial-services/"},{"title":"financial services","url":"https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services"},{"title":"meta tightens ad rules to curb financial scams aimed at aussies","url":"https://www.deccanherald.com/dhie/news-and-trends/2024/12/02/meta-tightens-ad-rules-to-curb-financial-scams-aimed-at-aussies"},{"title":"directiveconsulting.com","url":"https://directiveconsulting.com/ca/wp-json/wp/v2/posts/54150"},{"title":"what can you advertise on meta","url":"https://bir.ch/blog/what-can-you-advertise-on-meta"},{"title":"Ads and Commerce","url":"https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category"},{"title":"meta guidelines for ads","url":"https://savemyleads.com/blog/other/meta-guidelines-for-ads"},{"title":"Facebook Ads for Fintech: Compliance, Creative, and Conversion","url":"
… [truncated, 2634 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Meta Financial products and services special ad category EU targeting restrictions authorization verification Europe 2025 licensed"

Links: [{"title":"Meta blocks political ads in EU as TTPA regulation takes effect","url":"https://ppc.land/meta-blocks-political-ads-in-eu-as-ttpa-regulation-takes-effect"},{"title":"Digital Audiences","url":"https://www.data-axle.com/?p=686399"},{"title":"Digital Audiences","url":"https://www.data-axle.com/resources/blog/meta-special-ad-categories-rules/"},{"title":"Ads and Commerce","url":"https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category"},{"title":"meta financial products services ads category","url":"https://getelevar.com/news/meta-financial-products-services-ads-category/"},{"title":"financial services","url":"https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services"},{"title":"Facebook Ads for Fintech: Compliance, Creative, and Conversion","url":"https://www.stackmatix.com/blog/facebook-ads-for-fintech-startups"},{"title":"2025 changes for meta ads","url":"https://www.zaginteractive.com/insights/articles/january-2025/2025-
… [truncated, 3552 more chars]
```

</details>

**→ WebFetch** https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services

> prompt: Summarize full policy: what's prohibited, what's allowed, authorization/licensing language, financial product definitions (investment products? binary options, crypto), any claims restrictions (guaranteed returns), any PII restrictions, regional differences. Short fragments only.

**→ WebFetch** https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category

> prompt: List special ad categories, which countries/regions apply to FINANCIAL_PRODUCTS_SERVICES and CREDIT, targeting restrictions, and any note about Europe/EU/Czech.

<details><summary>result</summary>

```
The content you provided is only the page title: "Financial and Insurance Products and Services | Transparency Center." The body of the policy isn't included, so I can't summarize its prohibitions, allowances, licensing language, product definitions, claims restrictions, PII rules, or regional differences.

To get the summary, please paste the full text of the page. I'll then cover:

- Prohibited and allowed content
- Authorization and licensing requirements
- Definitions of financial products (investment products, binary options, crypto)
- Restrictions on claims, such as guaranteed returns
- PII restrictions
- Regional differences
```

</details>

<details><summary>result</summary>

```
**Special ad categories:** HOUSING, FINANCIAL_PRODUCTS_SERVICES, EMPLOYMENT, ISSUES_ELECTIONS_POLITICS, and NONE. Advertisers must choose one or more, or use NONE or an empty array.

**FINANCIAL_PRODUCTS_SERVICES and CREDIT**
- FINANCIAL_PRODUCTS_SERVICES was introduced in October 2024 and replaces CREDIT as of January 14, 2025.
- It is required for financial products and services campaigns by advertisers based in the US or showing ads to US audiences. The enforcement section gives January 21, 2025 for this requirement, so the document's dates are inconsistent.
- The credit policy is unchanged. It still applies to advertisers based in the US or reaching the US, Canada, or certain parts of Europe.

**Targeting restrictions (housing, employment, and financial products and services)**
- **Age:** Generally fixed at 18 through 65+. Credit opportunity ads in Europe can use a different age range.
- **Gender:** Don't specify genders (recommended), or use the default of all genders.
- **Location:** Location exclusion is not supported. Radius must be at least 15 miles or 25 km in the US and Canada, or 15 km in Europe. Subcity, neighborhood, metro area, small geo area, subneighborhood, electo
… [truncated, 695 more chars]
```

</details>

**→ WebFetch** https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/financial-services/

> prompt: Return the policy text sections: Policy rationale, Do's and Don'ts / what is allowed with restrictions. Summarize in detail including licensing.

**→ WebFetch** https://conductatlas.com/platform/meta/meta-special-ad-category-requirements/financial-products-and-services-special-ad-category/

> prompt: Summarize what financial products and services special ad category covers, definition of financial product (e.g., investments? brokerage?), and region applicability.

<details><summary>result</summary>

```
The content you provided contains only a page title: "Financial and insurance products and services | Transparency Centre." It doesn't include any policy text, so I can't provide the Policy rationale, the Do's and Don'ts or restricted-use guidance, or any licensing details.

To get that summary, please paste the full text of the policy page. I'll then summarize those sections in detail, including licensing, and follow your formatting rules.
```

</details>

<details><summary>result</summary>

```
The provided page doesn't answer your question. It says the clause is "no longer published" and that the former clause text isn't shown. It doesn't describe what the financial products and services special ad category covers, how "financial product" is defined, or where the category applies.

The page does note a published correction (CR-000728) stating that one quotation in the Meta Special Ad Category Requirements document "omitted the condition they depend on." It doesn't include the quotation or the omitted condition, though.

To answer your questions, you would need the current Meta Special Ad Category Requirements document or the ConductAtlas document page, which may list the published clauses. You could also check Meta's own developer or help documentation directly.
```

</details>

**→ WebSearch** `Meta Business Help Centre "financial products and services" ads advertiser authorisation Europe ETF investments verification "financial services" advertiser verification EU`

**→ WebSearch** `Meta reklama investice ETF Česko povolení ČNB finanční služby reklamní pravidla Facebook Instagram`

<details><summary>result</summary>

```
Web search results for query: "Meta Business Help Centre "financial products and services" ads advertiser authorisation Europe ETF investments verification "financial services" advertiser verification EU"

Links: [{"title":"Financial and insurance products and services","url":"https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/financial-services/"},{"title":"Authorisation now required for financial firms to run Facebook Ads","url":"https://www.engageweb.co.uk/blog/authorisation-now-required-for-financial-firms-to-run-facebook-ads"},{"title":"financial services","url":"https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services"},{"title":"instagram.com","url":"https://help.instagram.com/1277459436206293"},{"title":"Introducing new verification requirements for certain financial services advertisers (June 2026)","url":"https://support.google.com/adspolicy/answer/17127726?hl=en-IE"},{"title":"Updates to Financial services advertising in Italy and Türkiye (August 2023)","url":"https://support.google.com/adspolicy/answer/13873073?hl=en-GB"},{"title":"support.google.com","url":"https://support.google.com/adspolicy/ans
… [truncated, 2789 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Meta reklama investice ETF Česko povolení ČNB finanční služby reklamní pravidla Facebook Instagram"

Links: [{"title":"byznys model","url":"https://www.newstream.cz/stitek/byznys-model"},{"title":"vyhazujete penize oknem vzkazal zuckerbergovi investor","url":"https://www.newstream.cz/leaders/vyhazujete-penize-oknem-vzkazal-zuckerbergovi-investor"},{"title":"meta continua sa atraga investitorii romani o noua analiza arata ca mizeaza pe extinderea inteligentei artificiale 769969","url":"https://www.antena3.ro/economic/meta-continua-sa-atraga-investitorii-romani-o-noua-analiza-arata-ca-mizeaza-pe-extinderea-inteligentei-artificiale-769969.html"},{"title":"váš průvodce finančním světem","url":"https://www.mesec.cz/n/investovani/?pi=2"},{"title":"Meta’s Plummet Exposes Risks, Opportunities in ETFs","url":"https://www.etf.com/sections/news/metas-plummet-exposes-risks-opportunities-etfs"},{"title":"z facebooku i instagramu ma pod vyhruzkou pokut zmizet cilena reklama","url":"https://www.newstream.cz/zpravy-z-firem/z-facebooku-i-instagramu-ma-pod-vyhruzkou-pokut-zmizet-cilena-reklama"},{"title":"Bulletin de la Bourse","url":"https://tsx.com/fr/news/new-compan
… [truncated, 5845 more chars]
```

</details>

**→ WebFetch** https://www.engageweb.co.uk/blog/authorisation-now-required-for-financial-firms-to-run-facebook-ads

> prompt: Summarize: what Meta requires in the UK for financial advertisers (FCA authorisation), date, how verification works; any mention of EU.

**→ WebFetch** https://help.instagram.com/1277459436206293

> prompt: Summarize policy text on financial and insurance products and services ads, authorization.

**→ WebSearch** `TikTok advertising policy financial services "Financial services" ad policy EU licensing requirement investment products trading`

<details><summary>result</summary>

```
The text you shared is a "Help Center" page with almost no policy content. Its only substantive line indicates the page covers policy on advertising for financial and insurance products and services, including authorization. It doesn't state any actual requirements, such as who needs authorization, what disclosures are required, or what happens if an ad doesn't comply.

The rest of the text reads as instructions for summarizing rather than policy language, so I can't extract specific rules from it. To get a useful summary, please share the full policy article or the sections on financial and insurance product advertising and authorization.
```

</details>

<details><summary>result</summary>

```
**Requirement:** Under Meta's new rule, UK businesses offering financial services that advertise on Facebook or Instagram need FCA authorisation to keep running ads. Meta says the aim is to stop impersonation and fraud in ads.

**Date:** The article was published on 28 June 2022. It gives no specific enforcement date, only that the requirement is coming soon.

**How verification works:**
- Businesses give Meta their FCA firm registration number and a contact method.
- Meta says this information won't be shared with other parties and is used only to keep ads running.
- Once confirmed, the authorisation applies to all ad accounts the business owns.
- To confirm, advertisers can use the link in Meta's email titled "Confirm your FCA authorization to run financial ads," or go to Ads Manager, select the correct ad account, and click "Get started" under the "Confirm your FCA authorization" heading.

**EU:** The page doesn't mention the EU.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "TikTok advertising policy financial services "Financial services" ad policy EU licensing requirement investment products trading"

Links: [{"title":"tiktok ads finance fintech","url":"https://benly.ai/learn/tiktok-ads/tiktok-ads-finance-fintech"},{"title":"Ad Policy Handbook: [METAP]","url":"https://ads.tiktok.com/help/article/ad-policy-handbook-metap?lang=en"},{"title":"Ad Policy Handbook: North America","url":"https://ads.tiktok.com/help/article/ad-policy-handbook-north-america?lang=en"},{"title":"eu cao buoc tiktok vi pham quy dinh ve minh bach quang cao a157776","url":"https://lsvn.vn/eu-cao-buoc-tiktok-vi-pham-quy-dinh-ve-minh-bach-quang-cao-a157776.html"},{"title":"TikTok Ads · TikTok Advertising Policies · View original document ↗","url":"https://conductatlas.com/platform/tiktok-ads/tiktok-advertising-policies/financial-services-advertising-policy/"},{"title":"TikTok Ads · TikTok Advertising Policies · View original document ↗","url":"https://conductatlas.com/platform/tiktok-ads/tiktok-advertising-policies/restricted-category-pre-authorization-requirement/"},{"title":"tiktok industry specific ad policies","url":"https://conductatlas.com/platfor
… [truncated, 3074 more chars]
```

</details>

**→ WebFetch** https://ads.tiktok.com/help/article/tiktok-advertising-policies-industry-entry-financial-services?lang=en

> prompt: Summarize requirements for financial services ads: licensing, disclaimers, prohibited claims, country-specific rules (EU, Czech).

**→ WebFetch** https://ads.tiktok.com/help/article/ad-policy-handbook-europe?lang=en

> prompt: Find section on financial services and products: licensing, prohibited items, disclosures, Czech Republic specifics if any.

<details><summary>result</summary>

```
The provided page doesn't contain any information on financial services, licensing, prohibited items, disclosures, or Czech Republic requirements. It's an error page that says: "Sorry! The article you are looking for no longer exists or failed to load." The content is also marked "[Content truncated due to length...]," so any remaining material isn't visible.

The only visible content is navigation links (Business Help Center, Partner enablement, What's new), a sign-up prompt, and a list of TikTok resources such as TikTok Shop Academy and the Creative Center.

To find this information, you could try loading the intended article directly or searching the TikTok for Business Help Center for financial services policies.
```

</details>

<details><summary>result</summary>

```
The page you provided doesn't contain any information about financial services ads. It's an error page that says: "Sorry! The article you are looking for no longer exists or failed to load." It includes only navigation links, a sign-up prompt, and footer text, with no details on licensing, disclaimers, prohibited claims, or EU or Czech rules.

To get this information, you could try the TikTok Business Help Center or the policy pages linked from the site, or share the text of the correct article here.
```

</details>

**→ WebFetch** https://ads.tiktok.com/help/article/ad-policy-handbook-metap?lang=en

> prompt: Does this page contain a financial services section? Summarize anything about financial services/investment ads (licence, disclaimers, restrictions).

**→ WebSearch** `TikTok ads policy "Financial services and products" Europe EEA "licensed" ads.tiktok.com help article`

<details><summary>result</summary>

```
Yes, the page lists a **"Financial Services"** policy article under TikTok advertising policies, linking to a separate page. However, the content provided includes only that title and link. It says nothing about licensing, disclaimers, or restrictions for financial or investment ads, and the page is truncated.

The page also lists "Industries with Certificate Requirements - SEA and NEA," which may relate to licensing, but the page doesn't say whether it covers financial services. To get the requirements, you'd need to open the linked Financial Services article.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "TikTok ads policy "Financial services and products" Europe EEA "licensed" ads.tiktok.com help article"

Links: [{"title":"Financial Services","url":"https://ads.tiktok.com/help/article/tiktok-ads-policy-financial-services?lang=en"},{"title":"Financial Services","url":"https://ads.tiktok.com/resources/help/article/tiktok-ads-policy-financial-services"},{"title":"Financial Services","url":"https://ads.tiktok.com/help/article/tiktok-ads-policy-financial-services"},{"title":"Protecting minors on TikTok: advertising initiatives","url":"https://ads.tiktok.com/help/article/protecting-minors-on-tiktok-advertising-initiatives"},{"title":"TikTok Bans Financial Advertising In Clamp Down On Misinformation","url":"https://www.pymnts.com/?p=1112094"},{"title":"TikTok Ads · TikTok Advertising Policies · View original document ↗","url":"https://conductatlas.com/platform/tiktok-ads/tiktok-advertising-policies/financial-services-advertising-policy/"},{"title":"TikTok Ads · TikTok Advertising Policies · View original document ↗","url":"https://conductatlas.com/platform/tiktok-ads/tiktok-advertising-policies/regional-self-regulatory-ad-codes-for-the-european-union/"},{"t
… [truncated, 2968 more chars]
```

</details>

**→ WebFetch** https://ads.tiktok.com/help/article/tiktok-ads-policy-financial-services?lang=en

> prompt: Full summary of the financial services policy: general requirements, prohibited products, allowed products, disclaimers, market-specific requirements section — specifically Czech Republic / Czechia entry if present, and any entry on investment/ETF/brokerage/educational content.

<details><summary>result</summary>

```
**Czech Republic entry**

- **Conditional allowance:** Financial services and products may be advertised if the advertiser complies with relevant laws and regulations, includes required disclosures and disclaimers, is licensed by local and regional authorities, and restricts the ad to audiences aged 18 and older.
- **Allowed examples:** Buy now, pay later services, credit cards, "Investment services," loans, and debt consolidation and refinancing services.
- **Crypto and NFTs:** Crypto exchange services and custodial wallets, and NFTs, require licensing, 18+ targeting, and a permission application through a TikTok Sales Representative (for crypto) or TikTok itself (for NFTs).
- **Not allowed:** Advisory services, bail bonds, credit repair, get-rich-quick schemes, high-risk investments (such as forex trading, binary options, and land banking), multi-level marketing, peer-to-peer lending, penny auctions, pyramid schemes, virtual currencies such as Bitcoin and Ethereum, and non-custodial wallets.

**Investment, ETF, brokerage, and educational content (across the document)**

- **Investment services:** Generally allowed under the conditions above in many markets, including the Czech Re
… [truncated, 898 more chars]
```

</details>

**→ WebSearch** `Meta instant forms vs landing page lead quality conversion rate cost per lead comparison data study`

**→ WebFetch** https://www.facebook.com/business/help/1699770000000000

> prompt: test

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Meta instant forms vs landing page lead quality conversion rate cost per lead comparison data study"

Links: [{"title":"rethinking lead gen for email marketing","url":"https://www.datarevolt.agency/case-study/rethinking-lead-gen-for-email-marketing"},{"title":"facebook lead ads","url":"https://superscale.ai/learn/facebook-lead-ads/"},{"title":"create more valuable leads than ever with metas instant forms","url":"https://projecter.workplace.com/business/news/create-more-valuable-leads-than-ever-with-metas-instant-forms"},{"title":"Grow & market","url":"https://echai.ventures/startingup/paid-acquisition/should-i-try-whatsapp-or-lead-form-ads-instead-of-sending-people-to-a-website"},{"title":"Meta Ads strategy: Lead forms vs website conversions","url":"https://trio-media.co.uk/meta-lead-forms-vs-website-conversions"},{"title":"lead ads guide","url":"https://benly.ai/learn/meta-ads/lead-ads-guide"},{"title":"lead generation ads","url":"https://benly.ai/learn/meta-ads/lead-generation-ads"},{"title":"lead gen ad formats compared","url":"https://stackmatix.com/blog/lead-gen-ad-formats-compared"},{"title":"Meta Ads Management Services: Why Cheap Leads Cost Yo
… [truncated, 2669 more chars]
```

</details>

**→ WebFetch** https://www.facebook.com/business/news/create-more-valuable-leads-than-ever-with-metas-instant-forms

> prompt: Extract the stated stats (e.g., 20% lower cost per qualified lead), date, features (conditional logic, higher intent form), and requirements.

**→ WebFetch** https://trio-media.co.uk/meta-lead-forms-vs-website-conversions

> prompt: Extract key facts comparing Meta lead forms vs website conversions: tracking, data ownership, quality, pixel/CAPI, GDPR/consent, any numbers and dates.

<details><summary>result</summary>

```
**Meta lead forms vs website conversions: key facts from the page**

**Core difference**
- Lead forms capture details inside the platform. Website conversions send users to a landing page on your site to complete the enquiry.

**Tracking and measurement**
- Many businesses track leads only at submission and judge success by volume. The page calls this a gap, arguing that lead volume "does not always correlate with commercial value."
- It recommends linking campaigns to sales outcomes and measuring against revenue impact, not platform metrics.
- Landing pages allow tracking of behaviour beyond the form submission.

**Lead quality**
- Lead forms reduce friction, so they can generate volume quickly, but they can bring in more casual or low-intent enquiries. Submission takes "two taps."
- Website conversions add a small amount of friction, which acts as a natural filter for intent.
- A qualified lead has a real need, has budget or authority to buy, and converts into a customer.
- Optimising purely on cost per lead risks feeding sales low-quality contacts.

**Cost**
- The page cites example cost per lead figures of "£2, £3, £4" for lead forms, but notes that cheap leads that go nowhere 
… [truncated, 1056 more chars]
```

</details>

<details><summary>result</summary>

```
**Date:** April 18, 2024 (page header; the article is tagged "Tips")

**Stated stats**
- Instant forms delivered a **20% lower cost per qualified lead** than website forms in a 2023 study of 15 global A/B tests (Nov 2022–Feb 2023).
- Lead ad submissions grew **19% year over year** between April and June 2023.
- Advantage+ audience with instant forms had **8% lower cost-per-lead** on average for small business advertisers (Oct–Nov 2023 analysis).
- CRM connected to Conversions API and optimized for conversions cut **cost per quality lead by 15%** and raised quality lead conversions **44%** on average.
- John Wai Martial Arts saw a **62% higher lead-to-customer conversion rate** using Conditional Logic with pre-filled details, compared with instant forms alone.
- Panoramic Doors closed a **$24k sale in 6 days** from an instant form lead.
- A GFK survey found **2 in 3 online shoppers** say social media makes them likely to try new brands.

**Features**
- **Conditional Logic:** multi-question flows in instant forms that help qualify leads.
- **Instant form features:** auto-filled user info and quick mobile loading, which reduce drop-off.
- **Conversions API for CRM integration:** links
… [truncated, 916 more chars]
```

</details>

**→ WebFetch** https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0565

> prompt: Extract the full text of Article 44 (Information to clients about past performance) and Article 46 (future performance and simulated performance?) and Article 36 (information requirements: fair clear not misleading) as exactly as feasible in paraphrase. Include: 5 years requirement, currency warning, simulated performance, gross/net, warning text.

**→ WebSearch** `ESMA guidelines on marketing communications under the Regulation on cross-border distribution of funds Article 4 principles clear fair not misleading past performance`

<details><summary>result</summary>

```
The text you provided is cut off during Article 9 ("Investment advice"), so it doesn't include Article 36, Article 44, or Article 46. I can't extract or paraphrase them from this page. Your request also mentions a 5-year requirement, a currency warning, simulated performance, and gross/net figures, but none of those appear in the visible text.

Some related material is in the provided text. Recital 68 says information is misleading if it "has a tendency to mislead" its recipients, regardless of the provider's intent. Recital 67 says firms should give "a clear and prominent indication of any relevant risks" when citing benefits. Article 3 sets conditions for providing information in a durable medium or through a website.

If you paste the rest of the document, starting from Article 9 onward, I can summarize Articles 36, 44, and 46 and cover the points you listed.

[WebFetch note: this page's text is 314651 characters long and the answer above covers only characters 0 to 100000; the final 214651 were not read — to read on, call WebFetch again with the same url and offset: 100000.]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "ESMA guidelines on marketing communications under the Regulation on cross-border distribution of funds Article 4 principles clear fair not misleading past performance"

Links: [{"title":"esma cp guidelines on marketing communications","url":"https://www.dirittobancario.it/wp-content/uploads/sites/default/files/allegati/esma_cp_guidelines_on_marketing_communications.pdf"},{"title":"esma publishes guidance on funds marketing communications","url":"https://www.regulationtomorrow.com/2021/05/esma-publishes-guidance-on-funds-marketing-communications/"},{"title":"esma publishes final report and guidelines for funds marketing communications","url":"https://www.burges-salmon.com/articles/102h42f/esma-publishes-final-report-and-guidelines-for-funds-marketing-communications"},{"title":"esma publishes final report and guidelines for funds marketing communications","url":"https://blog.burges-salmon.com/post/102h42f/esma-publishes-final-report-and-guidelines-for-funds-marketing-communications"},{"title":"Asset Management","url":"https://my.slaughterandmay.com/insights/financial-regulation-weekly-bulletin/asset-management_39"},{"title":"esma34 45 1272 guidelines on
… [truncated, 3198 more chars]
```

</details>

**→ WebFetch** https://www.esma.europa.eu/sites/default/files/library/esma34-45-1272_guidelines_on_marketing_communications.pdf

> prompt: Extract: scope (who must follow, funds only?), guidelines on past performance (periods, 5 years, currency, benchmark), simulated performance, risk/reward prominence, disclaimer "marketing communication", online, and anything about third parties/non-fund managers. Give guideline numbers.

**→ WebFetch** https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0565

> prompt: Find Article 44 (Information about past performance), Article 45 and 46 if present, and Article 36. Paraphrase conditions: minimum period of 5 years, 'no less than 5 years' for UCITS?, currency warning, simulated performance conditions, gross/net. Also Article 44(1) warning that past performance not reliable indicator.

<details><summary>result</summary>

```
I can't extract the requested details from this content. The PDF's page text is stored in compressed streams that appear as binary data, and the content is also truncated. I couldn't find the guidelines' scope, past-performance rules, simulated-performance rules, risk/reward presentation, disclaimer wording, or any guideline numbers.

The only readable references are:

- **Document title (from the URL):** ESMA's guidelines on performance fees (file "esma34-39-992_guidelines_on_performance_fees_en.pdf").
- **Linked legislation:** Regulation (EU) 2019/1156, on cross-border distribution of funds, and Regulation (EU) 1095/2010, which establishes ESMA.

To get the extract, you could paste the text from the PDF directly (for example, copied from a PDF viewer or exported as plain text), or share the full document in a format that includes extractable text. I can then pull out the scope, past-performance and simulated-performance rules, the risk/reward and marketing-communication disclaimer requirements, and any provisions on third parties or non-fund managers, with the guideline numbers.

[Binary content (application/pdf, 182.5KB) also saved to C:\Users\matus\.claude\projects\C--Users-mat
… [truncated, 105 more chars]
```

</details>

<details><summary>result</summary>

```
**Note on the heading:** The text has no "Article 44 (Information about past performance)." Article 44 is titled "Fair, clear and not misleading information requirements," and the past-performance rules are in Article 44(4)-(5).

**Article 44: Past performance**

- **Period (44(4)(b)):** Cover the preceding five years, or the whole period the instrument has been offered, the index established, or the service provided if that is shorter. Figures must use complete 12-month periods. The text does not single out UCITS for a different period.
- **Prominence and sourcing (44(4)(a), (c)):** Past performance must not be the most prominent feature of the communication. State the reference period and the information source.
- **Currency (44(4)(e)):** If figures are in a currency other than that of the client's Member State, state the currency and warn that returns may rise or fall with exchange rates. The text says the return "may increase or decrease as a result of currency fluctuations."
- **Gross figures (44(4)(f)):** If figures are gross, disclose the effect of commissions, fees and other charges.
- **Warning (44(4)(d)):** Include a prominent warning that the figures refer to the past an
… [truncated, 2179 more chars]
```

</details>

**→ WebFetch** https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0565

> prompt: Quote/paraphrase the opening of Article 44(1) precisely: who must comply ('Investment firms shall ensure that all information, including marketing communications, addressed to...'). Also Article 44(2)(a)-(h) list of conditions (e.g. firm name, risk, comparisons fair). Also article 44(3) comparison rules.

**→ WebFetch** https://www.regulationtomorrow.com/2021/05/esma-publishes-guidance-on-funds-marketing-communications/

> prompt: Summarize the ESMA marketing communications guidelines: scope, which entities, the 'marketing communication' identification, past performance guidelines, date of application.

<details><summary>result</summary>

```
**Scope:** ESMA's final report, published 27 May 2021, sets out guidelines on the marketing communications requirements in Article 4(1) of the Regulation on the cross-border distribution of funds. They cover:
- Common principles for identifying marketing communications.
- Presenting the risks and rewards of buying AIF units or shares, and UCITS units, in an equally prominent manner.
- Whether marketing communications are fair, clear, and not misleading, including their online aspects.

The guidelines do not replace national rules on marketing content, such as fiscal treatment, where those rules are compatible with EU harmonised rules. For example, KIID cost and performance disclosures should not be contradicted or reduced by national requirements.

**Entities:** The article does not specify which entities must comply. It refers to funds, including AIFs and UCITS, and to Member State national competent authorities, which must notify ESMA whether they comply or intend to comply.

**Identifying a "marketing communication":** The guidelines establish common principles for identifying marketing communications. The article does not describe those principles in detail.

**Past performance
… [truncated, 542 more chars]
```

</details>

<details><summary>result</summary>

```
**Correction:** The page's Article 44(1) doesn't read exactly as your request suggests. The actual wording begins: "Investment firms shall ensure that all information they address to" and continues with information disseminated so that retail or professional clients, or potential clients, are likely to receive it, including marketing communications. That information must satisfy paragraphs 2 to 8.

**Article 44(2): conditions for the information**

Firms must ensure the information meets these conditions. Article 44(2) lists seven points, (a) to (g), not eight.

- **(a)** It includes the investment firm's name.
- **(b)** "accurate and always gives a fair and prominent indication of any relevant risks" when referring to potential benefits.
- **(c)** The font size used for risk indications is at least equal to the predominant font size, and the layout keeps those risks prominent.
- **(d)** "sufficient for, and presented in a way that is likely to be understood by" the average member of the target group.
- **(e)** "does not disguise, diminish or obscure important items, statements or warnings."
- **(f)** It uses the same language consistently across materials, unless the client has ag
… [truncated, 732 more chars]
```

</details>

**→ WebFetch** https://www.amf-france.org/sites/institutionnel/files/private/2021-10/esma34-45-1272_guidelines_on_marketing_communications.pdf

> prompt: Extract: Scope section (to whom guidelines apply), guidelines list (e.g. Guideline 1 identifiable, Guideline 2 risk/reward equally prominent, Guideline 3 fair clear not misleading, Guideline 4 past performance, Guideline 5 online), and the specific past performance rules (periods, currency, benchmark, simulated performance).

<details><summary>result</summary>

```
I can't find the Scope section, the guidelines, or the past performance rules in the content you provided. It's a raw PDF file: the page content streams are compressed (FlateDecode), and the embedded images are binary JPEG data, so no readable text appears. The content is also cut off partway through the file.

The only readable parts are PDF metadata and structure, such as the page count (13), the fonts (Arial variants), and the creation date (October 4, 2021). None of that answers your questions.

To extract these sections, you could:
- **Paste the text** of the relevant pages directly.
- **Upload the PDF again** in a format with extractable text, or run it through OCR or a PDF text extractor first. The text will then be readable.
- **Point me to the specific pages** if you can locate them, and I'll work from whatever text you provide.

[Binary content (application/pdf, 164.5KB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637318092-ajgv14.pdf]
```

</details>

**→ Bash** — Check for PDF text extraction tools

```
cd /c/Users/matus && (which pdftotext; python -I -c "import pypdf; print(pypdf.__version__)" 2>&1; python -I -c "import fitz; print('fitz')" 2>&1) | head
```

<details><summary>result</summary>

```
/mingw64/bin/pdftotext
Traceback (most recent call last):
  File "<string>", line 1, in <module>
    import pypdf; print(pypdf.__version__)
    ^^^^^^^^^^^^
ModuleNotFoundError: No module named 'pypdf'
Traceback (most recent call last):
  File "<string>", line 1, in <module>
    import fitz; print('fitz')
    ^^^^^^^^^^^
```

</details>

**→ Bash** — Extract text from downloaded ESMA PDF

```
mkdir -p "/c/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad/pdf1" && cd "/c/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad/pdf1" && pdftotext -layout "/c/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/webfetch-1791637318092-ajgv14.pdf" out.txt && wc -c out.txt && head -c 300 out.txt
```

<details><summary>result</summary>

```
34803 out.txt
Guidelines

Guidelines on marketing communications under the Regulation on
cross-border distribution of funds

                                                                                        02/08/2021 | ESMA34-45-1272
Table of Contents

1 Scope .....................................
```

</details>

**→ Bash** — Read extracted ESMA guidelines text

```
cd "/c/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad/pdf1" && sed -n 1,400p out.txt | cut -c1-220
```

<details><summary>result</summary>

```
Guidelines

Guidelines on marketing communications under the Regulation on
cross-border distribution of funds

                                                                                        02/08/2021 | ESMA34-45-1272
Table of Contents

1 Scope ................................................................................................................................2
2 Purpose.............................................................................................................................3
3 Compliance and reporting obligations...............................................................................4

   3.1 Status of the guidelines..............................................................................................4
   3.2 Reporting requirements .............................................................................................4
4 Guidelines on the identification as such of marketing communications ............................4
5 Guidelines on the description of risks and rewards in an equally prominent manner .......5
6 Guidelines on the fair, clear and not misleading character of marketing communications 6
   6.1 General require
… [truncated, 24131 more chars]
```

</details>

**→ Bash** — Read remaining ESMA guidelines text

```
cd "/c/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad/pdf1" && sed -n 400,600p out.txt | cut -c1-220
```

<details><summary>result</summary>

```
3 For clarity, the existing guidelines relating to the disclosure of performance fees under the "ESMA Guidelines on performance
fees in UCITS and certain types of AIFs" (ESMA34-39-992) apply. Paragraph 46 of the "ESMA Guidelines on performance fees
in UCITS and certain types of AIFs" provides that "The prospectus and, if relevant, any ex-ante information documents as well
as marketing material, should clearly set out all information necessary to enable investors to understand properly the performance
fee model and the computation methodology. Such documents should include a description of the performance fee calculation
method, with specific reference to parameters and the date when the performance fee is paid, without prejudice to other more
specific requirements set out in specific legislation or regulation. The prospectus should include concrete examples of how the
performance fee will be calculated to provide investors with a better understanding of the performance fee model especially where
the performance fee model allows for performance fees to be charged even in case of negative performance." This measure is
specific to the disclosure of performance fees whereas these guide
… [truncated, 7861 more chars]
```

</details>

**→ WebFetch** https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0565

> prompt: Find Article 9 'Investment advice' (definition of personal recommendation; recommendation presented as suitable; 'not a personal recommendation if issued exclusively through distribution channels or to the public'). Paraphrase closely, and quote any short fragment under 15 words.

**→ WebFetch** https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014R0596

> prompt: Find Article 3(1)(34) definition of 'investment recommendation' and (35) 'information recommending or suggesting an investment strategy'; and Article 20 (investment recommendations and statistics: objective presentation, disclosure of interests). Paraphrase.

<details><summary>result</summary>

```
Article 9 of the Regulation clarifies the definition of "investment advice" in Article 4(1)(4) of Directive 2014/65/EU. A personal recommendation is one made to a person acting as an investor or potential investor, or as someone's agent for that purpose. It must be presented as suitable for that person or be based on an assessment of their circumstances. It must also advise one of two kinds of step: (a) buying, selling, subscribing for, exchanging, redeeming, holding, or underwriting a specific financial instrument, or (b) exercising, or deciding not to exercise, a right attached to a specific instrument. Recommendations "issued exclusively to the public" are not treated as personal recommendations.

Note that the source text does not mention "distribution channels." The exclusion covers only recommendations issued exclusively to the public.

[WebFetch note: this page's text is 314651 characters long and the answer above covers only characters 50000 to 150000; the final 164651 were not read — to read on, call WebFetch again with the same url and offset: 150000.]
```

</details>

<details><summary>result</summary>

```
**Article 3(1)(34): "information recommending or suggesting an investment strategy"**

This covers two types of information. The first is information produced by an independent analyst, investment firm, credit institution, or other business whose main activity is producing investment recommendations (or someone working for them), that directly or indirectly expresses a specific investment proposal for a financial instrument or issuer. The second is information from other sources that directly proposes a specific investment decision for a financial instrument.

**Article 3(1)(35): "investment recommendations"**

These are information recommending or suggesting an investment strategy, whether stated explicitly or implicitly, about one or more financial instruments or issuers. This includes any opinion on the present or future value or price of those instruments, when it is meant for distribution channels or the public.

**Article 20: not available**

The text you provided is truncated before Article 20, so I can't summarise its provisions on objective presentation or disclosure of interests. Recital 63 is related: it says competent authorities should be able to require information fr
… [truncated, 461 more chars]
```

</details>

**→ WebSearch** `ČNB finfluenceři investiční doporučení investiční poradenství povolení sociální sítě upozornění`

**→ WebSearch** `ESMA statement finfluencers 2023 2024 2025 MiFID II marketing communications unlicensed investment advice social media`

<details><summary>result</summary>

```
Web search results for query: "ESMA statement finfluencers 2023 2024 2025 MiFID II marketing communications unlicensed investment advice social media"

Links: [{"title":"financial compliance requirements for finfluencers","url":"https://www.ch.ey.com/en_ch/law/financial-services-law/financial-compliance-requirements-for-finfluencers"},{"title":"Financial Services","url":"https://legal.pwc.de/en/news/articles/eu-reiterates-rules-to-regulating-finfluencers"},{"title":"esma updates guidance on investment advice","url":"https://mondaq.com/fin-tech/1454160/esma-updates-guidance-on-investment-advice"},{"title":"Open navigation","url":"https://cms.law/en/nld/publication/esma-updates-guidance-on-investment-advice"},{"title":"Investment recommendations on social media the AMF backs ESMA%27s reminder","url":"https://www.amf-france.org/sites/institutionnel/files/pdf/68984/en/Investment_recommendations_on_social_media_the_AMF_backs_ESMA%27s_reminder.pdf?1765254849"},{"title":"investment recommendations social media amf backs esmas reminder","url":"https://www.amf-france.org/en/news-publications/news-releases/amf-news-releases/investment-recommendations-social-media-amf-backs-esmas-reminder"},{
… [truncated, 3621 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "ČNB finfluenceři investiční doporučení investiční poradenství povolení sociální sítě upozornění"

Links: [{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-rikali-to-na-internetu-cnb-varuje-pred-financnimi-influencery-268783"},{"title":"Kam zajít, co ochutnat a co stojí za pozornost","url":"https://www.newstream.cz/money/cnb-uz-dosla-trpelivost-varuje-pred-finfluencery-a-jejich-radami"},{"title":"Přeskočit na obsah","url":"https://arws.cz/novinky-v-arrows/cnb-a-finfluenceri-pozor-na-pokuty"},{"title":"Jan Procházka: Finanční influenceři pod dozorem ČNB? Evropští regulátoři zbystřili","url":"https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Financni-influenceri-pod-dozorem-CNB-Evropsti-regulatori-zbystrili-00001"},{"title":"Rychlé a snadné zbohatnutí? Pozor na „finfluencery“, varuje ČNB. Jejich rady mohou mást","url":"https://cnn.iprima.cz/pozor-na-finfluencery-varuje-cnb-489142"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-cnb-se-chysta-zakrocit-proti-influencerum-kteri-si-hraji-na-financni-poradce-287634"},{"title":"Jan
… [truncated, 6437 more chars]
```

</details>

**→ WebFetch** https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Chceme-aby-finfluenceri-neporusovali-pravidla.-Jejich-prinos-vsak-muze-byt-i-pozitivni

> prompt: Summarize ČNB's stance on finfluencers: when is it investment advice, investment recommendation under MAR, what is required, licence, sanctions, date of the interview. Short quotes under 15 words.

**→ WebFetch** https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Financni-influenceri-pod-dozorem-CNB-Evropsti-regulatori-zbystrili-00001

> prompt: Summarize ČNB's stance on finfluencers; date of the article; distinction between investment advice, investment recommendation (MAR), marketing; what is required of influencers and of firms working with them.

<details><summary>result</summary>

```
**Date:** The interview with Jan Procházka, a member of the ČNB Bank Board, was published on 21 February 2025 on Investiční web.

**ČNB's stance on finfluencers**
- The ČNB sees problems in several areas of finfluencer activity, including investment advice. It is concerned about conflicts of interest and the motives behind investment recommendations. Procházka said: "kde už dává finfluencer investiční doporučení" (where a finfluencer already gives investment recommendations).
- The ČNB also acknowledges possible benefits. Explaining that saving for retirement is good can be useful, and the ČNB wants finfluencers to do this well.

**Investment advice and MAR recommendations**
- The article does not define investment advice or discuss investment recommendations under the MAR (Market Abuse Regulation).

**What is required**
- The ČNB has issued warnings, including one aimed directly at finfluencers that restates the rules.
- It has issued recommendations to the public and to securities dealers and other entities, so they know what the ČNB expects when working with finfluencers.
- It is producing educational videos and monitoring the market from a supervisory perspective.

**Licence**

… [truncated, 210 more chars]
```

</details>

<details><summary>result</summary>

```
**ČNB's stance on finfluencers** (from Jan Procházka, ČNB board member, in an interview published 22 October 2024 in e15)

- **Concern:** The ČNB has started to notice "finfluencers." Procházka says many do not know that they have duties to make their recommendations fair, and that breaching those duties can be prosecuted.
- **Main worry:** Their investment recommendations mostly reach young, less-informed investors, and they often omit the necessary disclaimers. He summarizes a typical statement as "já jsem známý a kupuju tohle, protože je to dobrý", and says: "To ale nestačí."
- **Tools and current action:** ČNB's tools are "zatím omezené" (limited so far). It has started talking to some finfluencers and has called some subjects to point out problematic conduct and demand corrective action. It says it will not name them.
- **Regulation:** Most finfluencers do not hold a ČNB licence. Procházka expects new European regulation, possibly requiring a special licence to discuss securities.
- **Paid investor groups:** ČNB acts on complaints. If no one loses money and no one complains, it does not intervene, but it is monitoring the area.
- **Complaints:** As of the interview, ČNB had re
… [truncated, 1258 more chars]
```

</details>

**→ WebSearch** `cnb.cz finfluenceři upozornění ČNB investiční doporučení MAR sdělení finfluencerům pravidla 2024`

**→ WebFetch** https://www.amf-france.org/en/news-publications/news-releases/amf-news-releases/investment-recommendations-social-media-amf-backs-esmas-reminder

> prompt: Summarize what ESMA's reminder (statement) says on investment recommendations on social media; date; what must be disclosed.
