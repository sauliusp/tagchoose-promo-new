// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const base = process.env.ASTRO_BASE || '/';

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || 'http://localhost:4321',
  base: base,
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/technical-details': {
      status: 301,
      destination: `${base.replace(/\/$/, '')}/updates`
    }
  }
});