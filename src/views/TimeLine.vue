<template lang="pug">
#timeline 
  h1 TimeLine - {{ globalVars.langCode }}
  div(v-if="periodRoutes")
    h2 Perioder
    ul
      li(v-for="period in periodRoutes", :key="period.name") {{ period.meta.from }} - {{ period.meta.to }} <router-link :to="period.path">{{ period.meta.title }}</router-link>

    h2 Bøker
    ul
      li(v-for="book in bookRoutes", :key="book.meta.title") {{ book.meta.year }} - <router-link :to="book.path">{{ book.meta.title }}</router-link> av {{ book.meta.author }}

    h2 Forfattere
    ul
      li(v-for="artist in artists", :key="artist.NAVN") {{ artist.FRA }} - {{ artist.TIL }} {{ artist.NAVN }}
        div(v-html="artist.OMTALE")
</template>

<script>
import { readFile } from "@/js/fileTools";

import { getRoutesWithString } from "@/js/helpers";

export default {
  name: "TimeLine",
  data() {
    return {
      periodLoaded: false,
      artists: null,
      artistRoutes: null,
      bookRoutes: null,
      periodRoutes: null,
    };
  },
  inject: ["globalVars"],
  // watch: {
  //   langCode: {
  //     handler(new_langCode) {
  //       console.log("new_langCode: ", new_langCode);
  //     },
  //     deep: true,
  //   },
  // },
  async created() {
    const ucLangCode = this.globalVars.langCode.toUpperCase();

    // * load artists
    const artistsFileName = "config/artists" + ucLangCode + ".json";
    this.artists = JSON.parse(readFile(artistsFileName));

    console.log("TimeLine.created: routes = ", this.$router.options.routes);
    this.bookRoutes = getRoutesWithString(
      this.$router,
      this.globalVars.langCode + "/books/",
    );

    this.periodRoutes = getRoutesWithString(
      this.$router,
      this.globalVars.langCode + "/periods/",
    );

    console.log("TimeLine.created: book routes = ", this.bookRoutes);
    console.log("TimeLine.created: period routes = ", this.periodRoutes);
  },
};
</script>

<style lang="scss" scoped>
#timeline {
  text-align: left;
}
ul {
  text-align: left;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
