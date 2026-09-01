# SEO Keyword & Search-Intent Map

One primary intent per indexable page. Primary/secondary keywords below are pulled directly from `src/data/services/*.ts` and `src/data/brand-pages/*.ts` (not invented for this document) — they are the same values already driving each page's `seoTitle`/`metaDescription`, so this map and the live site cannot drift apart silently.

## Construction & structures (informational-to-commercial, Kuwait project owners/facility managers)

| URL | Primary keyword | Secondary themes | Intent | Audience | Connected pages |
|---|---|---|---|---|---|
| `/services/construction-renovation/` | construction and renovation contractor Kuwait | building renovation Kuwait, commercial renovation Kuwait, villa renovation contractor, facility modification Kuwait | Commercial | Facility owners, developers | `/services/`, related construction services |
| `/services/civil-road-works/` | civil road works Kuwait | road contractor Kuwait, asphalt works Kuwait, earthworks contractor Kuwait, infrastructure works Kuwait | Commercial | Government/commercial site owners | `/services/`, related construction services |
| `/services/k-span-structures/` | K-Span structures Kuwait | K-Span warehouse Kuwait, steel shelter Kuwait, long span structure Kuwait, vehicle shelter structure | Commercial | Industrial/warehouse operators | `/services/`, `/services/shade-structures/` |
| `/services/shade-structures/` | shade structures Kuwait | parking shades Kuwait, car shade contractor Kuwait, entrance canopy Kuwait, equipment shade structure | Commercial | Facility/parking operators | `/services/`, `/services/k-span-structures/` |
| `/services/hvac-services/` | HVAC services Kuwait | HVAC installation Kuwait, commercial air conditioning Kuwait, HVAC maintenance Kuwait, ducting contractor Kuwait | Commercial | Facility managers | `/services/`, `/services/construction-renovation/` |
| `/services/specialized-civil-services/` | concrete repair waterproofing Kuwait | waterproofing contractor Kuwait, epoxy flooring Kuwait, concrete repair Kuwait, dewatering services Kuwait | Commercial | Facility owners, contractors | `/services/`, `/services/construction-renovation/` |

## Telecom & IT services (commercial, IT/facility decision-makers)

| URL | Primary keyword | Secondary themes | Intent | Audience | Connected pages | Cannibalization note |
|---|---|---|---|---|---|---|
| `/services/router-wifi/` | business Wi-Fi installation Kuwait | Wi-Fi site survey Kuwait, wireless access points Kuwait, office Wi-Fi Kuwait, router installation Kuwait | Commercial | Office/retail/hospitality IT buyers | `/brands/cisco/`, `/brands/aruba/`, `/brands/tp-link/`, `/brands/ubiquiti/`, `/brands/fortinet/` | None — generic service vs. brand-specific pages are complementary, not competing for the same query |
| `/services/structured-cabling/` | structured cabling Kuwait | Cat6 cabling Kuwait, fibre optic cabling Kuwait, network cabling contractor Kuwait, data rack installation Kuwait | Commercial | IT managers, contractors | `/brands/commscope/`, `/brands/belden/`, `/brands/corning/`, `/brands/panduit/` + 10 other connected brands | None — same pattern as above |
| `/services/voip-voice/` | VoIP solutions Kuwait | business phone system Kuwait, IP phone installation Kuwait, IVR system Kuwait, office voice solution | Commercial | Office managers | `/services/pbx-telephone-exchange/`, `/brands/grandstream/`, `/brands/avaya/` | **Watch**: closely related to PBX below — kept as two pages because "VoIP" and "PBX/telephone exchange" attract meaningfully different searcher vocabulary (cloud/software buyers vs. traditional exchange replacement buyers) in practice. Not merging; flagged for Search Console query monitoring post-launch. |
| `/services/pbx-telephone-exchange/` | PBX telephone exchange Kuwait | IP PBX Kuwait, telephone system Kuwait, PBX installation Kuwait, office telephone exchange | Commercial | Office managers, facility IT | `/services/voip-voice/`, `/brands/grandstream/`, `/brands/avaya/` | See above |
| `/services/network-security/` | network security solutions Kuwait | business firewall Kuwait, VPN setup Kuwait, network segmentation Kuwait, firewall installation Kuwait | Commercial | IT/security decision-makers | `/brands/fortinet/`, `/brands/cisco/`, `/brands/aruba/`, `/brands/hikvision/`, `/brands/dahua/`, `/brands/bosch/`, `/brands/honeywell/`, `/brands/tp-link/`, `/brands/ubiquiti/` | None |
| `/services/installation-support/` | technical support Kuwait | network installation Kuwait, on-site IT support Kuwait, network troubleshooting Kuwait, telecom technical support | Commercial | Facility/IT managers | All 15 brand pages connect here (broadest service-to-brand link set) | None — genuinely the common thread across every brand |

## Trading & supply services (commercial, procurement/project managers)

| URL | Primary keyword | Secondary themes | Intent | Audience | Connected pages |
|---|---|---|---|---|---|
| `/services/import-export/` | import export services Kuwait | international sourcing Kuwait, supplier coordination Kuwait, trade logistics Kuwait, project procurement Kuwait | Commercial | Procurement teams | `/services/`, `/products-supply/` |
| `/services/supply-logistics/` | technical supply Kuwait | construction materials supplier Kuwait, MEP materials Kuwait, IT equipment supplier Kuwait, industrial supply Kuwait | Commercial | Procurement, contractors | `/brands/commscope/`, `/brands/belden/`, `/brands/corning/`, `/brands/panduit/` + CCTV/security brands, `/products-supply/` |
| `/services/engineering-manpower/` | engineering manpower Kuwait | engineering support Kuwait, technical manpower Kuwait, skilled workforce Kuwait, project manpower Kuwait | Commercial | Contractors, project managers | `/services/`, `/company-profile/` |
| `/services/tools-equipment-rental/` | tools equipment machinery Kuwait | equipment rental Kuwait, technical tools Kuwait, test equipment Kuwait, construction machinery Kuwait | Commercial | Contractors, site managers | `/services/`, `/products-supply/` |

## Brand pages (commercial, brand-specific procurement intent)

| URL | Primary keyword | Intent | Audience | Connected service pages | Related brands |
|---|---|---|---|---|---|
| `/brands/cisco/` | Cisco networking products in Kuwait | Commercial | IT buyers seeking Cisco specifically | router-wifi, structured-cabling, network-security, installation-support | Aruba, Fortinet, Ubiquiti |
| `/brands/aruba/` | Aruba Wi-Fi Kuwait | Commercial | Wi-Fi/network buyers | router-wifi, structured-cabling, network-security, installation-support | Cisco, Fortinet, Ubiquiti, TP-Link |
| `/brands/fortinet/` | Fortinet firewall Kuwait | Commercial | Security/IT buyers | network-security, router-wifi, installation-support | Cisco, Aruba, Ubiquiti |
| `/brands/hikvision/` | Hikvision CCTV Kuwait | Commercial | Security/CCTV buyers | installation-support, structured-cabling, supply-logistics, network-security | Dahua, Bosch, UNV/Uniview (directory-only) |
| `/brands/dahua/` | Dahua CCTV Kuwait | Commercial | Security/CCTV buyers | installation-support, structured-cabling, supply-logistics, network-security | Hikvision, Bosch, Honeywell |
| `/brands/commscope/` | CommScope structured cabling Kuwait | Commercial | Cabling/infrastructure buyers | structured-cabling, supply-logistics, installation-support | Belden, Corning, Panduit |
| `/brands/belden/` | Belden cable supplier Kuwait | Commercial | Cabling buyers, industrial | structured-cabling, supply-logistics, installation-support | CommScope, Corning, Panduit |
| `/brands/corning/` | Corning fibre optic Kuwait | Commercial | Fibre/backbone buyers | structured-cabling, supply-logistics, installation-support | CommScope, Belden, Panduit |
| `/brands/panduit/` | Panduit cabling Kuwait | Commercial | Cabling/rack buyers | structured-cabling, supply-logistics, installation-support | CommScope, Belden, Corning |
| `/brands/tp-link/` | TP-Link Kuwait supplier | Commercial | Budget-conscious network buyers | router-wifi, structured-cabling, network-security, installation-support | Ubiquiti, Aruba, Cisco, MikroTik (directory-only) |
| `/brands/ubiquiti/` | Ubiquiti access points Kuwait | Commercial | Unified-network buyers | router-wifi, structured-cabling, network-security, installation-support | TP-Link, Aruba, Cisco, MikroTik (directory-only) |
| `/brands/grandstream/` | Grandstream PBX Kuwait | Commercial | Voice/PBX buyers | voip-voice, pbx-telephone-exchange, structured-cabling, installation-support | Avaya, Yealink, Gigaset (directory-only) |
| `/brands/avaya/` | Avaya PBX Kuwait | Commercial | Voice/PBX buyers (larger office) | voip-voice, pbx-telephone-exchange, structured-cabling, installation-support | Grandstream, Yealink, Gigaset (directory-only) |
| `/brands/bosch/` | Bosch security systems Kuwait | Commercial | Security/building-tech buyers | installation-support, structured-cabling, supply-logistics, network-security | Hikvision, Dahua, Honeywell |
| `/brands/honeywell/` | Honeywell security systems Kuwait | Commercial | Security/building-tech buyers | installation-support, structured-cabling, supply-logistics, network-security | Bosch, Hikvision, Dahua |

**No separate pages exist for keyword variants** such as "Cisco supplier Kuwait," "Cisco dealer Kuwait," or "Cisco products Kuwait" — each brand page's `secondaryKeywords` array (see the data files) already carries that variation internally rather than spawning a new URL, exactly per this task's Phase 2 instruction.

## Hub / core pages (mixed intent)

| URL | Page purpose | Primary intent | Notes |
|---|---|---|---|
| `/` | Brand entry point, capability overview | "Zenith Line Kuwait" / navigational | Feeds every service and brand hub via header, footer and marquee |
| `/services/` | Service directory/filter | "Zenith Line services Kuwait" | Category filter via query string (`?category=`), not separate crawlable pages — correctly avoids doorway-page duplication |
| `/brands/` | Brand directory/search | "Zenith Line brands" / navigational | Lists all 58 brands; only 15 link onward per Phase 1 scope |
| `/about/` | Company background | "Zenith Line company Kuwait" | Informational/trust-building |
| `/company-profile/` | PDF download landing page | "Zenith Line company profile" | Low competitive intent by design |
| `/products-supply/` | Product-category overview (not brand-specific) | "technical supply Kuwait" | Complements `/services/supply-logistics/` and brand pages without competing — it covers *categories* (e.g. "Active Network Components"), not named brands |
| `/projects/` | Portfolio/trust page | "Zenith Line projects Kuwait" | Informational |
| `/contact/` | Contact + enquiry form | Navigational/transactional | Low competitive intent by design |
| `/privacy/` | Legal | N/A (non-commercial) | Excluded from commercial keyword strategy entirely |
| `/sitemap-visual/` | Human-readable sitemap | N/A (navigational aid) | Internal-linking utility, not a target page |

## Future content opportunities (see `SEO-CONTENT-ROADMAP-90-DAYS.md` for the scheduled version)

- Individual product-category clusters (e.g. "Cat6 vs Cat6A Kuwait") only once real catalog/spec data exists — not before, per the strict boundary against thin/doorway pages.
- A dedicated "network security for SMEs vs enterprise" comparison once real project examples exist to ground it.
- Deeper procurement/selection guides that link into 3–4 relevant brand pages each (see roadmap).

## Cannibalization summary

Only one **watch-list** item was identified (VoIP vs. PBX, above) and it is a pre-existing, deliberate content split, not something introduced or worsened in this pass. No other page shares a primary keyword with another indexable page.
