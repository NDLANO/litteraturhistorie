<template>
  <div>
    <h1>TimeLine - {{ globalVars.langCode }}</h1>
    <p v-if="periodLoaded">Period loaded</p>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  data() {
    return {
      periodLoaded: false,
    };
  },
  inject: ["globalVars"],
  // watch: {
  //   langCode: {
  //     handler(new_langCode) {
  //       console.log("new_langCode: ", new_langCode);
  //     },
  //     deep: true,
  //   },
  // },
  mounted() {
    console.log("TimeLine.mounted: langCode =", this.globalVars.langCode);
  },
};
</script>

<style lang="scss" scoped></style>
