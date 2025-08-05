// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sauliusp.github.io', 
  
  integrations: [tailwind()],

  redirects: {
    '/technical-details': '/updates'
  }
});