# Brand SEO Launch Checklist — Phase 1

Non-code tasks for Zenith Line to complete before or shortly after the 15 Phase 1 brand pages go live. None of these are things the codebase can do on its own.

## Before launch

- [ ] **Verify Google Business Profile** is claimed, active and uses the exact business name, address and phone number stored in `src/data/site.ts` (`Zenith Line Co.`, `#1, 4th Floor, M Square Complex, Abdulmunim Street, Mirqab, Kuwait`, `+965 66488191`).
- [ ] **Confirm accurate Google Business Profile categories** — the primary and secondary categories should reflect the actual business (construction, telecom/IT contractor, technical supply) rather than a single brand name.
- [ ] **Confirm brand relationships** for the 15 published brands (and any brand considered for a future page) — specifically whether Zenith Line holds any authorized, certified or distributor status with Cisco, Aruba, Fortinet, Hikvision, Dahua, CommScope, Belden, Corning, Panduit, TP-Link, Ubiquiti, Grandstream, Avaya, Bosch or Honeywell. The current pages make no such claim; if a real relationship exists and can be evidenced, the wording can be strengthened.
- [ ] **Supply missing logo assets** for Dahua, CommScope and Grandstream (see `BRAND-CONTENT-REVIEW.md`).
- [ ] **Resolve ambiguous brand names** listed in `BRAND-CONTENT-REVIEW.md` (Birla Ericsson, LS Cable & System, HES / HSC, B3, Kuwes, MEFC, Tova, Ramcro, Optronics, UNV / Uniview, SYSTIMAX) before any of them get a dedicated page.

## Around launch

- [ ] **Upload genuine company and project photographs** to replace representative/stock imagery where available — this applies site-wide (see existing note in `CONTENT-REVIEW.md`) and is not specific to brand pages, but improves brand-page credibility once available.
- [ ] **Collect authentic customer reviews** through Google Business Profile or another verifiable channel. Do not add review or rating content to the website's brand pages — the pages deliberately exclude `Review`/`AggregateRating` schema, and no review UI has been built for Phase 1.
- [ ] **Request genuine manufacturer-directory or channel-partner links** only where an actual, evidenced relationship exists with a given brand. Do not request these speculatively.
- [ ] **Build legitimate Kuwait business citations** (Chamber of Commerce directories, local business listings, industry directories) using the exact business name, address and phone from `site.ts` for consistency (NAP consistency).

## After launch

- [ ] **Submit the updated sitemap** (`https://zenithlinekw.com/sitemap-index.xml`) in Google Search Console and Bing Webmaster Tools if not already auto-discovered.
- [ ] **Monitor Search Console queries** for the 15 new brand pages over the following weeks — watch for: which "[Brand] + Kuwait" query variants actually drive impressions, whether any page is being indexed under an unintended query, and whether click-through rates suggest the title/description pairing needs adjustment.
- [ ] **Monitor for manufacturer trademark objections.** No page claims authorization, but manufacturers occasionally object to any commercial use of their name/logo. Keep `BRAND-CONTENT-REVIEW.md` current if any brand requests changes or removal.
- [ ] **Review WhatsApp enquiry volume by brand** (the prefilled message includes `Source page:` with the exact URL, so incoming enquiries can be attributed to a specific brand page) and prioritize Phase 2 brand pages based on genuine demand.
- [ ] **Re-run `npm run validate`** after any future content edit to brand pages — it enforces the no-authorization-claim check, FAQ/schema parity, canonical uniqueness and the verified WhatsApp number across all brand and service pages.

## Explicitly out of scope for this phase

- No separate Google Business Profile should be created per brand — a single business profile for Zenith Line Co. is correct.
- The business name should never be modified to contain a brand keyword (e.g. "Zenith Line Cisco Kuwait") — this was not done and should not be done.
- No pricing, stock, delivery-time, warranty or certification claims were added anywhere in the brand pages; none should be added without real, verifiable source data.
