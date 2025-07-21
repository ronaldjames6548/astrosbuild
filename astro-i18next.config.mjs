
// astro-i18next.config.mjs

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  // Default language (used as fallback)
  defaultLocale: 'en',

  // All supported locales (must match your /src/pages/[locale]/ folders)
  locales: [
    'en', 'it'
  ],

  // Optional: Customize URL routes per locale
  routes: {
    '/about': {
      en: '/about',
      it: '/chi-siamo'
      
    },
    '/contact': {
      en: '/contact',
      it: '/contatti'
    },
    '/pricing': {
      en: '/pricing',
      it: '/prezzi'
      
    },
    '/blog': {
      en: '/blog',
      it: '/blog'
      
    }
  },

  // Show default locale in URLs? Set false to have `/` = English
  showDefaultLocale: false,

  // Base URL for hreflang links (no trailing spaces!)
  baseUrl: 'https://astrosbuild.vercel.app ',

  // Backend config: where to load translation JSON files
  backend: {
    loadPath: './src/locales/{{lng}}/{{ns}}.json',
  },

  // i18next options
  i18next: {
    interpolation: {
      escapeValue: false, // Safe with React/Astro components
    },
  },
};