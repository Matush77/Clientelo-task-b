# Agent E — Data sources & product facts

Output file: `C:\Users\matus\Desktop\B_project\research\05-data-facts.md`

Flag every fact that changed during 2024–2026.

## Research questions
1. **Accessibility.** Can a Czech retail investor actually buy US-domiciled ETFs traded on NYSE / NYSE Arca (e.g. SPY, VOO, VTI, SCHD)? Explain the PRIIPs Regulation (EU) No 1286/2014 KID requirement and its practical effect. Which brokers available to Czechs block or allow it (XTB, Trading 212, Interactive Brokers, Degiro, Fio e-Broker, Revolut, Saxo, Lynx, Portu/Fondee) and what are the routes around it (MiFID professional client status, options exercise, US ETFs that publish a KID)? Use broker help pages as sources.
2. **What "NYSE" means for ETFs.** NYSE vs. NYSE Arca vs. NYSE American; where the big ETFs are actually listed (e.g. SPY, VOO, IVV, VTI, QQQ, SCHD). Find official listing data.
3. **UCITS equivalents** of popular US ETFs (e.g. VOO/IVV → CSPX/SXR8/VUSA, VT → VWCE, QQQ → EQQQ/CNDX, SCHD → ?) with TER, domicile, distribution policy — from issuer pages or justETF.
4. **Data sources for a comparison of NYSE-listed ETFs.** For each source give: URL; fields available (ticker, name, issuer, expense ratio, AUM, inception, performance 1y/3y/5y/10y, dividend yield, distribution policy, holdings count, top holdings, index); update frequency; access method (CSV/JSON/API/manual); free-tier limits; and terms of use regarding display/redistribution on a public website. Candidates: issuer sites (iShares/BlackRock, Vanguard, State Street SPDR, Schwab, Invesco) incl. downloadable fact sheets; SEC EDGAR (prospectus fee tables, N-PORT, N-CEN); NYSE listings directory; Nasdaq Trader symbol directory (`otherlisted.txt` with exchange codes); Stooq CSV; Alpha Vantage; Financial Modeling Prep; Twelve Data; Tiingo; Yahoo Finance (unofficial, check ToS). Prefer sources that can be cited per data point.
5. **Costs for a Czech investor buying US ETFs:** commissions and CZK→USD FX conversion fees of brokers commonly used by Czechs (XTB, Trading 212, Interactive Brokers, Degiro, Fio, Revolut, Lynx), from official price lists, with the date of the price list.
6. **Czech tax facts (2026)** for ETF investors: 3-year time test for securities and the 40 million CZK cap introduced in 2025; the 100 000 CZK annual gross-sales exemption; US dividend withholding 15% with W-8BEN vs. 30% without; Czech tax on foreign dividends and foreign tax credit; accumulating vs. distributing ETFs; DIP (dlouhodobý investiční produkt) rules. Primary sources: zákon č. 586/1992 Sb. (§4, §8, §10), Finanční správa, IRS, US–CZ tax treaty.
7. **ČNB FX rates** (CZK/USD): official text-file/API URL, format, update time, terms of use.
