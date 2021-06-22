<template>
  <div ref="videoWrapper" class="mt20 mb20">
    <div class="nrk-video" :data-nrk-id="id">&nbsp;</div>
    <!-- <script src="https://static.nrk.no/ludo/latest/video-embed.js"></script> -->
  </div>
</template>

<script>
export default {
  name: "NrkVideo",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log("NrkVideo.mounted: videoWrapper = ", this.$refs.videoWrapper);
    // let scriptElement = this.$refs.videoWrapper.createElement("script");
    let scriptElement = document.createElement("script");
    scriptElement.setAttribute(
      "src",
      "https://static.nrk.no/ludo/latest/video-embed.js",
    );
    this.$refs.videoWrapper.appendChild(scriptElement);
  },
};
</script>
