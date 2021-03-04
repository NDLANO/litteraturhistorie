import TimeLine from "@/views/TimeLine.vue";

export default [
  {
    path: "/nn/books/beowulf/",
    name: "BeowulfNN",
    components: {
      default: TimeLine,
      books: () =>
        import(/* webpackChunkName: "beowulfnn" */ "../books/nn/Beowulf.vue"),
    },
  },
  {
    path: "/nb/books/beowulf/",
    name: "BeowulfNB",
    components: {
      default: TimeLine,
      books: () =>
        import(/* webpackChunkName: "beowulfnb" */ "../books/nb/Beowulf.vue"),
    },
  },
];
