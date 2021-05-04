<template lang="pug">
button.btnBook(@pointerdown="onPointerDown" @pointerup="onPointerUp")
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
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    onPointerDown(event) {
      console.log("ButtonBook.onPointerDown: event = ", event);

      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    onPointerUp(event) {
      if (this.mouseX === event.clientX && this.mouseY === event.clientY) {
        console.log("ButtonBook.onPointerUp: both x and y is the same");
        this.$emit("buttonClick");
        this.showLink();
      } else {
        console.log("ButtonBook.onPointerUp: mouse has moved");
      }
    },
    showLink() {
      if (this.path !== "") {
        this.$router.push(this.path);
      } else {
        this.$router.push("/nn/books/asbjornsenmoe");
      }
    },
  },
};
</script>
