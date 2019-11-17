import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import "@babel/polyfill";
import "./plugins/vuetify";

Vue.config.productionTip = false;
axios.defaults.baseURL =
  "http://www.omdbapi.com/?apikey=c0add7be&page=1&type=movie&Content-Type=application/json";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
