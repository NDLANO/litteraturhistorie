<template lang="pug">
#nav
  p {{ $t('general.title') }}
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
      globalVars: {
        langCode: "",
      },
    };
  },
  provide() {
    return {
      globalVars: this.globalVars,
    };
  },
  watch: {
    // * Since route params are not always ready, we need a watcher
    $route(to) {
      console.log("App route watcher: route change to ", to);
      if (!this.languageInitiated && this.$route.params.lang)
        this.initLanguage();
    },
  },
  computed: {
    isValidLang() {
      const lang = this.$route.params.lang;
      if (lang == "nn" || lang == "nb") {
        return true;
      }

      return false;
    },
  },
  methods: {
    // * Inits i18n messages to the correct language
    initLanguage() {
      // * Reroutes if language code is not valid
      if (!this.isValidLang) {
        this.globalVars.langCode = "nb";
        this.$router.push("/" + this.globalVars.langCode);
      } else {
        let messages = {};
        this.globalVars.langCode = this.$route.params.lang;
        if (this.globalVars.langCode == "nn") {
          // * window.litteraturhistorieDictionaryNn/Nb is loaded by index.html
          messages = window.litteraturhistorieDictionaryNn;
        } else {
          messages = window.litteraturhistorieDictionaryNb;
        }

        this.$i18n.setLocaleMessage("no", messages);
        this.languageInitiated = true;
        console.log("App.initLanguage: langCode = ", this.globalVars.langCode);
        console.log("------");
      }
    },
  },
  created() {
    // * Init language if lang param is provided
    if (this.isValidLang) this.initLanguage();
  },
};
</script>
<style lang="scss">
@use "./styles/main";
</style>
