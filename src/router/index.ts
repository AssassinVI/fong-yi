import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/views/home/HomePage.vue";
import AreaPage from "@/views/area/AreaPage.vue";
import AreaEightPage from "@/views/area/eight/AreaEightPage.vue";
import AreaTransPage from "@/views/area/trans/AreaTransPage.vue";
import Example from "@/components/example/Example.vue";

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
      component: AreaPage,
      children: [
        {
          path: "/",
          name: "area",
          component: Example,
        },
        {
          path: "/eight",
          name: "eight",
          component: AreaEightPage,
        },
        {
          path: "/trans",
          name: "trans",
          component: AreaTransPage,
        },
      ],
    },
  ],
});

export default router;
