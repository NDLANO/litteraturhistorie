import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
import TimeLine from "@/views/TimeLine.vue";

const routes = [
  // * If no language code param is added, reroute to bokmål (/nb)
  {
    path: "/",
    name: "Landing",
    redirect: "/nb",
  },
  // * All paths have language code (nb or nn) as the first param
  {
    path: "/:lang/",
    name: "Home",
    component: TimeLine,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
