<template lang="pug">
PagePeriod(
  :bannerImage="require(`./banner.jpg`)"
  :circleImage="require(`./circle.png`)"
  )
  // Content here
  h1 Barokk
</template>

<script>
import PagePeriod from "@/components/PagePeriod";
import NdlaVideo from "@/components/NdlaVideo";
import NdlaAudio from "@/components/NdlaAudio";

export default {
  name: "Book",
  components: {
    NdlaAudio,
    NdlaVideo,
    PagePeriod,
  },
};
</script>
