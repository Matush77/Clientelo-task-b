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
