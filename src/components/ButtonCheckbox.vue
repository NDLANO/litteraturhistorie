<template lang="pug">
button.btn_filter(@click="onButtonClick")
    .btn_filter_icon(v-if="!modelValue") <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
    .btn_filter_icon(v-if="modelValue") <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"/></svg>

    .btn_filter_text 
      slot
</template>

<script>
export default {
  name: "ButtonCheckbox",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onButtonClick() {
      console.log("ButtonCheckbox: onButtonClick");
      // this.$emit("update:selected", !this.selected);
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
