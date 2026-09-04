# Google Search Console & Bing Webmaster Tools — Deployment Handover

Exact post-deployment steps, in order. This is a migration onto a domain Google already has some knowledge of (see `SEO-PRODUCTION-MIGRATION.md`) — a Domain property (DNS verification) is used rather than a URL-prefix property so both `https://zenithlinekw.com` and, if ever attached, `www.zenithlinekw.com`/HTTP variants are covered by one verified property.

## Google Search Console

1. **Add and verify the Domain property.** In Search Console, choose **Add property → Domain**, enter `zenithlinekw.com` (no protocol, no `www`), and verify via the **DNS TXT record** method Google provides — add that TXT record at the domain's DNS provider. This is preferred over URL-prefix verification because a Domain property automatically covers `http://`, `https://`, and `www` variants once they exist, without a separate property for each. If DNS access isn't available to whoever does this step, the `PUBLIC_GOOGLE_SITE_VERIFICATION` environment variable (see `.env.example`) renders the HTML meta-tag verification method as a fallback — but DNS is the better long-term choice for a Domain property.
2. **Confirm both apex and www resolve to the intended deployment**, per the Vercel dashboard action documented in `SEO-PRODUCTION-MIGRATION.md` §3. Do this before submitting the sitemap — Search Console will otherwise report crawl or redirect issues that are really a domain-configuration gap, not a sitemap problem.
3. **Open these four URLs directly in a browser and confirm each returns 200 / renders correctly:**
   - `https://zenithlinekw.com/robots.txt`
   - `https://zenithlinekw.com/sitemap-index.xml`
   - `https://zenithlinekw.com/sitemap-0.xml`
   - `https://zenithlinekw.com/sitemap-visual/`
4. **Submit the sitemap.** Indexing → Sitemaps → Add a new sitemap → enter `sitemap-index.xml` (resolves against the verified property root to `https://zenithlinekw.com/sitemap-index.xml`). Confirm the status changes to **Success** and the reported URL count matches the current build (46 indexable pages at the time of this audit — the "Website Sitemap" page at `/sitemap-visual/` always shows the current, live-computed figure, so check there rather than trusting a stale number in this document).
5. **Run URL Inspection (with a live test) on each of these representative URLs:**
   - Homepage — `/`
   - Services overview — `/services/`
   - Telecom, IT & ELV hub — `/services/telecom-it/`
   - One construction service — e.g. `/services/construction-renovation/`
   - One Telecom/IT/ELV service — e.g. `/services/structured-cabling/`
   - One general trading/manpower service — e.g. `/services/supply-logistics/`
   - One published brand page — e.g. `/brands/cisco/`
   - Contact page — `/contact/`
6. For each, use the **Test Live URL** feature (not just the cached inspection) to confirm Google's renderer sees the real page content, correct canonical, and no unexpected `noindex`.
7. **Request indexing only for these representative/priority URLs** — not all 46 individually. Do not repeatedly request indexing for the same URL; it does not speed up crawling and can read as a spam signal.
8. **Check these reports** over the following weeks: Indexing → Pages (indexed count, "Discovered/Crawled/Not indexed" states, any errors), Sitemaps (status), Core Web Vitals, Security & Manual Actions (should be clean), and HTTPS (should show the domain as fully HTTPS with no mixed-content issues once the apex/www dashboard action is complete).
9. **Record the submission date, sitemap status, discovered-page count, and any errors** in this file or an internal tracker — an "it was probably fine" assumption is not evidence.
10. **Review points:** 7 days (initial crawl/index status), 30 days (indexation trend, any Core Web Vitals field data), 60 days (Performance report — queries, clicks, impressions starting to populate), 90 days (full-quarter Performance review, re-check indexed-page count against the 46-page target).
11. **Re-submit the sitemap only if** the sitemap URL itself changes (e.g. a future domain change) or Search Console reports a sitemap-level error — routine content edits to existing pages do not require re-submission, since Google re-crawls the sitemap on its own schedule.

## Bing Webmaster Tools (separate, optional)

1. Add the site at `bing.com/webmasters`, entering `https://zenithlinekw.com`.
2. Verify via the `PUBLIC_BING_SITE_VERIFICATION` environment variable's HTML meta-tag method (see `.env.example`), or via DNS if preferred.
3. Submit the same sitemap URL: `https://zenithlinekw.com/sitemap-index.xml`.
4. Bing Webmaster Tools also offers a one-time **"Import from Google Search Console"** option once GSC is verified — faster than repeating URL Inspection manually, if both are being set up around the same time.

## Important limits

Submitting a sitemap and requesting indexing help discovery and crawl prioritization. Neither **guarantees** that any page will be crawled, indexed, or ranked — that remains entirely subject to each search engine's own crawling, quality, and relevance systems. Do not represent sitemap submission or indexing requests to the client as a guarantee of indexing, ranking, or search visibility outcomes. Do not claim indexing or Search Console acceptance has already happened until it is actually confirmed post-deployment in the Search Console UI itself.

## Reference URLs (verify after deployment — do not claim 200 status before deployment exists)

- Visual sitemap: `https://zenithlinekw.com/sitemap-visual/`
- XML sitemap index: `https://zenithlinekw.com/sitemap-index.xml`
- XML page sitemap: `https://zenithlinekw.com/sitemap-0.xml`
- Robots file: `https://zenithlinekw.com/robots.txt`

All four must return HTTP 200 on the production domain, over HTTPS, on the apex host, before submitting to Search Console or Bing Webmaster Tools.
