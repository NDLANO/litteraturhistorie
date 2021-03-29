<template lang="pug">
.lo_fullOverlay
  .lo_fullContainer
    .lo_pageTopBar
      ButtonBackArrow
      .pageTopBar_firstItem {{ this.title }}
      .pageTopBar_secondItem {{ this.author }}
    
    .page
      PageBanner
      .page_content
        PageBookAuthor(:title="title" :author="author")
        slot

        button(@click="$router.go(-1)") {{ $t("general.pageBookBackButton")}}

</template>
<script>
import PageBanner from "@/components/PageBanner";
import PageBookAuthor from "@/components/PageBookAuthor";

import ButtonBackArrow from "@/components/ButtonBackArrow";

export default {
  name: "PageBook",
  components: {
    PageBanner,
    PageBookAuthor,
    ButtonBackArrow,
  },
  computed: {
    author() {
      return this.$route.meta.author;
    },
    title() {
      return this.$route.meta.title;
    },
    year() {
      return this.$route.meta.year;
    },
    cover() {
      return this.$route.meta.cover;
    },
  },
};
</script>
