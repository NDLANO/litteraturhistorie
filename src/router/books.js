import TimeLine from "@/views/TimeLine.vue";

export default [
  {
    path: "/nn/books/beowulf/",
    name: "BeowulfNN",
    meta: {
      year: 800,
    },
    components: {
      default: TimeLine,
      books: () =>
        import(/* webpackChunkName: "beowulfnn" */ "../books/beowulf/BeowulfNN.vue"),
    },
  },
  {
    path: "/nb/books/beowulf/",
    name: "BeowulfNB",
    meta: {
      year: 800,
    },
    components: {
      default: TimeLine,
      books: () =>
        import(/* webpackChunkName: "beowulfnb" */ "../books/beowulf/BeowulfNB.vue"),
    },
  },
  {
    path: "/nn/books/edda/",
    name: "EddaNN",
    meta: {
      year: 900,
    },
    components: {
      default: TimeLine,
      books: () =>
        import(/* webpackChunkName: "EddaNN" */ "../books/edda/EddaNN.vue"),
    },
  },
  {
    path: "/nb/books/edda/",
    name: "EddaNB",
    meta: {
      year: 900,
    },
    components: {
      default: TimeLine,
      books: () =>
        import(/* webpackChunkName: "EddaNB" */ "../books/edda/EddaNB.vue"),
    },
  },
];
