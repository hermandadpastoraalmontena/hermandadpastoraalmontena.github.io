// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://sergioguri00.github.io',
  base: '/hermandadpastoraalmontena',
  integrations: [tailwind()]
})