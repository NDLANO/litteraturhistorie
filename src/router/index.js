import { createRouter, createWebHashHistory } from "vue-router";
import Books from "./books";
import Periods from "./periods";

import Timeline from "@/views/Timeline.vue";

import CopyrightNB from "@/views/CopyrightNB.vue";
import CopyrightNN from "@/views/CopyrightNN.vue";

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
    component: Timeline,
  },
  {
    path: "/nn/",
    name: "HomeNN",
    component: Timeline,
  },
  {
    path: "/nb/Opphavsrett/",
    name: "CopyrightNB",
    component: CopyrightNB,
  },
  {
    path: "/nn/Opphavsrett/",
    name: "CopyrightNN",
    component: CopyrightNN,
  },
  ...Books,
  ...Periods,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
