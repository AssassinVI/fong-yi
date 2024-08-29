import { defineStore } from "pinia";

export const useFullScreenStore = defineStore("fullScreen", {
  state: () => {
    return {
      screenState: false,
    };
  },
  actions: {
    setFullScreenState() {
      this.screenState = true;
    },
  },
});
