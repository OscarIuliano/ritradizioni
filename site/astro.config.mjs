// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
