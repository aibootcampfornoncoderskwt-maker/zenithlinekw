# SEO Launch Runbook

Exact ordered process for taking this site live. Fill in the Date and Responsible columns as each step completes — treat an unfilled row as "not done yet," not as "presumably fine."

| # | Step | Detail | Date | Responsible |
|---|---|---|---|---|
| 1 | Confirm production domain | `https://zenithlinekw.com` — already the sole domain referenced in `astro.config.mjs`, `site.ts`, robots.txt, and the sitemap (see `SEO-AUDIT.md` §5). This is a migration onto a domain already serving an older site — see `SEO-PRODUCTION-MIGRATION.md` for the full old-URL inventory and mapping before proceeding. | | |
| 2 | Configure www/non-www and HTTP/HTTPS redirects | Vercel dashboard action, not repository code — exact steps in `SEO-PRODUCTION-MIGRATION.md` §3. | | |
| 3 | Deploy | Standard Vercel production deploy of this repository. Not performed as part of this task. | | |
| 4 | Verify HTTPS and old-URL redirects | Confirm the production certificate is valid, HTTP redirects to HTTPS, and the three old-site URLs (`/`, `/about`, `/contact`) all resolve to their new-site equivalents per `SEO-PRODUCTION-MIGRATION.md` §2. | | |
| 5 | Test robots.txt | Fetch `https://zenithlinekw.com/robots.txt` directly and confirm it matches `public/robots.txt` (Allow: /, correct sitemap URL). | | |
| 6 | Test sitemap | Fetch `https://zenithlinekw.com/sitemap-index.xml` and `sitemap-0.xml`, confirm all 46 indexable URLs resolve with `200` status (not `404`/redirect) — see `/sitemap-visual/` for the current live count. | | |
| 7–13 | Search Console (Domain property, DNS verification), sitemap submission, URL Inspection on representative pages, indexing requests, Bing Webmaster Tools | Full step-by-step in `SEARCH-CONSOLE-SITEMAP-SUBMISSION.md` — do not duplicate that checklist here. | | |
| 14 | Enable approved analytics | Only after the consent/privacy review in `ANALYTICS-CONVERSION-SETUP.md` — set `PUBLIC_GA_MEASUREMENT_ID` in the production environment once approved. Confirm `/privacy/`'s existing analytics-disclosure wording still matches what's actually enabled. | | |
| 15 | Verify conversion events | With GA4 live, click through: a WhatsApp CTA, submit a test enquiry form (service and brand context), click a `tel:` link, a `mailto:` link, an Instagram link, and download the company profile PDF. Confirm all seven events (`whatsapp_click`, `phone_click`, `email_click`, `enquiry_start`, `enquiry_submit`, `profile_download`, `instagram_click`) appear in GA4's real-time report — full detail in `ANALYTICS-CONVERSION-SETUP.md`. | | |
| 16 | Complete Google Business Profile | Full checklist in `GOOGLE-BUSINESS-PROFILE-CHECKLIST.md`. | | |
| 17 | Begin review collection | Per `GOOGLE-BUSINESS-PROFILE-CHECKLIST.md` — genuine customers only, no incentivized/gated reviews. | | |
| 18 | Start authority outreach | Begin working through `KUWAIT-AUTHORITY-BUILDING-PLAN.md`, prioritizing confirmed-registration directory listings first. | | |
| 19 | Publish evidence-led content | Begin `SEO-CONTENT-ROADMAP-90-DAYS.md` — do not skip its evidence/expert-review gates to hit a launch-week content quota. | | |
| 20 | Review performance monthly | Search Console (queries, coverage, Core Web Vitals report), GA4 (conversion events), and Google Business Profile insights — on a recurring monthly cadence, not a one-time check. | | |

## Before step 1: one open item from this audit

Per `SEO-AUDIT.md` §7, measure real Lighthouse/PageSpeed Insights LCP on the deployed homepage as part of (or immediately after) step 3, specifically because of the full-screen splash screen found during this audit. If LCP measures poorly, address it before investing further in the content/outreach steps (12+) — no amount of content work compensates for a page that's slow to render its main content, and Google's ranking systems do weight Core Web Vitals.

## Reminder

This runbook does not itself deploy, push, or change any Vercel configuration — every step above is a manual action for whoever holds deployment access, to be executed and dated by that person.
