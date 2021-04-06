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

  // * MAIN CONTENT
  div.lo_sectionList-wrapper(ref="lo_sectionList")
    main.lo_sectionList
      .lo_sectionsIntroPage
        .startInstructions
          NdlaLogo(style="width: 84px")
          h1 Språk- og litteraturhistorisk tidslinje
          p Duis augue tortor, gravida non nisi ut, bibendum hendrerit nulla. Quisque vitae ultrices massa. Maecenas sollicitudin ligula et velit varius, in sollicitudin libero iaculis. Nulla facilisi. Phasellus dolor turpis, dapibus sed nisi eu, hendrerit laoreet turpis. Duis accumsan pellentesque libero, in auctor sapien convallis non.
        .startTimeline
      ul.sectionList
        // * ERA 0 (component test)
        TimelineSection(
          title="Norrøn tid"
          from="800"
          to="1350"
          path="/nb/periods/norron"
          :yearMarkings="[[800, 42], [850, 44], [900, 47], [950, 52], [1000, 55], [1050, 60], [1100, 65], [1150, 71], [1200, 78], [1250, 86], [1300, 95]]"
          :period="periodRoutes[0]")
        // * ERA 1
        //li.sectionList_item
          // * The entire section
          section.lo_sectionEra(style="width: 1000px")
            //.lo_topBar_wrapper
            // * Topbar with line and dots
            ul.lo_topBar_timeline(style="--topbar-width: 1000px")
              li.timeSlot(style="width: 200px")
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
              //- li.timeSlot(style="width: 400px")
              //-   .timeSlot_year 1700
              //-   .timeSlot_dot
              //-   .timeSlot_line
              //- li.timeSlot(style="width: 400px")
              //-   .timeSlot_year 1750
              //-   .timeSlot_dot
              //-   .timeSlot_line
              //- li.timeSlot(style="width: 400px")
              //-   .timeSlot_year 1800
              //-   .timeSlot_dot
              //-   .timeSlot_line
              //- li.timeSlot(style="width: 400px")
              //-   .timeSlot_year 1850
              //-   .timeSlot_dot
              //-   .timeSlot_line
            // * The circle and link in the middle of the era
            .lo_circleEra
              .circleEra
                img(src="@/assets/media/img/circle1.png")
                .circleEra_content
                  .circleEra_date 1850-1890
                  h2.circleEra_title Realisme og naturalisme
                  button.btnEra(@click="$router.push('/nb/periods/barokk')") Mer info                  
            // * List of books
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
                  path="/nb/books/loland",
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
            // * List of authors
            ul.authorsList
              li
                ButtonAuthor(
                  name="Peter Christen Asbjørnsen 1",
                  style="width: 450px; left: 20px; top: 0"
                )
              li
                ButtonAuthor(
                  name="Charles-Louis Montesquieu 2",
                  path="/nn/test",
                  style="width: 239px; left: 50px; top: 50px"
                )
              li
                ButtonAuthor(
                  name="Peter Christen Asbjørnsen 3",
                  path="/nn/test",
                  style="width: 360px; left: 80px; top: 100px"
                )
              li
                ButtonAuthor(
                  name="Peter Christen Asbjørnsen 4",
                  path="/nn/test",
                  style="width: 520px; left: 150px; top: 150px"
                )
              li
                ButtonAuthor(
                  name="Peter Christen Asbjørnsen 5",
                  style="width: 520px; left: 800px; top: 150px"
                )
        // * ERA 2
        //li.sectionList_item
          // * The entire section
          section.lo_sectionEra(style="width: 1400px")
            //.lo_topBar_wrapper
            // * Topbar with line and dots
            ul.lo_topBar_timeline(style="--topbar-width: 1400px")
              li.timeSlot(style="width: 200px")
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
              //- li.timeSlot(style="width: 400px")
              //-   .timeSlot_year 1750
              //-   .timeSlot_dot
              //-   .timeSlot_line
              //- li.timeSlot(style="width: 400px")
              //-   .timeSlot_year 1800
              //-   .timeSlot_dot
              //-   .timeSlot_line
              //- li.timeSlot(style="width: 400px")
              //-   .timeSlot_year 1850
              //-   .timeSlot_dot
              //-   .timeSlot_line
            // * The circle and link in the middle of the era
            .lo_circleEra
              .circleEra
                img(src="@/assets/media/img/circle1.png")
                .circleEra_content
                  .circleEra_date 1850-1890
                  h2.circleEra_title Realisme og naturalisme
                  button.btnEra(@click="$router.push('/nb/periods/barokk')") Mer info                  
            // * List of books
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
                  path="/nb/books/loland",
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
            // * List of authors
            ul.authorsList
              li
                ButtonAuthor(
                  name="Peter Christen Asbjørnsen 1",
                  style="width: 450px; left: 20px; top: 0"
                )
              li
                ButtonAuthor(
                  name="Charles-Louis Montesquieu 2",
                  path="/nn/test",
                  style="width: 239px; left: 50px; top: 50px"
                )
              li
                ButtonAuthor(
                  name="Peter Christen Asbjørnsen 3",
                  path="/nn/test",
                  style="width: 360px; left: 80px; top: 100px"
                )
              li
                ButtonAuthor(
                  name="Peter Christen Asbjørnsen 4",
                  path="/nn/test",
                  style="width: 520px; left: 150px; top: 150px"
                )
              li
                ButtonAuthor(
                  name="Peter Christen Asbjørnsen 5",
                  style="width: 520px; left: 800px; top: 150px"
                )

//#timeline 
  h1 Timeline - {{ globalVars.langCode }}
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
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ButtonBook from "@/components/ButtonBook";
import ButtonAuthor from "@/components/ButtonAuthor";

import MenuIcon from "@/components/ui/MenuIcon";
import NdlaLogo from "@/components/ui/NdlaLogo";
import SeparatorAuthor from "@/components/ui/SeparatorAuthor";
import TimelineSection from "@/components/TimelineSection";

import { readFile } from "@/js/fileTools";

import { getRoutesWithString } from "@/js/helpers";

export default {
  name: "Timeline",
  components: {
    ButtonBook,
    ButtonAuthor,
    MenuIcon,
    NdlaLogo,
    SeparatorAuthor,
    TimelineSection,
  },
  data() {
    return {
      periodLoaded: false,
      artists: null,
      artistRoutes: null,
      bookRoutes: null,
      periodRoutes: null,
      isDraggable: false, // * Debug var making it easy to turn off dragging
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
  methods: {
    onTimelineDrag(e) {},
  },
  mounted() {
    if (this.isDraggable) {
      Draggable.create(this.$refs.lo_sectionList, {
        type: "scroll",
        // allowNativeTouchScrolling: true,
        dragClickables: true,
        lockAxis: false,
        zIndexBoost: false,
        // bounds: { minX: 0 },
        // bounds: { minX: 0, maxX: -2000 },
        onDrag: this.onTimelineDrag,
      });
    }
  },
  async created() {
    const ucLangCode = this.globalVars.langCode.toUpperCase();

    // * load artists
    const artistsFileName = "config/artists" + ucLangCode + ".json";
    this.artists = JSON.parse(readFile(artistsFileName));

    console.log("Timeline.created: routes = ", this.$router.options.routes);
    this.bookRoutes = getRoutesWithString(
      this.$router,
      this.globalVars.langCode + "/books/",
    );

    this.periodRoutes = getRoutesWithString(
      this.$router,
      this.globalVars.langCode + "/periods/",
    );

    gsap.registerPlugin(Draggable);

    console.log("Timeline.created: book routes = ", this.bookRoutes);
    console.log("Timeline.created: period routes = ", this.periodRoutes);
  },
};
</script>
