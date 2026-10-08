import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://andreicarvalho.com",
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    // English at the root, Portuguese under /pt/. No redirect page at /,
    // which in a static build is a 2-second meta refresh.
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    // The same i18n shape the routing uses, so each entry carries its
    // alternate rather than the two languages looking like duplicates.
    sitemap({ i18n: { defaultLocale: "en", locales: { en: "en", pt: "pt-BR" } } })
  ],
  build: { format: "directory" }
});
