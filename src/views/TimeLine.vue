<template lang="pug">
// * POPUP AUTHOR
.lo_fullOverlay_popup

// * CONTENT
.lo_globalContainer
  // * HEADER
  .lo_topBar
    header.lo_topBar_header
      // * button - jump to period
      button.btn_menu
        MenuIcon
      .header_eraName Realisme og naturalisme
    ul.lo_topBar_timeline
      li.timeSlot(style="width: 400px")
        .timeSlot_year 1600
        .timeSlot_dot
        .timeSlot_line
      li.timeSlot(style="width: 400px")
        .timeSlot_year 1650
        .timeSlot_dot
        .timeSlot_line
      li.timeSlot(style="width: 400px")
        .timeSlot_year 1700
        .timeSlot_dot
        .timeSlot_line
      li.timeSlot(style="width: 400px")
        .timeSlot_year 1700
        .timeSlot_dot
        .timeSlot_line
      li.timeSlot(style="width: 400px")
        .timeSlot_year 1750
        .timeSlot_dot
        .timeSlot_line
      li.timeSlot(style="width: 400px")
        .timeSlot_year 1800
        .timeSlot_dot
        .timeSlot_line
      li.timeSlot(style="width: 400px")
        .timeSlot_year 1850
        .timeSlot_dot
        .timeSlot_line
      li.timeSlot(style="width: 400px")
        .timeSlot_year 1900
        .timeSlot_dot
        .timeSlot_line
      li.timeSlot(style="width: 400px")
        .timeSlot_year 1950
        .timeSlot_dot
        .timeSlot_line

  // * MAIN CONTENT
  main.lo_sectionList
    .lo_sectionsIntroPage
      .startInstructions
        NdlaLogo(style="width: 84px")
        h1 Språk- og litteraturhistorisk tidslinje
        p Duis augue tortor, gravida non nisi ut, bibendum hendrerit nulla. Quisque vitae ultrices massa. Maecenas sollicitudin ligula et velit varius, in sollicitudin libero iaculis. Nulla facilisi. Phasellus dolor turpis, dapibus sed nisi eu, hendrerit laoreet turpis. Duis accumsan pellentesque libero, in auctor sapien convallis non.
      .startTimeline
    // * ERA
    ul.sectionList
      li.sectionList_item
        section.lo_sectionEra(style="width: 1000px")
          .lo_circleEra
            .circleEra
              img(src="@/assets/media/img/circle1.png")
              .circleEra_content
                .circleEra_date 1850-1890
                h2.circleEra_title Realisme og naturalisme
                button.btnEra Mer info
          ul.bookList
            li
              ButtonBook(
                title="Om norsk Sprogreformation",
                author="Wergeland",
                path="/nn/books/wergeland",
                style="left: 50px; top: 100px"
              )
            li
              ButtonBook(
                title="Kvitebjørnen",
                author="Rasmus Løland",
                path="/nn/books/loland",
                style="left: 100px; top: 200px"
              )
            li
              ButtonBook(
                title="Døljen",
                author="Vinje",
                path="/nn/books/vinje",
                style="left: 800px; top: 150px"
              )
          SeparatorAuthor
//#timeline 
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
import ButtonBook from "@/components/ButtonBook";

import MenuIcon from "@/components/ui/MenuIcon";
import NdlaLogo from "@/components/ui/NdlaLogo";
import SeparatorAuthor from "@/components/ui/SeparatorAuthor";

import { readFile } from "@/js/fileTools";

import { getRoutesWithString } from "@/js/helpers";

export default {
  name: "TimeLine",
  components: {
    ButtonBook,
    MenuIcon,
    NdlaLogo,
    SeparatorAuthor,
  },
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
