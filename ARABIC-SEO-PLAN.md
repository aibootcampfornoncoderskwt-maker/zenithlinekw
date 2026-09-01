# Arabic SEO Plan (Future Work — Not Implemented)

This document is a workflow plan only. **No `/ar/` routes, no Arabic content, and no `hreflang` tags exist in the codebase as of this pass** — `CONTENT-REVIEW.md` already flags Arabic as a future addition pending client-supplied or approved content, and this plan does not change that. Do not create empty `/ar/` routes or machine-translated pages from this plan without following every step below in order.

## Why this needs a real workflow, not a quick add

Kuwait is a genuinely bilingual commercial market — a large share of high-intent local searches happen in Arabic. But a poorly executed Arabic version (machine-translated, technically broken `hreflang`, or English content masquerading as Arabic) actively damages trust and can confuse search engines about which version to rank, which is worse than not having one.

## Workflow, in order

1. **Client decision to proceed** — Arabic is a real content and maintenance commitment (every future English update needs a matching Arabic update), not a one-time task. Confirm the client wants to commit to keeping both in parity before starting.
2. **Arabic keyword research**, done separately from a direct translation of the English keyword map — Arabic search phrasing for the same intent is often structured differently, not a word-for-word translation of `SEO-KEYWORD-MAP.md`.
3. **Professional Kuwait/Gulf-dialect-aware Arabic translation** of the approved page set (start with the highest-value pages: homepage, top service pages, top brand pages — not necessarily all 41 pages on day one). Gulf/Kuwaiti Arabic register matters for credibility; generic Modern Standard Arabic machine translation is not sufficient for a commercial site.
4. **Technical review** of the translated content by someone with construction/telecom/IT domain knowledge in Arabic — a fluent translator without domain knowledge can produce grammatically correct but technically wrong copy (e.g. mistranslating a cabling or networking term).
5. **URL structure**: `/ar/` prefix (e.g. `https://zenithlinekw.com/ar/services/router-wifi/`), mirroring the English path structure exactly so the two language versions of the same page are structurally predictable and easy to cross-link.
6. **English/Arabic content parity**: the Arabic page should cover the same substance as its English counterpart (same FAQs, same service scope, same claims discipline — the strict business-claim rules apply identically in Arabic; a translated page must not accidentally introduce an authorization claim that doesn't exist in the English version).
7. **Self-canonical URLs**: each language version canonicalizes to itself (the Arabic page's `<link rel="canonical">` points to its own `/ar/...` URL, not back to the English version) — this is the correct pattern for true translated content (as opposed to `hreflang` alternates of duplicate content).
8. **Reciprocal `hreflang`**: every English page that has an Arabic counterpart declares `hreflang="ar"` pointing to it, and every Arabic page declares `hreflang="en"` pointing back — implemented as a matched pair, checked programmatically (a script similar to `scripts/validate-site.mjs` should assert every hreflang link resolves and is reciprocal before this ships).
9. **`x-default`**: declare an `x-default` hreflang pointing to whichever version should serve users whose language/region doesn't match either explicit tag — almost certainly the English version, given the domain's current audience, but confirm with the client rather than assuming.
10. **RTL design QA**: this is the step most likely to be underestimated. The approved corporate design system (`src/styles/global.css`) was built LTR-first; a real Arabic launch needs a dedicated RTL pass — mirrored layouts, icon/arrow direction (several existing CTAs use directional arrows like `→` that must flip), form field alignment, and the mega-menu's directional logic all need dedicated QA, not just `dir="rtl"` on `<html>` and hoping the CSS holds up. Budget real design/QA time for this; it is not a translation-only task.
11. **Arabic WhatsApp messaging**: the prefilled WhatsApp templates (currently English, e.g. "Hello Zenith Line, I would like to enquire about...") need Arabic equivalents on Arabic pages, using the same verified number (`96566488191`) and the same structured-field format, translated with the same domain-review rigor as the page content itself.
12. **Sitemap inclusion**: Arabic pages get added to the sitemap alongside English ones once live — `@astrojs/sitemap` will pick up any new static routes automatically, consistent with how the 15 brand pages were added in the prior phase; no manual sitemap maintenance is expected either way.

## What not to do

- Do not auto-translate via a client-side widget (e.g. embedding Google Translate) and call it "Arabic SEO" — this does not create indexable, crawlable Arabic content and provides none of the above benefits.
- Do not publish partial Arabic (e.g. translated headings with English body text) — that reads as broken to both users and crawlers.
- Do not skip step 10 (RTL QA) to save time — a mirrored-but-broken layout undermines the same corporate credibility this entire SEO program is trying to build.

## Trigger to start

This plan should be picked up when the client confirms (a) budget/commitment for professional translation and ongoing parity maintenance, and (b) which page set to start with. Until then, this file is the complete record of what "doing Arabic properly" requires, so no shortcut version gets built by mistake.
