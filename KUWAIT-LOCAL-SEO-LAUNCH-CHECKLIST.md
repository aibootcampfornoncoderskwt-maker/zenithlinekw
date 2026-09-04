# Kuwait Local SEO Launch Checklist

Consolidates and supersedes `GOOGLE-BUSINESS-PROFILE-CHECKLIST.md` as the single Local SEO/GEO launch checklist for this project. Split clearly into work already done in code (this pass) and work that only the client, or someone with Google/Bing account access, can complete off-site.

## Part A — Verified in code (this pass, evidence-based)

| Signal | Where | Status |
|---|---|---|
| NAP consistency: name | `Zenith Line Co.` — `src/data/site.ts` `site.name`/`legalName`, Organization schema, footer, header | Consistent across all 47 pages (enforced by a new build-time check comparing the Organization entity byte-for-byte on every page) |
| NAP consistency: address | `#1, 4th Floor, M Square Complex, Abdulmunim Street, Mirqab, Kuwait` — `site.ts`, Organization schema `PostalAddress`, footer, contact page | Consistent everywhere it appears |
| NAP consistency: phone | Call `+965 66488191` and WhatsApp `+965 65071368` kept as two distinct, single-purpose numbers — never mixed (`tel:` links always use the call number, `wa.me` links always use the WhatsApp number) | Enforced on every build; obsolete numbers `+965 99088101` / `+965 97116076` confirmed absent from every page |
| Call vs. WhatsApp clarity | Every element showing both numbers on the same page carries a visible/accessible "Call" and "WhatsApp" label | Enforced on every build |
| Kuwait service context per service page | Every one of the 20 service pages and the Telecom/IT/ELV hub states Kuwait relevance, typical property/project types, and a Kuwait-area field in its enquiry form | Verified present on all 20 + hub |
| Kuwait area field in enquiry forms | `EnquiryForm.astro`'s `area` input (`autocomplete="address-level2"`, placeholder "e.g. Shuwaikh") | Present on every form instance sitewide |
| `areaServed: Kuwait` in structured data | Organization schema, every `Service` schema, the Telecom hub's `CollectionPage` schema | Verified `Kuwait` (country-level, not a specific district) on every applicable entity |
| Official Instagram consistency | `https://www.instagram.com/znthline/` in the Organization schema `sameAs`, header mobile drawer, footer, contact page — no alternate handle anywhere | Enforced on every build |
| No thin per-district location pages | No `/areas/`, `/kuwait-city/`, `/hawally/`-style pages exist or were added | Confirmed — deliberately not created |
| No obsolete geo meta tags | No `geo.position`, `ICBM`, or similar deprecated meta tags anywhere | Confirmed absent |
| No district-name stuffing | Service and core page copy was reviewed for natural Kuwait relevance, not mechanical district-name insertion | No stuffing found |

## Part B — Client-controlled or off-site (cannot be done from this codebase)

Nothing in this section is automatable from a static site's build process — attempting to script Google Business Profile changes risks the listing's standing. Use the exact values already stored in `src/data/site.ts` for every field below, so the website and the Business Profile never disagree.

| Task | Exact value / guidance | Status | Date | Responsible |
|---|---|---|---|---|
| Claim and verify Google Business Profile ownership | — | ☐ | | |
| Business name | `Zenith Line Co.` — exactly this, never a keyword-stuffed variant | ☐ | | |
| Primary category | Likely a general contracting category (e.g. "General Contractor" or "Construction Company") given the business spans construction, telecom/IT and trading — **requires client approval**, do not default to a telecom category | ☐ | | |
| Secondary categories | Only categories the business genuinely operates in — **requires client approval per category** | ☐ | | |
| Call number | `+965 66488191` | ☐ | | |
| WhatsApp number (if the profile's messaging feature supports a distinct number) | `+965 65071368` — never the call number, never the obsolete `+965 99088101` / `+965 97116076` | ☐ | | |
| Website URL | `https://zenithlinekw.com/` | ☐ | | |
| Address / service-area decision | `#1, 4th Floor, M Square Complex, Abdulmunim Street, Mirqab, Kuwait` — confirm whether this is a public-facing, walk-in location or an office-only address, since that determines whether the profile should show the address publicly or use a service-area listing | ☐ | | |
| Business hours | **Not published anywhere in the current codebase.** Confirm real hours with the client before publishing on the profile — do not guess or infer from industry norms | ☐ | | |
| Services list | Pull directly from the live service page summaries in `src/data/services/*.ts` for wording consistency, rather than writing new copy from scratch | ☐ | | |
| Photos | Genuine Zenith Line company/project photographs only — do not reuse the website's representative/stock imagery (flagged as such in `CONTENT-REVIEW.md`) without the same honesty | ☐ | | |
| Logo and cover image | `public/images/zenith-logo.png` is the current site logo; source a separate wider cover image (GBP's cover-image aspect ratio differs from the site's square logo) | ☐ | | |
| Genuine reviews | Request only from real clients/projects. No review-gating, no incentivized reviews — both against Google's policy | ☐ | Ongoing | |
| Review-response process | Respond professionally to every review, positive and negative | ☐ | Ongoing | |
| Kuwait business citations | Consistent NAP across any directory listing the client adds (Chamber of Commerce, industry directories, etc.) — reuse `src/data/site.ts` values exactly | ☐ | | |
| Ongoing NAP consistency | Re-check the Business Profile against `site.ts` whenever either changes | ☐ | Ongoing | |
| Monthly performance review | Google Business Profile Insights alongside Search Console (see `SEARCH-CONSOLE-SITEMAP-SUBMISSION.md`) | ☐ | Ongoing | |

## Explicitly do not

- Do not create a second Google Business Profile for any individual brand (Cisco, Fortinet, etc.) — one profile for Zenith Line Co. is correct; brand pages are website content, not separate businesses.
- Do not add brand or service keywords into the business name field — against Google's guidelines and risks suspension.
- Do not post or solicit reviews referencing an "authorized partnership" with any brand unless genuinely confirmed (see `BRAND-CONTENT-REVIEW.md`).
- Do not publish business hours, certifications, registrations, or SLA/response-time claims anywhere (website or Business Profile) until verified in supplied client material — none of these exist in the codebase today, which is the correct, honest state pending confirmation.
- Do not create individual Kuwait-district landing pages to chase local-pack rankings — this is a thin-content risk with no genuine differentiated content behind it; a single accurate country-level service area, backed by a real, verified Business Profile listing, is the correct approach for a business operating from one office.

## Relationship to other documents

- `GOOGLE-BUSINESS-PROFILE-CHECKLIST.md` is superseded by Part B above (kept in the repo for history; do not maintain both going forward).
- `KUWAIT-SEO-LAUNCH-PLAN.md` and `KUWAIT-AUTHORITY-BUILDING-PLAN.md` cover broader off-site authority-building and content strategy — unchanged by this pass, still current.
- `SEO-CONTENT-ROADMAP-90-DAYS.md` covers post-launch content work — unchanged by this pass.
