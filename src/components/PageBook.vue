<template lang="pug">
.lo_fullOverlay
  .lo_fullContainer
    .lo_pageTopBar
      ButtonBackArrow
      .pageTopBar_firstItem {{ title }}
      .pageTopBar_secondItem {{ author }}
    
    .page.page_book
      PageBanner(:src="bannerImageLink")
      .page_content
        PageBookAuthor(:title="title" :author="author" :showAuthor="showAuthor")
        slot
        
        button.btn_back(@click="$router.push(`/${globalVars.langCode}`)")
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          div {{ $t("general.pageBookBackButton")}}
        
</template>
<script>
import PageBanner from "@/components/PageBanner";
import PageBookAuthor from "@/components/PageBookAuthor";

import ButtonBackArrow from "@/components/ButtonBackArrow";

export default {
  name: "PageBook",
  inject: ["globalVars"],
  components: {
    PageBanner,
    PageBookAuthor,
    ButtonBackArrow,
  },
  props: {
    bannerImage: {
      type: String,
      default: "",
    },
    showAuthor: {
      type: Boolean,
      default: true,
    },
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
    bannerImageLink() {
      // * If bannerImage is defined, use that
      if (this.bannerImage !== "") return this.bannerImage;

      // * If not use period banner
      const periodId = this.$route.query.period;

      const bannerUrl = `media/periods/${periodId}/${periodId}.jpg`;

      return bannerUrl;
    },
  },
};
</script>
