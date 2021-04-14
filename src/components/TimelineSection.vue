<template lang="pug">
li.sectionList_item
  // * The entire section
  section.lo_sectionEra(:style="sectionWidth")
    //.lo_topBar_wrapper
    // * Topbar with line and dots
    ul.lo_topBar_timeline
      TimelineTimeslot(
        v-for="year in yearMarkings"
        :key="year"
        :slotWidth="year[1] * slotWidthMultiplier" 
        :year="year[0]")
    // * The circle and link in the middle of the era
    .lo_circleEra
      .circleEra
        img(src="@/assets/media/img/circle1.png")
        .circleEra_content
          .circleEra_date {{ from }}-{{ to }}
          h2.circleEra_title {{ title }}
          button.btnEra(@click="$router.push(periodPath)") Mer info                  
    // * List of books
    ul.bookList
      li(v-for="book in periodBooks" :key="book.id")
        ButtonBook(
          :title="book.nbTitle"
          :author="book.author"
          :path="book.path"
          :style="getStyle(book)"
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
</template>

<script>
import ButtonBook from "@/components/ButtonBook";
import ButtonAuthor from "@/components/ButtonAuthor";

import SeparatorAuthor from "@/components/ui/SeparatorAuthor";
import TimelineTimeslot from "@/components/TimelineTimeslot";

import { books } from "@/js/booksData";
import { getBookPlacement } from "@/js/helpers";

export default {
  name: "TimelineSection",
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
  },
  data() {
    return {
      slotWidthMultiplier: 1,
      periodBooks: null,
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
        e => e[1] * this.slotWidthMultiplier,
      );
      const sum = widthValues.reduce((a, b) => a + b, 0);
      console.log("sum = ", sum);
      return { width: sum + "px" };
    },
    periodPath() {
      return "/" + this.globalVars.langCode + "/periods/" + this.id + "/";
    },
  },
  methods: {
    getStyle(book) {
      let realLeftValue = getBookPlacement(
        book,
        this.globalVars.periods,
        this.globalVars.allYearMarkings,
        this.globalVars.lastYear,
      );

      realLeftValue = realLeftValue * this.slotWidthMultiplier;
      return { top: book.top + "px", left: realLeftValue + "px" };
    },
  },
  mounted() {
    // console.log("TimelineSelection: period = ", this.period.meta.title);
  },
  created() {
    this.periodBooks = books.filter(book => book.period === this.id);
    console.log(
      "TimelineSection.created: allYearMarkings = ",
      this.globalVars.allYearMarkings,
    );

    console.log("TimelineSection.created: periods = ", this.globalVars.periods);
    // console.log("TimelineSection.created: period books = ", this.periodBooks);
  },
};
</script>

<style lang="scss" scoped></style>
