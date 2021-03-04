<template lang="pug">
#timeline 
  h1 TimeLine - {{ globalVars.langCode }}
  div(v-if="periods")
    h2 Perioder
    ul
      li(v-for="period in periods", :key="period.ID") {{ period.FRA }} - {{ period.TIL }} {{ period.TITTEL }}

    h2 Bøker
    ul
      li(v-for="book in books", :key="books.TITTEL") {{ book.ÅR }} - {{ book.TITTEL }}

    h2 Forfattere
    ul
      li(v-for="artist in artists", :key="artist.NAVN") {{ artist.FRA }} - {{ artist.TIL }} {{ artist.NAVN }}
        div(v-html="artist.OMTALE")
</template>

<script>
import { readFile } from "@/js/fileTools";

export default {
  name: "TimeLine",
  data() {
    return {
      periodLoaded: false,
      periods: null,
      books: null,
      artists: null,
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

    // * load periods
    const periodsFileName = "config/periods" + ucLangCode + ".json";
    let tmpPeriods = JSON.parse(readFile(periodsFileName));
    this.periods = tmpPeriods.periodeliste.PERIODE;

    // * load books
    const booksFileName = "config/books" + ucLangCode + ".json";
    this.books = JSON.parse(readFile(booksFileName));

    // * load artists
    const artistsFileName = "config/artists" + ucLangCode + ".json";
    let tmpArtists = JSON.parse(readFile(artistsFileName));
    console.log(
      "Timeline.created: tmpArtist = ",
      tmpArtists.bakgrunnsinfo.KUNSTNER[0].OMTALE,
    );
    this.artists = tmpArtists.bakgrunnsinfo.KUNSTNER;
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
