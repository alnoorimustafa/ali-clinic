// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura"

export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@primevue/nuxt-module", "@element-plus/nuxt"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
})
