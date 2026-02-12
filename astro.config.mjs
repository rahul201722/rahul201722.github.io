import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rahul201722.github.io',
  integrations: [tailwind()],
});
