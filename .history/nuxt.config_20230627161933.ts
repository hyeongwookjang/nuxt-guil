import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app : {
    head: {
      title: 'Nuxt course on Youtube',
      meta: [
        { name: 'description', 
          content: 'My amazing site.' }
      ],
      charset: 'utf-8',
    }

  },
  alias: {
    // assets: "/<rootDir>/assets"
    // "@": resolve(__dirname, "/")
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  css: [
    "~/assets/css/main.scss"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,

  /**
   * routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/products/**': { swr: true },
    // Blog post generated on-demand once until next deploy
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/api/**': { cors: true },
    // Redirects legacy urls
    '/old-page': { redirect: '/new-page' }
  },
   */

  devtools: { enabled: true }
})
