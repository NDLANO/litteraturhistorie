import TimeLine from "@/views/TimeLine.vue";

export default [
  {
    path: "/nn/periods/norron/",
    name: "NorronNN",
    components: {
      default: TimeLine,
      books: () =>
        import(/* webpackChunkName: "beowulfnn" */ "../periods/norron/NorronNN.vue"),
    },
  },
  {
    path: "/nb/periods/norron/",
    name: "NorronNB",
    components: {
      default: TimeLine,
      books: () =>
        import(/* webpackChunkName: "beowulfnb" */ "../periods/norron/NorronNB.vue"),
    },
  },
];
