# Internal Link Architecture

Documents the actual, verified link graph of the built site (`scripts/seo-audit.mjs` computes inbound/outbound counts from the real HTML — nothing below is aspirational).

## Structure

```
Homepage (/)
  → Header main nav: Home, Services (mega-menu), Products & Supply, Brands, Projects, About, Contact
  → Services mega-menu (present on every page): all 20 service links + Telecom & IT hub + "Explore all services" + "Company profile"
  → Homepage brand marquee: links every PUBLISHED brand logo to its /brands/{slug}/ page
  → Footer: About, All Services, Products & Supply, Brands, Projects, Company Profile, Privacy, Sitemap, 5 "Core Services" shortcuts, WhatsApp

/services/ (directory)
  → all 20 service pages (client-side ?category= filter, not separate crawlable URLs)

/services/{slug}/ (20 pages)
  → related services (service.relatedSlugs)
  → NEW in this pass: "Connected Brands" section linking to every published brand page whose
    connectedServiceSlugs includes this service (the 10 Telecom & IT pages plus Supply & Logistics qualify — see table below)
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
| `/services/wired-network/` | Belden, CommScope, Corning, Panduit; Gulf Cable via directory | 5 |
| `/services/wireless-microwave-networks/` | Cisco, Aruba, Ubiquiti; MikroTik via directory | 4 |
| `/services/structured-cabling/` | Belden, CommScope, Corning, Panduit; Leviton via directory | 5 |
| `/services/cctv-surveillance-systems/` | Hikvision, Dahua, Honeywell; Axis and UNV via directory | 5 |
| `/services/pbx-telephone-exchange/` | Avaya, Grandstream; Gigaset, Yealink and Panasonic via directory | 5 |
| `/services/door-access-security/` | Hikvision, Honeywell; ZKTeco via directory | 3 |
| `/services/public-address-systems/` | Bosch; TOA via directory | 2 |
| `/services/router-wifi/` | Cisco, Aruba, TP-Link, Ubiquiti; D-Link and MikroTik via directory | 6 |
| `/services/network-security/` | Fortinet, Cisco; Juniper via directory | 3 |
| `/services/installation-support/` | Dell, HP, APC and Eaton via directory | 4 |
| `/services/supply-logistics/` | Hikvision, Dahua, Bosch, Honeywell, CommScope, Belden, Corning, Panduit | 8 |

Construction services and general trading pages intentionally receive no Telecom & IT brand-links section; forcing unrelated brands there would violate the relevance rule.

**Effect on inbound link counts** (before → after, from the real build): Avaya 4→8, Grandstream 4→8, Fortinet 5→8, TP-Link 5→9, Hikvision 6→10, Belden/CommScope/Corning/Panduit/Honeywell 6→9, Bosch/Dahua 6→10, Cisco/Aruba/Ubiquiti 7→11. Every brand page now has at least 8 internal inbound links (previously as few as 4), and zero orphan pages exist anywhere on the site.

## Anchor text audit

Spot-checked every internal link type for descriptive (non-generic) anchor text:
- Service cards: full service name (e.g. "Router & Wi-Fi"), never "click here."
- Brand cross-links: brand name via `BrandLogo`'s visible `<strong>{name}</strong>`, with an `aria-label` of "View {Brand} products and solutions" for the link's accessible name.
- "Explore all X" links carry the actual count/subject ("Explore all 20 services," "Explore the complete brand directory"), not bare "more."
- FAQ, breadcrumb, and footer links all use their destination's real title.

No instance of "click here," "read more," or "learn more" as standalone anchor text was found anywhere in the codebase.

## Footer link load

The footer's "Core Services" column intentionally lists only 5 of 20 services (Construction & Renovation, K-Span Structures, Structured Cabling, HVAC Services, Supply & Logistics) rather than all 20 — this avoids a bloated, low-value footer link list ("no excessive footer keyword links"), since the full list is already one click away via "All Services" in the same column and via the header mega-menu on every page.

## Breadcrumbs

Every service and brand page renders a semantic, crawlable breadcrumb (`<nav class="breadcrumbs">` with real `<a>` elements, not JS-only) matching its `BreadcrumbList` schema. Telecom & IT detail pages use Home → Services → Telecom & IT → Current service; other service pages use Home → Services → Current service.

## What was not changed

- The Services mega-menu and header structure were left untouched — Phase 7 asks to "improve links without changing the approved page designs," and the mega-menu already provides maximal internal-link equity to every service page from every page on the site (see the `/services/{slug}/` "in-links: 42" figures in `SEO-AUDIT.md`). Adding 15 individual brand links to the header would visually clutter an approved, already-effective navigation component for a benefit the marquee/directory/cross-links already deliver.
- No footer changes — its existing structure already reaches every top-level directory.
