<template>
  <div class="flex justify-between dark:bg-[#141625] overflow-x-hidden">
    <SidebarVue class="z-[100]" />
    <Cform
      class="z-10 pl-[150px] absolute"
      v-if="formModall"
      @closeForm="formModall = !formModall"
    />
  </div>
  <div
    class="dark:bg-[#141625] h-screen overflow-x-hidden z-0"
    :class="{ formModalStyle: formModall, 'opacity-60': formModall }"
  >
    <div class="container">
      <CheaderVue
        @childData="handleChildData"
        @update:checkboxValues="handleCheckboxValues"
      />

      <div class="mt-[100px]">
        <div v-if="filteredInvoices.length">
          <invoice />
        </div>
        <emptyInvoice v-else />
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
import CheaderVue from "../components/Cheader.vue";
import SidebarVue from "../components/Csidebar.vue";
import invoice from "@/components/invoice.vue";
import emptyInvoice from "@/components/emptyInvoice.vue";
import Cform from "@/components/Cform.vue";

import { ref, computed } from "vue";

// Modal state
const formModall = ref(false);

// Selected checkbox values
const checkboxValues = ref([]);

// Fetch all invoices from localStorage
const allInvoices = ref(JSON.parse(localStorage.getItem("myModule")) || []);

// Log all invoices to ensure data is fetched correctly
console.log("All Invoices:", allInvoices.value);

// Handle form modal visibility
function handleChildData(data) {
  formModall.value = data;
}

// Handle updated checkbox values
function handleCheckboxValues(values) {
  checkboxValues.value = values;
  console.log("Checkbox Values Updated:", checkboxValues.value);
}

// Computed property to filter invoices
const filteredInvoices = computed(() => {
  console.log("Filtering Invoices...");
  console.log(checkboxValues.value.length);

  if (checkboxValues.value.length === 0) {
    return allInvoices.value; // Return all invoices if no filter is selected
  } else {
    return allInvoices.value.filter((invoice) =>
      checkboxValues.value.includes(invoice.status.toLowerCase())
    );
  }
});

// Log filtered invoices for debugging
console.log("Filtered Invoices:", filteredInvoices.value);
</script>

<style scoped>
.formModalStyle {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
