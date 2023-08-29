// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        dark: false,

        colors: {
          background: "#ffffff",
          surface: "#ffffff",
          "surface-variant": "#004D40",
          primary: "#00695C",
          "primary-darken-1": "#004D40",
          secondary: "#A42D2A",
          "secondary-darken-1": "#570200",
          third: "#546E7A",
          error: "#C85350",
          info: "#2196F3",
          success: "#317679",
          warning: "#C8A050",
        },
      },
      dark: {
        dark: true,

        colors: {
          background: "#263238",
          surface: "#263238",
          "surface-variant": "#37474F",
          primary: "#FF6D00",
          "primary-darken-1": "#E65100",
          secondary: "#00695C",
          "secondary-darken-1": "#004D40",
          third: "#FFC107",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
  components: {
    ...components,
    ...directives,
  },
});
