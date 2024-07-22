import { defineStore } from "pinia";
import { RouteRecordNameGeneric } from "vue-router";

export const useNavNameStore = defineStore("navName", {
  state: () => {
    return { urlName: "" as RouteRecordNameGeneric };
  },
  actions: {
    getUrlName(name: RouteRecordNameGeneric) {
      this.urlName = name;
    },
  },
});
