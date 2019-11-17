import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Hdetail from "@/components/Home/Hdetail.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes
});

export default router;
