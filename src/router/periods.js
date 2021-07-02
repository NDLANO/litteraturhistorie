import Timeline from "@/views/Timeline.vue";

export default [
  {
    path: "/nn/periods/norron",
    name: "NorronNN",
    meta: {
      title: "Norrøn tid",
      from: "800",
      to: "1350",
      color: "0xCC3300",
      fillColor: "0xe5997f",
      y: "0",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'norronnn' */ "../periods/norron/NorronNN.vue"
        ),
    },
  },
  {
    path: "/nb/periods/norron",
    name: "NorronNB",
    meta: {
      title: "Norrøn tid",
      from: "800",
      to: "1350",
      color: "0xCC3300",
      fillColor: "0xe5997f",
      y: "0",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'norronnb' */ "../periods/norron/NorronNB.vue"
        ),
    },
  },
  {
    path: "/nn/periods/humanisme",
    name: "HumanismeNN",
    meta: {
      title: "Humanisme og renessanse",
      from: "1350",
      to: "1600",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'humanismenn' */ "../periods/humanisme/HumanismeNN.vue"
        ),
    },
  },
  {
    path: "/nb/periods/humanisme",
    name: "HumanismeNB",
    meta: {
      title: "Humanisme og renessanse",
      from: "1350",
      to: "1600",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'humanismenb' */ "../periods/humanisme/HumanismeNB.vue"
        ),
    },
  },
  {
    path: "/nn/periods/barokk",
    name: "BarokkNN",
    meta: {
      title: "Barokk",
      from: "1600",
      to: "1700",
      color: "0xCC3300",
      fillColor: "0xe5997f",
      y: "0",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'barokknn' */ "../periods/barokk/BarokkNN.vue"
        ),
    },
  },
  {
    path: "/nb/periods/barokk",
    name: "BarokkNB",
    meta: {
      title: "Barokk",
      from: "1600",
      to: "1700",
      color: "0xCC3300",
      fillColor: "0xe5997f",
      y: "0",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'barokknb' */ "../periods/barokk/BarokkNB.vue"
        ),
    },
  },
  {
    path: "/nn/periods/opplysning",
    name: "OpplysningNN",
    meta: {
      title: "Klassisisme og opplysningstid",
      from: "1700",
      to: "1800",
      timeLabel: "1700-talet",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'opplysningnn' */ "../periods/opplysning/OpplysningNN.vue"
        ),
    },
  },
  {
    path: "/nb/periods/opplysning",
    name: "OpplysningNB",
    meta: {
      title: "Klassisisme og opplysningstid",
      from: "1700",
      to: "1800",
      timeLabel: "1700-tallet",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'opplysningnb' */ "../periods/opplysning/OpplysningNB.vue"
        ),
    },
  },
  {
    path: "/nn/periods/romantikk",
    name: "RomantikkNN",
    meta: {
      title: "Romantikk",
      from: "1800",
      to: "1850",
      color: "0xCC3300",
      fillColor: "0xe5997f",
      y: "0",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'romantikknn' */ "../periods/romantikk/RomantikkNN.vue"
        ),
    },
  },
  {
    path: "/nb/periods/romantikk",
    name: "RomantikkNB",
    meta: {
      title: "Romantikk",
      from: "1800",
      to: "1850",
      color: "0xCC3300",
      fillColor: "0xe5997f",
      y: "0",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'romantikknb' */ "../periods/romantikk/RomantikkNB.vue"
        ),
    },
  },
  {
    path: "/nn/periods/realisme",
    name: "RealismeNN",
    meta: {
      title: "Realisme og naturalisme",
      from: "1850",
      to: "1890",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'realismenn' */ "../periods/realisme/RealismeNN.vue"
        ),
    },
  },
  {
    path: "/nb/periods/realisme",
    name: "RealismeNB",
    meta: {
      title: "Realisme og naturalisme",
      from: "1850",
      to: "1890",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'realismenb' */ "../periods/realisme/RealismeNB.vue"
        ),
    },
  },
  {
    path: "/nn/periods/nyromantikk",
    name: "NyromantikkNN",
    meta: {
      title: "Nyromantikk",
      from: "1890",
      to: "1905",
      color: "0xCC3300",
      fillColor: "0xe5997f",
      y: "0",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'nyromantikknn' */ "../periods/nyromantikk/NyromantikkNN.vue"
        ),
    },
  },
  {
    path: "/nb/periods/nyromantikk",
    name: "NyromantikkNB",
    meta: {
      title: "Nyromantikk",
      from: "1890",
      to: "1905",
      color: "0xCC3300",
      fillColor: "0xe5997f",
      y: "0",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'nyromantikknb' */ "../periods/nyromantikk/NyromantikkNB.vue"
        ),
    },
  },
  {
    path: "/nn/periods/nyrealisme",
    name: "NyrealismeNN",
    meta: {
      title: "Nyrealisme og modernisme",
      from: "1905",
      to: "1930",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'nyrealismenn' */ "../periods/nyrealisme/NyrealismeNN.vue"
        ),
    },
  },
  {
    path: "/nb/periods/nyrealisme",
    name: "NyrealismeNB",
    meta: {
      title: "Nyrealisme og modernisme",
      from: "1905",
      to: "1930",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'nyrealismenb' */ "../periods/nyrealisme/NyrealismeNB.vue"
        ),
    },
  },
  {
    path: "/nn/periods/modernisme",
    name: "ModernismeNN",
    meta: {
      title: "Modernisme og realisme",
      from: "1930",
      to: "1960",
      color: "0xCC3300",
      fillColor: "0xe5997f",
      y: "0",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'modernismenn' */ "../periods/modernisme/ModernismeNN.vue"
        ),
    },
  },
  {
    path: "/nb/periods/modernisme",
    name: "ModernismeNB",
    meta: {
      title: "Modernisme og realisme",
      from: "1930",
      to: "1960",
      color: "0xCC3300",
      fillColor: "0xe5997f",
      y: "0",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'modernismenb' */ "../periods/modernisme/ModernismeNB.vue"
        ),
    },
  },
  {
    path: "/nn/periods/postmodernisme",
    name: "PostmodernismeNN",
    meta: {
      title: "Postmodernisme og realisme",
      from: "1960",
      to: "2020",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'postmodernismenn' */ "../periods/postmodernisme/PostmodernismeNN.vue"
        ),
    },
  },
  {
    path: "/nb/periods/postmodernisme",
    name: "PostmodernismeNB",
    meta: {
      title: "Postmodernisme og realisme",
      from: "1960",
      to: "2020",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'postmodernismenb' */ "../periods/postmodernisme/PostmodernismeNB.vue"
        ),
    },
  },
];
