import Vue from "vue";
import Router from "vue-router";
import login from "./login";


Vue.use(Router);

const routes = [
  login,
  {
    path: "/404",
    component: () => import("../pages/common/NotFind/NotFind.vue")
  },
  {
    path: "**",
    redirect: "/404"
  }
];

export default new Router({
  mode: "history",
  routes
});

