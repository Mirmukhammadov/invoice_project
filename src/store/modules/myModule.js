// myModule.js
import { defineStore } from "pinia";

export const useMyModule = defineStore("myModule", {
  state: () => ({
    arr: [],
    itemsArray: [],
  }),

  actions: {
    addObjectToStore(value1, value2) {
      const newObj = { value1, value2 };
      this.arr.push(newObj);
    },
    addItemToStore(item) {
      this.itemsArray.push(item);
    },
  },
});
