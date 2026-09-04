# Analytics & Conversion Tracking Setup

Describes the conversion-tracking code already implemented in this build, its exact behavior, and what a client or developer must supply before it activates. **No analytics script currently ships to any visitor** — `BaseLayout.astro` only renders the GA4 snippet and its event-bridge script when `PUBLIC_GA_MEASUREMENT_ID` is set in the deployment environment, and it is not set anywhere in this repository. This file supersedes `SEO-MEASUREMENT-PLAN.md`'s event table (kept for its narrative context, but the event names below are the current, correct ones).

## How activation works

1. Copy `.env.example` to `.env` (already git-ignored) or set the equivalent variable directly in the Vercel project's Environment Variables.
2. Set `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to the real GA4 Measurement ID from Google Analytics → Admin → Data Streams.
3. Redeploy. `BaseLayout.astro` then renders the standard `gtag.js` loader and a small (~30-line) vanilla-JS event bridge — no tag-management library, no third-party script beyond `googletagmanager.com`.
4. With the variable unset (the current, pre-launch state), none of this code is rendered at all — `{gaMeasurementId && ...}` in `BaseLayout.astro` is a build-time conditional, so an unset environment variable means zero analytics markup, zero `googletagmanager.com` reference, and zero tracking script reaches the browser. Confirmed by inspecting the current `dist/` build: no such reference exists anywhere in it. `scripts/validate-site.mjs` separately asserts that *if* the event-bridge script is ever present in a build, it fires exactly the seven event names documented below — a permanent consistency check that catches event-name drift whether or not GA4 is currently enabled.

## Consent / privacy decision — required before setting the ID

Per this task's explicit instruction not to enable a tracker without an applicable consent decision: confirm with the client (and, if applicable, legal review) whether Kuwait/regional expectations or the client's own policy require a consent banner or opt-out mechanism before `PUBLIC_GA_MEASUREMENT_ID` is set in production. `/privacy/` currently states the site "may use privacy-conscious traffic and conversion measurement" — re-read that exact wording against whatever is actually enabled before flipping the switch, and update it if a consent mechanism is added.

## The seven tracked events

All seven fire only through real DOM interaction — no synthetic or pre-fired events, no double-counted pageviews (`gtag('config', ...)` handles standard pageview tracking on its own; the bridge only adds these):

| Event | Fires on | Present on | Parameters | What it means |
|---|---|---|---|---|
| `whatsapp_click` | Click on any `<a data-conversion="whatsapp">` | Every page with a WhatsApp CTA — home, service, brand, telecom hub, contact, products & supply, brands directory, header, footer | `cta_location`, `service` (when applicable), `brand` (when applicable) | Visitor opened WhatsApp with a prefilled message |
| `phone_click` | Click on any `<a href="tel:...">` | Header utility bar, footer, contact page, every service/brand enquiry panel | `link_url` | Visitor tapped/clicked to call |
| `email_click` | Click on any `<a href="mailto:...">` | Footer, contact page, products & supply, privacy page | `link_url` | Visitor opened a pre-addressed email |
| `enquiry_start` | First focus inside any `[data-whatsapp-form]` element (fires once per form per page view) | Every page carrying the structured enquiry form — service pages, brand pages, telecom hub, contact, products & supply, homepage | `service` or `brand`, whichever context the form is in | Visitor began filling in the structured enquiry form (a funnel-entry signal, distinct from actually finishing it) |
| `enquiry_submit` | The `zenith:conversion` custom event, dispatched by `EnquiryForm.astro` after client-side validation passes and immediately before the `wa.me` tab opens | Same pages as `enquiry_start` | `service` or `brand` | Visitor completed the structured form and it opened WhatsApp with the compiled message |
| `profile_download` | Click on any `<a href="....pdf">` | Footer (site-wide), `/company-profile/`, `/about/`, `/projects/` | `link_url` | Visitor downloaded the company profile PDF — a mid-funnel trust signal |
| `instagram_click` | Click on any `[data-social="instagram"]` element | Header mobile drawer, footer, contact page | `cta_location` (from `data-social-location`) | Visitor left the site for the official Instagram profile |

## Every generated WhatsApp message already includes the required context

Independently of GA4, every structured enquiry (service, brand, and telecom-hub forms) already produces a WhatsApp message containing:

- The relevant service or brand name
- Every user-entered field (name, company, mobile, Kuwait area, and service-specific fields such as property type, size, existing system, timeline, brand preference)
- `Consent: Confirmed` (service-context forms) or the equivalent brand-context framing
- `Source page: https://zenithlinekw.com/...` — the exact absolute canonical URL of the page the enquiry was made from

This is enforced on every build by `scripts/validate-site.mjs` (message-content checks for service pages, the telecom hub, and — new in this pass — every brand page's own WhatsApp CTAs, scoped to exclude the generic sitewide header/footer quick-chat buttons, which are intentionally generic and carry no page-specific context by design).

## What is explicitly not implemented, and why

- **No Google Tag Manager.** One destination (GA4) and seven simple events don't need an extra layer of indirection.
- **No Meta Pixel or any other tracker.** None was requested, and none has a client-provided ID.
- **No consent-mode/cookie-banner logic.** This is a policy decision for the client, not something to default into code (see above).
- **No page-view double counting** beyond `gtag`'s own standard pageview call.

## Required from the client before this can go live

| Item | Status |
|---|---|
| Real GA4 Measurement ID (`G-XXXXXXXXXX`) | Not supplied — placeholder only in `.env.example` |
| Consent/privacy decision for the Kuwait market | Not confirmed — see "Consent / privacy decision" above |
| Confirmation that `/privacy/`'s existing analytics wording still matches what gets enabled | Pending the above |
| (Optional) Marking `whatsapp_click`, `enquiry_submit`, and `phone_click` as GA4 "key events" | Do once live, in GA4 → Admin → Events |

## Where to review once live

GA4 → Reports → Engagement → Events, filtered to the seven event names above. Cross-reference `enquiry_start` vs. `enquiry_submit` to see form completion rate, and `whatsapp_click` vs. `enquiry_submit` to separate direct-link conversions from form-driven ones.
