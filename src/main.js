import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const langCode = urlParams.get("lang");

let messages = {};
if (langCode == "nn") {
  messages.no = window.statistikkDictionaryNn;
} else {
  messages.no = window.statistikkDictionaryNb;
}

const i18n = createI18n({
  locale: "no",
  messages
});

createApp(App)
  .use(router)
  .use(i18n)
  .mount("#app");
