export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.work": "Work",
    "nav.cases": "Cases",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "case.role": "Role",
    "case.scope": "Scope",
    "case.period": "Period",
    "case.platforms": "Platforms",
    "case.stories": "The remaining stories",
    "case.source": "Source",
    "card.cta": "View full case",
    "about.cv": "Download CV",
    "about.stories": "The three stories",
    "case.enlarge": "Tap to enlarge",
    "case.enlargeDesktop": "Click to enlarge",
    "case.swipe": "swipe",
    "lightbox.close": "Close",
    "lightbox.zoomIn": "Zoom in",
    "lightbox.zoomOut": "Zoom out",
    "footer.contact": "Contact",
    "footer.availability": "Open to Head of Design and Product Design, remote.",
    "footer.message": "Message",
    "footer.rights": "© 2026 Andrei Carvalho",
    "lang.self": "en-US",
    "lang.switch": "Mudar para português"
  },
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre mim",
    "nav.work": "Trabalho",
    "nav.cases": "Cases",
    "nav.contact": "Contato",
    "nav.menu": "Menu",
    "case.role": "Função",
    "case.scope": "Escopo",
    "case.period": "Período",
    "case.platforms": "Plataformas",
    "case.stories": "As outras histórias",
    "case.source": "Fonte",
    "card.cta": "Ver o case completo",
    "about.cv": "Baixar CV",
    "about.stories": "As três histórias",
    "case.enlarge": "Toque para ampliar",
    "case.enlargeDesktop": "Clique para ampliar",
    "case.swipe": "arraste",
    "lightbox.close": "Fechar",
    "lightbox.zoomIn": "Aproximar",
    "lightbox.zoomOut": "Afastar",
    "footer.contact": "Contato",
    "footer.availability": "Aberto a posições de Head of Design e Product Design, remoto.",
    "footer.message": "Mensagem",
    "footer.rights": "© 2026 Andrei Carvalho",
    "lang.self": "pt-BR",
    "lang.switch": "Switch to English"
  }
} as const;

export function t(locale: Locale) {
  return (key: keyof (typeof ui)["en"]) => ui[locale][key] ?? ui.en[key];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "pt" : "en";
}

/* The default locale lives at the root and the other one is prefixed. Keeping
   that in one place is what lets / be the English home itself rather than a
   page that redirects to it. */
export function localePath(locale: Locale, path = "/"): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}
