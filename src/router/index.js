import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/home/index.vue";
import book from "./modules/book";
import user from "./modules/user"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"/book",
    name: "Home",
    // component: Home,
  },
  ...book,
  ...user,
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/index.vue"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
