# 90-Day Content Roadmap

A controlled, evidence-gated content program — not a batch of AI-written articles published on day one. Every item below requires the listed evidence/expert input before it's written, and every item explicitly names its cannibalization check against the existing `SEO-KEYWORD-MAP.md`.

**Format note:** this roadmap assumes articles live under a future `/guides/` or `/resources/` path (not yet built) — creating that route, its layout, and its own schema (`Article`/`TechArticle`, not invented here) is a separate, small implementation task to schedule once the first article is ready, not before.

## Days 1–30: Foundation guides (2 of the 4 technical guides)

| # | Title | Search intent | Primary query | Target reader | Expert input needed | Evidence/photos needed | Connected service | Connected brand | WhatsApp goal | Cannibalization check |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Planning Business Wi-Fi Coverage in a Kuwait Office | Informational → commercial | "office wifi coverage planning Kuwait" | Office manager/facility lead scoping a Wi-Fi upgrade | Network engineer to confirm coverage-planning factors (AP density, construction materials, interference) | None required — informational | `/services/router-wifi/` | Aruba, Ubiquiti, Cisco (link to 2–3, not all) | Drives a router-wifi enquiry via "share your floor plan" CTA | Checked against `/services/router-wifi/`'s own primary keyword ("business Wi-Fi installation Kuwait") — this article targets a broader planning-stage query, one step earlier in the funnel; no overlap |
| 2 | Cat6 vs. Cat6A for Commercial Cabling Projects | Informational | "Cat6 vs Cat6A Kuwait" | IT/facility manager comparing cabling specs before a quotation | Structured-cabling technician to confirm real-world Kuwait-relevant tradeoffs (cost, distance, future-proofing) | None required | `/services/structured-cabling/` | CommScope, Belden, Panduit (2–3) | Drives a structured-cabling enquiry via "not sure which category you need? Send your requirement" | Checked against `/services/structured-cabling/` and all 4 cabling brand pages — this is a decision-support article one step before those pages, not competing with them |

## Days 31–60: Selection guides + first Kuwait problem-solving piece

| # | Title | Search intent | Primary query | Target reader | Expert input needed | Evidence/photos needed | Connected service | Connected brand | WhatsApp goal | Cannibalization check |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 | Information Required for a Structured Cabling Quotation | Commercial (procurement-guide) | "structured cabling quotation checklist Kuwait" | Procurement/facility manager preparing to request quotes | Structured-cabling technician to validate the checklist matches real quotation practice | None required | `/services/structured-cabling/` | All 4 cabling brands (link, don't duplicate their own checklists) | Directly funnels to the enquiry form | No overlap — this is a checklist/process article, distinct from the product-focused brand pages |
| 4 | Selecting Firewall Capacity for a Growing Organization | Commercial (procurement-guide) | "firewall sizing for business Kuwait" | IT manager sizing a security purchase | Network security technician to confirm sizing factors (users, throughput, features) are accurate, not generic marketing claims | None required | `/services/network-security/` | Fortinet, Cisco (2) | Drives a network-security enquiry | Checked against `/brands/fortinet/`'s own "selection factors" section — this article is broader (brand-agnostic sizing logic), the brand page's factors are Fortinet-specific; complementary, not duplicate |
| 5 | Causes of Waterproofing Failure in Kuwait's Climate | Informational (Kuwait-specific problem-solving) | "waterproofing failure causes Kuwait" | Facility owner diagnosing an existing problem | Civil/waterproofing technician — this one needs real technical accuracy, not generic content | Ideally 2–3 real (labeled honestly) example photos if available; publish without photos if not, rather than use stock images implied as real cases | `/services/specialized-civil-services/` | N/A | Drives a specialized-civil enquiry via "if this sounds familiar, get a site assessment" | No existing page targets this diagnostic angle; safe |

## Days 61–90: Remaining guides + case studies (evidence-gated)

| # | Title | Search intent | Primary query | Target reader | Expert input needed | Evidence/photos needed | Connected service | Connected brand | WhatsApp goal | Cannibalization check |
|---|---|---|---|---|---|---|---|---|---|---|
| 6 | Planning CCTV Storage and Recording Duration | Commercial (procurement-guide) | "CCTV recording duration storage planning Kuwait" | Security buyer sizing an NVR/storage purchase | CCTV technician to validate the storage-math approach | None required | `/services/installation-support/`, `/services/structured-cabling/` | Hikvision, Dahua (2) | Drives a CCTV enquiry | Checked against Hikvision/Dahua brand pages' own selection-factors sections — broader/brand-agnostic, complementary |
| 7 | K-Span Project Planning Considerations | Informational → commercial (Kuwait-specific) | "K-Span structure planning Kuwait" | Warehouse/industrial site owner scoping a K-Span build | Structures engineer | Real project photos strongly preferred here — if unavailable, be explicit that imagery is representative, per existing `CONTENT-REVIEW.md` practice | `/services/k-span-structures/` | N/A | Drives a K-Span enquiry | No overlap |
| 8 | HVAC Planning for Commercial Facilities in Kuwait | Informational → commercial | "commercial HVAC planning Kuwait" | Facility manager planning an HVAC project or upgrade | HVAC technician | None required | `/services/hvac-services/` | N/A | Drives an HVAC enquiry | No overlap |
| 9 (conditional) | Case Study: [Project name — pending client permission] | Commercial trust-building | Brand/project-name query | Prospective client evaluating credibility | Project manager to confirm scope accuracy | **Required**: client permission to name them, real project photos, verified scope/completion details (see `CONTENT-REVIEW.md`'s outstanding item on this) | Whichever service the project involved | Whichever brand(s), if any, were genuinely used and confirmed | Trust-building, secondary enquiry driver | Publish only once evidence exists — do not publish a placeholder or anonymized "case study" that reads as fabricated |
| 10 (conditional) | Case Study #2 | Same as above | Same as above | Same as above | Same as above | Same evidence bar as above | — | — | — | Same |

## Ongoing, not calendar-bound

- **Service-page updates based on Search Console queries**: once the site has query data (30+ days post-launch is realistic), check each service page's "Queries" report in Search Console for high-impression/low-click terms not currently reflected in its `secondaryKeywords` — update the data file, not hardcoded page copy, consistent with the existing architecture.
- **Brand-page expansions based on real impressions**: if Search Console shows meaningful impression volume for a directory-only brand (one of the 43 not published in Phase 1), that's the evidence-based trigger to consider building it a full page — not before, and not for all 43 speculatively.

## What this roadmap deliberately does not include

Dozens of thin, AI-generated articles published at once. Every item above has a named evidence requirement and a named human-expert reviewer; an item without both should not be published even if it's already written.
