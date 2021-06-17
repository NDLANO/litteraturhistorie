<template lang="pug">
.lo_fullOverlay
  .lo_fullContainer
    .lo_pageTopBar
      ButtonBackArrow
      .pageTopBar_firstItem {{ title }}
      .pageTopBar_secondItem {{ from }} - {{ to }}
    
    .page.page_period
      PageBanner(:src="bannerImage")
      PagePeriodCircle(:src="circleImage" :title="title" :from="from" :to="to")
      .page_content
        slot

        button.btn_back(@click="$router.push(`/${globalVars.langCode}`)")
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          div {{ $t("general.pageBookBackButton")}}

</template>
<script>
import PageBanner from "@/components/PageBanner";
import PagePeriodCircle from "@/components/PagePeriodCircle";

import ButtonBackArrow from "@/components/ButtonBackArrow";

export default {
  name: "PageBook",
  inject: ["globalVars"],
  props: {
    bannerImage: {
      type: String,
      default: "",
    },
    circleImage: {
      type: String,
      default: "",
    },
  },
  components: {
    PageBanner,
    PagePeriodCircle,
    ButtonBackArrow,
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
    from() {
      return this.$route.meta.from;
    },
    to() {
      return this.$route.meta.to;
    },
  },
};
</script>
