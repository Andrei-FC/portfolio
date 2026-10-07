import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://andreicarvalho.pages.dev",
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true }
  },
  build: { format: "directory" }
});
