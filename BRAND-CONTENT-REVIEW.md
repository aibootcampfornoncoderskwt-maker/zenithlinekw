# Brand Content Review — Phase 1

This file tracks brand-name accuracy, route status, logo status and confirmation needs for every brand in `src/data/brands.ts`. It supersedes the general "Organizations and brands" note in `CONTENT-REVIEW.md` for brand-specific detail; that file's confirmation requirement still applies.

**Nothing in the published brand pages states or implies an authorized, certified, exclusive or approved relationship with any brand.** Where a name or relationship below is unconfirmed, the live page uses hedged language ("selected", "enquiries handled", "may include") rather than asserting the fact.

## How to read this table

- **Route status** — `published` (has a live `/brands/{slug}/` page), `directory-only` (listed on `/brands/` and in marquees only, no dedicated page), or `pending` (no Phase 1 page planned yet).
- **Logo status** — `present` (SVG in `public/images/brands/`), `missing` (site shows the typographic monogram fallback via `BrandLogo.astro` — no imitation logo was drawn).
- **Authorization status** — always `not claimed` per the strict business-claim rules. This column exists to make the absence of a claim explicit and auditable.

## Phase 1 published brands (15)

| Brand | Display name used | Route status | Logo status | Official URL status | Categories requiring confirmation | Authorization status | Client confirmation required | Notes |
|---|---|---|---|---|---|---|---|---|
| Cisco | Cisco | published | present | used (cisco.com, unconfirmed as "verified") | Model-level availability | not claimed | Confirm any real distribution/reseller relationship before adding partner language | — |
| Aruba | Aruba | published | present | used (arubanetworks.com, unconfirmed) | Model-level availability | not claimed | Same as above | HPE-owned brand; page does not reference HPE |
| Fortinet | Fortinet | published | present | used (fortinet.com, unconfirmed) | Model-level availability | not claimed | Same as above | — |
| Hikvision | Hikvision | published | present | used (hikvision.com, unconfirmed) | Access-control categories, model availability | not claimed | Same as above | Some jurisdictions restrict Hikvision procurement in specific sectors — confirm applicability in Kuwait before institutional/government pitches |
| Dahua | Dahua | published | **missing** | used (dahuasecurity.com, unconfirmed) | Access-control categories, model availability | not claimed | Same as above; **supply an official logo asset** | No SVG in `public/images/brands/` — page currently shows a typographic monogram |
| CommScope | CommScope | published | **missing** | used (commscope.com, unconfirmed) | Whether SYSTIMAX should be represented as a CommScope product line (see below) | not claimed | Same as above; **supply an official logo asset** | No SVG asset available |
| Belden | Belden | published | present | used (belden.com, unconfirmed) | Model-level availability | not claimed | Same as above | — |
| Corning | Corning | published | present | used (corning.com, unconfirmed) | Model-level availability | not claimed | Same as above | — |
| Panduit | Panduit | published | present | used (panduit.com, unconfirmed) | Model-level availability | not claimed | Same as above | — |
| TP-Link | TP-Link | published | present | used (tp-link.com, unconfirmed) | Model-level availability | not claimed | Same as above | Name already corrected from "TPLINK" prior to this phase |
| Ubiquiti | Ubiquiti | published | present | used (ui.com, unconfirmed) | Model-level availability | not claimed | Same as above | — |
| Grandstream | Grandstream | published | **missing** | used (grandstream.com, unconfirmed) | Model-level availability | not claimed | Same as above; **supply an official logo asset** | No SVG asset available |
| Avaya | Avaya | published | present | used (avaya.com, unconfirmed) | Model-level availability | not claimed | Same as above | — |
| Bosch | Bosch | published | present | used (boschsecurity.com, unconfirmed) | Model-level availability | not claimed | Same as above | "Bosch" also appears in `src/data/site.ts` `commercialOrganizations` as a **client/customer reference**, unrelated to product supply. Do not conflate the two — the brand page makes no client-relationship claim |
| Honeywell | Honeywell | published | present | used (honeywell.com, unconfirmed) | Model-level availability | not claimed | Same as above | — |

All 15 official URLs above are the manufacturers' well-known top-level domains, used only as `sameAs` entity references in structured data — not as a claim of partnership. Please confirm before launch that linking to these domains is acceptable to the client.

## Directory-only brands requiring name/identity confirmation

These already display with a corrected or best-effort name in `brands.ts` but need explicit client confirmation before any dedicated page or stronger claim is considered.

| Brand entry (`brands.ts`) | Display name shown | Issue | Recommended action |
|---|---|---|---|
| `Birla Ericsson` | Birla Ericsson | Task brief notes "Birla Cable Limited was formerly Birla Ericsson Optical Limited." Current display may be an outdated or informal name. | Confirm current legal/trading name before any page is built; do not publish "Birla Cable Limited" without client confirmation. |
| `LS Cable & System` | LS Cable & System | Official corporate styling (e.g. "LS Cable & System Ltd.") not verified. | Confirm verified official styling. |
| `HES / HSC` | HES / HSC | Ambiguous — unclear if this is one brand with two names, or two related brands. | Requires client clarification. |
| `B3` | B3 | Ambiguous single-token brand name; no public identity confirmed. | Requires client clarification. |
| `Kuwes` | Kuwes | Spelling/identity not independently verified. | Requires client confirmation. |
| `MEFC` | MEFC | Acronym, full name/identity not confirmed. | Requires client confirmation. |
| `Tova` | Tova | Spelling/identity not independently verified. | Requires client confirmation. |
| `Ramcro` | Ramcro | Spelling/identity not independently verified. | Requires client confirmation. |
| `Optronics` | Optronics | Generic term — could refer to multiple companies; specific entity not confirmed. | Requires client confirmation. |
| `UNV / Uniview` | UNV / Uniview | Display already shows both forms; confirm this is the preferred final styling. | Confirm styling is correct as-is. |
| `SYSTIMAX` | SYSTIMAX | Task brief asks whether this should be identified as part of CommScope's portfolio. Kept as a **separate, standalone directory entry** — not merged into CommScope — because the relationship is not independently confirmed in this codebase. The published CommScope FAQ acknowledges the association exists "in the wider market" without asserting it definitively. | Confirm whether SYSTIMAX should be (a) merged as a CommScope alias, (b) kept separate, or (c) given its own future page. |

No other directory-only brand names were flagged as ambiguous during this audit; the remaining 32 entries (3M, APC, Avaya-adjacent voice brands Gigaset/Yealink, Axis Communications, Commax, Datwyler, Dell, DrayTek, Eaton, Excel Networking, EZVIZ, FingerTec, Gulf Cable, HP, Hubbell, Juniper Networks, Leviton, MikroTik, Molex, Norden, Opterna, Panasonic, R&M, Raritan, Ruijie, Schneider Electric, TE Connectivity, Toten, Western Digital (WD), ZKTeco) use their standard publicly known names.

## Missing logo assets (3)

| Brand | Slug | Current fallback |
|---|---|---|
| Dahua | `dahua` | Typographic monogram ("DH") via `BrandLogo.astro` |
| CommScope | `commscope` | Typographic monogram ("CS") via `BrandLogo.astro` |
| Grandstream | `grandstream` | Typographic monogram ("G") via `BrandLogo.astro` |

Per Phase 8 rules, no imitation logo was drawn. Supply official SVG/PNG assets (transparent background preferred) for these three brands and they can be dropped into `public/images/brands/` with the `logo` path added to the matching entry in `src/data/brands.ts` — no other code changes required.

## Claims audit summary

A scripted check (`scripts/validate-site.mjs`) scans every brand page's visible text for the phrases "authorized partner," "authorized reseller," "official distributor," "certified installer," "exclusive supplier" and "approved dealer," and fails the build if any instance appears without a clear negation nearby. All current instances are FAQ questions/answers explicitly denying the claim, or the trademark disclaimer. This check runs on every `npm run validate` and should be kept in place as new brand pages are added.
