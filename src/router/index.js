import { createRouter, createWebHashHistory } from "vue-router";
import Books from "./books";
import Periods from "./periods";

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
    path: "/nb/",
    name: "HomeNB",
    component: TimeLine,
  },
  {
    path: "/nn/",
    name: "HomeNN",
    component: TimeLine,
  },
  ...Books,
  ...Periods,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
