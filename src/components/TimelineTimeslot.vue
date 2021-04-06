<template lang="pug">
li.timeSlot(:style="{ width: slotWidth + 'px'}")
  .timeSlot_year {{ year }}
  .timeSlot_dot
  .timeSlot_line
</template>

<script>
export default {
  name: "TimelineTimeslot",
  props: {
    slotWidth: {
      type: Number,
      default: 400,
    },
    year: {
      type: String,
      default: "0",
    },
  },
};
</script>

<style lang="scss" scoped></style>
