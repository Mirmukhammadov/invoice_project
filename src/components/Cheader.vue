<template>
  <div class="flex justify-between items-center">
    <div class="">
      <p class="headingL dark:text-white">Invoices</p>
      <span class="bodyL text-[#888EB0] dark:text-indigo-100"
        >There are 7 total invoices</span
      >
    </div>

    <div class="flex gap-10 items-center">
      <div>
        <button class="flex items-center cursor-pointer">
          <p
            class="text-gray-950 text-[15px] font-bold font-['League Spartan'] leading-[15px] dark:text-white"
          >
            Filter by status
          </p>
          <svg
            width="11"
            height="7"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2"
          >
            <path
              d="M1 1l4.228 4.228L9.456 1"
              stroke="#7C5DFA"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <firstButtonVue @someEvent="toggle" />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  defineProps,
  defineEmits,
  provide,
  onMounted,
  onUnmounted,
  getCurrentInstance,
} from "vue";
import firstButtonVue from "./firstButton.vue";
const formModal = ref(true);
const emit = defineEmits(["childData"]);

function toggle() {
  formModal.value = !formModal.value;
  emit("childData", formModal.value);
}
</script>
