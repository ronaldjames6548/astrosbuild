import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";
import AstroPWA from "@vite-pwa/astro";
import vercel from "@astrojs/vercel"; // Updated import
import icon from "astro-icon";

export default defineConfig({
  site: "https://astros.zank.studio ",
  output: "server",
  adapter: vercel(),
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
  integrations: [
    tailwind(),
    sitemap(),
    astroI18next(),
    alpinejs(),
    AstroPWA({
      mode: "production",
      base: "/",
      scope: "/",
      includeAssets: ["favicon.svg"],
      registerType: "autoUpdate",
      manifest: {
        name: "Astros - Starter Template for Astro with Tailwind CSS",
        short_name: "Astros",
        theme_color: "#ffffff",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
        ]
      },
      workbox: {
        navigateFallback: "/404",
        globPatterns: ["assets/*.js"],
        globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"]
      },
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [/^\/404$/],
        suppressWarnings: true
      }
    }),
    icon()
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, autolinkConfig]
    ]
  },
  experimental: {
    viewTransitions: true
    
  }
});