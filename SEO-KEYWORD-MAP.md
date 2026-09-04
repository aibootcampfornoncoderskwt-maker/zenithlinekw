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
| `/services/telecom-it/` | Telecom & IT services Kuwait | integrated networking, security, voice and IT infrastructure | Commercial hub | Facility, project and IT decision-makers | All 10 Telecom & IT service pages | Broad hub; child pages target specific service intent |
| `/services/wired-network/` | wired network installation Kuwait | fibre and copper network contractor, LAN/data network cabling, underground fibre, direct-buried cable, duct/handhole/manhole work | Commercial | IT managers, civil contractors, project teams | Structured Cabling, Wireless & Microwave, IT Support | Physical route and cable installation; not building outlet-system design |
| `/services/wireless-microwave-networks/` | wireless network solutions Kuwait | point-to-point link, microwave installation, building-to-building connectivity, outdoor wireless bridge, site survey | Commercial | Multi-building and remote-site operators | Wired Network, Wi-Fi, Network Security | External directional links; not indoor Wi-Fi; no unverified frequency or licensing claim |
| `/services/structured-cabling/` | structured cabling company Kuwait | Cat6, Cat6A, fibre optic cabling, patch panels, cabinets/racks, office data cabling, testing and labelling | Commercial | IT managers, contractors, office project teams | Wired Network, Wi-Fi, CCTV | Standards-led passive building cabling; testing level remains quotation-specific |
| `/services/cctv-surveillance-systems/` | CCTV installation company Kuwait | security cameras, IP CCTV, commercial/warehouse/office/retail surveillance, recording, storage and maintenance | Commercial | Security and facility buyers | Door Access, Wired Network, Network Security | Visual surveillance intent; no legal or government-approval claims |
| `/services/pbx-telephone-exchange/` | PBX installation Kuwait | IP telephone systems, office phone systems, IP-PBX, VoIP telephony, call routing, extensions, maintenance and migration | Commercial | Office and facility managers | Structured Cabling, Wired Network, IT Support | Consolidates the retired VoIP route and its useful intent into one canonical page |
| `/services/door-access-security/` | access control system Kuwait | door access, biometric/card access, magnetic locks, time attendance integration, commercial door security and maintenance | Commercial | Security and facility buyers | CCTV, Network Security, IT Support | Physical entry control; no unverified biometric, civil-defence or compliance promise |
| `/services/public-address-systems/` | public address system Kuwait | PA installation, commercial audio, school announcements, warehouse paging, facility audio, speakers/amplifiers/microphones/zoning and maintenance | Commercial | Facility operators, schools, warehouses, retail | Structured Cabling, IT Support, Technical Supply | Routine paging and audio; no unsupported emergency or life-safety certification |
| `/services/router-wifi/` | Wi-Fi installation Kuwait | business/office Wi-Fi, enterprise access points, coverage surveys, router configuration, guest networks, warehouse Wi-Fi and dead-zone solutions | Commercial | Office, retail, hospitality and warehouse IT buyers | Wired Network, Structured Cabling, Network Security | Indoor managed Wi-Fi; explicitly distinguished from consumer routers and microwave links |
| `/services/network-security/` | network security company Kuwait | firewall installation/configuration, VLANs, business VPN, secure office networks, monitoring, segmentation and assessment | Commercial | IT and security decision-makers | Wi-Fi, IT Support, Structured Cabling | Network controls and assessment; no SOC, incident-response or absolute-security guarantee |
| `/services/installation-support/` | IT support company Kuwait | business/on-site IT support, server and network support, office maintenance, infrastructure setup, troubleshooting and equipment installation | Commercial | Facility and IT managers | Network Security, Wi-Fi, PBX | Project-based support; hours, response targets and SLA remain unverified |

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
| `/brands/grandstream/` | Grandstream PBX Kuwait | Commercial | Voice/PBX buyers | pbx-telephone-exchange, structured-cabling, installation-support | Avaya, Yealink, Gigaset (directory-only) |
| `/brands/avaya/` | Avaya PBX Kuwait | Commercial | Voice/PBX buyers (larger office) | pbx-telephone-exchange, structured-cabling, installation-support | Grandstream, Yealink, Gigaset (directory-only) |
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
