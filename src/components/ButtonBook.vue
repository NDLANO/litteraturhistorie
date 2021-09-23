<template lang="pug">
button.btnBook(@pointerdown="onPointerDown" @pointerup="onPointerUp" @keyup.enter="onEnterKey")
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
  emits: ["buttonClick"],
  inject: ["globalVars"],
  components: {
    IconButtonBook,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
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
    period: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    onEnterKey(event) {
      this.$emit("buttonClick");
      this.showLink();
    },
    onPointerDown(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    onPointerUp(event) {
      console.log("OnPointerUp");
      if (this.mouseX === event.clientX && this.mouseY === event.clientY) {
        console.log("ButtonBook.onPointerUp: both x and y is the same");
        this.$emit("buttonClick");
        this.showLink();
      } else {
        console.log("ButtonBook.onPointerUp: mouse has moved");
      }
    },
    showLink() {
      // Add period query param to the URL
      if (this.id !== "") {
        let route = `/${this.globalVars.langCode}/books/${this.id}`;
        if (this.period !== "") route += `?period=${this.period}`;
        this.$router.push(route);
      } else {
        this.$router.push("/nn/books/asbjornsenmoe");
      }
    },
  },
};
</script>
