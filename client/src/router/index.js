import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Hdetail from "@/components/Home/Hdetail.vue";
import SearchMovie from "@/components/SearchMovie/SearchMovie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/movie/:id",
    name: "Hdetail",
    props: true,
    component: Hdetail
  },
  {
    path: "/search/:name",
    name: "SearchMovie",
    props: true,
    component: SearchMovie
  }
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes
});

export default router;
