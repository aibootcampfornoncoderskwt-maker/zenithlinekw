# Repository Guidelines

## Project Structure & Module Organization

This is a static Astro site. Routes live in `src/pages/`; dynamic service pages use `src/pages/services/[slug].astro`. Reusable UI belongs in `src/components/`, while `src/layouts/BaseLayout.astro` provides the shared shell. Keep business content in `src/data/` and site-wide styling in `src/styles/global.css`. Store images, brand SVGs, downloads, and crawler files under `public/`. The `scripts/` directory contains production checks, and `docs/` holds design and SEO guidance. Astro writes output to `dist/`; do not edit generated files.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies. Node.js 22 or newer is required.
- `npm run dev` starts Astro's local development server with hot reload.
- `npm run check` runs Astro and strict TypeScript diagnostics.
- `npm run build` checks the project, then creates the static site in `dist/`.
- `npm run preview` serves the production build locally for final review.
- `npm run validate` inspects built HTML, links, JSON-LD, and assets. Run it after `npm run build`.

## Coding Style & Naming Conventions

Follow the existing two-space indentation, semicolons, and single-quoted JavaScript/TypeScript strings. TypeScript extends Astro's strict configuration; define explicit types for shared content and component props. Name Astro components in PascalCase (`ServiceCard.astro`), routes and asset files in lowercase kebab-case, and variables/functions in camelCase. Keep URLs trailing-slash compatible and provide meaningful image `alt` text. No standalone formatter or linter is configured, so match nearby code and rely on `npm run check`.

## Testing Guidelines

There is no unit-test framework or coverage threshold. Treat `npm run check`, `npm run build`, and `npm run validate` as the required verification suite. For visual or content changes, inspect affected routes with `npm run preview`, including mobile layouts, navigation, WhatsApp links, and the 404 page.

## Commit & Pull Request Guidelines

Git history is not included in this checkout, so no repository-specific commit convention can be inferred. Use short, imperative, scoped subjects such as `Update civil works service copy`. Keep commits focused. Pull requests should summarize the change, list verification commands, link relevant issues, and include before/after screenshots for layout or styling work. Call out content, SEO, redirects, or asset changes explicitly, and review `CONTENT-REVIEW.md` before production-facing releases.

## Security & Configuration

Do not commit credentials or analytics IDs. The current site requires no runtime environment variables. Update the canonical domain in `astro.config.mjs` and deployment behavior in `vercel.json` deliberately, then verify sitemap and redirects after changes.
