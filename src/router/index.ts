import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/views/home/HomePage.vue";
import AreaPage from "@/views/area/AreaPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/area",
      name: "area",
      component: AreaPage,
    },
  ],
});

export default router;
