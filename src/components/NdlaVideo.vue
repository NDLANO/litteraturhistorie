<template lang="pug">
h1 Video component
video(ref="player" playsinline controls)
  source(src="video/BigBuckBunny.mp4")
</template>

<script>
import Plyr from "plyr";

export default {
  name: "NdlaVideo",
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    // this.player = new Plyr(this.$);
    console.log("ref player = ", this.$refs.player);
  },
};
</script>
