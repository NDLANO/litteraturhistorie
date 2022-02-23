<template lang="pug">
li.sectionList_item
  // * The entire section
  section.lo_sectionEra(:style="sectionSize")
    // * Topbar with line and dots
    ul.lo_topBar_timeline
      TimelineTimeslot(
        v-for="year in yearMarkings"
        :key="year"
        :slotWidth="year[1] * sectionWidthMultiplier" 
        :year="year[0]")
    // * The circle and link in the middle of the era
    .lo_circleEra
      .circleEra
        img(
          :src="require(`@/periods/${id}/sirkel_${id}.png`)" 
          :alt="mainImageAltText"
          )
        .circleEra_content
          .circleEra_date.timeLabel(v-if="timeLabel !== ''") {{ timeLabel }}
          .circleEra_date.from-to(v-if="timeLabel === ''") {{ from }}-{{ to }}
          h2.circleEra_title {{ title }}
          button.btnEra(:id="id"
            @keydown.enter="onEraEnterKeyDown"
            @keyup.enter="onEraEnterKeyUp"
            @pointerdown="onPointerDown"
            @pointerup="onEraPointerUp"
          ) {{ $t("general.periodTimelineButton")}}                  
    // * List of books
    ul.bookList(:style="borderBottomStyle")
      li(v-if="showBooks" v-for="book in periodBooks" :key="book.id")
        ButtonBook(
          :id="book.id"
          :title="getBookTitle(book)"
          :author="book.author"
          :style="getBookStyle(book)"
          :period="id"
          @buttonClick="$emit('buttonClick')"
        )
    .div(v-if="showPersons")
      SeparatorAuthor_nb(v-if="showAuthorSeparator && globalVars.langCode === 'nb'")
      SeparatorAuthor_nn(v-if="showAuthorSeparator && globalVars.langCode === 'nn'")
    // * List of authors
    ul.authorsList(v-if="showPersons")
      li(v-for="author in periodAuthors" :key="author.id")
        ButtonAuthor(
          :name="author.name"
          :style="getAuthorStyle(author)"
          :gotText="author.nnText !== ''"
          @pointerdown="onPointerDown"
          @pointerup="onAuthorPointerUp(author, $event)"
          @keyup.enter="onAuthorClick(author)"
        )
    ul.lo_topBar_timeline.lineslots
      li.timeslot(
        v-for="year in yearMarkings"
        :key="year"
        :style="{ width: year[1] * sectionWidthMultiplier + 'px'}"
      )
        .timeSlot_line(:style="timeSlotLineStyle")

</template>

<script>
import ButtonBook from "@/components/ButtonBook";
import ButtonAuthor from "@/components/ButtonAuthor";

import SeparatorAuthor_nb from "@/components/ui/SeparatorAuthor_nb";
import SeparatorAuthor_nn from "@/components/ui/SeparatorAuthor_nn";
import TimelineTimeslot from "@/components/TimelineTimeslot";

import { books } from "@/js/booksData";
import { authors } from "@/js/authorsData";
import {
  getElementPlacement,
  getElementPosition,
  calculateElementWidth,
} from "@/js/helpers";

export default {
  name: "TimelineSection",
  emits: ["authorClick", "buttonClick"],
  props: {
    index: {
      type: Number,
      default: -1,
    },
    title: {
      type: String,
      default: "_Norrøn tid",
    },
    mainImageAltText: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      // required: true,
      default: "norron",
    },
    from: {
      type: String,
      default: "800",
    },
    to: {
      type: String,
      default: "1350",
    },
    timeLabel: {
      type: String,
      default: "",
    },
    yearMarkings: {
      type: Array,
      default: () => [
        [800, 42],
        [850, 44],
        [900, 47],
        [950, 52],
        [1000, 55],
        [1050, 60],
        [1100, 65],
        [1150, 71],
        [1200, 78],
        [1250, 86],
        [1300, 95],
      ],
    },
    sectionWidthMultiplier: {
      type: Number,
      default: 1,
    },
    showBooks: {
      type: Boolean,
      default: true,
    },
    showPersons: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      periodBooks: null,
      periodAuthors: null,
      authorRowHeight: 45,
      mouseX: 0,
      mouseY: 0,
      eraPointerDown: false,
      eraEnterKeyDown: false,
    };
  },
  inject: ["globalVars"],
  components: {
    ButtonBook,
    ButtonAuthor,
    SeparatorAuthor_nb,
    SeparatorAuthor_nn,
    TimelineTimeslot,
  },
  computed: {
    timeSlotLineStyle() {
      if (!this.showPersons) return { height: "500px" };
      return {};
    },
    borderBottomStyle() {
      if (!this.showPersons) return { borderBottom: "none" };
      return {};
    },
    sectionSize() {
      const widthValues = this.yearMarkings.map(
        e => e[1] * this.sectionWidthMultiplier,
      );
      const sum = widthValues.reduce((a, b) => a + b, 0);

      let heightValue = "auto";
      if (!this.showPersons) heightValue = "555px";
      return { width: sum + "px", height: heightValue };
    },
    periodPath() {
      return "/" + this.globalVars.langCode + "/periods/" + this.id + "/";
    },
    showAuthorSeparator() {
      if (this.index === 0) return true;

      return false;
    },
  },
  methods: {
    onPointerDown(event) {
      console.log("TimelineSection.onPointerDown: event = ", event);

      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      this.eraPointerDown = true;
    },
    onAuthorPointerUp(author, event) {
      if (this.mouseX === event.clientX && this.mouseY === event.clientY) {
        console.log(
          "TimelineSection.onAuthorPointerUp: both x and y is the same",
        );
        this.onAuthorClick(author);
      } else {
        console.log("TimelineSection.onAuthorPointerUp: mouse has moved");
      }
    },
    onEraPointerUp(event) {
      if (!this.eraPointerDown) return; // * if down was not registered inside button, do not do anything on up

      this.eraPointerDown = false;
      this.$emit("buttonClick");
      if (this.mouseX === event.clientX && this.mouseY === event.clientY) {
        console.log("TimelineSection.onEraPointerUp: both x and y is the same");
        const route = `/${this.globalVars.langCode}/periods/${this.id}`;
        this.$router.push(route);
      } else {
        console.log("TimelineSection.onEraPointerUp: mouse has moved");
      }
    },
    onEraEnterKeyDown(event) {
      this.eraEnterKeyDown = true;
    },
    onEraEnterKeyUp(event) {
      if (!this.eraEnterKeyDown) return; // * if enter down was not registered inside button, do not do anything on up

      this.eraEnterKeyDown = false;
      const route = `/${this.globalVars.langCode}/periods/${this.id}`;
      this.$router.push(route);
    },
    onAuthorClick(author) {
      this.$emit("authorClick", this.$event, author);
    },
    getBookTitle(book) {
      if (this.globalVars.langCode === "nb") {
        return book.nbTitle;
      }

      return book.nnTitle;
    },
    getBookStyle(book) {
      let realLeftValue;

      if (book) {
        realLeftValue = getElementPosition(
          book.year,
          this.globalVars.periods,
          this.globalVars.allYearMarkings,
          this.globalVars.lastYear,
        );
      }

      realLeftValue = realLeftValue * this.sectionWidthMultiplier;
      return { top: book.top + "px", left: realLeftValue + "px" };
    },
    getAuthorStyle(author) {
      let realLeftValue;
      let width;
      if (author) {
        realLeftValue = getElementPosition(
          author.from,
          this.globalVars.periods,
          this.globalVars.allYearMarkings,
          this.globalVars.lastYear,
        );
        width = calculateElementWidth(
          author.from,
          author.to,
          this.globalVars.allYearMarkings,
          this.globalVars.lastYear,
          this.globalVars.periods,
        );
      }

      let top = 0;
      if (author.row) {
        top = author.row * this.authorRowHeight;
      }
      realLeftValue = realLeftValue * this.sectionWidthMultiplier;
      return {
        left: realLeftValue + "px",
        width: width + "px",
        top: top + "px",
      };
    },
  },
  created() {
    this.periodBooks = books.filter(
      book => book.year >= this.from && book.year < this.to,
    );
    this.periodAuthors = authors.filter(
      author => author.from >= this.from && author.from < this.to,
    );
  },
};
</script>

<style lang="scss" scoped></style>
