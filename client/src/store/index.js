import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// const key = 'c0add7be';
// const defaultTitle = 'Guardians of the Galaxy Vol. 2';
// const url = `https://www.omdbapi.com/?apikey=${key}&t=`;

export default new Vuex.Store({
  // Management State on Globaly
  state: {},

  //
  actions: {},

  //
  mutations: {},

  //
  modules: {}
});
