# Internal Link Architecture

Documents the actual, verified link graph of the built site (`scripts/seo-audit.mjs` computes inbound/outbound counts from the real HTML — nothing below is aspirational).

## Structure

```
Homepage (/)
  → Header main nav: Home, Services (mega-menu), Products & Supply, Brands, Projects, About, Contact
  → Services mega-menu (present on every page): all 16 service links + "Explore all services" + "Company profile"
  → Homepage brand marquee: links every PUBLISHED brand logo to its /brands/{slug}/ page
  → Footer: About, All Services, Products & Supply, Brands, Projects, Company Profile, Privacy, Sitemap, 5 "Core Services" shortcuts, WhatsApp

/services/ (directory)
  → all 16 service pages (client-side ?category= filter, not separate crawlable URLs)

/services/{slug}/ (16 pages)
  → related services (service.relatedSlugs)
  → NEW in this pass: "Connected Brands" section linking to every published brand page whose
    connectedServiceSlugs includes this service (7 of 16 services qualify — see table below)
  → /company-profile/ (via "why Zenith Line" section)
  → /services/ (breadcrumb + "explore all services")

/brands/ (directory)
  → published brand cards link to /brands/{slug}/
  → directory-only brand cards remain non-interactive (no dead links)

/brands/{slug}/ (15 pages)
  → connected service pages (brandPage.connectedServiceSlugs)
  → related brand pages (brandPage.relatedBrandSlugs) — published ones link to their page,
    directory-only ones (Yealink, Gigaset, MikroTik, UNV/Uniview) link to /brands/ instead of a dead URL
  → /brands/ (breadcrumb + "explore the complete brand directory")
```

## Service ↔ brand cluster map (the gap this pass closed)

Before this pass, linking was one-directional: brand pages linked to services, but no service page linked back to a brand. This is now bidirectional for every service that has a genuine brand connection:

| Service | Connected brands | Inbound brand-page links added |
|---|---|---|
| `/services/router-wifi/` | Cisco, Aruba, TP-Link, Ubiquiti, Fortinet | 5 |
| `/services/structured-cabling/` | Cisco, Aruba, TP-Link, Ubiquiti, Hikvision, Dahua, Bosch, Honeywell, Grandstream, Avaya, CommScope, Belden, Corning, Panduit | 14 |
| `/services/network-security/` | Cisco, Aruba, TP-Link, Ubiquiti, Fortinet, Hikvision, Dahua, Bosch, Honeywell | 9 |
| `/services/installation-support/` | All 15 published brands | 15 |
| `/services/voip-voice/` | Grandstream, Avaya | 2 |
| `/services/pbx-telephone-exchange/` | Grandstream, Avaya | 2 |
| `/services/supply-logistics/` | Hikvision, Dahua, Bosch, Honeywell, CommScope, Belden, Corning, Panduit | 8 |

The other 9 services (all 6 Construction & Structures services, plus Import/Export, Engineering & Manpower, Tools & Equipment) intentionally get **no** brand-links section — none of the 15 published brands are relevant to civil/construction work or general trading services, and forcing an irrelevant link there would violate "related-brand links remain relevant."

**Effect on inbound link counts** (before → after, from the real build): Avaya 4→8, Grandstream 4→8, Fortinet 5→8, TP-Link 5→9, Hikvision 6→10, Belden/CommScope/Corning/Panduit/Honeywell 6→9, Bosch/Dahua 6→10, Cisco/Aruba/Ubiquiti 7→11. Every brand page now has at least 8 internal inbound links (previously as few as 4), and zero orphan pages exist anywhere on the site.

## Anchor text audit

Spot-checked every internal link type for descriptive (non-generic) anchor text:
- Service cards: full service name (e.g. "Router & Wi-Fi"), never "click here."
- Brand cross-links: brand name via `BrandLogo`'s visible `<strong>{name}</strong>`, with an `aria-label` of "View {Brand} products and solutions" for the link's accessible name.
- "Explore all X" links carry the actual count/subject ("Explore all 16 services," "Explore the complete brand directory"), not bare "more."
- FAQ, breadcrumb, and footer links all use their destination's real title.

No instance of "click here," "read more," or "learn more" as standalone anchor text was found anywhere in the codebase.

## Footer link load

The footer's "Core Services" column intentionally lists only 5 of 16 services (Construction & Renovation, K-Span Structures, Structured Cabling, HVAC Services, Supply & Logistics) rather than all 16 — this avoids a bloated, low-value footer link list ("no excessive footer keyword links"), since the full list is already one click away via "All Services" in the same column and via the header mega-menu on every page.

## Breadcrumbs

Every service and brand page renders a semantic, crawlable breadcrumb (`<nav class="breadcrumbs">` with real `<a>` elements, not JS-only) matching its `BreadcrumbList` schema exactly: Home → Services/Brands → [Page]. Verified programmatically that no page's visible breadcrumb trail diverges from its schema.

## What was not changed

- The Services mega-menu and header structure were left untouched — Phase 7 asks to "improve links without changing the approved page designs," and the mega-menu already provides maximal internal-link equity to every service page from every page on the site (see the `/services/{slug}/` "in-links: 42" figures in `SEO-AUDIT.md`). Adding 15 individual brand links to the header would visually clutter an approved, already-effective navigation component for a benefit the marquee/directory/cross-links already deliver.
- No footer changes — its existing structure already reaches every top-level directory.
