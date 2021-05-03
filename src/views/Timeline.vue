<template lang="pug">
// * POPUP AUTHOR
.lo_fullOverlay_popup(v-if="showAuthorModal" @pointerdown.self="showAuthorModal = false")
  .lo_authorPopup
      button.btn_close#closePopup
        <svg @click="showAuthorModal = false" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style="width: 24px; height:24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> 
      .authorPopupContent
        h2 {{selectedAuthor.name}} <br>({{selectedAuthor.from}}–{{selectedAuthor.to}})
        ul(v-html="selectedAuthor.nbText")
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
        TimelineSection(
          v-for="period in periods" :key="period.id"
          :title="getPeriodTitle(period)"
          :from="period.from"
          :to="period.to"
          :id="period.id"
          :yearMarkings="period.yearMarkings"
          :sectionWidthMultiplier="period.widthMultiplier"
          @authorClick="onAuthorClick"
          )

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
import { periods } from "@/js/periodsData";

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
      // bookRoutes: null,
      // periodRoutes: null,
      isDraggable: true, // * Debug var making it easy to turn off dragging
      periods: periods,
      showAuthorModal: false,
      selectedAuthor: null,
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
    onAuthorClick(event, author) {
      console.log("Timeline.onAuthorClick: author = ", author);
      this.selectedAuthor = author;
      this.showAuthorModal = true;
    },
    getPeriodId(periodPath) {
      return periodPath
        .split("/")
        .slice(-1)
        .pop();
    },
    getPeriodTitle(period) {
      if (this.globalVars.langCode == "nn") return period["nnTitle"];

      return period["nbTitle"];
    },
    onTimelineDrag(e) {},
  },
  mounted() {
    console.log("Timeline.mounted: periods = ", periods);
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

    this.globalVars.lastYear = 2015;
    this.globalVars.periods = periods;

    // * load artists
    const artistsFileName = "config/artists" + ucLangCode + ".json";
    this.artists = JSON.parse(readFile(artistsFileName));

    this.globalVars.allYearMarkings = [];
    for (let i = 0; i < periods.length; i++) {
      this.globalVars.allYearMarkings = [
        ...this.globalVars.allYearMarkings,
        ...periods[i].yearMarkings,
      ];
    }

    // console.log("Timeline.created: routes = ", this.$router.options.routes);
    // this.bookRoutes = getRoutesWithString(
    //   this.$router,
    //   this.globalVars.langCode + "/books/",
    // );

    // this.periodRoutes = getRoutesWithString(
    //   this.$router,
    //   this.globalVars.langCode + "/periods/",
    // );

    gsap.registerPlugin(Draggable);

    // console.log("Timeline.created: book routes = ", this.bookRoutes);
    // console.log("Timeline.created: period routes = ", this.periodRoutes);
  },
};
</script>
