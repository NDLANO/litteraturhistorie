<template lang="pug">
.page_circleEra
  img( :src="src")
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
      required: true,
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
  created() {
    console.log("PagePeriodCircle.created: src = ", this.src);
  },
};
</script>
