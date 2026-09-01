# Zenith Line Kuwait Website

Production-ready Astro website for Zenith Line Co., Kuwait. The site presents all company services across construction, structures, HVAC, telecom, IT, trading, logistics, engineering and technical supply, with service-specific WhatsApp enquiry journeys.

## Requirements

- Node.js 22 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

## Production validation

```bash
npm run build
npm run validate
```

The static production output is created in `dist/`.

## Vercel deployment

1. Push the project to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel should detect Astro automatically.
4. Use `npm run build` as the build command and `dist` as the output directory if not detected.
5. Add `zenithlinekw.com` and configure the production DNS.
6. Verify every old URL redirect before switching the domain.

No database, server runtime or environment variable is required for the current WhatsApp-based enquiry workflow.

## Primary editable content

- `src/data/site.ts` — company details, contact information, hero slides, projects, clients and product groups
- `src/data/services.ts` — all service content, FAQs and WhatsApp messages
- `src/styles/global.css` — design tokens, layout, responsive states and motion
- `public/images/` — website image assets
- `public/downloads/` — downloadable company profile

## Search and conversion setup after deployment

- Add the final domain to Google Search Console and Bing Webmaster Tools.
- Submit `https://zenithlinekw.com/sitemap-index.xml`.
- Add GA4 only after the client supplies the measurement ID and approves analytics.
- Configure WhatsApp-click and form-submit conversion events.
- Align the website name, address and primary phone with the verified Google Business Profile.

Review `CONTENT-REVIEW.md` before production launch.
