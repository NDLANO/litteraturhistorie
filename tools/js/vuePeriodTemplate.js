exports.template = (title, from, to) => {
  return `<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Fra: {{ yearFrom }} - {{ yearTo }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    yearFrom: {
      type: Number,
      default: 0,
    },
    yearTo: {
      type: Number,
      default: 0,
    }
  }
}
</script>
`;
};
