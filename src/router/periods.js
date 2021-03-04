import TimeLine from "@/views/TimeLine.vue";

export default [
  {
    path: "/nn/periods/norron/",
    name: "NorronNN",
    components: {
      default: TimeLine,
      books: () =>
        import(/* webpackChunkName: "beowulfnn" */ "../periods/nn/Norron.vue"),
    },
  },
  {
    path: "/nb/periods/norron/",
    name: "NorronNB",
    components: {
      default: TimeLine,
      books: () =>
        import(/* webpackChunkName: "beowulfnb" */ "../periods/nb/Norron.vue"),
    },
  },
];
