// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://hermandadpastoraalmontena.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'cat'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind()]
})