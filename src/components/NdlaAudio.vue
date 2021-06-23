<template lang="pug">
audio(ref="player" controls)
    source(:src="source")
.description {{ description }}
button.audioplayer.mt10(v-if="false" ref="textButton" @click="onTextButtonClick") {{ showText ? $t("audioplayer.hideText") : $t("audioplayer.showText")}}
button.btn_audioText(v-if="gotSlotContent" ref="textButton" @click="onTextButtonClick")
  .btn_audioText_icon
    <svg v-if="showText" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" class="cls-1" d="M0,0H24V24H0Z"/><path d="M20,5V17H18.66l1.91,1.91A2,2,0,0,0,22,17V5a2,2,0,0,0-2-2H4.66l2,2ZM6,13H9.09l2,2H6Zm12-3H11.66l2,2H18Zm0-3H8.53L10,8.3l.66.66H18ZM1.41,2.55,0,4,2,6V17a2,2,0,0,0,2,2H15l2.48,2.49L18.89,20ZM5.17,17H4V8l2,2v2H8l5,5Z"/></svg>
    <svg v-if="!showText" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0,0H24V24H0Z"/><path d="M20,3H4A2,2,0,0,0,2,5V17a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V5A2,2,0,0,0,20,3Zm0,14H4V5H20ZM6,7H18V9H6Zm0,3H18v2H6Zm0,3h9v2H6Z"/></svg>
  .btn_audioText_text {{ showText ? $t("audioplayer.hideText") : $t("audioplayer.showText")}}
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
