// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', "nuxt-primevue"],
  css: ["primevue/resources/themes/lara-light-blue/theme.css", "~/assets/css/main.css"],
  typescript: {
    strict: true,
  },
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      exclude: ["Editor", "Chart"]
    }
  },
})
