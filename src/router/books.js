import Timeline from "@/views/Timeline.vue";

export default [
  {
    path: "/nn/books/beowulf",
    name: "BeowulfNN",
    meta: {
      author: "Beowulf",
      title: "Beowulf",
      year: 800,
      cover: 1,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'beowulfnn' */ "../books/beowulf/BeowulfNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/beowulf",
    name: "BeowulfNB",
    meta: {
      author: "Beowulf",
      title: "Beowulf",
      year: 800,
      cover: 1,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'beowulfnb' */ "../books/beowulf/BeowulfNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/edda",
    name: "EddaNN",
    meta: {
      author: "Edda",
      title: "Den eldre Edda",
      year: 900,
      cover: 2,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'eddann' */ "../books/edda/EddaNN.vue"),
    },
  },
  {
    path: "/nb/books/edda",
    name: "EddaNB",
    meta: {
      author: "Edda",
      title: "Den eldre Edda",
      year: 900,
      cover: 2,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'eddanb' */ "../books/edda/EddaNB.vue"),
    },
  },
  {
    path: "/nn/books/rolandskvadet",
    name: "RolandskvadetNN",
    meta: {
      author: "Rolandskvadet",
      title: "Rolandskvadet",
      year: 1150,
      cover: 3,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'rolandskvadetnn' */ "../books/rolandskvadet/RolandskvadetNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/rolandskvadet",
    name: "RolandskvadetNB",
    meta: {
      author: "Rolandskvadet",
      title: "Rolandskvadet",
      year: 1150,
      cover: 3,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'rolandskvadetnb' */ "../books/rolandskvadet/RolandskvadetNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/snorre",
    name: "SnorreNN",
    meta: {
      author: "Snorre",
      title: "Snorres kongesoger",
      year: 1220,
      cover: 4,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'snorrenn' */ "../books/snorre/SnorreNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/snorre",
    name: "SnorreNB",
    meta: {
      author: "Snorre",
      title: "Snorres kongesoger",
      year: 1220,
      cover: 4,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'snorrenb' */ "../books/snorre/SnorreNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/kongespegelen",
    name: "KongespegelenNN",
    meta: {
      author: "Kongespegelen",
      title: "Kongsspegelen",
      year: 1230,
      cover: 1,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'kongespegelennn' */ "../books/kongespegelen/KongespegelenNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/kongespegelen",
    name: "KongespegelenNB",
    meta: {
      author: "Kongespegelen",
      title: "Kongsspegelen",
      year: 1230,
      cover: 1,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'kongespegelennb' */ "../books/kongespegelen/KongespegelenNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/nibelungen",
    name: "NibelungenNN",
    meta: {
      author: "Nibelungen",
      title: "Nibelungen-eposet",
      year: 1250,
      cover: 6,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'nibelungennn' */ "../books/nibelungen/NibelungenNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/nibelungen",
    name: "NibelungenNB",
    meta: {
      author: "Nibelungen",
      title: "Nibelungen-eposet",
      year: 1250,
      cover: 6,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'nibelungennb' */ "../books/nibelungen/NibelungenNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/gunnlaug",
    name: "GunnlaugNN",
    meta: {
      author: "Gunnlaug",
      title: "Soga om Gunnlaug Ormstunge",
      year: 1290,
      cover: 2,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'gunnlaugnn' */ "../books/gunnlaug/GunnlaugNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/gunnlaug",
    name: "GunnlaugNB",
    meta: {
      author: "Gunnlaug",
      title: "Soga om Gunnlaug Ormstunge",
      year: 1290,
      cover: 2,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'gunnlaugnb' */ "../books/gunnlaug/GunnlaugNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/dekameronen",
    name: "DekameronenNN",
    meta: {
      author: "Dekameronen",
      title: "Dekameronen",
      year: 1348,
      cover: 5,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'dekameronennn' */ "../books/dekameronen/DekameronenNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/dekameronen",
    name: "DekameronenNB",
    meta: {
      author: "Dekameronen",
      title: "Dekameronen",
      year: 1348,
      cover: 5,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'dekameronennb' */ "../books/dekameronen/DekameronenNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/olavogkari",
    name: "OlavOgKariNN",
    meta: {
      author: "OlavOgKari",
      title: "Olav og Kari",
      year: 1390,
      cover: 6,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'olavogkarinn' */ "../books/olavogkari/OlavOgKariNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/olavogkari",
    name: "OlavOgKariNB",
    meta: {
      author: "OlavOgKari",
      title: "Olav og Kari",
      year: 1390,
      cover: 6,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'olavogkarinb' */ "../books/olavogkari/OlavOgKariNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/draumkvedet",
    name: "DraumkvedetNN",
    meta: {
      author: "Draumkvedet",
      title: "Draumkvedet",
      year: 1470,
      cover: 3,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'draumkvedetnn' */ "../books/draumkvedet/DraumkvedetNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/draumkvedet",
    name: "DraumkvedetNB",
    meta: {
      author: "Draumkvedet",
      title: "Draumkvedet",
      year: 1470,
      cover: 3,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'draumkvedetnb' */ "../books/draumkvedet/DraumkvedetNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/vinjeboka",
    name: "VinjebokaNN",
    meta: {
      author: "Vinjeboka",
      title: "Vinjeboka",
      year: 1490,
      cover: 7,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'vinjebokann' */ "../books/vinjeboka/VinjebokaNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/vinjeboka",
    name: "VinjebokaNB",
    meta: {
      author: "Vinjeboka",
      title: "Vinjeboka",
      year: 1490,
      cover: 7,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'vinjebokanb' */ "../books/vinjeboka/VinjebokaNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/bergenskapitelsbok",
    name: "BergensKapitelsbokNN",
    meta: {
      author: "BergensKapitelsbok",
      title: "Bergens Kapitelsbok",
      year: 1552,
      cover: 8,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'bergenskapitelsboknn' */ "../books/bergenskapitelsbok/BergensKapitelsbokNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/bergenskapitelsbok",
    name: "BergensKapitelsbokNB",
    meta: {
      author: "BergensKapitelsbok",
      title: "Bergens Kapitelsbok",
      year: 1552,
      cover: 8,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'bergenskapitelsboknb' */ "../books/bergenskapitelsbok/BergensKapitelsbokNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/dictionarium",
    name: "DictionariumNN",
    meta: {
      author: "Dictionarium",
      title: "Den Norske Dictionarium eller Glosebog",
      year: 1646,
      cover: 4,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'dictionariumnn' */ "../books/dictionarium/DictionariumNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/dictionarium",
    name: "DictionariumNB",
    meta: {
      author: "Dictionarium",
      title: "Den Norske Dictionarium eller Glosebog",
      year: 1646,
      cover: 4,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'dictionariumnb' */ "../books/dictionarium/DictionariumNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/floradanica",
    name: "FloraDanicaNN",
    meta: {
      author: "FloraDanica",
      title: "Flora Danica",
      year: 1648,
      cover: 6,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'floradanicann' */ "../books/floradanica/FloraDanicaNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/floradanica",
    name: "FloraDanicaNB",
    meta: {
      author: "FloraDanica",
      title: "Flora Danica",
      year: 1648,
      cover: 6,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'floradanicanb' */ "../books/floradanica/FloraDanicaNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/dorothe",
    name: "DorotheNN",
    meta: {
      author: "Dorothe",
      title: "Sjælens Sang-Offer",
      year: 1678,
      cover: 5,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'dorothenn' */ "../books/dorothe/DorotheNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/dorothe",
    name: "DorotheNB",
    meta: {
      author: "Dorothe",
      title: "Sjælens Sang-Offer",
      year: 1678,
      cover: 5,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'dorothenb' */ "../books/dorothe/DorotheNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/dass",
    name: "DassNN",
    meta: {
      author: "Dass",
      title: "Nordlands Trompet",
      year: 1690,
      cover: 7,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'dassnn' */ "../books/dass/DassNN.vue"),
    },
  },
  {
    path: "/nb/books/dass",
    name: "DassNB",
    meta: {
      author: "Dass",
      title: "Nordlands Trompet",
      year: 1690,
      cover: 7,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'dassnb' */ "../books/dass/DassNB.vue"),
    },
  },
  {
    path: "/nn/books/kingo",
    name: "KingoNN",
    meta: {
      author: "Kingo",
      title: "Kingos salmebok",
      year: 1699,
      cover: 8,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'kingonn' */ "../books/kingo/KingoNN.vue"),
    },
  },
  {
    path: "/nb/books/kingo",
    name: "KingoNB",
    meta: {
      author: "Kingo",
      title: "Kingos salmebok",
      year: 1699,
      cover: 8,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'kingonb' */ "../books/kingo/KingoNB.vue"),
    },
  },
  {
    path: "/nn/books/nielsklim",
    name: "NielsKlimNN",
    meta: {
      author: "NielsKlim",
      title: "Holberg: Niels Klim",
      year: 1741,
      cover: 5,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'nielsklimnn' */ "../books/nielsklim/NielsKlimNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/nielsklim",
    name: "NielsKlimNB",
    meta: {
      author: "NielsKlim",
      title: "Holberg: Niels Klim",
      year: 1741,
      cover: 5,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'nielsklimnb' */ "../books/nielsklim/NielsKlimNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/wesselsskrifter",
    name: "WesselsSkrifterNN",
    meta: {
      author: "WesselsSkrifter",
      title: "Wessels skrifter",
      year: 1787,
      cover: 4,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'wesselsskrifternn' */ "../books/wesselsskrifter/WesselsSkrifterNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/wesselsskrifter",
    name: "WesselsSkrifterNB",
    meta: {
      author: "WesselsSkrifter",
      title: "Wessels skrifter",
      year: 1787,
      cover: 4,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'wesselsskrifternb' */ "../books/wesselsskrifter/WesselsSkrifterNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/mauritshansen",
    name: "MauritsHansenNN",
    meta: {
      author: "MauritsHansen",
      title: "Hansen: Luren",
      year: 1819,
      cover: 11,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'mauritshansennn' */ "../books/mauritshansen/MauritsHansenNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/mauritshansen",
    name: "MauritsHansenNB",
    meta: {
      author: "MauritsHansen",
      title: "Hansen: Luren",
      year: 1819,
      cover: 11,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'mauritshansennb' */ "../books/mauritshansen/MauritsHansenNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/wergeland",
    name: "WergelandNN",
    meta: {
      author: "Wergeland",
      title: "Wergeland: Om norsk Sprogreformation",
      year: 1832,
      cover: 15,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'wergelandnn' */ "../books/wergeland/WergelandNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/wergeland",
    name: "WergelandNB",
    meta: {
      author: "Wergeland",
      title: "Wergeland: Om norsk Sprogreformation",
      year: 1832,
      cover: 15,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'wergelandnb' */ "../books/wergeland/WergelandNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/asbjornsenmoe",
    name: "AsbjornsenMoeNN",
    meta: {
      author: "Asbjørnsen og Moe",
      title: "Norske folkeeventyr",
      year: 1841,
      cover: 12,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'asbjornsenmoenn' */ "../books/asbjornsenmoe/AsbjornsenMoeNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/asbjornsenmoe",
    name: "AsbjornsenMoeNB",
    meta: {
      author: "Asbjørnsen og Moe",
      title: "Norske folkeeventyr",
      year: 1841,
      cover: 12,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'asbjornsenmoenb' */ "../books/asbjornsenmoe/AsbjornsenMoeNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/welhaven",
    name: "WelhavenNN",
    meta: {
      author: "Welhaven",
      title: "Welhaven: Nyere Digte",
      year: 1844,
      cover: 13,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'welhavennn' */ "../books/welhaven/WelhavenNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/welhaven",
    name: "WelhavenNB",
    meta: {
      author: "Welhaven",
      title: "Welhaven: Nyere Digte",
      year: 1844,
      cover: 13,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'welhavennb' */ "../books/welhaven/WelhavenNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/aasen",
    name: "AasenNN",
    meta: {
      author: "Aasen",
      title: "Aasen: Det norske Folkesprogs Grammatik",
      year: 1848,
      cover: 14,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'aasennn' */ "../books/aasen/AasenNN.vue"),
    },
  },
  {
    path: "/nb/books/aasen",
    name: "AasenNB",
    meta: {
      author: "Aasen",
      title: "Aasen: Det norske Folkesprogs Grammatik",
      year: 1848,
      cover: 14,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'aasennb' */ "../books/aasen/AasenNB.vue"),
    },
  },
  {
    path: "/nn/books/bjornson",
    name: "BjornsonNN",
    meta: {
      author: "Bjornson",
      title: "Bjørnson: Faderen",
      year: 1848,
      cover: 14,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'bjornsonnn' */ "../books/bjornson/BjornsonNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/bjornson",
    name: "BjornsonNB",
    meta: {
      author: "Bjornson",
      title: "Bjørnson: Faderen",
      year: 1848,
      cover: 14,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'bjornsonnb' */ "../books/bjornson/BjornsonNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/collett",
    name: "CollettNN",
    meta: {
      author: "Collett",
      title: "Collett: Amtmandens Døttre",
      year: 1855,
      cover: 11,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'collettnn' */ "../books/collett/CollettNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/collett",
    name: "CollettNB",
    meta: {
      author: "Collett",
      title: "Collett: Amtmandens Døttre",
      year: 1855,
      cover: 11,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'collettnb' */ "../books/collett/CollettNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/vinje",
    name: "VinjeNN",
    meta: {
      author: "Vinje",
      title: "Vinje: Dølen",
      year: 1858,
      cover: 12,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'vinjenn' */ "../books/vinje/VinjeNN.vue"),
    },
  },
  {
    path: "/nb/books/vinje",
    name: "VinjeNB",
    meta: {
      author: "Vinje",
      title: "Vinje: Dølen",
      year: 1858,
      cover: 12,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'vinjenb' */ "../books/vinje/VinjeNB.vue"),
    },
  },
  {
    path: "/nn/books/knudsen",
    name: "KnudsenNN",
    meta: {
      author: "Knudsen",
      title: "Knudsen: Unorsk og norsk",
      year: 1880,
      cover: 14,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'knudsennn' */ "../books/knudsen/KnudsenNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/knudsen",
    name: "KnudsenNB",
    meta: {
      author: "Knudsen",
      title: "Knudsen: Unorsk og norsk",
      year: 1880,
      cover: 14,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'knudsennb' */ "../books/knudsen/KnudsenNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/kielland",
    name: "KiellandNN",
    meta: {
      author: "Kielland",
      title: "Kielland: Gift",
      year: 1883,
      cover: 13,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'kiellandnn' */ "../books/kielland/KiellandNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/kielland",
    name: "KiellandNB",
    meta: {
      author: "Kielland",
      title: "Kielland: Gift",
      year: 1883,
      cover: 13,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'kiellandnb' */ "../books/kielland/KiellandNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/garborg",
    name: "GarborgNN",
    meta: {
      author: "Garborg",
      title: "Garborg: Mannfolk",
      year: 1886,
      cover: 14,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'garborgnn' */ "../books/garborg/GarborgNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/garborg",
    name: "GarborgNB",
    meta: {
      author: "Garborg",
      title: "Garborg: Mannfolk",
      year: 1886,
      cover: 14,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'garborgnb' */ "../books/garborg/GarborgNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/billedbog",
    name: "BilledbogNN",
    meta: {
      author: "Billedbog",
      title: "Norsk Billedbog for Børn",
      year: 1888,
      cover: 15,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'billedbognn' */ "../books/billedbog/BilledbogNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/billedbog",
    name: "BilledbogNB",
    meta: {
      author: "Billedbog",
      title: "Norsk Billedbog for Børn",
      year: 1888,
      cover: 15,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'billedbognb' */ "../books/billedbog/BilledbogNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/ibsen",
    name: "IbsenNN",
    meta: {
      author: "Ibsen",
      title: "Ibsen: Hedda Gabler",
      year: 1890,
      cover: 13,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'ibsennn' */ "../books/ibsen/IbsenNN.vue"),
    },
  },
  {
    path: "/nb/books/ibsen",
    name: "IbsenNB",
    meta: {
      author: "Ibsen",
      title: "Ibsen: Hedda Gabler",
      year: 1890,
      cover: 13,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'ibsennb' */ "../books/ibsen/IbsenNB.vue"),
    },
  },
  {
    path: "/nn/books/krag",
    name: "KragNN",
    meta: {
      author: "Krag",
      title: "Krag: Digte",
      year: 1891,
      cover: 11,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'kragnn' */ "../books/krag/KragNN.vue"),
    },
  },
  {
    path: "/nb/books/krag",
    name: "KragNB",
    meta: {
      author: "Krag",
      title: "Krag: Digte",
      year: 1891,
      cover: 11,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'kragnb' */ "../books/krag/KragNB.vue"),
    },
  },
  {
    path: "/nn/books/skram",
    name: "SkramNN",
    meta: {
      author: "Skram",
      title: "Skram: Forrådt",
      year: 1892,
      cover: 12,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'skramnn' */ "../books/skram/SkramNN.vue"),
    },
  },
  {
    path: "/nb/books/skram",
    name: "SkramNB",
    meta: {
      author: "Skram",
      title: "Skram: Forrådt",
      year: 1892,
      cover: 12,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'skramnb' */ "../books/skram/SkramNB.vue"),
    },
  },
  {
    path: "/nn/books/hamsun",
    name: "HamsunNN",
    meta: {
      author: "Hamsun",
      title: "Hamsun: Pan",
      year: 1894,
      cover: 13,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'hamsunnn' */ "../books/hamsun/HamsunNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/hamsun",
    name: "HamsunNB",
    meta: {
      author: "Hamsun",
      title: "Hamsun: Pan",
      year: 1894,
      cover: 13,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'hamsunnb' */ "../books/hamsun/HamsunNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/obstfelder",
    name: "ObstfelderNN",
    meta: {
      author: "Obstfelder",
      title: "Obstfelder: Byen",
      year: 1903,
      cover: 17,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'obstfeldernn' */ "../books/obstfelder/ObstfelderNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/obstfelder",
    name: "ObstfelderNB",
    meta: {
      author: "Obstfelder",
      title: "Obstfelder: Byen",
      year: 1903,
      cover: 17,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'obstfeldernb' */ "../books/obstfelder/ObstfelderNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/loland",
    name: "LolandNN",
    meta: {
      author: "Loland",
      title: "Løland: Kvitebjørnen",
      year: 1906,
      cover: 19,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'lolandnn' */ "../books/loland/LolandNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/loland",
    name: "LolandNB",
    meta: {
      author: "Loland",
      title: "Løland: Kvitebjørnen",
      year: 1906,
      cover: 19,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'lolandnb' */ "../books/loland/LolandNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/frich",
    name: "FrichNN",
    meta: {
      author: "Frich",
      title: "Frich: Jonas Fjeld",
      year: 1911,
      cover: 20,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'frichnn' */ "../books/frich/FrichNN.vue"),
    },
  },
  {
    path: "/nb/books/frich",
    name: "FrichNB",
    meta: {
      author: "Frich",
      title: "Frich: Jonas Fjeld",
      year: 1911,
      cover: 20,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'frichnb' */ "../books/frich/FrichNB.vue"),
    },
  },
  {
    path: "/nn/books/undset",
    name: "UndsetNN",
    meta: {
      author: "Undset",
      title: "Undset: Kristin Lavransdatter",
      year: 1920,
      cover: 21,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'undsetnn' */ "../books/undset/UndsetNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/undset",
    name: "UndsetNB",
    meta: {
      author: "Undset",
      title: "Undset: Kristin Lavransdatter",
      year: 1920,
      cover: 21,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'undsetnb' */ "../books/undset/UndsetNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/falkberget",
    name: "FalkbergetNN",
    meta: {
      author: "Falkberget",
      title: "Falkberget: Bør Børson jr.",
      year: 1920,
      cover: 16,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'falkbergetnn' */ "../books/falkberget/FalkbergetNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/falkberget",
    name: "FalkbergetNB",
    meta: {
      author: "Falkberget",
      title: "Falkberget: Bør Børson jr.",
      year: 1920,
      cover: 16,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'falkbergetnb' */ "../books/falkberget/FalkbergetNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/nilsen",
    name: "NilsenNN",
    meta: {
      author: "Nilsen",
      title: "Nilsen: På stengrunn",
      year: 1925,
      cover: 17,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'nilsennn' */ "../books/nilsen/NilsenNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/nilsen",
    name: "NilsenNB",
    meta: {
      author: "Nilsen",
      title: "Nilsen: På stengrunn",
      year: 1925,
      cover: 17,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'nilsennb' */ "../books/nilsen/NilsenNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/duun",
    name: "DuunNN",
    meta: {
      author: "Duun",
      title: "Duun: Medmenneske",
      year: 1929,
      cover: 18,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'duunnn' */ "../books/duun/DuunNN.vue"),
    },
  },
  {
    path: "/nb/books/duun",
    name: "DuunNB",
    meta: {
      author: "Duun",
      title: "Duun: Medmenneske",
      year: 1929,
      cover: 18,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'duunnb' */ "../books/duun/DuunNB.vue"),
    },
  },
  {
    path: "/nn/books/morenvesaas",
    name: "MorenVesaasNN",
    meta: {
      author: "MorenVesaas",
      title: "Moren Vesaas: Harpe og dolk",
      year: 1929,
      cover: 19,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'morenvesaasnn' */ "../books/morenvesaas/MorenVesaasNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/morenvesaas",
    name: "MorenVesaasNB",
    meta: {
      author: "MorenVesaas",
      title: "Moren Vesaas: Harpe og dolk",
      year: 1929,
      cover: 19,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'morenvesaasnb' */ "../books/morenvesaas/MorenVesaasNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/sandemose",
    name: "SandemoseNN",
    meta: {
      author: "Sandemose",
      title: "Sandemose: En flyktning krysser sitt spor",
      year: 1933,
      cover: 20,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'sandemosenn' */ "../books/sandemose/SandemoseNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/sandemose",
    name: "SandemoseNB",
    meta: {
      author: "Sandemose",
      title: "Sandemose: En flyktning krysser sitt spor",
      year: 1933,
      cover: 20,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'sandemosenb' */ "../books/sandemose/SandemoseNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/jacobsen",
    name: "JacobsenNN",
    meta: {
      author: "Jacobsen",
      title: "Jacobsen: Jord og jern",
      year: 1933,
      cover: 21,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'jacobsennn' */ "../books/jacobsen/JacobsenNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/jacobsen",
    name: "JacobsenNB",
    meta: {
      author: "Jacobsen",
      title: "Jacobsen: Jord og jern",
      year: 1933,
      cover: 21,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'jacobsennb' */ "../books/jacobsen/JacobsenNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/hoel",
    name: "HoelNN",
    meta: {
      author: "Hoel",
      title: "Hoel: Veien til verdens ende",
      year: 1933,
      cover: 16,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'hoelnn' */ "../books/hoel/HoelNN.vue"),
    },
  },
  {
    path: "/nb/books/hoel",
    name: "HoelNB",
    meta: {
      author: "Hoel",
      title: "Hoel: Veien til verdens ende",
      year: 1933,
      cover: 16,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'hoelnb' */ "../books/hoel/HoelNB.vue"),
    },
  },
  {
    path: "/nn/books/grieg",
    name: "GriegNN",
    meta: {
      author: "Grieg",
      title: "Nordahl Grieg: Til ungdommen",
      year: 1936,
      cover: 17,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'griegnn' */ "../books/grieg/GriegNN.vue"),
    },
  },
  {
    path: "/nb/books/grieg",
    name: "GriegNB",
    meta: {
      author: "Grieg",
      title: "Nordahl Grieg: Til ungdommen",
      year: 1936,
      cover: 17,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'griegnb' */ "../books/grieg/GriegNB.vue"),
    },
  },
  {
    path: "/nn/books/overland",
    name: "OverlandNN",
    meta: {
      author: "Overland",
      title: "Øverland: Den røde front",
      year: 1937,
      cover: 18,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'overlandnn' */ "../books/overland/OverlandNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/overland",
    name: "OverlandNB",
    meta: {
      author: "Overland",
      title: "Øverland: Den røde front",
      year: 1937,
      cover: 18,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'overlandnb' */ "../books/overland/OverlandNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/stortingsmelding",
    name: "StortingsmeldingNN",
    meta: {
      author: "Stortingsmelding",
      title: "Stortingsmelding nr.31",
      year: 1937,
      cover: 19,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'stortingsmeldingnn' */ "../books/stortingsmelding/StortingsmeldingNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/stortingsmelding",
    name: "StortingsmeldingNB",
    meta: {
      author: "Stortingsmelding",
      title: "Stortingsmelding nr.31",
      year: 1937,
      cover: 19,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'stortingsmeldingnb' */ "../books/stortingsmelding/StortingsmeldingNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/vangsgutane",
    name: "VangsgutaneNN",
    meta: {
      author: "Vangsgutane",
      title: "Vangsgutane",
      year: 1941,
      cover: 20,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'vangsgutanenn' */ "../books/vangsgutane/VangsgutaneNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/vangsgutane",
    name: "VangsgutaneNB",
    meta: {
      author: "Vangsgutane",
      title: "Vangsgutane",
      year: 1941,
      cover: 20,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'vangsgutanenb' */ "../books/vangsgutane/VangsgutaneNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/hagerup",
    name: "HagerupNN",
    meta: {
      author: "Hagerup",
      title: "Hagerup: Videre",
      year: 1945,
      cover: 21,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'hagerupnn' */ "../books/hagerup/HagerupNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/hagerup",
    name: "HagerupNB",
    meta: {
      author: "Hagerup",
      title: "Hagerup: Videre",
      year: 1945,
      cover: 21,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'hagerupnb' */ "../books/hagerup/HagerupNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/vesaas",
    name: "VesaasNN",
    meta: {
      author: "Vesaas",
      title: "Vesaas: Is-slottet",
      year: 1963,
      cover: 23,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'vesaasnn' */ "../books/vesaas/VesaasNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/vesaas",
    name: "VesaasNB",
    meta: {
      author: "Vesaas",
      title: "Vesaas: Is-slottet",
      year: 1963,
      cover: 23,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'vesaasnb' */ "../books/vesaas/VesaasNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/hauge",
    name: "HaugeNN",
    meta: {
      author: "Hauge",
      title: "Hauge: Dropar i austavind",
      year: 1966,
      cover: 24,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'haugenn' */ "../books/hauge/HaugeNN.vue"),
    },
  },
  {
    path: "/nb/books/hauge",
    name: "HaugeNB",
    meta: {
      author: "Hauge",
      title: "Hauge: Dropar i austavind",
      year: 1966,
      cover: 24,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'haugenb' */ "../books/hauge/HaugeNB.vue"),
    },
  },
  {
    path: "/nn/books/vold",
    name: "VoldNN",
    meta: {
      author: "Vold",
      title: "Vold: Mor Godhjertas glade versjon. Ja",
      year: 1968,
      cover: 25,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'voldnn' */ "../books/vold/VoldNN.vue"),
    },
  },
  {
    path: "/nb/books/vold",
    name: "VoldNB",
    meta: {
      author: "Vold",
      title: "Vold: Mor Godhjertas glade versjon. Ja",
      year: 1968,
      cover: 25,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'voldnb' */ "../books/vold/VoldNB.vue"),
    },
  },
  {
    path: "/nn/books/flogstad",
    name: "FlogstadNN",
    meta: {
      author: "Flogstad",
      title: "Fløgstad: Dalen Portland",
      year: 1977,
      cover: 26,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'flogstadnn' */ "../books/flogstad/FlogstadNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/flogstad",
    name: "FlogstadNB",
    meta: {
      author: "Flogstad",
      title: "Fløgstad: Dalen Portland",
      year: 1977,
      cover: 26,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'flogstadnb' */ "../books/flogstad/FlogstadNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/kjarstad",
    name: "KjarstadNN",
    meta: {
      author: "Kjarstad",
      title: "Kjærstad: Forføreren",
      year: 1993,
      cover: 27,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'kjarstadnn' */ "../books/kjarstad/KjarstadNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/kjarstad",
    name: "KjarstadNB",
    meta: {
      author: "Kjarstad",
      title: "Kjærstad: Forføreren",
      year: 1993,
      cover: 27,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'kjarstadnb' */ "../books/kjarstad/KjarstadNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/fosse",
    name: "FosseNN",
    meta: {
      author: "Fosse",
      title: "Fosse: Nokon kjem til å komme",
      year: 1996,
      cover: 22,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'fossenn' */ "../books/fosse/FosseNN.vue"),
    },
  },
  {
    path: "/nb/books/fosse",
    name: "FosseNB",
    meta: {
      author: "Fosse",
      title: "Fosse: Nokon kjem til å komme",
      year: 1996,
      cover: 22,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'fossenb' */ "../books/fosse/FosseNB.vue"),
    },
  },
  {
    path: "/nn/books/loe",
    name: "LoeNN",
    meta: {
      author: "Loe",
      title: "Loe: Naiv.Super",
      year: 1996,
      cover: 23,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'loenn' */ "../books/loe/LoeNN.vue"),
    },
  },
  {
    path: "/nb/books/loe",
    name: "LoeNB",
    meta: {
      author: "Loe",
      title: "Loe: Naiv.Super",
      year: 1996,
      cover: 23,
    },
    components: {
      default: () =>
        import(/* webpackChunkName: 'loenb' */ "../books/loe/LoeNB.vue"),
    },
  },
  {
    path: "/nn/books/orstavik",
    name: "OrstavikNN",
    meta: {
      author: "Orstavik",
      title: "Ørstavik: Kjærlighet",
      year: 1997,
      cover: 24,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'orstaviknn' */ "../books/orstavik/OrstavikNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/orstavik",
    name: "OrstavikNB",
    meta: {
      author: "Orstavik",
      title: "Ørstavik: Kjærlighet",
      year: 1997,
      cover: 24,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'orstaviknb' */ "../books/orstavik/OrstavikNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/seierstad",
    name: "SeierstadNN",
    meta: {
      author: "Seierstad",
      title: "Seierstad: Bokhandleren i Kabul",
      year: 2002,
      cover: 25,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'seierstadnn' */ "../books/seierstad/SeierstadNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/seierstad",
    name: "SeierstadNB",
    meta: {
      author: "Seierstad",
      title: "Seierstad: Bokhandleren i Kabul",
      year: 2002,
      cover: 25,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'seierstadnb' */ "../books/seierstad/SeierstadNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/rehman",
    name: "RehmanNN",
    meta: {
      author: "Rehman",
      title: "Rehman: Mullaløft",
      year: 2004,
      cover: 26,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'rehmannn' */ "../books/rehman/RehmanNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/rehman",
    name: "RehmanNB",
    meta: {
      author: "Rehman",
      title: "Rehman: Mullaløft",
      year: 2004,
      cover: 26,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'rehmannb' */ "../books/rehman/RehmanNB.vue"
        ),
    },
  },
  {
    path: "/nn/books/knausgard",
    name: "KnausgardNN",
    meta: {
      author: "Knausgard",
      title: "Knausgård: Min kamp",
      year: 2009,
      cover: 27,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'knausgardnn' */ "../books/knausgard/KnausgardNN.vue"
        ),
    },
  },
  {
    path: "/nb/books/knausgard",
    name: "KnausgardNB",
    meta: {
      author: "Knausgard",
      title: "Knausgård: Min kamp",
      year: 2009,
      cover: 27,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'knausgardnb' */ "../books/knausgard/KnausgardNB.vue"
        ),
    },
  },
];
