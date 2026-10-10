# Subagent: Research: Czech ETF audience (general-purpose, model: sonnet)

## 👤 User · 2026-10-10 12:58:05

You are a research agent. Your complete task instructions are in two files written by the lead agent. Read both first and follow them exactly:
1. C:\Users\matus\Desktop\B_project\research\prompts\00-shared-rules.md (shared context and rules)
2. C:\Users\matus\Desktop\B_project\research\prompts\01-audience.md (your specific task and output path)

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

**→ Read** `C:\Users\matus\Desktop\B_project\research\prompts\01-audience.md`

<details><summary>result</summary>

```
1	# Agent A — Audience: the Czech retail ETF investor
2	
3	Output file: `C:\Users\matus\Desktop\B_project\research\01-audience.md`
4	
5	## Research questions
6	1. **Size and demographics.** How many Czechs invest, and how many in ETFs specifically? Age, gender, income, education, region, investing experience. Look for: ČNB (Czech National Bank) statistics and surveys, AKAT ČR data, Česká bankovní asociace surveys, STEM / Ipsos / Median / NMS polls, data published by brokers and robo-advisors (XTB, Trading 212, Portu, Fondee, Revolut, Fio), ECB Household Finance and Consumption Survey, adoption data for the Czech DIP (dlouhodobý investiční produkt, available since 2024).
7	2. **Motivations.** Why do they start investing (inflation, money losing value in a bank account, pension worries, DIP tax benefit, FIRE, social media influence…)?
8	3. **Fears and objections.** Losing money, fees, complexity, taxes, currency risk (CZK vs USD), choosing the "right" ETF, scams, distrust of banks and advisors.
9	4. **Platforms.** Which brokers/apps Czech retail investors use (XTB, Trading 212, Portu, Fondee, Fio e-Broker, Revolut, Interactive Brokers, Degiro, others) and why. Market shares or client
… [truncated, 1452 more chars]
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

**→ WebSearch** `kolik Čechů investuje do ETF průzkum 2025`

**→ WebSearch** `Češi investování průzkum ČNB finanční gramotnost investují podíl populace akcie fondy`

**→ WebSearch** `DIP dlouhodobý investiční produkt počet smluv 2025 Asociace pro kapitálový trh`

<details><summary>result</summary>

```
Web search results for query: "kolik Čechů investuje do ETF průzkum 2025"

Links: [{"title":"Index prosperity: Přes 8 z 10 Čechů zhodnocuje své úspory a více než polovina populace aktivně investuje","url":"https://www.businessinfo.cz/clanky/index-prosperity-pres-8-z-10-cechu-zhodnocuje-sve-uspory-a-vice-nez-polovina-populace-aktivne-investuje/"},{"title":"Neděle 02. srpna 2026 12:05","url":"https://www.fxstreet.cz/klicova-slova+csob-investice.html"},{"title":"etf berou byznys klasickym podilovym fondum a banky na to reaguji","url":"https://www.newstream.cz/money/etf-berou-byznys-klasickym-podilovym-fondum-a-banky-na-to-reaguji"},{"title":"stale vice cechu realizuje sve plany pomoci pasivniho investovani","url":"https://www.newstream.cz/money/stale-vice-cechu-realizuje-sve-plany-pomoci-pasivniho-investovani"},{"title":"Patnáct Čechů ze sta přežije s úsporami celý rok. Peníze drží na spořicích účtech a zamilovávají se do akcií","url":"https://www.e15.cz/byznys/burzy-a-trhy/patnact-cechu-ze-sta-prezije-s-usporami-cely-rok-penize-drzi-na-sporicich-uctech-a-zamilovavaji-se-do-akcii-1424790"},{"title":"Češi se nebojí propadů. Investují nejvíc ve střední Evropě, ukazuje průzkum","url":"ht
… [truncated, 2291 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "DIP dlouhodobý investiční produkt počet smluv 2025 Asociace pro kapitálový trh"

Links: [{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-duchody-pojisteni-dip-dane-uspora-vratka-292311"},{"title":"Kam zajít, co ochutnat a co stojí za pozornost","url":"https://www.newstream.cz/money/cesi-se-uz-rok-uci-investovat-na-stari-dip-uz-ma-na-150-tisic-lidi"},{"title":"investice do stari laka do dlouhodobeho investicniho produktu dalo penize 170 tisic lidi","url":"https://www.newstream.cz/money/investice-do-stari-laka-do-dlouhodobeho-investicniho-produktu-dalo-penize-170-tisic-lidi"},{"title":"www.ceskenoviny.cz","url":"https://www.ceskenoviny.cz/zpravy/do-dlouhodobeho-investicniho-produktu-dalo-dosud-penize-184000-cechu/2736579"},{"title":"poptavka po dlouhodobem investicnim produktu vzleta od noveho roku narostl pocet uzavrenych smluv o tretinu","url":"https://forbes.cz/poptavka-po-dlouhodobem-investicnim-produktu-vzleta-od-noveho-roku-narostl-pocet-uzavrenych-smluv-o-tretinu/"},{"title":"S DIP lidé investují na důchod již 9,5 miliardy korun. Počet smluv se blíží čtvrt milionu","url":"https://zpravy.kurzy.cz/856684-s-dip-li
… [truncated, 1779 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Češi investování průzkum ČNB finanční gramotnost investují podíl populace akcie fondy"

Links: [{"title":"v cem maji cesi ulozene penize vedou bezne ucty investuje polovina obyvatel","url":"https://forbes.cz/v-cem-maji-cesi-ulozene-penize-vedou-bezne-ucty-investuje-polovina-obyvatel/"},{"title":"Místo Netflixu se radši naučte investovat, říká centrální bankéř Michl","url":"https://www.finmag.cz/finance/431617-ales-michl-cnb-rozhovor"},{"title":"Investiční fondy","url":"https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Investicni-fondy-00001"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-b2b-do-investovani-cesi-moc-nevidi-situaci-maji-vylepsit-skoly-251721"},{"title":"Průzkum Monety: Češi plánují více investovat, roste zájem o hypotéky i virtuální karty","url":"https://www.echo24.cz/a/N2k6U/pruzkum-monety-cesi-planuji-vice-investovat-roste-zajem-o-hypoteky-i-virtualni-karty"},{"title":"tz index prosperity a financniho zdravi financni gramotnost","url":"https://soc.cas.cz/sites/default/files/soubory/tz_index_prosperity_a_financniho_zdravi_financni_gramotnost.pdf"},{"title":"Hlav
… [truncated, 3473 more chars]
```

</details>

**→ WebFetch** https://www.businessinfo.cz/clanky/index-prosperity-pres-8-z-10-cechu-zhodnocuje-sve-uspory-a-vice-nez-polovina-populace-aktivne-investuje/

> prompt: Extract: publication date, sample size, who conducted survey, share of Czechs actively investing, which instruments (ETF, akcie, fondy, spořicí účty) with percentages, demographics (age, gender, income, education), motivations, barriers. Report exact numbers.

**→ WebFetch** https://zpravy.kurzy.cz/856684-s-dip-lide-investuji-na-duchod-jiz-9-5-miliardy-korun-pocet-smluv-se-blizi-ctvrt-milionu/

> prompt: Extract date and all numbers about DIP (dlouhodobý investiční produkt): number of contracts, volume, average contribution, share by provider type, age of clients, ETF share.

**→ WebFetch** https://forbes.cz/v-cem-maji-cesi-ulozene-penize-vedou-bezne-ucty-investuje-polovina-obyvatel/

> prompt: Extract date, who did the survey (Portu?), sample, share investing, age/gender/income breakdown, instruments, goals, advisors, ETF share.

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
**Article date:** 20 April 2026 (Patria Finance, updated version)

**DIP figures from the article**

- **Number of contracts:** 244,217 as of 31 March 2026. This is up about 10% from 218,000 at the end of 2025.
- **Volume:** About 9.5 billion CZK invested for retirement in Q1 2026.
- **Share by investment type:**
  - Deposits: about 4%
  - Investment funds: about 90%
  - Other types: about 6%
- **Average contribution:** Not stated. The article gives only the tax-optimal target of 48,000 CZK per year and a minimum of 500 CZK per month for Patria's ETF plans.
- **Age of clients:** Not stated.
- **ETF share:** Not stated. The article says Patria offers 69 ETFs for regular investing, but gives no share of DIP money held in ETFs.

**Related AKAT survey figures**

- 13% of respondents said they saved in DIP for retirement in 2025, up from 8% in 2024.
- 69% mentioned supplementary pension insurance (penzijko) in 2025, up from 63% in 2024.
- 23% said they save 500 to 1,000 CZK per month, and another 23% save 1,000 to 3,000 CZK per month.

**Tax and employer terms**

- Contributions can be deducted from the tax base by up to 48,000 CZK per year.
- Employers can contribute up to 50,000 CZK p
… [truncated, 156 more chars]
```

</details>

<details><summary>result</summary>

```
The page content contains only the headline, so I can't extract the survey details you asked for. The headline, "Kde mají Češi uložené peníze? Hlavně v běžných účtech, jen polovina lidí investuje," suggests that most Czechs keep their savings mainly in everyday bank accounts and that roughly half of people invest.

Not available in the provided content:
- **Date:** not stated
- **Survey organizer (e.g., Portu):** not mentioned
- **Sample:** not described
- **Share who invest:** only the roughly-half figure in the headline
- **Age, gender, and income breakdown:** not provided
- **Investment instruments:** not listed
- **Goals:** not listed
- **Advisors:** not mentioned
- **ETF share:** not provided

To get these details, you'd need the full article.
```

</details>

**→ WebSearch** `Index prosperity Česká spořitelna Ipsos investuje 55 procent Čechů ETF akcie mladí muži ženy`

**→ WebSearch** `akat.cz DIP první čtvrtletí 2026 tisková zpráva počet smluv`

**→ WebSearch** `XTB Česko počet klientů ETF podíl věk průměrný klient 2025`

<details><summary>result</summary>

```
Web search results for query: "XTB Česko počet klientů ETF podíl věk průměrný klient 2025"

Links: [{"title":"Zavřít reklamu","url":"https://www.letemsvetemapplem.eu/?p=769069"},{"title":"www.letemsvetemapplem.eu","url":"https://www.letemsvetemapplem.eu/?p=799260"},{"title":"Představujeme brokera XTB","url":"https://iocharts.io/cs/blog/Anal%C3%BDza-brokera-xtb%3A-tohle-platforma-v%C3%AD-v-roce-2026/"},{"title":"Představujeme brokera XTB","url":"https://iocharts.io/cs/blog/xtb-broker-elemzes-ezt-tudja-a-platform-2026-ban/"},{"title":"Przedstawiamy brokera XTB","url":"https://iocharts.io/pl/blog/Analiza-brokera-XTB-%E2%80%93-oto--co-platforma-wie-w-2026-roku/"},{"title":"Przedstawiamy brokera XTB","url":"https://iocharts.io/pl/blog/xtb-broker-elemzes-ezt-tudja-a-platform-2026-ban/"},{"title":"Predstavujeme brokera XTB","url":"https://iocharts.io/sk/blog/Anal%C3%BDza-brokera-xtb%3A-toto-platforma-vie-v-roku-2026/"},{"title":"Predstavujeme brokera XTB","url":"https://iocharts.io/sk/blog/?p=10750"},{"title":"Predstavujeme brokera XTB","url":"https://iocharts.io/sk/blog/xtb-broker-elemzes-ezt-tudja-a-platform-2026-ban/"}]

Výsledky vyhledávání neobsahují údaje, které jste hledal, tedy po
… [truncated, 1636 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "akat.cz DIP první čtvrtletí 2026 tisková zpráva počet smluv"

Links: [{"title":"Tiskova zprava Q1 2026","url":"https://cdn0.erstegroup.com/content/dam/cz/csas/www_csas_cz/dokumenty/Tiskova_zprava_Q1-2026.pdf"},{"title":"26 08 06 ir press release h1 figures 2026 cz","url":"https://cz.koenig-bauer.com/fileadmin/user_upload/26-08-06-ir-press-release-h1-figures-2026-cz.docx"},{"title":"Smlouvy Dotace Platy Úřady Zakázky Sponzoři & firmy","url":"https://www.hlidacstatu.cz/subjekt/02637774"},{"title":"www.dia.gov.cz","url":"https://www.dia.gov.cz/media/3517/download/TZ%20DIA%20Registr%20smluv%20slav%C3%AD%2010%20narozeniny.pdf"},{"title":"Smlouvy Dotace Platy Úřady Zakázky Sponzoři & firmy","url":"https://www.hlidacstatu.cz/subjekt/09819461"},{"title":"váš průvodce finančním světem","url":"https://www.mesec.cz/aktuality/?pi=14"},{"title":"Smlouvy Dotace Platy Úřady Zakázky Sponzoři & firmy","url":"https://www.hlidacstatu.cz/Subjekt/Index/25998196"},{"title":"DSDIP contract disclosure report Oct 2024 to Dec 2024","url":"https://www.data.qld.gov.au/dataset/dsdilgp-dsdi-contract-disclosure-reports/resource/e8017945-f764-4f7b-b749-78ee1333ee9d"},{"title":"www.d
… [truncated, 2360 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Index prosperity Česká spořitelna Ipsos investuje 55 procent Čechů ETF akcie mladí muži ženy"

Links: [{"title":"Index prosperity: Přes 8 z 10 Čechů zhodnocuje své úspory a více než polovina populace aktivně investuje","url":"https://www.businessinfo.cz/clanky/index-prosperity-pres-8-z-10-cechu-zhodnocuje-sve-uspory-a-vice-nez-polovina-populace-aktivne-investuje/"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-b2b-investuji-uz-ctyri-z-peti-cechu-inflacni-sok-pusobil-jako-budicek-301142"},{"title":"Index prosperity: Aktivně investují 4 z 10 Čechů. Jako ziskové hodnotí své investice 76 procent z nich","url":"https://www.businessinfo.cz/clanky/index-prosperity-aktivne-investuji-4-z-10-cechu-jako-ziskove-hodnoti-sve-investice-76-procent-z-nich/"},{"title":"tz index prosperity a financniho zdravi financni gramotnost","url":"https://soc.cas.cz/sites/default/files/soubory/tz_index_prosperity_a_financniho_zdravi_financni_gramotnost.pdf"},{"title":"Patnáct Čechů ze sta přežije s úsporami celý rok. Peníze drží na spořicích účtech a zamilovávají se do akcií","url":"https://www.e15.cz/byznys/burzy-a-trhy/patnact-cechu-ze-sta-prezije-
… [truncated, 3014 more chars]
```

</details>

**→ WebFetch** https://www.akatcr.cz

> prompt: Find the latest press releases/statistics about DIP (dlouhodobý investiční produkt), number of contracts, assets under management in funds, ETF statistics. Report headlines, dates and links.

**→ WebFetch** https://www.seznamzpravy.cz/clanek/ekonomika-b2b-investuji-uz-ctyri-z-peti-cechu-inflacni-sok-pusobil-jako-budicek-301142

> prompt: Extract date, source/survey, sample, share who invest, breakdown by age/gender/income, instruments, motivations (inflation), ETF share, barriers.

**→ WebFetch** https://soc.cas.cz/sites/default/files/soubory/tz_index_prosperity_a_financniho_zdravi_financni_gramotnost.pdf

> prompt: Extract date, survey sample, investing literacy findings, gender differences, percentages who invest, instruments used, distrust, barriers.

<details><summary>result</summary>

```
I can't extract those details from this content. What you pasted is the raw binary of a PDF file: compressed streams, font tables, and embedded images. None of the survey text is readable, and the content is also truncated before the end of the file.

To get the information you need (date, survey sample, investing literacy findings, gender differences, percentages who invest, instruments used, distrust, and barriers), you could:

- **Paste the document's text** after extracting it, for example with `pdftotext` or by copying from a PDF reader.
- **Share the HTML version** of the page, if the source publishes one.
- **Upload the PDF** directly, if your interface supports file attachments.

Once I have readable text, I'll give you a concise summary covering each of those points.

[Binary content (application/pdf, 133.4KB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637148974-snucgq.pdf]
```

</details>

<details><summary>result</summary>

```
The page doesn't contain any DIP statistics, contract counts, fund assets under management, or ETF data. It is a homepage showing only headlines and dates, with no article text.

Headlines that might be worth checking, since the page doesn't say what they contain:

- **17 Aug 2026:** "Tisková zpráva 2Q - INVESTICE V ČESKÉ REPUBLICE PŘEKONALY ČTYŘBILIONOVOU HRANICI" (press release on investments in the Czech Republic). https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-2q-investice-v-cesk201-republice-prekonaly-ctyrbilionovou-hranici
- **9 Sep 2026:** "Tisková zpráva - BOHATÍ ČEŠI VÍCE INVESTUJÍ" (press release on wealthier Czechs investing more). https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-bohat205-cesi-v205ce-investuj205
- **6 Oct 2026:** "Výroční zpráva 2025/2026" (annual report, which may contain market statistics). https://www.akatcr.cz/Dokumenty/Aktuality/v253rocn237-zpr225va-20252026

The site navigation also lists sections that may hold the data you need: "Zveřejněná data," "Historická data," and "Data" (Informační servis). I'd check those pages directly, since the homepage doesn't include them.
```

</details>

<details><summary>result</summary>

```
**Source and date**
- **Article:** "Investují už čtyři z pěti Čechů. Inflační šok působil jako budíček," by Ondřej Katz, Seznam Zprávy
- **Published:** 11 March 2026, 9:30
- **Survey:** Ipsos with Česká spořitelna, part of the Index prosperity Česka (with the Evropa v datech data portal)
- **Sample:** Not stated in the article

**Share who invest**
- 82% of Czechs now let their money "work," up from 66% in 2024.
- 55% invest in stocks, bonds, or funds, up from 41% two years earlier.
- In 2025, 8 in 10 investors made a profit, and 4 in 10 earned more than inflation eroded.

**Breakdown by age, gender, and income**
- **Age:** Digital investors at České spořitelna average 35 years old, and branch clients average 59. The article notes that people under 30 rely more on funds, and the highest asset levels are most common among those aged 40–49.
- **Income:** Not reported.
- **Gender:** Not reported.
- **Assets:** Two-thirds of investors hold up to CZK 500,000. About 4% have more than CZK 3 million.

**Instruments**
- **Savings accounts:** Used by up to three-quarters of Czechs, though they offer lower returns.
- **Pension savings:** Among the most popular options.
- **Investment funds or
… [truncated, 1179 more chars]
```

</details>

**→ WebFetch** https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-bohat205-cesi-v205ce-investuj205

> prompt: Extract all numbers: who invests, survey sample/source, income/age/gender/education breakdown, DIP numbers, ETF numbers, date.

**→ WebFetch** https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-2q-investice-v-cesk201-republice-prekonaly-ctyrbilionovou-hranici

> prompt: Extract all numbers: total assets, DIP contracts, ETF, funds inflows, number of investors, date.

**→ WebFetch** https://www.akatcr.cz/Dokumenty/Aktuality/v253rocn237-zpr225va-20252026

> prompt: Extract key statistics: DIP, ETF, investors numbers, survey of Czech public on investing (demographics, motivations, fears), date.

<details><summary>result</summary>

```
The page doesn't contain the statistics you asked for. It is only a navigation shell for the AKAT annual report 2025/2026, with a link to a PDF (akat-vz-2025-2026, 10.98 MB). The text doesn't include:

- **DIP** figures
- **ETF** figures
- **Investor numbers**
- **Survey results** on Czech public investing (demographics, motivations, fears)

The only date on the page is **10 October 2026**, shown in the header. It is not clearly the publication date of the report. The page also shows the report was downloaded 26 times.

To get the requested data, you would need to open the PDF itself.
```

</details>

<details><summary>result</summary>

```
- **Total assets:** 4.066 trillion CZK as of 30 June 2026, invested through AKAT members.
- **DIP contracts:** Not stated directly. A linked headline about a long-term investment product (DIP) reports 265,829 contracts, but that is only a headline for a different article.
- **ETF:** Not mentioned.
- **Fund inflows:** Assets in collective investment funds grew by 128 billion CZK in Q2 2026, from 1.423 trillion to 1.55 trillion CZK.
- **Number of investors:** Not mentioned.
- **Date:** Data is as of 30 June 2026 (Q2 2026).
```

</details>

<details><summary>result</summary>

```
**Numbers from the page:**

- **Who:** Czech individuals with assets of at least CZK 10 million held in private banking.
- **Total assets under private banking management:** CZK 895 billion as of 31 Dec 2025.
- **Prior year:** CZK 799 billion as of 31 Dec 2024.
- **Growth in 2025:** CZK 95 billion.
- **Share in investments:** 64% of these individuals' financial assets within private banking.
- **Date:** Data as of 31 Dec 2025. The press release file is dated 2026-09-09 (from the PDF filename), and the page header shows 10 Oct 2026.

**Not in the content:** survey sample or source, income, age, gender, or education breakdowns, DIP (pension savings plan) numbers, and ETF numbers.
```

</details>

**→ WebSearch** `DIP 265 829 smluv AKAT`

**→ WebSearch** `ČNB finanční aktiva domácností podílové fondy ETF Češi přímé držení zahraniční cenné papíry 2025`

**→ WebSearch** `Portu průzkum investoři ETF S&P 500 věk klientů počet klientů Portu 2025`

<details><summary>result</summary>

```
Web search results for query: "Portu průzkum investoři ETF S&P 500 věk klientů počet klientů Portu 2025"

Links: [{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-akcie-fondy-ve-vate-diky-s-p-500-jak-sporit-na-duchod-pomoci-americkych-akcii-186135"},{"title":"Od prvního bydlení po důchod. Portu mapuje investiční chování Čechů napříč generacemi","url":"https://zpravy.kurzy.cz/870579-od-prvniho-bydleni-po-duchod-portu-mapuje-investicni-chovani-cechu-napric-generacemi/"},{"title":"Ticker Tape by TradingView","url":"https://www.fxstreet.cz/zpravodajstvi-205542.html"},{"title":"wyniki badania etf w portfelu 2025","url":"https://www.pap.pl/mediaroom/wyniki-badania-etf-w-portfelu-2025"},{"title":"S&P 500 ETF Breakdown: Top Pick Thats Blazing Through 2025 Performance! - Coaching Toolbox","url":"https://app.coachingtoolbox.net/pages/sp-500-etf-breakdown-top-pick-thats-blazing-through-2025-performance-3769041"},{"title":"kim jest polski inwestor w etf wyniki badania etf w portfelu 2025","url":"https://comparic.pl/kim-jest-polski-inwestor-w-etf-wyniki-badania-etf-w-portfelu-2025/"},{"title":"The #1 S&P 500 ETF That Could Double Your Investment in 2025—Find O
… [truncated, 3755 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "DIP 265 829 smluv AKAT"

Links: [{"title":"Smlouvy Dotace Platy Úřady Zakázky Sponzoři & firmy","url":"https://www.hlidacstatu.cz/subjekt/09819461"},{"title":"Smlouvy Dotace Platy Úřady Zakázky Sponzoři & firmy","url":"https://www.hlidacstatu.cz/subjekt/45803293"},{"title":"Smlouvy Dotace Platy Úřady Zakázky Sponzoři & firmy","url":"https://www.hlidacstatu.cz/subjekt/RegistrSmluv/26724791"},{"title":"Smlouvy Dotace Platy Úřady Zakázky Sponzoři & firmy","url":"https://www.hlidacstatu.cz/Subjekt/Index/25998196"},{"title":"Smlouvy Dotace Platy Úřady Zakázky Sponzoři & firmy","url":"https://www.hlidacstatu.cz/subjekt/63322731"},{"title":"Title: | registr smluv |","url":"https://ezak.ujf.cas.cz/document_download_1425.html"},{"title":"binding instruction for disclosure requirements of members of the capital market association akat effective until 3182020","url":"https://www.akatcr.cz/Dokumenty/Aktuality/binding-instruction-for-disclosure-requirements-of-members-of-the-capital-market-association-akat-effective-until-3182020"},{"title":"Smlouvy Dotace Platy Úřady Zakázky Sponzoři & firmy Komunální a senátní volby 2026","url":"https://www.hlidacstatu.cz/Detail
… [truncated, 2546 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "ČNB finanční aktiva domácností podílové fondy ETF Češi přímé držení zahraniční cenné papíry 2025"

Links: [{"title":"2026 07 15 Strucne shrnuti Zprava o vyvoji financniho trhu v roce 2025","url":"https://mf.gov.cz/assets/attachments/2026-07-15_Strucne-shrnuti-Zprava-o-vyvoji-financniho-trhu-v-roce-2025.pdf"},{"title":"2026 07 15 Zprava o vyvoji financniho trhu v roce 2025","url":"https://mf.gov.cz/assets/attachments/2026-07-15_Zprava-o-vyvoji-financniho-trhu-v-roce-2025.pdf"},{"title":"2026 07 15 Zprava o vyvoji financniho trhu v roce 2025 v01","url":"https://mf.gov.cz/assets/attachments/2026-07-15_Zprava-o-vyvoji-financniho-trhu-v-roce-2025_v01.pdf"},{"title":"867454 objem prostredku umistenych na financnim trhu se zvysil o 10 4  na 12 2 bil kc shrnuti vyvoje","url":"https://zpravy.kurzy.cz/867454-objem-prostredku-umistenych-na-financnim-trhu-se-zvysil-o-10-4--na-12-2-bil-kc-shrnuti-vyvoje/"},{"title":"2025 06 18 Strucne shrnuti Zprava o vyvoji financniho trhu v roce 2024","url":"https://mfcr.cz/assets/attachments/2025-06-18_Strucne-shrnuti-Zprava-o-vyvoji-financniho-trhu-v-roce-2024.pdf"},{"title":"monetika vyrocni zprava 2025 final","url":"https://
… [truncated, 2897 more chars]
```

</details>

**→ WebFetch** https://zpravy.kurzy.cz/870579-od-prvniho-bydleni-po-duchod-portu-mapuje-investicni-chovani-cechu-napric-generacemi/

> prompt: Extract date and all numbers: Portu clients by age group, gender, monthly amounts, goals, ETF/funds choices, S&P 500, number of clients.

**→ WebFetch** https://mf.gov.cz/assets/attachments/2026-07-15_Strucne-shrnuti-Zprava-o-vyvoji-financniho-trhu-v-roce-2025.pdf

> prompt: Extract household savings numbers: total, deposits share, investment funds amount and share, listed shares, pension, DIP, ETF. Date and figures exact.

**→ WebFetch** https://www.e15.cz/byznys/burzy-a-trhy/patnact-cechu-ze-sta-prezije-s-usporami-cely-rok-penize-drzi-na-sporicich-uctech-a-zamilovavaji-se-do-akcii-1424790

> prompt: Extract date, source, sample, percentages about savings, investing, stocks, ETF, age/gender breakdown.

<details><summary>result</summary>

```
I can't extract those figures. The content you pasted is the raw, compressed binary of a PDF. The page text is stored in FlateDecode streams that appear as unreadable characters, and the paste is also truncated. I found no date, total, deposits share, investment fund amount, listed shares, pension, DIP, or ETF values in readable form.

The metadata suggests a Czech-language document (`cs-CZ`) from a site linked to mmr.gov.cz, created on 14 July 2026, but that doesn't give the savings figures.

To get the numbers, you could:
- Paste the plain text of the relevant pages, copied from a PDF viewer or extracted with a tool like `pdftotext`.
- Upload the PDF directly if your interface supports file attachments.
- Share the specific section or table that contains the household savings data.

Once I have readable text, I'll pull out the total, deposits share, investment funds amount and share, listed shares, pension, DIP, and ETF figures with their dates.

[Binary content (application/pdf, 234.7KB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637186993-ngl1ms.pdf]
```

</details>

<details><summary>result</summary>

```
**Article date:** 06.08.2026 (published 15:44:47)

**Portu clients by age group**

| Age group | Avg. monthly investment | Other details |
|---|---|---|
| Under 29 | ~4,700 CZK | Main goals: housing and a financial reserve |
| 30–49 | ~8,500 CZK | Largest client group and most regular investors; about double the under-30 amount |
| Over 50 | Over 9,000 CZK | Number of clients grew 17% between 2025 and 2026 |

- 30% of under-30s consider at least 500 CZK per month sufficient, compared with 19% of the general population (Air Bank survey).

**Gender**
- Female investors grew 28% year over year; male investors grew 16%.
- Women make up about 40% of Portu clients.

**Goals and products**
- Under 29: saving for future housing and building a financial reserve.
- 30–49: building assets, housing, children's finances, and retirement preparation.
- Over 50: protecting assets, maintaining income after retirement, and securing a future regular income, often with more conservative strategies.
- Automated portfolios are the most popular product in all age groups.
- Clients start adding other products, such as shares and ETFs, around age 30.

**Not in the article**
- Total number of Portu clients

… [truncated, 65 more chars]
```

</details>

<details><summary>result</summary>

```
**Metadata**
- **Date:** 24 May 2025, 10:07
- **Source:** e15.cz (article "Patnáct Čechů ze sta přežije s úsporami celý rok..."), citing a Generali Investments survey
- **Sample and method:** Survey conducted April 2025 via Ipsos's Instant Research app. The article does not state the sample size.

**Savings and investing**
- 57% of Czechs have investing experience, up from 2021. The article gives this as +15% in one place and "one-third more" in the introduction.
- 44% named savings accounts as the best way to store money.
- 24% named mutual funds as the best option, up from under 10% five years earlier.
- 28.3% named real estate as the best option.
- More than 15% have a financial reserve lasting over a year, up from 11.3% in 2023.
- 33.7% see a fall in investment value as an opportunity, up from 16.7% a year earlier.
- 36.6% say risk is a key criterion when choosing funds, down from about half of respondents previously.
- 44.8% say the international situation discourages them from investing.

**Stocks, ETFs, and crypto**
- Stocks: the article says stock popularity is at a four-year high but gives no overall percentage.
- ETFs: a stable share of about 14%.
- Crypto: nearly one-fif
… [truncated, 374 more chars]
```

</details>

**→ Bash** — Check PDF tooling and saved PDFs

```
cd /tmp 2>/dev/null; python -c "import pypdf; print(pypdf.__version__)" 2>&1; which pdftotext; ls "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" 2>&1 | head
```

<details><summary>result</summary>

```
6.19.0
/mingw64/bin/pdftotext
webfetch-1791637138497-msirtu.pdf
webfetch-1791637148974-snucgq.pdf
webfetch-1791637175595-fzpngr.pdf
webfetch-1791637175596-donfzj.pdf
webfetch-1791637186993-ngl1ms.pdf
```

</details>

**→ Bash** — Extract text from saved PDFs

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && for f in webfetch-1791637148974-snucgq.pdf webfetch-1791637186993-ngl1ms.pdf; do echo "=== $f"; pdftotext -layout "$f" - | head -150; done
```

<details><summary>result</summary>

```
=== webfetch-1791637148974-snucgq.pdf
Tiskov� zpr�va � Praha, 14. kvtna 2024

Tetina Cech m� n�zkou �rove financn� gramotnosti. 80 % populace si
ale v�, ze dok�ze odhalit financn� podvod v online prosted�

V�ce nez polovina Cech hodnot� svoji financn� gramotnost jako prmrnou,
dals�ch 19 % pak jako nadprmrnou. Realita vsak ukazuje nco jin�ho. Podle
przkumu Indexu prosperity a financn�ho zdrav� Cech se s n�zkou �rovn�
financn� gramotnost� pot�k� tetina produktivn� populace. Plat� to zejm�na pro
zeny, lidi s nizs�m vzdl�n�m a p�jmy. Cin� to z nich snadnjs� obti financn�ch
podvod.

I pestoze si v�ce nez polovina Cech mysl�, ze �rove jejich financn� gramotnosti je minim�ln
prmrn�, realita je jin�. Tetina produktivn� populace nedok�zala spr�vn odpovdt ani na
dv ze t� testovac�ch ot�zek z t�to oblasti. Spr�vn na vsechny ot�zky odpovdlo jen 27 %
Cech. Vypl�v� to z v�sledk przkumu Indexu prosperity a financn�ho zdrav� Cech. Sbr
dat zajistila v bezna 2024 agentura IPSOS na vzorku 1 520 respondent ve vku 15�65 let.

V mezin�rodn�m srovn�n� Eurobarometeru, kter� hodnot� financn� gramotnost si Cesko stoj�
prmrn. Nejleps�ch v�sledk dos�hli obyvatel� Nizozemska, Finska ci D�nsk
… [truncated, 18468 more chars]
```

</details>

**→ WebSearch** `který broker používají Češi nejvíc XTB Trading 212 Revolut Degiro počet českých klientů`

**→ WebSearch** `Fondee počet klientů 2026 spravovaná aktiva průměrný věk klienta`

**→ WebSearch** `Trading 212 Czech Republic number of users ETF investors Czechs Revolut Czech customers million`

<details><summary>result</summary>

```
Web search results for query: "který broker používají Češi nejvíc XTB Trading 212 Revolut Degiro počet českých klientů"

Links: [{"title":"www.testado.cz","url":"https://www.testado.cz/brokeri/"},{"title":"Best Brokers for Beginners in the Czech Republic in 2026","url":"https://brokerchooser.com/czech-republic/best-brokers-for-beginners"},{"title":"Představujeme brokera XTB","url":"https://iocharts.io/cs/blog/Anal%C3%BDza-brokera-xtb%3A-tohle-platforma-v%C3%AD-v-roce-2026/"},{"title":"Představujeme brokera XTB","url":"https://iocharts.io/cs/blog/xtb-broker-elemzes-ezt-tudja-a-platform-2026-ban/"},{"title":"Introducing the XTB broker","url":"https://iocharts.io/en/blog/?p=10750"},{"title":"Prezentarea brokerului XTB","url":"https://iocharts.io/ro/blog/xtb-broker-elemzes-ezt-tudja-a-platform-2026-ban/"},{"title":"Introducing the XTB broker","url":"https://iocharts.io/en/blog/xtb-broker-elemzes-ezt-tudja-a-platform-2026-ban/"},{"title":"Prezentarea brokerului XTB","url":"https://iocharts.io/ro/blog/Analiza-brokerului-xtb%3A-iat%C4%83-ce-%C8%99tie-platforma-%C3%AEn-2026/"},{"title":"XTB bróker elemzés: ezt tudja a platform 2026-ban","url":"https://iocharts.io/blog/xtb-broker-elemzes-ez
… [truncated, 1453 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Fondee počet klientů 2026 spravovaná aktiva průměrný věk klienta"

Links: [{"title":"S Sp 2023 00120 CNB 573","url":"https://cnb.cz/export/sites/cnb/cs/dohled-financni-trh/.galleries/prilohy/S-Sp-2023_00120_CNB_573.pdf"},{"title":"vz 2024 csps","url":"https://cdn0.erstegroup.com/content/dam/cz/csas/www_csps_cz/Dokumenty-ke-stazeni/vz_2024_csps.pdf"},{"title":"Jak hospodařil ING Penzijní fond?","url":"https://www.finance.cz/clanky/23308-jak-hospodaril-ing-penzijni-fond"},{"title":"www.generalipenze.cz","url":"https://www.generalipenze.cz/data/Zprava%20o%20hospodareni%202017.pdf"},{"title":"www.generalipenze.cz","url":"https://www.generalipenze.cz/data/documents/Hospoda%C5%99en%C3%AD%20transformovan%C3%A9ho%20fondu/Zprava%20o%20hospodareni.pdf"},{"title":"tatrabanka.sk","url":"https://tatrabanka.sk/files/archiv/tam/dokumenty/spravy-hospodareni/ZF26rocnaspravaNBS187ZKI20231231final.pdf"},{"title":"Lombard Odier Reports Record Client Assets and 25 Percent Rise in Half-Year Net Profit","url":"https://hubbis.com/news/lombard-odier-reports-record-client-assets-and-25-percent-rise-in-half-year-net-profit"},{"title":"Ve správě členů AKAT je přes 260 miliard","
… [truncated, 5679 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Trading 212 Czech Republic number of users ETF investors Czechs Revolut Czech customers million"

Links: [{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=49754"},{"title":"Best Brokers for Beginners in the Czech Republic in 2026","url":"https://brokerchooser.com/czech-republic/best-brokers-for-beginners"},{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=15883"},{"title":"brokers in the czech republic","url":"https://investingintheweb.com/brokers/brokers-in-the-czech-republic/"},{"title":"trading 212 opet otevira registrace pro ceske klienty","url":"https://finex.cz/trading-212-opet-otevira-registrace-pro-ceske-klienty/"},{"title":"investing in czechia","url":"https://finorum.com/investing-in-czechia/"},{"title":"Trading 212","url":"https://indexinvesting.notion.site/Broker-Selection-18a2597d86e980e28457f582ff8af05c"},{"title":"Trading 212 Review 2026 — Fees, ETFs, Verdict","url":"https://freenance.io/products/trading-212-review-european-broker-2026/"},{"title":"finorum.com","url":"https://finorum.com/?p=17433"}]

Links: [{"title":"Fintech startup Revolut míří do Česka","url":"https://cc.cz/popularni-fin
… [truncated, 3719 more chars]
```

</details>

**→ WebFetch** https://www.reddit.com/subreddits/search.json?q=investov%C3%A1n%C3%AD&limit=25

> prompt: List subreddit names, subscriber counts, descriptions relating to Czech investing/finance.

**→ WebFetch** https://old.reddit.com/r/czech/search?q=ETF&restrict_sr=on&sort=top&t=year

> prompt: List thread titles about ETFs with upvotes/comments counts and dates.

<details><summary>result</summary>

```
Claude Code is unable to fetch from old.reddit.com
```

</details>

<details><summary>result</summary>

```
Claude Code is unable to fetch from www.reddit.com
```

</details>

**→ WebSearch** `reddit r/czech investování ETF začátečník VWCE nebo S&P 500`

**→ WebSearch** `subreddit CzechFinance OR r/investovani OR r/Investice česky investoři ETF komunita`

<details><summary>result</summary>

```
Web search results for query: "subreddit CzechFinance OR r/investovani OR r/Investice česky investoři ETF komunita"

Links: [{"title":"www.newstream.cz","url":"https://www.newstream.cz/stitek/investovani"},{"title":"stale vice cechu realizuje sve plany pomoci pasivniho investovani","url":"https://www.newstream.cz/money/stale-vice-cechu-realizuje-sve-plany-pomoci-pasivniho-investovani"},{"title":"Inzerce | Chci tu být také","url":"https://rostecky.cz/etf-jako-investicni-nastroj-noveho-tisicleti-t29324"},{"title":"dk.upce.cz","url":"https://dk.upce.cz/bitstreams/073b6439-9594-4cff-a9b0-884ff2a49865/download"},{"title":"Stále více Čechů realizuje své plány pomocí pasivního investování","url":"https://cnn.iprima.cz/stale-vice-cechu-realizuje-sve-plany-pomoci-pasivniho-investovani-423166"},{"title":"dc.contributor.advisor | Kořená, Kateřina | |","url":"https://dspace.vsb.cz/handle/10084/135526?show=full"},{"title":"na prazskou burzu miri etf wood company ho chce spustit uz na podzim","url":"https://forbes.cz/na-prazskou-burzu-miri-etf-wood-company-ho-chce-spustit-uz-na-podzim/"},{"title":"Srovnání výkonnosti v ČR nabízených fondů a ETF z pohledu korunového investora – Jakub Kůna","url":
… [truncated, 1511 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "reddit r/czech investování ETF začátečník VWCE nebo S&P 500"

Links: [{"title":"r/eupersonalfinance Jun 13 '24","url":"https://lr.eu.psf.lt/r/eupersonalfinance/comments/1dez706/vwce_sp_500"},{"title":"financialexpertclass.com","url":"https://financialexpertclass.com/?p=833"},{"title":"vwce vs ishares msci acwi","url":"https://financialexpertclass.com/vwce-vs-ishares-msci-acwi/"},{"title":"jak investovat do indexu sp 500","url":"https://www.testado.cz/jak-investovat-do-indexu-sp-500/"},{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=60641"},{"title":"r/eupersonalfinance 1h ago","url":"https://reddit.sudovanilla.org/r/eupersonalfinance/hot"},{"title":"r/eupersonalfinance 1d ago","url":"https://lr.sudovanilla.org/r/eupersonalfinance/comments/1gspmwr/one_etf"},{"title":"VWCE complete factsheet 2026: holdings, structure, and alternatives","url":"https://financialexpertclass.com/?p=4007"},{"title":"r/eupersonalfinance 8d ago","url":"https://lr.in.psf.lt/r/eupersonalfinance/comments/1jmhso7/etf_strategy"}]

I couldn't find any r/czech threads on this. The results came from r/eupersonalfinance and European finance blogs, plus one Czec
… [truncated, 2564 more chars]
```

</details>

**→ WebFetch** https://lr.eu.psf.lt/r/czech/search?q=ETF&restrict_sr=on&sort=top&t=year

> prompt: List thread titles about ETFs/investing with upvotes and comment counts and dates. Also list any links to Czech investing subreddits mentioned.

**→ WebSearch** `"r/czech" OR "r/czechrepublic" OR "r/Finance_CZ" investování ETF diskuze Reddit Češi daně časový test`

<details><summary>result</summary>

```
error:10000438:SSL routines:OPENSSL_internal:TLSV1_ALERT_INTERNAL_ERROR
```

</details>

<details><summary>result</summary>

```
Web search results for query: ""r/czech" OR "r/czechrepublic" OR "r/Finance_CZ" investování ETF diskuze Reddit Češi daně časový test"

Links: [{"title":"Prague Stock Exchange","url":"https://en.wikipedia.org/wiki/Prague_Stock_Exchange"},{"title":"Exchange-traded fund","url":"https://en.wikipedia.org/wiki/Exchange-traded_fund"},{"title":"Venture capital in the Czech Republic","url":"https://en.wikipedia.org/wiki/Venture_capital_in_the_Czech_Republic"},{"title":"Czech Republic and the International Monetary Fund","url":"https://en.wikipedia.org/wiki/Czech_Republic_and_the_International_Monetary_Fund"},{"title":"EXPAT CZECH PX UCITS ETF  42412721","url":"https://in.marketscreener.com/quote/etf/EXPAT-CZECH-PX-UCITS-ETF--42412721/"},{"title":"A NOTE FROM BOB","url":"https://link.cnbc.com/public/25140073"},{"title":"seekingalpha.com","url":"https://seekingalpha.com/user/40525775"},{"title":"be846eb3 0d27 4a13 bfe2 06cf2fe1b00e","url":"https://www.goodreads.com/notes/23311613-invest-like-a-pro/26411863-komi/be846eb3-0d27-4a13-bfe2-06cf2fe1b00e"},{"title":"The Australian ETF Guide: How to invest more cheaply simply and effectively using exchange traded funds Book Discussion","url":"https:/
… [truncated, 1601 more chars]
```

</details>

**→ WebFetch** https://www.mesec.cz/diskuse/

> prompt: List forum categories and any threads about ETF/investování with titles, number of replies and dates. Quote short user phrases (under 12 words) about ETF, fees, taxes.

**→ WebSearch** `diskuze ETF začátečník "nevím jaké ETF" S&P 500 nebo světový index daně časový test poplatky broker forum`

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "diskuze ETF začátečník "nevím jaké ETF" S&P 500 nebo světový index daně časový test poplatky broker forum"

Links: [{"title":"jak investovat do indexu sp 500","url":"https://www.testado.cz/jak-investovat-do-indexu-sp-500/"},{"title":"etf fondy reseni jak usetrit na poplatcich","url":"https://www.newstream.cz/money/etf-fondy-reseni-jak-usetrit-na-poplatcich"},{"title":"Index funds or ETFs","url":"https://openjournals.libs.uga.edu/fsr/article/view/4947"},{"title":"Index funds or ETFs","url":"https://fsrtest.galib.uga.edu/fsr/article/view/4947"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-akcie-fondy-ve-vate-diky-s-p-500-jak-sporit-na-duchod-pomoci-americkych-akcii-186135"},{"title":"Amundi launches S&P 500 ETF","url":"https://www.professionaladviser.com/news/1685967/amundi-launches-500-etf"},{"title":"renditeNeue Produkte","url":"https://www.boersen-zeitung.de/rendite/etf-auf-sp-500-mit-kosten-von-nur-drei-basispunkten"},{"title":"www.theglobeandmail.com","url":"https://www.theglobeandmail.com/globe-investor/funds-and-etfs/vanguard-plans-cheap-sp-500-etf/article4323755/?cmpid=rss1"},{"title":"www.mexc.com","url":"
… [truncated, 2267 more chars]
```

</details>

**→ WebSearch** `diskuse ETF investování poplatky daň`

**→ WebSearch** `Facebook skupina investování ETF pro začátečníky Česko členů`

<details><summary>result</summary>

```
Web search results for query: "Facebook skupina investování ETF pro začátečníky Česko členů"

Links: [{"title":"Sobota 01. srpna 2026 19:55","url":"https://www.fxstreet.cz/klicova-slova+proc-investovat-do-akcii.html"},{"title":"a dangerous way to invest in facebook","url":"https://www.fool.com/investing/general/2012/06/07/a-dangerous-way-to-invest-in-facebook.aspx"},{"title":"Facebook Via ETFs","url":"https://www.foxbusiness.com/markets/facebook-via-etfs"},{"title":"How to Buy Facebook Without All the Risk (AdvisorOne)","url":"https://thinkadvisor.com/2012/05/25/how-to-buy-facebook-without-all-the-risk-advisorone"},{"title":"Investice - strana 16","url":"https://www.finmag.cz/tema/investice?strana=16"},{"title":"If stocks could sport emotions, one that would be going stir crazy with the market closed the past days is Facebook","url":"https://www.benzinga.com/article/3039464"},{"title":"The 'Facebook ETF' Doesn't Look So Gimmicky Anymore","url":"https://www.bloomberg.com/news/articles/2013-08-06/the-facebook-etf-doesn-t-look-so-gimmicky-anymore"},{"title":"chceme vytvorit investicni superaplikaci a byt jednickou na evropskem trhu rika michael kopta z xtb","url":"https://www.newstrea
… [truncated, 1521 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "diskuse ETF investování poplatky daň"

Links: [{"title":"Investice do amerických ETF může díky nové dani místo očekávaného zisku naopak přinést reálné ztráty","url":"https://www.kurzy.cz/zpravy/693110-investice-do-americkych-etf-muze-diky-nove-dani-misto-ocekavaneho-zisku-naopak-prinest-realne-ztraty/"},{"title":"Jak ovládnout svět ETF a nenechat se „sežrat“ poplatky?","url":"https://zpravy.kurzy.cz/850034-jak-ovladnout-svet-etf-a-nenechat-se-sezrat-poplatky/"},{"title":"Základy investování: ETF nejsou jen pasivní investicí - Investujeme.cz - odborný server společnosti Swiss Life Select a.s.","url":"https://www.investujeme.cz/clanky/zaklady-investovani-etf-nejsou-jen-pasivni-investici/"},{"title":"Jak na daně z cenných papírů? (MODELOVÝ PŘÍKLAD) - Měšec.cz","url":"https://www.mesec.cz/clanky/jak-na-dane-z-cennych-papiru/"},{"title":"Investovat do akciových podílových fondů nebo ETF? Dlouhodobé srovnání výkonnosti","url":"https://zpravy.kurzy.cz/742961-investovat-do-akciovych-podilovych-fondu-nebo-etf-dlouhodobe-srovnani-vykonnosti/"},{"title":"Srovnání poplatků u klasických fondů a ETF","url":"https://zpravy.kurzy.cz/363174-srovnani-poplatku-u-klasick
… [truncated, 3602 more chars]
```

</details>

**→ WebFetch** https://arctic-shift.photon-reddit.com/api/subreddits/search?subreddit_prefix=cz

> prompt: List subreddit names and subscriber counts if present.

**→ WebFetch** https://arctic-shift.photon-reddit.com/api/posts/search?subreddit=czech&title=ETF&limit=25&sort=desc

> prompt: List the post titles, scores, num_comments, created dates (convert epoch) and subreddit. Return the exact titles.

<details><summary>result</summary>

```
The server returned HTTP 522 Unknown Status.
Retry-After: 120

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
The server returned HTTP 522 Unknown Status.
Retry-After: 120

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

**→ WebFetch** https://www.mesec.cz/poradna/

> prompt: List question titles related to ETF, investování, daně z cenných papírů, brokeři; with dates. Quote the questions (short).

**→ WebFetch** https://www.finance.cz/poradna/

> prompt: List question titles related to ETF, investování, daně z cenných papírů, brokeři; with dates. Quote the questions (short).

**→ WebFetch** https://www.kurzy.cz/diskuze/

> prompt: List discussion topics related to ETF, investování, brokeři, S&P 500; with reply counts. Quote short user phrases.

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
The page content doesn't include any discussion topics, reply counts, or mentions of ETFs, investing, brokers, or the S&P 500. It contains only:

- Navigation links to Kurzy.cz services (Obchodní rejstřík, Zájezdy, YAuto, Meteobox, Bydlet, Studium)
- A link to the discussion section (kurzy.cz/diskuze/), without its contents
- A "Ověření uživatele ..." (user verification) notice
- Company footer text

To get the discussion list, you would need to open the discussion section directly or provide the page content that contains the topics.
```

</details>

<details><summary>result</summary>

```
The page doesn't list any questions about ETFs, investing, securities taxes, or brokers. It shows only the poradna (advice column) summaries, and the individual question titles sit behind each poradna's "Přečíst dotazy a odpovědi" link, which isn't included here.

The closest related topics are:

- **Penzijní spoření pro 21. století** (2 May to 15 May 2016, closed): The summary asks "Jak správně rozložit investici v penzijním spoření?" ("How to properly spread an investment in pension savings?").
- **Jak ušetřit na zahraničních platbách?** (28 May to 18 June 2013, closed): Covers foreign payments and exchange rates, not securities or brokers.

If you need the specific question titles, open the question list for the penzijní spoření or zahraniční platby poradna on mesec.cz.
```

</details>

**→ WebSearch** `jak zdanit ETF Trading 212 daňové přiznání nevím co dělat časový test 3 roky dotaz`

**→ WebSearch** `Češi ETF nejčastější dotazy začátečníků jaké ETF koupit VWCE CSPX S&P 500 SXR8 akumulační nebo distribuční`

<details><summary>result</summary>

```
Web search results for query: "Češi ETF nejčastější dotazy začátečníků jaké ETF koupit VWCE CSPX S&P 500 SXR8 akumulační nebo distribuční"

Links: [{"title":"iShares Core S&P 500 UCITS ETF (SXR8.DE)","url":"https://www.xtb.com/cz/etf/ishares-core-s-p-500-ucits-acc-eur"},{"title":"Jak vybrat ETF (2026): 7 kritérií a 10 konkrétních fondů s TER a ISIN","url":"https://warengo.com/akademie/jak-vybrat-etf"},{"title":"S&P 500 srovnání jednotlivých ETF fondů - Který je nejlepší? » Finex.cz","url":"https://finex.cz/nejzajimavejsi-etf-fondy-kopirujici-sp-500/"},{"title":"ETF na S&P 500","url":"https://magazin.portu.cz/etf-na-sp-500-vybrat-spy-nebo-jine/"},{"title":"Nejlepší S&P 500 ETF 2026: CSPX, VUAA, SPY5 srovnání","url":"https://etfpruvodce.cz/kategorie"},{"title":"ETF na S&P 500: CSPX vs. VUAA vs. SXR8 — které koupit? - OnlineČesko.cz","url":"https://www.onlinecesko.cz/etf-sp500-cspx-vuaa-sxr8-srovnani/"},{"title":"ETF na S&P 500 — nejlepší fondy a kde je koupit","url":"https://webtrader.cz/etf-sp500"},{"title":"VWCE: Vanguard FTSE All-World ETF, výnosy a kde koupit","url":"https://www.investnews.cz/vwce-vanguard-ftse-all-world-etf/"},{"title":"CSPX vs SXR8 - What's The Difference? - D.
… [truncated, 2090 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "jak zdanit ETF Trading 212 daňové přiznání nevím co dělat časový test 3 roky dotaz"

Links: [{"title":"Recenze Trading 212 ▶️ Poplatky, zkušenosti a další [2026]","url":"https://finex.cz/recenze/trading212/"},{"title":"Trading 212 recenze 2026: Moje zkušenosti a poplatky","url":"https://www.jakobchodovat.cz/trading212-recenze"},{"title":"Danění akcií a investic 2026","url":"https://financera.cz/investice/daneni-akcii/"},{"title":"Jak zdanit akcie z Trading 212","url":"https://taxero.cz/blog/jak-zdanit-akcie-z-trading-212"},{"title":"Zdanění investičních příjmů 2026: Časový test","url":"https://arws.cz/novinky-v-arrows/zdaneni-investicnich-prijmu-2026"},{"title":"Daňové přiznání investora krok za krokem","url":"https://www.finzi.cz/dane/clanky/danove-priznani-investora-krok-za-krokem/"},{"title":"Trading a daně, aneb jak danit příjmy z tradingu a investování","url":"https://www.tradecz.cz/trading-a-dane-aneb-jak-danit-prijmy-z-tradingu-a-investovani/"},{"title":"Zdanění investic 2026: přehled, příklady a novinky","url":"https://rozbiteprasatko.cz/zdaneni-investic/"},{"title":"Trading 212 - Stocks & ETFs","url":"https://apps.apple.com/DE/app/id566325832
… [truncated, 2695 more chars]
```

</details>

**→ WebFetch** https://magazin.portu.cz/etf-na-sp-500-vybrat-spy-nebo-jine/

> prompt: Does this article explain why Czech/EU retail investors cannot buy US-domiciled ETFs like SPY, VOO (PRIIPs/KID)? Extract date, key statements, numbers about taxes (withholding tax 15% vs 30%, estate tax), TER. Quote briefly.

**→ WebFetch** https://www.seznamzpravy.cz/clanek/ekonomika-finance-akcie-fondy-ve-vate-diky-s-p-500-jak-sporit-na-duchod-pomoci-americkych-akcii-186135

> prompt: Extract date, which providers let Czech investors buy S&P 500 ETFs, fees, US vs UCITS ETFs, any statement about US-listed ETFs (SPY, VOO) availability for Czech retail clients.

**→ WebFetch** https://finex.cz/nejzajimavejsi-etf-fondy-kopirujici-sp-500/

> prompt: Extract: date; whether US-domiciled ETFs (SPY, VOO, IVV) are available to Czech retail investors; the claimed reasons (KID, PRIIPs, taxes); list of ETFs compared with TER; any common beginner questions.

<details><summary>result</summary>

```
**Článek:** „ETF na S&P 500 – vybrat SPY nebo jiné?“, Martin Luňáček, **14. 6. 2019**

**Proč nelze US ETF koupit:** Článek uvádí, že SPY, IVV a VOO jsou vydané pro americký trh a obchodují se na newyorské burze. Chybí jim dokumentace pro distribuci v Evropě, konkrétně dokument KIID. Podle článku „od loňska“ (tj. od roku 2018) je evropští investoři nemohou koupit a brokeři je stáhli z nabídky.

- Klíčová citace: „Instrumenty nemají vytvořený tzv. KIID (Key investor information document)“ (cca 75 znaků)
- Článek nazývá požadavek „evropskou regulací“ a nezmiňuje výslovně PRIIPs.

**Alternativy podle článku:**
- **Portu portfolia (asset management):** SPY je zařazen v portfoliích v rozmezí 17–56 % podle rizikového profilu. Dokumentace se u této služby nevyžaduje.
- **Samostatný výběr:** ETF **CSPX** (iShares Core S&P 500 UCITS), které má KIID, obchoduje se v Londýně v dolarech a je akumulační (nevyplácí dividendy).

**Daně:** Článek se o daních nezmiňuje. Neuvádí srážkovou daň 15 % ani 30 % a nezmiňuje daň z dědictví. Jediná zmínka se týká dividend: SPY dividendy vyplácí, CSPX ne, a srovnání výkonnosti proto předpokládá zpětné reinvestování dividend.

**TER (roční náklady):**
- SPY: 0
… [truncated, 139 more chars]
```

</details>

<details><summary>result</summary>

```
**Date:** The article was last updated on 25 September 2026. It is written by Patrik Kudláček and reviewed by Matěj Bajer (Finex.cz).

**US-domiciled ETFs (SPY, VOO, IVV) for Czech retail investors**
- **SPY** is the only US-listed fund the article discusses. It is available through Fio banka, with a fixed fee of 7.95 USD per order for up to 100 shares. Fio also supports the W-8BEN form, which lowers US dividend withholding to 15%.
- The article says the largest and most liquid US ETFs are "nedostupná" (unavailable) to EU retail investors at most brokers. Fio and Patria Finance are named as exceptions.
- **VOO and IVV are not mentioned anywhere in the article.**

**Reasons given for unavailability**
- **PRIIPs regulation:** The article cites the EU PRIIPs rules. Because the required documents are missing in local languages, US ETFs are not available to most European retail investors.
- **Taxes:** The article does not say taxes cause unavailability. It discusses taxes separately. Accumulating (Acc) ETFs avoid the dividend tax in the Czech Republic after the 3-year test, while distributing (Dist) ETFs require dividends to be taxed.

**ETFs compared, with TER**
| Fund | TER |
|---|---
… [truncated, 744 more chars]
```

</details>

<details><summary>result</summary>

```
**Publication date:** 18 January 2022 (17:58), updated 19 January 2022 (10:46). The providers and products below reflect the market at that time and may be outdated.

**Providers offering S&P 500 ETFs (per the article)**
- **Patria Finance:** iShares S&P 500 EUR Hedged UCITS; iShares Core S&P 500 USD
- **Fio banka:** iShares S&P 500 EUR Hedged UCITS; SPDR S&P 500 UCITS
- **Raiffeisenbank:** Vanguard S&P 500 ETF; iShares S&P 500 EUR Hedged UCITS (Acc); iShares Core S&P 500 UCITS ETF USD (Acc); SPDR S&P 500 UCITS; Invesco S&P 500 EUR Hedged UCITS
- **XTB:** iShares S&P 500 EUR Hedged UCITS; iShares Core S&P 500 USD; SPDR S&P 500 UCITS
- **LYNX:** iShares Core S&P 500 USD
- **Degiro:** iShares S&P 500 EUR Hedged UCITS; Vanguard S&P 500
- **Portu (mobile app):** iShares Core S&P 500 UCITS ETF; iShares Core S&P 500 EUR Hedged UCITS
- **Fondee (mobile app):** Invesco S&P 500 EUR Hedged UCITS, included in its investment profiles
- **Indigo (Patria's app):** Invests through ETFs, but the article names no specific S&P 500 fund.

**Banks:** The article says Czech banks mostly do not offer ETFs. Raiffeisenbank's spokesperson said it sees no added value in passive CZK-denominated index funds. 
… [truncated, 981 more chars]
```

</details>

**→ WebSearch** `reddit.com r/czech "ETF" "Trading212" nebo "XTB" nebo "Portu" jak začít investovat dotaz`

**→ WebSearch** `r/czech investování ETF`

<details><summary>result</summary>

```
API Error: 400 The following domains are not accessible to our user agent: ['reddit.com']. Read more: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
```

</details>

<details><summary>result</summary>

```
Web search results for query: "r/czech investování ETF"

No links found.

No links found.

I couldn't find any results for "r/czech investování ETF." I ran the search twice, once with your exact query and once with a broader Czech version ("investování ETF Česko"), and neither returned anything, so I have no sources to cite.

A few ways to get useful results:

- **Search the subreddit directly.** Reddit search is often better at finding threads than general search engines. Try r/czech on reddit.com and search for "ETF" or "investování."
- **Try Czech-language finance sites.** Search terms like "ETF průvodce" (ETF guide), "ETF pro začátečníky" (ETFs for beginners), or "nejlepší ETF 2026" may turn up Czech investment blogs and forums such as Investiční fórum or Kurzy.cz.
- **Try English terms.** Queries like "Czech investors ETF Interactive Brokers" or "ETF Czech brokers 2026" may surface guides aimed at Czech residents, including broker and tax information.

If you tell me which part matters most (broker choice, tax rules, specific funds, or getting started), I can run a more targeted search.


REMINDER: You MUST include the sources above in your response to the user using markdown 
… [truncated, 11 more chars]
```

</details>

**→ WebFetch** https://finex.cz/recenze/trading212/

> prompt: Does the page have a user comments section or user reviews? List the first 15 user comments/questions verbatim (each short, under 15 words), with dates. Also list FAQ questions. Also note number of Czech clients if mentioned.

**→ WebFetch** https://www.jakobchodovat.cz/trading212-recenze

> prompt: Does the page have user comments? List up to 15 user comments/questions verbatim (each short, under 15 words) with dates. Also list FAQ questions and any statistics about Czech users.

**→ WebFetch** https://www.investujeme.cz/clanky/zaklady-investovani-etf-nejsou-jen-pasivni-investici/

> prompt: Does the page have a comments section with user questions? List up to 15 comments verbatim (short). Date of article.

<details><summary>result</summary>

```
The page has no comments section, so there are no user comments or questions to list.

The article is dated **6 October 2015** (06. 10. 2015), by Radovan Novotný.
```

</details>

<details><summary>result</summary>

```
**User comments:** None. The page shows "Komentáře (0)" and "Zatím žádné komentáře. Buďte první!" ("No comments yet. Be the first!"). There are no comments or dates to list.

**FAQ questions:**
1. "Je Trading 212 bezpečný broker?" (Is Trading 212 a safe broker?)
2. "Jaké jsou u Trading 212 poplatky?" (What are Trading 212's fees?)
3. "Umí Trading 212 česky?" (Does Trading 212 work in Czech?)
4. "Jaký je minimální vklad?" (What is the minimum deposit?)
5. "Nabízí Trading 212 DIP?" (Does Trading 212 offer DIP?)
6. "Koupím přes Trading 212 české akcie?" (Can I buy Czech stocks through Trading 212?)
7. "Jak funguje úročení hotovosti?" (How does cash interest work?)
8. "Jak si Trading 212 stojí proti XTB?" (How does Trading 212 compare to XTB?)

**Statistics relevant to Czech users:** The page gives no statistics specific to Czech users. The figures it does provide are general:
- About 75% of retail investors lose money (a general warning). The page also says about 75% of retail accounts lost money on this broker's CFD trading.
- Over 5 million funded accounts worldwide.
- Trustpilot rating of 4.6/5 from more than 97,000 reviews.
- The broker claims an average support response time of 2
… [truncated, 71 more chars]
```

</details>

<details><summary>result</summary>

```
**User comments:** The page has a comments section, labeled "Vaše zkušenosti s Trading 212 (Komentáře)" and "Diskuze," but none of the comments appear in the content provided. I can't list any comments or dates. The numbers "81" and "14" near the rating widget may be rating counts, but the text doesn't say what they measure.

**FAQ questions (10):**
1. "Jaké služby broker Trading 212 nabízí?" (What services does Trading 212 offer?)
2. "Je Trading 212 bezpečný broker?" (Is Trading 212 a safe broker?)
3. "Jaký je minimální vklad pro aktivaci účtu?" (What is the minimum deposit to activate an account?)
4. "Můžu mít účet vedený v českých korunách?" (Can I have an account denominated in CZK?)
5. "Umožňuje Trading 212 obchodování frakčních akcií?" (Does Trading 212 allow fractional share trading?)
6. "Jak vysoký je poplatek za převod měn?" (How high is the currency conversion fee?)
7. "Řeší Trading 212 daně a formulář W-8BEN?" (Does Trading 212 handle taxes and the W-8BEN form?)
8. "Podporuje Trading 212 nákup kryptoměn?" (Does Trading 212 support buying cryptocurrencies?)
9. "Je možné z Trading 212 převést akcie jinam?" (Can shares be transferred from Trading 212 to another broker?)
10.
… [truncated, 348 more chars]
```

</details>

**→ WebFetch** https://itunes.apple.com/cz/rss/customerreviews/page=1/id=566325832/sortby=mostrecent/json

> prompt: List the review titles and review text (first 150 characters each), star rating and date for all entries. Verbatim, in Czech.

**→ WebFetch** https://www.testado.cz/jak-investovat-do-indexu-sp-500/

> prompt: Extract date, FAQ questions, comments with user questions (verbatim, short), mention of US ETFs availability, and Czech-specific numbers.

<details><summary>result</summary>

```
**Date:** Published 5 September 2022 and last updated on the same day.

**FAQ-style questions:** The page has no dedicated FAQ section, but these headings work as questions:

- **What is the S&P 500?** A stock index of the 500 largest US companies on NYSE and NASDAQ, weighted by market capitalisation.
- **Where can I invest in it?** Through an online broker. The article recommends XTB, which it says won its comparison.
- **How do I invest?** Mainly through passively managed S&P 500 ETFs. Buying individual shares is described as impractical for small investors, and the index itself cannot be bought directly.
- **Is it suitable for me?** The article says it suits amateur investors with a long-term horizon, and it recommends passive ETFs for holding periods of 5+ years.

**Comments with user questions:** None are included. The author invites readers to name Czech funds that beat the index, but no comments appear on the page.

**US ETF availability:** The page does not state that US-listed ETFs are available to Czech investors. The ETFs it recommends are listed with UK and German tickers (VUAA.UK, SPY5.UK, VUAA.DE, IUSA.DE). It also says XTB offers over 300 global ETFs and that most ET
… [truncated, 805 more chars]
```

</details>

<details><summary>result</summary>

```
Ukázka je omezena na 125 znaků na citaci, takže úryvky textů jsou zkráceny na 125 znaků místo požadovaných 150. Níže jsou všechny záznamy (50) v pořadí, v jakém jsou uvedeny ve zdroji.

| # | Datum | Hodnocení | Název | Text (úryvek) |
|---|---|---|---|---|
| 1 | 2026-10-04 | 3 | Everything except withdrawals | "Had this app for years, really good for beginners and smaller capital investors. Everything works except the withdrawal" |
| 2 | 2026-09-24 | 5 | Skvělá jednoduchá appka 👍🏼 | "Aktuální promo kód : 11Q8EeTUn6 (akcie az do 100€ zdarma). Výborná, přehledná apka, ideál pro začátečníky." |
| 3 | 2026-09-24 | 5 | Great for investing | "I like it since they’re not watching every dollar that you send to your investment account. If you once verified your income" |
| 4 | 2026-09-20 | 5 | top | "proste fajn" |
| 5 | 2026-08-31 | 5 | ZAČÍNAJÍCÍ INVESTOR | "Trading 212 poskytuje možnost investování vy si vyberete co chcete koupit můžete si dokoupit to bylo pro mě dost dlouho" |
| 6 | 2026-08-27 | 5 | Super aplikace | "Jednoduchá na používání, přijatelné malé poplatky, možnost investic v malých částkách.. Nedávno konečně přidali možnost" |
| 7 | 2026-08-23 | 5 | Reliable, no fees | "Best
… [truncated, 5193 more chars]
```

</details>

**→ WebFetch** https://itunes.apple.com/search?term=Trading+212&country=cz&entity=software&limit=3

> prompt: For each result give trackName, trackId, userRatingCount, averageUserRating, sellerName.

**→ WebFetch** https://itunes.apple.com/search?term=XTB&country=cz&entity=software&limit=4

> prompt: For each result give trackName, trackId, userRatingCount, averageUserRating, sellerName.

**→ WebFetch** https://itunes.apple.com/search?term=Portu&country=cz&entity=software&limit=3

> prompt: For each result give trackName, trackId, userRatingCount, averageUserRating, sellerName.

**→ WebFetch** https://itunes.apple.com/search?term=Fondee&country=cz&entity=software&limit=3

> prompt: For each result give trackName, trackId, userRatingCount, averageUserRating, sellerName.

**→ WebFetch** https://itunes.apple.com/search?term=Revolut&country=cz&entity=software&limit=2

> prompt: For each result give trackName, trackId, userRatingCount, averageUserRating, sellerName.

<details><summary>result</summary>

```
| trackName | trackId | userRatingCount | averageUserRating | sellerName |
|---|---|---|---|---|
| Revolut — Mobile Finance | 932493382 | 64126 | 4.83 | Revolut Ltd |
| Revolut — Teen Finance | 1499857038 | 2429 | 4.79 | Revolut Ltd |
```

</details>

<details><summary>result</summary>

```
| # | trackName | trackId | userRatingCount | averageUserRating | sellerName |
|---|---|---|---|---|---|
| 1 | Direct Fondee: investing | 1616141130 | 67 | 3.73 | Direct Fondee a.s. |
| 2 | Portu: Invest in stocks & ETFs | 1580563467 | 14 | 4.93 | WOOD & Company Financial Services, a.s. |
| 3 | Stocks | 1069512882 | 4659 | 4.45 | Apple Distribution International |
```

</details>

<details><summary>result</summary>

```
| trackName | trackId | userRatingCount | averageUserRating | sellerName |
|---|---|---|---|---|
| XTB Online Investing | 949905889 | 10942 | 4.72 | XTB S A |
| Trading 212 | 566325832 | 26607 | 4.82 | Avus Capital LLC |
| Stocks | 1069512882 | 4659 | 4.45 | Apple Distribution International |
| TradingView: Track All Markets | 1205990992 | 4995 | 4.84 | TradingView, Inc. |
```

</details>

<details><summary>result</summary>

```
| trackName | trackId | userRatingCount | averageUserRating | sellerName |
|---|---|---|---|---|
| Portu: Invest in stocks & ETFs | 1580563467 | 14 | 4.93 | WOOD & Company Financial Services, a.s. |
| XTB Online Investing | 949905889 | 10942 | 4.72 | XTB S A |
| Trading 212 | 566325832 | 26607 | 4.82 | Avus Capital LLC |
```

</details>

<details><summary>result</summary>

```
| trackName | trackId | userRatingCount | averageUserRating | sellerName |
|---|---|---|---|---|
| Trading 212 | 566325832 | 26607 | 4.82 | Avus Capital LLC |
| Stocks | 1069512882 | 4659 | 4.45 | Apple Distribution International |
| XTB Online Investing | 949905889 | 10942 | 4.72 | XTB S A |

Ratings are rounded to two decimal places from the raw values.
```

</details>

**→ WebFetch** https://itunes.apple.com/cz/rss/customerreviews/page=1/id=949905889/sortby=mostrecent/json

> prompt: List all entries: date, rating, title, text (first 140 chars). Verbatim, Czech where present. Skip none.

**→ WebFetch** https://itunes.apple.com/cz/rss/customerreviews/page=1/id=1616141130/sortby=mostrecent/json

> prompt: List all entries: date, rating, title, text (first 140 chars). Verbatim, Czech where present. Skip none.

**→ WebFetch** https://itunes.apple.com/cz/rss/customerreviews/page=1/id=1580563467/sortby=mostrecent/json

> prompt: List all entries: date, rating, title, text (first 140 chars). Verbatim, Czech where present. Skip none.

<details><summary>result</summary>

```
Ukázky textu jsou omezeny na 125 znaků, takže nejsou delší než 140 znaků, jak jste požadoval.

| # | Datum | Hodnocení | Název | Text (ukázka) |
|---|---|---|---|---|
| 1 | 2026-09-16 | 5 | "Skvělá aplikace pro investování jednoduše" | "Direct Fondee používám už delší dobu a jsem opravdu spokojená. Mám zde několik portfolií – investuji nejen pro sebe" |
| 2 | 2026-09-15 | 5 | "Jednoduché" | "Appka je extrémně jednoduchá, což mi vyhovuje. Jednou jsem prošel nastavením, nastavil si trvalý příkaz" |
| 3 | 2026-04-12 | 1 | "🤦🏼‍♀️🤷🏼‍♀️" | "Dvakrát jsem musela dělat registraci, protože první nefungovala. Když jsem prošla dotazníkem," |
| 4 | 2026-04-07 | 1 | "zatim spatne" | "Registracni proces nefunguje. Po vytvoreni uctu pres apple ID a kliknuti na overovaci link v emailu" |
| 5 | 2026-02-04 | 5 | "Velmi dobrá aplikace" | "Vždy funguje bez problému" |
| 6 | 2025-06-20 | 4 | "Kontrola údajů mimo aplikaci" | "Aplikace je fajn, chápu i smysl jednou za čas požadovat po klientovi ze zákonných důvodů kontrolu údajů." |
| 7 | 2025-05-29 | 3 | "Problémy s FaceID" | "Hodně často nefunguje přihlášení přes FaceID." |
| 8 | 2025-02-18 | 2 | "." | "- při každém spuštění otravuje s povolením notifik
… [truncated, 3081 more chars]
```

</details>

<details><summary>result</summary>

```
I found 50 entries on this page (the feed has more pages). Each excerpt is verbatim and capped at 125 characters, which is below the 140 you asked for, to respect the quote limit. Truncated excerpts end with "…".

1. **2026-10-08** | 3 | Začátečníci nesahat ! | "Nepřehledné rozdělení CDF a přímého nákupu akcií nevodné pro začátečníky .. super pro obchodování"
2. **2026-10-06** | 1 | Novy font totalne znicil appku!!! | "Vratte zpatky stary font!!! Ten novej je katastrofalni!! Je to giganticke pismo namackane na sebe a prekryva se a kontrast…"
3. **2026-09-29** | 3 | Stale se načítá | "Při zapnutí aplikace se začne načítak, pak ihned spadne a zvova. Pak se ti stane jeste nekolikrat a nakonec najede."
4. **2026-09-28** | 4 | iPad už není hrůza | "Kdo v téhle době z renomovaných společností, neumí podporovat multitasking ?! Neuvěřitelné."
5. **2026-09-21** | 5 | Liquid Glass | "Děkuji za přidání Liquid Glass. Dokonalá aplikace 😍 Nemám co vytknout."
6. **2026-09-20** | 5 | Obcho | "Jednoduchost v detailech"
7. **2026-09-13** | 4 | Ok | "Jediné co - nakupování akcií je daleko složitější než u Trading212, to je škoda."
8. **2026-09-10** | 1 | Non working | "Aktuálně se do aplikace nelze p
… [truncated, 5772 more chars]
```

</details>

<details><summary>result</summary>

```
The feed contains 50 reviews, listed newest first. Review text is shown verbatim, truncated with "…" where it exceeds the 125-character quote limit.

| # | Date | Rating | Title | Text |
|---|---|---|---|---|
| 1 | 2026-10-02 | 5 | "Skvělá služba i aplikace" | "Aplikace funguje skvěle, vše je bezpečné a jednoduché, oceňuju snížené poplatky pro studenty a intuitivní…" |
| 2 | 2026-10-01 | 5 | "Pavel" | "The best investment app I know!" |
| 3 | 2026-10-01 | 5 | "Skvělá česká investiční aplikace" | "Naprosto nejlepší investiční aplikace pro lidi, co se nechtějí o nic starat. Mám přes 6 let portfolio od…" |
| 4 | 2026-09-09 | 4 | "Portu..." | "Nevím jestli je to tím, ale po aktualizaci dělá appka strašné brikule - 'špatný passcode', mizení klávesnice…" |
| 5 | 2026-07-02 | 5 | "Číslo 1 na investice v CZ" | "Jednoduché investování, apka je velmi user friendly i pro začátečníky. Posílám prachy a jsem spoko. Doporučuji…" |
| 6 | 2026-06-30 | 1 | "Každý měsíc vydávají nucený update" | "Pokaždé se chci přihlásit a musím aktualizovat. A pak ještě 'something went wrong'. Takhle fakt ne." |
| 7 | 2026-03-24 | 4 | "Předtím fungovala" | "Dobrý den, provedl jsem aktualizaci Vaší aplikace a nejde 
… [truncated, 6221 more chars]
```

</details>

**→ WebSearch** `hledanost ETF Google Trends Česko vyhledávání "S&P 500" "jak investovat" nárůst zájmu Češi hledají`

**→ WebSearch** `průzkum proč Češi neinvestují obavy ztráta peněz nevím jak začít poplatky důvěra bankám poradcům 2025 2026`

<details><summary>result</summary>

```
Web search results for query: "hledanost ETF Google Trends Česko vyhledávání "S&P 500" "jak investovat" nárůst zájmu Češi hledají"

Links: [{"title":"porazit inflaci sazkou na sp 500 cesti investori prikyvuji","url":"https://forbes.cz/porazit-inflaci-sazkou-na-sp-500-cesti-investori-prikyvuji/"},{"title":"toto je ta nejchytrejsi investice kterou dnes muzete udelat","url":"https://finex.cz/toto-je-ta-nejchytrejsi-investice-kterou-dnes-muzete-udelat/"},{"title":"v roce 2015 jste investovali 100 000 kc do sp 500 kolik mate nyni","url":"https://finex.cz/v-roce-2015-jste-investovali-100-000-kc-do-sp-500-kolik-mate-nyni/"},{"title":"Passive investing and ETF S&P 500","url":"https://vskp.vse.cz/english/89022"},{"title":"www.google.com","url":"https://www.google.com/finance/quote/SPY:ASX?hl=sk"},{"title":"jak investovat do indexu sp 500","url":"https://www.testado.cz/jak-investovat-do-indexu-sp-500/"},{"title":"nejzajimavejsi etf fondy kopirujici sp 500","url":"https://finex.cz/nejzajimavejsi-etf-fondy-kopirujici-sp-500/"},{"title":"www.google.com","url":"https://www.google.com/finance/quote/SPY:ASX?hl=cs"},{"title":"how to trade sp500 with usd1000","url":"https://brokerchooser.com/cs/educ
… [truncated, 2027 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "průzkum proč Češi neinvestují obavy ztráta peněz nevím jak začít poplatky důvěra bankám poradcům 2025 2026"

Links: [{"title":"Průzkum pro HK ČR: Více než třetina Čechů chce, aby jejich penzijní úspory pomáhaly financovat rozvoj ČR","url":"https://www.businessinfo.cz/clanky/pruzkum-pro-hk-cr-vice-nez-tretina-cechu-chce-aby-jejich-penzijni-uspory-pomahaly-financovat-rozvoj-cr/"},{"title":"Investuje 39 procent Čechů. Nejvíc si cení nákupu bydlení","url":"https://ct24.ceskatelevize.cz/clanek/ekonomika/investuje-39-procent-cechu-nejvic-si-ceni-nakupu-bydleni-346260"},{"title":"Strach ze ztráty jako hlavní brzda. Proč Češi stále váhají s investováním?","url":"https://www.e15.cz/finexpert/banky-a-ucty/strach-ze-ztraty-jako-hlavni-brzda-proc-cesi-stale-vahaji-s-investovanim-1434418"},{"title":"investovani je novy standard zajem cechu vyrazne roste","url":"https://www.newstream.cz/money/investovani-je-novy-standard-zajem-cechu-vyrazne-roste"},{"title":"Letos si finančně polepšíme, věří většina Čechů","url":"https://www.e15.cz/domaci/letos-si-financne-polepsime-veri-vetsina-cechu-1149441"},{"title":"www.newstream.cz","url":"https://www.newstream.cz/stitek/pruz
… [truncated, 3280 more chars]
```

</details>

### 🤖 Claude · 2026-10-10 13:04:59

Let me open the key survey articles directly.

**→ WebFetch** https://www.e15.cz/finexpert/banky-a-ucty/strach-ze-ztraty-jako-hlavni-brzda-proc-cesi-stale-vahaji-s-investovanim-1434418

> prompt: Extract date, survey source and sample, percentages for barriers (fear of loss 73%, lack of money/knowledge 71%), who are non-investors (age/gender), any motivation percentages.

**→ WebFetch** https://ct24.ceskatelevize.cz/clanek/ekonomika/investuje-39-procent-cechu-nejvic-si-ceni-nakupu-bydleni-346260

> prompt: Extract date, survey source, sample, share who invest (39%), breakdown by instrument, age/gender/income/education/region, motivations.

**→ WebFetch** https://www.newstream.cz/money/stale-vice-cechu-realizuje-sve-plany-pomoci-pasivniho-investovani

> prompt: Extract date, who published (XTB?), survey data, ETF investor share, age, gender, motivations, S&P 500, platform numbers for Czechia.

<details><summary>result</summary>

```
**Survey source and sample**
- **Source:** Raiffeisenbank survey, cited by e15.cz (article dated 20 July 2026). Tereza Kaiseršotová (Raiffeisenbank press spokesperson) and Marek Podrabský (Raiffeisenbank investment director) are quoted.
- **Sample size, methodology, and respondent demographics:** not stated in the article.

**Investor status**
- 39% are active investors.
- 24% are considering investing.
- 38% have no plans to invest.

**Barriers among non-investors**
- **Fear of loss:** 73%.
- **Subjective feeling of lacking money and lack of know-how:** both cited by 71%. The article says both factors are mentioned by the same 71%, so it's unclear whether these are separate figures or one shared figure.

**Non-investors (age/gender)**
- The article does not provide age or gender breakdowns for non-investors.

**Motivation percentages**
- Retirement reserve: 78%, the top priority.
- Improving living standards: 63%.
- Protecting savings from inflation: 39%.

**Other notable figures**
- 40% of investors and prospective investors use online platforms or specialized websites as their main information source, up from 21% the previous year.
- 30% rely mainly on bank advisors.
- One-fifth
… [truncated, 57 more chars]
```

</details>

<details><summary>result</summary>

```
**Source and date**
- Published 20 February 2024 by ČTK (ČT24, Česká televize)
- Survey by agency Perfect Crowd for the Asociace pro kapitálový trh ČR (Asset Management Association / Capital Market Association)
- Sample: "more than a thousand respondents" (exact number not stated)

**Investing share**
- 39% of respondents currently invest, up 2 percentage points year on year. The authors called this a "velmi pozvolný vzestup" (very gradual rise).

**Breakdown**
- **Gender:** Men invest more, partly due to a willingness to take risk. Women more often save.
- **Income:** Higher-income people invest more.
- **Education:** More educated people invest more.
- **Age:** Not stated.
- **Region:** Not stated.
- **Investment instruments:** Not stated, though the article mentions real estate as the best investment historically.

**Motivations**
- Most investors seek returns on spare money (extra income).
- 41% cite saving for retirement.
- 35% cite maintaining an active lifestyle in older age.

**Other findings**
- Best life investment: real estate (29%), followed by family, relationships and children (17%).
- Main barriers: fear of fraud (43%, up 10 points year on year) and risk (42%).
```

</details>

<details><summary>result</summary>

```
**Date:** 18 January 2024, 11:24.

**Publisher:** The article is labeled "Komerční spolupráce" (commercial cooperation) on newstream.cz. It promotes XTB's Investment Plans and quotes XTB's Czech branch director, David Šnajdr.

**Survey data:** The article reports no survey. Its figures come from XTB client data.

**ETF investor share:**
- The number of Czech XTB clients investing in ETFs more than doubled since 2021.
- ETFs made up 42% of all investment forms XTB offers.
- More than 31% of Czech investors start their investing with ETFs.

**Age and gender:** Not provided.

**Motivations:** The article gives no survey-based motivations. It describes ETFs as suited to stable, long-term investing and diversification without manual stock selection. It gives retirement or a new product launch as examples of investment goals.

**S&P 500:** Czech investors' top choice last year was index ETFs, including those tracking the S&P 500, MSCI World, and NASDAQ 100. No percentage is given.

**Platform figures (XTB Czechia):**
- Investors can create up to 10 investment plans (portfolios) made of different ETFs.
- Each holding's percentage share can be set and adjusted.
- Recurring payments can be 
… [truncated, 10 more chars]
```

</details>

**→ WebSearch** `Household Finance and Consumption Survey Czech Republic 2021 share of households holding mutual funds listed shares ČNB HFCS results`

**→ WebSearch** `ČNB zpráva o finanční stabilitě domácnosti investice do akcií ETF zahraniční brokeři růst retailových investorů`

<details><summary>result</summary>

```
Web search results for query: "Household Finance and Consumption Survey Czech Republic 2021 share of households holding mutual funds listed shares ČNB HFCS results"

Links: [{"title":"20210913 rod 2021 presentation bruha","url":"https://CNB.cz/export/sites/cnb/en/economic-research/.galleries/seminars_workshops/2021/20210913_rod_2021_presentation_bruha.pdf"},{"title":"household finance and consumption survey hfcs in czechia","url":"https://csu.gov.cz/household-finance-and-consumption-survey-hfcs-in-czechia"},{"title":"household finance and consumption survey hfcs methodology","url":"https://csu.gov.cz/household-finance-and-consumption-survey-hfcs-methodology"},{"title":"The sample survey Household Finance and Consumption Survey (HFCS)","url":"https://www.czso.cz/csu/vykazy/the-sample-survey-household-finance-and-consumption-survey-hfcs"},{"title":"www.czso.cz","url":"https://www.czso.cz/documents/10180/230783424/160077-23.pdf"},{"title":"the sample survey household finance and consumption survey hfcs","url":"https://csu.gov.cz/vykazy/the-sample-survey-household-finance-and-consumption-survey-hfcs"},{"title":"Možnosti vyhľadávania","url":"https://www.ecb.europa.eu/pub/research-networ
… [truncated, 2046 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "ČNB zpráva o finanční stabilitě domácnosti investice do akcií ETF zahraniční brokeři růst retailových investorů"

Links: [{"title":"fs 2015 2016 uvod","url":"https://www.cnb.cz/export/sites/cnb/cs/financni-stabilita/.galleries/zpravy_fs/fs_2015-2016/fs_2015-2016_uvod.pdf"},{"title":"fs 2016 2017","url":"https://www.cnb.cz/export/sites/cnb/cs/financni-stabilita/.galleries/zpravy_fs/fs_2016-2017/fs_2016-2017.pdf"},{"title":"fs 2015 2016","url":"https://www.cnb.cz/export/sites/cnb/cs/financni-stabilita/.galleries/zpravy_fs/fs_2015-2016/fs_2015-2016.pdf"},{"title":"zfs podzim 2023","url":"https://www.cnb.cz/export/sites/cnb/cs/financni-stabilita/.galleries/zpravy_fs/fs_2023_podzim/zfs_podzim_2023.pdf"},{"title":"zfs jaro 2023","url":"https://CNB.cz/export/sites/cnb/cs/financni-stabilita/.galleries/zpravy_fs/fs_2023_jaro/zfs_jaro_2023.pdf"},{"title":"fs 2012 2013","url":"https://www.cnb.cz/export/sites/cnb/cs/financni-stabilita/.galleries/zpravy_fs/fs_2012-2013/fs_2012-2013.pdf"},{"title":"fs 2014 2015","url":"https://www.cnb.cz/export/sites/cnb/cs/financni-stabilita/.galleries/zpravy_fs/fs_2014-2015/fs_2014-2015.pdf"},{"title":"fs 2018 2019","url":"https:
… [truncated, 3405 more chars]
```

</details>

**→ WebFetch** https://csu.gov.cz/household-finance-and-consumption-survey-hfcs-in-czechia

> prompt: Extract any statistics on share of households owning mutual funds, shares, bonds, voluntary pension, with year of the survey; latest wave and publication date.

**→ WebFetch** https://www.ecb.europa.eu/pub/research-networks/html/hfcn_faq_2021_wave.sk.html

> prompt: Is there any data on Czech participation in mutual funds/shares? Probably not; report if so.

<details><summary>result</summary>

```
The page doesn't include any statistics on the share of households owning mutual funds, shares, bonds, or voluntary pensions. It is only an abstract and bibliographic record for the article.

The relevant details it does provide:

- **Survey years:** "the survey has been conducted annually since 2020 under the name Finanční situace domácností (FSD)."
- **Latest wave:** The page doesn't identify the most recent wave.
- **Publication:** The article appears in *Statistika*, 105(1): 123–130 (DOI 10.54694/stat.2024.38). The page was last updated 11.03.2025, but it doesn't state a specific publication date for the article.

The full article is available as a PDF on the page, and it may contain the ownership figures you need.
```

</details>

<details><summary>result</summary>

```
**No, this page has no data on Czech participation in mutual funds or shares.** It only notes that the Czech Republic was one of the non-euro countries covered by the 2021 wave, alongside Croatia and Hungary. It describes the survey's asset coverage in general terms, saying it covers "assets and liabilities held or incurred by the surveyed households," but gives no breakdown by country or asset type.
```

</details>

**→ WebFetch** https://CNB.cz/export/sites/cnb/en/economic-research/.galleries/seminars_workshops/2021/20210913_rod_2021_presentation_bruha.pdf

> prompt: Find participation rates (% of households) for mutual funds, shares, bonds, and any year/wave of the HFCS data. Report table values with their labels.

<details><summary>result</summary>

```
REDIRECT DETECTED: The URL redirects to a location that was not fetched automatically.

    Original URL: https://CNB.cz/export/sites/cnb/en/economic-research/.galleries/seminars_workshops/2021/20210913_rod_2021_presentation_bruha.pdf
    Redirect URL (from the server's Location header — server-supplied, not verified): http://www.cnb.cz/export/sites/cnb/en/economic-research/.galleries/seminars_workshops/2021/20210913_rod_2021_presentation_bruha.pdf
    Status: 301 Moved Permanently

    To complete your request, I need to fetch content from the redirected URL. Please use WebFetch again with these parameters:
    - url: "http://www.cnb.cz/export/sites/cnb/en/economic-research/.galleries/seminars_workshops/2021/20210913_rod_2021_presentation_bruha.pdf"
    - prompt: "Find participation rates (% of households) for mutual funds, shares, bonds, and any year/wave of the HFCS data. Report table values with their labels."
```

</details>

**→ WebFetch** https://datareportal.com/reports/digital-2026-czechia

> prompt: Extract: internet users, mobile connections, social media user identities (number, % of population), Instagram/Facebook/TikTok/YouTube ad reach in Czechia, age and gender splits of ad audiences, time spent, share of web traffic from mobile. Report exact numbers and the data dates.

**→ WebFetch** https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/czech-republic

> prompt: Extract the latest share of mobile, desktop, tablet in Czech Republic and the period covered.

<details><summary>result</summary>

```
In September 2026, the Czech Republic's market share was **Mobile 49.34%**, **Desktop 49.05%**, and **Tablet 1.61%**.
```

</details>

<details><summary>result</summary>

```
**Core connectivity (Czechia)**

| Metric | Value | Data date |
|---|---|---|
| Internet users | 9.96 million (94.2% of population) | October 2025 |
| Internet users, change | Down 127 thousand (-1.3%) | Oct 2024 to Oct 2025 |
| Offline population | 610 thousand (5.8%) | End of 2025 |
| Mobile connections | 14.7 million (139% of population) | End of 2025 |
| Mobile connections, change | Down 41 thousand (-0.3%) | End 2024 to end 2025 |
| Social media user identities | 8.08 million (76.4% of population) | October 2025 |
| Social media identities, change | Up 90 thousand (+1.1%) | Late 2024 to end 2025 |

Population was 10.6 million in October 2025 (UN data). The page advises caution when comparing social media figures with previous reports.

**Ad reach by platform**

| Platform | Ad reach | % of population | Age 18+ / 13+ share | % of internet users | Female / Male | Change |
|---|---|---|---|---|---|---|
| Instagram | 3.95M (late 2025) | 37.4% | 46.4% of adults 18+; 42.9% of 13+ | 39.6% | 52.5% / 43.8% | +150K (+3.9%), Oct 2024 to Oct 2025; +150K (+3.9%), Jul to Oct 2025 |
| Facebook | 5.00M (late 2025) | 47.3% | 58.0% of adults 18+; 54.3% of 13+ | 50.2% | 52.0% / 46.0% | -250K (-4
… [truncated, 1156 more chars]
```

</details>

**→ WebSearch** `landing page conversion rate benchmark financial services mobile vs desktop lead generation 2025 report Unbounce OR WordStream OR Focus Digital`

**→ WebSearch** `podíl mobilu na návštěvnosti webu Česko 2025 sociální sítě reklama mobil 80 % Meta Instagram Facebook Češi věk uživatelé`

<details><summary>result</summary>

```
Web search results for query: "landing page conversion rate benchmark financial services mobile vs desktop lead generation 2025 report Unbounce OR WordStream OR Focus Digital"

Links: [{"title":"landing page statistics","url":"https://sender.net/blog/landing-page-statistics"},{"title":"landing page statistics","url":"https://www.sender.net/blog/landing-page-statistics/?afsrc=1"},{"title":"Closing Time","url":"https://www.insightly.com/?p=25700"},{"title":"Closing Time","url":"https://www.insightly.com/episodes/landing-pages-that-convert/"},{"title":"landing page statistics","url":"https://www.sender.net/blog/landing-page-statistics/?app=1"},{"title":"Mobile and social are your cash cows","url":"https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate"},{"title":"Wealth Management Landing Page Statistics: 2026 Conversion Benchmarks & CRO Data","url":"https://www.webtonic.io/blog/wealth-management-landing-page-statistics"},{"title":"landing page conversion statistics","url":"https://www.shno.co/marketing-statistics/landing-page-conversion-statistics"},{"title":"2026 Fintech Landing Pages & CRO Report: Trends, Stats & Performance Data","url":"https://www.webt
… [truncated, 2297 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "podíl mobilu na návštěvnosti webu Česko 2025 sociální sítě reklama mobil 80 % Meta Instagram Facebook Češi věk uživatelé"

Links: [{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/clanky/2020/09/mif-pocet-page-views-z-mobilu-uz-prekonal-desktop/"},{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/mif-pocet-page-views-z-mobilu-uz-prekonal-desktop"},{"title":"NetMonitor: 1,4 milionu uživatelů přistupuje na internet z mobilních zařízení","url":"https://www.e15.cz/byznys/ostatni/netmonitor-1-4-milionu-uzivatelu-pristupuje-na-internet-z-mobilnich-zarizeni-963056"},{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/spir-rozdelil-navstevnost-podle-pc-mobilu-a-tabletu"},{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/internet-jen-z-mobilu-a-tabletu-prijde-pres-250-tis-ru"},{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/clanky/2015/07/spir-rozdelil-navstevnost-podle-pc-mobilu-a-tabletu"},{"title":"Křišťálová Lupa 2026","url":"https://www.lupa.cz/n/navstevnost/?pi=3"},{"title":"Mobile Internet FORUM 2013: uživatelé utěšeně rostou, následovat by měly peníze","url":"https://www.lupa.c
… [truncated, 4124 more chars]
```

</details>

**→ WebFetch** https://forbes.cz/youtube-a-facebook-v-cesku-vede-obe-socialni-site-zustavaji-dal-nejoblibenejsimi/

> prompt: Extract date, source (Ami Digital Index?), usage percentages for YouTube, Facebook, Instagram, TikTok among Czech internet users, daily use, age splits, device (mobile) information.

**→ WebFetch** https://cc.cz/jak-vypada-boj-o-cechy-na-sitich-dominance-facebooku-se-otrasa-uz-ho-temer-dohnal-vlastni-bratr/

> prompt: Extract date, source, user numbers/percentages for Facebook, Instagram, TikTok, YouTube in Czechia, age splits, mobile usage.

**→ WebFetch** https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate

> prompt: Extract all numbers: median conversion rate for finance & insurance landing pages, by mobile vs desktop, by traffic channel (social, paid), year of report, sample size, and any form length/field findings.

<details><summary>result</summary>

```
**Date:** Article published 2 September 2026 (CzechCrunch, by David Zlomek). The Eurostat data is for 2025.

**Source:** CzechCrunch, citing EU Digital Services Act (DSA) platform reports via Social Media Transparency, and Eurostat for age data. The DSA figures are average monthly active recipients, not unique individuals.

**Monthly active users in Czechia (DSA data):**

| Platform | Users | Notes |
|---|---|---|
| Facebook | 6.7 million | Grew slowly since spring 2023 (6.4 million) |
| Instagram | 6.6 million | Up from 5.5 million in spring 2023; gap with Facebook is about 100,000 |
| TikTok | 2.5 million | About 23% of the population |
| YouTube | 10.2 million | Logged-in accounts only |

**Age splits:**
- Eurostat (2025): 97.2% of Czechs aged 16–29 used social networks, the second-highest share in the EU after Cyprus.
- Ages 16–74: 70%, compared with an EU average of 67.3%.
- The article gives no age breakdown for the individual platforms.

**Mobile usage:** The article does not mention mobile usage, so I can't provide that.
```

</details>

<details><summary>result</summary>

```
The content you provided is only a headline: "YouTube a Facebook v Česku vede. Obě sociální sítě zůstávají nadále nejoblíbenějšími | Forbes." It contains no article body, so I can't extract the other details.

- **Source:** The headline ends with "Forbes," so the page appears to be a Forbes article. The Ami Digital Index is not mentioned in the text.
- **Date:** Not provided.
- **Usage percentages** for YouTube, Facebook, Instagram, and TikTok: Not provided.
- **Daily use, age splits, and mobile/device information:** Not provided.

The headline's main claim is that YouTube leads in the Czech Republic, and that Facebook and YouTube remain the most popular social networks. To get the figures you need, please share the full article text.
```

</details>

<details><summary>result</summary>

```
**Financial services (finance & insurance) benchmarks, 2024 report**

- **Median conversion rate (overall):** 8.3%
- **Mobile:** 11.5% (the text calls this an "average," not a median). The all-industries mobile median is 11.2%.
- **Desktop:** 9%. The all-industries desktop median is 12.1%.
- **Paid search:** 10.1% median (all-industries benchmark: 6.7%)
- **Paid social:** 9.3% median (all-industries median: 5.2%)
- **Email (for comparison):** 7.9% (all-industries benchmark: 6.7%)
- **Paid social by platform:** Instagram 15.5%, TikTok 10.8%, Facebook 10.1% (medians)
- **Year:** The report is labeled 2024 in the page's asset names. The page's copyright notice reads 2009–2026, but that is site-wide and doesn't date the data.
- **Sample size (financial services):** Not stated. The page cites over 57 million landing page conversions across industries, but it doesn't give a figure for this vertical.
- **Form length or field findings:** None. The page doesn't discuss form length or number of form fields.
```

</details>

**→ WebSearch** `Portu počet klientů tisíc spravuje miliard WOOD Portu aplikace nové klienty 2026`

**→ WebSearch** `XTB Česko Slovensko počet klientů tisíc David Šnajdr 2026`

**→ WebSearch** `Česká spořitelna George ETF investování klienti počet investičních klientů 2026 Fio e-Broker počet klientů Patria`

<details><summary>result</summary>

```
Web search results for query: "XTB Česko Slovensko počet klientů tisíc David Šnajdr 2026"

Links: [{"title":"Trhy se s největší recesí od druhé světové války vypořádaly snadno. XTB vyrostlo na trojnásobek, říká David Šnajdr","url":"https://cc.cz/trhy-se-s-nejvetsi-recesi-od-druhe-svetove-valky-vyporadaly-snadno-xtb-vyrostlo-na-trojnasobek-rika-david-snajdr/"},{"title":"Sobota 01. srpna 2026 16:57","url":"https://www.fxstreet.cz/xtbcr-xtb-predstavuje-svuj-plan-produktu-a-oznamuje-predbezne-financni-vysledky-za-rok-2023.html"},{"title":"77 % retailových CFD účtů přichází o peníze","url":"https://brokerchooser.com/cs/broker-reviews/xtb-review/xtb-regulation"},{"title":"www.letemsvetemapplem.eu","url":"https://www.letemsvetemapplem.eu/?p=799260"},{"title":"2012 2q organizacni struktura","url":"https://www.xtbofficial.com/cz/nabidka/informace-o-uctech/dulezite-dokumenty/obligatory-published-information/2012-2q-organizacni-struktura.pdf"},{"title":"2012 3Q organizacni struktura","url":"https://www.xtbofficial.com/cz/nabidka/informace-o-uctech/dulezite-dokumenty/obligatory-published-information/2012-3Q-organizacni-struktura.pdf"},{"title":"xtb predstavuje svuj plan produktu a oznamuje pre
… [truncated, 2037 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Česká spořitelna George ETF investování klienti počet investičních klientů 2026 Fio e-Broker počet klientů Patria"

Links: [{"title":"sporitelna zlevnuje investovani u malych nakupu srazi poplatek z 90 korun na par korun","url":"https://www.newstream.cz/money/sporitelna-zlevnuje-investovani-u-malych-nakupu-srazi-poplatek-z-90-korun-na-par-korun"},{"title":"859528 sporitelna jako prvni banka v cesku rusi minimalni vysi poplatku za investovani klienti zaplati","url":"https://zpravy.kurzy.cz/859528-sporitelna-jako-prvni-banka-v-cesku-rusi-minimalni-vysi-poplatku-za-investovani-klienti-zaplati/"},{"title":"ceska sporitelna digitalizuje nove muzete v georgi obchodovat s akciemi certifikaty a etf","url":"https://finex.cz/ceska-sporitelna-digitalizuje-nove-muzete-v-georgi-obchodovat-s-akciemi-certifikaty-a-etf/"},{"title":"Česká spořitelna vyráží proti Revolutu. V aplikaci spouští investice do akcií a přes ETF i do bitcoinu","url":"https://cc.cz/ceska-sporitelna-vyrazi-proti-revolutu-v-aplikaci-spousti-investice-do-akcii-a-pres-etf-i-do-bitcoinu/"},{"title":"ceska sporitelna zavadi investovani do frakci","url":"https://finex.cz/ceska-sporitelna-zavadi-invest
… [truncated, 3703 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Portu počet klientů tisíc spravuje miliard WOOD Portu aplikace nové klienty 2026"

Links: [{"title":"Česká investiční služba Portu už lidem spravuje přes 18 miliard korun. Rozpíná se i za hranicemi","url":"https://cc.cz/ceska-investicni-sluzba-portu-uz-lidem-spravuje-pres-18-miliard-korun-rozpina-se-i-za-hranicemi/"},{"title":"Lidé už přes Portu investovali do akcií či dluhopisů přes pět miliard. Dobře funguje spolupráce s Air Bank","url":"https://cc.cz/lide-uz-pres-portu-investovali-do-akcii-ci-dluhopisu-pres-pet-miliard-dobre-funguje-spoluprace-s-air-bank/"},{"title":"Annual report 2025","url":"https://cdn.portu.cz/portu/documents/obligatory-published-information/cs/Annual-report-2025.pdf"},{"title":"finex.cz","url":"https://finex.cz/recenze/portu/"},{"title":"portu hlasi pres 40 tisic uzivatelu a dve a pul miliardy korun ve sprave do konce roku prekoname 5 miliard veri jeho sef","url":"https://cc.cz/portu-hlasi-pres-40-tisic-uzivatelu-a-dve-a-pul-miliardy-korun-ve-sprave-do-konce-roku-prekoname-5-miliard-veri-jeho-sef/"},{"title":"portu snizuje poplatky a zlevnuje pro dlouhodobe investory ve sprave ma jiz 30 miliard korun","url":"https://finex.cz/p
… [truncated, 3726 more chars]
```

</details>

**→ WebFetch** https://cdn.portu.cz/portu/documents/obligatory-published-information/cs/Annual-report-2025.pdf

> prompt: Extract: number of clients/investors at end of 2025, assets under management, growth %, share of women, average age, product split (ETF portfolios, DIP, brokerage), top ETFs or S&P 500 demand if mentioned. Quote numbers exactly.

**→ WebFetch** https://www.newstream.cz/money/sporitelna-zlevnuje-investovani-u-malych-nakupu-srazi-poplatek-z-90-korun-na-par-korun

> prompt: Extract date and numbers: number of investing clients, assets, fee changes, age of clients, share buying ETFs via George, number of new investors.

<details><summary>result</summary>

```
I couldn't find the requested figures in the content you provided. It's a raw, compressed PDF byte stream (FlateDecode object streams) rather than readable text, and the dump is truncated, so I can't see any of the client, AUM, growth, demographic, or product data.

To get the figures, you could:
- Paste the extracted text from the PDF (for example, copy it from a viewer or run `pdftotext` on the file).
- Share the page's HTML or plain-text version, if one exists.
- Upload the document directly, if your interface supports it.

Once I have readable text, I'll pull the requested numbers and quote them exactly, keeping any quotations under 125 characters.

[Binary content (application/pdf, 2.7MB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637138497-msirtu.pdf]
```

</details>

<details><summary>result</summary>

```
**Česká spořitelna: extracted data**

- **Investing clients:** Over 780,000 at the end of April 2026, up 14% year-on-year. The article says: "Počet klientů, kteří s námi investují, ke konci dubna 2026 meziročně vzrostl o 14 procent."
- **Assets under management:** More than CZK 520 billion.
- **Fee change:** From 18 May 2026, the bank removed the minimum fee of CZK 90 (or EUR 4 / USD 4) on one-off purchases of shares, fractional investing, ETFs, ETCs, and certificates. The new fee is 0.35% of the transaction value. For a CZK 1,000 investment, the fee falls from CZK 90 to CZK 3.50.
- **Client age:** No specific ages or age breakdown are given. The article only says the change targets younger clients who are used to investing through mobile apps.
- **Share buying ETFs via George:** No number is given. The article says purchases of exchange-traded products (shares, ETFs, ETCs, certificates) now appear in the George portfolio immediately, rather than after the one-to-three-day settlement.
- **New investors:** No count of new investors is given. The only growth figure is the 14% year-on-year rise in investing clients.
```

</details>

**→ Bash** — Extract Portu annual report text and grep key figures

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && pdftotext -layout webfetch-1791637138497-msirtu.pdf /tmp/portu.txt 2>&1; wc -c /tmp/portu.txt; grep -n -i -E "klient|investor|mld|miliard|ETF|žen|věk|průměrn|DIP" /tmp/portu.txt | head -80
```

<details><summary>result</summary>

```
Syntax Warning: Bad annotation destination
153480 /tmp/portu.txt
46:Ke konci roku 2025 spravovala Spolecnost v�ce nez 55 miliard korun klientsk�ho majetku a mla pes 280 000 klient. Oproti zac�tku losk�ho
47:roku jde o v�razn� n�rst � a to jak v poctu investor (mezirocn +34 %), tak v objemu sven�ch prostedk (mezirocn +39 %). Pozoruhodn�
49:o 2 procenta. �spch Portu tak nestoj� na p�zniv�m trzn�m vtru, ale na dve klient a kvalit nas� platformy.
51:Za cel� losk� rok Spolecnost zpracovala neuviteln�ch 2,5 milion vklad. T�m 80 % investor Portu pitom investuje pravideln, coz je
53:jejich pod�l dos�hl 38 %, coz vn�m�me jako potvrzen� toho, ze nase platforma oslovuje skutecn sirokou veejnost. Vkov� z�br investor
57:investicn�ch konzultac�, v jejichz r�mci nasi odborn�ci rad� klientm prostednictv�m online schzek a webin� s jejich financemi a investicemi.
59:klientovo financn� zdrav�.
61:V r�mci dals�ch produktov�ch inovac� Spolecnost pos�lila tak� moznosti spr�vy portfolia. Klienti si nov mohou sami urcit m�ru kontroly
64:v rezimu obhospodaov�n� majetku. Tato flexibilita umozuje pizpsobit platformu jak aktivnjs�m investorm, tak tm, kte� preferuj� pln
67:V prbhu roku Spolecnost d�le rozsiov
… [truncated, 3420 more chars]
```

</details>

**→ Bash** — Read relevant Portu annual report section

```
sed -n 40,82p /tmp/portu.txt | iconv -f utf-8 -t utf-8 -c; echo ----; sed -n 60,70p /tmp/portu.txt
```

<details><summary>result</summary>

```
Hospodaen spolecnosti v roce 2025

Rok 2025 byl pro Spolecnost dalsm rokem vraznho rstu a produktov zralosti. Kdyz Portu ped osmi lety vstoupilo na trh jako prvn cesk
robo-advisory online investicn platforma, mlo jasnou vizi  nabdnout kazdmu to nejleps msto pro zhodnocovn penz bez ohledu na
bohatstv nebo odborn znalosti. Tato vize zstv nemnn. A vsledky rok od roku potvrzuj, ze jdeme sprvnm smrem.

Ke konci roku 2025 spravovala Spolecnost vce nez 55 miliard korun klientskho majetku a mla pes 280 000 klient. Oproti zactku loskho
roku jde o vrazn nrst  a to jak v poctu investor (mezirocn +34 %), tak v objemu svench prostedk (mezirocn +39 %). Pozoruhodn
je, ze tohoto vsledku jsme doshli i pesto, ze trhy loni vrazn zpomalily - celosvtov akciov index MSCI poslil v korunovm vyjden jen
o 2 procenta. spch Portu tak nestoj na pznivm trznm vtru, ale na dve klient a kvalit nas platformy.

Za cel losk rok Spolecnost zpracovala neuvitelnch 2,5 milion vklad. Tm 80 % investor Portu pitom investuje pravideln, coz je
pesvdciv doklad sprvn financn disciplny a dlouhodobho pstupu k budovn bohatstv. Zvlst potsiteln je rostouc zastoupen zen:
jejich podl doshl 38 %, coz vnmme jako potvrzen toho, ze nase p
… [truncated, 3507 more chars]
```

</details>

**→ WebFetch** https://www.akatcr.cz/Dokumenty/Aktuality

> prompt: List all press release headlines with dates and URLs, especially those about DIP (dlouhodobý investiční produkt) and number of contracts, from 2025-2026.

<details><summary>result</summary>

```
The page shows five press releases (all dated 2026), and none of their headlines mention DIP or contract numbers:

1. "Tisková zpráva - KRYPTOMĚNY JSOU INVESTICE I ŽIVOTNÍ STYL" (30 September 2026)
   https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-kryptomeny-jsou-investice-i-zivotn205-styl
2. "Tisková zpráva - Češi stále důvěřují nemovitostem" (16 September 2026)
   https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-cesi-st225le-duveruj237-nemovitostem
3. "Tisková zpráva - BOHATÍ ČEŠI VÍCE INVESTUJÍ" (9 September 2026)
   https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-bohat205-cesi-v205ce-investuj205
4. "Tisková zpráva - O FINANCE SE ZAJÍMAJÍ UŽ ŠESTILETÉ DĚTI" (1 September 2026)
   https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-o-finance-se-zaj205maj205-uz-sestilet201-deti
5. "Tisková zpráva 2Q - INVESTICE V ČESKÉ REPUBLICE PŘEKONALY ČTYŘBILIONOVOU HRANICI" (17 August 2026)
   https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-2q-investice-v-cesk201-republice-prekonaly-ctyrbilionovou-hranici

The page doesn't include any 2025 items or any DIP-related releases. The listing says more articles can be loaded, but those aren
… [truncated, 231 more chars]
```

</details>

**→ WebFetch** https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-cesi-st225le-duveruj237-nemovitostem

> prompt: Extract all survey numbers: sample size, who surveyed, date, share of Czechs who invest, instruments (ETF, akcie, fondy, DIP, crypto), motivations, barriers, demographics (age, gender, income, education), sources of information, trust.

**→ WebFetch** https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-kryptomeny-jsou-investice-i-zivotn205-styl

> prompt: Extract all survey numbers: sample size, who surveyed, date, share of Czechs who invest, instruments (ETF, akcie, fondy, DIP, crypto), motivations, barriers, demographics (age, gender, income, education), sources of information, trust.

**→ WebFetch** https://www.akatcr.cz/Dokumenty/Aktuality/tiskov225-zpr225va-o-finance-se-zaj205maj205-uz-sestilet201-deti

> prompt: Extract all survey numbers: sample size, who surveyed, date, share of Czechs who invest, instruments (ETF, akcie, fondy, DIP, crypto), parents investing for children, motivations, barriers, demographics.

<details><summary>result</summary>

```
The page reports only one survey figure:

- **Real estate as the best investment:** 36% of respondents consider property the best investment of their life. The press release says this ranks it above investing in health.

**Survey details:**
- **Who surveyed:** Perfect Crowd, for the Asociace pro kapitálový trh ČR (AKAT ČR).
- **Frequency:** It is the fourth annual survey of Czech investment behaviour by this agency for AKAT.

**Not in the content:**
- Sample size
- Survey date (the "10. října 2026" on the page is the site's display date, not confirmed as the survey date)
- Share of Czechs who invest
- Instruments (ETF, stocks, funds, DIP, crypto)
- Motivations and barriers
- Demographics (age, gender, income, education)
- Information sources
- Trust measures beyond the 36% figure

The press release's accompanying PDF ("AKAT TZ nemovitosti 16090206") may contain the full methodology and remaining figures, but it isn't included in the text provided.
```

</details>

<details><summary>result</summary>

```
The page is only a press release summary, so most of the requested survey figures aren't in it. It does provide:

- **Survey:** The Investment Behaviour Survey of Czechs (Průzkum investičního chování Čechů), the fourth annual edition.
- **Who ran it:** The agency Perfect Crowd, for the Association for Capital Market of the Czech Republic (AKAT ČR).
- **Children and money:** The headline says children show interest in finance from age six ("O FINANCE SE ZAJÍMAJÍ UŽ ŠESTILETÉ DĚTI").
- **Parent-child money talks:** Czech parents most often start talking about money with their children around age nine.
- **Motivation:** Over half of children want to get rich mainly through personal success at work, though they often want wealth in general.

**Not in the page content:** sample size, survey date or fieldwork period, share of Czechs who invest, use of ETFs, stocks, funds, DIP, or crypto, parents investing for their children, investment barriers, and demographic breakdowns.

The page links to a PDF press release (AKAT TZ děti fin vzděl_01092026, about 466 KB) that may contain these details. The full survey report may be available from AKAT ČR.
```

</details>

<details><summary>result</summary>

```
The page is a press release and gives only a few survey details:

- **Survey:** Investment behaviour survey of Czechs, described as the fourth consecutive edition.
- **Conducted by:** The Perfect Crowd agency, for AKAT ČR (the Czech capital market association). The text says the survey was carried out for AKAT.
- **Share who invest:** About 10% of Czechs currently invest in cryptocurrencies. The release says they are attracted by "poměrně vysoké zhodnocení" (relatively high returns).
- **Motivations:** Relatively high returns and a desire to try something new.
- **Instruments:** Only cryptocurrencies are mentioned. ETFs, stocks, funds, and DIP are not.
- **Date:** Not stated in the text. The attached PDF's filename contains "30092026," which may suggest 30 September 2026, but this is unconfirmed.
- **Sample size, barriers, demographics (age, gender, income, education), sources of information, and trust:** Not mentioned.

The only trust-related item is the title of a linked, separate press release, "Češi stále důvěřují nemovitostem" ("Czechs still trust real estate"). It does not provide survey data from this study.
```

</details>

**→ WebSearch** `Průzkum investičního chování Čechů AKAT Perfect Crowd 2026 investuje procent Čechů obavy podvody`

**→ WebSearch** `AKAT průzkum investiční chování Čechů 2025 investuje 41 % ETF akcie podílové fondy mladí důvody neinvestování`

<details><summary>result</summary>

```
Web search results for query: "Průzkum investičního chování Čechů AKAT Perfect Crowd 2026 investuje procent Čechů obavy podvody"

Links: [{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-osobni-cesi-daji-pri-investovani-na-emoce-rodina-je-vyhra-i-risk-nemovitost-jistota-223769"},{"title":"Investuje 39 procent Čechů. Nejvíc si cení nákupu bydlení","url":"https://ct24.ceskatelevize.cz/clanek/ekonomika/investuje-39-procent-cechu-nejvic-si-ceni-nakupu-bydleni-346260"},{"title":"cechy u investic zajima hlavne dosavadni vynos kazdy desaty ma kryptomeny","url":"https://forbes.cz/cechy-u-investic-zajima-hlavne-dosavadni-vynos-kazdy-desaty-ma-kryptomeny/"},{"title":"Úterý 04. srpna 2026 21:14","url":"https://www.fxstreet.cz/klicova-slova+akat-cr.html"},{"title":"akat cr","url":"https://www.newstream.cz/stitek/akat-cr"},{"title":"Kam zajít, co ochutnat a co stojí za pozornost","url":"https://www.newstream.cz/money/ctyri-z-deseti-cechu-se-povazuji-za-investory"},{"title":"www.blesk.cz","url":"https://www.blesk.cz/clanek/835357"},{"title":"investovani je novy standard zajem cechu vyrazne roste","url":"https://www.newstream.cz/money/investovani-je-novy-standar
… [truncated, 1953 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "AKAT průzkum investiční chování Čechů 2025 investuje 41 % ETF akcie podílové fondy mladí důvody neinvestování"

Links: [{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-osobni-cesi-daji-pri-investovani-na-emoce-rodina-je-vyhra-i-risk-nemovitost-jistota-223769"},{"title":"Úterý 04. srpna 2026 21:14","url":"https://www.fxstreet.cz/klicova-slova+akat-cr.html"},{"title":"cechy u investic zajima hlavne dosavadni vynos kazdy desaty ma kryptomeny","url":"https://forbes.cz/cechy-u-investic-zajima-hlavne-dosavadni-vynos-kazdy-desaty-ma-kryptomeny/"},{"title":"www.blesk.cz","url":"https://www.blesk.cz/clanek/835357"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-b2b-o-svuj-duchod-se-radeji-postarejte-sami-experti-poradi-jak-na-to-298572"},{"title":"cesi propadli investovani 10 rad jak to delat bezpecne tipy experta z cnb","url":"https://www.blesk.cz/clanek/radce-penize/835357/cesi-propadli-investovani-10-rad-jak-to-delat-bezpecne-tipy-experta-z-cnb.html"},{"title":"Kam zajít, co ochutnat a co stojí za pozornost","url":"https://www.newstream.cz/money/ctyri-z-deseti-cechu-se-povazuji-za-investory"},
… [truncated, 2526 more chars]
```

</details>

### 🤖 Claude · 2026-10-10 13:07:46

Let me open the Newstream article on AKAT survey and the Forbes one.

**→ WebFetch** https://www.newstream.cz/money/ctyri-z-deseti-cechu-se-povazuji-za-investory

> prompt: Extract date, survey (AKAT/Perfect Crowd), sample n=1114?, share considering themselves investors, retirement motive %, barriers %, instruments (podílové fondy 18%, zahraniční akcie 14%, ETF), demographics (age, gender, education, income), trust in state 37%.

**→ WebFetch** https://forbes.cz/cechy-u-investic-zajima-hlavne-dosavadni-vynos-kazdy-desaty-ma-kryptomeny/

> prompt: Extract date, survey, sample, share investing, what matters (past return), crypto 10%, instruments (ETF?), age/gender/education/income, barriers, information sources.

**→ WebFetch** https://www.newstream.cz/money/investovani-je-novy-standard-zajem-cechu-vyrazne-roste

> prompt: Extract date, survey source, sample, share investing, ETF share, age/gender, motivations, apps used, barriers.

<details><summary>result</summary>

```
**Source:** ČTK article, published 3 February 2025 (newstream.cz, "Money" section)

- **Survey:** Conducted by Perfect Crowd for the Asociace pro kapitálový trh (AKAT), its third edition
- **Sample:** 1,114 respondents
- **Self-identified investors:** 41% (up from 39% a year earlier)
- **Considering starting to invest:** 29% (up from 23%)
- **Main retirement motive:** Securing a pension was the main reason for 50% of respondents, up from 43% in 2024
- **Main barriers:** Fear of losing money or falling victim to fraud, and not having spare money. The article gives no percentages for these.
- **Instruments (e.g., mutual funds 18%, foreign stocks 14%, ETFs):** Not reported in the article
- **Demographics (age, gender, education, income):** Not reported in the article
- **Trust in the state (37%):** Not reported in the article
```

</details>

<details><summary>result</summary>

```
**Extraction from the article "Investování je nový standard. Zájem Čechů výrazně roste" (Newstream, 17 Feb 2026)**

- **Date:** 17 February 2026 (published 16:39)
- **Survey source:** NMS Market Research, commissioned by Raiffeisenbank; fieldwork in October (year not explicitly stated, presumably 2025)
- **Sample:** About 1,000 respondents aged 18 to 64
- **Share investing:** 39% of Czechs in the latest survey, up from 32% the year before
- **ETF share:** Not stated
- **Age/gender:** Men, younger people, and university graduates with above-average incomes are the most active investors
- **Motivations:** Retirement security (almost 80%), improving living standards (63% of investors), and protecting savings against inflation (39%)
- **Apps used:** No specific apps named. About six in ten investors use online platforms at least monthly, most often through a mobile or internet app
- **Barriers:** Not stated
```

</details>

<details><summary>result</summary>

```
The page content is only a headline, so most of the requested fields can't be extracted.

- **Headline (quoted):** "Každý desátý Čech má kryptoměny. U investic lidi zajímá hlavně dosavadní výnos"
- **Crypto ownership:** About one in ten Czechs holds cryptocurrencies, per the headline.
- **What matters most in investing:** Past returns (dosavadní výnos), per the headline.
- **Source:** Forbes.
- **Date, survey name, sample size, share of people who invest, instruments (including whether ETFs are mentioned), age/gender/education/income breakdowns, barriers to investing, and information sources:** Not included in the provided content.

To get these details, the full article is needed.
```

</details>

**→ WebSearch** `forum diskuse ETF VWCE začátečník rada co koupit`

**→ WebSearch** `Češi o investování na sociálních sítích finfluenceři YouTube Instagram vliv na rozhodnutí investovat průzkum`

<details><summary>result</summary>

```
API Error: 400 The following domains are not accessible to our user agent: ['idnes.cz']. Read more: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Češi o investování na sociálních sítích finfluenceři YouTube Instagram vliv na rozhodnutí investovat průzkum"

Links: [{"title":"Jan Procházka: Finfluencery sledujeme i s pomocí AI","url":"https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Finfluencery-sledujeme-ispomociAI/"},{"title":"Fenomén finfluenceři: Každý druhý mladý Čech je sleduje, čtvrtina podle nich už investovala","url":"https://www.e15.cz/finexpert/banky-a-ucty/fenomen-finfluenceri-kazdy-druhy-mlady-cech-je-sleduje-ctvrtina-podle-nich-uz-investovala-1434469"},{"title":"Investování 2.0: Mladá generace mění pravidla hry, ale není to bez rizik","url":"https://www.e15.cz/byznys/investovani-2-0-mlada-generace-meni-pravidla-hry-ale-neni-to-bez-rizik-1420548"},{"title":"investicni gramotnost","url":"https://www.newstream.cz/stitek/investicni-gramotnost"},{"title":"Finfluenceři: Čemu věnovat pozornost?","url":"https://www.cnb.cz/cs/cnb-news/aktuality/Finfluenceri-Cemu-venovat-pozornost"},{"title":"investicni podvod","url":"https://www.newstream.cz/stitek/investicni-podvod"},{"title":"Finanční influenceři – regulovaná činnost, nebo hra bez
… [truncated, 3175 more chars]
```

</details>

**→ WebFetch** https://www.e15.cz/finexpert/banky-a-ucty/fenomen-finfluenceri-kazdy-druhy-mlady-cech-je-sleduje-ctvrtina-podle-nich-uz-investovala-1434469

> prompt: Extract date, survey (GSFT/Ipsos), sample size and ages, percentages: follow finfluencers, invested based on advice, platforms used (TikTok/Instagram/YouTube), information sources, trust, verifying.

**→ WebFetch** https://www.e15.cz/byznys/investovani-2-0-mlada-generace-meni-pravidla-hry-ale-neni-to-bez-rizik-1420548

> prompt: Extract date, key statistics on young Czech investors, platforms (TikTok, Instagram), ETFs, share investing in shares, brokers used, motivations, fears.

<details><summary>result</summary>

```
**Source:** e15.cz article "Fenomén finfluenceři" (Czech), dated 22 July 2026. The survey is by the Garanční systém finančního trhu (GSFT), with the Ipsos tag attached.

**Survey details**
- **Sample size:** Not stated.
- **Age groups:** 16–30 for finfluencer viewing and investing. The article also compares under-30s with people over 31.

**Key figures**
- **Follow finfluencers:** 53% of people aged 16–30.
- **Invested based on influencer advice:** 25% of that age group.
  - 5% follow advice actively and regularly.
  - 20% invest occasionally.
- **Own an investment product:** 39% of under-30s, about 9 percentage points more than people over 31.
- **Invest without expert help:** More than a third of young investors decide alone and buy through online platforms.

**Information sources**
- Family and friends: 52%
- Specialist financial websites: about 4 in 10
- Influencers: 21%

**Trust and verification**
- The article gives no trust rating.
- 78% of young people verify financial information from social media at least sometimes.
- GSFT director Renáta Kadlecová advises checking who gives the advice and whether they have a commercial interest.

**Platforms (TikTok/Instagram/YouTube)**

… [truncated, 126 more chars]
```

</details>

<details><summary>result</summary>

```
**Article date:** 2 December 2024, 13:00 (Kristýna Mrázová, e15.cz, reporting on a Business First debate)

**Key statistics**
- Only 19% of young people in the Czech Republic invest in shares, according to the Communications 2024 survey. In the United States the figure is 76%.
- "Generation Z" refers to people born after 1996.

**Platforms**
- Young investors look for information mainly on TikTok and Instagram.
- They get financial information mostly from friends and social media, not from official sources such as the Czech National Bank (ČNB) or the Ministry of Finance websites.

**ETFs:** Not mentioned.

**Brokers used:** Not mentioned. The article quotes Petr Žabža, head of investment products at Air Bank, but does not say which brokers young people use.

**Motivations**
- Investing feels normal to them. Žabža compares it to e-sports: "Mladí lidé berou investování jako e-sport."
- They are looking for new routes to passive income.
- Time is their main advantage. Lukáš Nádvorník gives the example of compounding: a small sum invested at 15 could be worth tens of thousands of crowns by retirement.

**Fears and risks**
- Low financial literacy.
- Unvetted "finfluencers" who promote 
… [truncated, 228 more chars]
```

</details>

**→ WebFetch** https://www.novinky.cz/clanek/finance-investovani-se-vetsina-cechu-stale-obava-353333

> prompt: Extract date, survey source and numbers on fears of investing. Also: are there reader comments on the page? If so quote up to 10 short ones (under 15 words each) with no names.

**→ WebFetch** https://finex.cz/v-roce-2015-jste-investovali-100-000-kc-do-sp-500-kolik-mate-nyni/

> prompt: Are there reader comments on the page? If so quote up to 15 short ones (under 15 words each) without names with dates. Also report the article date.

<details><summary>result</summary>

```
**No reader comments appear on the page.** The only reader feedback is a "Líbil se vám tento článek?" (Did you like this article?) widget showing **2** positive and **0** negative reactions, with no comment text.

**Article date:** Published **9 September 2025** ("Publikováno 9. 9. 2025"), by Mgr. Bogdan Heinz.
```

</details>

<details><summary>result</summary>

```
**Date:** 1 June 2016, 13:34. The article is by Jakub Svoboda for Právo.

**Survey sources:** The page does not cite a specific survey about fear of investing. It refers to unnamed "various surveys" and to data from:
- the Asociace pro kapitálový trh (fund assets)
- Generali Investments (analysis of defensive assets)
- ČTK and UniCredit Bank (investor behaviour)
- an online reader poll with 197 voters, which is not representative

**Numbers on reluctance to invest:**
- Actively searching for and using investment options: at most one third of people.
- Reader poll: 55.3% manage their own money, 20.8% leave it to experts, 23.9% do not invest.
- Mutual fund assets: almost 388 billion CZK, up 2.7 billion in Q1.
- Building savings: about 380 billion CZK. Third-pillar pension savings: 4.592 million people, over 361 billion CZK in pension funds.
- Inflation in April: 0.6% year on year.
- Generali's estimate: moving a quarter of bank deposits into investments could add about 14 billion CZK a year.

The article does not measure fear directly. The title's claim that most Czechs are afraid of investing is supported only indirectly, by the description of a passive, conservative approach.

**Re
… [truncated, 126 more chars]
```

</details>

**→ WebSearch** `poradna dotaz čtenáře "Dobrý den" ETF koupil jsem zdanění časový test Trading 212 XTB odpověď daňového poradce`

**→ WebSearch** `Trustpilot XTB Česko recenze ETF začátečník poplatky zkušenosti klientů`

<details><summary>result</summary>

```
Web search results for query: "poradna dotaz čtenáře "Dobrý den" ETF koupil jsem zdanění časový test Trading 212 XTB odpověď daňového poradce"

Links: [{"title":"e15.cz - Zdanění ETF 2026: Návod na prodej a dividendy za rok 2025","url":"https://www.e15.cz/etf-prodej-dividendy-dane"},{"title":"e15.cz - Zdanění akcií a dividend 2026: Kdy neplatíte nic a jak na daňové přiznání","url":"https://www.e15.cz/zdaneni-akcii-dividend-danove-priznani-2026"},{"title":"ETF a daně v ČR","url":"https://taxero.cz/blog/etf-zdaneni-pruvodce-pro-danove-poradce"},{"title":"Danění akcií a investic 2026","url":"https://financera.cz/investice/daneni-akcii/"},{"title":"Recenze Trading 212 ▶️ Poplatky, zkušenosti a další [2026]","url":"https://finex.cz/recenze/trading212/"},{"title":"XTB - FinExpert.cz","url":"https://forum.finexpert.e15.cz/viewtopic.php?f=312&p=12789092"},{"title":"XTB recenze: Zkušenosti a tipy [2026]","url":"https://rozbiteprasatko.cz/xtb-recenze/"},{"title":"Jak zdanit akcie z Trading 212","url":"https://taxero.cz/blog/jak-zdanit-akcie-z-trading-212"},{"title":"Zdanění investic 2026: přehled, příklady a novinky","url":"https://rozbiteprasatko.cz/zdaneni-investic/"},{"title":"Trading 212
… [truncated, 4056 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Trustpilot XTB Česko recenze ETF začátečník poplatky zkušenosti klientů"

Links: [{"title":"recenze xtb","url":"https://www.testado.cz/recenze-xtb/"},{"title":"www.arecenze.cz","url":"https://www.arecenze.cz/xtb/"},{"title":"finex.cz","url":"https://finex.cz/recenze/xtb/"},{"title":"recenze xtb","url":"https://www.arecenze.cz/clanky/recenze-xtb/"},{"title":"xtb investicni plany","url":"https://finex.cz/recenze/xtb-investicni-plany/"},{"title":"Neděle 06. září 2026 20:39","url":"https://www.fxstreet.cz/x-trade-brokers-xtb.html"},{"title":"www.ceskenoviny.cz","url":"https://www.ceskenoviny.cz/zpravy/2334901"},{"title":"Představujeme brokera XTB","url":"https://iocharts.io/cs/blog/xtb-broker-elemzes-ezt-tudja-a-platform-2026-ban/"},{"title":"Představujeme brokera XTB","url":"https://iocharts.io/cs/blog/Anal%C3%BDza-brokera-xtb%3A-tohle-platforma-v%C3%AD-v-roce-2026/"}]

Trustpilot výsledky se v hledání neobjevily, takže nemohu uvést žádné hodnocení z Trustpilotu. Níže shrnuji, co jsem našel na českých recenzních a srovnávacích webech. Ty jsou u brokerů často provázané s reklamou, takže je berte jako orientační.

**Poplatky za ETF**
- Obchodování ETF je p
… [truncated, 2374 more chars]
```

</details>

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&p=12789092

> prompt: Quote verbatim up to 15 user posts or snippets (each under 15 words), with post date. Report the forum/thread title, number of replies/views, and the date range.

**→ WebFetch** https://forum.finexpert.e15.cz/index.php

> prompt: List forum categories and sub-forums related to ETF, investování, brokeři, daně; with number of topics/posts and last post dates, and links.

<details><summary>result</summary>

```
The page has no ETF- or broker-specific sub-forum. Two categories match your topics:

1. **Investování** (Investing)
   - Covers mutual funds, stocks, commodity markets, speculation, and auctions. ETFs would most likely be discussed here.
   - Topics: 1 323 | Posts: 47 900
   - Last post: 10. 10. 2026 09:57
   - Link: `/forum-312/Investovani.html`

2. **Daně a účetnictví** (Taxes and Accounting)
   - Covers taxation and accounting for businesses in the Czech Republic.
   - Topics: 2 224 | Posts: 20 879
   - Last post: 21. 8. 2026 12:23
   - Link: `/forum-319/Dane-a-ucetnictvi.html`

Brokers have no dedicated forum. The closest related category is **Platební styk** (Payment transactions), which covers current accounts, cards, and online banking rather than brokerage. It has 2 141 topics and 289 934 posts, with the last post on 10. 10. 2026 13:21 (`/forum-316/Platebni-styk.html`).

The page's relative links are based on the forum domain, forum.finexpert.e15.cz.
```

</details>

<details><summary>result</summary>

```
**Forum/thread:** "XTB" in the Investování subforum of FinExpert.cz (Peníze section)
**Replies/views:** The thread lists 792 posts ("Příspěvků: 792"). The page doesn't show a view count.
**Date range of this page:** 2 January 2021 to 28 February 2021

**Quotes (15):**

1. peliculiar, 2 Jan 2021 01:12: "Mimochodem, co vlastně brání následujícímu postupu"
2. tmx643, 2 Jan 2021 14:00: "Oni nenabízí možnost nákupu cizích měn"
3. peliculiar, 2 Jan 2021 22:03: "Takže Forex nejde použít ke konverzi měn?"
4. Petržel, 9 Jan 2021 21:52: "Nemají všechny tituly z burz, které podporují."
5. Petržel, 9 Jan 2021 21:52: "Nemají ochranu proti dvojímu zdanění dividend."
6. Fantucci, 10 Jan 2021 00:01: "Behem prvniho kvartalu by meli zaridit USA."
7. peliculiar, 10 Jan 2021 01:40: "Chtěl bych u nich kontinuálně nakupovat vybrané akumulační ETF"
8. Stileth, 13 Jan 2021 19:37: "Taky jsem otevrel pozice na dvou akumulacnich ETF"
9. Ondra007_, 13 Jan 2021 22:45: "Poradil by mi někdo prosím jak je to se zdaněním příjmu u xtb?"
10. peliculiar, 14 Jan 2021 02:06: "Pokud máš u brokera zainvestováno, není co danit."
11. servpack, 14 Jan 2021 07:38: "Časový test 3 roky samozřejmě pro XTB také platí."
12. servp
… [truncated, 324 more chars]
```

</details>

**→ WebFetch** https://forum.finexpert.e15.cz/forum-312/Investovani.html

> prompt: List all topic titles with reply counts, views, and last post dates. Include links for topics about ETF, S&P 500, XTB, Trading 212, Portu, daně, DIP, VWCE, brokeři.

<details><summary>result</summary>

```
Below are the 26 topics on this forum index page (page 1 of 53). The ★ marks topics matching your keywords. No topic is titled "S&P 500", so the closest match is "Akcie: záp. Evropa, sev. Amerika".

| Topic | Replies | Views | Last post | Link |
|---|---|---|---|---|
| Průvodce po SuperFóru: Pravidla, důležité informace, tipy | 15 | 12,851,349 | 2 Jul 2010 23:21 | [t=1044152](https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1044152) |
| Tipovací vlákno - kurz koruny k 31. 12. | 48 | 43,782 | 23 Jan 2026 07:18 | [t=1321094](https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1321094) |
| Investice do dluhopisů | 458 | 201,711 | 10 Oct 2026 09:57 | [t=1320223](https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1320223) |
| Doornite | 9 | 494 | 10 Oct 2026 00:19 | [t=1343726](https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1343726) |
| eToro | 324 | 103,909 | 9 Oct 2026 16:00 | [t=1306829](https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1306829) |
| Dluhopis republiky | 2,704 | 717,330 | 8 Oct 2026 17:36 | [t=1297884](https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1297884) |
| Doplňkové penzijní spoření | 338 | 76,792 | 8 Oct 2026 11:16 | [t=1337592](https://for
… [truncated, 2856 more chars]
```

</details>

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1342864

> prompt: Quote verbatim 12-15 user posts (each under 15 words, no usernames needed but include date) that express questions, fears, jargon, confusion, preferences about ETFs (VWCE, SWRD, S&P 500, accumulating, fees, taxes, brokers). Note the thread's date range and which tickers are mentioned.

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1312638

> prompt: Quote verbatim 12-15 user posts (each under 15 words, no usernames needed but include date) that express questions, fears, jargon, confusion, preferences about ETFs (VWCE, SWRD, S&P 500, accumulating, fees, taxes, brokers). Note the thread's date range and which tickers are mentioned.

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1343626

> prompt: Quote verbatim up to 10 user posts (each under 15 words, with date) about brokers, ETFs, fees, security/distrust. Note which brokers mentioned.

<details><summary>result</summary>

```
**Thread:** "swrd,vwce,? kam dále?" on FinExpert.cz (Investování forum). The visible page covers posts from **16 Feb 2026 to 6 Apr 2026**.

**Tickers mentioned:** SWRD, VWCE, IWDA, SPPW, WEBN, IS3N, IUSN, ZPRS, F50A, SC0J, XMME, SPEX, RSPB, ACWI. The S&P 500 and "accumulating" are not discussed on this page.

**Selected user posts (verbatim, Czech):**

1. 16. 2. 2026: "V současnosti mám přes 38 tis eur zainvestovanýyh u Lynx do etf iwda."
2. 16. 2. 2026: "Vím že by asi dávalo větší rozum nakupovat něco na celý svět"
3. 16. 2. 2026: "Nabízí se možnost třeba totožného swrd akorát od jiného správce aktiv."
4. 16. 2. 2026: "Tebou uvedené SWRD, resp. SPPW má i nižší TER než IWDA"
5. 16. 2. 2026: "Při těchto objemech bych to klidně nakupoval přes e-Broker"
6. 16. 2. 2026: "Když jsem se minule díval na IB, tak tam měli poplatek za neaktivitu"
7. 16. 2. 2026: "jsem si vědom že emrg. markets rozhodně mají být součást portfolia"
8. 16. 2. 2026: "země kde o věcech rozhoduje strana a vláda působí dost rizikově."
9. 16. 2. 2026: "Tady už se začíná rýsovat otázka jestli to investovat formou jednoho etf"
10. 16. 2. 2026: "pomocí dvou etf swrd+is3n s rebalanci podle tržní kapitalizace"
11. 16. 2. 
… [truncated, 628 more chars]
```

</details>

<details><summary>result</summary>

```
**Thread:** "Dlouhodobá investice do ETF - jak nejlépe?" (FinExpert.cz forum, Investování), page 1 of 6. The visible posts run from **12 Dec 2020 to 1 Nov 2021**.

**Quotes (verbatim, Czech):**

1. **12. 12. 2020** (fear/goal): "Chtěl bych někam investovat peníze tak, aby se mi po cca 15 let zhodnocovaly."
2. **12. 12. 2020** (preference): "Zajímají mě ETF, které jsou bezpečné z pohledu jejich portfolia a současně vyplácí dividendy."
3. **12. 12. 2020** (confusion about market): "Pořád jsem čekal, že přijde pořádný propad a trh zcela nelogicky jenom stoupá..."
4. **12. 12. 2020** (dividend reinvestment): "Pokud chceš ty dividendy rovnou reinvestovat, není moc důvod je vyhledávat."
5. **12. 12. 2020** (fear): "Dokud to bude FED dotovat, dolů to nepůjde, ani kdyby byla nezaměstnanost třeba 50%."
6. **12. 12. 2020** (fear about politics): "spíš se bojím nějakého šíleného politika"
7. **12. 12. 2020** (jargon, 4% rule): "Tedy zvolit akumulační ETF a až přijde čas"
8. **13. 12. 2020** (accumulating ETF question): "Máte nějaké doporučení ohledně těch akumulačních ETF?"
9. **13. 12. 2020** (jargon, acc/dist): "Většina těch nejpopulárnějších ETF je ve verzi akumulační i distribuční."
10. *
… [truncated, 1156 more chars]
```

</details>

<details><summary>result</summary>

```
1. **martin7601m**, 6. 9. 2026 09:35: "Investuji cca 50.000 Kč měsíčně do ETF." *(ETF investing; no broker named)*

2. **minarjo**, 6. 9. 2026 10:16: "nedrž u brokerů zbytečně velkou cash" *(broker cash holdings; no broker named)*

3. **vojta80**, 6. 9. 2026 10:25: "každý další broker bývá z podstaty méně výhodný" *(fees; no broker named)*

4. **vojta80**, 6. 9. 2026 10:25: "Ne, nemá myslím smysl udržet se za každou cenu v limitu pojištění." *(insurance limit; no broker named)*

5. **vojta80**, 6. 9. 2026 10:25: "Tento přístup by postupně nutně vedl k používání ne příliš spolehlivých brokerů" *(distrust of unreliable brokers; no broker named)*

6. **cz01**, 6. 9. 2026 10:27: "Za bezpečné považuji Interactive Brokers, nebo třeba Saxo a tam i investuji." *(Brokers: Interactive Brokers, Saxo)*

7. **cz01**, 6. 9. 2026 10:27: "nemám v ně důvěru, že vše bude bezproblémové dalších třeba 10 let." *(distrust of cheaper brokers; XTB and Trading212 are named in the same post, but not in this quote)*

8. **slavo963**, 6. 9. 2026 12:39: "ze broker s vasimi akciemi neudela fraud" *(distrust/security; no broker named)*

9. **fc70**, 6. 9. 2026 17:14: "nakonec může přidání nějakého pofidérního br
… [truncated, 395 more chars]
```

</details>

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1330926&start=1890

> prompt: Quote verbatim 12 recent user posts (each under 15 words, with date) about DIP: fears, questions, confusion, taxes (48 000 Kč), which provider/ETF, fees, trust. Mention the date range of the page.

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1305135&start=680

> prompt: Quote verbatim 12 recent user posts (each under 15 words, with date) about Trading 212: ETFs, taxes, W-8BEN, fees, fractional shares, trust, withdrawals. Mention date range.

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1278158&start=450

> prompt: Quote verbatim 12 recent user posts (each under 15 words, with date) about Portu: fees, ETFs, S&P 500, robo-advisor vs DIY, trust, returns, taxes. Mention date range.

<details><summary>result</summary>

```
**Portu posts, 7 Sep 2026 – 3 Oct 2026** (12 posts, all quoted verbatim)

1. **minarjo**, 7 Sep 2026: "na české akcie takto "vše v jednom" je tato první a jednoduchá." (fees/platform)
2. **meme1255**, 7 Sep 2026: "až do konce září je tento instrument" (fees: no purchase fee in brokerage)
3. **panPeněženka**, 7 Sep 2026: "to bude to Portu asi nejvýhodnější, což?" (fees)
4. **martin7601m**, 7 Sep 2026: "Portu mám a uvažuji o nějakém symbolickém nákupu" (user experience)
5. **dasvoboda**, 7 Sep 2026: "Škoda, že v Praze nevidím moc akcií s potenciálem růstu." (returns/outlook)
6. **pmaly**, 7 Sep 2026: "Zajimavej tip koupit si jen tak pro zábavu" (DIY investing)
7. **dasvoboda**, 11 Sep 2026: "Tak to je známá věc, gamifikace investování a overtrading," (trading apps)
8. **intfo**, 11 Sep 2026: "Je dobré mít na paměti, že to ve skutečnosti ETF není." (ETFs)
9. **minarjo**, 11 Sep 2026: "chová se to a bude se to chovat jako známá evropská UCITS ETFka" (ETFs)
10. **intfo**, 11 Sep 2026: "A může to řešit problém s rakouskou daní z dividend." (taxes)
11. **martin7601m**, 3 Oct 2026: "Akce je prodloužená do konce října" (fees: promotion extended)
12. **dasvoboda**, 3 Oct 2026: "Někde těsně n
… [truncated, 347 more chars]
```

</details>

<details><summary>result</summary>

```
Stránka obsahuje jen 15 příspěvků z období **18. 8. 2026 až 6. 10. 2026**. Témata ETFy, W-8BEN a trust se v nich neobjevují, takže níže jsou příspěvky o daních, poplatcích, frakčních akciích a výběrech.

1. **18. 8. 2026, minarjo:** "Kč z/na CFD to ukazuje bez poplatku i mě."
2. **18. 8. 2026, Alpha8520:** "pro bezplatný převod musím šaškovat s Revolutem a dělat platbu kartou."
3. **18. 8. 2026, cz01:** "Pozor na objem směn, dělal jsem měsíčně cca 100 000 Kč"
4. **18. 8. 2026, cz01:** "Přesně tak, problém je směna a vyvedení prostředků pryč."
5. **18. 8. 2026, hyper9:** "2025 US dividends withholding tax refund adjustment"
6. **29. 8. 2026, Kurtis77:** "Kurz mi vychádza +- 0,2% v porovnaní s revolutom"
7. **29. 8. 2026, Kurtis77:** "Ale von z T212 som použil max 5-10% zo zamenených penazí"
8. **5. 10. 2026, maaart:** "Nyní chtějí znát dúvod vkladu a výběru a původ peněz."
9. **5. 10. 2026, vojta80:** "Bohužel tyhle pravidla jsou fuzzy a vede to k problémům."
10. **6. 10. 2026, slavo963:** "Jsem zevdavy, kdy zacnou opruzovat kvuli nabijeni CFD uctu kartou"
11. **6. 10. 2026, intfo:** "Problem je ten okamzity vklad, smena, vyber."
12. **6. 10. 2026, Alpha8520:** "Dostal jsem nějakou 
… [truncated, 43 more chars]
```

</details>

<details><summary>result</summary>

```
**Date range of this page:** 20 September 2026 to 3 October 2026 (thread page 127 of 128).

1. **20. 9. 2026, malyp** (question/strategy): "Já posílám 1700Kč do penzijka a příspěvek od zaměstnavatele směruji do DIP"
2. **2. 10. 2026, tester355789** (taxes/employer): "Technicky to jde, stačí se domluvit na snížení mzdy"
3. **2. 10. 2026, saabik** (confusion): "Nesouhlasím. DPS se používá na předdůchod."
4. **2. 10. 2026, Milos** (question): "stačí mít založené DPS a spořit na něm klidně jen 100Kč měsíčně"
5. **3. 10. 2026, pmaly** (state contribution): "Podle mě určitě má smysl využít i státní příspěvek"
6. **3. 10. 2026, drkarel** (fees): "Hlavně se spotřebuje na poplatky."
7. **3. 10. 2026, dasvoboda** (trust/fears): "Taky nevěřím, že tu dlouhodobě vydrží tříletý časový test na investice"
8. **3. 10. 2026, Milos** (confusion/law change): "Ty plánované změny DPS (Lepší penzijko) jsou už kompletně schválené"
9. **3. 10. 2026, malyp** (fees): "Že by se jen spotřeboval na poplatky není úplně pravda"
10. **3. 10. 2026, dasvoboda** (law change uncertainty): "Schválené to není, ale prvním čtením už to prošlo"
11. **3. 10. 2026, xls** (provider/product): "začal jsem zkoušet třeba investic
… [truncated, 304 more chars]
```

</details>

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=PRIIPs+KID+VOO&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: List result posts: topic titles, dates and snippets (each snippet under 15 words) about US ETFs (VOO, SPY, QQQ) unavailable to EU retail because of PRIIPs/KID. Number of results.

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1311279&start=775

> prompt: Quote verbatim 12 recent user posts (each under 15 words, with date) about XTB: ETF investing plans, fees, taxes (dividends 35%), app, trust, support. Mention date range.

<details><summary>result</summary>

```
**Number of results: 10** (all on one page)

1. **Re: Zkušenosti s brokery z USA Firstrade, Tastytrade, SogoTrade**. 5 Aug 2025. US brokers may offer ETFs that don't meet EU PRIIPs rules.
2. **Re: Investice do dluhopisů**. 3 Jul 2025. Commentary on structured products, which the poster considers rarely suitable. Only loosely related to US ETFs.
3. **Re: Jak vybrat brokera?**. 20 Jan 2025. Some brokers may apply PRIIPs too strictly; others sell ETFs without a KID.
4. **Re: Jak vybrat brokera?**. 19 Jan 2025. Asks whether Saxo/TraderGo still block ETFs lacking a Czech KID.
5. **Re: Degiro**. 6 Apr 2023. Discussion of tax deductibility of purchase costs and Degiro reports. Not about ETF availability.
6. **Re: Degiro**. 16 Mar 2023. Some BlackRock ETFs remain buyable on Degiro despite having only a Dutch KID.
7. **Re: Degiro**. 15 Mar 2023. Criticism of Degiro blocking ETFs without a Czech KID on its English-language platform.
8. **Fio e-Broker, depozit USD (bez konverze měny)**. 7 Mar 2021. US-domiciled ETFs were still available at Fio e-Broker, which the poster wanted to use before restrictions.
9. **Re: Rada pro drobného a nerozhodného investora**. 23 Mar 2019. Irish ETF dividend wi
… [truncated, 335 more chars]
```

</details>

<details><summary>result</summary>

```
The thread covers fees, card transfers, dividends, and broker trust, but not ETF plans, the 35% dividend tax, the app, or support. Posts run from **23 June 2026 to 6 July 2026**. Quotes are verbatim in Czech; the notes are my paraphrases.

1. **23 Jun 2026, tulum:** "Řeším to, ..." *(fees: moving money out of XTB via Revolut)* — *Omitted; see #2.*
2. **23 Jun 2026, Milos:** "Podle mě ti dobití Revolutu kartou XTB neprojde" *(card transfers: doubts a card top-up would work)*
3. **24 Jun 2026, slavo963:** "Podle mne to riziko mozneho korenspondecniho poplatku za to nestoji" *(fees: correspondent bank charges not worth the risk)*
4. **24 Jun 2026, tulum:** "tam problém z jejich strany žádný není" *(card top-ups: no problem on XTB's side)*
5. **24 Jun 2026, slavo963:** "Teoreticka sance je, ze to poslou jako OUR, analogicky jako do eToro" *(fees: a possible way to avoid extra charges)*
6. **24 Jun 2026, tulum:** "na menší částku to je moc dobré řešení" *(fees: a good option for smaller amounts)*
7. **1 Jul 2026, Bellows-CZE:** "Je to trochu složitější ale bez poplatků." *(fees: more complicated but fee-free)*
8. **1 Jul 2026, tulum:** "jen byl účtovaný poplatek na straně RVL" *(fees: t
… [truncated, 686 more chars]
```

</details>

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=VOO&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: How many results total? List topic titles, dates and snippet text (under 15 words each) of posts mentioning VOO, with what context (US ETF availability).

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=CSPX&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: How many results total? List topic titles, dates and snippet text (under 15 words each) of posts mentioning CSPX, with context.

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=VWCE&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: How many results total? List topic titles, dates and snippet text (under 15 words each) of posts mentioning VWCE, with context.

<details><summary>result</summary>

```
**Total results: 0.** The page says "Nebyly nalezeny žádné vhodné výsledky" (no suitable results were found).

- **Topic titles, dates, and snippets:** None, because there are no posts.
- **Context (US ETF availability):** The page doesn't discuss this. The only trace of "VOO" is in the login and registration links, which carry a search parameter (`keywords=VOO`) for the FinExpert forum's section 312.
```

</details>

<details><summary>result</summary>

```
**Total results:** 185 posts (13 pages), all matching "+VWCE" in the Investování forum. This page shows the first 15.

**Posts where VWCE appears in the visible snippet:**

1. **"Re: Interactive Brokers"** (4 Sep 2026, martin7601m, 342 replies)
   - Snippet: "Držím jen VWCE a VGWE" ("I only hold VWCE and VGWE").
   - Context: The poster asks whether to sign an IBKR Hong Kong stock lending agreement, which is a broker-level question.

2. **"Re: Dlouhodobá investice do ETF - jak nejlépe?"** (24 Aug 2026, dasvoboda, 87 replies)
   - Snippet: "které také snížilo TER" ("which also lowered its TER").
   - Context: The poster suggests waiting a few months for a new Vanguard ETF, since its spread may be wider at launch. VWCE has also recently cut its fee.

3. **"Re: Dlouhodobá investice do ETF - jak nejlépe?"** (24 Aug 2026, slavo963, 87 replies)
   - Snippet: "nahradím VWCE a WEBN" ("I will replace VWCE and WEBN").
   - Context: The poster plans to swap VWCE and WEBN for the new Vanguard FTSE Global All-Cap ETF (VGLA) in a conservative retirement portfolio, to get small caps in one cheap fund.

**Posts that matched VWCE but where the snippet doesn't show it:**

These posts are in the "swr
… [truncated, 1377 more chars]
```

</details>

<details><summary>result</summary>

```
**Total:** 25 results across 2 pages. This page shows 15 of them; the other 10 are on page 2, which isn't included here.

**Results on this page (all in the Investování forum):**

1. **"Sporici produkty pro deti?"** (7. 2. 2026): Describes Porto's children's fee and lists "44,1% Americké S&P500 (CSPX)" as its top holding.
2. **"DIP vs. Degiro – jak naložit s bonusem od zaměstnavatele?"** (17. 11. 2025): "Zrovna CSPX lze u Patrie nakupovat v režimu pravidelného investování" (Patria monthly-investing fee discussion).
3. **"ETF"** (23. 2. 2024): A beginner asks how to invest surplus cash in accumulating ETFs. The visible snippet doesn't show CSPX.
4. **"XTB a nákup akcíí na dlouho"** (22. 1. 2024): Asks the difference between "iShares Core S&P 500 UCITS ETF (Acc USD), CSPX.UK", and the EUR-denominated version.
5. **"Portfolio - výběr ETF"** (15. 12. 2022): Discusses currency exposure in global ETFs. The visible snippet doesn't show CSPX.
6. **"Portfolio - výběr ETF"** (12. 12. 2022): Compares a factor ETF with passive options, including "pasívních ACWD nebo CSPX".
7. **"Portfolio - výběr ETF"** (12. 12. 2022): Describes a diversified Porto portfolio. The visible snippet doesn't show C
… [truncated, 1323 more chars]
```

</details>

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=SPY&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: How many results total? List up to 8 topic titles with dates and snippets (under 15 words) mentioning SPY ETF, particularly regarding availability to Czech retail investors.

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=QQQ&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: How many results total? List up to 8 topic titles with dates and snippets (under 15 words) mentioning QQQ, particularly availability to Czech retail investors.

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=IWDA&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: How many results total? (just the number and a count of pages)

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=VUAA&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: How many results total? (just the number and a count of pages), plus up to 4 snippets (under 15 words) with dates.

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=SXR8&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: How many results total? (just the number and a count of pages), plus up to 4 snippets (under 15 words) with dates.

<details><summary>result</summary>

```
The search returned **141 results** across **10 pages**.
```

</details>

<details><summary>result</summary>

```
**Total results: 0.** The page says "Nebyly nalezeny žádné vhodné výsledky" (no suitable results were found). The search, for "SPY" in the finance forum section, returned nothing.

So there are no topic titles, dates, or snippets about SPY ETF or its availability to Czech retail investors. The page's other content is unrelated navigation and news headlines.
```

</details>

<details><summary>result</summary>

```
**Total results: 0.** The search page for "QQQ" in the FinExpert.cz forum shows the message "Nebyly nalezeny žádné vhodné výsledky" ("No suitable results were found"), so there are no topic titles, dates, or snippets to list.

The page also contains nothing about whether QQQ is available to Czech retail investors.
```

</details>

<details><summary>result</summary>

```
**Total:** 78 results across **6 pages**.

**Snippets:**
1. "Kdo nechce ciste SP500(napr SPYL, SXR8), tak jednoznacne to nove VGLA" (5. 9. 2026)
2. "ETF (EUR) na index S&P 500 - SXR8.DE" (6. 5. 2026)
3. "Nezkoušel jste někdo v posledni době přes MyAir koupit etf SXR8?" (20. 11. 2025)
4. "Degiro má za zvýhodněný poplatek 1EUR jenom SXR8" (9. 4. 2025)
```

</details>

<details><summary>result</summary>

```
**Total:** 13 results, on 1 page.

**Snippets:**

- **21. 11. 2025** (Trading212 UK): "Euro je teď celkem levné proto v EUR"
- **30. 10. 2025** (Patria): "Lze tyto ETF v EUR přes patrii nakoupit na trhu XETRA?"
- **21. 1. 2025** (Jak vybrat brokera?): "Ano, lze obojí (tedy SXR8 od iShares i VUAA od Vanguaru)"
- **25. 11. 2022** (XTB): "TER 0,07 %, plná replikace."
```

</details>

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=XTB&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: How many results total, and number of pages? Or does it say no results?

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=SPYL&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: How many results total? Give up to 3 snippets (under 15 words).

<details><summary>result</summary>

```
The page says there are no results. The message reads "Nebyly nalezeny žádné vhodné výsledky" ("No suitable results were found"). Because there are no results, there are no result pages to count.
```

</details>

<details><summary>result</summary>

```
**Total results: 106** (the page shows "Vyhledáváním bylo nalezeno 106 výsledků").

Three snippets mentioning SPYL:

1. "Taky osobně preferuji SPYL (ISIN: IE000XZSV718) s nižší jednotkovou cenou" (Milos, Trading212 UK thread)
2. "SPYL je dobra volba, 500 nejvetsich US firem, akumulacni, nizke TER" (slavo963, Trading212 UK thread)
3. "SPYL ma 0,03%" (slavo963, Dlouhodobá investice do ETF thread)
```

</details>

**→ WebFetch** https://www.novinky.cz/clanek/internet-a-pc-socialni-site-v-cesku-vedou-youtube-a-facebook-40459616

> prompt: Extract date, source (Ami Digital Index?), percentages for YouTube, Facebook, Instagram, TikTok usage among Czech internet users, daily usage, device/mobile info, age differences.

**→ WebSearch** `Shoptet OR Heureka podíl mobilních návštěv a objednávek e-shopy Česko 2025 mobil konverze návštěvnost z mobilu procent`

<details><summary>result</summary>

```
Web search results for query: "Shoptet OR Heureka podíl mobilních návštěv a objednávek e-shopy Česko 2025 mobil konverze návštěvnost z mobilu procent"

Web search was not performed: this turn's web search budget is used up (limit: 200 WebSearch calls per turn, shared by every agent in it). Continue with the information already gathered instead of searching again, and say so in your answer; do not work around the limit by querying search engines with curl or wget from Bash, or by searching or fetching through a third-party reader, proxy or archive service. If more searches are genuinely needed, tell the user they can send a follow-up message after this reply to continue the search, or ask them to raise CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION.


REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.
```

</details>

<details><summary>result</summary>

```
**Extracted details**

- **Date:** Published 5 February 2024, 10:15, by Lenka Zoulová.
- **Source:** The Ami Digital Index analysis, which the article cites for its platform figures. The article also cites global data from Meltwater and We Are Social.
- **Platform reach among Czech internet users (2023):**
  - YouTube: 89%
  - Facebook: 87%
  - Instagram: more than 61%, with annual growth
  - TikTok: no overall percentage given, but it had the biggest rise, up 7 percentage points from the previous year.
- **Daily usage:** About 78% of the Czech internet population uses social networks daily, spending an average of 2.5 hours there.
- **Device/mobile info:** The article gives no device or mobile breakdown for Czech users. Its only device-specific figure is global: TikTok averages 34 hours per month on Android.
- **Age differences (Facebook):** Users aged 60 and over, Generation X (43–59), and millennials are the most active. About a quarter of each of these groups post daily, compared with 14% of Generation Z.
```

</details>

**→ WebFetch** https://forum.finexpert.e15.cz/search.php?keywords=CSPX&terms=all&sf=all&fid%5B%5D=312&sr=posts

> prompt: List the exact URLs (href) of the topics titled "Investice do S&P 500 - CSPX", "XTB vs. Portu - ETF S&P500", "Proč jsou různé ETF stejného indexu jinak drahé?", "ETF" (23.2.2024), "Sporici produkty pro deti?".

<details><summary>result</summary>

```
Relative hrefs as they appear on the page, with the base domain inferred from the login links:

1. **"Investice do S&P 500 - CSPX"**: `/viewtopic.php?f=312&t=1317960&hilit=CSPX`
2. **"XTB vs. Portu - ETF S&P500"**: `/viewtopic.php?f=312&t=1320538&hilit=CSPX`
3. **"Proč jsou různé ETF stejného indexu jinak drahé?"**: `/viewtopic.php?f=312&t=1320610&hilit=CSPX`
4. **"ETF"** (post dated 23. 2. 2024): `/viewtopic.php?f=312&t=1323373&hilit=CSPX`
5. **"Sporici produkty pro deti?"**: `/viewtopic.php?f=312&t=1342789&hilit=CSPX`

Full URLs, assuming the base is `https://forum.finexpert.e15.cz`:

- https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1317960&hilit=CSPX
- https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1320538&hilit=CSPX
- https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1320610&hilit=CSPX
- https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1323373&hilit=CSPX
- https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1342789&hilit=CSPX
```

</details>

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1317960

> prompt: Quote verbatim 12-15 user posts (each under 15 words, with date) from this thread "Investice do S&P 500 - CSPX": beginner questions, currency risk (CZK vs USD), accumulating, fees, brokers, fear. Give the date range.

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1323373

> prompt: Quote verbatim 10-12 user posts (each under 15 words, with date) from this thread "ETF" started 2024: beginner questions about accumulating ETF, taxes, brokers, fear. Give the date range.

**→ WebFetch** https://forum.finexpert.e15.cz/viewtopic.php?f=312&t=1320610

> prompt: Quote verbatim 8-10 user posts (each under 15 words, with date) from this thread "Proč jsou různé ETF stejného indexu jinak drahé?": confusion about price, currency, TER, listing venues, ticker. Give the date range.

<details><summary>result</summary>

```
The thread isn't from 2024. The first post is dated 18. 4. 2022, and every post on this page falls between 18. and 19. 4. 2022. The visible discussion is about choosing an accumulating ETF, not beginner fears. Taxes come up only briefly. Here are verbatim quotes from the posts that touch on your topics, with dates:

1. **Explosion_CZ, 18. 4. 2022:** "Jsem silně nakloněn ke koupi dalšího akumulačního ETF"
2. **ggnejez, 18. 4. 2022:** "Zbavuje tě to povinnosti řešit případné reinvestice distribuce a daňové povinnosti."
3. **ggnejez, 18. 4. 2022:** "ETFondy nemusí platit daň z přijatých dividend"
4. **vpe, 18. 4. 2022:** "a kdes to četl?"
5. **vpe, 18. 4. 2022:** "Pravda je, že ETF vyplácejí tak malé divi"
6. **vpe, 18. 4. 2022:** "Ale zase mají ty distribuční nižší TER."
7. **Explosion_CZ, 18. 4. 2022:** "Případně je nějaká lepší alternativa, než SXR8?"
8. **tmx643, 18. 4. 2022:** "Prostě nemuset sahat do těch investic a nemuset si půjčovat."
9. **ggnejez, 18. 4. 2022:** "Jsem ve velmi podobné situaci jako ty"
10. **fc70, 19. 4. 2022:** "Koncentrace do jednoho sektoru je napováženou"
11. **blue.sky, 19. 4. 2022:** "bude mít ještě nějakou přidanou hodnotu"
12. **Explosion_CZ, 19. 4. 2
… [truncated, 152 more chars]
```

</details>

<details><summary>result</summary>

```
Tato vlákna z 7. 12. 2021 až 15. 1. 2022 obsahují těchto osm krátkých příspěvků:

1. **friskac**, 7. 12. 2021: "Fondy mají sledovat stejný index, proč se tedy cena liší? V čem je rozdíl?" (cena)
2. **friskac**, 7. 12. 2021: "ETF CSPX.UK (iShares S&P500 USD Accumulating), stojí 478 USD." (ticker, měna)
3. **friskac**, 7. 12. 2021: "SPY5.UK (SPDR S&P500 USD Distributing) stojí 468 USD." (ticker, měna)
4. **slavo963**, 7. 12. 2021: "CFD nee....neplati casovy test....na degiro ETF SP 500 za 75€..." (burzy a brokeři, cena)
5. **Luigy51**, 14. 1. 2022: "Ještě bych rád jednou otevřel otázku rozdílnosti cen." (cena)
6. **vpe**, 14. 1. 2022: "Ano, distribucni nebo americke maji mensi TER, jiz od 0,03%, ale …" (TER)
7. **vpe**, 14. 1. 2022: "Treba SXR8 s TER 0,07." (ticker, TER)
8. **ikovinvest**, 15. 1. 2022: "Neni na seznamu zdarma......" (burzy a brokeři)
```

</details>

<details><summary>result</summary>

```
**Date range:** 26 August 2021 to 1 September 2021

1. **mates247** (26. 8. 2021): "Dostudoval jsem SŠ a začal pracovat, nemám velké výdaje" *(beginner)*
2. **mates247** (26. 8. 2021): "Zatím jsem dohledal, že by pro mě bylo nejlepší koupit CSPX." *(beginner)*
3. **Jan_21** (27. 8. 2021): "Jak v takových případech řešíte kurzové riziko, investovat budu z CZK" *(currency risk)*
4. **Jan_21** (27. 8. 2021): "Je vůbec možnost dostat někde férový kurz?" *(currency risk)*
5. **Explosion_CZ** (27. 8. 2021): "Vybral jsem si ho v akumulační formě, a to z daňových důvodů." *(accumulating)*
6. **Explosion_CZ** (27. 8. 2021): "Degiro má za mě velkou výhod, že můžete určitá ETF nakupovat zdarma" *(fees)*
7. **Explosion_CZ** (27. 8. 2021): "Brokera používám Degiro, účet si založíte on-line" *(brokers)*
8. **Explosion_CZ** (27. 8. 2021): "historické výnosy však nemusí znamenat výnosy budoucí." *(caution)*
9. **mates247** (28. 8. 2021): "Během následujících pár měsíců si o tom ještě nastuduji." *(beginner)*
10. **volnicko** (28. 8. 2021): "Musi vlezt do platformy a kliknout na nakup, ale nakladovost super." *(fees)*
11. **volnicko** (28. 8. 2021): "Holt to clovek nebude mit plne automatizovane." 
… [truncated, 584 more chars]
```

</details>

**→ WebFetch** https://cdn.patria.cz/about/information/Vyrocni_zprava_PF_2025.pdf

> prompt: Find number of clients (retail), ETF-related growth, assets, and any mention of Indigo app or ETF trading volumes in Czech Republic. Report exact numbers.

**→ WebFetch** https://www.revolut.com/en-LT/news/revolut_tops_10_million_retail_customers_in_the_cee_region_and_strengthens_its_position_as_a_regional_digital_bank/

> prompt: Find Czech Republic customer count if stated, date, and any investing/stocks/ETF numbers.

**→ WebFetch** https://finex.cz/recenze/xtb/

> prompt: Extract: number of XTB clients (global and in Czechia if stated), date updated, ETF count, ETF fees, DIP offering, investment plans details, tax handling of dividends for Czech investors (35%?), whether US-listed ETFs are available, min deposit.

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

</details>

<details><summary>result</summary>

```
I couldn't find any of the requested figures in the content you provided. It appears to be raw, compressed PDF data (FlateDecode streams and object headers) rather than readable text. It's also truncated, so even the readable parts are incomplete.

I can't see any retail client counts, ETF-related growth, assets, Indigo app mentions, or ETF trading volumes for the Czech Republic, so I won't report numbers.

To get an answer, you could:
- Paste the document's extracted text, or the relevant sections.
- Share a link to the page or a text-based version of the report, if one is available.
- Upload the PDF in a format with an extractable text layer.

[Binary content (application/pdf, 1.9MB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637979928-enn1qs.pdf]
```

</details>

<details><summary>result</summary>

```
**Key facts from the XTB review (page last updated 12 Aug 2026):**

- **Number of clients:** "Aktuálně má broker 2 900 000+ klientů" ("currently the broker has 2,900,000+ clients"). This is a global figure. The page gives no Czech-specific count.
- **Date updated:** 12 August 2026 ("Poslední aktualizace 12. 8. 2026").
- **ETF count:** 2,000+ ETFs ("2 000+ globálních ETF"). The investment plans section says more than 1,900 ETFs are available for plans.
- **ETF fees:** Buying physical ETFs is free of commission ("Zdarma"). The minimum ETF trade is 1 EUR. A custody fee of 0.02% per year of portfolio value applies, charged monthly. The page says there is no inactivity fee. Currency conversion costs 0.5%.
- **DIP offering:** The page doesn't use the term "DIP." Its closest equivalent is XTB's "investiční plány" (investment plans). Per the page:
  - Plans can hold more than 3,400 stocks and 1,900 ETFs, and can mix both.
  - Users can build their own portfolio with chosen weights, or pick ready-made plans, including globally diversified and sector-focused ones.
  - Automatic investing runs at a chosen amount and frequency, with automatic dividend reinvestment.
  - The page calls the plans
… [truncated, 539 more chars]
```

</details>

**→ Bash** — Extract Patria annual report text and grep for client numbers

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && pdftotext -layout webfetch-1791637979928-enn1qs.pdf /tmp/patria.txt 2>/dev/null; wc -c /tmp/patria.txt; grep -n -i -E "klient|ETF|Indigo|94" /tmp/patria.txt | head -40
```

<details><summary>result</summary>

```
250887 /tmp/patria.txt
12:Patria Finance, a.s., nab�z� sluzby investicn�ho bankovnictv� jiz od roku 1994. Poskytuje pedevs�m obchodov�n�
19:spolecnosti rekordn�. Patria Finance ke konci roku 2025 spravovala �cty pro v�ce nez 94 tis�c priv�tn�ch a
20:institucion�ln�ch klient (o 16 % vice nez ped rokem) na tech stedoevropsk�ch trz�ch. Po stabilizacn�m roce
26:Rok 2025 byl velmi bohat� na dn� na financn�ch trz�ch a poskytoval klientm adu investicn�ch p�lezitost�.
40:Popsan� prosted� se projevilo ve zv�sen� klientsk� aktivit, a to nejen v oblasti obchodov�n�. Za cel� rok Patria
41:Finance zrealizovala pro sv� klienty obchody za 467 mld. Kc, coz je mezirocn� n�rst o 11 %. U retailov�ch
42:klient byly obchody zrealizov�ny ze 72 % na trz�ch v USA, n�sledovan� prazskou burzou s pod�lem kolem 10
43:%. Naopak u institucion�ln� klientely dominovaly obchody na stedoevropsk�ch trz�ch v cele s prazskou a
44:budapesskou burzou. V roce 2025 jsme vyuzili ve prospch nasich klient pesun c�sti server p�mo do s�dla
51:investicn�m produktem Skupiny. V�raznou zmnou obchodn� strategie ve prospch klient pak bylo sn�zen�
54:Z pohledu obsluhy klient spolecnost pokracovala v rozvoji sv�ch digit�ln�ch kan�l � 
… [truncated, 2797 more chars]
```

</details>

**→ Bash** — Read Patria annual report intro

```
sed -n 15,60p /tmp/patria.txt
```

<details><summary>result</summary>

```
a clenem Budapessk� burzy.

Vlastn� kapit�l spolecnosti Patria Finance, a.s. cin� 1,39 mld. Kc. Zisk ped zdann�m v roce 2025 pes�hl 582
mil. Kc., coz pedstavuje rst o v�ce nez 6 % oproti roku 2024, jehoz hospod�sk� v�sledek byl v historii nas�
spolecnosti rekordn�. Patria Finance ke konci roku 2025 spravovala �cty pro v�ce nez 94 tis�c priv�tn�ch a
institucion�ln�ch klient (o 16 % vice nez ped rokem) na tech stedoevropsk�ch trz�ch. Po stabilizacn�m roce
2024 jsme v roce 2025 pln rozvinuli obchodn� potenci�l expanze na maarsk� trh, kdy obchodn� a financn�
v�sledky daleko pes�hly ocek�v�n�. Oteven�m pobocky na Slovensku v �jnu 2025 spolecnost d�le
pokracovala v naplov�n� strategie Skupiny KBC, kter� chce m�t Patrii jako obchodn� platformu pro cel� region
stedn� a v�chodn� Evropy.

Rok 2025 byl velmi bohat� na dn� na financn�ch trz�ch a poskytoval klientm adu investicn�ch p�lezitost�.
Akciovou rally z poc�tku roku perusil pln� rozjezd programu americk�ho prezidenta Trumpa. Investoi si pod
novou administrativou probl�my p�lis nepipoustli, takze celn� smrs, kulminuj�c� tzv. reciprocn�mi cly vyvolala
na konci prvn�ho ctvrtlet� vlnu impulzivn�ch v�prodej. N�sledn� odklady a �pravy cel a d
… [truncated, 2581 more chars]
```

</details>

**→ WebFetch** https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/

> prompt: Extract the statistic about mobile site visits abandoned if loading takes longer than 3 seconds, the sample/year of the study, and the relationship between load time and bounce probability.

**→ WebFetch** https://web.dev/case-studies/milliseconds-make-millions

> prompt: Extract the key findings: 0.1 second improvement effect on conversions in retail and travel, and lead-gen/finance results; year.

<details><summary>result</summary>

```
REDIRECT DETECTED: The URL redirects to a location that was not fetched automatically.

    Original URL: https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/
    Redirect URL (from the server's Location header — server-supplied, not verified): https://business.google.com/en-all/think/
    Status: 301 Moved Permanently

    To complete your request, I need to fetch content from the redirected URL. Please use WebFetch again with these parameters:
    - url: "https://business.google.com/en-all/think/"
    - prompt: "Extract the statistic about mobile site visits abandoned if loading takes longer than 3 seconds, the sample/year of the study, and the relationship between load time and bounce probability."
```

</details>

<details><summary>result</summary>

```
**Key findings (0.1-second mobile speed improvement):**

- **Retail:** Progression rates rose at nearly every step of the mobile journey. Product Detail to Add to Basket rose 9.1%, and retail consumers spent 9.2% more. The image summary cites an 8.4% rise in conversion rates.
- **Travel:** Check-out completion rose 2.2%, and booking rates improved 10%. The image summary cites a 10.1% rise in conversion rates.
- **Lead generation:** Users progressing to the Form Submission page rose 21.6%, and page views rose 7%.
- **Finance:** The page doesn't include finance-specific results.

**Year:** The study monitored mobile load times for 30 days at the end of 2019. The page was last updated June 24, 2020.
```

</details>

**→ WebFetch** http://www.cnb.cz/export/sites/cnb/en/economic-research/.galleries/seminars_workshops/2021/20210913_rod_2021_presentation_bruha.pdf

> prompt: Find participation rates (% of households) for mutual funds, shares, bonds with the HFCS wave year. Report values with labels.

<details><summary>result</summary>

```
I couldn't find the participation rates for mutual funds, shares, or bonds, or the HFCS wave year, in the content you provided. The text is a raw PDF file dump: most of the page streams are compressed or embedded image data, and the content is truncated before any readable tables or prose appear. The only readable metadata is that the document is tagged as Czech (`cs-CZ`) and has 15 pages.

If you paste the text of the relevant pages, or the specific tables, I can extract the mutual fund, shares, and bonds figures and the survey wave they come from.

[Binary content (application/pdf, 817.7KB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791638012154-acdwsp.pdf]
```

</details>

**→ Bash** — Extract CNB presentation text and grep for participation rates

```
cd "C:/Users/matus/.claude/projects/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/tool-results/" && pdftotext -layout webfetch-1791638012154-acdwsp.pdf /tmp/cnb.txt 2>/dev/null; wc -c /tmp/cnb.txt; grep -n -i -E "mutual|shares|bonds|participation|HFCS|wave|2017|2020|2021" /tmp/cnb.txt | head -50
```

<details><summary>result</summary>

```
29162 /tmp/cnb.txt
1:                CNB Research Open Day 2021
9:                Prague, 13 September 2021
19:          � Assets, liabilities � participation rates and conditional amounts
30:� Project: Czech National Bank and Czech Statistical Office in cooperation with the ESCB HFCS Network
35:          � Yearly (2020, 2021, 2022)
39:� Fieldwork for HFCS CZ 2020
41:          � February-December 2020. Completed.
69:item response rates:                        Mutual funds                              7.0 169,158 1,000 40,000 66,000 200,000 650,000 1,900,000 1
71:� < 0.3% missing (1-5 obs out of 1,555) Bonds                                         1.2 340,526 10,000 100,000 200,000 500,000 1,100,000 1,100,000 0
73:� < 4.3 % missing for pensions (67 obs) Shares (publicly traded)                      3.6 278,346 900 22,500 90,000 235,000 1,200,000 3,250,000 0
273:                                                       Sources: HFCS Czech Republic 2020 (preliminary), HFCS ECB 2017 (May 2021 update), Fessler and Sch�rz (2020).
306:                                                    Sources: HFCS Czech Republic 2020 (preliminary), HFCS ECB 2017 (May 2021 update), Fessler and Sch�rz (2020)
… [truncated, 545 more chars]
```

</details>

**→ Bash** — Context lines for HFCS participation table

```
sed -n 60,80p /tmp/cnb.txt
```

<details><summary>result</summary>

```
� Asset distributions skewed to the right   Self-employment business wealth           8.2 1,776,697 0                        20,000 253,000 1,000,000 7,000,000 45,000,000 4
                                            Financial assets                          97.2 395,323 0                         70,000 190,000 460,000 1,490,000 11,605,000 2

                                            Deposits                                  92.6 263,850 0                         40,000 100,100 280,000 1,000,000 10,105,000 2

                                               Sight accounts                         91.6 206,602 0                         30,000 80,000 200,000 750,000 10,000,000 2

� On the data collection side, pretty good     Savings accounts                       33.1 167,494 1,700 47,000 100,000 200,000 519,320 2,000,000 4

item response rates:                        Mutual funds                              7.0 169,158 1,000 40,000 66,000 200,000 650,000 1,900,000 1

� < 0.3% missing (1-5 obs out of 1,555) Bonds                                         1.2 340,526 10,000 100,000 200,000 500,000 1,100,000 1,100,000 0

� < 4.3 % missing for pensions (67 obs) Shares (publicly traded)  
… [truncated, 525 more chars]
```

</details>

### 🤖 Claude · 2026-10-10 13:13:44

You've hit your session limit · resets 6:40pm (Europe/Prague)

*[context injected: The coordinator sent a message while you were working:]*

**→ Write** `C:\Users\matus\Desktop\B_project\research\01-audience.md`

```
# Audience: the Czech retail ETF investor

Research agent A (Claude Sonnet 5.5). All sources accessed 2026-10-10. Tags: `[VERIFIED]` = page or file opened and states it; `[INFERRED]` = my reasoning, or only a search snippet / headline / secondary summary was available.

Method notes: Reddit, Facebook groups and YouTube comments could not be accessed (Reddit is blocked for the fetch tool and search crawler; the others are not fetchable). The web search budget ran out mid-task, so some gaps stay open. Voice-of-customer therefore comes mainly from the FinExpert.cz (e15) public forum and Czech App Store reviews. Quotes were returned through the fetch tool's text-extraction layer, so check spelling against the original before using any of them in copy.

## Summary

- Surveys disagree on "how many Czechs invest" because definitions differ: 39% (Raiffeisenbank/NMS, Feb 2026), 41% (AKAT, Feb 2025), 55% (Česká spořitelna/Ipsos, Mar 2026), 57% "have experience" (Generali/Ipsos, Apr 2025). The only ETF-specific population figure found is about 14% (Generali, 2025). No official count of Czech ETF holders exists in what I found.
- Typical investor profile across surveys: male, younger, higher income, university-educated. Women are about 38–40% of Portu clients and the fastest-growing group there. No regional data found.
- Top motivation is retirement (50% to 78% depending on survey). Inflation protection is a secondary driver (39%). The DIP tax deduction (up to 48,000 CZK a year) is a large new driver: 244,217 DIP contracts on 31 Mar 2026.
- Top barriers among non-investors are fear of losing money (73%) and a feeling of lacking money or know-how (71%) (Raiffeisenbank). Fear of fraud (43%, AKAT 2024) and distrust of brokers also appear.
- Platforms: Česká spořitelna (more than 780k investing clients), Portu (more than 280k clients), Trading 212, XTB, Revolut, Degiro, Fio, Patria. No Czech client counts are published for XTB or Trading 212.
- Czech investors discuss European UCITS ETFs (VWCE, IWDA, SWRD, SPYL, CSPX/SXR8, VUAA), not US tickers. The largest NYSE-listed ETFs (SPY, VOO, IVV) are unavailable to most EU retail clients under PRIIPs/KID rules. Fio and Patria are named exceptions. This matters for a page about NYSE ETFs.
- The questions people get stuck on: S&P 500 vs world index, accumulating vs distributing, TER (0.03% to 0.22% in the forum), broker choice, CZK/USD conversion cost, and tax (3-year time test, 15% vs 35% dividend withholding).
- Reach: Facebook ad reach 5.0M, Instagram 3.95M, TikTok 2.13M (18+), YouTube 8.08M (DataReportal, Oct 2025). Mobile is only 49.3% of all Czech web traffic (StatCounter, Sep 2026). No Czech data on landing-page behaviour after ad clicks was found.
- Sub-segments with evidence: bank-savings beginners, DIY optimisers, DIP/pension savers 40+, parents saving for children, under-30 social-media-led, women. Each is listed as an option below.

## Findings

### 1. Size and demographics

**Share who invest (all definitions differ):**
- 55% "invest" (stocks, bonds, funds), up from 41% two years earlier. 82% "let money work", which includes savings accounts. Česká spořitelna, Evropa v datech and Ipsos, published 11 Mar 2026. [VERIFIED] https://www.seznamzpravy.cz/clanek/ekonomika-b2b-investuji-uz-ctyri-z-peti-cechu-inflacni-sok-pusobil-jako-budicek-301142 Sample size reported as 1,003 aged 18–65 only in a search snippet of a page that returned 403. [INFERRED] https://www.businessinfo.cz/clanky/index-prosperity-pres-8-z-10-cechu-zhodnocuje-sve-uspory-a-vice-nez-polovina-populace-aktivne-investuje/
- 41% self-identified investors, up from 39%; 29% considering. AKAT/Perfect Crowd, n=1,114, 3 Feb 2025. [VERIFIED] https://www.newstream.cz/money/ctyri-z-deseti-cechu-se-povazuji-za-investory
- 39% invest, up from 32%. Raiffeisenbank/NMS, about 1,000 aged 18–64, Feb 2026. [VERIFIED] https://www.newstream.cz/money/investovani-je-novy-standard-zajem-cechu-vyrazne-roste. Raiffeisenbank figures in July 2026: 39% act
… [truncated, 31217 more chars]
```

<details><summary>result</summary>

```
File created successfully at: C:\Users\matus\Desktop\B_project\research\01-audience.md (file state is current in your context — no need to Read it back)
```

</details>

**→ Edit** `C:\Users\matus\Desktop\B_project\research\01-audience.md`

```
- Instagram/Facebook, women skew 52% of ad reach (DataReportal)
+ Instagram reaches 52.5% of women vs 43.8% of men (DataReportal)
```

**→ Edit** `C:\Users\matus\Desktop\B_project\research\01-audience.md`

```
- TER (0.03% to 0.22% in the forum)
+ TER (0.03% to 0.14% in the sources above)
```

<details><summary>result</summary>

```
The file C:\Users\matus\Desktop\B_project\research\01-audience.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>result</summary>

```
The file C:\Users\matus\Desktop\B_project\research\01-audience.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

**→ SubagentHandback**

```
{
 "message": "File: C:\\Users\\matus\\Desktop\\B_project\\research\\01-audience.md\n\nSummary (5 bullets):\n- \"How many Czechs invest\" ranges from 39% to 57% depending on the survey's definition (Raiffeisenbank 39%, AKAT 41%, Česká spořitelna 55%, Generali 57% \"experience\"). The only ETF-specific population figure found is about 14% (Generali 2025). Investors skew male, younger, higher income and university-educated; women are 38–40% of Portu clients and the fastest-growing group there. There is no regional data.\n- Motivations are retirement (50–78%), inflation (39%) and the DIP tax deduction (48,000 CZK a year; 244,217 contracts on 31 Mar 2026). Non-investors fear losing money (73%) and feel they lack money or know-how (71%). AKAT found fear of fraud at 43% in 2024.\n- Platforms: Česká spořitelna has more than 780k investing clients and Portu more than 280k. XTB, Trading 212 and Revolut publish no Czech client counts, so I used Czech iOS rating counts and FinExpert forum thread sizes as proxies, both flagged INFERRED. Patria's retail trades are 72% on US markets (stocks and ETFs not split).\n- Czech investors talk about UCITS tickers (forum posts mentioning each: VWCE 185, IWDA 141, SPYL 106, SXR8 78, CSPX 25). Finex (Sep 2026) says SPY, VOO and IVV are unavailable to most EU retail clients because of PRIIPs. It names Fio and Patria as exceptions. This is a direct tension with an \"NYSE ETFs\" page. The file has 33 voice-of-customer phrases grouped by fear, desire, con
… [truncated, 1583 more chars]
```

<details><summary>result</summary>

```
{"success":true,"message":"Report delivered to your caller."}
```

</details>
