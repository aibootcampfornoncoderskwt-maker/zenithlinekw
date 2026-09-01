# SEO Launch Runbook

Exact ordered process for taking this site live. Fill in the Date and Responsible columns as each step completes — treat an unfilled row as "not done yet," not as "presumably fine."

| # | Step | Detail | Date | Responsible |
|---|---|---|---|---|
| 1 | Confirm production domain | `https://zenithlinekw.com` — already the sole domain referenced in `astro.config.mjs`, `site.ts`, robots.txt, and the sitemap (see `SEO-AUDIT.md` §5). Confirm this is still the intended production domain before pointing DNS/Vercel at it. | | |
| 2 | Configure www/non-www redirect | In Vercel's project → Domains settings (not in this repo's code): set `www.zenithlinekw.com` to redirect to the apex `zenithlinekw.com`, matching every canonical URL already in the built site. Document the change (screenshot or note) once done. | | |
| 3 | Deploy | Standard Vercel production deploy of this repository. Not performed as part of this task. | | |
| 4 | Verify HTTPS | Confirm the production certificate is valid and HTTP requests redirect to HTTPS (Vercel handles this automatically for verified domains — confirm, don't assume). | | |
| 5 | Test robots.txt | Fetch `https://zenithlinekw.com/robots.txt` directly and confirm it matches `public/robots.txt` (Allow: /, correct sitemap URL) — a CDN/edge misconfiguration could theoretically serve something else. | | |
| 6 | Test sitemap | Fetch `https://zenithlinekw.com/sitemap-index.xml` and `sitemap-0.xml`, confirm all 41 indexable URLs resolve with `200` status (not `404`/redirect). | | |
| 7 | Verify Search Console Domain property | Set up (or confirm existing) Google Search Console **Domain property** for `zenithlinekw.com` (covers both apex and www, and both HTTP/HTTPS) via DNS TXT verification — preferred over a URL-prefix property given the www-redirect setup in step 2. If DNS verification isn't available, the `PUBLIC_GOOGLE_SITE_VERIFICATION` env var (see `.env.example`) supports the HTML-tag method as a fallback. | | |
| 8 | Submit sitemap | In Search Console, submit `https://zenithlinekw.com/sitemap-index.xml`. | | |
| 9 | Inspect homepage | Use Search Console's URL Inspection tool on `/` — confirm "URL is on Google" or request indexing if not yet crawled. | | |
| 10 | Inspect all 16 service URLs | Same tool, each `/services/{slug}/` — see the URL list in `SEO-AUDIT.md` §1. | | |
| 11 | Inspect 15 published brand URLs | Same tool, each `/brands/{slug}/` — see `SEO-AUDIT.md` §1 for the exact 15 slugs. | | |
| 12 | Request indexing for priority URLs | At minimum: homepage, `/services/`, `/brands/`, `/services/router-wifi/`, `/services/structured-cabling/`, `/services/network-security/`, `/brands/cisco/`, `/brands/fortinet/` — the highest-commercial-intent pages per `SEO-KEYWORD-MAP.md`. | | |
| 13 | Configure Bing Webmaster Tools | Add the site, verify (via the `PUBLIC_BING_SITE_VERIFICATION` env var's HTML tag, or DNS), and submit the same sitemap URL. | | |
| 14 | Enable approved analytics | Only after the consent/privacy review flagged in `SEO-MEASUREMENT-PLAN.md` — set `PUBLIC_GA_MEASUREMENT_ID` in the production environment once approved. Confirm `/privacy/`'s existing analytics-disclosure wording still matches what's actually enabled. | | |
| 15 | Verify conversion events | With GA4 live, click through: a WhatsApp CTA, submit a test enquiry form (service and brand context), click a `tel:` link, download the company profile PDF. Confirm all four events (`whatsapp_click`, `whatsapp_form_submit`, `phone_click`, `company_profile_download`) appear in GA4's real-time report. | | |
| 16 | Complete Google Business Profile | Full checklist in `GOOGLE-BUSINESS-PROFILE-CHECKLIST.md`. | | |
| 17 | Begin review collection | Per `GOOGLE-BUSINESS-PROFILE-CHECKLIST.md` — genuine customers only, no incentivized/gated reviews. | | |
| 18 | Start authority outreach | Begin working through `KUWAIT-AUTHORITY-BUILDING-PLAN.md`, prioritizing confirmed-registration directory listings first. | | |
| 19 | Publish evidence-led content | Begin `SEO-CONTENT-ROADMAP-90-DAYS.md` — do not skip its evidence/expert-review gates to hit a launch-week content quota. | | |
| 20 | Review performance monthly | Search Console (queries, coverage, Core Web Vitals report), GA4 (conversion events), and Google Business Profile insights — on a recurring monthly cadence, not a one-time check. | | |

## Before step 1: one open item from this audit

Per `SEO-AUDIT.md` §7, measure real Lighthouse/PageSpeed Insights LCP on the deployed homepage as part of (or immediately after) step 3, specifically because of the full-screen splash screen found during this audit. If LCP measures poorly, address it before investing further in the content/outreach steps (12+) — no amount of content work compensates for a page that's slow to render its main content, and Google's ranking systems do weight Core Web Vitals.

## Reminder

This runbook does not itself deploy, push, or change any Vercel configuration — every step above is a manual action for whoever holds deployment access, to be executed and dated by that person.
