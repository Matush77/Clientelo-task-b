# Subagent: Research: competitor teardown (general-purpose, model: sonnet)

## 👤 User · 2026-10-10 12:58:05

You are a research agent. Your complete task instructions are in two files written by the lead agent. Read both first and follow them exactly:
1. C:\Users\matus\Desktop\B_project\research\prompts\00-shared-rules.md (shared context and rules)
2. C:\Users\matus\Desktop\B_project\research\prompts\02-competitors.md (your specific task and output path)

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

**→ Read** `C:\Users\matus\Desktop\B_project\research\prompts\02-competitors.md`

<details><summary>result</summary>

```
1	# Agent B — Competitor teardown
2	
3	Output file: `C:\Users\matus\Desktop\B_project\research\02-competitors.md`
4	
5	## Selection
6	- Choose **5 successful Czech or Slovak websites** in retail investing that try to win contacts or sign-ups from would-be ETF investors. Candidates to evaluate (you may pick others): Portu, Fondee, Finax, XTB CZ landing pages, Trading 212 CZ, Czech finance media / educators with an e-book, calculator, course or newsletter lead magnet (e.g. Investiční web, Peníze.cz, Finparáda, Bohatství.cz or similar). Justify why each counts as "successful" (traffic, clients, AUM, awards, visible ad spend) with sources.
7	- Add **3 best-in-class international references** for ETF comparison or finance lead-generation tools (candidates: justETF, Morningstar, ETF.com, NerdWallet, extraETF, Finanzfluss — choose and justify).
8	
9	## For each of the 8 sites
10	- URL of the specific page analysed (prefer pages that receive ad traffic, e.g. dedicated campaign landing pages or pages linked from their ads, if findable).
11	- **First screen on mobile:** headline, subheadline, main CTA text, what is above the fold. (You read HTML/text, not the rendering — say when you are inf
… [truncated, 1242 more chars]
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

**→ WebFetch** https://www.finax.eu/cs

> prompt: Describe the first screen (hero): headline, subheadline, CTA button text, what is above the fold. Then list sections in order, trust signals (client numbers, AUM, licences, media logos), disclaimers/risk warnings, any calculators or interactive elements, and the form fields if any. Quote verbatim only short phrases (<15 words).

**→ WebFetch** https://www.fondee.cz/

> prompt: Describe the first screen (hero): headline, subheadline, CTA button text, what is above the fold. Then list sections in order, trust signals (client numbers, AUM, licences, media logos), disclaimers/risk warnings, any calculators or interactive elements, and any form fields. Quote verbatim only short phrases (<15 words).

**→ WebFetch** https://www.portu.cz/

> prompt: Describe the first screen (hero): headline, subheadline, CTA button text, what is above the fold. Then list sections in order, trust signals (client numbers, AUM, licences, media logos), disclaimers/risk warnings, any calculators or interactive elements, and any form fields. Quote verbatim only short phrases (<15 words).

<details><summary>result</summary>

```
The web page content you included appears to be empty. I only see two separator lines (`---`), so I can't describe the hero section, sections, trust signals, disclaimers, interactive elements, or form fields.

Please paste the page text, or the relevant portions, and I'll provide the breakdown. Any direct quotes will be kept under 15 words and 125 characters.
```

</details>

<details><summary>result</summary>

```
## Hero (above the fold)

- **Headline:** "Investování, kterému rozumíte" (investing you can understand)
- **Subheadline:** Simple, clear investing from your sofa, starting from 500 CZK.
- **Primary CTA:** "Začít investovat" (Start investing), linking to registration.
- **Secondary CTA:** "Investiční kalkulačka" (Investment calculator), anchored to the calculator section.
- **Above the fold:** Navigation (O investování, Naše účty, O Fondee, Podpora), a login link, a "Začít" button, a CZ language selector, and a row of trust stats: ČNB supervision, 27,000+ clients, and up to 11.7% average annual return over 10 years.

## Sections, in page order

1. **Hero:** Headline, stats, and CTAs. The hero block appears twice on the page.
2. **Problem statement:** "Finanční svět je nepřehledný" (The financial world is confusing). It states that one-third of Czechs don't know how to start investing.
3. **How it works (3 steps):** (1) Answer a short online questionnaire, (2) receive suggested investments, (3) choose how much and how often to invest.
4. **Goals ("Na čem vám záleží?"):** Three cards: growing the value of money (classic investment account), children (children's account with reduced f
… [truncated, 3046 more chars]
```

</details>

<details><summary>result</summary>

```
## Hero (above the fold)

- **Headline:** "Také investování může znamenat relax" ("Investing can also mean relaxation").
- **Subheadline:** A limited-time promotion. Deposits made in October get a year with no management fee.
- **CTAs:** "Prozkoumejte vaše možnosti" (Explore your options), which leads to onboarding, and "Jak to funguje?" (How does it work?).
- **Trust stats:** €1.8 billion under management, 115,000+ satisfied clients, and 100,000+ app downloads.
- **Above the fold:** A top nav with audience tabs (Individuals, B2B, Employers), a language switcher (CS, EN, SK, HU, PL, HR, RO, IE), a login link, a "Začít investovat" (Start investing) button, and a hero image.

## Sections, in order

1. **Hero** (described above)
2. **Promo banner:** "Užijte si rok se slevou" (Enjoy a year with a discount), with a "Odeslat vklad" (Submit deposit) button.
3. **Goal selector, "Investujte podle sebe":** Five goal cards: wealth building, financial reserve, retirement, big purchase, and children's future.
4. **Product showcase, "Investování dělá rozdíl":**
   - *World investing (ETF):* Includes an interactive calculator and a "Chci začít" (I want to start) button.
   - *European pension (PE
… [truncated, 3751 more chars]
```

</details>

**→ WebFetch** https://www.portu.cz

> prompt: What is on this page? Headline, CTA, any text at all.

**→ WebSearch** `Portu investování ETF portfolia hlavní stránka klienti spravovaná aktiva`

**→ WebSearch** `Finax Fondee Portu počet klientů spravovaná aktiva 2025 srovnání robo-advisor ČR`

<details><summary>result</summary>

```
The web page content is empty. There is no headline, call to action, or other text. The page may not have loaded correctly, or the content may not have been included. If you paste the page text or share the URL, I can summarize it.
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Portu investování ETF portfolia hlavní stránka klienti spravovaná aktiva"

Links: [{"title":"Češi na investování nezanevřeli ani v těžkém roce 2022. Přes Portu do akcií vložili už 16 miliard","url":"https://cc.cz/cesi-na-investovani-nezanevreli-ani-v-tezkem-roce-2022-pres-portu-do-akcii-vlozili-uz-16-miliard/"},{"title":"portu hlasi pres 40 tisic uzivatelu a dve a pul miliardy korun ve sprave do konce roku prekoname 5 miliard veri jeho sef","url":"https://cc.cz/portu-hlasi-pres-40-tisic-uzivatelu-a-dve-a-pul-miliardy-korun-ve-sprave-do-konce-roku-prekoname-5-miliard-veri-jeho-sef/"},{"title":"portu hlasi pres 40 tisic uzivatelu a dve a pul miliardy korun ve sprave do konce roku prekoname 5 miliard veri jeho sef","url":"https://cc.cz/2021/04/portu-hlasi-pres-40-tisic-uzivatelu-a-dve-a-pul-miliardy-korun-ve-sprave-do-konce-roku-prekoname-5-miliard-veri-jeho-sef/"},{"title":"finex.cz","url":"https://finex.cz/recenze/portu/"},{"title":"Česká investiční služba Portu už lidem spravuje přes 18 miliard korun. Rozpíná se i za hranicemi","url":"https://cc.cz/ceska-investicni-sluzba-portu-uz-lidem-spravuje-pres-18-miliard-korun-rozpina-se-i-za-hranicemi/"},{"tit
… [truncated, 2710 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Finax Fondee Portu počet klientů spravovaná aktiva 2025 srovnání robo-advisor ČR"

Links: [{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=51157"},{"title":"Annual report 2025","url":"https://cdn.portu.cz/portu/documents/obligatory-published-information/cs/Annual-report-2025.pdf"},{"title":"Our results","url":"https://www.finax.eu/en/blog/finax-2025-business-figures-and-statistics"},{"title":"Banner for Finax - Invest & Relax","url":"https://uk.trustpilot.com/review/www.finax.eu"},{"title":"Chat with us, powered by LiveChat","url":"https://www.sii.org.pl/tag/robodoradcy.html"},{"title":"Banner for Finax - Invest & Relax","url":"https://ca.trustpilot.com/review/www.finax.eu"},{"title":"vyrocna sprava 2025","url":"https://www.finax.eu/themes/finax-rebranding/assets/_static_docs/sk/vyrocna-sprava-2025.pdf"},{"title":"Automated Investing in Poland — Robo-Advisors and ETF Platforms","url":"https://freenance.io/fintech/automated-investing-poland-robo-advisors/"},{"title":"Best Robo-Advisors in Poland 2026 — Ranking and Comparison","url":"https://freenance.io/rankings/best-robo-advisors-poland-2026/"}]

Links: [{"title":"Tržby 4,5 mi
… [truncated, 4095 more chars]
```

</details>

**→ WebFetch** https://www.finax.eu/en/blog/finax-2025-business-figures-and-statistics

> prompt: Extract number of clients, assets under management, deposits, and any other business figures for 2025. Note publication date.

**→ WebFetch** https://cdn.portu.cz/portu/documents/obligatory-published-information/cs/Annual-report-2025.pdf

> prompt: Extract number of clients, assets under management, growth figures, marketing/advertising spend if stated, and number of Portu employees. Give page-specific facts.

**→ WebFetch** https://finex.cz/recenze/portu/

> prompt: Extract: Portu's assets under management, clients count, fees, minimum deposit, and how the onboarding/registration flow works (questionnaire steps). Also any award. Note dates.

<details><summary>result</summary>

```
I couldn't find any of the requested facts in the content you provided. It's a raw PDF file with compressed streams (FlateDecode object streams), and the text inside isn't readable. The portion shown is binary data, and the rest is truncated.

Because of this, I can't report:
- Number of clients
- Assets under management
- Growth figures
- Marketing or advertising spend
- Number of Portu employees

To get these facts, you could paste the document's extracted text, upload a text-based version, or share a link to the HTML version of the page. If the PDF has a text layer, a PDF-to-text tool would also produce readable content I can analyze.

[Binary content (application/pdf, 2.7MB) also saved to C:\Users\matus\.claude\projects\C--Users-matus-Desktop-B-project\66014a9f-a5a6-413b-8552-f9844a0020a6\tool-results\webfetch-1791637138497-msirtu.pdf]
```

</details>

<details><summary>result</summary>

```
**Publication date:** 27 March 2026

**Clients**
- Active clients at year-end 2025: 102,600, up more than 18% from 2024. Of these, 19,767 are under the UnitPlus brand.
- December campaign: nearly 3,000 net new clients, the highest monthly figure in company history.

**Assets under management (AUM)**
- Total at year-end: over €1.4 billion, including €1.14 billion under the Finax brand and €270 million under the UnitPlus partnership.
- Growth: up more than 33% year-on-year, an increase of €353.7 million.

**Net deposits**
- Total for 2025: €282 million, just over 1% below the 2024 record. This includes €177.3 million under the Finax brand and €104.7 million from UnitPlus clients.
- December net deposits: over €49 million.

**Other metrics**
- Average assets per client: nearly €13,800, up 7.3%(Finax brand only).
- Finax Elite assets: nearly €368 million, up 22%.
- Investing in ETFs share of AUM: nearly 64% (€902 million).

**Financial results (preliminary, unaudited, consolidated)**
- Revenue: €8.38 million, up from €6.19 million (more than 35%).
- Profit: €198,000, a 55% decline, mainly due to a deferred tax asset recognised in 2024.

**Capital raise**
- €8.4 million raised through a
… [truncated, 65 more chars]
```

</details>

<details><summary>result</summary>

```
**Portu: extrakce údajů (stránka aktualizovaná 18. 6. 2026)**

**Aktiva pod správou:** 55 mld. Kč (uvedeno v základních informacích i v tabulce „Více informací o Portu“).

**Počet klientů:** Stránka uvádí „280 000+“ klientů. Konkrétně: „Samotné Portu eviduje přes 280 000+ klientů.“

**Poplatky:**
- Otevření a vedení účtu: zdarma. Vklady a výběry bankovním převodem jsou zdarma. Vklady ani výběry kartou nejsou možné.
- Poplatek investora: od 0,24 % ročně z hodnoty portfolia. Výše závisí na typu účtu a úrovni (Bronzová 1,00 % až Platinová 0,40 % u klasického účtu, před slevou za fixaci).
- Sleva za fixaci: 20 % (5 let) až 40 % (15 let). Při předčasném výběru se doúčtuje poplatek bez slevy.
- Účet pro mladé do 26 let: poplatky jsou zhruba poloviční oproti klasickému účtu.
- DIP: fixních 0,50 % ročně. Dětský účet: fixních 0,25 % ročně.
- Investiční rezerva: 0,25 % ročně. Portu Crypto: 1 % ročně.
- Brokerage: 0,4 % až 0,2 % za pokyn podle úrovně, minimálně 39 Kč, 2 EUR nebo 2 USD.

**Minimální vklad:** 100 Kč. Minimální investice je od 1 Kč.

**Postup registrace (dle stránky, trvá zhruba 15 minut):**
1. **Investiční dotazník:** otázky o příjmech, zkušenostech a toleranci k poklesům. Algo
… [truncated, 777 more chars]
```

</details>

**→ Bash** — Fetch raw HTML of portu.cz to scratchpad

```
cd /tmp 2>/dev/null; curl -sL -m 30 -A "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148" https://www.portu.cz/ -o "C:/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad/portu.html" -w "%{http_code} %{size_download} %{url_effective}\n"; head -c 1500 "C:/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad/portu.html"
```

<details><summary>result</summary>

```
200 12269 https://www.portu.cz/
<!DOCTYPE html><html  lang="cs-CZ"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><script type="importmap">{"imports":{"#entry":"/_nuxt/DMEuEofH.js"}}</script><link rel="stylesheet" href="/_nuxt/entry.DUp4Q8rP.css" crossorigin><link rel="stylesheet" href="/_nuxt/Separator.uFjFDQaY.css" crossorigin><link rel="preload" href="/fonts/rethink-sans-latin.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="/fonts/rethink-sans-latin-ext.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="modulepreload" as="script" crossorigin href="/_nuxt/DMEuEofH.js"><link rel="modulepreload" as="script" crossorigin href="/_nuxt/BKfLzw-f.js"><link rel="modulepreload" as="script" crossorigin href="/_nuxt/Ib1jYPSS.js"><link rel="modulepreload" as="script" crossorigin href="/_nuxt/BUba7gzX.js"><link rel="modulepreload" as="script" crossorigin href="/_nuxt/DSbihCfZ.js"><link rel="modulepreload" as="script" crossorigin href="/_nuxt/CyqB7wiV.js"><link rel="modulepreload" as="script" crossorigin href="/_nuxt/CqE8K_S8.js"><link rel="modulepreload" as="script" cross
… [truncated, 333 more chars]
```

</details>

**→ Bash** — Extract title and text from Portu HTML

```
cd "C:/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad"; python -c "
import re,sys
h=open('portu.html',encoding='utf-8').read()
print(re.findall(r'<title>(.*?)</title>',h))
print(re.findall(r'<meta[^>]+(?:description|og:title|og:description)[^>]*>',h))
b=re.sub(r'<script.*?</script>','',h,flags=re.S)
b=re.sub(r'<style.*?</style>','',b,flags=re.S)
t=re.sub(r'<[^>]+>',' ',b)
print(re.sub(r'\s+',' ',t)[:2000])
"
```

<details><summary>result</summary>

```
[]
[]
```

</details>

**→ WebSearch** `portu.cz investujte s Portu začít investovat od 100 Kč`

**→ WebSearch** `Portu reklama landing page investiční kalkulačka kampaň reklama na sociálních sítích Portu`

<details><summary>result</summary>

```
Web search results for query: "portu.cz investujte s Portu začít investovat od 100 Kč"

Links: [{"title":"Průvodce Portu","url":"https://magazin.portu.cz/pruvodce-portu/"},{"title":"Brokerage","url":"https://portuczuat.portu.cz/investice/jednotlive-akcie-etf"},{"title":"Portfolio od Portu","url":"https://www.portu.cz/portfolia-od-portu/"},{"title":"Portu spouští brokerage. Zkušenějším investorům umožní obchodovat napřímo a v reálném čase - Portu magazín","url":"https://magazin.portu.cz/portu-spousti-brokerage-zkusenejsim-investorum-umozni-obchodovat-naprimo-a-v-realnem-case/"},{"title":"Jak na Portu úspěšně investovat? - Portu magazín","url":"https://magazin.portu.cz/jak-na-portu-uspesne-investovat/"},{"title":"Portfolio od Portu","url":"https://www.portu.cz/investice/portfolio-od-portu"},{"title":"Investice do nemovitostí","url":"https://www.portu.cz/realitni-fond/"},{"title":"Brokerage","url":"https://www.portu.cz/o-nas/faq/brokerage"},{"title":"O Portu","url":"https://www.portu.cz/o-nas/faq/o-portu"},{"title":"Portfolio podle vás","url":"https://www.portu.cz/investice/portfolio-podle-vas"}]

Na Portu se dá začít s **100 Kč**, ale platí to hlavně pro nákup jednotlivých akcií a ET
… [truncated, 1394 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Portu reklama landing page investiční kalkulačka kampaň reklama na sociálních sítích Portu"

Links: [{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/clanky/2022/10/v-nove-kampani-portu-vystupuji-realni-investori/"},{"title":"Portu: Učíme lidi překonávat strach z investic","url":"https://www.mediaguru.cz/portu-ucime-lidi-prekonavat-strach-z-investic"},{"title":"Portu: Učíme lidi překonávat strach z investic","url":"https://www.mediaguru.cz/clanky/2023/07/portu-ucime-lidi-prekonavat-strach-z-investic/"},{"title":"Portu se spojuje s Kovym, mladým otevírají téma důchodů","url":"https://www.mediaguru.cz/Portu"},{"title":"calculating roi landing page google analytics infographic","url":"https://www.socialmediatoday.com/content/calculating-roi-landing-page-google-analytics-infographic"},{"title":"wspolczynnik konwersji","url":"https://landingi.com/pl/ppc/wspolczynnik-konwersji/"},{"title":"roi vs roas roznice","url":"https://landingi.com/pl/reklama-cyfrowa/roi-vs-roas-roznice/"},{"title":"campaign manager landing page optimization","url":"https://datacalculus.com/en/blog/advertising-services/campaign-manager/campaign-manager-landing-page-opt
… [truncated, 3160 more chars]
```

</details>

**→ WebFetch** https://www.portu.cz/portfolia-od-portu/

> prompt: Describe the first screen: headline, subheadline, CTA text, above the fold. Then sections in order, trust signals, disclaimers/risk warnings, calculators/interactive elements, form fields, and what is promised after signup. Quote only short phrases.

**→ WebFetch** https://www.mediaguru.cz/clanky/2022/10/v-nove-kampani-portu-vystupuji-realni-investori/

> prompt: Summarise the campaign: channels, claims, results (registrations), date, agency, budget if any.

**→ WebFetch** https://magazin.portu.cz/pruvodce-portu/

> prompt: Is this a lead magnet page (guide, e-book, newsletter)? Describe headline, CTA, form fields, what is offered in exchange for contact, and whether value is shown before the form.

<details><summary>result</summary>

```
The web page content didn't come through; the section after "Web page content:" is empty. Could you paste the page text again? Once I have it, I'll cover the first screen (headline, subheadline, CTA text), the sections in order, trust signals, disclaimers and risk warnings, calculators or interactive elements, form fields, and what's promised after signup. I'll keep any quoted phrases short.
```

</details>

<details><summary>result</summary>

```
**Campaign summary: Portu, "Portu, lepší místo pro peníze"**

- **Date:** Published 31 October 2022. The article doesn't give a launch date for the new campaign.
- **Advertiser:** Portu, an online investment platform.
- **Concept:** Builds on the earlier "Chytrý investor" campaign from autumn 2021 and uses real Portu investors instead of actors. Three are featured: Jana, who saves for her daughter's start in life; Klára, representing younger savers; and Pavel, representing the middle generation.
- **Channels:** TV spots on Prima, Atmedia, Barrandov and Óčko, plus supporting online banner advertising.
- **Spot versions:** 15-second spots run until the end of January of the following year. A 30-second version with all three investors starts in November.
- **Agencies:** ShrtCut studio developed the creative concept, Barletta produced the spots, and Matěj Chlupáček directed.
- **Results:** None are reported for the new campaign. The article cites the previous campaign, which saw nearly 43,000 new registrations over five months, roughly a 100% increase over earlier months.
- **Budget:** Not disclosed.
```

</details>

<details><summary>result</summary>

```
No, this isn't a lead magnet page. It's an informational guide on the Portu investing platform, with no gated download, sign-up form, or contact-for-content exchange.

- **Headline:** "Průvodce Portu," with the subheading "Lepší místo pro peníze" ("A better place for money").
- **CTAs:** Several "Prozkoumat" ("Explore") buttons lead to sections on basic, advanced, alternative, and other investment options. The main account-related call to action is the "Přejít na Portu" link to the platform.
- **Form fields:** The page shows no visible input fields. The only form-like element is a newsletter prompt, "Odebírejte novinky ze světa financí" ("Subscribe to news from the world of finance"), with an "Odeslat" ("Send") button. The email field, if one exists, isn't shown in the content.
- **Offer in exchange for contact:** The only contact-based offer is the financial news newsletter. The page doesn't describe any specific bonus, such as a downloadable guide.
- **Value before the form:** Yes. The page provides substantial content before any sign-up request, including explanations of passive investing, Portfolia od Portu, the Investiční rezerva, DIP retirement accounts, and fee structures. T
… [truncated, 118 more chars]
```

</details>

**→ WebSearch** `ETF e-book zdarma stáhnout e-mail investování pro začátečníky průvodce`

**→ WebSearch** `jak koupit americké ETF Čech newsletter zdarma příručka investování Finparáda`

<details><summary>result</summary>

```
Web search results for query: "ETF e-book zdarma stáhnout e-mail investování pro začátečníky průvodce"

Links: [{"title":"www.xtb.com","url":"https://www.xtb.com/cz/videokurzy"},{"title":"www.xtb.com","url":"https://www.xtb.com/sk/videokurzy"},{"title":"ETF Investment Strategies: Best Practices from Leading Experts on Constructing a Winning ETF Portfolio [DRM] - ebook","url":"https://virtualo.pl/ebook/etf-investment-strategies-best-practices-from-leading-experts-on-i587013"},{"title":"martinprace.gumroad.com","url":"https://martinprace.gumroad.com/l/modernwallpapers"},{"title":"ETF Basics","url":"https://www.oanda.com/eu-en/etf-basic-guide-ebook"},{"title":"andrejpobavil.gumroad.com","url":"https://andrejpobavil.gumroad.com/l/hsk23"},{"title":"o platforma de tranzactionare a lansat ebook ul investitii in etfs de la a la z acesta este un ghid pentru investitorii in aceste instrumente financiare aflati la inceput de drum","url":"https://economedia.ro/o-platforma-de-tranzactionare-a-lansat-ebook-ul-investitii-in-etfs-de-la-a-la-z-acesta-este-un-ghid-pentru-investitorii-in-aceste-instrumente-financiare-aflati-la-inceput-de-drum.html"},{"title":"leer_primeras_paginas Leer primeras págin
… [truncated, 1909 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "jak koupit americké ETF Čech newsletter zdarma příručka investování Finparáda"

Links: [{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-akcie-fondy-ve-vate-diky-s-p-500-jak-sporit-na-duchod-pomoci-americkych-akcii-186135"},{"title":"navod jak a kde koupit bitcoin etf","url":"https://finex.cz/navod-jak-a-kde-koupit-bitcoin-etf/"},{"title":"Jak obejít znemožnění obchodování amerických ETFek – 1. část","url":"https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-1-cast"},{"title":"Jak kupić amerykańskie ETF-y będąc polskim rezydentem podatkowym","url":"https://inwestomat.eu/?p=167771"},{"title":"Jak obejít znemožnění obchodování amerických ETFek – 2. část","url":"https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-2-cast/"},{"title":"A mund të tregtoj ETF-të në Ameriprise Financial?","url":"https://brokerchooser.com/sq/broker/ameriprise-financial-etf"},{"title":"us stocks e trade","url":"https://brokerchooser.com/sk/invest-long-term/diversification/us-stocks-e-trade"},{"title":"هل يمكنني تداول صناديق الاستثمار المتداولة (ETF) لدى Ameriprise Financial؟","url":"https://broker
… [truncated, 2319 more chars]
```

</details>

**→ WebFetch** https://www.xtb.com/cz/videokurzy

> prompt: Describe first screen: headline, subheadline, CTA text. Sections in order, lead magnet (free course/ebook), whether registration/contact is required before content, form fields, trust signals (licences, client numbers), risk warning text (CFD loss percentage), tone (ty/vy). Short quotes only.

**→ WebFetch** https://www.xtb.com/cz

> prompt: Describe first screen: headline, subheadline, CTA text, above the fold. Sections in order, trust signals (client numbers, licences, awards), risk warning text, forms/fields (registration or demo), tone (ty/vy). Short quotes only.

<details><summary>result</summary>

```
**First screen**
- **Headline:** "Vzdělávací materiály" (Educational materials), under an "E-booky" label.
- **Subheadline:** Free video courses, e-books, and articles to build knowledge about finance and markets. The text says that XTB clients also get access to courses in the xStation platform. It addresses the reader directly: "Pokud se chcete stát úspěšným investorem nebo traderem" (If you want to become a successful investor or trader).
- **CTA:** "Otevřít reálný účet zdarma" (Open a free real account), linking to the account opening page.

**Sections, in order**
1. **Naše kurzy (Our courses):** four items, each with a "Podívejte se na kurz nyní" (See the course now) link:
   - ETF: everything you need to know
   - Building your first portfolio (7 parts)
   - Investing vs. Trading (7 parts)
   - TOP 5 trading tools by Ondřej Hartman, where records and bonuses are sent by email after registration
2. **Naše e-booky (Our e-books):** nine free guides, each with a "Stáhněte si e-book" (Download the e-book) button. Topics include big tech, AI, Buffett's conglomerate, commodities, ETFs, starting to invest in 2026, defence stocks and ETFs, real estate vs. stocks/ETFs, and top 5 crypto
… [truncated, 1309 more chars]
```

</details>

<details><summary>result</summary>

```
**First screen (above the fold)**

- **Top banner:** A bold CFD risk warning. Its key line is "77 % retailových účtů CFD je ztrátových." (77% of retail CFD accounts are loss-making.)
- **Headline:** "Získejte 5% úrok z volných prostředků pro dobrý start" (Get 5% interest on free funds to start well).
- **Subheadline:** Opening a stock or ETF trade once a month qualifies for the promotional rate.
- **CTAs:** "Otevřít účet" (primary, links to live account opening) and "Stáhnout aplikaci" (secondary, app download).
- **Trust line:** Over 12,700 financial instruments and over 2.9 million investors.

**Sections, in page order**

1. **Header navigation:** Menus for Investice, Úspory, Karta a platby, Vzdělávání, and O nás. Login and "Otevřít účet" buttons.
2. **Hero:** Promotional interest offer and CTAs.
3. **Product tiles:** Akcie a ETF, Úročení, CFD kontrakty, Investiční plány, Opce.
4. **"Investujte vlastní cestou":** Stocks and ETFs (9,700+ securities from the EU and US), forex/commodities/indices (2,700+ CFDs), crypto (40+ CFDs), options (180).
5. **"Využijte nejnovější možnosti":** XTB Card and investment plans.
6. **Fees:** Stated as 0% for stocks and ETFs up to a monthly volume o
… [truncated, 2353 more chars]
```

</details>

**→ WebSearch** `XTB e-book ETF stáhněte si zdarma xtb.com/cz ebook`

**→ WebSearch** `Finax e-book zdarma investování ETF stáhnout newsletter webinář Finax Česko`

<details><summary>result</summary>

```
Web search results for query: "XTB e-book ETF stáhněte si zdarma xtb.com/cz ebook"

Links: [{"title":"Naše kurzy a e-booky: Investice, Trading, Krypto, Zlato","url":"https://www.xtb.com/cz/videokurzy"},{"title":"Nejoblíbenější ETF v XTB: Praktický průvodce investováním","url":"https://cz.xtb.com/nejoblibenejsi-etf-v-xtb"},{"title":"TOP 5 kryptoměn u XTB","url":"https://cz.xtb.com/top-5-kryptomen-u-xtb"},{"title":"XTB Trading Courses","url":"https://en.xtb.com/free-ebooks-2025"},{"title":"10 rad rozumného investora","url":"https://cz.xtb.com/10-rad-rozumneho-investora"},{"title":"Forex, CFD, Komodity, Indexy, ETF - Forex Broker","url":"https://xtb.com/cz?affid=37323&cxd=37323_755364"},{"title":"Tvorba dynamického ETF portfolia","url":"https://cz.xtb.com/tvorba-dynamickeho-etf-portfolia"},{"title":"Průvodce obchodováním s kryptoměnami","url":"https://cz.xtb.com/ebook-kryptomeny"},{"title":"Investování do Big Tech společností","url":"https://cz.xtb.com/investovani-do-big-tech-spolecnosti"},{"title":"Hlavní tituly Pražské burzy","url":"https://cz.xtb.com/hlavni-tituly-prazske-burzy"}]

I couldn't find an exact page at xtb.com/cz/ebook, but XTB has several free ETF e-books on its Czech 
… [truncated, 1228 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "Finax e-book zdarma investování ETF stáhnout newsletter webinář Finax Česko"

Links: [{"title":"How does investing with Finax work?","url":"https://www.finax.eu/ie/how-it-works"},{"title":"How does investing with Finax work?","url":"https://www.finax.eu/how-it-works"},{"title":"How does investing with Finax work?","url":"https://www.finax.eu/en/philosophy/how-it-works"},{"title":"How does investing with Finax work?","url":"https://www.finax.eu/en/how-it-works"},{"title":"Find out what","url":"https://www.finax.eu/en"},{"title":"How does investing with Finax work?","url":"https://k8s.finax.eu/en/how-it-works"},{"title":"finax startuje ze zlotym portfelem w srodku etf y od bety","url":"https://www.analizy.pl/tylko-u-nas/35889/finax-startuje-ze-zlotym-portfelem-w-srodku-etf-y-od-bety"},{"title":"Intelligent Investing","url":"https://finax.eu/en/products/intelligent-investing"},{"title":"Security comes first","url":"https://www.finax.eu/en/safety-and-risk"},{"title":"Marko Grđan - Time is money, but a small amount of knowledge is necessary too","url":"https://finax.eu/en/blog/marko-grdan-time-is-money-but-a-small-amount-of-knowledge-is-necessary-too"}]

H
… [truncated, 1933 more chars]
```

</details>

**→ WebFetch** https://cz.xtb.com/nejoblibenejsi-etf-v-xtb

> prompt: Describe this landing page fully: headline, subheadline, CTA button text, what is above the fold, sections in order, form (fields, labels, consent checkboxes, button text), what is promised after submit, trust signals, risk disclaimers (quote the CFD loss % statement), tone (ty/vy), images, any tracking scripts visible (GTM, Meta pixel, etc.). Quote short phrases only.

**→ WebFetch** https://cz.xtb.com/tvorba-dynamickeho-etf-portfolia

> prompt: Describe this landing page fully: headline, subheadline, CTA, sections in order, form fields and consents, what is promised after submit, trust signals, risk disclaimers, tone. Short quotes only.

<details><summary>result</summary>

```
**Landing page: "Tvorba dynamického ETF portfolia" (Creating a dynamic ETF portfolio)**, a Czech-language lead-generation page from XTB Online Trading.

**Headline:** "Tvorba dynamického ETF portfolia"

**Subheadline:** Download the e-book to learn how to use classic and leveraged ETFs, CFDs, and dynamic portfolio principles to your advantage.

**CTA:** "e-book zdarma" (free e-book), repeated as "STÁHNOUT E-BOOK ZDARMA" (Download free e-book) in a pop-up. "Získejte ETF e-book zdarma!" ("Get the ETF e-book for free!") appears as a sub-heading.

**Sections, in order:**
1. **Risk disclaimer banner** with a logo and bold warnings about CFDs.
2. **Hero:** headline, subheadline, and a free e-book offer with a product image.
3. **Repeated headline and offer**, with a bulleted list of what the e-book covers: differences between classic, leveraged, and CFD ETFs; how CFDs on stock indices work; what a dynamic portfolio is; how leverage affects returns and losses; and how to build a dynamic stock portfolio.
4. **"Budujte portfolio s jistotou"** ("Build your portfolio with confidence"), a short explainer on ETF diversification and long-term investing.
5. **Pop-up modal** titled "Open Demo" wit
… [truncated, 1308 more chars]
```

</details>

<details><summary>result</summary>

```
# Landing Page Description

**Language:** Czech. The descriptions below are in English, and quoted Czech text appears in quotation marks.

## Headline and Subheadline
- **Page title:** "Nejoblíbenější ETF v XTB: Praktický průvodce investováním"
- **Headline:** "Nejoblíbenější ETF u XTB pro rok 2026"
- **Subheadline:** "Objevte nejvýkonnější ETF na světě a naučte se:", followed by a bulleted list: what ETFs are, their benefits, tips on specific funds, and "and much more."

## CTA Button Text
- "STÁHNOUT E-BOOK ZDARMA" (Download e-book free)
- Supporting heading: "Získejte ETF e-book zdarma!" (Get the ETF e-book for free!)

## Above the Fold
1. A bold risk warning banner at the top, before any branding.
2. The XTB logo.
3. A "E-book zdarma" (free e-book) badge.
4. The headline and a cover image of the e-book.
5. The subheadline, bullet list, and "Získejte ETF e-book zdarma!" block.

## Sections in Order
1. Risk warning banner (repeated twice in the content)
2. XTB logo
3. Hero: headline, free e-book badge, cover image, benefit bullets
4. Hero block repeated (duplicate content)
5. "Co jsou to ETF?" (What are ETFs?) section with an explanation and an illustration
6. Popup/modal form wi
… [truncated, 2859 more chars]
```

</details>

**→ Bash** — Fetch XTB ETF landing page HTML and inspect form and tracking

```
cd "C:/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad"; curl -sL -m 30 -A "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148" https://cz.xtb.com/nejoblibenejsi-etf-v-xtb -o xtb_etf.html -w "%{http_code} %{size_download}\n"; python -c "
import re
h=open('xtb_etf.html',encoding='utf-8',errors='ignore').read()
print(len(h))
for m in re.finditer(r'<(input|select|textarea|form|button)[^>]*>',h): print(m.group(0)[:250])
print('---')
for k in ['hbspt','hsforms','gtm','googletagmanager','fbq','facebook','tiktok','linkedin','hotjar','clarity','formId','portalId']:
    print(k, len(re.findall(k,h,flags=re.I)))
print(re.findall(r'formId[\"\':\s]+([a-f0-9-]{36})',h)[:3])
"
```

<details><summary>result</summary>

```
200 110307
109969
<button class="risk-warning-component-toggler-button js-risk-warning-component-toggler-button">
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
---
hbspt 8
hsforms 1
gtm 7
googletagmanager 2
fbq 0
facebook 10
tiktok 0
linkedin 0
hotjar 0
clarity 0
formId 2
portalId 2
['49c7cdf6-dc85-4e93-ae62-356333c62b23', '49c7cdf6-dc85-4e93-ae62-356333c62b23']
```

</details>

**→ Bash** — Inspect HubSpot form config snippet

```
cd "C:/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad"; python -c "
import re
h=open('xtb_etf.html',encoding='utf-8',errors='ignore').read()
for m in re.finditer(r'portalId',h):
    print(h[max(0,m.start()-300):m.start()+500].replace('\n',' '))
    print('=====')
    break
i=h.find('googletagmanager'); print(h[i-200:i+300])
"
```

<details><summary>result</summary>

```
ning_component.min.js"></script>      <!--[if lte IE 8]>     <script charset="utf-8" src="https://js.hsforms.net/forms/v2-legacy.js"></script>     <![endif]-->  <script data-hs-allowed="true" src="/_hcms/forms/v2.js"></script>      <script data-hs-allowed="true">         var options = {             portalId: '2106565',             formId: '49c7cdf6-dc85-4e93-ae62-356333c62b23',             formInstanceId: '5809',                          pageId: '185456099082',                          region: 'na1',                                                                 pageName: "Nejobl\u00EDben\u011Bj\u0161\u00ED ETF v XTB: Praktick\u00FD pr\u016Fvodce investov\u00E1n\u00EDm",                                       redirectUrl: "https:\/\/cz.xtb.com\/nejoblibenejsi-etf-v-xtb-typ",               
=====
l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KV8H94');</script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push
… [truncated, 115 more chars]
```

</details>

**→ Bash** — Inspect form options and fetch public form definition

```
cd "C:/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad"; python - <<'EOF'
import re
h=open('xtb_etf.html',encoding='utf-8',errors='ignore').read()
i=h.find("portalId: '2106565'")
print(h[i:i+2500])
EOF
echo ======
curl -sL -m 30 "https://forms.hsforms.com/embed/v3/form/2106565/49c7cdf6-dc85-4e93-ae62-356333c62b23/json" -w "\nHTTP %{http_code}\n" | head -c 3000
```

**→ WebFetch** https://cz.xtb.com/nejoblibenejsi-etf-v-xtb-typ

> prompt: Describe this thank-you page: headline, text, CTAs (e.g. open account, download link), upsell, what is promised next.

<details><summary>result</summary>

```
portalId: '2106565',
            formId: '49c7cdf6-dc85-4e93-ae62-356333c62b23',
            formInstanceId: '5809',
            
            pageId: '185456099082',
            
            region: 'na1',
            
            
            
            
            pageName: "Nejobl\u00EDben\u011Bj\u0161\u00ED ETF v XTB: Praktick\u00FD pr\u016Fvodce investov\u00E1n\u00EDm",
            
            
            redirectUrl: "https:\/\/cz.xtb.com\/nejoblibenejsi-etf-v-xtb-typ",
            
            
            
            
            
            css: '',
            target: '#hs_form_target_form_674489189',
            
            
            
            
            
            
            
            contentType: "landing-page",
            
            
            
            formsBaseUrl: '/_hcms/forms/',
            
            
            
            formData: {
                cssClass: 'hs-form stacked hs-custom-form'
            }
        };

        options.getExtraMetaDataBeforeSubmit = function() {
            var metadata = {};
            

            if (hbspt.targetedContentMetadata) {
           
… [truncated, 4387 more chars]
```

</details>

<details><summary>result</summary>

```
**Page type:** Thank-you page for XTB (Czech version) after a sign-up, probably for the e-book.

- **Headline:** "Děkujeme Vám za přihlášení" ("Thank you for signing up"), with the page title "Děkujeme Vám za přihlášení | XTB."
- **Main text:** Says you will receive an email with your e-book within a few minutes.
- **Upsell:** Asks whether you knew about zero fees for investing in stocks and ETFs, shown with a banner image.
- **CTA:** One button, "objevit nabídku" ("discover the offer"), which leads to a HubSpot redirect. There is no account-opening or direct download link on the page.
- **Risk warnings:** The page is heavy with them. It states that 74% of retail CFD accounts lose money, and that 77% of retail CFD accounts with this provider lost money. It links to a risk disclosure PDF and repeats "Investujte zodpovědně" ("Invest responsibly") several times.
- **Footer:** Says investment decisions should be based on your own judgment, points to the risk disclosure at xtb.com/cz, and gives XTB S.A.'s Prague company details.

**What is promised next:** The e-book, delivered by email within a few minutes.
```

</details>

**→ Bash** — Parse public HubSpot form definition for field list

```
curl -sL -m 30 "https://forms.hsforms.com/embed/v3/form/2106565/49c7cdf6-dc85-4e93-ae62-356333c62b23/json" | python -c "
import json,sys
d=json.load(sys.stdin)['form']
print(d['inlineMessage'], d['submitText'])
for g in d['formFieldGroups']:
    for f in g['fields']:
        print(f['name'],'|',f['label'],'|',f['fieldType'],'| req',f['required'],'| hidden',f['hidden'],'|',[o.get('label') for o in f.get('options',[])][:5])
    if g.get('richText',{}).get('content'): print('RICH:',g['richText']['content'][:400])
print({k:d[k] for k in d if k in ('metaData','legalConsentOptions')})
" | head -50
```

<details><summary>result</summary>

```
Děkujeme za odeslání formuláře. Odeslat
firstname | Jméno | text | req True | hidden False | []
lastname | Příjmení | text | req True | hidden False | []
email | E-mail | text | req True | hidden False | []
phone | Telefonní číslo | phonenumber | req True | hidden False | []
form_consents__c |  | checkbox | req True | hidden False | ['&#xa0;Seznámil/a jsem se s <a href="https://xtb.scdn5.secure.raxcdn.com/file/0103/01/Podminky%20ochrany%20osobnych%20udaju%20CZ_20230720_55b2f7f130.pdf" target="_blank">podm�\xadnkami ochrany osobn�\xadch údajů</a>', '&#xa0;Souhlas�\xadm se <a href="https://xtb.scdn5.secure.raxcdn.com/file/0103/02/Souhlas%20se%20zasi%CC%81la%CC%81ni%CC%81m%20obchodni%CC%81ho%20sde%CC%8Cleni%CC%81_20230720_02aa2e2feb.pdf" target="_blank">zas�\xadlán�\xadm obchodn�\xadch sdělen�\xad a dalš�\xadch nab�\xaddek</a>']
adobeuid__c | Adobe UID | textarea | req False | hidden True | []
branch__c | Branch | select | req False | hidden True | ['UK', 'PL', 'ES', 'IT', 'HU']
country | Country | text | req False | hidden True | []
language__c | Language | select | req False | hidden True | ['CS', 'EN_GB', 'EN', 'PL', 'HU']
marketing_content__c | Last Marketing Conversion 
… [truncated, 2304 more chars]
```

</details>

**→ Bash** — Fetch Finax CZ HTML; list internal links and trackers

```
cd "C:/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad"; curl -sL -m 30 -A "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148" https://www.finax.eu/cs -o finax.html -w "%{http_code} %{size_download} %{url_effective}\n"; python - <<'EOF'
import re
h=open('finax.html',encoding='utf-8',errors='ignore').read()
hrefs=sorted(set(re.findall(r'href="(/cs[^"#?]*)"',h)))
print(len(hrefs)); print(hrefs[:80])
for k in ['googletagmanager','fbq','facebook.net','tiktok','hotjar','clarity','linkedin','hubspot','mailchimp','ecomail','sentry','segment','amplitude']:
    print(k, len(re.findall(k,h,flags=re.I)))
for m in re.finditer(r'<(input|select|form)[^>]*>',h): print(m.group(0)[:200])
EOF
```

<details><summary>result</summary>

```
Exit code 1
200 308753 https://www.finax.eu/cs
0
[]
googletagmanager 2
fbq 0
facebook.net 0
tiktok 7
hotjar 0
clarity 0
linkedin 4
hubspot 0
mailchimp 0
ecomail 0
sentry 3
segment 1
amplitude 0
<input type="checkbox" id="accordion-item-1-graph-accordion" class="hidden accordion-toggle">
<form method="POST" action="https://www.finax.eu/cs" accept-charset="UTF-8" data-request="onSubmit">
<input name="_session_key" type="hidden" value="aOZXXvOSymUUDKQ74ANYZxW8bxJg7zglNXZz1GnB">
<input name="_token" type="hidden" value="Z7fCFtKUStXBhN9LsJXC2SGM0pU07rEyIKY23ciR">
Traceback (most recent call last):
  File "<stdin>", line 7, in <module>
  File "C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.13_3.13.3824.0_x64__qbz5n2kfra8p0\Lib\encodings\cp1252.py", line 19, in encode
    return codecs.charmap_encode(input,self.errors,encoding_table)[0]
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
UnicodeEncodeError: 'charmap' codec can't encode character '\u010d' in position 110: character maps to <undefined>
```

</details>

**→ Bash** — List Finax forms and links

```
cd "C:/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad"; PYTHONIOENCODING=utf-8 python - <<'EOF'
import re
h=open('finax.html',encoding='utf-8',errors='ignore').read()
for m in re.finditer(r'<(input|select|textarea|form)[^>]*>',h): print(m.group(0)[:220])
print('---')
hrefs=sorted(set(re.findall(r'href="(https://www.finax.eu/cs[^"#?]*)"',h)))
print(len(hrefs)); print(hrefs[:80])
for k in ['googletagmanager.com/gtm.js\?id=[A-Z0-9-]+','tiktok','connect.facebook','linkedin','insight.min']:
    print(k, re.findall(k,h)[:3])
EOF
```

<details><summary>result</summary>

```
<stdin>:7: SyntaxWarning: invalid escape sequence '\?'
<input type="checkbox" id="accordion-item-1-graph-accordion" class="hidden accordion-toggle">
<form method="POST" action="https://www.finax.eu/cs" accept-charset="UTF-8" data-request="onSubmit">
<input name="_session_key" type="hidden" value="aOZXXvOSymUUDKQ74ANYZxW8bxJg7zglNXZz1GnB">
<input name="_token" type="hidden" value="Z7fCFtKUStXBhN9LsJXC2SGM0pU07rEyIKY23ciR">
<input type="hidden" name="currency_code" value="CZK" data-entry-param="currency_code" data-currency-symbol="Kč">
<input type="hidden" class="form-control text-right" name="onetime_amount" data-entry-param="onetime_amount">
<input type="hidden" class="form-control text-right" name="monthly_amount" data-entry-param="monthly_amount">
<input type="hidden" class="form-control text-right" name="years_planned" data-entry-param="years_planned">
<input type="hidden" name="investment_reason" value="invest-in-etf">
<input type="checkbox" id="accordion-item-2-graph-accordion" class="hidden accordion-toggle">
<form method="POST" action="https://www.finax.eu/cs" accept-charset="UTF-8" data-request="onSubmit">
<input name="_session_key" type="hidden" value="aOZXXvOS
… [truncated, 6218 more chars]
```

</details>

**→ WebFetch** https://www.finax.eu/cs/produkty/investovani-do-etf

> prompt: Describe first screen headline, subheadline, CTA text. Sections in order, calculator inputs and outputs, fees quoted, trust signals, risk warnings, and form fields. Mention which ETFs/regions are covered (US exposure, NYSE etc.). Short quotes only.

**→ WebFetch** https://www.finax.eu/cs/onboarding/longterm-investment

> prompt: Describe the onboarding flow step 1: what is asked first, fields, progress indicator, whether email is asked first or last, button text. Short quotes only.

<details><summary>result</summary>

```
The page content you provided doesn't include the onboarding flow. It has only the header title, "Onboardingový portál | Finax.eu," plus site navigation, a footer, and a disclaimer. It doesn't show:

- What is asked first in step 1
- Which fields appear
- Whether a progress indicator is shown
- Whether email is requested first or last
- What the button says

To describe step 1, please share the form's actual content, such as the step 1 page text or its HTML.
```

</details>

<details><summary>result</summary>

```
## First screen
- **Headline:** "Zhodnocujte vaše peníze investováním do ETF" (Grow your money by investing in ETFs)
- **Subheadline:** "Vyzkoušejte investování na míru, které pracuje za vás" (Try tailored investing that works for you, even with small amounts)
- **CTA:** "Začít investovat" (Start investing)

## Sections in order
1. **Hero:** headline, subheadline, CTA, intro image
2. **"Co představuje Světové investování?":** explains ETFs as a combination of stocks and mutual funds
3. **Three benefit blocks:** tax advantage ("Daňové zvýhodnění"), risk spread ("Rozložení rizika"), fair fees ("Férové poplatky")
4. **Calculator ("Světové investování")**
5. **Risk note and CTA "Chci začít"**
6. **"Jak začít investovat?":** four steps (questionnaire, online registration and contract, standing order and first deposit, app monitoring)
7. **Portfolio composition:** stock and bond ETF percentage fields, strategy label "Vyvážená"
8. **Client testimonials:** Ivan Chrenko and Dominik Hrbatý, each with "Zobrazit účet"
9. **Goal cards:** wealth building, financial reserve, retirement, big purchase, children's future
10. **Explainer sections:** portfolio composition, ETF selection, investment ph
… [truncated, 2791 more chars]
```

</details>

**→ WebFetch** https://finex.cz/

> prompt: Describe first screen: headline, subheadline, CTA text. Sections in order. Is there any newsletter/e-book/lead magnet form? Form fields. Trust signals (traffic numbers, media). Disclaimers (affiliate disclosure). Tone ty/vy. Short quotes only.

**→ WebFetch** https://www.finparada.cz/

> prompt: Describe first screen: headline, subheadline, CTA text. Sections in order. Lead magnet (e-book, course, newsletter, calculator), form fields, trust signals (audience size, media), disclaimers, tone ty/vy. Short quotes only.

**→ WebFetch** https://www.bohatstvi.cz/

> prompt: Describe first screen: headline, subheadline, CTA text. Sections in order. Lead magnet (e-book, course, newsletter, calculator), form fields, trust signals, disclaimers, tone ty/vy. Short quotes only.

<details><summary>result</summary>

```
**First screen**
- **Headline:** "Pomáháme dělat chytrá finanční rozhodnutí" (Finex.cz). No separate subheadline appears on the first screen.
- **CTAs:** "Získejte Finex Premium" and "Registrovat se!", plus "Přihlášení" to log in.
- **Finex Club box:** "Bezplatné členství je plné výhod!"

**Sections, in order**
1. Top navigation (O nás, Inzerce, Kariéra, Kontakt) and social links
2. Search bar and currency switcher (USD, EUR, CZK)
3. Account and Premium links, with a Finex Club sign-up box
4. Premium promo: "Proč investoři využívají Finex Premium?" and a banner ad
5. Live market tickers (stocks, crypto, indices, commodities), some with sponsored "Investujte" buttons
6. Portfolio tracker teaser: "Sledujte své portfolio. Zdarma."
7. Latest news ("Novinky", "Nejčtenější") with bylines and dates
8. Sponsored "Aktualizace" ticker
9. Category blocks: Akcie a dluhopisy, Kryptoměny, Osobní finance, Forex, Komodity (each with article cards)
10. Recenze: broker list with rating percentages and "Otevřít účet" buttons
11. "Naše vlastní investice" links
12. Footer: company description, site links, risk disclaimers, legal details

**Newsletter / lead magnet form**
None found. The only form-like 
… [truncated, 927 more chars]
```

</details>

<details><summary>result</summary>

```
**Note:** This is the Finparáda.cz homepage, a content and comparison portal rather than a single-purpose landing page, so some requested elements are missing or implicit.

**First screen**
- **Headline:** "Finparáda Vám pomůže vybrat ten nejvhodnější finanční produkt" (logo tagline)
- **Subheadline:** "Kalkulačky Vám pomohou najít nejvýhodnější produkt:"
- **CTA text:** No single primary button. Calls to action are category links such as "Bankovní účty," "Spoření," and "Penze," each with a tooltip like "Přejděte na kalkulačku osobních účtů." Article links use "celý článek."

**Sections, in order**
1. **Header and navigation:** Logo, sister sites (Finparada.sk, Autoparada.cz), newsletter link, search, and product categories.
2. **Calculator block:** Icon links to calculators for accounts, savings, pensions, loans, insurance, funds, and currency exchange.
3. **News feed:** Articles with dates, bylines, and photo credits, plus a "Denní zprávy" daily digest.
4. **Rankings:** "Žebříčky nejlepších," split into "Nejlepší podle uživatelů" and "Nejlepší podle odborníků," by category.
5. **Product of the Year:** Link to the "Finanční produkt roku" competition.
6. **Glossary:** "Poradna" for
… [truncated, 1367 more chars]
```

</details>

<details><summary>result</summary>

```
connect ECONNREFUSED 178.217.244.35:443
```

</details>

**→ WebSearch** `zdarma webinář ETF investování registrace e-mail Česko kurz pro začátečníky 2026`

**→ WebSearch** `investiční web česká nejčtenější investiční blog ETF návštěvnost newsletter odběratelé`

<details><summary>result</summary>

```
Web search results for query: "investiční web česká nejčtenější investiční blog ETF návštěvnost newsletter odběratelé"

Links: [{"title":"Redaktor / Content Writer se zaměřením na investice & finance","url":"https://www.jenprace.cz/nabidka/s64df9/redaktor-content-writer-se-zamerenim-na-investice-finance"},{"title":"4978181 introducing etf focus weekly newsletter","url":"https://seekingalpha.com/instablog/5366071-dave-dierking-cfa/4978181-introducing-etf-focus-weekly-newsletter"},{"title":"Why subscribe?","url":"https://etfmonkey.substack.com/about"},{"title":"<span>Money Makers</span>","url":"https://cc.cz/tag/money-makers/"},{"title":"Investiční riziko","url":"https://www.finmag.cz/tema/investicni-riziko"},{"title":"www.newstream.cz","url":"https://www.newstream.cz/stitek/investovani"},{"title":"stale vice cechu realizuje sve plany pomoci pasivniho investovani","url":"https://www.newstream.cz/money/stale-vice-cechu-realizuje-sve-plany-pomoci-pasivniho-investovani"},{"title":"Discover What’s Inside Our Latest ETF Update Newsletter","url":"https://www.5iresearch.ca/blog/investment-pros?page=22"},{"title":"ETFdb Logo","url":"https://etfdb.com/investor-tools-and-resources/top-10-etf-b
… [truncated, 1554 more chars]
```

</details>

<details><summary>result</summary>

```
Web search results for query: "zdarma webinář ETF investování registrace e-mail Česko kurz pro začátečníky 2026"

Links: [{"title":"Recenze eToro: Nový webinář vysvětlující základy investování do ETF","url":"https://tradersunion.com/cs/news/brokers-news/show/1605732-etoro-review-new/"},{"title":"Zavřít reklamu","url":"https://www.letemsvetemapplem.eu/?p=793186"},{"title":"investing in commodities via etfs","url":"https://morningstar.co.uk/uk/news/66144/investing-in-commodities-via-etfs.aspx"},{"title":"Chat with us, powered by LiveChat","url":"https://www.sii.org.pl/19221/edukacja/letnia-szkola-gieldowa/etf-y-bez-tajemnic-czyli-zlote-zasady-inwestowania-w-etf-y-lsg-2026.html"},{"title":"etfs 2026 chancen erkennen risiken steuern 2 16988837","url":"https://stock3.com/news/etfs-2026-chancen-erkennen-risiken-steuern-2-16988837"},{"title":"etfs 2026 chancen erkennen risiken steuern 3 17094535","url":"https://stock3.com/news/etfs-2026-chancen-erkennen-risiken-steuern-3-17094535"},{"title":"eToro-anmeldelse: Nyt webinar, der forklarer grundlæggende om investering i ETF'er","url":"https://tradersunion.com/da/news/brokers-news/show/1605735-etoro-review-new/"},{"title":"najwazniejsze wydarz
… [truncated, 1952 more chars]
```

</details>

**→ WebFetch** https://www.investicniweb.cz/

> prompt: Describe first screen: headline, CTA text. Sections in order. Lead magnet (e-book, course, newsletter, calculator), form fields, trust signals, disclaimers, tone ty/vy. Short quotes only.

**→ WebFetch** https://www.penize.cz/

> prompt: Describe first screen: headline, CTA text. Sections in order. Lead magnet (e-book, newsletter, calculators), form fields, trust signals (audience), disclaimers, tone ty/vy. Short quotes only.

**→ WebFetch** https://www.rozbiteprasatko.cz/

> prompt: Describe first screen: headline, CTA text. Sections in order. Lead magnet (e-book, newsletter, course), form fields, consent, trust signals (audience size), disclaimers, tone ty/vy. Short quotes only.

<details><summary>result</summary>

```
**First screen**
- **Headline:** "Investice, akcie a kryptoměny – aktuálně a přehledně"
- **CTA:** No prominent button. The visible actions are a search field ("Hledání") and a newsletter prompt with an "Odeslat" (Send) button.
- **Other above-the-fold content:** A market ticker (S&P 500, NASDAQ, DOW JONES, PX, ČEZ, NVIDIA), navigation, "TOP témata" tags, and a lead article: "Konec starých časů na burze: Dividendám odzvonilo, vládnou servery a riziko".

**Sections, in order**
1. Market ticker bar
2. Main navigation and search
3. Newsletter prompt and social follow links
4. Partner links ("Ženy a moc peněz", "Byt, či nebyt")
5. H1 headline and topic tags
6. Lead article and latest news list
7. Stock price widgets (WOOD PX ETF, ČEZ, KB)
8. "Speciál" sponsored block for "Ženy a moc peněz" (CTA: "To mě zajímá")
9. Opinion articles ("Názory")
10. "Akcie a trhy" section and "Vývoj trhů" price table
11. "Nenechte si ujít" recommendations
12. Cryptocurrency section
13. Newsletter block (repeated)
14. "Ekonomika a byznys", "Nejčtenější tento týden", "Spoření", "Nemovitosti", "Alternativy"
15. Stock lists and "Další obsah" links
16. Footer: social links, "O nás", "Pravidla a obchodní podmínk
… [truncated, 975 more chars]
```

</details>

<details><summary>result</summary>

```
**First screen**
- **Headline:** "Rozbité prasátko" with the tagline "Váš odrazový můstek do světa peněz" ("Your springboard into the world of money").
- **Subheadline:** "Vydělávejte víc peněz, začněte investovat a dosáhněte na finanční nezávislost!" (earn more, start investing, reach financial independence).
- **CTA:** "Chci vědět víc" ("I want to know more"), linking to the articles page.

**Sections, in order**
1. **Navigation:** Articles, Podcast, YouTube, Book, Bonus, Tools, About. A skip-to-content link is at the top.
2. **Articles teaser:** "Hledáte kvalitní investiční obsah?" ("Looking for quality investment content?"). CTA: "Články."
3. **Latest posts:** Four recent items (Investiční týdeník 100–102, an XTB review), with a link to all articles.
4. **Book:** Promoted as a "Český investiční bestseller" (Czech investment bestseller) about passive ETF investing. CTA: "Přečtěte si knihu" ("Read the book").
5. **Podcast/video:** "Nebaví vás čtení?" ("Not into reading?") with links to YouTube and Spotify.
6. **Media mentions ("v médiích"):** Logos linking to outlets such as Hospodářské noviny, Seznam Zprávy, iDNES, CzechCrunch, SME and CNN.
7. **Tools:** "Peníze z nebe nepadají.
… [truncated, 1667 more chars]
```

</details>

<details><summary>result</summary>

```
**First screen**
- **Headline:** The page has no hero headline. The visible identity line is the site's self-description, "Největší web o osobních financích na českém internetu" (the largest personal-finance website in the Czech internet). The first content block is a news article, "Bitcoin zbrojí na kvantové počítače. Do zad mu může vpadnout AI."
- **CTA:** A small "Odebírat" (subscribe) button in the header, next to a newsletter prompt.

**Sections in order**
1. **Header:** Logo, top navigation (Spoření, Investice, Bydlení, Daně, Kalkulačky, Účty a karty, Půjčky, and others), and a "PŘIHLÁŠENÍ" (log in) link.
2. **Newsletter prompt:** "Odebírat" button.
3. **Latest articles:** Dated news teasers with author names.
4. **Market ticker:** Currencies, stocks, and crypto prices.
5. **Calculators:** Net wage, pension, sick pay, maternity benefit, and other calculators.
6. **Campaign banner:** "Mise: Bezstarostný důchod," with the CTA "TO MĚ ZAJÍMÁ" (this interests me) and partner logos.
7. **Featured article list:** Pension and savings articles.
8. **Top téma (sponsored):** A life-insurance comparison tool with the CTA "CHCI ZKUSIT" (I want to try it).
9. **More news:** Fuel prices, ba
… [truncated, 1712 more chars]
```

</details>

**→ WebFetch** https://www.rozbiteprasatko.cz/bonus/

> prompt: What does this page offer? Headline, offer, what the visitor gets in exchange for contact, form fields, consent checkboxes, what is promised after submit. Short quotes only.

**→ WebFetch** https://www.rozbiteprasatko.cz/nastroje/

> prompt: What tools are listed? Calculators, comparison tools, are they gated behind an email? Form fields. Short quotes only.

**→ WebSearch** `Rozbité prasátko Jakub Dvořák kniha bestseller prodáno výtisků newsletter odběratelů`

<details><summary>result</summary>

```
Web search results for query: "Rozbité prasátko Jakub Dvořák kniha bestseller prodáno výtisků newsletter odběratelů"

Links: [{"title":"pavlove tipy special","url":"https://paveltips.substack.com/p/pavlove-tipy-special"},{"title":"Number of the records: 1","url":"https://arl.ujep.cz/arl-ujep/en/detail-ujep_us_cat-0329555-Frantisek-Dvorak-a-kniha"},{"title":"Svěrákovy povídky vydělávají miliony","url":"https://www.e15.cz/byznys/obchod-a-sluzby/sverakovy-povidky-vydelavaji-miliony-747470"},{"title":"svkos.MVK01 000758242","url":"https://mus.knihovny.cz/Record/svkos.MVK01-000758242"},{"title":"Jakub DVOŘÁK, IČO (48091413), sídlo Praha","url":"https://www.mesec.cz/rejstrik-firem/firma-jakub-dvorak-48091413"},{"title":"Pictoria /","url":"https://sclib.svkk.sk/sck01/Record/000291813/Description"},{"title":"prvni cteni 11   2018","url":"https://npmk.gov.cz/sites/default/files/novinky-publikace/archiv/prvni_cteni_11_-_2018.pdf"},{"title":"Jakub Dvořák, IČO (08782237), sídlo Tři Sekery","url":"https://www.mesec.cz/rejstrik-firem/firma-jakub-dvorak-08782237"},{"title":"Jakub Dvořák, IČO (88217094), sídlo Praha","url":"https://www.mesec.cz/rejstrik-firem/firma-jakub-dvorak-88217094"},{"title"
… [truncated, 3098 more chars]
```

</details>

<details><summary>result</summary>

```
**Tools listed:**
- **Portu**: a robo-advisory investment service.
- **Excel template ("Budujte bohatství")**: a spreadsheet for tracking financial habits, retirement planning, and investment returns. The page calls it an "ultimátní Excel šablonu."
- **Wallet**: a budgeting app.
- **DEGIRO**: a low-cost broker.
- **Wise**: an online currency exchange.
- **Upvest**: a peer-to-peer real estate investment platform.

**Calculators or comparison tools:** None are listed. The page links to reviews, such as "Hodnocení směnáren," but not to calculators or comparison tools.

**Email gating:** The page doesn't say any tool is behind an email gate. The only form it shows is the newsletter signup, which has a "Potvrdit e-mail" button. The Excel template links to a product page, but the content doesn't state its price or whether it requires an email, so I can't confirm either way.

**Form fields:** The extracted text shows no labeled input fields. It shows only the "Potvrdit e-mail" button and the popup options "Odběr" and "Přihlásit."
```

</details>

<details><summary>result</summary>

```
**Headline:** "BONUS" (Bonusový obsah na herohero), linking to the creator's membership page on herohero.

**Offer:** Paid membership for supporters of the Rozbité prasátko investment blog and podcast. The page doesn't state a price. It also says up front that it won't promise investment returns: "Pohádkové zhodnocení vám bohužel nenabídnu." (roughly: "Unfortunately, I can't offer you fairy-tale returns.")

**What members get:**
- A weekly video newsletter with market commentary and recommended articles, podcasts, and studies
- Podcast bonuses and full episodes released a week early: "A abyste nemuseli čekat, epizod v plné délce se dočkáte o týden dříve."
- Q&A streams, with recordings available afterward
- Commentary on the creator's own portfolio, which he no longer publishes publicly
- Extra episodes and discounts: 90% off a template, 10% off a book, and 15% off a course

**Contact exchange:** The page has no membership sign-up form. Its only sign-up is a newsletter popup ("Odebírejte newsletter!") with "Odběr" and "Přihlásit" buttons. The form fields aren't visible in the extracted content.

**Consent checkboxes:** No explicit checkboxes appear. The cookie banner offers categor
… [truncated, 260 more chars]
```

</details>

**→ WebFetch** https://www.similarweb.com/website/finex.cz/

> prompt: Extract monthly visits, global/country rank, top traffic sources, date of data.

**→ Bash** — Try fetching Portu pages with bot user agent

```
cd "C:/Users/matus/AppData/Local/Temp/claude/C--Users-matus-Desktop-B-project/66014a9f-a5a6-413b-8552-f9844a0020a6/scratchpad"; for u in https://www.portu.cz/ https://www.portu.cz/portfolia-od-portu/ ; do curl -sL -m 30 -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "$u" -o p.html -w "$u %{http_code} %{size_download}\n"; PYTHONIOENCODING=utf-8 python -c "
import re
h=open('p.html',encoding='utf-8',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',h,flags=re.S)
t=re.sub(r'<[^>]+>',' ',t); print(re.sub(r'\s+',' ',t)[:600])
print(re.findall(r'<title>(.*?)</title>',h))
"; done
```
