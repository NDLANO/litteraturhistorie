import { createRouter, createWebHashHistory } from "vue-router";
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
  {
    path: "/nn/books/beowulf/",
    name: "BeowulfNN",
    components: {
      default: TimeLine,
      books: import(
        /* webpackChunkName: "beowulfnn" */ "../books/nn/Beowulf.vue"
      ),
    },
  },
  {
    path: "/nb/books/beowulf/",
    name: "BeowulfNB",
    components: {
      default: TimeLine,
      books: import(
        /* webpackChunkName: "beowulfnb" */ "../books/nb/Beowulf.vue"
      ),
    },
  },
  {
    path: "/nn/periods/norron/",
    name: "NorronNN",
    components: {
      default: TimeLine,
      books: import(
        /* webpackChunkName: "beowulfnn" */ "../periods/nn/Norron.vue"
      ),
    },
  },
  {
    path: "/nb/periods/norron/",
    name: "NorronNB",
    components: {
      default: TimeLine,
      books: import(
        /* webpackChunkName: "beowulfnb" */ "../periods/nb/Norron.vue"
      ),
    },
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
