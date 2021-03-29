<template>
  <div class="page_circleEra">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: "PagePeriodCircle",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  created() {
    console.log("PagePeriodCircle.created: src = ", this.src);
  },
};
</script>
