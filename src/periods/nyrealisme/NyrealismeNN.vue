<template lang="pug">
PagePeriod
  // Content here

</template>

<script>
import ImageTextBlock from "@/components/ImageTextBlock";
import PagePeriod from "@/components/PagePeriod";
import NdlaVideo from "@/components/NdlaVideo";
import NdlaAudio from "@/components/NdlaAudio";

export default {
  name: "Book",
  components: {
    ImageTextBlock,
    NdlaAudio,
    NdlaVideo,
    PagePeriod,
  },
};
</script>
