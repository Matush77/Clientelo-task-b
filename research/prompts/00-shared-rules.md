# Shared context & rules for all research agents

Written by the lead agent (Claude Opus 5.5). Every research agent (Claude Sonnet 5.5, `general-purpose`) reads this file plus its own task file.

## Context
You are a research agent supporting a hiring assignment. The final product is a mobile-first landing page (in Czech) that compares ETFs traded on NYSE for a Czech retail investor. The visitor arrives from a paid ad on mobile and gives the page only a few seconds. The page is a lead magnet: it offers value and collects the visitor's contact in exchange. It will be judged mainly on the question "could we run paid ads to it tomorrow?". The page must use real data with cited sources, measure the full journey from arrival to form submission, and be deployed on free hosting (e.g. Vercel). Two ad versions must also be proposed. The original assignment (in Slovak) is in `C:\Users\matus\Desktop\B_project\research\assignment.md`.

Today's date is 2026-10-10.

Your job is RESEARCH ONLY. Decisions about the target segment, the lead magnet, the copy and the design will be made later by a human together with the lead agent, based on your findings.

## Rules
1. Every factual claim needs a source URL and an access date (2026-10-10). Tag each claim:
   - `VERIFIED` = you opened the page and it states this.
   - `INFERRED` = your own reasoning/extrapolation, or the source was not directly readable (e.g. only a search snippet).
   Never invent a URL, statistic, quote, ad or study. If you cannot find evidence, write "No evidence found" — that is a valid and useful result.
2. Prefer primary sources (regulators, official statistics, platform policies, issuer websites, original studies) over blog summaries. Always note the publication year; flag anything older than 2022 as possibly outdated.
3. Present OPTIONS with evidence and trade-offs. Do NOT give a final recommendation and do not pick a winner.
4. Do not fill in, sign up for, or submit any form on third-party websites, and do not create accounts. Observe forms only.
5. Verbatim quotes must be under 15 words; otherwise summarise in your own words.
6. Use WebSearch and WebFetch. Search in Czech where the topic concerns Czech users (e.g. "investování do ETF", "poplatky ETF", "kalkulačka investic", "jaké ETF koupit").
7. Write your output as ONE markdown file at the exact path given in your task file, using the Write tool. Do not create or modify any other file. Structure:
   ```
   # <Title>
   ## Summary (max 10 bullets)
   ## Findings (grouped by research question; each claim tagged [VERIFIED] or [INFERRED] with a source link)
   ## Evidence table (claim | number/detail | source URL | year | tag)
   ## Contradictions & open questions
   ## Options & trade-offs (input for later decisions — no recommendation)
   ## Sources (full list)
   ```
   Length: roughly 1500–2500 words plus tables.
8. Your final reply to the lead agent must contain only: the file path, a 5-bullet summary, and the 3 claims you are least confident about (so they can be checked first).
