<template lang="pug">
.page_banner
  img(:src="imageSrc")
</template>

<script>
export default {
  name: "PageBanner",
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      defaultFilename: "banner.jpg",
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

<style lang="scss" scoped></style>
