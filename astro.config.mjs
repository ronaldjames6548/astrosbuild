import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";
import AstroPWA from "@vite-pwa/astro";
import { workbox } from "@vite-pwa/astro";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
	site: "https://astros.zank.studio",
	output: 'hybrid',
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
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
    workbox({
      workbox: {
        globDirectory: '.vercel/output/static',
        globPatterns: ['assets/*.js'],
        globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js'],
      },
    }),
  devOptions: {
    enabled: false,
    navigateFallbackAllowlist: [/^\/404$/],
    suppressWarnings: true,
  },
}),
		icon(),
	],
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			// This adds links to headings
			[rehypeAutolinkHeadings, autolinkConfig],
		],
	},
	experimental: {
		viewTransitions: true,
		clientPrerender: true,
		hybridOutput: true,
		contentCollectionCache: true
	},
});
