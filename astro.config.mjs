// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

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
  vite: {
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
  },
  integrations: [
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
