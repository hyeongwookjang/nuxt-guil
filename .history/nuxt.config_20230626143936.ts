import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  

  devtools: { enabled: true }
})
