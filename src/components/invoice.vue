<template>
  {{ myModuleStore.itemsArray }}
  <div v-for="(item, index) in myModuleStore.itemsArray" :key="index">
    <div
      class="dark:bg-gray-800 h-[72px] bg-white rounded-lg shadow flex justify-between items-center px-8"
    >
      <p
        class="dark:text-white text-gray-950 text-[15px] font-bold font-['League Spartan'] leading-[15px]"
      >
        <span
          class="text-slate-400 text-[15px] font-bold font-['League Spartan'] leading-[15px]"
          >#</span
        >

        {{ index + 1 }}
      </p>

      <p
        class="text-slate-400 text-[13px] font-medium font-['League Spartan'] leading-[15px]"
      >
        <span
          class="text-slate-400 text-[13px] font-medium font-['League Spartan'] leading-[15px]"
          >Due
        </span>

        19 Aug 2021
      </p>

      <p
        class="dark:text-white text-slate-400 text-[13px] font-medium font-['League Spartan'] leading-[15px]"
      >
        {{ item.name }}
      </p>

      <p
        class="dark:text-white text-right text-gray-950 text-[15px] font-bold font-['League Spartan'] leading-normal"
      >
        £ {{ item.price * item.qty }}
      </p>

      <button
        class="text-[red] w-[104px] h-10 opacity-5 bg-emerald-400 rounded-md"
      >
        paid
      </button>

      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4-4 4"
          stroke="#7C5DFA"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useMyModule } from "../store/modules/myModule";
const myModuleStore = useMyModule();
// const itemsArray = myModuleStore.itemsArray;
// console.log(itemsArray);
</script>
