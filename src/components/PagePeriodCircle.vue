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
  data() {
    return {
      defaultFilename: "circle.png",
    };
  },
  computed: {
    imageSrc() {
      if (this.src === "") {
        let tmpUrl = "media/";
        tmpUrl += this.$route.fullPath.substring(4);

        return tmpUrl + "/" + this.defaultFilename;
      }

      return this.src;
    },
  },
};
</script>
