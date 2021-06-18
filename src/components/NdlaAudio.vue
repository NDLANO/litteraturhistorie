<template lang="pug">
audio(ref="player" controls)
  source(:src="source")
.description {{ description }}
</template>

<script>
import Plyr from "plyr";

export default {
  name: "NdlaAudio",
  props: {
    source: {
      type: String,
      required: true,
    },
    description: {
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
    this.player = new Plyr(this.$refs.player);
  },
};
</script>
