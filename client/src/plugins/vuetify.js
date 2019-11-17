import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify, {
  theme: {
    primary: "#14191C",
    secondary: "#192227",
    accent: "#08070F",
    error: "#45C728",
    warning: "#4A4F55",
    info: "#396893",
    success: "#4caf50"
  },
  icons: {
    iconfont: "mdi" // default - only for display purposes
  }
});

export default new Vuetify({});
