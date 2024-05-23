<template>
  <div class="flex justify-between items-center">
    <div class="">
      <p class="headingL dark:text-white">Invoices</p>
      <span class="bodyL text-[#888EB0] dark:text-indigo-100"
        >There are 7 total invoices</span
      >
    </div>

    <div class="flex gap-10 items-center relative">
      <div>
        <button
          class="flex items-center cursor-pointer"
          @click="toggleCheckboxvalue"
        >
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

        <div
          class="w-48 bg-white dark:bg-slate-800 rounded-lg shadow mt-4 absolute left-[-15px]"
          v-if="checkboxValue"
        >
          <div class="flex flex-shrink-0 items-center p-2">
            <input
              class="w-auto h-auto border !hover:border-violet-500"
              type="checkbox"
              id="Draft"
              name="Draft"
              value="Draft"
              v-model="checkboxvalues"
            />
            <label
              for="Draft"
              class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-[15px] pl-3 m-0"
              >Draft</label
            >
          </div>
          <div class="flex flex-shrink-0 items-center p-2">
            <input
              class="w-auto h-auto"
              type="checkbox"
              id="Pending"
              name="Pending"
              value="Pending"
              v-model="checkboxvalues"
            />
            <label
              for="Pending"
              class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-[15px] pl-3 m-0"
              >Pending</label
            >
          </div>

          <div class="flex flex-shrink-0 items-center p-2">
            <input
              class="w-auto h-auto"
              type="checkbox"
              id="Paid"
              name="Paid"
              value="Paid"
              v-model="checkboxvalues"
            />
            <label
              for="Paid"
              class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-[15px] pl-3 m-0"
              >Paid</label
            >
          </div>
        </div>
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
const checkboxValue = ref(false);
const checkboxvalues = ref([]);

function toggleCheckboxvalue() {
  checkboxValue.value = !checkboxValue.value;
  console.log(checkboxvalues.value);

  // emit("childData", checkbox.value);
}

function toggle() {
  formModal.value = !formModal.value;
  emit("childData", formModal.value);
}
</script>
