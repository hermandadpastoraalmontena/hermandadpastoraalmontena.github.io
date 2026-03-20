// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://hermandadpastoraalmontena.github.io",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "cat"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          cat: "ca-ES",
        },
      },
    }),
  ],
});
