<template lang="pug">
.page_banner
  img(:src="src")
</template>

<script>
export default {
  name: "PageBanner",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
