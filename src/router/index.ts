import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Application from "../Application.vue";
import Login from "../Login.vue";

Vue.use(VueRouter);

Vue.component("Login", Login);
Vue.component("Application", Application);

const routes: Array<RouteConfig> = [
  {
    path: "/main",
    name: "Main",
    component: Application
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    name: "404",
    component: { template: "<h2>404 - Not found</h2>" }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
