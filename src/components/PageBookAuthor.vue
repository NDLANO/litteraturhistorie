<template lang="pug">
.page_content_bookAuthor
  h2.page_content_bookName {{ this.title }}
  .page_content_author
    IconPerson
    div {{ this.author }}

</template>

<script>
import IconPerson from "@/components/IconPerson";

export default {
  name: "PageBookAuthor",
  props: {
    title: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
  },
  components: {
    IconPerson,
  },
};
</script>
