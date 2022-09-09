<template>
  <div ref="videoWrapper" class="mt20 mb20">
    <div style="position: relative; display: block; max-width: 960px;">
      <div style="padding-top: 56.25%;">
        <iframe
          :src="
            'https://players.brightcove.net/4806596774001/oB5bDFv99_default/index.html?videoId=' +
              id
          "
          allowfullscreen=""
          allow="encrypted-media"
          style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 100%;"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brightcove",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log("Brightcove.mounted: videoWrapper = ", this.$refs.videoWrapper);
  },
};
</script>
