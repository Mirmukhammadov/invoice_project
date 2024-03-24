import "./assets/main.css";
import { createPinia } from "pinia";

const pinia = createPinia();

import { createApp } from "vue";

import { useMyModule } from "./store/modules/myModule";
import App from "./App.vue";

createApp(App).use(pinia).mount("#app");
