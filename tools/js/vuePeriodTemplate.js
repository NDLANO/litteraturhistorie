exports.template = (title, from, to) => {
  return `<template lang="pug">
div.period
  h1 {{ title }}
  p Fra: {{ yearFrom }} - {{ yearTo }}

</template>

<script>
export default {
  name: "Period",
  computed: {
    title() {
      return this.$route.meta.title;
    },
    from() {
      return this.$route.meta.from;
    },
    to() {
      return this.$route.meta.to;
    },
    y() {
      return this.$route.meta.y;
    },
  }
}
</script>
`;
};
