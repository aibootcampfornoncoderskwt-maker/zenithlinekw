# SEO Audit — Zenith Line Website

Generated from a real production build (`npm run build` → `dist/`) and a purpose-built extraction script (`scripts/seo-audit.mjs`), not estimated or inferred. Re-run `node scripts/seo-audit.mjs` after any content change to regenerate the table below with current numbers.

**Build snapshot:** 47 HTML pages — 20 service pages (6 Construction & Structures, 10 Telecom/IT/ELV, 4 General Trading & Manpower), 15 published brand pages, 10 core pages, the homepage, the services directory, the brands directory, the Telecom/IT/ELV hub, and the 404 error page. 46 of the 47 are indexable (404 is the sole, intentional exception). This is a full page-count increase from an earlier snapshot of this file (41 indexable / 42 total), reflecting the Telecom & IT mega-menu restructure that added the hub and five new service pages (`wired-network`, `wireless-microwave-networks`, `cctv-surveillance-systems`, `door-access-security`, `public-address-systems`) and retired `voip-voice` (content consolidated into `pbx-telephone-exchange`, preserved via a permanent redirect). All figures below reflect the current 47/46-page build.

## 1. Full page inventory

| URL | Type | Title len | Desc len | H1 | Canonical | OG image | Schema | Words | In-links | Out-links | Images | Missing alt | WhatsApp CTAs | Sitemap | Indexable |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| / | homepage | 68 | 144 | 1 | ok | ok | Organization, WebSite, FAQPage | 1864 | 47 | 46 | 82 | 0 | 17 | yes | yes |
| /404.html | error | 35 | 50 | 1 | ok | ok | Organization, WebSite | 293 | 0 | 31 | 3 | 0 | 3 | n/a (correctly excluded) | no (intentional) |
| /about/ | core | 28 | 176 | 1 | ok | ok | Organization, WebSite | 573 | 47 | 31 | 5 | 0 | 4 | yes | yes |
| /brands/ | brand directory | 72 | 149 | 1 | ok | ok | Organization, WebSite, CollectionPage | 522 | 47 | 46 | 33 | 0 | 4 | yes | yes |
| /brands/aruba/ | brand | 65 | 166 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1355 | 9 | 35 | 8 | 0 | 8 | yes | yes |
| /brands/avaya/ | brand | 61 | 153 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1285 | 5 | 32 | 4 | 0 | 8 | yes | yes |
| /brands/belden/ | brand | 47 | 143 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1290 | 8 | 34 | 6 | 0 | 8 | yes | yes |
| /brands/bosch/ | brand | 62 | 155 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1271 | 7 | 34 | 6 | 0 | 8 | yes | yes |
| /brands/cisco/ | brand | 62 | 167 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1441 | 10 | 34 | 7 | 0 | 8 | yes | yes |
| /brands/commscope/ | brand | 58 | 145 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1316 | 8 | 34 | 6 | 0 | 8 | yes | yes |
| /brands/corning/ | brand | 58 | 154 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1295 | 8 | 34 | 6 | 0 | 8 | yes | yes |
| /brands/dahua/ | brand | 66 | 161 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1344 | 7 | 34 | 6 | 0 | 8 | yes | yes |
| /brands/fortinet/ | brand | 63 | 158 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1350 | 6 | 34 | 7 | 0 | 8 | yes | yes |
| /brands/grandstream/ | brand | 58 | 149 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1304 | 5 | 32 | 4 | 0 | 8 | yes | yes |
| /brands/hikvision/ | brand | 60 | 165 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1340 | 8 | 33 | 5 | 0 | 8 | yes | yes |
| /brands/honeywell/ | brand | 65 | 156 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1268 | 7 | 34 | 6 | 0 | 8 | yes | yes |
| /brands/panduit/ | brand | 64 | 158 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1284 | 8 | 34 | 6 | 0 | 8 | yes | yes |
| /brands/tp-link/ | brand | 51 | 153 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1230 | 6 | 34 | 8 | 0 | 8 | yes | yes |
| /brands/ubiquiti/ | brand | 67 | 164 | 1 | ok | ok | +WebPage, BreadcrumbList, FAQPage | 1331 | 9 | 34 | 8 | 0 | 8 | yes | yes |
| /company-profile/ | core | 32 | 147 | 1 | ok | ok | Organization, WebSite | 343 | 47 | 31 | 5 | 0 | 4 | yes | yes |
| /contact/ | core | 26 | 149 | 1 | ok | ok | Organization, WebSite | 500 | 47 | 31 | 4 | 0 | 5 | yes | yes |
| /privacy/ | core | 35 | 35 | 1 | ok | ok | Organization, WebSite | 454 | 47 | 31 | 3 | 0 | 3 | yes | yes |
| /products-supply/ | core | 73 | 155 | 1 | ok | ok | Organization, WebSite | 651 | 47 | 31 | 4 | 0 | 4 | yes | yes |
| /projects/ | core | 82 | 177 | 1 | ok | ok | Organization, WebSite | 520 | 47 | 31 | 12 | 0 | 4 | yes | yes |
| /services/ | service directory | 82 | 139 | 1 | ok | ok | Organization, WebSite | 900 | 47 | 31 | 23 | 0 | 23 | yes | yes |
| /services/cctv-surveillance-systems/ | service | 55 | 145 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1578 | 47 | 34 | 10 | 0 | 11 | yes | yes |
| /services/civil-road-works/ | service | 59 | 143 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1762 | 47 | 31 | 8 | 0 | 11 | yes | yes |
| /services/construction-renovation/ | service | 61 | 144 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1818 | 47 | 31 | 8 | 0 | 11 | yes | yes |
| /services/door-access-security/ | service | 65 | 147 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1564 | 47 | 33 | 10 | 0 | 11 | yes | yes |
| /services/engineering-manpower/ | service | 55 | 146 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1626 | 47 | 31 | 8 | 0 | 11 | yes | yes |
| /services/hvac-services/ | service | 54 | 143 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1719 | 47 | 31 | 8 | 0 | 11 | yes | yes |
| /services/import-export/ | service | 58 | 139 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1683 | 47 | 31 | 8 | 0 | 11 | yes | yes |
| /services/installation-support/ | service | 65 | 156 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1516 | 47 | 31 | 12 | 0 | 11 | yes | yes |
| /services/k-span-structures/ | service | 54 | 140 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1704 | 47 | 31 | 8 | 0 | 11 | yes | yes |
| /services/network-security/ | service | 59 | 147 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1455 | 47 | 33 | 11 | 0 | 11 | yes | yes |
| /services/pbx-telephone-exchange/ | service | 66 | 138 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1595 | 47 | 33 | 10 | 0 | 11 | yes | yes |
| /services/public-address-systems/ | service | 69 | 147 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1528 | 47 | 32 | 9 | 0 | 11 | yes | yes |
| /services/router-wifi/ | service | 62 | 146 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1488 | 47 | 35 | 14 | 0 | 11 | yes | yes |
| /services/shade-structures/ | service | 56 | 137 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1704 | 47 | 31 | 8 | 0 | 11 | yes | yes |
| /services/specialized-civil-services/ | service | 56 | 142 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1751 | 47 | 31 | 8 | 0 | 11 | yes | yes |
| /services/structured-cabling/ | service | 60 | 146 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1572 | 47 | 35 | 12 | 0 | 11 | yes | yes |
| /services/supply-logistics/ | service | 53 | 135 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1612 | 47 | 31 | 8 | 0 | 11 | yes | yes |
| /services/telecom-it/ | service hub | 61 | 183 | 1 | ok | ok | +CollectionPage, BreadcrumbList, ItemList, FAQPage | 1756 | 47 | 31 | 17 | 0 | 20 | yes | yes |
| /services/tools-equipment-rental/ | service | 61 | 140 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1671 | 47 | 31 | 8 | 0 | 11 | yes | yes |
| /services/wired-network/ | service | 63 | 149 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1770 | 47 | 35 | 11 | 0 | 11 | yes | yes |
| /services/wireless-microwave-networks/ | service | 63 | 145 | 1 | ok | ok | +Service, BreadcrumbList, FAQPage | 1612 | 47 | 34 | 12 | 0 | 11 | yes | yes |
| /sitemap-visual/ | core | 36 | 167 | 1 | ok | ok | +WebPage, BreadcrumbList, ItemList | 627 | 47 | 46 | 3 | 0 | 3 | yes | yes |

"+Type" in the Schema column means "in addition to the universal Organization and WebSite schema present on every page." Every row's Organization/WebSite schema is exactly one instance each — verified programmatically, and, new in this pass, verified **byte-identical** across all 47 pages (a build-time check now fails if the Organization entity ever drifts between pages, catching the exact class of "conflicting business identity" bug this task's Phase 4 warns about).

## 2. Issue-by-issue findings

**Duplicate or weak titles:** None found. Every one of the 46 indexable pages has a unique `<title>`.

**Duplicated descriptions:** None found (verified against every page, not just same-type pages).

**Multiple or missing H1s:** None. Every page has exactly one `<h1>`.

**Incorrect canonicals:** None. Every canonical uses `https://zenithlinekw.com` with a trailing slash, matches the page's own URL, and matches its `og:url`.

**Orphan pages:** None. The persistent header (main nav + Services mega-menu) and footer place all 20 service pages, the Telecom/IT/ELV hub, `/about/`, `/contact/`, `/products-supply/`, `/brands/`, `/projects/`, `/company-profile/`, `/privacy/` and the homepage into every page's link graph (hence the uniform "47" inbound counts for those pages). Brand pages rely on the `/brands/` directory, the homepage marquee, brand↔brand related-brand links, and connected-service cross-links; every brand page has at least 5 inbound internal links.

**Broken links:** None (checked against the real set of generated routes).

**Redirect chains:** None. `vercel.json` defines five redirects (`/home`, `/gallery`, `/our-divisions`, and the VoIP route in both slash variants) — all single-hop, none chained, none looping, none pointing at a route that is itself a generated page. A new build-time check now asserts all four properties (no chain, no loop, no redirect-source-is-a-live-route, no redirect-source URL indexed in the sitemap) on every build. See `SEO-PRODUCTION-MIGRATION.md` for the full old-production-site migration analysis (domain-level HTTP/www handling is a Vercel dashboard action, documented there).

**Broken assets:** None. Every referenced `/images/` and `/downloads/` path resolves to a real, non-empty file.

**Missing image dimensions:** None across any page.

**Conflicting schema:** None. Exactly one Organization and one WebSite entity per page, byte-identical sitewide (see §1 note above).

**Accidental noindex:** None. Only `/404.html` carries `noindex` — enforced on every build (a new check fails if any other page becomes unexpectedly noindex).

**Crawl-blocked resources:** None. `robots.txt` is `User-agent: * / Allow: /` — every bot can crawl everything.

**Pages with insufficient useful content:** None below a reasonable floor. The thinnest indexable pages are `/privacy/` (454 words) and `/company-profile/` (343 words) — both appropriately scoped utility pages, not pages competing for commercial search intent.

**Keyword cannibalization:** None identified — see `SEO-KEYWORD-MAP.md`, which already covers all 10 Telecom/IT/ELV pages (including the five added in the mega-menu restructure) with an explicit "ELV keyword ownership" split preventing the hub and its sub-pages from competing.

**www / apex host references:** None. A new build-time check confirms `www.zenithlinekw.com` never appears anywhere in the built output — the site remains apex-only by design (see `SEO-PRODUCTION-MIGRATION.md` §3 for the required Vercel dashboard action to make `www` redirect correctly once attached as a domain).

## 3. Image inventory

- 65 of 66 image files in `public/images/` are `.webp` or `.svg`; the one exception, `zenith-logo.png` (44KB), is deliberately a PNG for favicon/OG-image compatibility.
- Zero `<img>` tags across all 47 pages are missing `alt` or intrinsic `width`/`height` (verified, not sampled).
- Decorative icons use inline SVG/CSS with `aria-hidden="true"`, not raster images.
- Brand logos use empty `alt=""` with the brand name in an adjacent visible `<strong>` element.
- No filenames were changed in this pass.

## 4. Domain, canonical and URL consistency

- `astro.config.mjs` (`site: 'https://zenithlinekw.com'`, `trailingSlash: 'always'`) and `src/data/site.ts` (`domain: 'https://zenithlinekw.com'`) agree exactly.
- No `localhost`, `127.0.0.1`, `*.vercel.app`, or `www.zenithlinekw.com` string appears anywhere in the built output — verified programmatically.
- No mixed `http://` internal links exist.
- **This is a domain migration** — `https://zenithlinekw.com` currently serves an older, three-page site. See `SEO-PRODUCTION-MIGRATION.md` for the full old-URL inventory, the migration table, and the exact Vercel dashboard action still required for HTTP→HTTPS and www→apex handling (a platform-level setting, not repository code).

## 5. Robots, crawling and sitemap

- `robots.txt` (`Allow: /` + one absolute sitemap URL) permits every crawler to fetch everything.
- Sitemap (`dist/sitemap-index.xml` → `dist/sitemap-0.xml`): contains exactly the 46 indexable pages — all 20 service pages, the hub, all 15 published brand pages, 10 core pages — and correctly excludes `/404.html` and every directory-only brand slug. No `lastmod`/`priority`/`changefreq` is fabricated (the sitemap integration does not emit them by default in this configuration, and none was added).
- The visual sitemap at `/sitemap-visual/` links to exactly the same 46 URLs as the XML sitemap — verified in both directions on every build, plus a category-count-vs-actual-list-length check and a total-stat-vs-unique-link-count check.
- `<link rel="sitemap" href="/sitemap-index.xml">` is present in every page's `<head>` and verified to reference a file that exists in the build output.

## 6. Core Web Vitals and performance

Unlike an earlier snapshot of this file, this pass **did** have real headless-browser access (Playwright/Chromium) and used it to measure, not just infer from static markup.

**Real measurements taken** (production build served via `astro preview`, localhost — real production network latency will differ, but rendering-path timing and layout-shift behavior are representative):

- **LCP: 216ms** — but this number requires an important caveat: it reflects the fast paint of the **splash screen's own logo image** (which has `fetchpriority="high"`), not necessarily the moment a visitor perceives the real page content (the hero slider) behind it. The splash overlay remains visually opaque for roughly 1.05–1.45 seconds after that before revealing the real hero content. The Core Web Vitals *metric* may therefore read favorably while the *perceived* content-ready time is still gated by the splash duration — a nuance worth knowing rather than assuming either "the metric is bad" or "the metric proves there's no problem." This was flagged as an unmeasured risk in an earlier pass; it is now a measured, characterized one.
- **CLS: 0.0000** (session-measured, real DOM). A genuine layout-shift bug **was found and fixed** during this measurement: `scrollbar-gutter: stable` combined with `overflow: hidden` on `<html>` during the splash window was shrinking the effective viewport width for `position: fixed` descendants by the scrollbar's width (~15px), which both (a) left a thin uncovered strip at the edge of the screen during the splash (the overlay didn't actually reach the true right edge) and (b) would have caused a layout shift the instant the class was removed and the reservation vanished. Fix: removed the `scrollbar-gutter: stable` declaration from `SplashScreen.astro`'s `html.splash-active` rule (kept `overflow: hidden`, which is correct and necessary to lock background scroll during the splash). Verified after the fix: the splash mark is now centered to within 0.01px of true viewport center at every tested width (320–1440px), where it previously measured a consistent 7.5px off-center — the direct visible symptom of the same bug.
- **FCP: ~216ms, DOMContentLoaded: ~220ms, load: ~230ms** on localhost — consistent with the codebase having zero bundled JavaScript framework output and one shared, minified CSS file.
- No horizontal overflow at any of 320/360/375/390/412/430/768/1024/1280/1366/1440/844×390(landscape) — checked with a real browser, not inferred from CSS.

**Verified from build artifacts (as before):**
- Zero bundled `.js` framework output in `dist/_astro/`; all interactivity is small inline `<script>` blocks.
- 66 image files totaling ~2.0MB, none over 400KB.
- Hero slider LCP handling: first slide eager + `fetchpriority="high"`, others lazy, explicit dimensions on all, non-active slides `inert`.
- No web fonts loaded — system font fallback only (a genuine performance win, flagged previously as a possible brand-fidelity gap worth a separate design decision, unchanged this pass).
- Reduced-motion is respected throughout, including the splash screen.

**Floating WhatsApp button — corrected finding.** An earlier snapshot of this file stated no floating WhatsApp control exists in the codebase. That is no longer accurate (and, on inspection, may never have been accurate for the current design): `.floating-whatsapp` in `global.css` is visible by default (`display: inline-flex`) and is only suppressed via `display: none` inside the `@media (max-width: 620px)` block — meaning it is **intentionally shown on tablet/desktop (≥621px) and intentionally hidden on narrow mobile** (≤620px), not universally absent. Verified with a real browser at all 12 required breakpoints: hidden at 320–430px, visible at 768px and wider. This is a defensible, common pattern (avoid an obtrusive floating control on the smallest screens where space is tightest) and was not modified — flagging only because the earlier documentation's blanket claim was wrong and needed correcting, not because the behavior itself is a defect. The control has a proper `aria-label`, opens in a new tab with `rel="noopener noreferrer"`, and is excluded from the WhatsApp-number/label validator checks like every other WhatsApp CTA.

## 7. GEO and AEO

Audited every service and brand page's content structure (all 35 — 20 service pages, the hub, and 15 brand pages — already carry every required element from prior work; nothing needed rewriting):
- Direct definition/answer near the top: present on all 35.
- Kuwait context: present on all 35 and every core page's title/description.
- Visible "at a glance" facts, scope/category, suitability, selection factors, FAQs, internal links, consistent entity info, visible enquiry method: present and validated for parity by `scripts/validate-site.mjs`.
- No hidden AI-targeted text, invisible keyword blocks, or fabricated statistics found anywhere.
- No "last reviewed" date exists anywhere — correctly omitted, since no content-freshness process exists in this codebase.

`llms.txt` reviewed: accurate, concise, links only to canonical `https://zenithlinekw.com/...` URLs, includes all 10 current Telecom/IT/ELV service pages (not stale from before the restructure), and does not claim to guarantee AI visibility.

## 8. What this audit could not verify

Real-user Core Web Vitals field data (as opposed to this pass's synthetic, localhost-served lab measurement), actual Google/Bing indexing status, and real production HTTP behavior (HTTPS upgrade, www redirect) can only be confirmed after deployment. See `SEARCH-CONSOLE-SITEMAP-SUBMISSION.md` for the ordered post-deployment verification steps and `SEO-PRODUCTION-MIGRATION.md` §3 for the one action that must happen in the Vercel dashboard before the domain-level redirect behavior this audit assumes is actually true in production.
