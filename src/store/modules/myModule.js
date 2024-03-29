// myModule.js
import { defineStore } from "pinia";

export const useMyModule = defineStore("myModule", {
  state: () => ({
    arr: [],
    itemsArray: [],
  }),

  actions: {
    addObjectToStore(value) {
      const newObj = { ...value };
      this.arr.push(newObj);
      // this.saveState();
    },
  },
});
