import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "no",
});

const app = createApp(App);
app.config.devtools = true;
app.use(router);
app.use(i18n);
app.mount("#app");
