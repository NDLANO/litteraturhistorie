<template lang="pug">
div
  video(ref="player" v-if="playerType === 'local'" playsinline controls :data-poster="poster")
    source(:src="source")
    track(
      v-if="captionsUrl!==''" 
      kind="captions"
      :src="captionsUrl"
      )
  
  .div.plyr__video-embed(id="ytplayer" v-if="playerType === 'youtube'" ref="ytplayer")
    iframe(:src="source" allowfullscreen allowtransparancy allow="autoplay")
  .description(v-if="description !== ''") {{ description }}
</template>

<script>
import Plyr from "plyr";

export default {
  name: "NdlaVideo",
  props: {
    source: {
      type: String,
      required: true,
    },
    captionsUrl: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    poster: {
      type: String,
      default: "",
    },
    playerType: {
      type: String,
      default: "local", // local or youtube. NB! Youtube source link must be the embed URL
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
    if (this.playerType === "youtube") {
      this.player = new Plyr(this.$refs.ytplayer);
    } else {
      this.player = new Plyr(this.$refs.player);
    }
  },
};
</script>
