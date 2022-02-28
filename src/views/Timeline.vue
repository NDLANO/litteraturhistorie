<template lang="pug">
// * POPUP AUTHOR
.lo_fullOverlay_popup(v-if="showAuthorModal" @pointerdown.self="showAuthorModal = false")
  .lo_authorPopup
      button.btn_close#closePopup(ref="buttonCloseAuthor" @keyup.enter="showAuthorModal = false")
        <svg @click="showAuthorModal = false" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style="width: 24px; height:24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> 
      .authorPopupContent
        h2 {{selectedAuthor.name}} <br>({{selectedAuthor.from}}–{{selectedAuthor.to}})
        ul(v-html="selectedAuthor[globalVars.langCode + 'Text']")
// * CONTENT
.lo_globalContainer
  
  // * NAV
  transition(name="slideInLeft")
    nav.mainMenu(v-show="menuVisible")
      button.btn_close(@click="onMenuCloseClick")
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style="width: 24px; height:24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> 
      .mainMenu_title {{$t("general.menuTitle")}}
      ul.mainMenu_list
        li.mainMenu_list_item(v-for="(period, index) in periods" :key="period.id")        
          a(:ref="'menuItem' + index" href="#" @click="onNavButtonClick(period.id)" tabindex="1") {{ period.nbTitle}}  
    
  // * HEADER
  .lo_topBar
    header.lo_topBar_header
      // * button - jump to period
      button.btn_menu(@click="onMenuOpenClick")
        MenuIcon

      
      h1 Språk- og litteraturhistorisk tidslinje
      .lo_topBar_filters
        ButtonCheckbox(v-model="showBooks") {{ $t("general.showBooks")}}
        ButtonCheckbox(v-model="showPersons") {{ $t("general.showPersons")}}

  // * MAIN CONTENT
  div.lo_sectionList-wrapper(ref="lo_sectionList")
    main.lo_sectionList
    
      ButtonCC
      .lo_sectionsIntroPage
        //.startInstructions
          NdlaLogo(style="width: 84px")
          h1 Språk- og litteraturhistorisk tidslinje
          p Duis augue tortor, gravida non nisi ut, bibendum hendrerit nulla. Quisque vitae ultrices massa. Maecenas sollicitudin ligula et velit varius, in sollicitudin libero iaculis. Nulla facilisi. Phasellus dolor turpis, dapibus sed nisi eu, hendrerit laoreet turpis. Duis accumsan pellentesque libero, in auctor sapien convallis non.
        .startTimeline
      ul.sectionList
        TimelineSection(
          v-for="(period, index) in periods" :key="period.id"
          :index="index",
          :title="getPeriodTitle(period)"
          :mainImageAltText="getPeriodMainImageAltText(period)"
          :from="period.from"
          :to="period.to"
          :id="period.id"
          :timeLabel="getTimeLabel(period)"
          :yearMarkings="period.yearMarkings"
          :sectionWidthMultiplier="period.widthMultiplier"
          :showBooks="showBooks"
          :showPersons="showPersons"
          @authorClick="onAuthorClick"
          @buttonClick="onTimelineSectionClick"
          )
      .lo_endTimeline
        .endTimeline
</template>

<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ButtonCC from "@/components/ButtonCC";
import ButtonBook from "@/components/ButtonBook";
import ButtonAuthor from "@/components/ButtonAuthor";
import ButtonCheckbox from "@/components/ButtonCheckbox";

import MenuIcon from "@/components/ui/MenuIcon";
import NdlaLogo from "@/components/ui/NdlaLogo";
import TimelineSection from "@/components/TimelineSection";

import { readFile } from "@/js/fileTools";
import { periods } from "@/js/periodsData";

import { getRoutesWithString, clampNumber } from "@/js/helpers";

export default {
  name: "Timeline",
  components: {
    ButtonBook,
    ButtonAuthor,
    ButtonCheckbox,
    MenuIcon,
    NdlaLogo,
    TimelineSection,
    ButtonCC,
  },
  data() {
    return {
      menuVisible: false,
      periodLoaded: false,
      artists: null,
      artistRoutes: null,
      isDraggable: true, // * Debug var making it easy to turn off dragging
      periods: periods,
      showAuthorModal: false,
      selectedAuthor: null,
      showBooks: true,
      showPersons: true,
      prevDragX: null,
      prevDragY: null,
      newDragX: null,
      newDragY: null,
      speed: {
        x: 0,
        y: 0,
        max: 100,
        min: 1, // Minimum speed allowed
      },
      inertia: 0.95, // *
    };
  },
  inject: ["globalVars"],
  methods: {
    onMenuOpenClick() {
      this.menuVisible = true;

      // * Set focus to first menu option
      this.$nextTick(() => {
        this.$refs.menuItem0.focus();
      });
    },
    onMenuCloseClick() {
      this.menuVisible = false;
    },
    onNavButtonClick(era) {
      console.log("Timeline.onNavButtonClick: era = ", era);

      const eraButton = document.getElementById(era);
      eraButton.scrollIntoView({
        // behavior: "smooth",
        block: "end",
        inline: "center",
      });

      this.menuVisible = false;

      this.$nextTick(() => {
        eraButton.focus();
      });
    },
    onTimelineSectionClick(event) {
      this.globalVars.timelineScrollLeft = this.$refs.lo_sectionList.scrollLeft;
      this.globalVars.timelineScrollTop = this.$refs.lo_sectionList.scrollTop;
    },
    onAuthorClick(event, author) {
      this.selectedAuthor = author;
      this.showAuthorModal = true;
      this.$nextTick(() => {
        this.$refs.buttonCloseAuthor.focus();
      });
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
    getPeriodMainImageAltText(period) {
      if (this.globalVars.langCode == "nn") return period["nnMainImageAltText"];

      return period["nbMainImageAltText"];
    },
    getTimeLabel(period) {
      if (this.globalVars.langCode == "nn" || period["nnTimeLabel"])
        return period["nnTimeLabel"];
      if (this.globalVars.langCode == "nb" || period["nbTimeLabel"])
        return period["nbTimeLabel"];
      return "";
    },
    onTimelineDragStart(e) {
      console.log("Timeline.onTimelineDragStart: removing ticker");
      gsap.ticker.remove(this.scrollInertia);
      this.prevDragX = this.$refs.lo_sectionList.scrollLeft;
      this.prevDragY = this.$refs.lo_sectionList.scrollTop;
      this.newDragX = this.prevDragX;
      this.newDragY = this.prevDragY;
    },
    onTimelineDrag(e) {
      // * Init prevDragX/Y if no value,
      // * store the (now old) newDragX/Y if not
      if (!this.prevDragX) {
        this.prevDragX = this.$refs.lo_sectionList.scrollLeft;
      } else {
        this.prevDragX = this.newDragX;
      }

      if (!this.prevDragY) {
        this.prevDragY = this.$refs.lo_sectionList.scrollTop;
      } else {
        this.prevDragY = this.newDragY;
      }

      // * Set newDragX/Y
      this.newDragX = this.$refs.lo_sectionList.scrollLeft;
      this.newDragY = this.$refs.lo_sectionList.scrollTop;
    },
    onTimelineDragEnd(e) {
      console.log(
        "Timeline.onTimelineDragend: prevDragX = ",
        this.prevDragX,
        ", scrollLeft = ",
        this.newDragX,
        ", speed = ",
        this.newDragX - this.prevDragX,
      );

      // * Find horizontal and vertical speed and
      this.speed.x = clampNumber(
        this.newDragX - this.prevDragX,
        -this.speed.max,
        this.speed.max,
      );
      this.speed.y = clampNumber(
        this.newDragY - this.prevDragY,
        -this.speed.max,
        this.speed.max,
      );

      this.newDragX = null;
      this.newDragY = null;
      this.prevDragX = null;
      this.prevDragY = null;

      if (this.speed.x !== 0 || this.speed.y !== 0) {
        console.log(
          "Timeline.onTimelineDragEnd: speed is not 0: ",
          this.speed.x,
          ", ",
          this.speed.y,
        );
        console.log("Timeline.onTimelineDragEnd: adding ticker");
        gsap.ticker.add(this.scrollInertia);
      } else {
        console.log("Timeline.onTimelineDragEnd: removing ticker");
        gsap.ticker.remove(this.scrollInertia);
      }
    },
    scrollInertia() {
      this.speed.x = this.calculateSpeedWithInertia(this.speed.x);
      this.speed.y = this.calculateSpeedWithInertia(this.speed.y);

      this.$refs.lo_sectionList.scrollLeft += this.speed.x;
      this.$refs.lo_sectionList.scrollTop += this.speed.y;

      // * If speed is slow or 0, stop animation
      if (this.isReadyToStopMotion()) {
        console.log("Timeline.scrollInertia: removing ticker");
        gsap.ticker.remove(this.scrollInertia);
      }
    },
    isReadyToStopMotion() {
      let isReadyX = true;
      let isReadyY = true;

      if (!this.isAtEdge(this.$refs.lo_sectionList, "horizontal")) {
        if (Math.abs(this.speed.x) > this.speed.min) isReadyX = false;
      }
      if (!this.isAtEdge(this.$refs.lo_sectionList, "vertical")) {
        if (Math.abs(this.speed.y) > this.speed.min) isReadyY = false;
      }

      return isReadyX && isReadyY;
    },
    isAtEdge(element, direction = "horizontal") {
      if (direction === "horizontal") {
        if (
          element.scrollLeft === 0 ||
          element.scrollLeft === element.scrollWidth - element.clientWidth
        )
          return true;
      } else if (direction === "vertical") {
        if (
          element.scrollTop === 0 ||
          element.scrollTop === element.scrollHeight - element.clientHeight
        )
          return true;
      }

      return false;
    },
    calculateSpeedWithInertia(speed) {
      if (speed > 0) {
        speed = speed * this.inertia;
        if (speed < this.speed.min) speed = 0;
      } else if (speed < 0) {
        speed = speed * this.inertia;
        if (speed > this.speed.min) speed = 0;
      }

      return clampNumber(speed, -this.speed.max, this.speed.max);
    },
  },
  mounted() {
    // * Set timelineScroll to zero if not defined
    if (this.globalVars.timelineScrollTop == undefined) {
      this.globalVars.timelineScrollTop = 0;
    }
    if (this.globalVars.timelineScrollLeft == undefined) {
      this.globalVars.timelineScrollLeft = 0;
    }

    // * Initiate if isDraggable
    if (this.isDraggable) {
      Draggable.create(this.$refs.lo_sectionList, {
        type: "scroll",
        dragClickables: true,
        lockAxis: false,
        zIndexBoost: false,
        onDragStart: this.onTimelineDragStart,
        onDrag: this.onTimelineDrag,
        onDragEnd: this.onTimelineDragEnd,
      });
      this.$refs.lo_sectionList.style.overflow = "hidden";
    }

    // * Set scroll left to the stored position
    this.$refs.lo_sectionList.scrollTop = this.globalVars.timelineScrollTop;
    this.$refs.lo_sectionList.scrollLeft = this.globalVars.timelineScrollLeft;
  },
  async created() {
    const ucLangCode = this.globalVars.langCode.toUpperCase();

    // * Checks if app is running on mobile
    const isIpad =
      /Macintosh/.test(navigator.userAgent) && "ontouchend" in document;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) ||
      isIpad
    ) {
      // * Disables gsap Draggable if on mobile
      // * This gives a much smoother experience on mobile
      this.isDraggable = false;

      // * This has to be set for the page to work properly in H5P iframe
      let appElement = document.getElementById("app");
      appElement.style.overflow = "scroll";
    }

    this.globalVars.lastYear = 2020;
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

    gsap.registerPlugin(Draggable);
  },
};
</script>
