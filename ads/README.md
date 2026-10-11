# Reklamy: dve verzie (Meta: Facebook + Instagram)

Obe verzie používajú rovnaký uhol **„stejný index, levnější dvojče"** (rozhodnutie D8/D8b v `research/decisions.md`) v dvoch rôznych exekúciách. Prvá obrazovka stránky nadväzuje na obe („Stejný index. Jiná cena."), takže sa zachová message match (+39–48 % v dvoch zdokumentovaných testoch, `research/99-verification-log.md` C10).

Prečo len Meta: Google Ads vyžaduje od septembra 2026 v ČR overenie finančného inzerenta, ktoré nelicencovaný vydavateľ nedostane. TikTok povoľuje investičné služby len licencovaným subjektom (`research/04-ads-compliance.md`, overené D1, D2). Pri Mete zostáva otvorená otázka, či overenie vyžaduje aj pre vzdelávací porovnávač (D6).

| | Verzia A: srovnávací karta | Verzia B: otázka |
|---|---|---|
| Kreatíva feed (1080×1350) | `png/ad-a-feed-1080x1350.png` | `png/ad-b-feed-1080x1350.png` |
| Kreatíva stories/reels (1080×1920) | `png/ad-a-story-1080x1920.png` | `png/ad-b-story-1080x1920.png` |
| Primárny text | VOO, IVV, SPY i evropský CSPX kopírují stejný index S&P 500. Z Česka je ale nakoupíte za úplně jiné peníze. Spočítejte si, kolik vás vaše cesta stojí v korunách. | Kupujete S&P 500? Fond a broker rozhodují o tom, kolik vám z výnosu zůstane. Porovnejte 4 fondy na stejný index v korunách. |
| Nadpis | Stejný index. Jiná cena. | Kolik vás stojí vaše S&P 500? |
| Popis | Srovnání S&P 500 ETF v korunách | 4 fondy, 2 odpovědi, výsledek hned |
| Tlačidlo (Meta CTA) | Další informace | Další informace |
| Cieľová URL | `https://<doména>/?utm_source=meta&utm_medium=paid_social&utm_campaign=sp500_srovnani&utm_content=ad_a` | `…&utm_content=ad_b` |

Poznámky ku compliance (ESMA/ČNB, `research/04-ads-compliance.md`):
- Žiadne „bezpečné", „garantované" ani „nejlepší"; čísla sú vždy s predpokladom (3 000 Kč mesačne, 20 rokov) a poznámkou „ilustrativní výpočet".
- Na kreatíve je upozornenie na riziko a „nejde o investiční doporučení". Disclaimer sám osebe nechráni (ESMA 2026), preto obsah zostáva neosobný a informačný.
- Cielenie: ČR, 18–65+, bez cielenia na pohlavie (ako konkurencia v Meta Ad Library). Segment z D1 (DIY investor, ktorý pozná S&P 500) sa rieši textom, nie cielením.

Meranie: `utm_content` (ad_a / ad_b) sa ukladá ku každej udalosti funnelu aj k leadu. `/api/stats?format=html` ukazuje funnel podľa reklamy aj podľa varianty stránky.

Nové vyrenderovanie: `node scripts/render-ads.js` (headless Edge/Chrome).
