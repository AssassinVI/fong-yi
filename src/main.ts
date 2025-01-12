import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "@/assets/scss/app.scss";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
