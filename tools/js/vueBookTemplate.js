exports.template = dummyText => {
  return `<template lang="pug">
div.book
  h1 {{ title }}
  h2 {{ author}}
  div.year Utgitt {{ year }}

</template>
<script>
export default {
  name: "Book",
  computed: {
    author() {
      return this.$route.meta.author;
    },
    title() {
      return this.$route.meta.title;
    },
    year() {
      return this.$route.meta.year;
    },
    cover() {
      return this.$route.meta.cover;
    }
  }
}
</script>    
  `;
};
