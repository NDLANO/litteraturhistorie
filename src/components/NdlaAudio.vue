<template lang="pug">
audio(ref="player" controls)
    source(:src="source")
.description {{ description }}
button.audioplayer.mt10(v-if="gotSlotContent" ref="textButton" @click="onTextButtonClick") {{ showText ? $t("audioplayer.hideText") : $t("audioplayer.showText")}}
.audiotext.mt10
  slot(v-if="showText")
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
      showText: false,
    };
  },
  methods: {
    onTextButtonClick() {
      this.showText = !this.showText;
    },
  },
  computed: {
    gotSlotContent() {
      if (this.$slots.default) return true;

      return false;
    },
  },
  mounted() {
    this.player = new Plyr(this.$refs.player);
  },
};
</script>

<style lang="scss" scoped>
.audioplayer {
  width: 100px;
}
</style>
