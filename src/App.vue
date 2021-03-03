<template lang="pug">
#nav
  p {{ $t('general.testText') }}
  router-link(to="/") Home |
  router-link(to="/about") About
  router-view
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      languageInitiated: false,
    };
  },
  watch: {
    // * Since route params are not always ready, we need a watcher
    $route() {
      if (!this.languageInitiated && this.$route.params.lang)
        this.initLanguage();
    },
  },
  computed: {
    isValidLang() {
      const lang = this.$route.params.lang;
      if (lang == "nn" || lang == "nb") return true;

      return false;
    },
  },
  methods: {
    // * Inits i18n messages to the correct language
    initLanguage() {
      if (!this.isValidLang) {
        this.$router.push("/nb");
      } else {
        let messages = {};
        if (this.$route.params.lang == "nn") {
          // * window.litteraturhistorieDictionaryNn/Nb is loaded by index.html
          messages = window.litteraturhistorieDictionaryNn;
        } else {
          messages = window.litteraturhistorieDictionaryNb;
        }

        this.$i18n.setLocaleMessage("no", messages);
        this.languageInitiated = true;
      }
    },
  },
  created() {
    // * Init language if lang param is provided
    if (this.$route.params.lang) this.initLanguage();
  },
};
</script>
<style lang="scss">
@use "./styles/main";
</style>
