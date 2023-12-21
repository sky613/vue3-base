import i18nInstance from "@/i18n/index";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

createApp(App).use(router).use(createPinia()).use(i18nInstance).mount("#app");
