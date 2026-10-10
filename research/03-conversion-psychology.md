# Conversion & psychology evidence for a mobile finance lead-gen landing page

All sources accessed 2026-10-10. Tags: `VERIFIED` = I opened the page (or extracted the PDF) and it states this; `INFERRED` = my reasoning, or I only saw a search-result snippet / secondary summary. Evidence strength: **Strong** = peer-reviewed, large-sample experiment or multi-company dataset; **Medium** = credible industry dataset or documented A/B test with numbers; **Weak** = opinion, vendor blog, or number without method. Each claim carries `[tag · strength]`.

## Summary
- Finance-specific and Czech-specific evidence is thin. Most lead-gen CRO numbers come from vendors or agencies. The most solid material is general behavioural research (peer-reviewed) plus a few large datasets (Unbounce, Google/Deloitte, GetResponse).
- Benchmark: Unbounce's financial-services landing page median is 8.3%. Investing is much lower (3.9%). Paid social in finance is 9.3% (Facebook 10.1%, TikTok 10.8%, Instagram 15.5%). Finance converts better on mobile (11.5%) than desktop (9%). These are medians over pages that had conversions, so they are probably optimistic.
- No controlled study was found on where to put the email gate for a calculator, quiz or personalised result. Vendor claims point in opposite directions. The claim "interactive converts 2x" traces back to a 2014 self-rating survey (n=185), not measured conversions.
- Form evidence: fewer fields usually helps, but the widely cited Imagescape test rests on 10 vs 26 submissions. A required GDPR-style consent checkbox cut sign-ups by 15% in one test (n=3,040, non-finance). Autofill users abandon forms 75% less, but only correlationally.
- Message match: two documented Facebook-ad tests show +39% to +48% (non-finance). The popular "66%" figure could not be traced to a source.
- Speed: a 0.1 s mobile improvement was associated with a 21.6% higher progression to a form-submission page for lead-gen brands (study of 37 brands across all verticals — the number of lead-gen brands is not stated; 2019, correlational). *(corrected by lead agent, see 99-verification-log C4)* Core Web Vitals "good" LCP is 2.5 s or less.
- Fee framing: showing fees in currency helps larger investors but small investors dismiss small amounts. Making fees salient moves choices toward cheaper funds, yet most people still do not pick the cheapest. No study of "CZK lost over 20 years" versus "TER %" on conversion was found.
- Urgency/scarcity raises purchase intent on average (meta-analysis), but it is also widely faked online (157 deceptive countdown timers in one crawl) and finance regulators target inducements. No evidence found on trust backlash either way.
- Czech tone: no finance-specific study on tykání vs vykání. A 2017 survey found about one in five annoyed by tykání in ads (more over 55). The four Czech finance/investing sites I could read all use vykání.
- Post-submit: welcome emails (35.5% open, cross-industry) outperform finance campaigns (20.3% open). Double opt-in cuts sign-up volume about 4x but lifts open and click rates. No evidence found on instant vs delayed delivery of the lead magnet.

## Findings

### Q1. Lead-magnet types
- Quiz funnels (ConvertFlow, 1,063 campaigns, Sept 2026, means): lead capture 7.85% of visitors across formats, 11.28% for landing-page quizzes, 10.45% for embedded; "engagement" conversion 23.84%. No breakdown by industry or length. [VERIFIED · Medium] https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026
- Octane AI (vendor): 29% average quiz email opt-in, 190M+ quiz starts, method undisclosed. [VERIFIED · Weak] https://www.octaneai.com/solutions/lead-generation
- "Interactive 70% vs static 36%" is a Demand Metric June 2014 survey of marketers rating their own content, sponsored by an interactive-content vendor; the later CMI/ion 2016 report (n=341) also relies on what respondents "reported". It is not a measured conversion rate. [VERIFIED (ion/CMI PDF), details of 185 respondents INFERRED · Weak] https://eu-assets.contentstack.com/v3/assets/blt663d10211b43b0ca/bltdf544ccdf7c23d06/67ed4d5c2545ec5ffe16a9b1/Ion_CMI_InteractiveContent_Final.pdf
- Outgrow claims calculators convert 3-5x regular landing pages and quizzes yield "83% more qualified leads" with no sources or samples. [VERIFIED (that the page makes the claims) · Weak] https://outgrow.co/blog/interactive-content-roi-data-driven-insights
- Quiz length: CredSpark says length explains only 2.3% of completion variance; Typeform reports forms over six questions fall under 50% completion (snippet only). [VERIFIED (CredSpark) / INFERRED (Typeform) · Weak] https://support.credspark.com/support/solutions/articles/73000524383-best-quiz-practices
- Personalised projection as a behaviour lever (not a lead metric): a randomised field experiment found individual retirement-income projections raised annual contributions by $85 (3.6%). [VERIFIED · Strong] https://experts.umn.edu/en/publications/what-will-my-account-really-be-worth-experimental-evidence-on-how/
- Lead quality by magnet type: no independent evidence found. Vendor claims only ("interactive leads score 40% higher", no method).

### Q2. Gating: upfront vs after value
- No controlled test of gate-before-result vs gate-after-result found. Octane's page says gating before results gives "highest conversion" and after gives lower conversion but higher trust, without numbers. A search tool had shown 45-55% vs 25-35%; those figures are not on the page. [VERIFIED · Weak] https://www.octaneai.com/solutions/lead-generation
- Act-On optional-gate case (via search snippet): an optional gate drew over 3x the readers and 20.4% left contact details, lead quality unmeasured. Page returned 404 when opened. [INFERRED · Weak] https://act-on.com/blog/when-why-and-how-to-gate-your-content-for-maximum-results
- Foot-in-the-door: the 1984 meta-analysis puts FITD at r = .17 and door-in-the-face at .15, both "small even under optimal conditions". [VERIFIED · Strong, but 1984, possibly outdated] https://pure.psu.edu/en/publications/sequentialrequest-persuasive-strategies-metaanalysis-of-footinthe/
- A direct replication of the original Freedman and Fraser study in Poland and Ukraine reportedly found the effect insignificant in 2013 (snippet only). Guéguen's 2002 email FITD (n=50 students) was positive (snippet). [INFERRED · Medium/Weak] https://sage.figshare.com/collections/The_Foot-in-the-Door_Phenomenon_40_and_50_Years_Later_A_Direct_Replication_of_the_Original_Freedman_and_Fraser_Study_in_Poland_and_in_Ukraine/4653512
- IKEA effect (Norton, Mochon, Ariely, 2012, four studies): people value what they built more, but only when they complete it. Transfer to a lead funnel is untested. [VERIFIED · Strong; web transfer INFERRED] https://scholars.duke.edu/publication/861385
- Endowed progress (Nunes and Drèze 2006): 300 car-wash cards, head-start group more likely to finish. Widely quoted 19% vs 34% not confirmed on the Wharton page. [VERIFIED (design) / INFERRED (percentages) · Medium] https://knowledge.wharton.upenn.edu/?p=5630
- Endowment effect with personalised results on web pages: no evidence found.

### Q3. Forms
- Baymard (2019): checkout averaged 12.8 fields; 26% abandoned because checkout was too long or complex; 6-8 fields judged feasible. This is e-commerce checkout, not lead forms. [VERIFIED · Medium] https://baymard.com/blog/checkout-optimization-from-16-fields-to-8
- Imagescape (2008): 11 fields to 4 raised conversion from 5.4% to 11.9% (+120%); submissions 10 vs 26; contact-form views 184 vs 219; the document says 160% in one place and 120% in another. Tiny sample, own website. [VERIFIED · Weak] https://imagescape.com/filer/canonical/1455648270/152
- Multi-step vs single-step (Conversion Fanatics, 2015, about 1,100 visits per arm): multi-step +52.9%, single-step +40.3% vs control; no lead-quality drop; no significance test between the two variants. [VERIFIED · Medium] https://conversionfanatics.com/?p=499
- Formstack "multi-step 13.9% vs single 4.5%" appears only in secondary summaries. [INFERRED · Weak]
- Required consent checkbox (Heritage Foundation, May 2018, experiment #6068): 47.1% to 39.8% (-15.4%), n=3,040, ran 8 days; ~~the offer was a free guide~~ *(lead-agent check: the page does not state the offer — removed)*. Shows the cost of an explicit required checkbox, not the pre-ticked vs unticked difference. [VERIFIED · Medium] https://www.nextafter.com/?p=15022
- Autofill (Chrome, Dec 2024, US, millions of page loads): users who autofill abandon address/card forms 75% less and finish about 35% faster; correlational. [VERIFIED · Medium] https://developer.chrome.com/blog/autofill-insights-2024
- Phone field: only anecdotes (one claims optional phone "doubled" conversion; another test went the other way). [INFERRED · Weak]
- Email-only vs name+email: no controlled test found; MarketingSherpa 2012 chart shows response by field type, not a split test. [INFERRED · Weak]
- Button copy: the "Get my" +90% / "your" -24.95% figures come from a secondhand summary of Aagaard tests, not an original source. [INFERRED · Weak] https://resources.review42.com/call-to-action-tips/
- Inline vs popup: the 3.09% popup vs 0.58% inline figures are an older Sumo dataset reported secondhand. Google's mobile interstitial penalty (2017) concerns visits from search, not paid social. [INFERRED · Weak] https://bdow.com/stories/pop-up-statistics/

### Q4. Message match
- NextAfter, Dallas Theological Seminary (2016): using the landing page's image in the Facebook ad lifted ad-level conversion from 0.49% to 0.73% (+47.6%), n=239,607. [VERIFIED · Medium] https://www.nextafter.com/?p=13009
- NextAfter, Hoover Institution (Dec 2014): landing page restyled to match the ad background and shortened copy; 25.0% to 34.8% (+39.2%), n=3,687. Two changes were bundled. [VERIFIED · Medium] https://www.nextafter.com/?p=11434
- The "66% lift" (attributed to KlientBoost) and "73% of paid traffic mismatched" could not be traced to a primary source. [INFERRED · Weak] https://foundrycro.com/blog/landing-page-audit-framework-paid-traffic-2026/
- Mechanism: NN/g describes "information scent" as the expectation users form from a link and measure the destination against. [INFERRED · Weak (conceptual)] https://nngroup.com/articles/information-scent/
- No finance-specific or Czech evidence.

### Q5. First screen, speed, mobile
- First 10 seconds are critical for stay-or-leave; leaving stays likely through about 30 seconds (Microsoft Research data: 205,873 pages, 2B+ dwell times, 2011 article). [VERIFIED · Strong, dated] https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/
- Visitors read at most 28% of words, more likely 20% (25 users, 2005 data, article 2008). [VERIFIED · Medium, dated] https://www.nngroup.com/articles/how-little-do-users-read/
- Above-the-fold share of viewing time fell from 80% (2010) to 57% (2018); 74% within two screenfuls; 120 participants, desktop 1920x1080, no mobile data. [VERIFIED · Medium] https://www.nngroup.com/articles/scrolling-and-attention/
- Thumb use: 1,333 observations (780 touching screens): 49% one-handed, 36% cradled, 15% two-handed (2013). The author later revised his guidelines. [VERIFIED · Weak/Medium, dated] https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php
- Speed (Google/Deloitte, 37 brands, 30M+ sessions, 30 days in late 2019): a 0.1 s improvement across the whole journey went with 21.6% higher progression to the form-submission page and 7% more page views for lead-gen. Deloitte's page states an 8.3% lower bounce for lead-gen info pages. Commissioned, correlational. [VERIFIED · Medium] https://web.dev/case-studies/milliseconds-make-millions ; https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html
- Google (2016): 53% of mobile visits likely abandoned after 3 s (stated on AdSense help page, year not stated there). "32% higher bounce from 1 to 3 s" is only in secondary sources. [VERIFIED / INFERRED · Medium] https://support.google.com/adsense/answer/7450973?hl=en
- Core Web Vitals: LCP of 2.5 s or less is "good", measured at the 75th percentile, mobile and desktop separately. [VERIFIED · Strong] https://web.dev/articles/lcp
- Vodafone Italy: LCP -31% with +8% sales; WPO Stats adds +15% lead-to-visit. [VERIFIED (web.dev) / INFERRED (lead figure) · Medium] https://web.dev/case-studies/vitals-business-impact
- Readability (Unbounce, finance): pages at grade 5-7 reading level had an 18.1% median conversion vs 7.1% at college level; 195-715 words was best. Correlational. [VERIFIED · Medium] https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate
- Sticky CTA: vendor tests range from +20.4% to +6.2% to non-significant; mostly e-commerce. [INFERRED · Weak] https://convertibles.dev/blogs/case-studies/homepage-sticky-cta-case-study

### Q6. Trust in finance
- Stanford Web Credibility guidelines (3 years, 4,500+ people, 2002): show a real organisation, contact details, sources, professional design, limit promotional content, fix errors. [VERIFIED · Medium, dated] https://credibility.stanford.edu/guidelines
- Baymard seal survey (2013, US adults, 2,510 responses, 49% "don't know"): Norton ~36%, McAfee ~23%; measures perceived trust, commissioned. [VERIFIED · Medium, dated] https://baymard.com/blog/site-seal-trust
- NN/g (2010): real-people photos get attention, generic stock people are skipped; qualitative eyetracking. [VERIFIED · Weak/Medium, dated] https://www.nngroup.com/articles/photos-as-web-content/
- Social proof tests: only vendor anecdotes (e.g., micro-testimonials 9.1% to 16% click rate, no sample). No fintech-specific test found. [INFERRED · Weak] https://faziergrowthhacks.beehiiv.com/p/76-clicks
- Czech context: 77% of Czechs trust the ČNB (STEM, June 2026, sample size not stated). A ČNB reference could be a trust anchor; effect on conversion untested. [VERIFIED (figure) / INFERRED (implication) · Medium] https://www.cnb.cz/en/cnb-news/news/Public-trust-in-the-Czech-National-Bank-remains-high
- What Czech competitors show (observed 2026-10-10): Finax CZ (regulator NBS, 115,000+ clients, Google 4.9/399 reviews), Investown (ČNB licence, store ratings), XTB (77% CFD-loss warning), Fio (security page, fraud warning). [VERIFIED · Weak (observation, n=4)] https://www.finax.eu/cs ; https://www.investown.cz/ ; https://www.xtb.com/cz ; https://www.fio.cz/

### Q7. Biases
- Loss aversion is contested: Gal and Rucker (2018) argue evidence is weaker than assumed; Ruggeri et al. (2020, 4,098 participants, 19 countries, 13 languages) replicated about 90% of prospect-theory contrasts. Not shown whether the Czech Republic was included. No test of loss-framed fee display on conversion. [VERIFIED (Ruggeri) / INFERRED (Gal and Rucker) · Strong] https://www.publichealth.columbia.edu/public-health-now/news/global-study-confirms-influential-theory-behind-loss-aversion
- Fee framing: Newall and Love (2015) found large investors benefit when fees are stated in currency, small investors benefit when returns are in currency, with a "peanuts effect" on small amounts. [VERIFIED (abstract) · Strong] https://stir.ac.uk/research/hub/publication/534045 (a 20-year cumulative CZK figure would avoid small amounts: INFERRED).
- Choi, Laibson and Madrian (NBER 2006/2010): making fees transparent shifts portfolios to cheaper funds, but fees are still not minimised and past returns get high weight. [VERIFIED · Strong] https://www.nber.org/papers/w12261.pdf
- Morningstar (2018, 3,622 participants): dollar vs percent display did not help; only 14% went all-in on the cheapest fund. [INFERRED · Medium] https://nxtbook.com/nxtbooks/morningstar/magazine_20180607/index.php?startid=24
- FCA Occasional Paper 32 (2018, 1,000+ non-advised investors): a warning, a chart, a pre-purchase summary and prominent placement all raised cheaper-fund choice; prominence worked best. [VERIFIED · Strong] https://www.fca.org.uk/publications/occasional-papers/occasional-paper-no-32-now-you-see-it-drawing-attention-charges-asset-management-industry
- Anchoring: one- or two-sentence cues in emails changed 401(k) contribution rates by up to +2.9% / -1.4% of income, lasting two months to a year. Suggests default values in a calculator matter; that step is INFERRED. [VERIFIED · Strong] https://faculty.wharton.upenn.edu/wp-content/uploads/2013/06/choi-et-al-small-cues-change-savings-choices.pdf
- Defaults: automatic 401(k) enrolment raised participation sharply (Madrian and Shea); magnitudes only from secondary sources (about +48 points for new hires). [VERIFIED (direction) / INFERRED (size) · Strong] https://www.nber.org/papers/w7682
- Scarcity/urgency: meta-analysis of 416 effect sizes from 131 studies (2022): scarcity cues generally raise perceived value and purchase intent, with moderators. No trust-backlash data found. [VERIFIED · Strong] https://research.monash.edu/en/publications/scarcity-tactics-in-marketing-a-meta-analysis-of-product-scarcity/
- Fake urgency: a crawl of about 11K shopping sites found 157 deceptive countdown timers on 140 sites and 17 deceptive low-stock messages. [VERIFIED · Strong] https://arxiv.org/pdf/1907.07032
- Regulation: FCA (Aug 2022) required clearer risk warnings and banned refer-a-friend bonuses for high-risk investments; the page does not address urgency or FOMO. [VERIFIED · Strong] https://www.fca.org.uk/news/press-releases/fca-clamps-down-marketing-high-risk-investments-consumers
- Choice overload: Scheibehenne et al. (2010, 63 conditions, N=5,036) found a mean effect near zero; Chernev et al. (2015, 99 observations, 7,202 participants) found it appears with complex sets, hard tasks, unclear preferences and effort-minimising goals. [INFERRED (2010) / VERIFIED (2015) · Strong] https://www.kellogg.northwestern.edu/faculty/research/detail/2015/when-product-assortment-leads-to-choice-overload-a-conceptual

### Q8. Post-submit
- Welcome emails (Omnisend 2025, 27,000+ brands, all industries): 35.53% open, 3.94% CTR, 0.87% unsubscribe. Automated emails earn 4.66% CTR vs 0.74% for campaigns. [VERIFIED · Medium] https://www.omnisend.com/blog/email-marketing-benchmarks/
- Double opt-in (GetResponse, 2022 SMB data, 2.76B newsletters): visitor-to-subscriber 1.28% (single) vs 0.33% (double); open 27.36% vs 35.72%; CTR 2.36% vs 4.19%; vendor data. [VERIFIED · Medium] https://www.getresponse.com/blog/single-opt-in-vs-double-opt-in
- Thank-you page as second step: SnackNation (10 months, 884 leads, no control, only 18% qualified) reports matched thank-you pages at 7.5-11% vs 2.6% for standard exit popups. Not finance. [VERIFIED · Weak] https://growandconvert.com/conversion-rate-optimization/thank-you-lead-generating-machine/
- Instant vs delayed delivery of the lead magnet: no evidence found.
- Czech anti-spam law (Act 480/2004) requires prior consent for commercial messages; whether a confirmation email is mandatory is not stated in sources I saw. Legal check needed. [INFERRED · Weak] https://www.dauc.cz/predpisy/1996/480-2004-sb

### Q9. Benchmarks
See table. Costs below are US/global unless stated; no Czech finance CPL benchmark found. Illustrative arithmetic (INFERRED): Czech Facebook CPM of $3.50-$5.00 at about 1% CTR implies about $0.35-$0.50 per click before conversion; both inputs are low-quality.

### Q10. Czech copy: tykání vs vykání, tone
- AKA/Nielsen Admosphere online survey (March 2017, n=513, 15+): about 20% bothered by tykání in ads, more among over-55s; South Bohemia 34%; about half not bothered, a quarter no opinion. Over nine years old, not finance. [VERIFIED · Medium, dated] https://www.mediaguru.cz/polovine-lidi-vadi-cizojazycne-vyrazy-v-reklamach
- WPP Media (Oct 2025, n=5,014 online Czechs 15+): 73% think ads exaggerate; 21% feel pushed to buy; loans among the most disliked categories (60%+ objecting); banks tolerated when promoting general services, not loans. No tykání/vykání question. [VERIFIED · Medium] https://www.mediaguru.cz/clanky/2025/10/jak-cesi-vnimaji-reklamu-klicova-je-pro-ne-relevance/
- Observed on 2026-10-10: Finax CZ, XTB CZ, Fio and Investown all use vykání. Revolut and Trading 212 blocked my fetch. [VERIFIED · Weak (n=4)]
- No evidence found on aggressive vs sober sales tone in Czech finance.

## Evidence table
| Claim | Number / detail | Source URL | Year | Tag |
|---|---|---|---|---|
| Finance LP median | 8.3%; insurance 18.2%; investing 3.9%; credit/lending 8.8% | https://unbounce.com/?p=135737 | 2024 | VERIFIED · Medium |
| Unbounce sample | 41,000+ pages, 464M visitors, 57M conversions, Jul 2023-Jul 2024; pages with <50 visitors or no conversions excluded | https://unbounce.com/conversion-benchmark-report/methodology/ | 2024 | VERIFIED · Strong |
| Finance paid social | 9.3% (all-industry 5.2%); IG 15.5%, TikTok 10.8%, FB 10.1%; paid search 10.1%; email 7.9% | https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate | 2024 | VERIFIED · Medium |
| Finance mobile vs desktop | 11.5% vs 9% | same | 2024 | VERIFIED · Medium |
| Older Unbounce finance median | 3.8% (top quartile 26%); edition appears to be 2020 | https://unbounce.com/industry/finance/ | ~2020 | VERIFIED · Medium (outdated) |
| ConvertFlow quiz funnels | 7.85% / 11.28% / 10.45% lead capture | https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026 | 2026 | VERIFIED · Medium |
| Demand Metric 70% vs 36% | self-rated, vendor-sponsored | ion/CMI PDF (above) | 2014/2016 | VERIFIED (self-report) · Weak |
| FITD effect | r = .17 | https://pure.psu.edu/en/publications/sequentialrequest-persuasive-strategies-metaanalysis-of-footinthe/ | 1984 | VERIFIED · Strong |
| Form fields (checkout) | 12.8 avg; 26% abandon for length | https://baymard.com/blog/checkout-optimization-from-16-fields-to-8 | 2019 | VERIFIED · Medium |
| Imagescape | 5.4% to 11.9%; 10 vs 26 submissions | https://imagescape.com/filer/canonical/1455648270/152 | 2008 | VERIFIED · Weak |
| Multi-step test | +52.9% vs +40.3%, ~1,100 visits/arm | https://conversionfanatics.com/?p=499 | 2015 | VERIFIED · Medium |
| Consent checkbox | 47.1% to 39.8%, n=3,040 | https://www.nextafter.com/?p=15022 | 2018 | VERIFIED · Medium |
| Autofill | 75% fewer abandonments; 35% faster | https://developer.chrome.com/blog/autofill-insights-2024 | 2024 | VERIFIED · Medium |
| Message match (DTS) | 0.49% to 0.73%, n=239,607 | https://www.nextafter.com/?p=13009 | 2016 | VERIFIED · Medium |
| Message match (Hoover) | 25.0% to 34.8%, n=3,687 | https://www.nextafter.com/?p=11434 | 2014 | VERIFIED · Medium |
| Speed and lead-gen | +21.6% progression to form submission per 0.1 s | https://web.dev/case-studies/milliseconds-make-millions | 2019-20 | VERIFIED · Medium |
| 3 s abandonment | 53% of mobile visits | https://support.google.com/adsense/answer/7450973?hl=en | 2016 (est.) | VERIFIED · Medium |
| LCP threshold | ≤2.5 s at p75 | https://web.dev/articles/lcp | current | VERIFIED · Strong |
| Above the fold | 57% of viewing time (desktop) | https://www.nngroup.com/articles/scrolling-and-attention/ | 2018 | VERIFIED · Medium |
| Fee salience | >80% still not all-in on lowest-fee fund | https://www.nber.org/papers/w12261.pdf (80% figure from Wharton summary) | 2006/2010 | INFERRED · Strong |
| Anchoring cues | +2.9% / -1.4% of income | https://faculty.wharton.upenn.edu/wp-content/uploads/2013/06/choi-et-al-small-cues-change-savings-choices.pdf | 2017 | VERIFIED · Strong |
| Deceptive timers | 157 on 140 sites | https://arxiv.org/pdf/1907.07032 | 2019 | VERIFIED · Strong |
| Finance email (campaign) | 20.25% open, 0.99% CTR, 0.17% conv | https://www.omnisend.com/blog/email-marketing-benchmarks/ | 2025 | VERIFIED · Medium |
| Business + Finance email | 31.35% open, 2.78% click, 0.15% unsub (all: 35.63 / 2.62 / 0.22) | https://mailchimp.com/resources/email-marketing-benchmarks/ | 2023 | VERIFIED · Medium |
| Double vs single opt-in | 0.33% vs 1.28% subscription; 35.72% vs 27.36% open | https://www.getresponse.com/blog/single-opt-in-vs-double-opt-in | 2022 | VERIFIED · Medium |
| Facebook finance CPL | ~$39.2 avg (range $15.76-$73.16), all countries, Jul 2025-Jul 2026; page dates inconsistent | https://www.superads.ai/facebook-ads-costs/cost-per-lead/finance | 2026 | VERIFIED · Weak/Medium |
| Finance and insurance traffic ads | CTR 0.98%, CPC $1.22 (LocaliQ, Oct 2025) | https://influee.co/cz/blog/how-much-do-facebook-ads-cost | 2025 | VERIFIED · Medium |
| Czech Facebook / Instagram CPM | $3.50-$5.00 / $4.50-$6.50; method not stated | https://adligator.com/blog/meta-ads-cpm-by-country-benchmarks | 2026 | VERIFIED · Weak |
| Generic Czech FB CPL | ~$44.55 (≈938 Kč), July 2025, cross-industry, source unclear | https://www.shopify.com/cz/blog/kolik-stoji-reklama-na-facebooku | 2025 | VERIFIED · Weak |
| Tykání survey | ~20% bothered; n=513 | https://www.mediaguru.cz/polovine-lidi-vadi-cizojazycne-vyrazy-v-reklamach | 2017 | VERIFIED · Medium (outdated) |
| Czech ad attitudes | 73% say ads exaggerate; n=5,014 | https://www.mediaguru.cz/clanky/2025/10/jak-cesi-vnimaji-reklamu-klicova-je-pro-ne-relevance/ | 2025 | VERIFIED · Medium |

## Contradictions & open questions
- Unbounce finance median: 8.3% (own page) vs 8.4% (secondary) vs 3.8% (older edition page). Conversion definition is not given in the methodology, and pages without conversions are excluded, which biases medians upward.
- Deloitte page quotes an 8.3% bounce reduction for lead-gen; web.dev quotes +21.6% progression and +7% page views. Both claim to come from the same study.
- Search-tool summaries disagreed with opened pages in several places (Octane opt-in ranges, Superads CPL $33.26 vs $39.2). I used the opened pages and flagged the rest INFERRED.
- Imagescape quotes both +120% and +160%; underlying counts are very small.
- Interactive vs static: widely quoted numbers are self-rated surveys or vendor claims; I found no independent measured comparison.
- Open: gate timing (before / after / optional) for calculators in finance; effect of CZK-loss fee framing on conversion; tykání vs vykání effect in Czech finance; Czech finance CPL; instant vs delayed delivery; lead quality by magnet type; whether Meta's in-app browser reduces autofill or conversion (only vendor claims found).
- Czech double-opt-in requirement and consent wording need a legal check (outside this brief).

## Options & trade-offs (input only, no recommendation)
- **Gate timing.** (a) Upfront: maximum commitment signal but vendor claims say more drop-off. (b) After a partial result/preview: supported by IKEA/endowed-progress logic, untested for leads. (c) Optional skip: more readers, unknown quality (Act-On snippet). (d) After full result: best trust per vendors, risk of free riders.
- **Form shape.** Email-only (fewest fields, no personalisation) vs first name + email (small friction, enables salutation) vs two-step (some case-study gains, vendor-heavy evidence). Phone field: lower volume, possibly higher intent, evidence anecdotal.
- **Consent.** Unticked required checkbox (compliant, about -15% in one test) vs consent text next to the button vs double opt-in (about 4x fewer subscribers in GetResponse data but better open and click). Legal check needed.
- **Lead-magnet format.** Calculator, comparison tool, quiz, report or email course: all have vendor-only conversion claims; completion burden differs (short quiz vs multi-field calculator).
- **Fee framing.** TER % (familiar, abstract) vs CZK over 20 years (concrete, could be seen as scare tactic) vs both. Evidence supports salience, not a specific framing.
- **Urgency.** None vs genuine deadline vs scarcity message. Meta-analysis favours cues; fake timers are common and finance regulators target inducements.
- **Tone.** Vykání (matches all four Czech competitors seen, safer for older audience) vs tykání (about 20% annoyed in a 2017 survey, may suit younger social audiences). No finance data.
- **Post-submit.** Instant on-page delivery vs email delivery (email builds list quality, on-page avoids deliverability risk) plus a thank-you second step. Untested in finance.
- **Meta Instant Form vs landing page.** Vendor claims say forms are cheaper per lead, landing pages better qualified (Weak, no finance data). The brief requires a landing page, so this is context only: https://www.leadgen-economy.com/blog/facebook-lead-ads-vs-landing-pages/

## Sources
- https://unbounce.com/?p=135737 (Finance and Insurance benchmarks page)
- https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate
- https://unbounce.com/conversion-benchmark-report/methodology/
- https://unbounce.com/industry/finance/
- https://unbounce.com/average-conversion-rates-landing-pages/
- https://www.newswire.ca/news-releases/unbounce-s-2024-conversion-benchmark-report-proves-that-attention-spans-are-declining-and-so-are-conversion-rates-831617439.html
- https://web.dev/case-studies/milliseconds-make-millions
- https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html
- https://web.dev/case-studies/vitals-business-impact
- https://wpostats.com/1/
- https://web.dev/articles/lcp
- https://support.google.com/adsense/answer/7450973?hl=en
- https://baymard.com/blog/checkout-optimization-from-16-fields-to-8
- https://baymard.com/blog/site-seal-trust
- https://imagescape.com/filer/canonical/1455648270/152
- https://conversionfanatics.com/?p=499
- https://www.nextafter.com/?p=15022 ; https://www.nextafter.com/blog/gdpr-online-fundraising/
- https://www.nextafter.com/?p=13009 ; https://www.nextafter.com/?p=11434
- https://developer.chrome.com/blog/autofill-insights-2024
- https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026
- https://www.octaneai.com/solutions/lead-generation
- https://outgrow.co/blog/interactive-content-roi-data-driven-insights
- https://eu-assets.contentstack.com/v3/assets/blt663d10211b43b0ca/bltdf544ccdf7c23d06/67ed4d5c2545ec5ffe16a9b1/Ion_CMI_InteractiveContent_Final.pdf
- https://support.credspark.com/support/solutions/articles/73000524383-best-quiz-practices
- https://act-on.com/blog/when-why-and-how-to-gate-your-content-for-maximum-results (404 on opening; snippet only)
- https://pure.psu.edu/en/publications/sequentialrequest-persuasive-strategies-metaanalysis-of-footinthe/
- https://sage.figshare.com/collections/The_Foot-in-the-Door_Phenomenon_40_and_50_Years_Later_A_Direct_Replication_of_the_Original_Freedman_and_Fraser_Study_in_Poland_and_in_Ukraine/4653512 (403; snippet only)
- https://scholars.duke.edu/publication/861385
- https://knowledge.wharton.upenn.edu/?p=5630
- https://experts.umn.edu/en/publications/what-will-my-account-really-be-worth-experimental-evidence-on-how/
- https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/ ; https://www.nngroup.com/articles/how-little-do-users-read/ ; https://www.nngroup.com/articles/scrolling-and-attention/ ; https://www.nngroup.com/articles/photos-as-web-content/ ; https://nngroup.com/articles/information-scent/
- https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php
- https://credibility.stanford.edu/guidelines
- https://www.cnb.cz/en/cnb-news/news/Public-trust-in-the-Czech-National-Bank-remains-high
- https://www.finax.eu/cs ; https://www.xtb.com/cz ; https://www.fio.cz/ ; https://www.investown.cz/
- https://www.publichealth.columbia.edu/public-health-now/news/global-study-confirms-influential-theory-behind-loss-aversion
- https://stir.ac.uk/research/hub/publication/534045
- https://www.nber.org/papers/w12261.pdf
- https://nxtbook.com/nxtbooks/morningstar/magazine_20180607/index.php?startid=24 (403; snippet only)
- https://www.fca.org.uk/publications/occasional-papers/occasional-paper-no-32-now-you-see-it-drawing-attention-charges-asset-management-industry
- https://faculty.wharton.upenn.edu/wp-content/uploads/2013/06/choi-et-al-small-cues-change-savings-choices.pdf
- https://www.nber.org/papers/w7682
- https://research.monash.edu/en/publications/scarcity-tactics-in-marketing-a-meta-analysis-of-product-scarcity/
- https://arxiv.org/pdf/1907.07032
- https://www.fca.org.uk/news/press-releases/fca-clamps-down-marketing-high-risk-investments-consumers
- https://www.kellogg.northwestern.edu/faculty/research/detail/2015/when-product-assortment-leads-to-choice-overload-a-conceptual
- https://www.omnisend.com/blog/email-marketing-benchmarks/
- https://mailchimp.com/resources/email-marketing-benchmarks/
- https://www.getresponse.com/blog/single-opt-in-vs-double-opt-in
- https://growandconvert.com/conversion-rate-optimization/thank-you-lead-generating-machine/
- https://www.dauc.cz/predpisy/1996/480-2004-sb (snippet only)
- https://www.superads.ai/facebook-ads-costs/cost-per-lead/finance
- https://influee.co/cz/blog/how-much-do-facebook-ads-cost
- https://adligator.com/blog/meta-ads-cpm-by-country-benchmarks
- https://www.shopify.com/cz/blog/kolik-stoji-reklama-na-facebooku
- https://www.leadgen-economy.com/blog/facebook-lead-ads-vs-landing-pages/ (snippet only)
- https://www.mediaguru.cz/polovine-lidi-vadi-cizojazycne-vyrazy-v-reklamach
- https://www.mediaguru.cz/clanky/2025/10/jak-cesi-vnimaji-reklamu-klicova-je-pro-ne-relevance/
- Snippet-only, unopened: https://foundrycro.com/blog/landing-page-audit-framework-paid-traffic-2026/ ; https://resources.review42.com/call-to-action-tips/ ; https://bdow.com/stories/pop-up-statistics/ ; https://convertibles.dev/blogs/case-studies/homepage-sticky-cta-case-study ; https://faziergrowthhacks.beehiiv.com/p/76-clicks
