import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        grey: "#363636",
        charcoal: "#425b66", // ##577684
        persianGrey: "#2a9d8f", // #2a9d8f
        orange: "#e9c46a", // #3F51B5
        brown: "#f4a261", // #3F51B5
        sienna: "#e76f51" // #3F51B5
      }
    }
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});
