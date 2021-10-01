import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: () =>
      import("../views/Agenda.vue")

  },
  {
    path: "/community",
    name: "Community",
    component: () =>
      import("../views/Community.vue")
  },
  {
    path: "/extras",
    name: "Extras",
    component: () =>
      import("../views/Extras.vue")
  },
  {
    path: "/code-of-conduct",
    name: "Code",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CodeofConduct.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;
