import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://andreicarvalho.pages.dev",
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    // English at the root, Portuguese under /pt/. No redirect page at /,
    // which in a static build is a 2-second meta refresh.
    routing: { prefixDefaultLocale: false }
  },
  build: { format: "directory" }
});
