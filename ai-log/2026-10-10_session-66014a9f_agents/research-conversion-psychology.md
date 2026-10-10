# Subagent: Research: conversion psychology (general-purpose, model: sonnet)

## 👤 User · 2026-10-10 12:58:05

You are a research agent. Your complete task instructions are in two files written by the lead agent. Read both first and follow them exactly:
1. C:\Users\matus\Desktop\B_project\research\prompts\00-shared-rules.md (shared context and rules)
2. C:\Users\matus\Desktop\B_project\research\prompts\03-conversion-psychology.md (your specific task and output path)

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

**→ Read** `C:\Users\matus\Desktop\B_project\research\prompts\03-conversion-psychology.md`

<details><summary>result</summary>

```
1	# Agent C — Conversion & psychology evidence
2	
3	Output file: `C:\Users\matus\Desktop\B_project\research\03-conversion-psychology.md`
4	
5	Goal: evidence on what turns mobile visitors from paid social ads into leads, ideally for finance/investing.
6	
7	Rate the evidence strength of every claim:
8	- **Strong** = peer-reviewed study, large-sample experiment, or multi-company dataset.
9	- **Medium** = credible industry dataset or a documented A/B test with numbers.
10	- **Weak** = opinion or vendor blog without data.
11	
12	## Research questions
13	1. **Lead-magnet types** (calculator, quiz, comparison tool, report/e-book, checklist, email course, personalised result) — what evidence exists on their conversion and on lead quality?
14	2. **Gated vs. "show value first, gate the full/personalised result"** — evidence on when to ask for the contact (upfront vs. after interaction), including foot-in-the-door / commitment-consistency, sunk effort, IKEA effect, endowment with personalised results.
15	3. **Forms:** number of fields, single- vs. multi-step forms, inline vs. popup/modal, email-only vs. name+email, phone fields, effect of consent checkboxes (any GDPR-era evidence), button cop
… [truncated, 1829 more chars]
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

**→ Read** `C:\Users\matus\Desktop\B_project\research\assignment.md`

<details><summary>result</summary>

```
1	# Zadanie (originálne znenie)
2	
3	> Rád Vám oznamujem, že postupujete do ďalšieho kola výberového konania. Jeho súčasťou je praktická úloha, ktorá nám ukáže, ako pristupujete k problému a ako pracujete s AI. Pripravil som dve zadania, vyberte si jedno z nich.
4	>
5	> Pracovať môžete v Claude Code alebo v podobnom nástroji. Ak nestihnete všetko, uprednostnite podstatné časti a uveďte, čo v riešení chýba. V README prosím popíšte, ako ste s AI pracovali (aké pokyny dostali agenti, ako ste kontrolovali ich výstup a kde sa pomýlili). Ak Vám v zadaní niečo nebude jasné, rozhodnite podľa seba a v README zdôvodnite, prečo ste sa tak rozhodli. S otázkami sa na mňa môžete kedykoľvek obrátiť aj odpoveďou na tento e-mail.
6	
7	## ZADANIE B: Konverzná landing page
8	
9	Cieľom je landing page s porovnaním ETF obchodovaných na NYSE pre českého drobného investora, ktorý prichádza z reklamy na mobile a stránke venuje len niekoľko sekúnd. Stránka má fungovať ako lead magnet: ponúknuť návštevníkovi hodnotu a výmenou za ňu získať jeho kontakt. Pekný dizajn nestačí, stránka musí byť optimalizovaná na prínos kontaktov. Zároveň nesmie pôsobiť ako základný výstup od Claude. Dizajn aj texty majú byť pre
… [truncated, 1401 more chars]
```

</details>

**→ WebSearch** `Unbounce Conversion Benchmark Report financial services landing page median conversion rate`

**→ WebSearch** `Milliseconds make millions Deloitte Google 0.1 second mobile site speed conversion study`

**→ WebSearch** `Baymard Institute form fields checkout abandonment number of fields`

**→ WebSearch** `multi-step form vs single-step form conversion A/B test lead generation results`

**→ WebSearch** `tykání vykání v marketingu finance výzkum čeští spotřebitelé`

<details><summary>result</summary>

```
Web search results for query: "Unbounce Conversion Benchmark Report financial services landing page median conversion rate"

Links: [{"title":"unbounce unbounce","url":"https://unbounce.com/?p=135737"},{"title":"landing page conversion statistics","url":"https://www.shno.co/marketing-statistics/landing-page-conversion-statistics"},{"title":"Optimize your marketing with lead generation and conversion rate optimization platform Unbounce","url":"https://unbounce.com/?p=146790"},{"title":"Optimize your marketing with lead generation and conversion rate optimization platform Unbounce","url":"https://unbounce.com/landing](https://unbounce.com/landing-pages/whats-a-good-conversion-rate"},{"title":"unbounce.com","url":"https://unbounce.com/?p=136110"},{"title":"LIVE! Fri., Mar. 14, 2025 at 11:30 AM ET","url":"https://marketingprofs.com/charts/2024/52374/landing-page-conversion-benchmarks"},{"title":"landing page conversion rate benchmarks by industry","url":"https://www.apexure.com/blog/landing-page-conversion-rate-benchmarks-by-industry"},{"title":"Unbounce's 2024 Conversion Benchmark Report Proves that Attention Spans are Declining, and so are Conversion Rates","url":"https://www.newswir
… [truncated, 1576 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Baymard Institute form fields checkout abandonment number of fields"

Links: [{"title":"the baymard report series too many fields too little time","url":"https://pay.amazon.com/us/blog/the-baymard-report-series-too-many-fields-too-little-time"},{"title":"the baymard report series too many fields too little time","url":"https://pay.amazon.com/blog/the-baymard-report-series-too-many-fields-too-little-time"},{"title":"5 keys to help avoid cart abandonment","url":"https://usa.visa.com/content/dam/VCOM/global/run-your-business/documents/5-keys-to-help-avoid-cart-abandonment.pdf"},{"title":"Checkout Optimization: Strategies That Recover Revenue","url":"https://qualimero.com/en/blog/checkout-optimization"},{"title":"The Checkout Field That Costs Shopify Stores Thousands in Lost Sales","url":"https://www.growthsuite.net/blog/the-checkout-field-that-costs-shopify-stores-thousands-in-lost-sales"},{"title":"Free UX Research","url":"https://baymard.com/research-articles/checkout-optimization-from-16-fields-to-8"},{"title":"UX Articles","url":"https://baymard.com/blog/checkout-optimization-from-16-fields-to-8"},{"title":"checkout optimization","url":"https://hello
… [truncated, 2315 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Milliseconds make millions Deloitte Google 0.1 second mobile site speed conversion study"

Links: [{"title":"milliseconds make millions","url":"https://web.dev/milliseconds-make-millions/"},{"title":"Milliseconds make millions","url":"https://web.dev/case-studies/milliseconds-make-millions"},{"title":"Milliseconds make millions","url":"https://web.dev/case-studies/milliseconds-make-millions?authuser=7"},{"title":"Milliseconds make millions","url":"https://web.dev/case-studies/milliseconds-make-millions?hl=en"},{"title":"www.mediapost.com","url":"https://www.mediapost.com/publications/article/352986/"},{"title":"speed turns into a performance metric per google","url":"https://www.mediapost.com/publications/article/352986/speed-turns-into-a-performance-metric-per-google.html"},{"title":"Milliseconds Make Millions report.pdf","url":"https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf"},{"title":"The 2022 Ultimate Guide to Website Speed and Optimization","url":"https://edgemesh.com/blog/milliseconds-make-millions"},{"title":"May 25, 2020","url":"https://cxm.world/?p=31799"}]

The study was a Google-
… [truncated, 2437 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "tykání vykání v marketingu finance výzkum čeští spotřebitelé"

Links: [{"title":"Original title:","url":"https://invenio.nusl.cz/record/205623?ln=en"},{"title":"Consumer behaviour in the market of financial advisory focused on the company OVB Allfinanz, a.s","url":"https://vskp.vse.cz/english/51060"},{"title":"Autor textu Kateřina Paterová","url":"https://www.mediaguru.cz/ey-cesti-spotrebitele-udrzitelnost-moc-neberou-vynikaji-v-digitalu"},{"title":"Original title:","url":"https://invenio.nusl.cz/record/192381?ln=en"},{"title":"Autor textu Kateřina Paterová","url":"https://www.mediaguru.cz/clanky/2024/12/ey-cesti-spotrebitele-udrzitelnost-moc-neberou-vynikaji-v-digitalu/"},{"title":"Financial advisory market analysis with focus on Partners Financial Services a.s","url":"https://vskp.vse.cz/english/44011"},{"title":"Original title:","url":"https://invenio.nusl.cz/record/74950?ln=en"},{"title":"Original title:","url":"https://invenio.nusl.cz/record/4857?ln=en"},{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/ey-zjistuje-jak-zlepsit-vztahy-mezi-sefy-marketingu-a-financi"}]

Hledání nenašlo žádný výzkum přímo o tykání a vykání v marketing
… [truncated, 2071 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "multi-step form vs single-step form conversion A/B test lead generation results"

Links: [{"title":"Deep dive: single-step vs multi-step forms","url":"https://t.me/s/AboveFoldLab?before=283"},{"title":"conversionfanatics.com","url":"https://conversionfanatics.com/?p=499"},{"title":"Why Multi-Step Lead Forms Get up to 300% More Conversions","url":"https://www.goodreads.com/author_blog_posts/13759100-why-multi-step-lead-forms-get-up-to-300-more-conversions"},{"title":"Should You Use Single-Step or Multi-Step Forms?","url":"https://blog.formkeep.com/should-you-use-single-step-or-multi-step-forms/"},{"title":"measure multi step vs. single step form impact","url":"https://www.pedowitzgroup.com/measure-multi-step-vs.-single-step-form-impact"},{"title":"A/B Testing Lead Forms: What to Test First and How to Analyze Statistical Results","url":"https://www.leadgen-economy.com/blog/ab-testing-lead-forms-guide/"},{"title":"form a b testing guide","url":"https://orbitforms.ai/blog/form-a-b-testing-guide"},{"title":"The Anatomy of a High-Converting Lead Form","url":"https://www.leadgen-economy.com/blog/anatomy-high-converting-lead-form/"},{"title":"single page vs m
… [truncated, 2615 more chars]
```

</details>

**→ WebFetch** https://unbounce.com/average-conversion-rates-landing-pages/

> prompt: What are the median conversion rates by industry, specifically financial services, investing, credit and lending, insurance? What is the sample size, date range, and traffic source breakdown? Quote key numbers.

**→ WebFetch** https://web.dev/case-studies/milliseconds-make-millions

> prompt: What was the study sample (number of brands, sessions, duration)? What are the exact findings about conversion, lead generation, and 0.1s mobile speed improvement?

**→ WebFetch** https://baymard.com/blog/checkout-optimization-from-16-fields-to-8

> prompt: What does it say about number of form fields, abandonment due to too long checkout, average number of fields, and year of publication?

**→ WebFetch** https://conversionfanatics.com/?p=499

> prompt: Summarize the multi-step vs single-step form A/B test: sample sizes, conversion rates, lifts, date, industry.

<details><summary>result</summary>

```
**Study sample and duration**
- 37 leading European and American brand sites
- Over 30 million user sessions
- Mobile load times monitored hour by hour for 30 days at the end of 2019

**Findings from a 0.1-second improvement**
The page says the gains were observed only when every page in the user journey improved on four metrics by 0.1 seconds.

- **Conversion (retail):** Product Details to Add To Basket progression rose 9.1%, and retail consumers spent 9.2% more. Homepage to Product Listing fell 0.5%.
- **Conversion (travel):** Check-out completion rose 2.2%, and booking rates improved 10%.
- **Conversion (luxury):** Product Detail to Add To Basket progression rose 40.1%, the largest gain of any vertical. The page cautions that luxury progression rates are generally small.
- **Lead generation:** Progression to the Form Submission page rose 21.6%, and page views rose 7%.
```

</details>

<details><summary>result</summary>

```
- **Form fields:** The article reports an average of 12.8 form fields in e-commerce checkout flows, based on its latest benchmark. That is down from 14.88 in 2016, a roughly 14% improvement, but still higher than needed. It says a checkout can work with 6-8 fields for guest checkout, including credit card fields.
- **Abandonment from long checkouts:** On average, 26% of users abandoned purchases because the checkout was "too long or too complex."
- **Average number of fields:** 12.8, as noted above.
- **Publication year:** 2019. The article was published June 21, 2019, and mentions late-2019 benchmark data.
```

</details>

<details><summary>result</summary>

```
The page doesn't provide median conversion rates for financial services, investing, credit and lending, or insurance. It refers to a chart of median rates by industry, but the chart is an image without readable values, and none of those four industries appears in the text.

The page does give these details:

- **Overall median:** "around **6.6% across all industries**" as of Q4 2024.
- **Sample size:** "we analyzed 41,000 landing pages with 464 million visitors and 57 million conversions."
- **Date range:** Q4 2024. The article was updated March 4, 2025.
- **Traffic source breakdown:** Not mentioned.

For industry-level figures and possibly sample and traffic details, check the Unbounce Conversion Benchmark Report linked from the article.
```

</details>

<details><summary>result</summary>

```
**Multi-step vs. single-step form A/B test**

- **Sample size:** Just over 1,100 visits per variation.
- **Conversion rates:** The article doesn't report absolute conversion rates for the control or variations.
- **Lifts over control:**
  - New multi-step form: +52.9%
  - New single-step form: +40.3%
- **Additional leads over control:**
  - Multi-step: 151
  - Single-step: 91
- **Winner:** The multi-step form, though the single-step form also improved conversions.
- **Lead quality:** The client's quality lead scoring showed no drop in lead quality.
- **Date:** Published July 27, 2015.
- **Industry:** Not stated. The test was on a lead-generation registration form, and the blog targets e-commerce marketers, but the client's industry isn't named.
```

</details>

**→ WebFetch** https://unbounce.com/conversion-benchmark-report/financial-services-conversion-rates/

> prompt: What are the median landing page conversion rates for financial services and subcategories (investing, credit and lending, insurance)? Sample size, date range, traffic source breakdown (paid social, paid search, email)? Quote key numbers.

**→ WebFetch** https://unbounce.com/?p=135737

> prompt: What does this page say about financial services landing page median conversion rates, investing 3.9%, credit/lending, insurance? Sample size and date range?

**→ WebFetch** https://www.newswire.ca/news-releases/unbounce-s-2024-conversion-benchmark-report-proves-that-attention-spans-are-declining-and-so-are-conversion-rates-831617439.html

> prompt: Key findings of the Unbounce 2024 Conversion Benchmark Report: sample size, overall median, any statement about mobile vs desktop, industries.

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
**Sample size:** The report analyzes data from over 57 million conversions, drawn from 464 million unique visitors to more than 41,000 landing pages, covering July 23, 2023 to July 23, 2024.

**Overall median:** The article doesn't report an overall median conversion rate. It gives median rates only for specific segments, such as ecommerce email traffic (28.6%) and Instagram for financial services (15.5%).

**Mobile vs. desktop:** The report states "Mobile drives nearly 5x more visitors, but desktop converts 8% better." Breakdowns by industry:
- Health and wellness converts 22% better on desktop but receives about 7x more mobile traffic.
- Professional services converts 40% better on desktop but receives over 4x more mobile traffic.

**Industries covered:** Financial services, health and wellness, professional services, SaaS, and ecommerce.
```

</details>

<details><summary>result</summary>

```
The page gives these financial services benchmarks:

- **Financial services median:** 8.3%.
- **Insurance:** 18.2%, which the page says is 119% above the financial services median.
- **Investing:** 3.9%, well below the median. Its top performers reach only 20.6%.
- **Credit and lending:** 8.8%, slightly above the median. Its top pages reach 55.8%.

The page does not state a sample size or a date range for these figures. The only sample size it gives is "over 57 million landing page conversions across various industries," which is from a link describing the broader Conversion Benchmark Report, not specifically the financial services data. The image filenames include "CBR-2024," which suggests the report is from 2024, but the page never states that date range.
```

</details>

**→ WebFetch** https://unbounce.com/?p=135737

> prompt: List all stats about traffic sources/social (Instagram, Facebook, paid social, paid search, email) for financial services landing pages. Also page title and URL.

**→ WebSearch** `Unbounce conversion benchmark report financial services Facebook Instagram median conversion rate paid social`

**→ WebSearch** `Unbounce Conversion Benchmark Report 2025 financial services median`

<details><summary>result</summary>

```
**Page title:** Finance & Insurance Services conversion rate benchmarks by Unbounce
**URL:** https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate/

**Traffic source and social stats for financial services landing pages:**

- **Paid search (overall):** 10.1% median conversion rate, about 50% above the 6.7% industry benchmark.
- **Paid social (overall):** 9.3% median conversion rate, compared with the all-industries median of 5.2%.
- **Email:** 7.9% median conversion rate, below paid search and social but above the 6.7% industry benchmark.
- **Google (paid search):** 10.7% median conversion rate. Its top-performing pages reach up to 54.2%.
- **Yahoo (paid search):** 4.9% median conversion rate.
- **Bing (paid search):** 4.2% median conversion rate.
- **Instagram (paid social):** 15.5% median conversion rate, the highest of the platforms listed. Some top pages reach nearly 99%.
- **TikTok (paid social):** 10.8% median conversion rate. The report says TikTok and Instagram "consistently" convert at 7% or higher.
- **Facebook (paid social):** 10.1% median conversion rate.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Unbounce Conversion Benchmark Report 2025 financial services median"

Links: [{"title":"unbounce unbounce","url":"https://unbounce.com/industry/finance/"},{"title":"landing page conversion statistics","url":"https://www.shno.co/marketing-statistics/landing-page-conversion-statistics"},{"title":"unbounce unbounce","url":"https://unbounce.com/?p=94305"},{"title":"unbounce unbounce","url":"https://unbounce.com/?p=135737"},{"title":"LIVE! Fri., Mar. 14, 2025 at 11:30 AM ET","url":"https://marketingprofs.com/charts/2024/52374/landing-page-conversion-benchmarks"},{"title":"unbounce unbounce","url":"https://unbounce.com/conversion-benchmark-report/methodology/"},{"title":"landing page conversion rate benchmarks by industry","url":"https://www.apexure.com/blog/landing-page-conversion-rate-benchmarks-by-industry"},{"title":"The short version:","url":"https://foundrycro.com/blog/landing-page-conversion-rate-benchmarks-2026/"},{"title":"landing page conversion stats for marketing leaders","url":"https://genesysgrowth.com/blog/landing-page-conversion-stats-for-marketing-leaders"}]

The search didn't turn up a separate "2025" edition of the Unbounce report. The fi
… [truncated, 1976 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Unbounce conversion benchmark report financial services Facebook Instagram median conversion rate paid social"

Links: [{"title":"unbounce unbounce","url":"https://unbounce.com/?p=135737"},{"title":"Mobile and social are your cash cows","url":"https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate"},{"title":"Optimize your marketing with lead generation and conversion rate optimization platform Unbounce","url":"https://unbounce.com/?p=146790"},{"title":"Optimize your marketing with lead generation and conversion rate optimization platform Unbounce","url":"https://unbounce.com/landing](https://unbounce.com/landing-pages/whats-a-good-conversion-rate"},{"title":"unbounces 2024 conversion benchmark report proves that attention spans are declining and so are conversion rates","url":"https://martechseries.com/content/programmatic-email/unbounces-2024-conversion-benchmark-report-proves-that-attention-spans-are-declining-and-so-are-conversion-rates/"},{"title":"Unbounce's 2024 Conversion Benchmark Report Proves that Attention Spans are Declining, and so are Conversion Rates","url":"https://www.newswire.ca/news-releases/unbounce-s-2
… [truncated, 2128 more chars]
```

</details>

**→ WebFetch** https://unbounce.com/industry/finance/

> prompt: What median conversion rate for finance & insurance? Date, sample size, notes on mobile, forms, traffic.

**→ WebFetch** https://unbounce.com/conversion-benchmark-report/methodology/

> prompt: How is conversion rate defined (what counts as conversion), sample, date range, how pages are classified by industry, what is included.

**→ WebFetch** https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate

> prompt: Any statement on mobile vs desktop conversion for financial services; any recommendations on forms, copy reading level, social. Quote numbers.

<details><summary>result</summary>

```
**Conversion rate definition:** The page doesn't define conversion rate or say what counts as a conversion. It mentions "conversion types" only as a filtering criterion, and it excludes pages with "no conversions."

**Sample:** The benchmarks come from over 464 million unique visitors, which produced 57 million conversions across more than 41,000 landing pages.

**Date range:** July 23, 2023 to July 23, 2024.

**Industry classification:** Machine learning sorted pages into topics, and the output was refined to match the report's industries. Before analysis, the data was cleaned:
- Industries, subcategories, or conversion types with fewer than 400 pages were excluded.
- Pages with fewer than 50 visitors or no conversions were excluded.
- Subcategories that could skew results, such as political campaigns, religious topics, and terms and conditions, were excluded.

**What's included:** Benchmarks are presented as medians or averages depending on the data available. The report also covers readability, which uses a consensus of eight readability metrics, along with word count and reading time as factors that the page says affect conversion rates.
```

</details>

<details><summary>result</summary>

```
**Median conversion rate:** 3.8%. The top 25th percentile converts at 26%.

**Date:** The page doesn't state a publication date for the data. The report URL and share graphic reference 2020, and the "About This Report" link points to a 2020 edition. The footer's "2009–2026" is the site's copyright range, not the data date.

**Sample size:** Finance and insurance made up 6% of the landing pages analyzed, with 2,186,440 total client conversions. The page doesn't give a page count. The "57 million" figure in the resources section refers to all industries combined.

**Mobile:** The page doesn't report mobile-specific conversion rates for this industry.

**Forms:** About 63.4% of finance and insurance pages use forms to capture leads. Form conversion rates are 30.3% higher than in other industries. The page recommends testing forms of different lengths.

**Traffic:** The page doesn't provide traffic-source data for this industry. It only mentions top-performing channels in the full report, which isn't included here.
```

</details>

<details><summary>result</summary>

```
**Mobile vs. desktop**
- Financial services is one of the few industries where mobile outperforms desktop. Mobile averages 11.5%, and the page states: "Mobile traffic converts 27.8% better than desktop."
- Desktop converts at 9%, below the all-industries desktop median of 12.1%. The overview describes desktop visitors "converting 22% less than mobile."
- **Recommendation:** Prioritize mobile experiences and give desktop pages focused optimization.

**Copy reading level**
- Pages at a 5th to 7th-grade reading level have the highest median conversion rate, at 18.1%.
- Conversion rates fall as reading difficulty rises: 9.3% at 10th to 12th grade and 7.1% at college level.
- The lowest rate is 6.5% at 8th to 9th grade. Professional-level copy rebounds to 14.4%.
- Pages of 195 to 715 words have the best median conversion rate (8.3%), and the page suggests keeping difficult words (three or more syllables) within 35 to 125.
- **Recommendation:** Default to plain language. For investment or expert audiences, test professional-level copy.

**Forms**
- The page provides no specific guidance or benchmarks on forms.

**Social**
- Instagram has the highest median conversion rate for paid social
… [truncated, 316 more chars]
```

</details>

**→ WebSearch** `interactive content calculators quizzes lead generation conversion rate study vs static content data`

**→ WebSearch** `quiz funnel conversion rate lead generation benchmark Outgrow Interact quiz completion rate email opt-in`

**→ WebSearch** `gated vs ungated content lead quality study ask for email before or after result calculator`

**→ WebSearch** `foot-in-the-door technique online replication meta-analysis effect size compliance`

<details><summary>result</summary>

```
Web search results for query: "gated vs ungated content lead quality study ask for email before or after result calculator"

Links: [{"title":"Gated Content vs Ungated Content: Which Generates More Leads?","url":"https://www.abstraktmg.com/?p=58770"},{"title":"Gated Content vs Ungated Content: Which Generates More Leads?","url":"https://www.abstraktmg.com/gated-vs-ungated-content-lead-generation/"},{"title":"when why and how to gate your content for maximum results","url":"https://act-on.com/blog/when-why-and-how-to-gate-your-content-for-maximum-results"},{"title":"eight25media.com","url":"https://eight25media.com/?p=8515"},{"title":"Navigating the Ungated vs. Gated Content Dilemma: How B2B Marketers Should Decide","url":"https://www.eight25media.com/blog/navigating-the-ungated-vs-gated-content-dilemma"},{"title":"Personalizing Gated vs. Ungated Content with AI","url":"https://www.pedowitzgroup.com/personalizing-gated-vs.-ungated-content-with-ai?hsLang=en"},{"title":"gated vs ungated content","url":"https://www.blendb2b.com/blog/gated-vs-ungated-content"},{"title":"Let’s Settle This: Should You Gate Marketing Content?","url":"https://www.demandgenreport.com/features/demanding-views
… [truncated, 3985 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "foot-in-the-door technique online replication meta-analysis effect size compliance"

Links: [{"title":"sage.figshare.com","url":"https://sage.figshare.com/collections/The_Foot-in-the-Door_Phenomenon_40_and_50_Years_Later_A_Direct_Replication_of_the_Original_Freedman_and_Fraser_Study_in_Poland_and_in_Ukraine/4653512"},{"title":"journals.sagepub.com","url":"https://journals.sagepub.com/doi/10.1177/0146167283092002"},{"title":"Personality and Social Psychology Review                                                         Copyright © 1999 by","url":"https://www.slideshare.net/slideshow/burger/2497673"},{"title":"foot in the door","url":"https://atticusli.com/replication-crisis/foot-in-the-door/"},{"title":"archivesic.ccsd.cnrs.fr","url":"https://archivesic.ccsd.cnrs.fr/sic_00870107/document"},{"title":"foot in the door freedman fraser small commitment","url":"https://yukaichou.com/behavioral-analysis/foot-in-the-door-freedman-fraser-small-commitment/"},{"title":"Effizienz der Direktansprache bei der Führungskräftevermittlung","url":"https://econtent.hogrefe.com/doi/10.1026/0932-4089/a000310"},{"title":"sequentialrequest persuasive strategies metaanalysis
… [truncated, 3351 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "interactive content calculators quizzes lead generation conversion rate study vs static content data"

Links: [{"title":"interactive content marketing guide","url":"https://uplup.com/blog/interactive-content-marketing-guide"},{"title":"Interactive Content Statistics","url":"https://insivia.com/interactive-content-statistics"},{"title":"Interactive Content Statistics","url":"https://www.insivia.com/interactive-video-statistics"},{"title":"Asset 20 8 2","url":"https://www.lilachbullock.com/interactive-content-builder-generate-more-leads/"},{"title":"welcome page from passive followers to super fans","url":"https://outgrow.co/blog/?p=63605"},{"title":"content types that will optimize your conversion rate","url":"https://openviewpartners.com/blog/content-types-that-will-optimize-your-conversion-rate/"},{"title":"welcome page from passive followers to super fans","url":"https://outgrow.co/blog/interactive-content-revolution"},{"title":"Interactive Content for Lead Generation","url":"https://outgrow.co/blog/?p=62608"},{"title":"interactive content","url":"https://storychief.io/blog/amp/interactive-content"},{"title":"The Power of Interactive Content (+6 Con
… [truncated, 4325 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "quiz funnel conversion rate lead generation benchmark Outgrow Interact quiz completion rate email opt-in"

Links: [{"title":"September 2026","url":"https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026"},{"title":"Quiz Funnels vs Lead Magnets: Which One Wins the Conversion Battle in 2026?","url":"https://dupple.com/blog/quiz-funnels-vs-lead-magnets-which-one-wins-the-conversion-battle-in-2026"},{"title":"Lead Generation Quiz Examples: 17 Formats That Capture Qualified Leads","url":"https://outgrow.co/blog/?p=66078"},{"title":"pqf sep26 cvr overall","url":"https://www.convertflow.com/benchmark-metrics/pqf-sep26-cvr-overall"},{"title":"pqf sep26 cvr 150 plus","url":"https://www.convertflow.com/benchmark-metrics/pqf-sep26-cvr-150-plus"},{"title":"Building Lead Generation Landing Page Funnels: The Complete Strategic Guide","url":"https://www.leadgen-economy.com/blog/lead-generation-landing-page-funnels-guide/"},{"title":"pqf sep26 cvr 50 150","url":"https://www.convertflow.com/benchmark-metrics/pqf-sep26-cvr-50-150"},{"title":"How to Build a High-Converting Quiz Funnel to Maximize Leads & Sales","url":"https://
… [truncated, 4319 more chars]
```

</details>

**→ WebFetch** https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026

> prompt: What are the benchmark numbers: sample size, visitor-to-lead rates, engagement conversion rates, differences by quiz length/question count, by page type, by industry (finance if any)? Quote exact numbers and the methodology.

**→ WebFetch** https://pure.psu.edu/en/publications/sequentialrequest-persuasive-strategies-metaanalysis-of-footinthe/

> prompt: Abstract of the study: authors, year, journal, effect sizes of FITD and DITF.

**→ WebFetch** https://act-on.com/blog/when-why-and-how-to-gate-your-content-for-maximum-results

> prompt: Details of the optional gate vs hard gate experiment: numbers, sample, date, conclusions.

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
**Authors:** James P. Dillard, John E. Hunter, and Michael Burgoon

**Year:** 1984

**Journal:** *Human Communication Research*, Volume 10, Issue 4, pages 461–488

**Effect sizes:**
- **Foot-in-the-door (FITD):** r = .17
- **Door-in-the-face (DITF):** r = .15

The authors describe both effects as small, even under optimal conditions.
```

</details>

<details><summary>result</summary>

```
**Sample and methodology**
- **Sample:** 1,063 recent ConvertFlow lead generation quiz funnel campaigns, delivered as landing pages or embeds, drawn from a database of 200k+ funnels.
- **Version:** 2026.9, published September 23, 2026.
- **Statistic:** All figures are means. The page doesn't report medians, variance, or confidence intervals.

**Benchmark numbers**

| Segment | Lead capture rate | Conversion rate |
|---|---|---|
| All formats (landing page + embed) | 7.85% | 23.84% |
| Landing page | 11.28% | 26.72% (highest of the five templates) |
| Embed | 10.45% | 25.01% |
| Dark landing page | Not reported | 15.14% |
| Dark embed | 7.06% | 12.80% |

**Caveats**
- The page uses "conversion rate" in the table but "engage" in the short answer for the 23.84% and similar figures, so the metric definition is ambiguous.
- The 7.85% figure is labeled "four templates recording lead capture" in the table, while the 23.84% figure is labeled "five landing page and embed templates." The page doesn't explain the difference.

**Not reported**
- Differences by quiz length or question count
- Industry breakdowns, including finance
```

</details>

**→ WebFetch** https://sage.figshare.com/collections/The_Foot-in-the-Door_Phenomenon_40_and_50_Years_Later_A_Direct_Replication_of_the_Original_Freedman_and_Fraser_Study_in_Poland_and_in_Ukraine/4653512

> prompt: Abstract: authors, journal, year, sample sizes, findings.

**→ WebSearch** `IKEA effect Norton Mochon Ariely effort labor love study 2012 Journal of Consumer Psychology`

**→ WebSearch** `personalized result quiz email gate conversion "before" vs "after" results A/B test lead capture`

**→ WebSearch** `NN/g Nielsen Norman Group how users read on the web above the fold mobile attention study scrolling`

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "IKEA effect Norton Mochon Ariely effort labor love study 2012 Journal of Consumer Psychology"

Links: [{"title":"dash.harvard.edu","url":"https://dash.harvard.edu/bitstreams/7312037d-2473-6bd4-e053-0100007fdf3b/download"},{"title":"dash.harvard.edu","url":"https://dash.harvard.edu/bitstream/handle/1/12136084/norton%20mochon%20ariely%20third%20round[1].pdf"},{"title":"dash.harvard.edu","url":"https://dash.harvard.edu/server/api/core/bitstreams/7312037d-2473-6bd4-e053-0100007fdf3b/content"},{"title":"dash.harvard.edu","url":"https://dash.harvard.edu/handle/1/12136084"},{"title":"73120378 ce76 6bd4 e053 0100007fdf3b","url":"https://dash.harvard.edu/entities/publication/73120378-ce76-6bd4-e053-0100007fdf3b"},{"title":"scholars.duke.edu","url":"https://scholars.duke.edu/publication/861385"},{"title":"Economics Faculty Database","url":"https://fds.duke.edu/db/aas/Economics/faculty/dan.ariely/publications/265974"},{"title":"the ikea effect why we cherish things we build","url":"https://www.psychologytoday.com/intl/blog/make-your-mind/201209/the-ikea-effect-why-we-cherish-things-we-build"},{"title":"why we pay to do stuff ourselves","url":"https://daily.jstor
… [truncated, 2270 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "NN/g Nielsen Norman Group how users read on the web above the fold mobile attention study scrolling"

Links: [{"title":"f shaped pattern reading web content","url":"https://nngroup.com/articles/f-shaped-pattern-reading-web-content/"},{"title":"how users scan","url":"https://www.codecademy.com/article/how-users-scan"},{"title":"skip to main content","url":"https://unpaywall.org/10.1145%2F3543507.3583343"},{"title":"scrolling and attention","url":"https://www.nngroup.com/articles/scrolling-and-attention/"},{"title":"Users Don’t Read Web Pages","url":"https://www.codecademy.com/article/bwui-users-dont-read"},{"title":"💡How people read on the web (5 scanning patterns)","url":"https://vn.linkedin.com/in/manghi96"},{"title":"how little do users read","url":"https://www.nngroup.com/articles/how-little-do-users-read/?cq_net=g"},{"title":"Deceptive Patterns","url":"https://bunny.deceptive.design/articles/how-people-read-on-the-web-the-eyetracking-evidence"},{"title":"www.webfirm.com","url":"https://www.webfirm.com/?p=2642"}]

NN/g's research on scrolling and above-the-fold attention is in the results, but I didn't find a dedicated NN/g mobile attention study.

… [truncated, 1868 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "personalized result quiz email gate conversion "before" vs "after" results A/B test lead capture"

Links: [{"title":"Should the Email Gate Come Before or After Quiz Results?","url":"https://emaillistvalidation.com/blog/email-gate-before-or-after-quiz-results/"},{"title":"Engagement, segmentation and campaign benchmarks","url":"https://emaillistvalidation.com/blog/tag/quiz-gate-placement/"},{"title":"Lead Generation","url":"https://www.octaneai.com/solutions/lead-generation"},{"title":"Using the Opt-in Gate in Thrive Quiz Builder","url":"https://thrivethemes.com/docs/using-the-opt-in-gate-in-thrive-quiz-builder"},{"title":"Why Traditional Email Capture Drives Visitors Away and How Quiz-Based Capture Improves Engagement","url":"https://www.fyrebox.com/blog/how-to-capture-emails-with-quiz"},{"title":"nation.marketo.com","url":"https://nation.marketo.com/t5/product-discussions/lead-added-after-a-b-test-starts-but-before-winner-is-sent/m-p/217106"},{"title":"how to deliver results directly to users on page opt in","url":"https://thrivethemes.com/docs/how-to-deliver-results-directly-to-users-on-page-opt-in/"},{"title":"hiding an opt in gate from logged in u
… [truncated, 3177 more chars]
```

</details>

**→ WebFetch** https://www.nngroup.com/articles/scrolling-and-attention/

> prompt: Key numbers: share of viewing time above the fold in 2010 vs 2018 study, sample sizes, mobile findings, publication date.

**→ WebFetch** https://www.nngroup.com/articles/how-little-do-users-read/

> prompt: Key numbers: how many words users read on average per page visit, how that depends on word count; study date and sample.

**→ WebFetch** https://scholars.duke.edu/publication/861385

> prompt: Abstract of IKEA Effect paper: journal, year, number of studies, key findings.

**→ WebFetch** https://www.octaneai.com/solutions/lead-generation

> prompt: What does it say about quiz opt-in rates when email gate is before vs after results? Quote numbers and any methodology/sample.

<details><summary>result</summary>

```
**Journal:** *Journal of Consumer Psychology*, 2012 (vol. 22, no. 3, pp. 453–460)

**Number of studies:** Four

**Key findings:**
- Consumers who assembled IKEA furniture, folded origami, or built Lego sets valued their own creations more highly, a pattern the authors call the IKEA effect.
- Participants rated their amateur creations as comparable in value to experts' work and assumed others would agree.
- The effect depended on success: "labor leads to love only when labor results in successful completion of tasks." When people destroyed what they built or didn't finish it, the effect disappeared.
- The effect appeared for both do-it-yourselfers and novices.
```

</details>

<details><summary>result</summary>

```
**Key figures from the article (published April 15, 2018):**

- **Share of viewing time above the fold:** 80% in the 2010 study vs. 57% in the 2018 study.
- **Viewing time in the first two screenfuls (up to 2160px) in 2018:** 74%.
- **Viewing time in the first three screenfuls in 2018:** 81%.
- **2018 sample:** Over 130,000 eye fixations from 120 participants, on a 1920×1080 screen. The study covered news, ecommerce, blog, FAQ, and encyclopedic pages, plus search results pages (SERPs).
- **2010 sample:** The page compares against an earlier study on 1024×768 monitors but does not state its sample size.
- **Mobile findings:** None. The article does not report mobile eyetracking results.
```

</details>

<details><summary>result</summary>

```
The page doesn't give numbers for email gate placement. It describes the tradeoff qualitatively:

- **Before results (gated):** "Highest conversion when results are compelling and personalized."
- **After results (ungated):** "Lower conversion but higher lead quality and trust."

The only opt-in figures are general or from a single brand:

- **29% average email opt-in rate** across Octane AI quizzes, not broken down by gate placement.
- **3x more emails** than static forms, per the page's general claim.
- **52% opt-in rate** for Bambu Earth, which the page says is 10x its previous opt-in forms.
- **SMS consent of 60-70% of email opt-ins**, shown in the email-plus-SMS section.

The page doesn't describe methodology. It doesn't define how the opt-in rate is calculated, what time period it covers, or how the average was derived. The scale figures (190M+ quiz starts, 5,000+ brands) are the only sample-size indicators. The Bambu Earth result comes from one case study.
```

</details>

<details><summary>result</summary>

```
**Average words read per page visit**
- Users have time to read at most 28% of a page's words on an average visit, and about 20% is more likely.
- The average page in the dataset had 593 words, so that works out to roughly 165 words at the 28% ceiling and about 120 words in practice.

**How reading depends on word count**
- Visit time rises with word count, by about 4.4 seconds per additional 100 words, on top of a fixed base of about 25 seconds.
- At an assumed reading speed of 250 words per minute, users read about 18% of any text added to a page.
- Half of a page's content is readable within an average visit only on pages of 111 words or fewer.
- The formulas fit pages between 30 and 1,250 words. Longer pages showed erratic behavior.

**Study date and sample**
- Source: Harald Weinreich, Hartmut Obendorf, Eelco Herder, and Matthias Mayer, "Not Quite the Average," *ACM Transactions on the Web*, February 2008.
- Data was collected in 2005. The article itself is dated May 5, 2008.
- The study instrumented the browsers of 25 users during normal web use, yielding 59,573 page views. After cleaning, 45,237 were analyzed.
- Participants were above-average in intelligence, several being 
… [truncated, 75 more chars]
```

</details>

**→ WebSearch** `message match ad landing page conversion rate lift evidence A/B test data`

**→ WebSearch** `web.dev case study mobile site speed conversion rate improvement Vodafone Renault Tokopedia lead generation`

**→ WebSearch** `Google DoubleClick mobile page load time 53% abandon 3 seconds study bounce probability 1s to 3s`

**→ WebSearch** `sticky CTA button mobile landing page A/B test conversion lift`

<details><summary>result</summary>

```
Web search results for query: "web.dev case study mobile site speed conversion rate improvement Vodafone Renault Tokopedia lead generation"

Links: [{"title":"Performance studies related to \"2021\"","url":"https://wpostats.com/tags/2021"},{"title":"wpostats.com","url":"https://wpostats.com/1/"},{"title":"vitals business impact","url":"https://web.dev/case-studies/vitals-business-impact"},{"title":"vitals business impact","url":"https://web.dev/vitals-business-impact/"},{"title":"vitals business impact","url":"https://web.dev/case-studies/vitals-business-impact?authuser=0"},{"title":"vitals business impact","url":"https://web.dev/case-studies/vitals-business-impact?hl=en"},{"title":"vitals business impact","url":"https://web.dev/case-studies/vitals-business-impact?authuser=9"},{"title":"www.speedkit.com","url":"https://www.speedkit.com/studies"},{"title":"Performance studies related to \"posts\"","url":"https://wpostats.com/tags/posts"},{"title":"https-wpostats_com.proxy.bugsmash.io","url":"https://https-wpostats_com.proxy.bugsmash.io/1"}]

The web.dev case study page covers Vodafone and Tokopedia, but its excerpts don't include Renault or any lead-generation figures. Those come fr
… [truncated, 1514 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "message match ad landing page conversion rate lift evidence A/B test data"

Links: [{"title":"landing page optimization","url":"https://customfit.ai/landing-page-optimization"},{"title":"landing pages","url":"https://www.customfit.ai/landing-pages"},{"title":"Book your team's demo","url":"https://www.mutinyhq.com/playbooks/attentive-message-matching"},{"title":"Message Match: Definition, Examples, and How to Fix It","url":"https://landerlab.io/blog/message-match"},{"title":"Landing Page Optimization for Ads: Improving Conversion Without Redesigning","url":"https://stackmatix.com/blog/landing-page-optimization-for-ads"},{"title":"Measuring Ad-to-Landing Page Match: Metrics And Testing Methods","url":"https://racklify.com/encyclopedia/measuring-ad-to-landing-page-match-metrics-and-testing-methods/"},{"title":"The short version:","url":"https://foundrycro.com/blog/landing-page-audit-framework-paid-traffic-2026/"},{"title":"Written by: Aaron Rovner, Founder, Saas Hero | Last updated: August 6, 2026","url":"https://www.saashero.net/uncategorized/b2b-landing-page-cro-tips/"},{"title":"Written by: Aaron Rovner, Founder, Saas Hero | Last updated: August 6, 20
… [truncated, 3077 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Google DoubleClick mobile page load time 53% abandon 3 seconds study bounce probability 1s to 3s"

Links: [{"title":"For mobile, slow and steady won’t cut it: study","url":"https://mediaincanada.com/?p=100119"},{"title":"new study speedmatters for mobile user engagement and revenue","url":"https://blog.amp.dev/2016/09/08/new-study-speedmatters-for-mobile-user-engagement-and-revenue/"},{"title":"doubleclick-publishers.googleblog.com","url":"https://doubleclick-publishers.googleblog.com/2016/09/"},{"title":"support.google.com","url":"https://support.google.com/adsense/answer/7450973?hl=en-GB"},{"title":"thearf.org","url":"https://thearf.org/?p=341315"},{"title":"Many Visitors Abandon Mobile Sites If Load Time Tops 3 Seconds","url":"https://www.mediapost.com/publications/article/284398/"},{"title":"Select Page","url":"https://www.marketingcharts.com/digital-70669"},{"title":"support.google.com","url":"https://support.google.com/adsense/answer/7450973?"},{"title":"support.google.com","url":"https://support.google.com/adsense/answer/7450973?hl=en"},{"title":"www.itbusiness.ca","url":"https://www.itbusiness.ca/?p=79078"}]

Links: [{"title":"Website Load Tim
… [truncated, 3232 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "sticky CTA button mobile landing page A/B test conversion lift"

Links: [{"title":"improving product discovery on mobile","url":"https://blendcommerce.com/en-au/blogs/ab-tests-shopify/improving-product-discovery-on-mobile"},{"title":"improving product discovery on mobile","url":"https://blendcommerce.com/blogs/ab-tests-shopify/improving-product-discovery-on-mobile"},{"title":"Apparel Brand","url":"https://blendcommerce.com/en-au/blogs/ab-tests-shopify/adding-a-sticky-cta-to-the-product-detail-page"},{"title":"sticky mobile add to cart button","url":"https://cleancommit.io/ab-tests/sticky-mobile-add-to-cart-button/"},{"title":"Ecommerce Case Study: Implementation of Sticky Call-to-Action","url":"https://convertica.org/ecommerce-case-study-sticky-cta/"},{"title":"Mobile Split Test Results: +10% Add to Carts, +9% Conversions with Zipify Pages (ft. Ezra Firestone)","url":"https://zipify.com/mobile-sticky-button-split-test-results/"},{"title":"Sports Nutrition Brand","url":"https://blendcommerce.com/en-gb/blogs/ab-tests-shopify/7-17-increase-in-conversion-rate"},{"title":"mobile conversion rate","url":"https://mida.so/blog/mobile-conversion-rate"},{"title"
… [truncated, 2950 more chars]
```

</details>

**→ WebFetch** https://web.dev/case-studies/vitals-business-impact

> prompt: List case studies with their numeric outcomes for conversions, lead, bounce rate, LCP improvements; note Vodafone, Renault, any lead-generation/forms case. Publication date.

**→ WebFetch** https://support.google.com/adsense/answer/7450973?hl=en

> prompt: What does it say about mobile page load time and visitors abandoning (53% / 3 seconds)? Source and year.

**→ WebFetch** https://wpostats.com/1/

> prompt: What is this stat, source, and details? Also list any lead-generation, form submission, or finance-related speed case studies on the page.

**→ WebSearch** `KlientBoost message match 66% lift conversion rate test ad landing page same headline`

<details><summary>result</summary>

```
The page says Google's research found that the risk of abandonment rises sharply on slow mobile pages. Specifically, it states: "53% of visits are likely to be abandoned if pages take longer than 3 seconds to load." It presents this as a reason to speed up mobile pages, since faster loading can improve engagement and revenue.

The statistic links to an article on doubleclickbygoogle.com, based on the URL's "mobile-speed-matters" slug. The page doesn't give the study's publication year. The "©2026" in the footer is the help page's copyright notice, not the research date.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "KlientBoost message match 66% lift conversion rate test ad landing page same headline"

Links: [{"title":"Message Match in Advertising: How To Align Ads and Landing Pages for Higher Conversions","url":"https://www.webtonic.io/blog/message-match"},{"title":"The short version:","url":"https://foundrycro.com/blog/landing-page-audit-framework-paid-traffic-2026/"},{"title":"US%20Equity%20Advantage%20 %20Case%20Study","url":"https://wp.klientboost.com/case-studies/US%20Equity%20Advantage%20-%20Case%20Study.pdf"},{"title":"We Hit 83% of Client Goals In Q2, 2026. You Should Be Next 🎉","url":"https://klientboost.com/cro/top-performing-landing-pages/"},{"title":"We Hit 83% of Client Goals In Q2, 2026. You Should Be Next 🎉","url":"https://klientboost.com/landing-pages/successful-landing-pages/"},{"title":"iLife Technologies Case Study","url":"https://wp.klientboost.com/wp-content/uploads/2022/03/iLife-Technologies-Case-Study.pdf"},{"title":"Hey Jane Case Study","url":"https://wp.klientboost.com/wp-content/uploads/2021/12/Hey-Jane-Case-Study.pdf"},{"title":"landing page testing follow these 5 rules to do it right 7299","url":"https://community.unbounce.com/indust
… [truncated, 2150 more chars]
```

</details>

<details><summary>result</summary>

```
This page is **WPO Stats**, a directory of web performance case studies that link performance improvements to business results. Its entries are summarized from external sources, so the figures come from those studies, not from this page.

**The top stat (Groupe Renault)**
- **Finding:** Renault found a strong correlation between Largest Contentful Paint (LCP) and both bounce rate and conversion rate.
- **Result:** A 1-second LCP improvement was linked to up to a 14 percentage point drop in bounce rate and a 13% increase in conversions.
- **Source:** web.dev/renault/
- **Date:** The permalink says 2023-03-07, but the entry is tagged #2021.

**Lead-generation, form submission, or finance-related case studies**
- **Vodafone (lead-generation-related):** LCP improved 31%, with a 15% increase in "lead to visit rate" and an 11% increase in "cart to visit rate." Vodafone is a telecom company, not a financial one, and the page does not mention form submissions.
- **Form submissions:** None listed.
- **Finance:** None listed.

This is only the first page of the archive (the site has eight pages), so other case studies may exist.
```

</details>

<details><summary>result</summary>

```
**Publication date:** The page shows only "Last updated 2021-09-01 UTC." No original publication date appears.

**Renault and lead-generation/forms:** Renault is not mentioned, and no lead-generation or form-based case study appears. The closest matches are the conversion-related results below.

**Case studies with numeric outcomes**

*Conversions and sales*
- **Vodafone (Italy):** LCP improved 31%, yielding 8% more sales.
- **Redbus:** Core Web Vitals fixes contributed to an 80-100% increase in mobile conversion rate (mCVR).
- **Lazada:** LCP improved 3x, with a 16.9% increase in mobile conversion rate.
- **Cdiscount:** Improved all three metrics, contributing to a 6% revenue uplift during Black Friday.

*Revenue and ads*
- **iCook:** CLS improved 15%, yielding 10% more ad revenue.
- **Netzwelt:** 18% increase in ad revenue.

*Bounce rate and abandonment*
- **NDTV:** 50% better bounce rate after halving LCP, alongside other product changes.
- **Agrofy Market:** 70% better LCP correlated with a 76% reduction in load abandonment.
- **Flipkart:** 2.6% reduction in bounce rate.
- **AliExpress:** 15% lower bounce rates after a 10x CLS improvement and a doubled LCP.
- **GEDI:** 77% CLS 
… [truncated, 780 more chars]
```

</details>

**→ WebSearch** `Imagescape form fields reduced 11 to 4 conversion increase 120% Hubspot number of form fields conversion study`

**→ WebSearch** `GDPR consent checkbox impact on form conversion rate A/B test pre-ticked unchecked opt-in`

**→ WebSearch** `removing phone number field form conversion rate increase study lead form`

**→ WebSearch** `button copy A/B test "get my" vs "submit" first person CTA text conversion lift Unbounce`

<details><summary>result</summary>

```
Web search results for query: "removing phone number field form conversion rate increase study lead form"

Links: [{"title":"conversionfanatics.com","url":"https://conversionfanatics.com/?p=324"},{"title":"A Totally Bizarre Way to To Get More Phone Leads","url":"https://www.neurosciencemarketing.com/?p=8646"},{"title":"reduce form fields","url":"https://conversionxl.com/reduce-form-fields/"},{"title":"phone number form field case study","url":"https://vitaldesign.com/phone-number-form-field-case-study/"},{"title":"How a Single Phone Number Field Cost 12 Percent of Leads cover art","url":"https://apx-security-it.audible.it/pd/B0H7KW33LX"},{"title":"blog.formkeep.com","url":"https://blog.formkeep.com/?p=33"},{"title":"form optimization for lead generation fields length placement and conversion impact","url":"https://discoveredlabs.com/blog/form-optimization-for-lead-generation-fields-length-placement-and-conversion-impact"},{"title":"how to optimize contact forms","url":"https://orbitforms.ai/blog/how-to-optimize-contact-forms"},{"title":"phone number form field case study","url":"https://dev.vitaldesign.com/phone-number-form-field-case-study/"}]

The evidence is mostly vendor blogs 
… [truncated, 2152 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "button copy A/B test "get my" vs "submit" first person CTA text conversion lift Unbounce"

Links: [{"title":"Landing Pages","url":"https://woobox.com/articles/cta-button-design-and-copy"},{"title":"Landing Pages","url":"https://cdn.woobox.com/articles/cta-button-design-and-copy"},{"title":"Landing Pages","url":"https://whitelabel.woobox.com/articles/cta-button-design-and-copy"},{"title":"best cta button design","url":"https://www.poper.ai/blog/best-cta-button-design/"},{"title":"Calls To Action | 3 min read","url":"https://mailblaze.com/thinking/email-cta-copy-first-person-second-person"},{"title":"Resources · Statistics","url":"https://resources.review42.com/call-to-action-tips/"},{"title":"Learn Shopify A/B Testing CTA Buttons: 15 Experiments That Actually Increase Conversions","url":"https://gempages.net/es/blogs/shopify/ab-testing-cta-buttons"},{"title":"cta button best practices","url":"https://witscode.com/blogs/cta-button-best-practices"},{"title":"Learn Shopify A/B Testing CTA Buttons: 15 Experiments That Actually Increase Conversions","url":"https://gempages.net/blogs/shopify/ab-testing-cta-buttons"}]

The strongest evidence I found is a 90% 
… [truncated, 1996 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Imagescape form fields reduced 11 to 4 conversion increase 120% Hubspot number of form fields conversion study"

Links: [{"title":"imagescape.com","url":"https://imagescape.com/filer/canonical/1455648270/152"},{"title":"How Many Form Fields Do You Have?","url":"https://saleslion.io/sales-statistics/imagescape-saw-a-160-increase-in-submissions-when-they-decreased-form-fields-from-11-to-a-mere-four"},{"title":"Optimizing Fields in Form: Boosting Conversions with Smart Design Strategies","url":"https://dr-xm.saas.infor.com/fields-in-form"},{"title":"Which Types of Form Fields Lower Landing Page Conversions","url":"https://blog.hubspot.com/blog/tabid/6307/bid/6746/Which-Types-of-Form-Fields-Lower-Landing-Page-Conversions.aspx?"},{"title":"getperspective.ai","url":"https://getperspective.ai/blog/the-form-conversion-rate-myth-why-optimizing-fields-cant-fix-the-funnel/markdown"},{"title":"which types of form fields lower landing page conversions","url":"https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx"},{"title":"landing pages conversion weekly roundup august 14 2026","url":"https://www.dailysto
… [truncated, 2539 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "GDPR consent checkbox impact on form conversion rate A/B test pre-ticked unchecked opt-in"

Links: [{"title":"Resources Home","url":"https://www.nextafter.com/blog/gdpr-online-fundraising/"},{"title":"How to Make Your Forms GDPR Compliant (Without Tanking Your Conversion Rates)","url":"https://blog.convert.com/make-forms-gdpr-compliant-without-tanking-conversion-rates.html"},{"title":"How to Make Your Forms GDPR Compliant (Without Tanking Your Conversion Rates)","url":"https://www.convert.com/blog/optimization/make-forms-gdpr-compliant-without-tanking-conversion-rates/"},{"title":"How a GDPR compliant form impacted email acquisition","url":"https://www.nextafter.com/?p=15022"},{"title":"Get exclusive insights on privacy laws, compliance strategies, and product updates delivered to your inbox","url":"https://www.secureprivacy.ai/blog/cookie-consent-ab-testing"},{"title":"general data protection regulation gdpr","url":"https://www.optibase.io/glossary/general-data-protection-regulation-gdpr"},{"title":"form consent without killing your conversion rate","url":"https://ventureharbour.com/form-consent-without-killing-your-conversion-rate/"},{"title":"How t
… [truncated, 3326 more chars]
```

</details>

**→ WebFetch** https://www.nextafter.com/blog/gdpr-online-fundraising/

> prompt: Details of the A/B test adding a GDPR opt-in checkbox: conversion rates, sample size, dates, significance, what the checkbox said.

**→ WebFetch** https://conversionxl.com/reduce-form-fields/

> prompt: What evidence does it present on form-field reduction: studies, numbers, sample sizes, conclusions, caveats (e.g., more fields can convert better)?

**→ WebFetch** https://vitaldesign.com/phone-number-form-field-case-study/

> prompt: Details of A/B test: sample size, conversion rates, what changed, result, date.

**→ WebFetch** https://imagescape.com/filer/canonical/1455648270/152

> prompt: Summarize the form-field reduction case study: fields before/after, conversion lifts (120% vs 160%), sample size, date, lead quality statement.

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
REDIRECT DETECTED: The URL redirects to a location that was not fetched automatically.

    Original URL: https://conversionxl.com/reduce-form-fields/
    Redirect URL (from the server's Location header — server-supplied, not verified): https://cxl.com/reduce-form-fields/
    Status: 301 Moved Permanently

    To complete your request, I need to fetch content from the redirected URL. Please use WebFetch again with these parameters:
    - url: "https://cxl.com/reduce-form-fields/"
    - prompt: "What evidence does it present on form-field reduction: studies, numbers, sample sizes, conclusions, caveats (e.g., more fields can convert better)?"
```

</details>

<details><summary>result</summary>

```
I can't find the form-field case study in the content you provided. The text is a raw PDF byte stream: the text streams are compressed (FlateDecode), and the rest is an embedded JPEG image. The content is also truncated, so I can't see the rest of the document either.

I can't confirm the fields before and after the change, the 120% vs. 160% conversion lifts, the sample size, the date, or the lead quality statement without that text.

To get the summary, you could:
- Paste the extracted text of the case study, or the relevant pages.
- Upload the PDF again, if your interface supports file attachments, so it can be parsed properly.
- If the figures are in the JPEG image, send a screenshot or a text transcription of that page.

[Binary content (application/pdf, 432.4KB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637256212-8lsdqq.pdf]
```

</details>

<details><summary>result</summary>

```
The page reports only a few details about the test:

- **Result:** The GDPR-compliant checkbox "decreased acquisition rates by 15%." The article doesn't give the baseline or treatment conversion rates.
- **Checkbox text:** The added checkbox read: "By requesting the resource, I understand that I will receive access to the Guide to the Constitution" (the sentence continues with occasional updates from the organization). The control had no such checkbox, only a newsletter opt-in.
- **Offer:** A free digital guide to the constitution on a landing page.
- **Not stated:** Sample size, exact conversion rates, test dates, and statistical significance are not in the content. The article's URL includes "2018/05," which suggests when it was published, but it doesn't give the test period.
```

</details>

**→ WebFetch** https://www.nextafter.com/?p=15022

> prompt: Details of A/B test with GDPR-compliant form: control and treatment conversion rates, sample size, dates, significance.

**→ WebFetch** https://cxl.com/reduce-form-fields/

> prompt: What evidence does it present on form-field reduction: studies, numbers, sample sizes, conclusions, caveats (e.g., more fields can convert better)?

**→ Bash** — Check PDF text extraction tools

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && ls && (which pdftotext || python -c "import fitz;print('fitz')" || python -c "import pypdf;print('pypdf')")
```

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
**A/B test: GDPR-compliant opt-in form (Experiment #6068, The Heritage Foundation)**

- **Timeframe:** 05/10/2018 to 05/18/2018
- **Control (C):** 47.1% conversion rate
- **Treatment (T1, GDPR Version):** 39.8% conversion rate
- **Relative difference:** -15.4%
- **Confidence:** 100.0%
- **Total sample size:** 3,040 (required: 357)

The results were considered valid. The test found a "statistically significant 15% drop in email acquisition" for the treatment with the required opt-in checkbox.
```

</details>

<details><summary>result</summary>

```
webfetch-1791637138497-msirtu.pdf
webfetch-1791637148974-snucgq.pdf
webfetch-1791637175595-fzpngr.pdf
webfetch-1791637175596-donfzj.pdf
webfetch-1791637186993-ngl1ms.pdf
webfetch-1791637256212-8lsdqq.pdf
/mingw64/bin/pdftotext
```

</details>

**→ Bash** — Extract text from Imagescape PDF

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && pdftotext -layout webfetch-1791637256212-8lsdqq.pdf - | head -150
```

<details><summary>result</summary>

```
Case Study                  Imaginary Landscape, LLC

                            WEB TECHNOLOGY TO POWER YOUR BUSINESS

            Fewer fields in a contact form sharply increases
            conversions

            By Brian Moloney

            Synopsis

            The fewer questions you ask in a form, the more people will actually complete it, but
            to what degree?

            In the fall of 2007 and again in the spring of 2008, Imaginary Landscape performed a
            comparison of two types of contact forms on its Web site at www.imagescape.com.
            The test compared an 11-field Contact Us form with a 4-field Contact Us form. The
            more abbreviated form resulted in a 160% increase in submitted forms.

            Company Background

            Imaginary Landscape is a Web development firm headquartered in Chicago. The
            primary goal of its own Web site is to provide basic information about the firm and its
            capabilities as a preliminary prequalification for prospective clients. Interested
            prospects are encouraged to complete a contact form so they can be engaged in
            offlin
… [truncated, 7325 more chars]
```

</details>

**→ WebSearch** `fee framing loss aversion investors expense ratio dollar amount vs percentage experiment choose lower-fee fund study`

**→ WebSearch** `Choi Laibson Madrian "Why does the law of one price fail" index fund fees experiment investors fee sensitivity`

**→ WebSearch** `Iyengar Lepper choice overload jam study meta-analysis Scheibehenne 2010 retirement plan participation number of funds`

**→ WebSearch** `Madrian Shea default effect 401(k) automatic enrollment participation 37% to 86%`

<details><summary>result</summary>

```
Web search results for query: "Choi Laibson Madrian "Why does the law of one price fail" index fund fees experiment investors fee sensitivity"

Links: [{"title":"orrc05 06","url":"https://www.nber.org/sites/default/files/2020-08/orrc05-06.pdf"},{"title":"nber.org","url":"https://www.nber.org/system/files/working_papers/w12261/revisions/w12261.rev0.pdf"},{"title":"www.nber.org","url":"https://www.nber.org/papers/w12261.pdf"},{"title":"orrc05 06.executive summary","url":"https://www.nber.org/sites/default/files/2023-06/orrc05-06.executive_summary.pdf"},{"title":"orrc05 06.executive summary","url":"https://www.nber.org/sites/default/files/2020-08/orrc05-06.executive_summary.pdf"},{"title":"knowledge.wharton.upenn.edu","url":"https://knowledge.wharton.upenn.edu/?p=5604"},{"title":"laibson onepricefail","url":"https://dash.harvard.edu/bitstream/handle/1/4686775/laibson_onepricefail.pdf?sequence=2"},{"title":"todays research question why do investors choose high fee mutual funds despite the lower returns","url":"https://knowledge.wharton.upenn.edu/article/todays-research-question-why-do-investors-choose-high-fee-mutual-funds-despite-the-lower-returns/"},{"title":"todays research question
… [truncated, 2673 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Madrian Shea default effect 401(k) automatic enrollment participation 37% to 86%"

Links: [{"title":"nber.org","url":"https://nber.org/system/files/working_papers/w8651/w8651.pdf"},{"title":"This PDF is a selection from a published volume from the","url":"https://www.nber.org/chapters/c10341.pdf"},{"title":"The power of suggestion: Inertia in 401(k) participation and savings behavior","url":"https://academicnewsletter.sufe.edu.cn/info/346195"},{"title":"NBER WORKING PAPER SERIES","url":"https://www.nber.org/papers/w7682.pdf"},{"title":"For Better or for Worse: Default Effects and 401(K) Savings Behavior","url":"https://papers.ssrn.com/abstract%3D294089"},{"title":"The Power of Suggestion: Inertia in 401(k) Participation and Savings Behavior","url":"https://www.nber.org/papers/w7682"},{"title":"For Better or For Worse: Default Effects and 401(k) Savings Behavior","url":"https://www.nber.org/papers/w8651"},{"title":"Savings in America: Helping Individuals Provide for Their Own Retirement","url":"https://www.chicagobooth.edu/review/savings-america-helping-individuals-provide-their-own-retirement"},{"title":"The Power of Suggestion: Inertia in 401k Partic
… [truncated, 2250 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "fee framing loss aversion investors expense ratio dollar amount vs percentage experiment choose lower-fee fund study"

Links: [{"title":"people invest their money illogically trying to help them can make it worse 52929","url":"https://theconversation.com/people-invest-their-money-illogically-trying-to-help-them-can-make-it-worse-52929"},{"title":"article mutual fund fees are a case of dollars and per cents","url":"https://www.theglobeandmail.com/investing/article-mutual-fund-fees-are-a-case-of-dollars-and-per-cents"},{"title":"Newall Conversation 2016","url":"https://www.storre.stir.ac.uk/bitstream/1893/25114/1/Newall-Conversation-2016.pdf"},{"title":"stir.ac.uk","url":"https://stir.ac.uk/research/hub/publication/534045"},{"title":"wrap.warwick.ac.uk","url":"https://wrap.warwick.ac.uk/id/eprint/109400"},{"title":"Morningstar Magazine - June/July 2018 - 24","url":"https://nxtbook.com/nxtbooks/morningstar/magazine_20180607/index.php?startid=24"},{"title":"UCL Discovery","url":"https://discovery.ucl.ac.uk/id/eprint/1473283/"},{"title":"UCL Discovery Stage","url":"https://discovery-pp.ucl.ac.uk/id/eprint/1473283"},{"title":"article mutual fund fees are a 
… [truncated, 3607 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Iyengar Lepper choice overload jam study meta-analysis Scheibehenne 2010 retirement plan participation number of funds"

Links: [{"title":"abcwest.cogs.indiana.edu","url":"https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf"},{"title":"is choice overload real thing","url":"https://www.psychologytoday.com/us/blog/pop-psych/201602/is-choice-overload-real-thing"},{"title":"20130423160206 5176945e2bba6","url":"https://edoc-vmtest.ub.unibas.ch/48789/1/20130423160206_5176945e2bba6.pdf"},{"title":"Save to My Latticework unsave","url":"https://www.modelthinkers.com/mental-model/232?type=share"},{"title":"Save to My Latticework unsave","url":"https://modelthinkers.com/mental-model/paradox-of-choice"},{"title":"Save to My Latticework unsave","url":"https://www.modelthinkers.com/mental-model/232"},{"title":"Others have found Iyengar & Lepper’s study hard to replicate:","url":"https://greaterwrong.com/posts/hN2aRnu798yas5b2k/a-crash-course-in-the-neuroscience-of-human-motivation/comment/EyBwQHPvwdhTqiGnS"},{"title":"paradox of choice schwartz choice overload","url":"https://yukaichou.com/behavioral-analysis/paradox-of-choice-schwartz-choice-
… [truncated, 4786 more chars]
```

</details>

**→ WebFetch** https://www.nber.org/papers/w12261.pdf

> prompt: Abstract and main numbers: design, sample, percent not investing all in lowest-fee fund, effect of fee salience, mean excess fee.

**→ WebFetch** https://stir.ac.uk/research/hub/publication/534045

> prompt: Abstract of Newall & Love paper on fees in dollars vs percentages: authors, journal, year, findings.

**→ WebFetch** https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf

> prompt: Abstract and key findings of the meta-analysis of choice overload: number of studies, N, mean effect size, moderators identified (e.g., decision task difficulty, choice set complexity, preference uncertainty, decision goal).

**→ WebFetch** https://www.nber.org/papers/w7682

> prompt: Abstract: key participation figures before and after automatic enrollment.

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
The page doesn't give specific participation rates before or after automatic enrollment. It says that before the change, employees had to opt in, and afterward they were enrolled unless they opted out. The authors conclude that participation is "significantly higher under automatic enrollment." For exact figures, you'd need the full paper, NBER Working Paper 7682.
```

</details>

<details><summary>result</summary>

```
I can't find the abstract or the requested numbers in what you've pasted. The text is raw PDF data: compressed streams, font tables, and object references. The document is also truncated before the end. I could extract only fragments, and I don't want to present guesses about the design, sample size, percentages, or fee effects as findings from the paper.

To get a summary, you could:

- **Paste the abstract and results section as plain text.** I can then give you the design, sample, the share of investors not holding the lowest-fee fund, the fee-salience effect, and the mean excess fee.
- **Copy the text directly from the PDF** (or export it as .txt) so the content comes through without the encoding.
- **Upload the PDF again** if your interface supports file attachments, and I'll work from the document itself.

[Binary content (application/pdf, 372.3KB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637302155-qguy1s.pdf]
```

</details>

<details><summary>result</summary>

```
**Authors:** P.W.S. Newall and B.C. Love

**Journal:** *Decision*, Volume 2, Issue 4, published by the American Psychological Association

**Year:** 2015 (published 31 October 2015)

**Findings:**
- Investors who choose mutual funds with higher fees, attracted by past returns that don't predict future performance, substantially reduce their future returns. The authors say this can cut retirement savings by about half.
- Two psychological factors drive this: difficulty understanding rate information, since fees and returns are usually given as percentages, and discounting small differences in returns or fees, which the authors call a "peanuts effect."
- Large investors benefit when fees are stated in currency: "large investors benefit when fees are stated in currency."
- Small investors benefit when returns are stated in currency.
- The authors suggest behavioral interventions tailored to small and large investors.

The page refers to currency in general rather than dollars specifically, and it doesn't include the full paper, so these findings come only from the abstract.
```

</details>

**→ Bash** — Extract text from Choi Laibson Madrian PDF

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && pdftotext -layout webfetch-1791637302155-qguy1s.pdf - | head -60
```

**→ WebSearch** `Scheibehenne Greifeneder Todd "Can there ever be too many options" meta-analytic review choice overload Journal of Consumer Research 2010 abstract`

**→ WebSearch** `Chernev Böckenholt Goodman choice overload conceptual review meta-analysis 2015 Journal of Consumer Psychology moderators`

<details><summary>result</summary>

```
NBER WORKING PAPER SERIES

  WHY DOES THE LAW OF ONE PRICE FAIL? AN EXPERIMENT ON INDEX MUTUAL
                                                      FUNDS

                                                  James J. Choi
                                                  David Laibson
                                               Brigitte C. Madrian

                                             Working Paper 12261
                                     http://www.nber.org/papers/w12261

                         NATIONAL BUREAU OF ECONOMIC RESEARCH
                                         1050 Massachusetts Avenue
                                            Cambridge, MA 02138
                                                    May 2006

We are indebted to Anna Blank, David Borden, Carlos Caro, Ananya Chakravarti, Keith Ericson, Christina
Jenq, Shih En Lu, Dina Mishra, Kelly Shue, Dmitry Taubinsky, Chelsea Zhang, Fan Zhang, and Eric
Zwick for their excellent research assistance. We are grateful to Sally Zeckhauser, John W. Nolan,
Ken Toy, and Thomas E. Vautin for facilitating the experiment with Harvard staff. We thank Jeff Brown,
Gideon Saar, and seminar participa
… [truncated, 2344 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Scheibehenne Greifeneder Todd "Can there ever be too many options" meta-analytic review choice overload Journal of Consumer Research 2010 abstract"

Links: [{"title":"abcwest.cogs.indiana.edu","url":"https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf"},{"title":"Professional article","url":"https://archive-ouverte.unige.ch/unige:76440"},{"title":"edoc.unibas.ch","url":"https://edoc.unibas.ch/20586"},{"title":"sciencedaily.com","url":"https://sciencedaily.com/releases/2010/01/100119121425.htm"},{"title":"20130423160206 5176945e2bba6","url":"https://edoc-vmtest.ub.unibas.ch/48789/1/20130423160206_5176945e2bba6.pdf"},{"title":"unibas.ch","url":"https://edoc.unibas.ch/48789"},{"title":"unibas.ch","url":"https://edoc-vmtest.ub.unibas.ch/48789"},{"title":"2010 01 choices","url":"https://phys.org/news/2010-01-choices.pdf"},{"title":"Can there ever be too many options? A meta-analytic review of choice overload","url":"https://madoc.bib.uni-mannheim.de/30861/"},{"title":"scienceblog.com","url":"https://scienceblog.com/?p=29255"}]

The paper is Benjamin Scheibehenne, Rainer Greifeneder, and Peter M. Todd, "Can There Ever Be Too Many Optio
… [truncated, 2131 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Chernev Böckenholt Goodman choice overload conceptual review meta-analysis 2015 Journal of Consumer Psychology moderators"

Links: [{"title":"abcwest.cogs.indiana.edu","url":"https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.reply.2011.pdf"},{"title":"lunes, septiembre 28, 2026","url":"https://www.mercadonegro.pe/marketing/choice-overload-marcas/"},{"title":"Start of Main Content","url":"https://www.kellogg.northwestern.edu/academics-research/research/detail/2015/when-product-assortment-leads-to-choice-overload-a-conceptual/"},{"title":"Start of Main Content","url":"https://www.kellogg.northwestern.edu/faculty/research/detail/2015/when-product-assortment-leads-to-choice-overload-a-conceptual"},{"title":"par.nsf.gov","url":"https://par.nsf.gov/servlets/purl/10481276"},{"title":"abcwest.cogs.indiana.edu","url":"https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf"},{"title":"choice overload jam study","url":"https://www.atticusli.com/replication-crisis/choice-overload-jam-study/"},{"title":"20130423160206 5176945e2bba6","url":"https://edoc-vmtest.ub.unibas.ch/48789/1/20130423160206_5176945e2bba6.pdf"},{"title":"When Are Consu
… [truncated, 3040 more chars]
```

</details>

**→ WebFetch** https://www.kellogg.northwestern.edu/faculty/research/detail/2015/when-product-assortment-leads-to-choice-overload-a-conceptual

> prompt: Abstract: meta-analysis, number of studies/observations, factors moderating choice overload, findings.

**→ WebFetch** https://nxtbook.com/nxtbooks/morningstar/magazine_20180607/index.php?startid=24

> prompt: Details of the experiment on fee display (dollars vs percentages): sample size, findings, percent allocating to cheapest fund.

**→ WebSearch** `FCA occasional paper randomised controlled trial fees disclosure investors lower-cost fund choice "total cost" in pounds`

**→ WebSearch** `Czech retail investors ETF poplatky TER vnímání investoři průzkum Česká národní banka finanční gramotnost investice`

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
This 2015 meta-analysis by Chernev, Bockenholt, and Goodman, published in the *Journal of Consumer Psychology*, pools **99 observations** from prior research, with a combined sample of **7,202** participants.

**Moderating factors:** The authors identify four factors that determine whether large assortments hurt choice:
- Choice set complexity
- Decision task difficulty
- Preference uncertainty
- Decision goal (particularly an effort-minimizing goal)

Each factor reliably affects choice overload. Higher task difficulty, greater complexity, more preference uncertainty, and a stronger effort-minimizing goal all increase it.

**Key findings:**
- Satisfaction/confidence, regret, choice deferral, and switching likelihood are about equally strong measures of choice overload and can be used interchangeably.
- Once moderators are included, the overall effect of assortment size on choice overload is "significant," which conflicts with earlier meta-analytic results.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "FCA occasional paper randomised controlled trial fees disclosure investors lower-cost fund choice "total cost" in pounds"

Links: [{"title":"portfolio adviser","url":"https://portfolio-adviser.com/?p=33005"},{"title":"FCA publishes occasional paper on fund charges","url":"https://professionaladviser.com/news/3029638/fca-publishes-occasional-paper-fund-charges"},{"title":"www.fca.org.uk","url":"https://www.fca.org.uk/publications/occasional-papers/occasional-paper-no-32-now-you-see-it-drawing-attention-charges-asset-management-industry/printable/print"},{"title":"Occasional Paper No. 32: Now you see it: drawing attention to charges in the asset management industry","url":"https://www.fca.org.uk/publications/occasional-papers/occasional-paper-no-32-now-you-see-it-drawing-attention-charges-asset-management-industry"},{"title":"op16 23 appendix","url":"https://www.fca.org.uk/publication/occasional-papers/op16-23-appendix.pdf"},{"title":"fca occasional paper no 23 full disclosure a round up of fca experimental research into giving information","url":"https://www.regulationtomorrow.com/2016/11/fca-occasional-paper-no-23-full-disclosure-a-round-up-of-fca-exp
… [truncated, 3608 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Czech retail investors ETF poplatky TER vnímání investoři průzkum Česká národní banka finanční gramotnost investice"

Links: [{"title":"Posouzení možností dlouhodobého investování v České republice","url":"https://dspace.vsb.cz/items/1d142299-f890-401a-a459-ad8a89d63279"},{"title":"Jak vám můžeme pomoci?","url":"https://help.revolut.com/cs-CZ/help/wealth/stocks/getting-started-with-etf-s/what-are-the-costs-associated-with-etfs/"},{"title":"Zišla by sa vám pomoc?","url":"https://help.revolut.com/sk-SK/help/wealth/stocks/getting-started-with-etf-s/what-are-the-costs-associated-with-etfs/"},{"title":"Investment funds in the Czech Republic and their expenses","url":"https://vskp.vse.cz/english/72167"},{"title":"dc.contributor.advisor | Kořená, Kateřina | |","url":"https://dspace.vsb.cz/handle/10084/135526?show=full"},{"title":"etf und kostenkennzahl ter","url":"https://www.vermoegenszentrum.ch/wissen/etf-und-kostenkennzahl-ter"},{"title":"vsechny ceske akcie v jedinem fondu kde jej koupite a kolik skutecne zaplatite","url":"https://finex.cz/vsechny-ceske-akcie-v-jedinem-fondu-kde-jej-koupite-a-kolik-skutecne-zaplatite/"},{"title":"Zobrazit minimální zázna
… [truncated, 2351 more chars]
```

</details>

**→ WebFetch** https://www.fca.org.uk/publications/occasional-papers/occasional-paper-no-32-now-you-see-it-drawing-attention-charges-asset-management-industry

> prompt: Summary of the experiment: sample size, the four treatments, the key findings on lower-cost fund choice and understanding of charges, publication date.

**→ WebFetch** https://www.fca.org.uk/publication/occasional-papers/op16-23.pdf

> prompt: Key findings of FCA Occasional Paper 23 on giving information: findings on presenting costs as monetary amounts, framing, simplification; any numbers; date.

<details><summary>result</summary>

```
I can't summarise the findings from this content. What you've pasted is the raw binary of a PDF file: compressed streams, embedded JPEG image data, and font and object metadata. It contains no readable text from Occasional Paper 23, and the output is cut off before any document body would appear.

To get the key findings on presenting costs as monetary amounts, framing, simplification, and numbers and dates, you could:

- **Paste the extracted text** of the paper or the sections you need, such as the executive summary or findings chapters.
- **Share the FCA webpage** for the paper, if the page has an HTML version.
- **Upload the PDF directly**, if your interface supports file uploads.

Once I have readable text, I'll summarise the findings concisely and keep any direct quotes within the 125-character limit.

[Binary content (application/pdf, 1.2MB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637338130-2curoc.pdf]
```

</details>

<details><summary>result</summary>

```
**Sample size:** Over one thousand non-advised investors took part in an experiment on a simulated online platform.

**Treatments:** The page says four ways of presenting charges were tested but doesn't name all four. The measures it describes are:
- A warning message
- A chart showing the impact of charges on returns
- A summary of charges shown just before the investor buys a fund
- Prominent placement of charge information on pages all investors had to view

**Key findings on lower-cost fund choice:**
- All the measures increased the share of investors choosing a cheaper fund, and some effects were sizable.
- Greater focus on charges did not appear to reduce the importance investors gave to other factors, such as performance or risk.
- The warning message improved decision-making, especially when paired with the chart or the pre-purchase summary.
- The most impactful information was the prominently positioned information.

**Understanding of charges:** The study aimed to examine investors' understanding and awareness of charges, but the summary reports results on fund choice and doesn't give specific findings on understanding.

**Publication date:** First published 5 April 2018.
… [truncated, 70 more chars]
```

</details>

**→ WebSearch** `Baymard trust seals security badges survey which trust seals recognized perceived trustworthiness percentage`

**→ WebSearch** `Stanford Web Credibility Project Fogg 10 guidelines trust finance websites design look credibility study 2002`

**→ WebSearch** `social proof testimonials A/B test landing page conversion lift documented numbers customer reviews finance fintech`

**→ WebSearch** `Edelman Trust Barometer financial services trust Czech Republic 2025 OR 2026 trust in financial services`

<details><summary>result</summary>

```
Web search results for query: "Edelman Trust Barometer financial services trust Czech Republic 2025 OR 2026 trust in financial services"

Links: [{"title":"Autor textu Kateřina Straková","url":"https://www.mediaguru.cz/duvera-cechu-v-jejich-ceo-poklesla-mezirocne-o-3"},{"title":"Our Finding","url":"https://www.stem.cz/en/?p=26197"},{"title":"Public trust in the Czech National Bank remains high","url":"https://www.cnb.cz/en/cnb-news/news/Public-trust-in-the-Czech-National-Bank-remains-high"},{"title":"Everything PR News","url":"https://everything-pr.com/tag/edelman-trust-barometer"},{"title":"starfos.tacr.cz","url":"https://starfos.tacr.cz/vysledky-vyzkumu/RIV%2F00216208%3A11230%2F12%3A10123329"},{"title":"Analysis, Interviews, Opinions","url":"https://www.tradearabia.com/News/285812/Public-trust-in-financial-services-sector-%E2%80%98highest%E2%80%99-Edelman"},{"title":"cebr.vse.cz","url":"https://cebr.vse.cz/pdfs/cbr/2012/01/02.pdf"},{"title":"consumers around the world deeply distrust the financial industry","url":"https://www.housingwire.com/articles/consumers-around-the-world-deeply-distrust-the-financial-industry/"},{"title":"sai and trust management","url":"https://www.nku.cz/
… [truncated, 1795 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Stanford Web Credibility Project Fogg 10 guidelines trust finance websites design look credibility study 2002"

Links: [{"title":"Stanford Web Credibility Project","url":"https://en.wikipedia.org/wiki/Stanford_Web_Credibility_Project"},{"title":"Click here to go to the Stanford PTL web site","url":"https://credibility.stanford.edu/guidelines"},{"title":"encyclopedia.pub","url":"https://encyclopedia.pub/entry/history/show/77496"},{"title":"why credibility matters for your business website","url":"https://torquemag.io/why-credibility-matters-for-your-business-website/"},{"title":"torquemag.io","url":"https://torquemag.io/?p=70581"},{"title":"Everything from","url":"https://echai.ventures/startingup/from/stanford-web-credibility-project"},{"title":"www.ai-gakkai.or.jp","url":"https://www.ai-gakkai.or.jp/jsai2004/schedule/pdf/000283.pdf"},{"title":"encyclopedia.pub","url":"https://encyclopedia.pub/entry/33707"},{"title":"fogg, b j (2002) stanford guidelines for web credibility a research summary from the stanford persuasive technology lab stanford persuasive technology lab retrieved from wwwwebcredibilityorgguidelines","url":"https://makinggood.ac.nz/f/fo
… [truncated, 2649 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Baymard trust seals security badges survey which trust seals recognized perceived trustworthiness percentage"

Links: [{"title":"Trust Seals: Do Your Customers Really Care About Them?","url":"https://rejoiner.com/resources/trust-seal-data"},{"title":"UX Articles","url":"https://baymard.com/blog/perceived-security-of- payment-form"},{"title":"Choose the Most Popular Trust Seals","url":"https://blog.convert.com/choose-popular-trust-seals.html"},{"title":"How to Boost E-Commerce Credibility with a Website Trust Seal (Part 2)","url":"https://www.primeview.com/?p=4088"},{"title":"Industry Insight","url":"https://opensrs.com/blog/which-site-seal-do-people-trust-the-most-2013-survey-results"},{"title":"opensrs.com","url":"https://opensrs.com/?p=10063"},{"title":"which ecommerce security logos do users trust do they matter","url":"https://econsultancy.com/which-ecommerce-security-logos-do-users-trust-do-they-matter/"},{"title":"UX Articles","url":"https://baymard.com/blog/site-seal-trust"},{"title":"New Baymard Study: How to Improve Ecommerce Checkout Rates with Site Seals & Checkout Design","url":"https://www.thesslstore.com/blog/new-baymard-study-how-to-imp
… [truncated, 2626 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "social proof testimonials A/B test landing page conversion lift documented numbers customer reviews finance fintech"

Links: [{"title":"we a b tested to find the social proof that actually drives conversion","url":"https://userevidence.com/outpost-hub/we-a-b-tested-to-find-the-social-proof-that-actually-drives-conversion/"},{"title":"[A/B Testing Idea] Add Social Proof to your Landing Page","url":"https://www.convertize.com/ab-test-idea-add-social-proof"},{"title":"[A/B Testing Idea] Add Social Proof to your Landing Page","url":"https://convertize.com/?p=1592"},{"title":"AB test idea: Placement of social proof elements","url":"https://www.optibase.io/ab-testing-ideas/social-proof"},{"title":"76% clicks","url":"https://faziergrowthhacks.beehiiv.com/p/76-clicks"},{"title":"Social Proof","url":"https://taplytics.com/social-proof"},{"title":"The role of social proof in landing page optimization","url":"https://blog.abmatic.ai/role-of-social-proof-in-landing-page-optimization"},{"title":"The short version:","url":"https://foundrycro.com/blog/landing-page-social-proof-benchmarks-2026/"},{"title":"testing social proof elements for higher conversions","url":"
… [truncated, 2715 more chars]
```

</details>

**→ WebFetch** https://baymard.com/blog/site-seal-trust

> prompt: Survey details: question asked, sample size, results by seal (Norton, McAfee, TRUSTe, BBB), year, and key conclusions on trust seals.

**→ WebFetch** https://credibility.stanford.edu/guidelines

> prompt: List the 10 Stanford guidelines for web credibility and any study sample numbers.

**→ WebFetch** https://www.cnb.cz/en/cnb-news/news/Public-trust-in-the-Czech-National-Bank-remains-high

> prompt: Trust in CNB percentage, survey (STEM), date, sample size.

**→ WebSearch** `welcome email open rate benchmark vs regular campaigns finance industry email open rate click rate 2025`

<details><summary>result</summary>

```
- **Trust level:** 77% of the Czech population trusts the Czech National Bank.
- **Survey:** Conducted by STEM.
- **Date:** Fieldwork took place in the second half of June (2026). The article is dated 2 July 2026.
- **Sample size:** The page doesn't say.
```

</details>

<details><summary>result</summary>

```
The page lists 10 guidelines for building web credibility:

1. Provide sources and references so visitors can check your information.
2. Show that a real organization operates the site, such as with a physical address.
3. Highlight your team's expertise and credentials, and avoid linking to untrustworthy sites.
4. Show that real, trustworthy people stand behind the site.
5. Make your phone number, address, and email easy to find.
6. Use a visual design that looks professional and suits the site's purpose.
7. Make the site easy to use and genuinely useful.
8. Update content regularly, or at least show that it has been recently reviewed.
9. Limit promotional content, and clearly separate any ads from your own material.
10. Fix typos and broken links, and keep the site running.

**Study sample:** The guidelines are based on three years of research that "included over 4,500 people." The page does not give sample sizes for the individual studies.
```

</details>

<details><summary>result</summary>

```
**Survey details (2013):**

- **Question:** Which badge gives you the best sense of trust when "paying online?"
- **Sample:** 2,510 total responses, of which 1,286 chose an actual seal. Respondents were US adults, surveyed January 9-11, 2013, via Google Consumer Surveys.
- **Method:** Five options were shown at once in randomized order. "Don't know or no preference" was always shown as the fifth option.

**Results (excluding "Don't know" answers):**

1. Norton: ~36%
2. McAfee: ~23%
3. TRUSTe: ~13% (tied)
4. BBB Accredited: ~13% (tied)
5. Thawte: fifth place, the second-best SSL seal
6. Trustwave, GeoTrust, and Comodo: ~3% each, sharing 6th through 8th place

**Key conclusions:**

- The second through fourth most trusted seals were all trust seals (McAfee, TRUSTe, BBB), while most SSL seals scored low. Norton was the exception.
- The author argues that perceived security matters more to average users than technical security.
- Norton and McAfee likely rank highest because people recognize these anti-virus brands.
- For a single seal, Norton is recommended. The author also suggests combining a Norton SSL seal, a McAfee seal, and a BBB or TRUSTe seal.
- The survey did not test whether
… [truncated, 533 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "welcome email open rate benchmark vs regular campaigns finance industry email open rate click rate 2025"

Links: [{"title":"email marketing benchmarks","url":"https://www.omnisend.com/blog/email-marketing-benchmarks/?bbpage=1"},{"title":"email marketing benchmarks","url":"https://omnisend.com/blog/email-marketing-benchmarks?ssrid=ssr"},{"title":"28+ Financial Advisory Email Marketing Statistics (2026 Benchmarks)","url":"https://www.webtonic.io/blog/financial-advisory-email-marketing-statistics"},{"title":"Email Open Rate Benchmarks 2025","url":"https://www.linkmobility.com/en-gb/blog/email-open-rate-benchmarks-2025"},{"title":"The Ultimate List of Email Marketing Statistics for 2025","url":"https://inboxally.com/blog/the-most-important-email-marketing-statistics"},{"title":"What Is a Good Open Rate on an Email Campaign?","url":"https://smartbuy.alibaba.com/tips/what-is-a-good-open-rate-on-an-email-campaign"},{"title":"email marketing benchmark","url":"https://www.unic.com/en/resources/email-marketing-benchmark"},{"title":"email marketing benchmark","url":"https://www.unic.com/en/magazine/email-marketing-benchmark"},{"title":"www.moengage.com","url":"h
… [truncated, 2231 more chars]
```

</details>

**→ WebFetch** https://mailchimp.com/resources/email-marketing-benchmarks/

> prompt: Open rate, click rate, unsubscribe rate for "Financial Services" (or similar) industry and the all-industry average; year; sample; note about Apple Mail Privacy Protection.

**→ WebFetch** https://www.omnisend.com/blog/email-marketing-benchmarks/

> prompt: Welcome email open rate, click rate, conversion; automation vs campaigns; year and dataset size; any financial industry numbers.

**→ WebSearch** `benchmark e-mailingu Česko open rate click rate finance průměr Ecomail OR SmartEmailing OR Mailkit report`

**→ WebSearch** `double opt-in vs single opt-in list quality study engagement open rate fewer subscribers GDPR Czech zákon 480/2004 souhlas`

<details><summary>result</summary>

```
The page has no "Financial Services" category. The closest is **Business + Finance**:

- **Open rate:** 31.35%
- **Click rate:** 2.78%
- **Unsubscription rate:** 0.15%
- **All-industry average:** 35.63% open, 2.62% click, 0.22% unsubscribe

**Year:** The data was last updated in December 2023.

**Sample:** Mailchimp scanned billions of emails delivered through its system. The sample includes only campaigns with tracking turned on, where users reported their industry, and that were sent to at least 1,000 subscribers. Customers ranged from one-person startups to Fortune 500 companies.

**Apple Mail Privacy Protection:** Apple's privacy changes and its Mail Privacy Protection feature may affect how accurate open rates are, so account for this when interpreting open-rate figures.
```

</details>

<details><summary>result</summary>

```
**Welcome emails**
- Open rate: 35.53%
- CTR: 3.94%
- CTOR: 11.19%
- Conversion rate: 2.11%
- Revenue per email: $6.16
- Unsubscribe rate: 0.87%

**Automated vs. campaign emails**

| Metric | Campaign | Automated |
|---|---|---|
| Open rate | 30.41% | 30.21% |
| CTR | 0.74% | 4.66% |
| CTOR | 2.44% | 11.87% |
| Conversion rate | 0.08% | 1.49% |
| Revenue per email | $0.155 | $3.41 |
| Unsubscribe rate | 0.20% | 0.59% |

The article says automated emails generated "$3.41 per email sent in 2025, compared with $0.155 for campaign emails," a 22x difference.

**Year and dataset size**
- Data year: 2025
- Campaign emails: more than 20 billion
- Automated email sends: 470 million
- Brands: 27,000+

**Finance**
- Open rate: 20.25%
- CTR: 0.99%
- CTOR: 4.89%
- Conversion rate: 0.17%

The article notes Finance converted at 0.17% "after posting one of the lowest open rates in the previous section."
```

</details>

<details><summary>result</summary>

```
Web search results for query: "benchmark e-mailingu Česko open rate click rate finance průměr Ecomail OR SmartEmailing OR Mailkit report"

Links: [{"title":"everlytic email marketing benchmarks 2018","url":"https://everlytic.com/wp-content/uploads/2019/04/everlytic-email-marketing-benchmarks-2018.pdf"},{"title":"Email Marketing Benchmark 2023 by Mailpro en","url":"https://www.mailpro.com/images/benchmark-pages-2023/Email-Marketing-Benchmark-2023-by-Mailpro-en.pdf"},{"title":"Email benchmarking report 2017","url":"https://dma.org.uk/research/email-benchmarking-report-2017"},{"title":"Email benchmarking report 2018","url":"https://dma.org.uk/article/email-benchmarking-report-2018"},{"title":"2022 or latest email marketing benchmark financial industry 185438","url":"https://experienceleaguecommunities.adobe.com/adobe-marketo-engage-general-27/2022-or-latest-email-marketing-benchmark-financial-industry-185438"},{"title":"Statistiky e-mailového marketingu a benchmarky pro úspěch v roce 2026","url":"https://thunderbit.com/cs/blog/email-marketing-statistics-and-benchmarks"},{"title":"2022 or latest email marketing benchmark - Financial industry","url":"https://nation.marketo.com/t5/produc
… [truncated, 4216 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "double opt-in vs single opt-in list quality study engagement open rate fewer subscribers GDPR Czech zákon 480/2004 souhlas"

Links: [{"title":"double opt in vs single opt in","url":"https://www.sender.net/marketing-glossary/double-opt-in-vs-single-opt-in/"},{"title":"Revenue Per Subscriber: Single vs Double Opt-In Stores in 2026","url":"https://emaillistvalidation.com/blog/revenue-per-subscriber-single-opt-in-versus-double-opt-in-stores/"},{"title":"Single opt-in vs double opt-in – the definitive answer to the age-old question","url":"https://getresponse.com/blog/single-opt-in-vs-double-opt-in"},{"title":"Single opt-in vs double opt-in – the definitive answer to the age-old question","url":"https://www.getresponse.com/blog/new-research-epic-battle-double-single-opt"},{"title":"Learn Double Opt-in Email Marketing to Boost Your Sign-ups","url":"https://propelrr.com/blog/beef-up-email-marketing"},{"title":"community.startupnation.com","url":"https://community.startupnation.com/discussion/comment/52522/"},{"title":"Email & Text Marketing","url":"https://www.practicalecommerce.com/?p=139418"},{"title":"double opt in","url":"https://sendpulse.com/en/support
… [truncated, 4950 more chars]
```

</details>

**→ WebFetch** https://www.getresponse.com/blog/single-opt-in-vs-double-opt-in

> prompt: Numbers comparing double opt-in vs single opt-in: open rates, click rates, unsubscribes, sample size, year of data.

**→ WebSearch** `Meta Lead Ads vs landing page lead quality conversion cost per lead financial services benchmark WordStream OR Hootsuite OR Triple Whale finance Facebook ads CPL`

**→ WebSearch** `cena za lead Facebook reklama finance Česko CPL investice průměr Meta Ads`

<details><summary>result</summary>

```
**Data source:** Premium GetResponse SMB accounts from 2022 that used online subscription forms, covering 2.76 billion individual newsletters.

| Metric (grand total) | Single opt-in (SOI) | Double opt-in (DOI) |
|---|---|---|
| Subscription rate (visitor to subscriber) | 1.28% | 0.33% |
| Newsletter open rate | 27.36% | 35.72% |
| Newsletter click-through rate | 2.36% | 4.19% |
| Unsubscribe rate | 0.0913% | 0.1084% |
| Bounce rate | 2.14% | 2.38% |
| Spam complaint rate | Not given as a total | Not given as a total |

- **Complaints:** The article says DOI complaint rates were higher than SOI in many cases, but it doesn't publish overall figures.
- **Bounces:** The article calls the bounce result inconclusive because it varies by industry.
- **Sample size:** The article doesn't state how many accounts were included, only the newsletter count.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Meta Lead Ads vs landing page lead quality conversion cost per lead financial services benchmark WordStream OR Hootsuite OR Triple Whale finance Facebook ads CPL"

Links: [{"title":"metadata b2b benchmark report 2026","url":"https://www.metadata.io/benchmark/metadata-b2b-benchmark-report-2026.pdf"},{"title":"facebook lead ads","url":"https://superscale.ai/learn/facebook-lead-ads/"},{"title":"meta ads benchmarks 2026 b2b saas b2b cpm cpc cpl vertical","url":"https://www.growthspreeofficial.com/blogs/meta-ads-benchmarks-2026-b2b-saas-b2b-cpm-cpc-cpl-vertical.md"},{"title":"average cost per lead on facebook july 2026 report","url":"https://focus-digital.co/average-cost-per-lead-on-facebook-july-2026-report/"},{"title":"meta ads benchmarks 2026 b2b saas b2b cpm cpc cpl vertical","url":"https://www.growthspreeofficial.com/blogs/meta-ads-benchmarks-2026-b2b-saas-b2b-cpm-cpc-cpl-vertical"},{"title":"Facebook Lead Ads vs Landing Pages in 2026: $27.66 CPL, Conversion Rates, and Hybrid Plays","url":"https://www.leadgen-economy.com/blog/facebook-lead-ads-vs-landing-pages/"},{"title":"8 min read","url":"https://leadsync.me/blog/facebook-lead-ads-vs-landing-pages/
… [truncated, 3147 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "cena za lead Facebook reklama finance Česko CPL investice průměr Meta Ads"

Links: [{"title":"Jak snížit CPL u reklam na Facebooku po nových zásadách ochrany osobních údajů","url":"https://mundobytes.com/cs/Jak-sn%C3%AD%C5%BEit-CPL-v-reklam%C3%A1ch-na-Facebooku-po-zaveden%C3%AD-nov%C3%BDch-z%C3%A1sad-ochrany-osobn%C3%ADch-%C3%BAdaj%C5%AF/"},{"title":"ile kosztuje reklama na facebooku","url":"https://www.shopify.com/pl/blog/ile-kosztuje-reklama-na-facebooku"},{"title":"kolik stoji reklama na facebooku","url":"https://www.shopify.com/cz/blog/kolik-stoji-reklama-na-facebooku"},{"title":"CPL (Cost Per Lead)","url":"https://www.kontentino.com/sk/social-media-urban-dictionary/cpl-cost-per-lead/"},{"title":"CPL (Cost Per Lead)","url":"https://www.kontentino.com/cs/social-media-urban-dictionary/cpl-cost-per-lead/"},{"title":"CPL (Cost Per Lead)","url":"https://www.kontentino.com/sk/slovnik-slangu-socialnych-medii/cpl-cost-per-lead/"},{"title":"databox.com","url":"https://databox.com/?p=162776"},{"title":"Facebook Ads Insights Tool","url":"https://www.superads.ai/facebook-ads-costs/cost-per-lead/finance"},{"title":"average cost per lead facebook","url":"https:
… [truncated, 1549 more chars]
```

</details>

**→ WebFetch** https://www.superads.ai/facebook-ads-costs/cost-per-lead/finance

> prompt: Finance CPL average on Facebook ads, period covered, sample size, countries, cost per click, CTR if available.

**→ WebSearch** `WordStream Facebook ads benchmarks 2025 finance and insurance lead generation CTR conversion rate cost per lead`

**→ WebFetch** https://www.shopify.com/cz/blog/kolik-stoji-reklama-na-facebooku

> prompt: Does it give Czech CPM/CPC/CPL numbers, by industry, e.g. finance? Source of numbers and date.

<details><summary>result</summary>

```
The page does **not** give Czech CPM, CPC, or CPL figures, and it has no breakdown by industry, including finance.

The only figures are global averages for July 2025, in USD, with approximate Czech koruna conversions:

- **CPC:** about 0.768 USD (the page gives both "cca 16,17 Kč" and "cca 14,73 Kč")
- **CPM:** about 15.49 USD (about 326.06 Kč)
- **CPL:** about 44.55 USD (about 937.78 Kč)

The article is dated 20 August 2025. It attributes the averages to third-party sources, mainly app.bir.ch. The CPM figure links to a URL that refers to cost per lead, so that citation may be wrong. The page does not say whether the averages are global or limited to any market.

The article says costs vary with seasonality, competition, audience, placement, and campaign objective, but it gives no industry-specific numbers.
```

</details>

<details><summary>result</summary>

```
**Finance CPL on Facebook Ads (from the page)**

- **Average CPL:** About **$39.2 per lead** across the 13-month window. The page reports the average, though it says benchmarks are generally medians.
- **Range:** Started at $27.22 (July 2025), peaked at $73.16 (December 2025), bottomed at $15.76 (June 2026), and ended at $15.96 (July 2026).
- **Global comparison:** The global baseline averaged about $44.1, so Finance ran roughly 11% below it overall.
- **Period covered:** The body text says July 2025 to July 2026. The page header says October 2025 to September 2026, so the dates are inconsistent.
- **Sample size:** The page cites over $3B in Facebook ad spend from thousands of anonymized ad accounts. It does not give a Finance-specific campaign count.
- **Countries:** "All countries" only. No country-level breakdown is provided.
- **Cost per click (CPC):** Not provided for Finance.
- **Click-through rate (CTR):** Not provided for Finance. The page links to a separate CTR benchmark page.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "WordStream Facebook ads benchmarks 2025 finance and insurance lead generation CTR conversion rate cost per lead"

Links: [{"title":"facebook ads benchmarks 2025","url":"https://www.wordstream.com/blog/facebook-ads-benchmarks-2025"},{"title":"facebook advertising benchmarks","url":"https://localiq.com/blog/facebook-advertising-benchmarks/"},{"title":"Facebook Ads Benchmarks by Industry & Format in 2025","url":"https://www.bestever.ai/post/facebook-ads-benchmarks"},{"title":"Facebook ad costs jump 21% in 2025, but still beat Google","url":"https://searchengineland.com/facebook-ad-costs-jump-beat-google-461690"},{"title":"Most Insurance Brands Overspend on Meta: Ad Statistics Reviewed","url":"https://www.webtonic.io/blog/insurance-meta-ads-statistics"},{"title":"facebook ad costs jump 21 as lead campaigns struggle while traffic ads thrive","url":"https://ppc.land/facebook-ad-costs-jump-21-as-lead-campaigns-struggle-while-traffic-ads-thrive/"},{"title":"facebook lead costs hold at 27 39 as traffic clicks drop to 0 60","url":"https://ppc.land/facebook-lead-costs-hold-at-27-39-as-traffic-clicks-drop-to-0-60/"},{"title":"Adligator Team·","url":"https://adlig
… [truncated, 2133 more chars]
```

</details>

**→ WebFetch** https://www.wordstream.com/blog/facebook-ads-benchmarks-2025

> prompt: Finance and Insurance row: CTR, CPC, conversion rate, CPL (traffic vs lead gen campaigns). Overall lead gen CPL, CVR. Sample size and data period.

**→ WebSearch** `tykání nebo vykání v reklamě finanční produkty banky komunikace s klienty tykání výzkum Češi preferují`

**→ WebSearch** `Czech T-V distinction tykání vykání advertising brands address customers informal "tykání" marketing study young people`

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Czech T-V distinction tykání vykání advertising brands address customers informal "tykání" marketing study young people"

Links: [{"title":"Limitní situace pro použití vykání a tykání v češtině a španělštině","url":"https://dspace.tul.cz/items/eb305c81-02d1-4308-a1fc-9004ab0d8598"},{"title":"Vykaní a Tykaní: A Polite Way to Address Others","url":"https://nobsczech.cz/blog/vykani-tykani"},{"title":"The delicacies of you and You","url":"https://english.radio.cz/node/8566578"},{"title":"Formy oslovování v TV","url":"https://dspace.cuni.cz/handle/20.500.11956/53762"},{"title":"ff.upce.cz","url":"https://ff.upce.cz/en/publikace-detail/39866738"},{"title":"Declension and Conjugation","url":"https://www.cjv.muni.cz/media/3402802/declension-and-conjugations.docx"},{"title":"How do formal and informal addresses differ in Czech business culture? - Talkpal","url":"https://talkpal.ai/?p=1578711"},{"title":"use informal address","url":"https://czechcourse.com/de/vocabulary/words/verbs/tykat"},{"title":"Zobrazit minimální záznam","url":"https://dspace.cuni.cz/handle/20.500.11956/19119?show=full"}]

I didn't find a study that directly measures how Czech brands use "
… [truncated, 2265 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "tykání nebo vykání v reklamě finanční produkty banky komunikace s klienty tykání výzkum Češi preferují"

Links: [{"title":"Podnikatelé preferují řešit vše s jednou bankou, zjistil průzkum","url":"https://www.businessinfo.cz/clanky/podnikatele-preferuji-resit-vse-s-jednou-bankou-zjistil-pruzkum/"},{"title":"porada oddělení vývoje","url":"https://www.ey.com/cs_cz/insights/financial-services/ey-banking-survey-2023"},{"title":"[bookmark: _GoBack][image: hlavička čms dobrá barva pro tisk jpg]","url":"https://www.mediaguru.cz/media/3081/tiskov%c3%a1_zpr%c3%a1va_%c4%87e%c5%a1i_a_reklama_2018-final.docx"},{"title":"The Research of Satisfaction of Czech Banking Clients and the Comparison of this Issue with Slovakia","url":"https://journals.lib.vutbr.cz/index.php/trends/article/view/353"},{"title":"GfK změřila účinnost bankovních kampaní","url":"https://www.e15.cz/byznys/ostatni/gfk-zmerila-ucinnost-bankovnich-kampani-1178583"},{"title":"váš průvodce finančním světem","url":"https://www.mesec.cz/n/pruzkum/"},{"title":"Marketérem roku 2024 je Robert Chmelař z Partners banky","url":"https://www.mediaguru.cz/ceska-marketingova-spolecnost"},{"title":"cas.cz","url":
… [truncated, 2793 more chars]
```

</details>

**→ WebSearch** `průzkum AKA Nielsen Admosphere tykání v reklamě vadí Češi a reklama`

**→ WebFetch** https://www.mediaguru.cz/clanky/2025/10/jak-cesi-vnimaji-reklamu-klicova-je-pro-ne-relevance/

> prompt: Key findings on how Czechs perceive advertising: relevance, tone, tykání/vykání if mentioned, aggressive ads, sample size, research agency, date.

<details><summary>result</summary>

```
Web search results for query: "průzkum AKA Nielsen Admosphere tykání v reklamě vadí Češi a reklama"

Links: [{"title":"Autor textu Kateřina Straková","url":"https://www.mediaguru.cz/polovine-lidi-vadi-cizojazycne-vyrazy-v-reklamach"},{"title":"Kde je reklama nejotravnější? Češi se v průzkumu vzácně shodli","url":"https://eurozpravy.cz/ekonomika/ceska-republika/215712-kde-je-reklama-nejotravnejsi-cesi-se-v-pruzkumu-vzacne-shodli"},{"title":"Znechuceni reklamou","url":"https://www.lupa.cz/clanky/znechuceni-reklamou/"},{"title":"Autor textu Martina Vojtěchovská","url":"https://www.mediaguru.cz/ppm-factum-nejmene-vadi-reklama-v-miste-prodeje"},{"title":"114582 cesi a reklama zaciname byt puritani neco se deje","url":"https://eurozpravy.cz/ekonomika/ceska-republika/114582-cesi-a-reklama-zaciname-byt-puritani-neco-se-deje"},{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/cesi-a-reklama-vice-lidem-se-nelibi-manipulativnost-reklamy"},{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/clanky/2019/02/cesi-a-reklama-vice-lidem-se-nelibi-manipulativnost-reklamy/"},{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/cechum-nejmene-vadi-reklama-v-miste
… [truncated, 1852 more chars]
```

</details>

<details><summary>result</summary>

```
**Key findings on how Czechs perceive advertising (WPP Media, via MediaGuru)**

- **Relevance is central:** Only about a tenth of Czechs agree that ads feature "lidé jako jsou oni" (people like them). Just 8% recalled a recent ad that felt relevant to them.
- **Exaggeration:** 73% think ads can exaggerate, and 39% strongly agree. Views barely differ by gender or age.
- **Stereotypes:** 24% say ads contain stereotypes about men and 25% say they do about women (29% of women).
- **Attractive, wealthy people:** About a third say ads show too many attractive and wealthy people. Lower-income respondents are more likely to feel this way.
- **Pressure to buy:** 21% say ads push them to buy things they don't need, while 56% disagree.
- **Self-confidence:** 14% say ads hurt their self-confidence, mainly people with lower incomes.
- **Least and most disliked categories:** Loans, online and sports betting, and weight-loss products or diets are the most disliked, with 60% or more objecting on average. Household cleaning products, painkillers, supplements, sweets, and beer draw little criticism. Banks are fine if they promote general services rather than loans.
- **Media:** Newspapers and magazi
… [truncated, 743 more chars]
```

</details>

**→ WebFetch** https://www.mediaguru.cz/polovine-lidi-vadi-cizojazycne-vyrazy-v-reklamach

> prompt: Details on the tykání finding: share bothered, age differences, sample size, agency, and publication date of the article.

**→ WebSearch** `tykání v reklamě finance banka "tykání" Fio OR Moneta OR Air Bank OR Trading 212 OR XTB OR Finax OR Portu vykání tón komunikace`

<details><summary>result</summary>

```
**Tykání finding:**

- **Share bothered:** About one in five people (roughly 20%) find the informal "ty" address in advertising bothersome. The example given is "Už sis vybral dovolenou?"
- **Age differences:** The tykání bothers people over 55 more than other age groups.
- **Regional differences:** Jihočeši (South Bohemians) are more conservative on this point, with 34% saying tykání bothers them.
- **Everyone else:** About half of respondents say it doesn't bother them at all, and a quarter could not give an opinion.
- **Sample size:** 513 respondents aged 15 and over.
- **Agency:** The survey was run by the Asociace komunikačních agentur (AKA) through an online survey conducted by Nielsen Admosphere.
- **Publication date:** Monday, 13 March 2017, at 12:15.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "tykání v reklamě finance banka "tykání" Fio OR Moneta OR Air Bank OR Trading 212 OR XTB OR Finax OR Portu vykání tón komunikace"

Links: [{"title":"Moneta startuje kampaň „Svoboda je ve vašich rukou“","url":"https://www.mediaguru.cz/moneta-money-bank"},{"title":"Petrus Advisers Moneta presentation 28012021","url":"https://www.motejlekskocdopole.com/wp-content/uploads/2021/01/Petrus-Advisers-Moneta-presentation-28012021.pdf"},{"title":"228207 Fio MMB 09 02 2019","url":"https://www.fio.cz/docs/zpravodajstvi/21-analyzaStrednedoba/cz/228207_Fio_MMB_09_02_2019.pdf"},{"title":"mms ks sejrkova martina","url":"https://bakalarky.vsers.cz/2015/Kombinovan%C3%A9/MMS/Sejrkov%C3%A1%20Martina/mms_ks_sejrkova_martina.pdf"},{"title":"mms ks sejrkova martina","url":"https://bakalarky.vsers.cz/2015/Kombinovan%c3%a9/MMS/Sejrkov%c3%a1%20Martina/mms_ks_sejrkova_martina.pdf"},{"title":"xtb przelamuje temat tabu pomagaja w tym zlatan ibrahimovic i tyson fury","url":"https://comparic.pl/xtb-przelamuje-temat-tabu-pomagaja-w-tym-zlatan-ibrahimovic-i-tyson-fury/"},{"title":"moneta signs agreement with ppf on air bank home credit benxy","url":"https://www.pse.cz/novinky/moneta-si
… [truncated, 1459 more chars]
```

</details>

**→ WebFetch** https://www.finax.eu/cs

> prompt: Quote (under 15 words each) the hero headline and CTA button text; is the visitor addressed with tykání (ty) or vykání (vy) in verb forms; any visible trust elements (regulator, ČNB, number of clients, reviews); any lead form fields shown.

**→ WebFetch** https://www.xtb.com/cz

> prompt: Quote (under 15 words each) hero headline and CTA; tykání vs vykání usage; trust elements (regulator, risk warning, % of retail losing money), any form fields.

**→ WebFetch** https://www.portu.cz/

> prompt: Quote (under 15 words each) hero headline and CTA; tykání vs vykání usage in the copy; trust elements; any calculator or lead magnet.

**→ WebFetch** https://www.fio.cz/

> prompt: Is the tone formal (vykání) or informal (tykání)? Quote short phrases (under 15 words) from hero/CTA. Trust elements.

<details><summary>result</summary>

```
The web page content didn't come through. Only the separators (`---`) were included, so I can't identify a hero headline, CTA, tykání/vykání usage, trust elements, or any calculator or lead magnet.

Please paste the page text, or the relevant sections, and I'll cover each item. I'll keep any quoted language under 15 words and 125 characters, and I'll paraphrase everything else.
```

</details>

<details><summary>result</summary>

```
**Tone: formal (vykání).** The page addresses visitors with plural imperatives and the polite pronoun "vám," for example:

- Hero/CTA: "NEPLAŤTE ZBYTEČNÉ POPLATKY. PŘEJDĚTE K NÁM." (Don't pay unnecessary fees. Switch to us.)
- CTA: "INVESTUJTE S NÁMI JEDNODUŠE ONLINE." (Invest with us easily online.)
- Banner: "NAŠE FIO HYPOTÉKA VÁM SEDNE JAKO ULITÁ" (Our Fio mortgage suits you perfectly.)

**Hero statement:** "Fio banka je moderní česká banka." (Fio banka is a modern Czech bank.)

**Trust elements:**

- **Fraud warning:** The site alerts visitors to phone scams in which callers impersonate staff of the Czech financial authority (FAÚ).
- **Security page:** A dedicated "Bezpečnost" (Security) link in the header.
- **Contact access:** Visible contact details, a branch and ATM locator, and a "Napište nám" (Write to us) option.
- **Transparency:** Links to a FAQ, a price list, investor relations, and a legal disclaimer.
- **Partner brands:** Footer links to affiliated firms (FIOFONDY, RM-SYSTÉM, AKCIE.CZ).
- **Social proof:** Links to a "Zlatá koruna" (Golden Crown) public voting competition.
- **Copyright notice:** "Copyright © 2026 Fio banka."
```

</details>

<details><summary>result</summary>

```
**Hero headline and CTA**
- Headline: "Získejte 5% úrok z volných prostředků pro dobrý start"
- Subtext: "Stačí jeden obchod s akciemi nebo ETF měsíčně a můžete získat zvýhodněnou úrokovou sazbu"
- Primary CTA: "Otevřít účet"
- Secondary CTA: "Stáhnout aplikaci"

**Tykání vs. vykání**
The page uses vykání (formal address) throughout. Examples include "Měli byste zvážit", "Investujte zodpovědně", "Vyzkoušejte si", and "kontaktujte prosím". I found no tykání.

**Trust elements**
- **Regulation:** The page says it is regulated by "renomovanými regulačními institucemi z celého světa". It does not name a specific regulator.
- **Risk warnings:** "Investování je rizikové. Investujte zodpovědně." The CFD warning adds that "U 77 % účtů retailových investorů došlo" to a loss.
- **Retail loss figure:** 77% of retail CFD accounts lose money, stated in the banner and again in the footer warning.
- **Other trust signals:** "Přes 2,9 milionu investorů", a "Broker roku 2025" award from Invest Cuffs, "20+ let" on the market, and deposit protection up to "20 100 €".
- **Legal entity:** XTB S.A., organizační složka, Praha 8-Libeň, IČO 27867102.

**Form fields**
The page has no account sign-up form. T
… [truncated, 230 more chars]
```

</details>

<details><summary>result</summary>

```
**Hero headline:** "Také investování může znamenat relax"

**Primary CTA button:** "Prozkoumejte vaše možnosti"
**Secondary link:** "Jak to funguje?"

**Form of address:** The page uses **vykání** (formal "vy"). Examples include "Jste na správném místě," "Nechte vše na nás," and "Vyberte si cíl." Only the formal forms appear.

**Trust elements:**
- **Regulator:** Supervised by the Národná banka Slovenska (National Bank of Slovakia). The page does not mention the ČNB.
- **Deposit protection:** Included in the Slovak investment guarantee fund, covering up to 50,000 EUR.
- **Professional body:** Member of the Slovak Association of Securities Dealers (AOCP), with a commitment to its ethical code.
- **Client figures:** 1,8 miliardy € under management, 115 000+ satisfied clients, 100 000+ app downloads.
- **Reviews:** Google rating of 4.9 from 399 reviews.
- **Awards:** "Zlatá mince 2025" and "Invest Cuffs 2024."
- **Press:** Logos for Fintag, E15, Newstream, and Finex.

**Lead form fields shown:**
- **Investment planner:** An amount field ("Chci investovat … Kč měsíčně") and a goal selector ("Mým cílem je…" with options such as retirement, children, emergency reserve, property purchase,
… [truncated, 376 more chars]
```

</details>

**→ WebFetch** https://www.revolut.com/cs-CZ/

> prompt: Is tone tykání or vykání? Quote short phrases (<15 words) from hero/CTA.

**→ WebFetch** https://www.trading212.com/cs

> prompt: Is tone tykání or vykání? Quote short phrases (<15 words) from hero/CTA; risk warnings; trust elements.

**→ WebFetch** https://www.investown.cz/

> prompt: Is tone tykání or vykání? Quote short phrases (<15 words) from hero/CTA; trust elements.

**→ WebFetch** https://www.kurzy.cz/

> prompt: skip - return only the word OK

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
This is a Kurzy.cz finance portal snapshot from Saturday, 10 October 2026, around 15:04. Its text is garbled by a character-encoding error, so some Czech words are unreadable.

- **Markets (as of 9 Oct close):** PX index 2,576.77 (down 1.24%), Dow Jones 51,654.95 (up 0.83%), S&P 500 7,811.54, DAX 25,087.27, Eurostoxx 50 6,173.37.
- **Commodities and crypto:** Brent crude about $102.96, gold about $4,193.71, silver about $60.74, Bitcoin about $82,747.
- **Currencies:** EUR/USD about 1.1204, GBP/USD about 1.3225, USD/JPY about 158.27.
- **Czech macro:** Q2 GDP up 1.8% year-on-year, unemployment 5.00% (August), consumer prices up 1.9% year-on-year (August).
- **Headlines:** Wall Street weakened on AI-related stocks, Prague stocks fell on uncertainty over possible extraordinary taxes, and the EU and China reported progress on limits to Chinese hybrid car exports.
```

</details>

<details><summary>result</summary>

```
**Tone: vykání (formal "you")**. The hero and CTAs address visitors with polite plural imperatives, for example:

- "Zhodnocujte svoje úspory" and "Investujte od 500 Kč"
- "Spočítejte si, kolik můžete vydělat"
- "Přidejte se k největší komunitě investorů do nemovitostí"

The main CTA, "Začít investovat", is an infinitive and doesn't show the tone on its own.

**Trust elements:**

- **Regulation:** "Máme licenci České národní banky" (Czech National Bank licence).
- **Security:** "Úvěry zajištěné nemovitostmi" (loans secured by real estate).
- **App store ratings:** 4.8/5 on the App Store (1,383 reviews), 4.5/5 on Google Play (1,367), and 4.6/5 on Google (740).
- **Press coverage:** logos of outlets such as Forbes, CNN, and Hospodářské noviny under "Napsali o nás".
- **Partnership:** testimonials mention a Česká spořitelna (Czech savings bank) product.
- **Security details:** the FAQ lists real estate collateral, personal guarantees, and notarial deeds with direct enforceability.

The investor and project counters on the page show "0" in this copy, so they may be placeholders or loaded dynamically. I can't verify the live figures from this content.
```

</details>

**→ WebSearch** `NN/g how long do users stay on web pages 10-20 seconds first 10 seconds value proposition clarity`

**→ WebSearch** `Steven Hoober how do users really hold mobile devices thumb zone 49% one hand study 1333 observations`

**→ WebSearch** `Goda Manchester Sojourner retirement income projections savings experiment calculator effect on contributions`

**→ WebSearch** `endowed progress effect Nunes Drèze 2006 car wash loyalty card 19% vs 34% completion`

<details><summary>result</summary>

```
Web search results for query: "Steven Hoober how do users really hold mobile devices thumb zone 49% one hand study 1333 observations"

Links: [{"title":"how do users really hold mobile devices","url":"https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php?"},{"title":"Making mLearning Usable: How We Use Mobile Devices","url":"https://www.learningguild.com/?p=4634"},{"title":"making mlearning usable how we use mobile devices","url":"https://learningguild.com/insights/174/making-mlearning-usable-how-we-use-mobile-devices"},{"title":"Making mLearning Usable: How We Use Mobile Devices","url":"https://www.learningguild.com/research/making-mlearning-usable-how-we-use-mobile-devices"},{"title":"thumb friendly navigation word oriented design","url":"https://www.monterail.com/blog/thumb-friendly-navigation-word-oriented-design"},{"title":"Steven Hoober","url":"https://www.learningguild.com/author/steven-hoober"},{"title":"The Mario Blog","url":"https://garciamedia.com/?p=7518"},{"title":"Touch Design for Mobile Interfaces","url":"https://smashingmagazine.com/printed-books/touch-design-for-mobile-interfaces"},{"title":"eLearning Guild Research: Making mLear
… [truncated, 1975 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Goda Manchester Sojourner retirement income projections savings experiment calculator effect on contributions"

Links: [{"title":"What will my account really be worth? Experimental evidence on how retirement income projections affect saving","url":"https://academicnewsletter.sufe.edu.cn/info/278547"},{"title":"what will my account really be worth experimental evidence on how","url":"https://experts.umn.edu/en/publications/what-will-my-account-really-be-worth-experimental-evidence-on-how/"},{"title":"What will my account really be worth? Experimental evidence on how retirement income projections affect saving","url":"https://scholarhub.vn/publication/:slug/379f3928-d8d3-41c7-96c9-99397c46915d"},{"title":"MPC Member Publications","url":"https://memberpubs.pop.umn.edu/citations/show/f2d9bb91-6343-3f35-a829-3f3aeb152d82"},{"title":"References & Citations","url":"https://export.arxiv.org/abs/2005.01692v1"},{"title":"Project Your Retirement Savings & Future Income","url":"https://www.forusall.com/401k-calculators/retirement-savings-calculator"},{"title":"Retirement Income Calculator & Formula","url":"https://taglab.net/?p=21807"},{"title":"Retirement Calcul
… [truncated, 2144 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "endowed progress effect Nunes Drèze 2006 car wash loyalty card 19% vs 34% completion"

Links: [{"title":"knowledge.wharton.upenn.edu","url":"https://knowledge.wharton.upenn.edu/?p=5630"},{"title":"t car wash loyalty cards endowed progress","url":"https://siliconcanals.com/t-car-wash-loyalty-cards-endowed-progress/"},{"title":"siliconcanals.com","url":"https://siliconcanals.com/?p=108707"},{"title":"the lowdown on customer loyalty programs which are the most effective and why","url":"https://knowledge.wharton.upenn.edu/podcast/knowledge-at-wharton-podcast/the-lowdown-on-customer-loyalty-programs-which-are-the-most-effective-and-why/"},{"title":"endowed progress effect","url":"https://www.renascence.io/behavioral-biases/endowed-progress-effect"},{"title":"social commerce learning from the carwash","url":"https://digitalwellbeing.org/social-commerce-learning-from-the-carwash/"},{"title":"We reach our goals faster when we have help getting started","url":"https://coglode.com/nuggets/endowed-progress-effect"},{"title":"Endowed Progress Effect","url":"https://thinkinsights.net/index.php/consulting/endowed-progress-effect"},{"title":"Endowed Progress Effect"
… [truncated, 2431 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "NN/g how long do users stay on web pages 10-20 seconds first 10 seconds value proposition clarity"

Links: [{"title":"how long do users stay on web pages","url":"https://nngroup.com/articles/how-long-do-users-stay-on-web-pages/"},{"title":"how long do users stay on web pages","url":"https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/?app=1"},{"title":"how long do users stay on web pages","url":"https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/?facet2=pdf"},{"title":"How Long Will Visitors Stay On Your Website","url":"https://blog.catalpha.com/bid/313129/How-Long-Will-Visitors-Stay-On-Your-Website"},{"title":"how long will visitors stay on your website","url":"https://blog.catalpha.com/bid/313129/how-long-will-visitors-stay-on-your-website"},{"title":"Blog Insights","url":"https://www.forumone.com/?p=954"},{"title":"nielsen norman group theclose uowp","url":"https://app.theclose.com/goto/nielsen-norman-group-theclose-uowp/"},{"title":"Web visitors spend only a few seconds on a webpage","url":"https://wyliecomm.com/2023/05/skimming-and-scanning"},{"title":"Users Don’t Read Web Pages","url":"https://www.codecademy.co
… [truncated, 2692 more chars]
```

</details>

**→ WebFetch** https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/

> prompt: What does it say about the first 10 seconds, leaving decisions, 10-20 seconds, 30 seconds, and the data source (sample size)? Publication date.

**→ WebFetch** https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php

> prompt: Key numbers: sample (observations), one-handed/cradled/two-handed percentages, thumb use percentage, and any editor's note about updated research.

**→ WebFetch** https://experts.umn.edu/en/publications/what-will-my-account-really-be-worth-experimental-evidence-on-how/

> prompt: Abstract: authors, journal, year, design, effect size.

**→ WebFetch** https://knowledge.wharton.upenn.edu/?p=5630

> prompt: Endowed progress effect details: car wash experiment numbers (19% vs 34%), sample, source paper.

<details><summary>result</summary>

```
- **Authors:** Gopi Shah Goda, Colleen Flaherty Manchester, and Aaron J. Sojourner
- **Journal:** *Journal of Public Economics*, vol. 119, pp. 80–92
- **Year:** 2014 (published November 2014)
- **Design:** Randomized field experiment. Employees received retirement income projections along with enrollment information, and their saving was compared with a group that received no intervention. The projections used randomly assigned assumptions about retirement age, investment returns, and hypothetical contribution amounts.
- **Effect size:** The intervention raised annual contributions to employer retirement accounts by $85. This equals about 3.6% of the average contribution and 0.15% of average salary. The randomized assumptions also had significant effects on saving behavior.
```

</details>

<details><summary>result</summary>

```
The 19% vs. 34% figures don't appear in the article, so I can't confirm them.

- **Sample:** 300 car wash customers who received loyalty cards, with their later visits tracked.
- **Design:** An eight-purchase reward was restructured as a 10-purchase program with two purchases credited upon enrollment. Both versions required eight actual purchases and gave the same reward.
- **Finding:** Customers given the head start were more likely to complete the program, and they finished sooner.
- **Source paper:** "The Endowed Progress Effect: How Artificial Advancement Increases Effort" by Joseph C. Nunes and Xavier Drèze, published in the *Journal of Consumer Research*.
```

</details>

<details><summary>result</summary>

```
- **First 10 seconds:** The article calls these "critical" for deciding whether users stay. Leaving is most likely in this window because users are skeptical of pages after many poor experiences.
- **Leaving decisions:** Users sort pages into "good" and "bad" within the first few seconds. Bad pages are abandoned quickly, while good pages may hold attention for minutes.
- **10–20 seconds:** Pages that survive the first 10 seconds get a brief look around, but users still often leave during the following 20 seconds.
- **30 seconds:** After about 30 seconds, the likelihood of leaving drops noticeably, though people keep leaving at a slower rate. Pages that hold users this long often keep them for 2 minutes or more.
- **Data source and sample size:** The findings come from a Microsoft Research study by Chao Liu, Ryen W. White, and Susan Dumais. It analyzed 205,873 web pages, with upwards of 10,000 visits captured for each, from a popular browser plug-in. The dataset included more than 2 billion dwell times.
- **Publication date:** September 11, 2011.
```

</details>

<details><summary>result</summary>

```
- **Sample:** 1,333 observations over two months (ending January 8, 2013), of which 780 involved touching the screen.
- **Holding methods (among screen-touching users):** one-handed 49%, cradled 36%, two-handed 15%.
- **Thumb use:**
  - One-handed: 67% right thumb, 33% left thumb.
  - Cradled: 72% thumb, 28% finger.
  - Two-handed: 90% in portrait, 10% in landscape.
- **Editor's note:** The author later did more user research and updated his mobile design guidelines. The note points to his follow-up column, "Design for Fingers, Touch, and People, Part 1." The article also says the observations are not a count of all people, so they can't show what share of people are using their phones at any moment.
```

</details>

**→ WebSearch** `FCA financial promotions rules FOMO urgency "fear of missing out" high-risk investments consumer research gamification`

**→ WebSearch** `scarcity urgency messages countdown timer meta-analysis consumer purchase intention effect size trust backfire`

**→ WebSearch** `ESMA warning marketing communications investment firms social media influencers urgency risk warnings requirements retail investors 2022 2023`

**→ WebSearch** `Mathur dark patterns at scale shopping websites countdown timers scarcity 11K sites study 2019`

<details><summary>result</summary>

```
Web search results for query: "Mathur dark patterns at scale shopping websites countdown timers scarcity 11K sites study 2019"

Links: [{"title":"Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites","url":"https://arxiv.org/pdf/1907.07032"},{"title":"dark patterns","url":"https://www.cs.umd.edu/class/spring2021/cmsc614/papers/dark-patterns.pdf"},{"title":"arxiv.org","url":"https://arxiv.org/abs/1907.07032v2"},{"title":"dark patterns at scale findings from a crawl of 11k shopping websites","url":"https://www.deceptive.design/articles/dark-patterns-at-scale-findings-from-a-crawl-of-11k-shopping-websites"},{"title":"Award-Winning Paper: \"Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites\"","url":"https://fpf.org/2020/02/04/award-winning-paper-dark-patterns-at-scale-findings-from-a-crawl-of-11k-shopping-websites/"},{"title":"Award-Winning Paper: \"Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites\"","url":"https://fpf.org/blog/award-winning-paper-dark-patterns-at-scale-findings-from-a-crawl-of-11k-shopping-websites/"},{"title":"Award-Winning Paper: \"Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites\"","
… [truncated, 2080 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "scarcity urgency messages countdown timer meta-analysis consumer purchase intention effect size trust backfire"

Links: [{"title":"mastering scarcity unveiling the psychology and impact of scarcity marketing cues on consumer behavior","url":"https://newneuromarketing.com/mastering-scarcity-unveiling-the-psychology-and-impact-of-scarcity-marketing-cues-on-consumer-behavior"},{"title":"Scarcity tactics in marketing: a meta-analysis of product scarcity effects on consumer purchase intentions","url":"https://research.monash.edu/en/publications/scarcity-tactics-in-marketing-a-meta-analysis-of-product-scarcity/"},{"title":"Psychology%20and%20Marketing%20 %202023%20 %20Ladeira","url":"https://radar.brookes.ac.uk/radar/file/609e47cf-0367-4af7-82ac-9ab7154e2a2c/1/Psychology%20and%20Marketing%20-%202023%20-%20Ladeira.pdf"},{"title":"scarcity tactics in marketing a meta analysis of product scarcity","url":"https://research.bond.edu.au/en/publications/scarcity-tactics-in-marketing-a-meta-analysis-of-product-scarcity/"},{"title":"Scarcity tactics in marketing","url":"https://pure.bond.edu.au/ws/portalfiles/portal/182976505/Scarcity_tactics_in_marketing.pdf"},{"tit
… [truncated, 3659 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "ESMA warning marketing communications investment firms social media influencers urgency risk warnings requirements retail investors 2022 2023"

Links: [{"title":"investmentexecutive.com","url":"https://www.investmentexecutive.com/?p=458670"},{"title":"European securities regulators target marketing practices","url":"https://www.investmentexecutive.com/?p=12957"},{"title":"www.mexc.com","url":"https://www.mexc.com/news/467012"},{"title":"www.mexc.com","url":"https://www.mexc.com/it-IT/news/467012"},{"title":"www.investmentexecutive.com","url":"https://www.investmentexecutive.com/?p=432477"},{"title":"ESMA74 1103241886 912 Warnings on Social Media and Investment Recommendations","url":"https://www.esma.europa.eu/sites/default/files/2024-02/ESMA74-1103241886-912_Warnings_on_Social_Media_and_Investment_Recommendations.pdf"},{"title":"ESMA issues recommendations on marketing communications","url":"https://fxnewsgroup.com/forex-news/regulatory/esma-issues-recommendations-on-marketing-communications/"},{"title":"www.financialinstitutionsnews.com","url":"https://www.financialinstitutionsnews.com/?p=25969"},{"title":"eu watchdog throws weight behind crackdown 
… [truncated, 3231 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "FCA financial promotions rules FOMO urgency "fear of missing out" high-risk investments consumer research gamification"

Links: [{"title":"FCA sets out new rules on financial promotion of high risk investments","url":"https://www.simmons-simmons.com/en/publications/cl6f4kpvp1or80a26iwul09ox/fca-sets-out-new-rules-on-financial-promotion-of-high-risk-investments"},{"title":"FCA sets out proposals to strengthen its financial promotion rules for high-risk investments","url":"https://www.fca.org.uk/news/press-releases/fca-proposals-strengthen-financial-promotion-rules-high-risk-investments"},{"title":"ps22 10.pdf","url":"https://www.fca.org.uk/publication/policy/ps22-10.pdf"},{"title":"FCA sets out proposals to strengthen its financial promotion rules for high-risk investments","url":"https://scottishfinancialnews.com/article/fca-sets-out-proposals-to-strengthen-its-financial-promotion-rules-for-high-risk-investments"},{"title":"FCA sets out proposals to strengthen its financial promotion rules for high-risk investments","url":"https://www.scottishfinancialnews.com/articles/fca-sets-out-proposals-to-strengthen-its-financial-promotion-rules-for-high-risk-in
… [truncated, 3250 more chars]
```

</details>

**→ WebFetch** https://research.monash.edu/en/publications/scarcity-tactics-in-marketing-a-meta-analysis-of-product-scarcity/

> prompt: Abstract: authors, journal, year, number of effect sizes/studies, main findings and moderators.

**→ WebFetch** https://arxiv.org/pdf/1907.07032

> prompt: What does the paper say about countdown timers and scarcity/urgency messages: how many sites had them, how many were fake (e.g., timers that reset), low-stock messages that were fabricated? Give numbers.

**→ WebFetch** https://www.fca.org.uk/news/press-releases/fca-clamps-down-marketing-high-risk-investments-consumers

> prompt: What new rules on marketing high-risk investments: risk warning, banning incentives (refer a friend bonuses), 24-hour cooling off, date, and how they relate to urgency/FOMO.

<details><summary>result</summary>

```
I can't find the answer in the content you pasted. It's the raw binary of a PDF: compressed (FlateDecode) streams, object headers, and embedded fonts and images. Decoding it would require a PDF parser, and I can't run one here. None of the readable fragments mention countdown timers, scarcity or urgency messages, or site counts.

So I can't give you the numbers you're asking for, such as how many sites had timers, how many timers were fake or reset, or how many low-stock messages were fabricated. Any figures I gave would be invented.

To get an answer, you could:
- Paste the paper's extracted text, or the section on dark patterns or urgency tactics, or
- Run the PDF through a text extractor (such as `pdftotext` or a PDF library) and share the output.

Once I have readable text, I can summarize the findings and pull out the exact figures.

[Binary content (application/pdf, 5.7MB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637547492-sr1gm4.pdf]
```

</details>

<details><summary>result</summary>

```
**Authors:** Belinda Barton, Natalina Zlatevska, and Harmen Oppewal (Monash University, Department of Marketing)

**Journal:** *Journal of Retailing*, vol. 98, no. 4, pp. 741-758

**Year:** 2022 (published December 2022)

**Sample:** A meta-analysis of 416 effect sizes from 131 studies

**Main findings:** Scarcity cues, which signal that a product is or may become unavailable, generally raise its perceived value and desirability, which in turn increases purchase intentions. The authors argue that earlier reviews left the research fragmented, so they aimed to estimate the overall size of the effect and how it varies.

**Moderators:**
- **Scarcity type and product category:** Demand-based scarcity works best for utilitarian products, supply-based scarcity works best for experiences, and time-based scarcity works best for high-involvement products.
- **Practical implication:** Marketers should match the scarcity approach to the product type and consumer involvement to maximize campaign success.
```

</details>

<details><summary>result</summary>

```
**Risk warnings:** Firms must use clearer, more prominent risk warnings. The FCA also describes its new risk warnings as simplified, to help consumers understand the risks.

**Banned incentives:** Certain incentives to invest are now prohibited, including "refer a friend bonuses." The article doesn't list other banned incentives.

**24-hour cooling-off period:** The article doesn't mention one.

**Dates:**
- The press release was first published on 1 August 2022.
- The main risk warning proposals have a four-month implementation period. All other rules have six months.
- Based on those periods, my own calculation puts the risk warning deadline around December 2022 and the other rules around February 2023. The article doesn't state these dates.
- The rules don't apply to cryptoasset promotions, which will be addressed separately.

**Urgency and FOMO:** The article doesn't address urgency tactics or fear of missing out. It does say the FCA is concerned that many people who invest in high-risk products don't see losing money as a risk. It also warns that rising living costs could push people to chase higher returns, which may be risky. The refer-a-friend ban is the only incentive rest
… [truncated, 21 more chars]
```

</details>

**→ Bash** — Search Mathur dark patterns paper for countdown timer findings

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && pdftotext -layout webfetch-1791637547492-sr1gm4.pdf mathur.txt && grep -n -i -E "countdown|low-stock|high-demand|fake|reset" mathur.txt | head -50
```

<details><summary>result</summary>

```
503:text from subsequent user interactions, and with dynamically loaded content (e.g., a countdown
622:values (e.g., a countdown timer)--for deceptive practices. To this end, we used our checkout crawler
653:          Countdown Timer       pretense of a one-time fee or a free trial              Framing
683:Scarcity  Low-stock Message     Indicating to users that limited quantities 632 581
687:          High-demand Message Indicating to users that a product is in high- 47 43
788:   We observed two types of the Urgency dark pattern: Countdown Timers and Limited-time
798:(a) Countdown Timer on mattressfirm.com. The header displays a Flash Sale where the majority of
801:(b) Countdown Timer on justfab.com. The offer (c) Limited-time Message on chicwish.com. The website
807:   Countdown Timers. The `Countdown Timer' dark pattern is a dynamic indicator of a deadline,
808:counting down until the deadline expires. Figures 4a and 4b show the Countdown Timer dark
811:of the Countdown Timer dark pattern.
813:   Deceptive Countdown Timers. Using the visit-and-record method described in Section 4.4, we
814:examined the countdown timers in our data set for deceptive practices. We stitched the scr
… [truncated, 3475 more chars]
```

</details>

**→ WebSearch** `calculator "email" to see results gated calculator A/B test case study lead conversion rate dropped OR increased mortgage OR retirement OR investment`

**→ WebSearch** `HubSpot research landing pages calculators lead generation conversion rates "calculator" CTA conversion rate data 330,000 CTAs`

<details><summary>result</summary>

```
Web search results for query: "calculator "email" to see results gated calculator A/B test case study lead conversion rate dropped OR increased mortgage OR retirement OR investment"

Links: [{"title":"Lead Conversion Rate Calculator","url":"https://www.mailmodo.com/calculators/lead-conversion-rate-calculator/"},{"title":"Conversion Rate Calculator - Built on 1,055 Real A/B Tests","url":"https://www.conversionteam.com/conversion-rate-calculator/"},{"title":"Make Your Mortgage Website Convert 5-12% of Visitors Into Leads","url":"https://leadpops.com/mortgage-website-lead-generation"},{"title":"Mortgage Calculator Leads: Building Traffic That Converts","url":"https://www.leadgen-economy.com/blog/mortgage-calculator-leads-traffic-conversion/"},{"title":"Lead Conversion Rate Calculator & Formula - TAGLAB","url":"https://taglab.net/calculators/lead-conversion-rate-calculator/"},{"title":"Lead Conversion Rate Calculator","url":"https://www.tripledart.com/tools/lead-conversion-rate-calculator"},{"title":"Mortgage Websites That Convert 5-12% of Visitors Into Leads","url":"https://leadpops.com/mortgage-websites"},{"title":"Lead Conversion Rate Calculator","url":"https://pancalchub.com/market
… [truncated, 1964 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "HubSpot research landing pages calculators lead generation conversion rates "calculator" CTA conversion rate data 330,000 CTAs"

Links: [{"title":"popular use cases hubspot website performance","url":"https://help.databox.com/popular-use-cases-hubspot-website-performance"},{"title":"The Landing Page Template HubSpot Uses to Convert at a 35% Rate","url":"https://blog.hubspot.com/marketing/landing-page-templates?authuser=0"},{"title":"landing page templates","url":"https://blog.hubspot.com/marketing/landing-page-templates"},{"title":"The short version:","url":"https://foundrycro.com/blog/cta-button-conversion-rate-benchmarks-2026/"},{"title":"How Do You Calculate a Conversion Rate in HubSpot?","url":"https://climbtheladder.com/how-do-you-calculate-a-conversion-rate-in-hubspot/"},{"title":"- Knowledge Base","url":"https://knowledge.hubspot.com/ai-tools/analyze-content-variants?swcfpc=1"},{"title":"community.hubspot.com","url":"https://community.hubspot.com/t5/HubSpot-Ideas/Landing-Page-No-Longer-Shows-Conversion-Rates/idi-p/28088"},{"title":"hubspot track cta click through by page type","url":"https://www.pedowitzgroup.com/hubspot-track-cta-click-through
… [truncated, 2298 more chars]
```

</details>

**→ WebSearch** `Demand Metric interactive content benchmarks report conversion 70% vs 36% original study sample`

**→ WebFetch** https://outgrow.co/blog/interactive-content-roi-data-driven-insights

> prompt: What stats does it give for calculators/quizzes conversion rates and lead quality; sources cited; sample sizes; year.

<details><summary>result</summary>

```
Web search results for query: "Demand Metric interactive content benchmarks report conversion 70% vs 36% original study sample"

Links: [{"title":"Interactive Content: The Successor Of The Landing Page","url":"https://martech.org/interactive-content-successor-landing-page/"},{"title":"interactive content","url":"https://storychief.io/blog/amp/interactive-content"},{"title":"written by","url":"https://storychief.io/blog/interactive-content"},{"title":"Interactive Content Marketing","url":"https://www.slideshare.net/ioninteractive/interactive-content-marketing"},{"title":"Interactive Content Generates 2x More Conversions Than Passive Content","url":"https://uplandsoftware.com/kapost/resources/blog/interactive-content-conversions/"},{"title":"25 Interactive Content Statistics and Trends Shaping Marketing in 2024","url":"https://expertbeacon.com/25-interactive-content-statistics-and-trends-shaping-marketing-in-2024/"},{"title":"producing engaging content","url":"https://www.slideshare.net/ioninteractive/producing-engaging-content"},{"title":"Producing engaging content","url":"https://www.slideshare.net/slideshow/producing-engaging-content/41119816"},{"title":"fr.slideshare.net","url":"
… [truncated, 4016 more chars]
```

</details>

<details><summary>result</summary>

```
The page gives no sourced conversion-rate or lead-quality statistics specific to calculators or quizzes. The article is dated 5 August 2025, but none of the figures below include a publication year.

**Quizzes**
- Quizzes "create 83% more qualified leads than gated whitepapers." No source, sample size, or year is given.

**Calculators**
- Calculators convert at 3–5x the rate of regular landing pages. No source, sample size, or year is given.
- Outgrow customers see 40–60% conversion rates on ROI calculators and evaluation tools. This is a vendor claim with no source, sample size, or year.

**Lead quality**
- Interactive leads score 40% higher on qualification metrics. This appears in a bullet list based on the author's review of "50+ campaigns from various industries." No methodology, sample breakdown, or year is given.
- The same review reports 30–50% lower cost per lead for interactive campaigns, with no further detail.

**Other cited sources (not specific to calculators or quizzes)**
- Demand Metric: interactive content produces 2x as many conversions as passive content. Named, but no link or year.
- Content Marketing Institute: 81% of marketers say interactive content gets more
… [truncated, 163 more chars]
```

</details>

**→ WebFetch** https://eu-assets.contentstack.com/v3/assets/blt663d10211b43b0ca/bltdf544ccdf7c23d06/67ed4d5c2545ec5ffe16a9b1/Ion_CMI_InteractiveContent_Final.pdf

> prompt: Find the survey methodology (dates, responses count) and the finding comparing interactive vs passive content on conversion ("moderately well or very well"), sponsor, year.

**→ WebSearch** `first name only vs name and email form field lead capture A/B test; email-only opt-in vs adding name field conversion`

**→ WebSearch** `Google Chrome autofill forms study completion faster mobile "autocomplete" attributes form conversion web.dev address forms best practices`

<details><summary>result</summary>

```
Web search results for query: "Google Chrome autofill forms study completion faster mobile "autocomplete" attributes form conversion web.dev address forms best practices"

Links: [{"title":"Address form best practices codelab","url":"https://web.dev/codelab-address-form-best-practices/"},{"title":"payment and address form best practices","url":"https://web.dev/payment-and-address-form-best-practices/"},{"title":"payment and address form best practices","url":"https://web.dev/articles/payment-and-address-form-best-practices"},{"title":"payment and address form best practices","url":"https://web.dev/i18n/es/payment-and-address-form-best-practices/"},{"title":"payment and address form best practices","url":"https://web.dev/i18n/ja/payment-and-address-form-best-practices/"},{"title":"Address form best practices codelab","url":"https://web.dev/articles/codelab-address-form-best-practices?authuser=0"},{"title":"Address form best practices codelab","url":"https://web.dev/articles/codelab-address-form-best-practices"},{"title":"payment and address form best practices","url":"https://web.dev/i18n/zh/payment-and-address-form-best-practices/"},{"title":"Address form best practices codelab","u
… [truncated, 1950 more chars]
```

</details>

<details><summary>result</summary>

```
I couldn't find the survey details in the content you provided. It's a raw PDF file dump: compressed streams and binary data, with no readable text about a survey. The only plain-text items are PDF metadata, such as a 2016-05-26 "LastModified" date and references to Illustrator, and the dump is also cut off partway through.

So I can't confirm the methodology (dates or response count), the interactive-versus-passive content finding on conversion, or the sponsor and year.

To get these, you could:
- Paste the extracted text from the PDF, or the HTML version of the report if one exists.
- Share the report's executive summary or methodology section directly.
- Open the PDF in a reader and copy the relevant pages.

[Binary content (application/pdf, 7.3MB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637596622-t6rprn.pdf]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "first name only vs name and email form field lead capture A/B test; email-only opt-in vs adding name field conversion"

Links: [{"title":"a b testing 17479","url":"https://community.klaviyo.com/marketing-30/a-b-testing-17479"},{"title":"The Only Two Questions Your Lead Capture Form Should Ask For Higher Conversions","url":"https://www.advisorpedia.com/advisor-tools/two-questions-your-lead-capture-form-should-ask-for-higher-conversions"},{"title":"Written By: author avatar Chipo","url":"https://thrivethemes.com/contact-form-tips/"},{"title":"name and email form","url":"https://orbitforms.ai/blog/name-and-email-form"},{"title":"A/B Test From Name | Community","url":"https://experienceleaguecommunities.adobe.com/adobe-marketo-engage-27/a-b-test-from-name-170018"},{"title":"A/B Test Results: Which Email Sender Name Is Better?","url":"https://9clouds.com/blog/a-b-test-results-which-email-sender-name-is-better/"},{"title":"November 06, 2012","url":"https://www.marketingsherpa.com/article/chart/top-lead-gen-form-fields"},{"title":"Definition of Form A/B Testing","url":"https://adogy.com/terms/form-ab-testing"},{"title":"A/B test - Lead.Firstname token | Comm
… [truncated, 3486 more chars]
```

</details>

**→ Bash** — Extract text from Ion CMI interactive content PDF and grep methodology

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && pdftotext -layout webfetch-1791637596622-t6rprn.pdf ion.txt && wc -l ion.txt && grep -n -i -E "responses|complete enough|administered|moderately well|very well|sponsor|ion interactive|36%|70%|2014|2015|2016" ion.txt | head -40
```

<details><summary>result</summary>

```
647 ion.txt
16:                                                                                                    MAY 2016
17: ion interactive is proud to sponsor this study from Content Marketing Institute. Interactive content is our
41: very well feel dizzy--but exhilarated.
48: Interactive content is like augmented reality for a web page. As Scott Brinker, CTO of ion interactive,
66:  In a June 2014 study conducted by Demand Metric, respondents reported that interactive content
71:  According to Demand Gen Report's 2015 Content Preferences Survey, when respondents were asked,
101: Invitations to participate in the online survey were emailed on February 29, 2016. By March 15, 2016, a total of
182:   of interactive content would increase in   INTERACTIVE CONTENT - 2016 VS. 2015
183:   2016 compared with 2015. About one-
188:   amount they deploy in 2016. In sum, the     Remain   Increase
281:    content enables brands to educate an audience             Note: Multiple responses permitted.
300:                                                              Note: Multiple responses permitted.
329:    Contests                  75%                           36%           3%
362:       
… [truncated, 1346 more chars]
```

</details>

**→ Bash** — Read relevant lines from Ion CMI report

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && sed -n 60,80p ion.txt && sed -n 98,110p ion.txt
```

<details><summary>result</summary>

```
The expansion of the typical website monologue into a true two-way dialogue can give you deeper
      insight
      between watching customers as they stroll through a store and having a conversation with them. The
      information and inputs that consumers provide when using interactive content lead to richer profiles,
      better lead scoring, and improved nurturing of prospects along the buyer's journey.

  In a June 2014 study conducted by Demand Metric, respondents reported that interactive content
      (compared with passive content) increased content sharing (from 17% with passive to 38% with

                                                                                                                                                                                                                                        3

  According to Demand Gen Report's 2015 Content Preferences Survey, when respondents were asked,
      "How have your B2B content consumption habits changed over the past year," 91% agreed that "I prefer
      more interactive/visual content that I can access on demand" (up from 88% the previous year).4

 INTERACTIVE IS INESCAPABLE

 Business benefits 
… [truncated, 1092 more chars]
```

</details>

**→ Bash** — Grep conversion mentions in Ion report

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && sed -n 64,72p ion.txt | cut -c1-300; grep -n -i "conver" ion.txt | head
```

**→ WebSearch** `Facebook Instagram lead ads instant form vs landing page lead quality finance Meta "higher intent" form fields conversion rate study 2025`

**→ WebSearch** `thank you page second conversion step upsell survey share social booking call "thank you page" conversion rate case study lead gen`

<details><summary>result</summary>

```
better lead scoring, and improved nurturing of prospects along the buyer's journey.

  In a June 2014 study conducted by Demand Metric, respondents reported that interactive content
      (compared with passive content) increased content sharing (from 17% with passive to 38% with

                                                                                                                                                                                                                                        3

  According to Demand Gen Report's 2015 Content Preferences Survey, when respondents were asked,
      "How have your B2B content consumption habits changed over the past year," 91% agreed that "I prefer
62:      between watching customers as they stroll through a store and having a conversation with them. The
269:    creating brand awareness (57%). Conversion                Educating the audience ................................ 75%
273:    These results seem to substantiate the growing            Conversion....................................................... 49%
278:    to convert and sell diminishes and the opportunity        Sales/sales enablement ....................
… [truncated, 441 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Facebook Instagram lead ads instant form vs landing page lead quality finance Meta "higher intent" form fields conversion rate study 2025"

Links: [{"title":"Meta Ads Management Services: Why Cheap Leads Cost You the Most in 2026","url":"https://elevarus.com/meta-ads-management/"},{"title":"The Science of Lead Generation With Meta Ads","url":"https://www.jonloomer.com/lead-generation-meta-ads/"},{"title":"Facebook Leads Ads – Optimise for Quality vs Quantity Conversions","url":"https://oneppcagency.co.uk/facebook-ads/facebook-metas-leads-ads-optimisation-lead-quantity-vs-quality/"},{"title":"A Test of Lead Quality","url":"https://www.jonloomer.com/qvt/a-test-of-lead-quality/"},{"title":"create more valuable leads than ever with metas instant forms","url":"https://projecter.workplace.com/business/news/create-more-valuable-leads-than-ever-with-metas-instant-forms"},{"title":"Meta Ads strategy: Lead forms vs website conversions","url":"https://trio-media.co.uk/meta-lead-forms-vs-website-conversions"},{"title":"Meta Ads strategy: Lead forms vs website conversions","url":"https://trio-media.co.uk/?p=1678"},{"title":"Meta Lead Ads Guide: How to Generate Hig
… [truncated, 2631 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "thank you page second conversion step upsell survey share social booking call "thank you page" conversion rate case study lead gen"

Links: [{"title":"thank you pages delight users and increase lead generation","url":"https://blog.spitfireinbound.com/thank-you-pages-delight-users-and-increase-lead-generation"},{"title":"How to find out which (landing) page drives the most conversions as well as the conversion rate? | Community","url":"https://experienceleaguecommunities.adobe.com/adobe-analytics-3/how-to-find-out-which-landing-page-drives-the-most-conversions-as-well-as-the-conversion-rate-93759"},{"title":"How to find out which (landing) page drives the most conversions as well as the conversion rate? | Community","url":"https://experienceleaguecommunities-beta.adobe.com/adobe-analytics-3/how-to-find-out-which-landing-page-drives-the-most-conversions-as-well-as-the-conversion-rate-93759"},{"title":"thank you lead generating machine","url":"https://growandconvert.com/conversion-rate-optimization/thank-you-lead-generating-machine/"},{"title":"experienceleaguecommunities.adobe.com","url":"https://experienceleaguecommunities.adobe.com/t5/adobe-analytics-
… [truncated, 3471 more chars]
```

</details>

**→ WebFetch** https://growandconvert.com/conversion-rate-optimization/thank-you-lead-generating-machine/

> prompt: Details: what was tested on the thank-you page, conversion rates (2.6% to 7.5-11%), sample sizes, time period, lead qualification caveats.

**→ WebFetch** https://www.jonloomer.com/qvt/a-test-of-lead-quality/

> prompt: Describe the test: setup, sample sizes, results comparing instant form vs website landing page lead quality (email engagement), conclusion.

**→ WebSearch** `Gal Rucker "The loss of loss aversion" 2018 Journal of Consumer Psychology; Ruggeri 2020 Nature Human Behaviour prospect theory replication 19 countries loss aversion`

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
**What was tested:** The author's company, SnackNation, replaced the standard thank-you page on its blog with an offer for a free office snack sample box. Visitors who downloaded a content upgrade or signed up for email were sent to a page that tied the post's topic to the product. Some pages also used "message match" copy, while a "catch-all" page did not.

**Time period:** About 10 months of testing, as of the article's writing.

**Results and conversion rates:**
- Standard exit popups for content upgrades converted at about 2.6%. Full-page exit popups converted at 5.58%, which the author reports as roughly 115% better.
- Message-matched thank-you pages converted at about 7.5–11%. The employee engagement page converted at 10.52%, and the employee appreciation page at 7.59%.
- A catch-all thank-you page with no message match converted at 10.67%, but the author found its leads closed at a lower rate.

**Sample size:** The thank-you pages produced 884 leads and over 20 sales. The article does not give per-page sample sizes. The author says the employee appreciation page's data is too limited to be conclusive.

**Lead qualification caveats:**
- Only about 18% of the 884 leads were qu
… [truncated, 295 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Gal Rucker "The loss of loss aversion" 2018 Journal of Consumer Psychology; Ruggeri 2020 Nature Human Behaviour prospect theory replication 19 countries loss aversion"

Links: [{"title":"Start of Main Content","url":"https://www.kellogg.northwestern.edu/academics-research/research/detail/2018/the-loss-of-loss-aversion-will-it-loom-larger/"},{"title":"The Loss of Loss Aversion: Will It Loom Larger Than Its Gain?","url":"https://papers.ssrn.com/abstract=3049660"},{"title":"loss loss aversion paying attention reference points","url":"https://business.columbia.edu/faculty/research/loss-loss-aversion-paying-attention-reference-points"},{"title":"Is Loss Aversion a Fallacy?","url":"https://ritholtz.com/?p=208083"},{"title":"loss aversion","url":"https://atticusli.com/replication-crisis/loss-aversion/"},{"title":"Executive Summary","url":"https://www.kitces.com/blog/loss-aversion-pain-loom-larger-than-gain-gal-rucker-journal-psychology/"},{"title":"Executive Summary","url":"https://www.kitces.com/?p=23365"},{"title":"Academic Journal","url":"https://librarysearch.aut.ac.nz/vufind/EdsRecord/edb,130749900"},{"title":"The Loss of Loss Aversion: Paying Attention
… [truncated, 4854 more chars]
```

</details>

**→ WebFetch** https://www.publichealth.columbia.edu/public-health-now/news/global-study-confirms-influential-theory-behind-loss-aversion

> prompt: Key findings of the Ruggeri et al. replication: number of participants, countries, replication rate, loss aversion finding, date, whether Czech Republic was included.

**→ WebFetch** https://www.kellogg.northwestern.edu/academics-research/research/detail/2018/the-loss-of-loss-aversion-will-it-loom-larger/

> prompt: Abstract: argument about loss aversion, journal, year.

**→ WebSearch** `Iyengar Huberman Jiang 2004 How much choice is too much 401(k) participation drops 10 funds added 1.5% to 2%`

**→ WebSearch** `default value slider anchoring effect savings amount online calculator experiment initial value influences chosen contribution`

<details><summary>result</summary>

```
- **Participants:** 4,098 respondents who completed all questions were included in the final analysis.
- **Countries:** 19 countries, with materials in 13 languages.
- **Replication rate:** About 90% in areas directly testing the core theoretical contrasts of prospect theory.
- **Loss aversion finding:** The study supports the concept that people will accept a smaller sure gain over a larger gamble. Some effects were weaker than in 1979, which the researchers attribute mainly to easier participant access in 2019. Awareness of loss aversion had only a weak effect on decisions.
- **Date:** The article is dated May 18, 2020.
- **Czech Republic:** The article doesn't say whether the Czech Republic was included. It names only the total of 19 countries.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Iyengar Huberman Jiang 2004 How much choice is too much 401(k) participation drops 10 funds added 1.5% to 2%"

Links: [{"title":"how much choice too much contributions 401k retirement plans","url":"https://business.columbia.edu/faculty/research/how-much-choice-too-much-contributions-401k-retirement-plans"},{"title":"Sheena S. Iyengar, Gur Huberman, and Wei Jiang","url":"https://pensionresearchcouncil.wharton.upenn.edu/?p=643"},{"title":"How Much Choice is Too Much?: Contributions to 401(k) Retirement Plans","url":"https://repository.upenn.edu/prc_papers/426"},{"title":"offering versus choice 401k plan participants equity exposure and number funds","url":"https://business.columbia.edu/faculty/research/offering-versus-choice-401k-plan-participants-equity-exposure-and-number-funds"},{"title":"www0.gsb.columbia.edu","url":"https://www0.gsb.columbia.edu/cfusion/faculty/ghuberman/offering%20versus%20choice.pdf"},{"title":"thesis.lib.nccu.edu.tw","url":"https://thesis.lib.nccu.edu.tw/thesis/detail/67970d050494408b8030af356997787f"},{"title":"thesis.lib.nccu.edu.tw","url":"https://thesis.lib.nccu.edu.tw/detail/67970d050494408b8030af356997787f/"},{"title":"Off
… [truncated, 2098 more chars]
```

</details>

<details><summary>result</summary>

```
The page doesn't include an abstract about loss aversion, so I can't give a journal or year for it. It's a landing page for Kellogg faculty research. It says Kellogg faculty publish often in leading academic journals and that their work influences academic fields and policy, but it doesn't name any specific article, author, journal, or publication date.

If you share the text of the article or a link to the specific paper, I can summarize its argument about loss aversion and identify the journal and year.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "default value slider anchoring effect savings amount online calculator experiment initial value influences chosen contribution"

Links: [{"title":"‘Street Cred: an empirical study of anchoring in credit card repayment settings’","url":"https://www.socialscienceregistry.org/trials/3546"},{"title":"www.bi.team","url":"https://www.bi.team/?p=13884"},{"title":"choi et al small cues change savings choices","url":"https://faculty.wharton.upenn.edu/wp-content/uploads/2013/06/choi-et-al-small-cues-change-savings-choices.pdf"},{"title":"Case Study","url":"https://advanced-hindsight.com/?p=6668"},{"title":"P20180108 DP001 Verhallen","url":"https://www.netspar.nl/wp-content/uploads/P20180108_DP001_Verhallen.pdf"},{"title":"Case Study","url":"https://advanced-hindsight.com/case-study/using-defaults-and-anchors-to-help-members-start-saving-for-retirement/"},{"title":"2019 Poster De La Rosa Wendy financial saving anchoring~","url":"https://dlab.sauder.ubc.ca/sjdm/presentations/2019-Poster-De_La_Rosa-Wendy-financial-saving-anchoring~.pdf"},{"title":"English Français Deutsch Italiano 中文","url":"https://cepr.org/publications/dp12142"},{"title":"www.stlouisfed.org","ur
… [truncated, 2577 more chars]
```

</details>

**→ WebFetch** https://faculty.wharton.upenn.edu/wp-content/uploads/2013/06/choi-et-al-small-cues-change-savings-choices.pdf

> prompt: Abstract and main findings: authors, year, design, effect sizes of salient high vs low savings rates on contribution rates, persistence.

**→ WebFetch** https://repository.upenn.edu/prc_papers/426

> prompt: Abstract: sample size, finding about participation vs number of funds offered.

**→ WebFetch** https://www.bi.team/?p=13884

> prompt: Key findings about credit card repayment slider anchoring experiment: sample size, effect sizes, year.

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
- **Sample size:** The page doesn't report it.
- **Effect size:** The page gives no numbers. It says that "All variations of the slider interface significantly increased repayment rates."
- **Year:** The page lists 2016.
```

</details>

<details><summary>result</summary>

```
I can't answer this from the content provided. The text is a raw PDF file dump, mostly compressed binary streams and font data, and the abstract and findings are not readable in it. The truncation also cuts off the body of the document.

The readable metadata gives only partial identification:

- **Journal:** *Journal of Economic Behavior & Organization* (ScienceDirect journal ID 01672681)
- **DOI:** 10.1016/j.jebo.2017.08.010, which suggests a 2017 publication
- **Corresponding author email:** james.choi@yale.edu, which suggests James Choi of Yale, though the full author list isn't readable
- **Title:** not visible in the extracted text

I can't confirm the paper's design, sample, effect sizes, or persistence results from this material, so I won't estimate them.

To get the summary, you could:

1. Paste the abstract and the results section as plain text.
2. Share the DOI (10.1016/j.jebo.2017.08.010) or a link to the article page, if you can access it.

[Binary content (application/pdf, 2.4MB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637664627-dal69s.pdf]
```

</details>

**→ Bash** — Extract abstract of Choi et al small cues paper

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && pdftotext -layout webfetch-1791637664627-dal69s.pdf choi.txt && head -90 choi.txt
```

<details><summary>result</summary>

```
Journal of Economic Behavior & Organization 142 (2017) 378�395

                            Contents lists available at ScienceDirect

Journal of Economic Behavior & Organization

            journal homepage: www.elsevier.com/locate/jebo

Small cues change savings choices

James J. Choi a,, Emily Haisley b, Jennifer Kurkoski c, Cade Massey d

a Yale University and NBER, 165 Whitney Ave., P.O. Box 208200, New Haven, CT 06520-8200, United States
b BlackRock, United States
c Google Inc., United States
d University of Pennsylvania, United States

article info                             abstract

Article history:                         We present evidence from randomized field experiments that 401(k) savings choices are
Received 18 February 2017                significantly affected by one- to two-sentence anchoring, goal-setting, or savings threshold
Received in revised form 10 August 2017  cues embedded in emails sent to employees about their 401(k) plan. Even though these
Accepted 14 August 2017                  cues contain little to no marginal information, cues that make high savings rates salient
Available online 24 August 2017          increased 401(k) 
… [truncated, 5681 more chars]
```

</details>

**→ WebFetch** https://web.dev/articles/lcp

> prompt: What are the LCP thresholds for good / needs improvement / poor, at what percentile are they measured, and for which device types?

**→ WebFetch** https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/

> prompt: Bounce probability increase from 1s to 3s load time (32%), 1s to 5s (90%), sample size of the analysis, date; and the average mobile landing page load time.

**→ WebFetch** https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html

> prompt: Key stats of Deloitte Milliseconds Make Millions; lead generation finding; sample size and period.

<details><summary>result</summary>

```
REDIRECT DETECTED: The URL redirects to a location that was not fetched automatically.

    Original URL: https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/
    Redirect URL (from the server's Location header — server-supplied, not verified): https://business.google.com/en-all/think/
    Status: 301 Moved Permanently

    To complete your request, I need to fetch content from the redirected URL. Please use WebFetch again with these parameters:
    - url: "https://business.google.com/en-all/think/"
    - prompt: "Bounce probability increase from 1s to 3s load time (32%), 1s to 5s (90%), sample size of the analysis, date; and the average mobile landing page load time."
```

</details>

<details><summary>result</summary>

```
**Lead generation finding:** A 0.1-second improvement in mobile site speed reduced the bounce rate on lead generation information pages by 8.3%.

**Sample size:** The page doesn't give a number of sites, visits, or sessions. It says the study covered mobile site data from retail, travel, luxury, and lead generation brands across Europe and the US.

**Study period:** Four weeks.
```

</details>

<details><summary>result</summary>

```
**Good:** LCP of 2.5 seconds or less. The article states, "A good LCP value is 2.5 seconds or less."

**Needs improvement:** Values between 2.5 and 4.0 seconds.

**Poor:** Values above 4.0 seconds.

**Percentile:** The 75th percentile of page loads.

**Device types:** Mobile and desktop, measured separately.
```

</details>

**→ WebSearch** `benchmark Meta Ads Česká republika CPC CPM CPL 2025 oborové finance pojištění agentura průměrné ceny reklamy Facebook Instagram ČR`

**→ WebSearch** `Meta ads cost per lead CEE Czech Republic Poland Hungary CPM CPC benchmark by country 2025 Smart Digital OR AdAmigo OR Revealbot`

<details><summary>result</summary>

```
Web search results for query: "Meta ads cost per lead CEE Czech Republic Poland Hungary CPM CPC benchmark by country 2025 Smart Digital OR AdAmigo OR Revealbot"

Links: [{"title":"Adligator Team·","url":"https://adligator.com/blog/meta-ads-cpm-by-country-benchmarks"},{"title":"Facebook & Instagram ADS | targeting | Modular houses","url":"https://freelancehunt.com/en/showcase/work/facebook-instagram-ads-target/2044010.html"},{"title":"Strategically Target Countries for Quality Leads with Meta Ads","url":"https://www.jonloomer.com/strategically-target-countries-for-quality-leads-with-meta-ads/"},{"title":"Site icon Jon Loomer Digital","url":"https://www.jonloomer.com/strategically-target-countries-for-quality-leads-with-meta-ads/amp/"},{"title":"Meta Ads CPM & CPC Benchmarks by Country in 2026","url":"https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026"},{"title":"facebook ads cost","url":"https://localiq.com/blog/facebook-ads-cost/"},{"title":"2025 Facebook Advertising Expenses Vary: A Comprehensive Guide","url":"https://chartlocal.com/2025/09/10/2025-facebook-advertising-expenses-vary-a-comprehensive-guide/"},{"title":"average cost per lead on facebook july 2026
… [truncated, 3415 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "benchmark Meta Ads Česká republika CPC CPM CPL 2025 oborové finance pojištění agentura průměrné ceny reklamy Facebook Instagram ČR"

Links: [{"title":"Meta ad spend by industry 2025: the ultimate benchmark report","url":"https://wf.trendtrack.io/blog-post/meta-ad-spend-by-industry"},{"title":"Meta ad spend by industry 2025: the ultimate benchmark report","url":"https://www.trendtrack.io/blog-post/meta-ad-spend-by-industry"},{"title":"Meta ad spend by industry 2025: the ultimate benchmark report","url":"https://www.trendtrack.io/fr/blog-post/meta-ad-spend-by-industry"},{"title":"What is a good CPC, CPM, and CTR for Meta ads?","url":"https://creatify.ai/pt/blog/what-is-a-good-cpc-cpm-and-ctr-for-meta-ads"},{"title":"What is a good CPC, CPM, and CTR for Meta ads?","url":"https://creatify.ai/es/blog/what-is-a-good-cpc-cpm-and-ctr-for-meta-ads"},{"title":"Meta ads benchmarks 2026: Average CPM, CPC, and CTR by industry","url":"https://contentstudio.io/blog/meta-ads-benchmarks"},{"title":"What is a good CPC, CPM, and CTR for Meta ads?","url":"https://creatify.ai/id/blog/what-is-a-good-cpc-cpm-and-ctr-for-meta-ads"},{"title":"What is a good CPC, CPM, and CTR 
… [truncated, 4500 more chars]
```

</details>

**→ WebFetch** https://adligator.com/blog/meta-ads-cpm-by-country-benchmarks

> prompt: Czech Republic Facebook and Instagram CPM ranges, Poland, Slovakia, and how the data was derived (estimates vs measured); date; Czech CPC/CPL if given.

**→ WebFetch** https://influee.co/cz/blog/how-much-do-facebook-ads-cost

> prompt: Finance & insurance CPC and CTR numbers, lead campaign CPC and CPL average, data source (LocaliQ?), date, any Czech-specific numbers.

<details><summary>result</summary>

```
**Czech Republic:** Facebook CPM $3.50-$5.00; Instagram CPM $4.50-$6.50.

**Poland:** Facebook CPM $3.50-$5.50; Instagram CPM $4.50-$7.00.

**Slovakia:** Not included in the article.

**Data derivation:** The article doesn't say whether the figures are estimates or measured values. It describes its figures as a way to "consolidate current CPM benchmark data across 40+ countries," but it doesn't explain its sources or methodology.

**Date:** The article is dated 31.03.2026.

**Czech CPC/CPL:** Not given. The article reports only CPM ranges.
```

</details>

<details><summary>result</summary>

```
- **Finance & insurance (traffic campaigns):** CPC is **$1.22** and CTR is **0.98%**. This is the most expensive traffic-campaign category in the table.
- **Lead campaign CPC:** The average is **$1.92** per click.
- **Lead campaign CPL (average):** The article gives no overall average. Its lead cost table lists per-industry values from $3.16 (food and grocery) to $76.71 (dentistry), and finance and insurance doesn't appear in that table.
- **Data source:** LocaliQ, October 2025, covering 21 industries. The article cites the LocaliQ benchmarks page.
- **Article date:** 4 September 2026.
- **Czech-specific numbers:** None. The page contains no Czech Facebook ad benchmarks. The only Czech references are Influee's own marketing details, such as its 3,000+ verified creators in the Czech Republic and UGC videos from €68.
```

</details>

**→ WebSearch** `Facebook Instagram in-app browser landing page views vs link clicks discrepancy slow load percentage lost clicks study autofill unavailable`

**→ WebSearch** `NN/g photos as web content eyetracking users ignore stock photos real people images attention`

<details><summary>result</summary>

```
Web search results for query: "NN/g photos as web content eyetracking users ignore stock photos real people images attention"

Links: [{"title":"Not All Images Are the Same","url":"https://www.nngroup.com/articles/photos-as-web-content/?tab=suite"},{"title":"Not All Images Are the Same","url":"https://www.nngroup.com/articles/photos-as-web-content/"},{"title":"Not All Images Are the Same","url":"https://www.nngroup.com/articles/photos-as-web-content/?pp=env"},{"title":"What Makes Web Images Attractive","url":"https://www.poynter.org/news/what-makes-web-images-attractive"},{"title":"netimperative.com","url":"https://netimperative.com/?p=735"},{"title":"What Kind of Photos Work on the Web?","url":"https://www.selling-stock.com/Article/what-kind-of-photos-work-on-the-web"},{"title":"June 23, 2006","url":"https://www.poynter.org/?p=75924"},{"title":"photographybay.com","url":"https://photographybay.com/tag/websites"},{"title":"Information Today, Inc. Corporate Site KMWorld CRM Media Streaming Media Faulkner Speech Technology DBTA/Unisphere","url":"https://www.infotoday.com/LinkUp/Being-Picture-Perfect-on-the-Web-72037.shtml"},{"title":"the end of commercial stock","url":"https://blog.m
… [truncated, 2478 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Facebook Instagram in-app browser landing page views vs link clicks discrepancy slow load percentage lost clicks study autofill unavailable"

Links: [{"title":"Why Instagram Links Lose 40% of Sales: The In-App Browser Problem","url":"https://blog.bouncy.ai/blog/instagram-links-lose-sales/"},{"title":"www.clickcease.com","url":"https://www.clickcease.com/blog/wp-json/wp/v2/posts/11153"},{"title":"open instragram link in browser","url":"https://linklyhq.com/blog/open-instragram-link-in-browser"},{"title":"Facebook Landing Page","url":"https://rocketlink.io/blog/facebook-landing-page-views-vs-link-clicks-explained"},{"title":"Fix Instagram In-App Browser: Links Not Opening in Safari","url":"https://blog.bouncy.ai/blog/fix-links-not-opening-safari-chrome/"},{"title":"amazon storefront link from instagram","url":"https://link.boo/fix/amazon-storefront-link-from-instagram"},{"title":"Escape the in-app browser","url":"https://u2l.ai/features/open-in-external-browser"},{"title":"Instagramm In App Browser Problem","url":"https://community.shopify.com/t/instagramm-in-app-browser-problem/409392"},{"title":"On this page","url":"https://link.boo/guides/instagram-l
… [truncated, 3688 more chars]
```

</details>

**→ WebFetch** https://developer.chrome.com/blog/autofill-insights-2024

> prompt: Key stats: abandonment with autofill vs without (75% less?), time savings (35%), sample/period, how measured, caveats on correlation.

**→ WebFetch** https://www.nngroup.com/articles/photos-as-web-content/

> prompt: What does it say about stock photos vs real photos, and attention? Publication date and sample.

<details><summary>result</summary>

```
**Key stats (from the Chrome blog, Dec 17, 2024):**

- **Abandonment:** On the average form, users abandon forms 75% less often when they use autofill than when they type exclusively.
- **Time:** Time spent filling forms is about 35% lower with autofill.

**Sample and period:**
- Thousands of address and credit card forms across millions of page loads on the most visited websites in Chrome in the United States.
- The page does not state the time period studied.

**Measurement:**
- "With autofill" means the user autofilled some fields, not necessarily all. Partial autofill was the majority of cases.
- Completion time starts when the user first interacts with the form, by typing or using autofill.
- The authors report the minimum drops observed consistently across verticals such as travel and retail.

**Caveats:**
- The study is correlational. Autofill users may already be faster or less likely to abandon forms, possibly due to greater comfort with online forms or digital literacy.
- The study covers only the US. Success rates can vary by region due to site implementations, address formats, and Chrome's handling of those formats.
- The data is aggregated from users with usage statist
… [truncated, 12 more chars]
```

</details>

<details><summary>result</summary>

```
**Publication date:** The article was published October 31, 2010, and last reviewed August 13, 2026.

**Sample:** The page doesn't give a participant count. It draws on examples from one eyetracking study "we ran earlier this year" (2010), plus unspecified "thousands more" from other studies. The gaze plots shown come from individual test users.

**What it says about stock vs. real photos:**
- **Real people get attention.** Portraits of FreshBooks' actual staff drew strong focus. One user spent 10% more time on the portrait photos than on the biographies, even though the bios took up 316% more space.
- **Stock photos are ignored.** The article says users ignore stock photos of generic people. On a Yale application page, the photo was "pure filler" that users skipped because they wanted information about the process.
- **Decorative images are a poor use of space.** The author argues that "jazzed-up" pages are ignored, and that images attract attention when they carry relevant information, such as product photos or author photos.
```

</details>

**→ WebSearch** `ad–landing page congruence academic study effect on click-through conversion "landing page" "message congruence" online advertising experiment`

**→ WebSearch** `scent of information NN/g information foraging users follow link scent expectation mismatch leave page`

<details><summary>result</summary>

```
Web search results for query: "scent of information NN/g information foraging users follow link scent expectation mismatch leave page"

Links: [{"title":"information scent","url":"https://nngroup.com/articles/information-scent/"},{"title":"information scent","url":"https://wordspy.com/words/information-scent"},{"title":"What makes the scent of a webpage?","url":"https://metafilter.com/205432/What-makes-the-scent-of-a-webpage"},{"title":"Information Scent","url":"https://www.personizely.net/glossary/information-scent"},{"title":"information scent","url":"https://www.switas.com/glossary/information-scent"},{"title":"information scent","url":"https://jakobnielsenphd.substack.com/p/information-scent?open=false"},{"title":"www.doi.org","url":"https://www.doi.org/10.1007/3-540-44963-9_8"},{"title":"Reviewed by Jason Hreha","url":"https://www.thebehavioralscientist.com/?p=9790"},{"title":"Information Scent","url":"https://concepts.dsebastien.net/concept/information-scent/"},{"title":"What is Information scent In formation scent In UX?","url":"https://www.thebehavioralscientist.com/glossary/information-scent"}]

Here's what the search turned up on information scent and why users leave a pa
… [truncated, 2711 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "ad–landing page congruence academic study effect on click-through conversion "landing page" "message congruence" online advertising experiment"

Links: [{"title":"How congruence between ad and landing page affects conversion","url":"https://www.nextafter.com/?p=13009"},{"title":"How increasing landing page congruence affects cost per subscriber","url":"https://www.nextafter.com/?p=11434"},{"title":"Around the Net","url":"https://www.mediapost.com/publications/article/70934"},{"title":"Around the Net","url":"https://www.mediapost.com/publications/article/70934/improve-conversions-by-up-to-60-a-landing-page-c.html"},{"title":"Posted September 04, 2014","url":"https://optimizely.com/2014/09/04/symmetry-in-online-marketing"},{"title":"How to Boost Your Landing Page Conversions","url":"https://10xconversions.substack.com/p/how-to-boost-your-landing-page-conversions"},{"title":"How a Growth Manager Tests with Intelligems","url":"https://www.intelligems.io/resources/blog/how-a-growth-manager-tests-with-intelligems"},{"title":"Impact of streamlining the layout and copy of a landing page","url":"https://www.nextafter.com/?p=16261"},{"title":"Measuring Ad-to-La
… [truncated, 4445 more chars]
```

</details>

**→ WebFetch** https://www.nextafter.com/?p=13009

> prompt: Experiment details: organization, control/treatment, conversion rates, relative difference, confidence, sample size, dates.

**→ WebFetch** https://www.nextafter.com/?p=11434

> prompt: Experiment details: organization, control/treatment, conversion/cost per subscriber, relative difference, confidence, sample size, dates.

**→ WebFetch** https://optimizely.com/2014/09/04/symmetry-in-online-marketing

> prompt: Experiment details: what changed, conversion lift numbers, sample size, significance, company.

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
**Experiment #314: Hoover Institution (Strategika newsletter)**

| Detail | Value |
|---|---|
| **Organization** | Hoover Institution |
| **Timeframe** | 12/01/2014 to 12/25/2014 |
| **Control (C)** | Strategika-branded landing page; 25.0% conversion rate |
| **Treatment (T1)** | Landing page with the same WWII beachhead background as the Facebook ad, plus shortened copy; 34.8% conversion rate |
| **Relative difference** | 39.2% increase in conversion rate |
| **Cost per subscriber** | Reduced by 86%, per NextAfter's summary. No absolute dollar figures are given. |
| **Confidence** | 100.0% |
| **Sample size** | 3,687 total; 163 required for validity. The results are valid. |
| **Other metrics** | No change in traffic or average gift |
```

</details>

<details><summary>result</summary>

```
**Experiment #4854: Dallas Theological Seminary**

- **Organization:** Dallas Theological Seminary
- **Test:** A/B test of a Facebook ad promoting its second course, *Genesis*
- **Control (C):** The original ad, which showed a person studying
- **Treatment (T1):** The ad used the Sistine Chapel image from the landing page, to increase congruence between ad and page
- **Conversion rates:** Control 0.49%; Treatment 0.73%
- **Relative difference:** 47.6%
- **Confidence:** 100.0%
- **Sample size:** 239,607 total, against a required 9,488. The results were judged valid.
- **Dates:** July 1, 2016 to August 29, 2016
```

</details>

**→ WebSearch** `quiz number of questions completion rate data analysis shorter quiz higher completion 5 questions vs 10 questions Typeform OR Involve.me OR Outgrow dataset`

**→ WebSearch** `Typeform completion rate benchmark number of questions form completion rate data report`

<details><summary>result</summary>

```
Web search results for query: "Typeform completion rate benchmark number of questions form completion rate data report"

Links: [{"title":"pmc.ncbi.nlm.nih.gov","url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC8521856/table/T3"},{"title":"whats the average completion rate of a typeform","url":"https://typeform.com/help/whats-the-average-completion-rate-of-a-typeform"},{"title":"What’s the average completion rate of a typeform?","url":"https://help.typeform.com/hc/en-us/articles/360029615911"},{"title":"23 Jan, 2024, 15:18 GMT","url":"https://www.prnewswire.co.uk/news-releases/new-typeform-report-reveals-how-marketers-can-drive-higher-form-completion-rates-302042004.html"},{"title":"Research-driven tips to power up your lead capture forms","url":"https://help.typeform.com/hc/en-us/articles/4406587604116"},{"title":"Research-driven tips to power up your lead capture forms","url":"https://typeform.com/help/a/research-driven-tips-to-power-up-your-lead-capture-forms-4406587604116"},{"title":"how many questions is too many 9854","url":"https://community.typeform.com/build-your-typeform-7/how-many-questions-is-too-many-9854"},{"title":"75+ Online Form Statistics: Completion, Abandonment, a
… [truncated, 2649 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "quiz number of questions completion rate data analysis shorter quiz higher completion 5 questions vs 10 questions Typeform OR Involve.me OR Outgrow dataset"

Links: [{"title":"73000524383 best quiz practices","url":"https://support.credspark.com/support/solutions/articles/73000524383-best-quiz-practices"},{"title":"how to become a quiz master","url":"https://magazine.pinpoll.com/en/how-to-become-a-quiz-master/"},{"title":"Quizzes Analytics","url":"https://support.skilljar.com/hc/articles/38190389530637"},{"title":"pmc.ncbi.nlm.nih.gov","url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC9262006/table/T2"},{"title":"quiz completion rate","url":"https://docs.wisdmlabs.com/article/wisdm-learndash-reports/gutenberg-blocks/quiz-completion-rate/"},{"title":"Have a Question?","url":"https://prehook.com/?p=1502"},{"title":"We were able to analyze following parameters already:","url":"https://help.pinpoll.com/en/articles/6092089-which-parameters-are-giving-information-about-how-good-pinpoll-elements-are-performing"},{"title":"8617091 what do the quiz numbers tell us","url":"https://help.pinpoll.com/en/articles/8617091-what-do-the-quiz-numbers-tell-us"},{"title":"c
… [truncated, 5074 more chars]
```

</details>

**→ WebFetch** https://typeform.com/help/a/research-driven-tips-to-power-up-your-lead-capture-forms-4406587604116

> prompt: Stats about number of questions vs completion, form time, mobile vs desktop; sample sizes; year.

**→ WebFetch** https://support.credspark.com/support/solutions/articles/73000524383-best-quiz-practices

> prompt: The statistical analysis of quiz length vs completion rate: variance explained, sample, other findings about what predicts completion.

<details><summary>result</summary>

```
REDIRECT DETECTED: The URL redirects to a location that was not fetched automatically.

    Original URL: https://www.typeform.com/help/a/research-driven-tips-to-power-up-your-lead-capture-forms-4406587604116
    Redirect URL (from the server's Location header — server-supplied, not verified): https://help.typeform.com/hc/en-us/articles/4406587604116-research-driven-tips-to-power-up-your-lead-capture-forms
    Status: 301 Moved Permanently

    To complete your request, I need to fetch content from the redirected URL. Please use WebFetch again with these parameters:
    - url: "https://help.typeform.com/hc/en-us/articles/4406587604116-research-driven-tips-to-power-up-your-lead-capture-forms"
    - prompt: "Stats about number of questions vs completion, form time, mobile vs desktop; sample sizes; year."
```

</details>

<details><summary>result</summary>

```
The article analyzed quizzes published by CredSpark's clients, comparing the number of questions with the percentage of starters who finished. It found that "the length of a quiz only accounts for a 2.3% variance in the completion rate," so length is a minor factor once someone starts.

- **Sample:** The article doesn't state how many quizzes or participants were included. The charts are images, and their underlying figures aren't described in the text.
- **Difficulty and completion:** The final score explains less than 2% of the variation in completion rates.
- **Difficulty and registration:** The "How did I do?" factor explains less than 5% of the variation in registration completion.
- **Cited research:** The article notes that surveys that are too short generally have lower response rates. It also cites psychological studies finding that challenging tasks bring more satisfaction and improve flow.
```

</details>

**→ WebFetch** https://help.typeform.com/hc/en-us/articles/4406587604116-research-driven-tips-to-power-up-your-lead-capture-forms

> prompt: Stats about number of questions vs completion, form time, mobile vs desktop; sample sizes; year.

**→ WebSearch** `Czech Republic internet users mobile share of traffic smartphone 2025 ČSÚ OR Eurostat Czech households smartphone use percentage investing`

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Czech Republic internet users mobile share of traffic smartphone 2025 ČSÚ OR Eurostat Czech households smartphone use percentage investing"

Links: [{"title":"ICT in households and ICT users","url":"https://csu.gov.cz/ict-in-households-and-ict-users"},{"title":"Mobile internet use in Czechia surges over past decade","url":"https://english.radio.cz/mobile-internet-use-czechia-surges-over-past-decade-8881376"},{"title":"Share of devices used to access the internet in Czechia in 2025","url":"https://statista.com/statistics/1299670/czechia-most-used-internet-devices"},{"title":"Digital 2026: Czechia","url":"https://datareportal.com/reports/digital-2026-czechia"},{"title":"Statistics about Technology & Telecommunications in Czechia","url":"https://www.statista.com/map/europe/czechia/technology-telecommunications?p=2"},{"title":"Survey: Over 80 percent of Czechs use smartphones","url":"https://english.radio.cz/node/8767691"},{"title":"Mobile internet user penetration in Czechia 2012-2029","url":"https://statista.com/statistics/567760/predicted-mobile-internet-user-penetration-rate-in-the-czech-republic"},{"title":"Internet usage in Czechia - statistics & fa
… [truncated, 2259 more chars]
```

</details>

**→ WebSearch** `Guéguen foot-in-the-door technique computer-mediated communication email request compliance small request first experiment`

**→ WebSearch** `"The Foot-in-the-Door Phenomenon 40 and 50 Years Later" direct replication Freedman Fraser Poland Ukraine Social Psychological and Personality Science`

<details><summary>result</summary>

```
Web search results for query: ""The Foot-in-the-Door Phenomenon 40 and 50 Years Later" direct replication Freedman Fraser Poland Ukraine Social Psychological and Personality Science"

Links: [{"title":"Supplemental_Material.pdf (410.17 kB)","url":"https://sage.figshare.com/articles/Supplemental_material_for_The_Foot-in-the-Door_Phenomenon_40_and_50_Years_Later_A_Direct_Replication_of_the_Original_Freedman_and_Fraser_Study_in_Poland_and_in_Ukraine/9767399"},{"title":"do social psychology findings persist over time","url":"https://spsp.org/news-center/character-context-blog/do-social-psychology-findings-persist-over-time"},{"title":"does social psychology persist over half a century a direct repli","url":"https://fis.leuphana.de/en/publications/does-social-psychology-persist-over-half-a-century-a-direct-repli/"},{"title":"community.macmillanlearning.com","url":"https://community.macmillanlearning.com/t5/psychology-blog/the-safe-driving-sign-study-does-it-illustrate-foot-in-the-door/m-p/17153"},{"title":"fcb4280a 914b 43bd 85fd 8766e90ea11b","url":"https://claude.ai/public/artifacts/fcb4280a-914b-43bd-85fd-8766e90ea11b"},{"title":"kups.ub.uni-koeln.de","url":"https://kups.ub.uni-koeln
… [truncated, 1991 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Guéguen foot-in-the-door technique computer-mediated communication email request compliance small request first experiment"

Links: [{"title":"Foot-in-the-door technique","url":"https://en.wikipedia.org/wiki/Foot-in-the-door_technique"},{"title":"archivesic.ccsd.cnrs.fr","url":"https://archivesic.ccsd.cnrs.fr/sic_00870107/document"},{"title":"Repeating “Yes” in a first request and compliance with a later request: The four walls technique","url":"https://new.sbp-journal.com/index.php/sbp/article/view/2542"},{"title":"Fund-Raising on the Web: The Effect of an Electronic Foot-in-the-Door on Donation","url":"https://cbsm.com/articles/32751-fund-raising-on-the-web-the-effect-of-an-electronic-foot-in-the-door-on-donation"},{"title":"Back to Search Start Over","url":"https://searchworks.jioinstitute.edu.in/articles/asx__35578159"},{"title":"default search action","url":"https://dblp.org/pid/34/9942"},{"title":"prosocialness and sequential request compliance techniques limits","url":"https://pure.psu.edu/en/publications/prosocialness-and-sequential-request-compliance-techniques-limits/"},{"title":"Foot-in-the-door technique and computer-mediated communication
… [truncated, 2288 more chars]
```

</details>

**→ WebSearch** `Morningstar experiment fees displayed as dollars vs percentages 3,622 participants only 14% invested all in cheapest fund`

<details><summary>result</summary>

```
Web search results for query: "Morningstar experiment fees displayed as dollars vs percentages 3,622 participants only 14% invested all in cheapest fund"

Links: [{"title":"Morningstar Magazine - June/July 2018 - 24","url":"https://nxtbook.com/nxtbooks/morningstar/magazine_20180607/index.php?startid=24"},{"title":"are cheaper funds better","url":"https://www.benefitspro.com/amp/2016/05/10/are-cheaper-funds-better"},{"title":"Fund Fees at Record Lows but Decline Is Slowing: Morningstar","url":"https://www.etf.com/sections/news/fund-fees-record-lows-decline-slowing-morningstar"},{"title":"Fund Fees at Record Lows but Decline Is Slowing: Morningstar","url":"https://finance.yahoo.com/news/fund-fees-record-lows-decline-120000319.html"},{"title":"Morningstar Study Shows Investors Are Choosing Low-Cost Fund Options","url":"https://401kspecialistmag.com/?p=291"},{"title":"Bringing you live news and features since 2006","url":"https://etfexpress.com/2016/05/06/study-morningstars-russel-kinnel-shows-fund-fees-are-proven-predictors-future-suc/"},{"title":"www.etf.com","url":"https://www.etf.com/node/129629.md"},{"title":"the key to successful mutual fund investing","url":"https://www.fool.com
… [truncated, 1797 more chars]
```

</details>

**→ WebSearch** `popup vs inline form conversion rate data Sumo top-performing popups 3.09% average analysis of 2 million popups; mobile popups Google intrusive interstitial penalty`

<details><summary>result</summary>

```
Web search results for query: "popup vs inline form conversion rate data Sumo top-performing popups 3.09% average analysis of 2 million popups; mobile popups Google intrusive interstitial penalty"

Links: [{"title":"Emailoctopus image","url":"https://emailoctopus.com/blog/how-to-grow-your-email-list-with-pop-up-forms"},{"title":"Popup forms: how to use them without annoying your visitors","url":"https://fomr.io/blog/popup-forms-guide"},{"title":"pop up statistics","url":"https://bdow.com/stories/pop-up-statistics/"},{"title":"Top-Line Popup Statistics for 2026","url":"https://easyappsecom.com/guides/shopify-popup-conversion-statistics-2026.html"},{"title":"Pop-Up Forms: An In-Depth Guide for Marketers in 2024","url":"https://greenlitcontent.com/marketing/pop-up-forms-an-in-depth-guide-for-marketers-in-2024"},{"title":"Top-Line Popup Statistics for 2026","url":"https://easyappsecom.com/guides/shopify-popup-conversion-statistics-2026"},{"title":"The Highest Converting Email Signup Form To Grow Your List","url":"https://mywifequitherjob.com/best-converting-email-signup-forms/"},{"title":"bdow.com","url":"https://bdow.com/?p=6266"},{"title":"inline form vs popup performance","url":"htt
… [truncated, 4265 more chars]
```

</details>

**→ Write** `C:\Users\matus\Desktop\B_project\research\03-conversion-psychology.md`

```
# Conversion & psychology evidence for a mobile finance lead-gen landing page

All sources accessed 2026-10-10. Tags: `VERIFIED` = I opened the page (or extracted the PDF) and it states this; `INFERRED` = my reasoning, or I only saw a search-result snippet / secondary summary. Evidence strength: **Strong** = peer-reviewed, large-sample experiment or multi-company dataset; **Medium** = credible industry dataset or documented A/B test with numbers; **Weak** = opinion, vendor blog, or number without method. Each claim carries `[tag · strength]`.

## Summary
- Finance-specific and Czech-specific evidence is thin. Most lead-gen CRO numbers come from vendors or agencies. The most solid material is general behavioural research (peer-reviewed) plus a few large datasets (Unbounce, Google/Deloitte, GetResponse).
- Benchmark: Unbounce's financial-services landing page median is 8.3%. Investing is much lower (3.9%). Paid social in finance is 9.3% (Facebook 10.1%, TikTok 10.8%, Instagram 15.5%). Finance converts better on mobile (11.5%) than desktop (9%). These are medians over pages that had conversions, so they are probably optimistic.
- No controlled study was found on where to put the email gate for a calculator, quiz or personalised result. Vendor claims point in opposite directions. The claim "interactive converts 2x" traces back to a 2014 self-rating survey (n=185), not measured conversions.
- Form evidence: fewer fields usually helps, but the widely cited Imagescape test rests on 10 vs 26 submissions. A required GDPR-style consent checkbox cut sign-ups by 15% in one test (n=3,040, non-finance). Autofill users abandon forms 75% less, but only correlationally.
- Message match: two documented Facebook-ad tests show +39% to +48% (non-finance). The popular "66%" figure could not be traced to a source.
- Speed: a 0.1 s mobile improvement was associated with a 21.6% higher progression to a form-submission page for lead-gen brands (37 brands, 2019, correlational). Core Web Vitals "good" LCP is 2.5 s or less.
- Fee framing: showing fees in currency helps larger investors but small investors dismiss small amounts. Making fees salient moves choices toward cheaper funds, yet most people still do not pick the cheapest. No study of "CZK lost over 20 years" versus "TER %" on conversion was found.
- Urgency/scarcity raises purchase intent on average (meta-analysis), but it is also widely faked online (157 deceptive countdown timers in one crawl) and finance regulators target inducements. No evidence found on trust backlash either way.
- Czech tone: no finance-specific study on tykání vs vykání. A 2017 survey found about one in five annoyed by tykání in ads (more over 55). The four Czech finance/investing sites I could read all use vykání.
- Post-submit: welcome emails (35.5% open, cross-industry) outperform finance campaigns (20.3% open). Double opt-in cuts sign-up volume about 4x but lifts open and click rates. No evidence found on instant vs delayed delivery of the lead magnet.

## Findings

### Q1. Lead-magnet types
- Quiz funnels (ConvertFlow, 1,063 campaigns, Sept 2026, means): lead capture 7.85% of visitors across formats, 11.28% for landing-page quizzes, 10.45% for embedded; "engagement" conversion 23.84%. No breakdown by industry or length. [VERIFIED · Medium] https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026
- Octane AI (vendor): 29% average quiz email opt-in, 190M+ quiz starts, method undisclosed. [VERIFIED · Weak] https://www.octaneai.com/solutions/lead-generation
- "Interactive 70% vs static 36%" is a Demand Metric June 2014 survey of marketers rating their own content, sponsored by an interactive-content vendor; the later CMI/ion 2016 report (n=341) also relies on what respondents "reported". It is not a measured conversion rate. [VERIFIED (ion/CMI PDF), details of 185 respondents INFERRED · Weak] https://eu-assets.contentstack.com/v3/assets/blt663d10211b43b0ca/bltdf544ccdf7c23d06/67ed4
… [truncated, 29468 more chars]
```

<details><summary>result</summary>

```
File created successfully at: C:\Users\matus\Desktop\B_project\research\03-conversion-psychology.md (file state is current in your context — no need to Read it back)
```

</details>

**→ SubagentHandback**

```
{
 "message": "File: C:\\Users\\matus\\Desktop\\B_project\\research\\03-conversion-psychology.md\n\n5-bullet summary\n- Finance-specific and Czech-specific conversion evidence is thin. Most lead-gen CRO numbers come from vendors or agencies. The solid material is peer-reviewed behavioural research and a few large datasets (Unbounce 41k pages, Google/Deloitte 37 brands, GetResponse).\n- Benchmarks (Unbounce, Jul 2023 to Jul 2024). Financial-services median 8.3%, investing 3.9%, finance paid social 9.3% (Facebook 10.1%, TikTok 10.8%, Instagram 15.5%), finance mobile 11.5% vs desktop 9%. An older edition of the finance page says 3.8%. These medians exclude pages with no conversions, so they probably run optimistic.\n- No controlled study exists on where to put the email gate for a calculator, quiz or personalised result. Vendor claims conflict. The \"interactive converts 2x\" claim is a 2014 self-rating survey (n=185), not measured conversion.\n- Forms and message match:\n  - Fewer fields usually helps, but the famous Imagescape test rests on 10 vs 26 submissions.\n  - A required GDPR-style checkbox cut sign-ups 15% in one test (n=3,040, non-finance).\n  - Autofill users abandon forms 75% less, but only correlationally.\n  - Message match: two Facebook-ad tests show +39% and +48% (non-finance). The \"66%\" figure has no traceable source.\n- Czech tone and post-submit:\n  - No finance-specific study on tykání vs vykání. A 2017 survey (n=513) found about 20% annoyed by tykání, mor
… [truncated, 1371 more chars]
```

<details><summary>result</summary>

```
{"success":true,"message":"Report delivered to your caller."}
```

</details>
