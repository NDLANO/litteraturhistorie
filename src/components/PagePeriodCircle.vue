<template lang="pug">
.page_circleEra
  img( :src="imageSrc")
  .circleEra_content
    .circleEra_date {{ from }}-{{ to }}
    h2.circleEra_title {{ title }}
</template>

<script>
export default {
  name: "PagePeriodCircle",
  props: {
    src: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "",
    },
    from: {
      type: String,
      default: "",
    },
  },
  computed: {
    imageSrc() {
      if (this.src === "") return "media/circle.png";

      return this.src;
    },
  },
};
</script>
