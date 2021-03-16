<template lang="pug">
button.btnAuthor(:class="{ 'btnAuthor-noDescription': !gotDescription }")
  div {{ name }}
  IconPlus(v-if="path !== ''")
</template>

<script>
import IconPlus from "@/components/ui/IconPlus";
export default {
  components: {
    IconPlus,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    path: {
      type: String,
      default: "",
    },
  },
  computed: {
    gotDescription() {
      console.log("got description = ", this.path !== "");
      if (this.path !== "") return true;

      return false;
    },
  },
};
</script>

