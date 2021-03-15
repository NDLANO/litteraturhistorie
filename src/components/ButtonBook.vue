<template lang="pug">
.btnBook(@click="showLink")
  .btnBook_icon
    IconButtonBook
  .btnBook_infos
    .btnBook_title {{ title }}
    .btnBook_author {{ author }}
</template>

<script>
import IconButtonBook from "@/components/ui/IconButtonBook";

export default {
  name: "ButtonBook",
  components: {
    IconButtonBook,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    path: {
      type: String,
      default: "",
    },
  },
  methods: {
    showLink() {
      if (this.path !== "") {
        this.$router.push(this.path);
      }
    },
  },
};
</script>
