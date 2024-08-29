import { defineStore } from "pinia";

export const useAnimationTimeStore = defineStore("animatoinTime", {
  state: () => {
    return {
      position: "",
    };
  },
  actions: {
    setHomeEnd(val: any) {
      this.position = val;
    },
  },
});
