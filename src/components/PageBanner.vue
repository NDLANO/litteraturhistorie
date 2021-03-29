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
  computed: {
    imageSrc() {
      if (this.src === "") return "media/banner.jpg";

      return this.src;
    },
  },
};
</script>

<style lang="scss" scoped></style>
