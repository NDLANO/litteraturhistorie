<template lang="pug">
video(ref="player" playsinline controls :data-poster="poster")
  source(:src="source")
</template>

<script>
import Plyr from "plyr";

export default {
  name: "NdlaPlayer",
  props: {
    source: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    console.log("ref player = ", this.$refs.player);

    // * Init plyr
    this.player = new Plyr(this.$refs.player);
  },
};
</script>
