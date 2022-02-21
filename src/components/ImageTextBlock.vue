<template lang="pug">
.flex.flex-wrap
  .col(:class="'col' + imageColumns")
    figure.figure-left.mt5
      img(:src="image" :alt="altText")
      figcaption(v-if="imageCaption !== ''") {{ imageCaption }}
      figcaption(v-if="imageCaption === ''")
        slot(name="caption")
  .image-text-block__text.col(:class="'col' + textWidth")
    slot
</template>

<script>
/**
 * ImageTextBlock
 *
 * Displays an image to the left and slot content to the right.
 *
 * The width of the image is configured using imageColumns. The slot content
 * will take up the rest of the space.
 *
 */
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    // * The number of columns the image should occupy
    // * Page width is 12 columns
    imageColumns: {
      type: Number,
      default: 4,
    },
    imageCaption: {
      type: String,
      default: "",
    },
    altText: {
      type: String,
      default: "",
    },
  },
  computed: {
    textWidth() {
      return 12 - this.imageColumns;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
<style lang="scss">
.image-text-block__text {
  & > h3:first-child,
  & > h5:first-child,
  & > p:first-child {
    margin-top: 0;
  }
}
</style>
