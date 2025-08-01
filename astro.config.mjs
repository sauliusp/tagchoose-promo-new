// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Add the 'site' property here
  site: 'https://tagchoose.site', 
  
  integrations: [tailwind()],
});