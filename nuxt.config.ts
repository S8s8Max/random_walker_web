// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  ssr: false,
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify", "chart.js"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
