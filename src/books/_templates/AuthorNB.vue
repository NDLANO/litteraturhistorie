<template lang="pug">
PageBook
  p Bokmålsinnhold plasseres her



</template>

<script>
import PageBook from "@/components/PageBook";
import NdlaVideo from "@/components/NdlaVideo";
import NdlaAudio from "@/components/NdlaAudio";
import ImageTextBlock from "@/components/ImageTextBlock";

export default {
  name: "Book",
  components: {
    ImageTextBlock,
    NdlaAudio,
    NdlaVideo,
    PageBook,
  },
};
</script>

<style lang="scss" scoped></style>
