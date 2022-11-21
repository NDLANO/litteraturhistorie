import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import VueGtag from "vue-gtag";

const i18n = createI18n({
  locale: "no",
});
const app = createApp(App);
app.config.devtools = true;
app.use(router);
app.use(i18n);
app.use(VueGtag, {
  config: { id: "G-H7W6XF0WSR" },
});
app.mount("#app");
