# Structured-Data Entity Details Requiring Client Confirmation

This file exists specifically for Phase 6 of the SEO launch work: entity facts that structured data *could* eventually include, but which were deliberately **not** added because they are not yet confirmed, evidenced, or approved. Nothing below has been added to the site's schema.

## Currently in place (for reference — not asking for confirmation on these)

- `Organization` (`@id: https://zenithlinekw.com/#organization`): name "Zenith Line Co.", legal name "Zenith Line Co.", domain, logo, telephone, email, postal address, `areaServed: Kuwait`, `sameAs: ["https://www.instagram.com/znthline/"]`. Present exactly once per page via `BaseLayout.astro`.
- `sameAs` (Organization) — the client has confirmed `https://www.instagram.com/znthline/` (`@znthline`) as the official, actively-managed Instagram profile. Added to `site.ts` as `socials.instagram` and merged into the Organization schema's `sameAs` array; the same URL is also visibly linked from the homepage, footer, contact page and mobile navigation drawer.
- `WebSite` (`@id: https://zenithlinekw.com/#website`): name, url, `inLanguage: en`, `publisher` referencing the Organization `@id`. Present exactly once per page (added in this pass; a pre-existing duplicate on the homepage was found and removed — see `SEO-AUDIT.md`).
- Per-service `Service` schema, per-brand `WebPage` + `Brand` sub-entity, `BreadcrumbList`, `FAQPage` matching visible FAQs exactly.

## Needs confirmation before adding

| Field | Where it would appear | Why it's not there now |
|---|---|---|
| `foundingDate` | Organization schema | `CONTENT-REVIEW.md` already flags an unresolved conflict: the newest company profile states "established in 2025" while also listing a 2000–2025 project history. Do not add a founding date until this is resolved with the client — an incorrect founding date is a factual schema error, not a stylistic one. |
| `numberOfEmployees` | Organization schema | No verified figure supplied anywhere in the codebase or company profile references reviewed. Not added, and should not be estimated. |
| Additional `telephone`/`ContactPoint` entries | Organization schema | `site.ts` has two `alternatePhones` not currently in the Organization schema (only the primary WhatsApp number is). Confirm whether these should be exposed as a `ContactPoint` array (e.g. distinguishing sales vs. support lines) or kept as display-only contact info. |
| `LocalBusiness` (or an industry-specific subtype) | Would replace/extend `Organization` | Explicitly deferred per this task's own Phase 6 instruction: "Do not add LocalBusiness subtypes until the physical location, public operating status, hours and correct business category are confirmed by the client." `site.ts` has an address but no stated operating hours anywhere in the codebase. **Needs: confirmed operating hours, confirmed public-facing status of the Mirqab office (walk-in vs. by-appointment), and the correct `LocalBusiness` subtype** (e.g. `GeneralContractor`, `Electrician`, or a combination — the business spans construction, telecom/IT and trading, which doesn't map cleanly to one schema.org subtype). |
| `sameAs` for brand `officialUrl`s | Brand `WebPage` schema, `about.sameAs` | Currently populated with each of the 15 brands' well-known top-level manufacturer domain (e.g. `https://www.cisco.com`) as a factual entity reference, not a partnership claim. Confirmed as appropriate to keep per the earlier brand-page work, but flagging again here since it's the one `sameAs`-adjacent field currently live in brand schema. |
| Any partnership/certification-level schema property | N/A — none exists in schema.org for this without misuse | Not applicable until a real, evidenced brand relationship exists (see `BRAND-CONTENT-REVIEW.md`). |

## Explicitly and permanently out of scope (not "pending," just not going to happen without a policy change)

Per this task's strict boundaries, the following will **not** be added regardless of future confirmation, because they are the wrong tool even if the underlying fact becomes true:
- `AggregateRating` / `Review` schema (real reviews belong on Google Business Profile, not fabricated schema on the website).
- `Offer` / price / availability schema (no e-commerce transaction exists on this site).
- Employee headshots / `Person` author schema (no author-attribution content model exists here).

## How to action this file

When any row above becomes confirmable, the fix is a small, additive data change (typically one field in `site.ts` or `BaseLayout.astro`), not a redesign — flag the specific row to the development team with the confirmed value.
