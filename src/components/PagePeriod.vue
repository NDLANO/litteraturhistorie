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

        button(@click="$router.go(-1)") {{ $t("general.pageBookBackButton")}}

</template>
<script>
import PageBanner from "@/components/PageBanner";
import PagePeriodCircle from "@/components/PagePeriodCircle";

import ButtonBackArrow from "@/components/ButtonBackArrow";

export default {
  name: "PageBook",
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
