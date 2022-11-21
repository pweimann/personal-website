// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  googleFonts: {
    families: {
      Roboto: true,
      Geramond: true
    }
  }
})
