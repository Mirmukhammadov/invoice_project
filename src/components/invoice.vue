<template>
  <div v-for="(item, index) in itemsArray" :key="index">
    <router-link :to="'/' + index">
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

          {{ updatedDateString }}
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
          {{ item.status }}
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
    </router-link>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const itemsArray = ref([]); // Watch for changes in localStorage and update itemsArray
watchEffect(() => {
  const storedData = JSON.parse(localStorage.getItem("myModule"));
  itemsArray.value = storedData || [];
});
let updatedDateString = ref("");

// Move this logic inside the watchEffect or computed property to properly use index
watchEffect(() => {
  let itemsObject = JSON.parse(localStorage.getItem("itemsObject"));
  if (itemsObject) {
    itemsObject.forEach((item, index) => {
      let daysToAdd = parseInt(item.value2.terms, 10);
      let dateObj = new Date(item.value2.date);
      dateObj.setDate(dateObj.getDate() + daysToAdd);
      updatedDateString = dateObj.toISOString().slice(0, 10);
    });
  }
});
</script>
