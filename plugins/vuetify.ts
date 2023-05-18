import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        dark: {
          colors: {
            primary: "#E64A19",
            secondary: '#FF7043',
            background: '#212121',
          }
        },
        light: {
          colors: {
            primary: '#512DA8',
            secondary: '#26A69A',
            background: '#EEEEEE',
          }
        }
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});