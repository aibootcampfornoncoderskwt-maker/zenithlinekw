# Measurement Plan

Describes the conversion events wired up in this pass, all implemented via a single small vanilla-JS listener block in `BaseLayout.astro` (no tag-management library, no framework). The listener block is only rendered — and therefore only executes — when `PUBLIC_GA_MEASUREMENT_ID` is set; with no value set (the default, pre-launch state), zero analytics code ships to the browser.

## How it works

1. `.env` (never committed — see `.env.example`) optionally sets `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`.
2. When set, `BaseLayout.astro` loads the standard GA4 `gtag.js` snippet and a small event-bridge script.
3. The bridge script listens for real DOM events on the *existing* `data-conversion`, `data-service`, `data-brand`, and `data-cta-location` attributes already present across every service and brand page (from earlier work) — no new markup or attributes were added to any page to support this.
4. It also listens for the `zenith:conversion` `CustomEvent` that `EnquiryForm.astro` already dispatches on WhatsApp-form submission (both service and brand contexts) — this event existed before this task and is now consumed, not newly created.

## Events

| Event | Trigger | Page type(s) | Context captured | Conversion meaning | Where reviewed |
|---|---|---|---|---|---|
| `whatsapp_click` | Click on any `<a data-conversion="whatsapp">` | Every page carrying a WhatsApp CTA (home, service, brand, contact, products-supply, brands directory) | `cta_location` (e.g. "hero", "after-scope", "after-factors", "final-enquiry"), `service` (service short title, when applicable), `brand` (brand name, when applicable) | User opened WhatsApp with a prefilled enquiry message | GA4 → Events report, segment by `cta_location` to see which CTA position converts best per page type |
| `whatsapp_form_submit` | `zenith:conversion` custom event (dispatched by `EnquiryForm.astro` after client-side validation passes and before `wa.me` opens) | Every page with the enquiry form (service pages, brand pages, `/contact/`) | `service` or `brand`, whichever context the form was in | User completed the structured enquiry form and it opened WhatsApp | GA4 → Events, cross-reference with `whatsapp_click` to separate form-driven vs. direct-link conversions |
| `phone_click` | Click on any `<a href="tel:...">` | Every page (header utility bar, footer, contact page all carry tel: links) | `link_url` (the tel: URI clicked) | User tapped/clicked to call | GA4 → Events, useful mobile-specific signal |
| `company_profile_download` | Click on any `<a href="....pdf">` | `/company-profile/`, footer (site-wide) | `link_url` | User downloaded the company profile PDF | GA4 → Events, a mid-funnel trust/interest signal |

## Explicitly not implemented

- **No page view double-counting**: `gtag('config', ...)` handles standard pageview tracking on its own; the bridge script only adds the four custom events above.
- **No consent-mode / cookie-banner logic was added.** Phase 12 explicitly says to "consider applicable consent/privacy requirements before enabling analytics" — this is a policy decision for the client (and possibly a legal reviewer), not something to default into code. Before setting `PUBLIC_GA_MEASUREMENT_ID` in production, confirm whether Kuwait/regional privacy expectations or the client's own policy require a consent mechanism first, and update `/privacy/` accordingly (it currently already states the site "may use privacy-conscious traffic and conversion measurement" — re-read that page's exact wording against whatever is actually enabled before launch).
- **No heavy tag manager** (e.g. Google Tag Manager) — a direct `gtag.js` snippet was used since only one destination (GA4) and four simple events are needed; introducing GTM would add an extra script and indirection for no current benefit.

## Where this will be reviewed

Once `PUBLIC_GA_MEASUREMENT_ID` is set and the site is live, review in GA4: Reports → Engagement → Events, and optionally mark `whatsapp_click`, `whatsapp_form_submit`, and `phone_click` as **key events** (GA4's term for what used to be "conversions") so they surface in the default reporting views and any Google Ads integration, if one is added later.
