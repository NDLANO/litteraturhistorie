<template lang="pug">
#app
  // * POPUP AUTHOR
  lo_fullOverlay_popup

  // * CONTENT
  .lo_globalContainer
    .lo_topBar
      header.lo_topBar_header
        // * button - jump to period
        button.btn_menu
          svg(
            xmlns="http://www.w3.org/2000/svg",
            height="24",
            viewBox="0 0 24 24",
            width="24"
          ) <path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        .header_eraName Realisme og naturalisme
      ul.lo_topBar_timeline
        li.timeSlot(style="width: 400px")
          .timeSlot_year 1600
          .timeSlot_dot
          .timeSlot_line
        li.timeSlot(style="width: 400px")
          .timeSlot_year 1650
          .timeSlot_dot
          .timeSlot_line
        li.timeSlot(style="width: 400px")
          .timeSlot_year 1700
          .timeSlot_dot
          .timeSlot_line
        li.timeSlot(style="width: 400px")
          .timeSlot_year 1700
          .timeSlot_dot
          .timeSlot_line
        li.timeSlot(style="width: 400px")
          .timeSlot_year 1750
          .timeSlot_dot
          .timeSlot_line
        li.timeSlot(style="width: 400px")
          .timeSlot_year 1800
          .timeSlot_dot
          .timeSlot_line
        li.timeSlot(style="width: 400px")
          .timeSlot_year 1850
          .timeSlot_dot
          .timeSlot_line
        li.timeSlot(style="width: 400px")
          .timeSlot_year 1900
          .timeSlot_dot
          .timeSlot_line
        li.timeSlot(style="width: 400px")
          .timeSlot_year 1950
          .timeSlot_dot
          .timeSlot_line
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
      console.log("------");
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
