// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@primevue/nuxt-module",
    "@element-plus/nuxt",
    "nuxtjs-naive-ui",
    "@vueuse/nuxt",
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
})
