<template>
  <div>
    <h1>TimeLine</h1>
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
};
</script>

<style lang="scss" scoped></style>
