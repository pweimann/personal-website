import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    Roboto: true
  },
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
})
