/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_BING_SITE_VERIFICATION?: string;
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
