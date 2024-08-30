import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/views/home/HomePage.vue";
import AreaPage from "@/views/area/AreaPage.vue";
import AreaEightPage from "@/views/area/eight/AreaEightPage.vue";
import AreaTransPage from "@/views/area/trans/AreaTransPage.vue";
import MethodListPage from "@/views/space/list/listPage.vue";
import SpacePage from "@/views/space/SpacePage.vue";
import MethodPage from "@/views/space/methodPage/methodPage.vue";
import FeaturePage from "@/views/feature/FeaturePage.vue";
import FeatureMaterialPage from "@/views/feature/material/FeatureMaterialPage.vue";
import FeatureMaterialInPage from "@/views/feature/materialInner/FeatureMaterialInPage.vue";
import FloorPlanPage from "@/views/feature/floorPlan/FloorPlanPage.vue";
import FloorPlanInPage from "@/views/feature/floorPlanIn/FloorPlanInPage.vue";
import LoanPage from "@/views/loan/LoanPage.vue";
import ErrorPage from "@/views/error/ErrorPage.vue";

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
    {
      path: "/space",
      component: SpacePage,
      children: [
        {
          path: "/methodList",
          name: "methodList",
          component: MethodListPage,
        },
        {
          path: "/methodPage",
          name: "methodPage",
          component: MethodPage,
        },
      ],
    },
    {
      path: "/feature",
      component: FeaturePage,
      children: [
        {
          path: "/",
          name: "featureMaterials",
          component: FeatureMaterialPage,
        },
        {
          path: "/inner",
          name: "featureMaterialsIn",
          component: FeatureMaterialInPage,
        },
        {
          path: "/floorplan",
          name: "floorPlan",
          component: FloorPlanPage,
        },
        {
          path: "/floorinner",
          name: "floorInner",
          component: FloorPlanInPage,
        },
      ],
    },
    {
      path: "/loan",
      name: "loan",
      component: LoanPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: ErrorPage,
    },
  ],
});

export default router;
