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
        
        button.btn_audioText
          .btn_audioText_icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" class="cls-1" d="M0,0H24V24H0Z"/><path d="M20,5V17H18.66l1.91,1.91A2,2,0,0,0,22,17V5a2,2,0,0,0-2-2H4.66l2,2ZM6,13H9.09l2,2H6Zm12-3H11.66l2,2H18Zm0-3H8.53L10,8.3l.66.66H18ZM1.41,2.55,0,4,2,6V17a2,2,0,0,0,2,2H15l2.48,2.49L18.89,20ZM5.17,17H4V8l2,2v2H8l5,5Z"/></svg>
            //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0,0H24V24H0Z"/><path d="M20,3H4A2,2,0,0,0,2,5V17a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V5A2,2,0,0,0,20,3Zm0,14H4V5H20ZM6,7H18V9H6Zm0,3H18v2H6Zm0,3h9v2H6Z"/></svg>
          .btn_audioText_text Lorem ipsum


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
