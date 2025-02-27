// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@vueuse/nuxt"],
  devtools: { enabled: true },
  ssr: false,
  compatibilityDate: "2025-02-27",
})
