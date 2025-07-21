/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["it"],

  // Generate pages for default locale without language suffix in URL
  generateDefaultLanguagePage: true,
  defaultLangHasNoSuffix: true,

  // Set base URL for hreflang canonical URLs
  baseUrl: "https://astrosbuild.vercel.app",

  // Map locales to their route overrides (optional)
  routeOverrides: {
    en: "", // Root is English
  },

  // i18next config
  i18next: {
    interpolation: {
      escapeValue: false, // React-like escaping
    },
  },

  // Backend plugin to load translation files
  i18nextPlugins: {
    backend: {
      loadPath: "./src/locales/{{lng}}/{{ns}}.json",
    },
  },
};