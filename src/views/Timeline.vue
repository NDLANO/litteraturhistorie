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
        TimelineSection(
          v-for="period in periods" :key="period.id"
          :title="getPeriodTitle(period)"
          :from="period.from"
          :to="period.to"
          :id="period.id"
          :yearMarkings="period.yearMarkings"
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
      isDraggable: false, // * Debug var making it easy to turn off dragging
      periods: periods,
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

    // * load artists
    const artistsFileName = "config/artists" + ucLangCode + ".json";
    this.artists = JSON.parse(readFile(artistsFileName));

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
