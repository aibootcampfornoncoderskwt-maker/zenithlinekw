# Google Business Profile Checklist

**This is a manual, post-deployment checklist for the Zenith Line team. Nothing here is or should be automated through code** — Google Business Profile has no supported way to be safely managed from a static website's build process, and attempting to script it would risk the listing's standing.

Use the exact values already stored in `src/data/site.ts` for every field below, so the website and the Business Profile never disagree (NAP — Name, Address, Phone — consistency is itself a local-SEO ranking factor).

| Task | Exact value to use | Status | Date completed | Responsible |
|---|---|---|---|---|
| Claim and verify the business (if not already done) | — | ☐ | | |
| Business name | `Zenith Line Co.` — exactly this, never a keyword-stuffed variant like "Zenith Line Cisco Kuwait" | ☐ | | |
| Address | `#1, 4th Floor, M Square Complex, Abdulmunim Street, Mirqab, Kuwait` | ☐ | | |
| Primary phone | `+965 66488191` | ☐ | | |
| Additional phone(s), if the profile supports more than one | `+965 99088101`, `+965 97116076` | ☐ | | |
| Confirm business hours | Not currently published anywhere in the codebase — **confirm real hours with the client before publishing**; do not guess | ☐ | | |
| Select the most accurate primary category | Likely a general contracting category (e.g. "General Contractor" or "Construction Company") given the business genuinely spans construction, telecom/IT and trading — confirm the single best-fit primary category with the client rather than defaulting to a telecom category just because this SEO pass focused on IT/brand pages | ☐ | | |
| Add a small number of accurate secondary categories | Only add categories the business genuinely operates in (e.g. an IT/telecom-adjacent secondary category, a general supplier category) — do not add every category that seems tangentially related | ☐ | | |
| Website URL | `https://zenithlinekw.com/` | ☐ | | |
| Add service descriptions | Pull directly from the live service page summaries in `src/data/services/*.ts` for wording consistency rather than writing new copy from scratch | ☐ | | |
| Add genuine company and project photographs | Do not reuse the website's representative/stock imagery labeled as such in `CONTENT-REVIEW.md` without the same honesty — Business Profile photos should be real Zenith Line photos | ☐ | | |
| Add logo and cover image | `public/images/zenith-logo.png` is the current site logo; a wider cover image should be sourced separately (GBP cover images need a different aspect ratio than the site's square logo) | ☐ | | |
| Request authentic customer reviews | Only from real clients/projects. See `KUWAIT-AUTHORITY-BUILDING-PLAN.md` for the outreach approach — do not use review-gating or incentivized reviews, both against Google's policy | ☐ | | |
| Respond professionally to all reviews (positive and negative) | — | ☐ | Ongoing | |
| Keep information consistent with the website | Re-check NAP fields above whenever `site.ts` changes | ☐ | Ongoing | |
| Review Business Profile performance/insights monthly | Track alongside Search Console (see `SEO-LAUNCH-RUNBOOK.md` step 20) | ☐ | Ongoing | |

## Explicitly do not

- Do not create a second Google Business Profile for any individual brand (Cisco, Fortinet, etc.) — one profile for Zenith Line Co. is correct. Brand pages are website content, not separate businesses.
- Do not add brand or service keywords into the business name field — this is against Google's guidelines and risks a suspension.
- Do not post or solicit reviews that reference an "authorized partnership" with any brand unless that status is genuinely confirmed (see `BRAND-CONTENT-REVIEW.md`) — a customer review claiming authorization the business doesn't have is a real liability, not just an SEO issue.
