// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

export default defineConfig({
  site: site.url || undefined,
  // La sitemap richiede l'indirizzo pubblico: si attiva quando è impostato.
  integrations: site.url
    ? [sitemap({ i18n: { defaultLocale: 'it', locales: { it: 'it-IT', en: 'en-GB' } } })]
    : [],
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    routing: { prefixDefaultLocale: false },
  },
});
