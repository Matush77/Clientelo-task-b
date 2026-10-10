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
