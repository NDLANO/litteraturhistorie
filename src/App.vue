<template lang="pug">
#vue-app
  router-view
  //#nav(v-if="languageInitiated")
    p {{ $t('general.title') }}
    //- router-link(to="/") Home |
    //- router-link(to="/about") About
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
        publicPath: process.env.BASE_URL,
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
      if (!this.languageInitiated) this.initLanguage();
    },
  },
  computed: {
    isValidLang() {
      const lang = this.$route.fullPath.split("/")[1];
      if (lang == "nn" || lang == "nb") {
        return true;
      }

      return false;
    },
  },
  methods: {
    // * Inits i18n messages to the correct language
    initLanguage() {
      // * If not valid lang path, router will reroute to nb
      // * so set lang to nb
      if (this.$route.fullPath === "/") {
        console.log("App.initLanguage = /");
        this.globalVars.langCode = "nb";
      } else {
        console.log(
          "App.initLanguage: route first = ",
          this.$route.fullPath.split("/")[1],
        );
        this.globalVars.langCode = this.$route.fullPath.split("/")[1];
      }

      let messages = {};
      if (this.globalVars.langCode == "nn") {
        // * window.litteraturhistorieDictionaryNn/Nb is loaded by index.html
        messages = window.litteraturhistorieDictionaryNn;
      } else {
        messages = window.litteraturhistorieDictionaryNb;
      }

      this.$i18n.setLocaleMessage("no", messages);
      this.languageInitiated = true;

      console.log("App.initLanguage: langCode = ", this.globalVars.langCode);
    },
  },
  created() {
    // * Init language if valid language in first part of url
    // * This is not needed in prod, but prevents errors when
    // * hot reloading on dev server
    if (this.isValidLang) this.initLanguage();
  },
};
</script>
<style lang="scss">
@use "./sass/main";
</style>

<style>
.slideInLeft-enter-active,
.slideInLeft-leave-active {
  transition: all 0.25s ease;
}

.slideInLeft-enter-from,
.slideInLeft-leave-to {
  transform: translateX(-26rem);
  opacity: 0;
}
</style>
