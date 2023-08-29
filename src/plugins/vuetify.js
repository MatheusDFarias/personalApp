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
          surface: "#f2f2f2",
          "surface-variant": "#004D40",
          primary: "#263238",
          secondary: "#43A047",
          "secondary-darken-4": "#2E7D32",
          third: "#37474F",
          error: "#C85350",
          info: "#2196F3",
          success: "#317679",
          warning: "#C8A050",
        },
      },
      dark: {
        dark: true,

        colors: {
          background: "#212121",
          surface: "#212121",
          "surface-variant": "#37474F",
          primary: "#ECEFF1",
          "primary-darken-1": "#CFD8DC",
          secondary: "#F57C00",
          "secondary-darken-4": "#E65100",
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
