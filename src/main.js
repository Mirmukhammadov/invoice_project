import "./assets/main.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import empty from "@/pages/invoicePage.vue";
import Home from "@/pages/index.vue";
import { useMyModule } from "./store/modules/myModule";
import App from "./App.vue";

const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/:index",
      name: "empty",
      component: empty,
    },
  ],
});

createApp(App).use(pinia).use(router).mount("#app");
