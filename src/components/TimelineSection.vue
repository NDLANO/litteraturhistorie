<template lang="pug">
li.sectionList_item
  // * The entire section
  section.lo_sectionEra(:style="sectionWidth")
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
        img(src="@/assets/media/img/circle1.png")
        .circleEra_content
          .circleEra_date {{ from }}-{{ to }}
          h2.circleEra_title {{ title }}
          button.btnEra(
            @pointerdown="onPointerDown"
            @pointerup="onEraPointerUp"
          ) Mer info                  
    // * List of books
    ul.bookList
      li(v-for="book in periodBooks" :key="book.id")
        ButtonBook(
          :title="book.nbTitle"
          :author="book.author"
          :path="book.path"
          :style="getBookStyle(book)"
          @buttonClick="$emit('buttonClick')"
        )
    // SeparatorAuthor
    // * List of authors
    ul.authorsList
      li(v-for="author in periodAuthors" :key="author.id")
        ButtonAuthor(
          :name="author.name"
          :style="getAuthorStyle(author)"
          :gotText="author.nnText !== ''"
          @pointerdown="onPointerDown"
          @pointerup="onAuthorPointerUp(author, $event)"
        )
    ul.lo_topBar_timeline.lineslots
      li.timeslot(
        v-for="year in yearMarkings"
        :key="year"
        :style="{ width: year[1] * sectionWidthMultiplier + 'px'}"
      )
        .timeSlot_line

</template>

<script>
import ButtonBook from "@/components/ButtonBook";
import ButtonAuthor from "@/components/ButtonAuthor";

import SeparatorAuthor from "@/components/ui/SeparatorAuthor";
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
    title: {
      type: String,
      default: "_Norrøn tid",
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
  },
  data() {
    return {
      periodBooks: null,
      periodAuthors: null,
      authorRowHeight: 45,
      mouseX: 0,
      mouseY: 0,
    };
  },
  inject: ["globalVars"],
  components: {
    ButtonBook,
    ButtonAuthor,
    SeparatorAuthor,
    TimelineTimeslot,
  },
  computed: {
    sectionWidth() {
      const widthValues = this.yearMarkings.map(
        e => e[1] * this.sectionWidthMultiplier,
      );
      const sum = widthValues.reduce((a, b) => a + b, 0);
      return { width: sum + "px" };
    },
    periodPath() {
      return "/" + this.globalVars.langCode + "/periods/" + this.id + "/";
    },
  },
  methods: {
    onPointerDown(event) {
      console.log("TimelineSection.onPointerDown: event = ", event);

      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
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
      this.$emit("buttonClick");
      if (this.mouseX === event.clientX && this.mouseY === event.clientY) {
        console.log("TimelineSection.onEraPointerUp: both x and y is the same");
        const route = `/${this.globalVars.langCode}/periods/${this.id}`;
        this.$router.push(route);
      } else {
        console.log("TimelineSection.onEraPointerUp: mouse has moved");
      }
    },
    onAuthorClick(author) {
      this.$emit("authorClick", this.$event, author);
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
