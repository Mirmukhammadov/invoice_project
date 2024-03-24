// myModule.js
import { defineStore } from "pinia";

export const useMyModule = defineStore("myModule", {
  state: () => ({
    formModal: false,
  }),
});
