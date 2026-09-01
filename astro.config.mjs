import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zenithlinekw.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: { build: { cssMinify: true } }
});
