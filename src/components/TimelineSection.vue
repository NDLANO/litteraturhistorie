<template lang="pug">
li.sectionList_item
  // * The entire section
  section.lo_sectionEra(style="width: 1000px")
    //.lo_topBar_wrapper
    // * Topbar with line and dots
    ul.lo_topBar_timeline
      li.timeSlot(style="width: 600px")
        .timeSlot_year 1600
        .timeSlot_dot
        .timeSlot_line
      li.timeSlot(style="width: 400px")
        .timeSlot_year 1650
        .timeSlot_dot
        .timeSlot_line
      //li.timeSlot(style="width: 400px")
        .timeSlot_year 1700
        .timeSlot_dot
        .timeSlot_line
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
</template>

<script>
import ButtonBook from "@/components/ButtonBook";
import ButtonAuthor from "@/components/ButtonAuthor";

import SeparatorAuthor from "@/components/ui/SeparatorAuthor";
import TimelineSection from "@/components/TimelineSection";

export default {
  name: "TimelineSection",
  components: {
    ButtonBook,
    ButtonAuthor,
    SeparatorAuthor,
    TimelineSection,
  },
};
</script>

<style lang="scss" scoped></style>
