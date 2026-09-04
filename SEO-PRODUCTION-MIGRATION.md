# Production Domain Migration — Old Site → New Site

`https://zenithlinekw.com/` currently serves an older, much smaller Zenith Line website. This file records every URL discovered on that live production site, maps each to its destination on the new Astro build, and states the exact mechanism (direct match vs. redirect) so nothing Google already knows about silently 404s after deployment.

## 1. Old-site discovery method and evidence

Fetched directly from the live production domain on the date of this audit (not assumed, not carried over from an older note):

- `https://zenithlinekw.com/` — homepage, links to `/`, `/about`, `/contact` in both nav and footer.
- `https://zenithlinekw.com/sitemap.xml` — references `http://zenithlinekw.com/`, `http://zenithlinekw.com/about`, `http://zenithlinekw.com/contact` (note: **HTTP**, not HTTPS, and **no trailing slash** — both defects of the old site, not something to replicate).
- `https://zenithlinekw.com/robots.txt` — `User-agent: * / Allow: /` and `Sitemap: http://zenithlinekw.com/sitemap.xml`.

No other URLs were discoverable through the old site's own navigation, footer, or sitemap. This matches the three URLs the task brief states Google already knows (`/`, `/about`, `/contact`) — confirmed independently, not assumed.

The old site also links a Facebook page (`facebook.com/profile.php?id=61574400251203`) and the same official Instagram (`@znthline`) already used on the new site. Facebook is not part of the confirmed business information for this project and has not been added anywhere — flagging its existence here only so the client can decide separately whether to carry it forward; this is a content/business decision, not a technical migration item.

## 2. Migration table

| Old URL | New URL | Action | Status | Reason |
|---|---|---|---|---|
| `http://zenithlinekw.com/` | `https://zenithlinekw.com/` | Direct match — same path, protocol upgraded to HTTPS | Ready (HTTPS upgrade is automatic per Vercel domain, see §3) | Homepage exists at the identical path on the new site; no redirect needed beyond the standard HTTP→HTTPS upgrade every Vercel custom domain gets automatically |
| `http://zenithlinekw.com/about` | `https://zenithlinekw.com/about/` | Automatic 308 redirect (trailing slash) already provided by `vercel.json`'s `"trailingSlash": true` | Ready — no code change required | The new site's own trailing-slash policy already redirects any non-trailing-slash request to the canonical trailing-slash URL at the edge; `/about/` has real, equivalent content (`src/pages/about.astro`), so this is a same-content path change, not a disappearing page |
| `http://zenithlinekw.com/contact` | `https://zenithlinekw.com/contact/` | Automatic 308 redirect (trailing slash), same mechanism as above | Ready — no code change required | `/contact/` has real, equivalent content (`src/pages/contact.astro`) |
| `http://zenithlinekw.com/sitemap.xml` | `https://zenithlinekw.com/sitemap-index.xml` | Filename changed (old site used a single flat `sitemap.xml`; the new site uses `@astrojs/sitemap`'s standard `sitemap-index.xml` → `sitemap-0.xml` pair) | No redirect added | A sitemap file is a discovery mechanism, not indexable content — Google does not need `sitemap.xml` itself to keep resolving; `robots.txt` on the new site already points every crawler at the correct new sitemap URL, which is the actual mechanism search engines use to find it |
| Any other old-site path (none discovered) | — | — | N/A | No other page was found in the old site's nav, footer, or sitemap; if the client is aware of any other historical URL not listed here, it should be supplied so it can be mapped explicitly rather than left to fall through to the 404 page |

## 3. What still requires a Vercel dashboard action (cannot be expressed in this repository)

These are **domain-level** settings, not `vercel.json` redirect rules — Vercel resolves them before any repository code runs, so they must be configured in the Vercel project's **Settings → Domains** panel by whoever holds deployment access. Documented here rather than invented as speculative `vercel.json` config, per this task's explicit instruction not to invent configuration that cannot be verified against the real project.

| Requirement | Exact action | Why this can't live in the repo |
|---|---|---|
| `http://zenithlinekw.com/*` → `https://zenithlinekw.com/*` | No action needed beyond adding the domain normally — Vercel issues an automatic, permanent HTTP→HTTPS upgrade for every verified custom domain, preserving the path and query string. Confirm this after deployment by requesting `http://zenithlinekw.com/about` and checking the response is a redirect to `https://zenithlinekw.com/about/`, not a 200 or an error. | This is a platform-level behavior of Vercel's edge network, not something `vercel.json` configures or overrides |
| `http://www.zenithlinekw.com/*` → `https://zenithlinekw.com/*` | Add `www.zenithlinekw.com` as a domain on the Vercel project (Settings → Domains → Add), then use Vercel's built-in **"Redirect to another domain"** toggle to point it at the apex `zenithlinekw.com`, preserving the path. Vercel applies this as a permanent redirect and combines it with the automatic HTTPS upgrade, so `http://www.…` and `https://www.…` both resolve correctly in one hop. | Domain aliasing and inter-domain redirects are configured against the Vercel project's domain registry, which only exists once the domain is attached in the dashboard — there is nothing in this repository to point at |
| `https://www.zenithlinekw.com/*` → `https://zenithlinekw.com/*` | Covered by the same dashboard redirect above — no separate action | — |

**Do not** attempt to replicate the www→apex redirect as a `vercel.json` `redirects` rule using a `has`/host match unless the dashboard approach is confirmed unavailable — the dashboard toggle is Vercel's documented, zero-maintenance mechanism for exactly this case, and duplicating it in code risks a conflicting or redundant rule.

Every canonical URL, Open Graph URL, sitemap entry, and structured-data URL already generated by this codebase assumes the apex `https://zenithlinekw.com` host (verified — see the "Domain/canonical findings" section of `CLIENT-SEO-HANDOVER.md`). Once the dashboard action above is complete, that assumption is fully correct in production, in both directions.

## 4. Pre-existing internal redirects (unrelated to the old production site, listed for completeness)

`vercel.json` already carries four redirects from an earlier restructuring of *this* Astro project (not from the old live site above). They were reviewed as part of this migration audit and are single-hop, non-chained, and do not point at any other redirect's source (verified by an automated `scripts/validate-site.mjs` check that fails the build on a chain, loop, or a redirect source that is also a live route):

| Source | Destination | Status |
|---|---|---|
| `/home` | `/` | Confirmed single-hop, permanent (301) |
| `/gallery` | `/projects/` | Confirmed single-hop, permanent (301) |
| `/our-divisions` | `/services/` | Confirmed single-hop, permanent (301) |
| `/services/voip-voice` and `/services/voip-voice/` | `/services/pbx-telephone-exchange/` | Confirmed single-hop, permanent (301) — **preserved unchanged** per this task's explicit instruction; the retired VoIP route's content and search intent were consolidated into the PBX & IP Telephone page (see `SEO-KEYWORD-MAP.md`) |

## 5. Redirect-safety guarantees (now enforced automatically on every build)

`scripts/validate-site.mjs` fails the build if any of the following becomes true in the future:

- A `vercel.json` redirect source is also a real generated route (ambiguous routing).
- A redirect is not marked `permanent: true` (a migrated URL must use 301/308, never a temporary redirect).
- A redirect's destination is itself another redirect's source (a chain).
- A redirect points at itself (a loop).
- The XML sitemap contains a redirect-source URL (a redirected URL must never be presented to search engines as an indexable page).
- The retired VoIP route is missing its permanent redirect, or the redirect's destination changes.

## 6. What this migration does not do

- It does not redirect every old or hypothetically-missing URL to the homepage — only the three confirmed old URLs are mapped, each to its real content equivalent (§2). A visitor or crawler requesting any other historical path will correctly receive the genuine 404 page, not a misleading redirect to unrelated content.
- It does not change `astro.config.mjs`, any approved route, or any content structure — every mapping in §2 relies on functionality that already exists in this codebase (`trailingSlash: true`, the existing VoIP redirect, the standard Vercel HTTPS upgrade).
