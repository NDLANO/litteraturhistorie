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
        :slotWidth="year[1]" 
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
</template>

<script>
import ButtonBook from "@/components/ButtonBook";
import ButtonAuthor from "@/components/ButtonAuthor";

import SeparatorAuthor from "@/components/ui/SeparatorAuthor";
import TimelineTimeslot from "@/components/TimelineTimeslot";

export default {
  name: "TimelineSection",
  props: {
    title: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "",
    },
    yearMarkings: {
      type: Array,
      required: true,
    },
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
      const widthValues = this.yearMarkings.map(e => e[1]);
      const sum = widthValues.reduce((a, b) => a + b, 0);
      console.log("sum = ", sum);
      return { width: sum + "px" };
    },
    periodPath() {
      return "/" + this.globalVars.langCode + "/periods/" + this.id + "/";
    },
  },
  mounted() {
    // console.log("TimelineSelection: period = ", this.period.meta.title);
  },
};
</script>

<style lang="scss" scoped></style>
