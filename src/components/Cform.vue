<template>
  <div>
    <Cinput label="Invoice Number" v-model="invoiceNumber" />
    <!-- <Cinput label="Amount" type="number" v-model="amount" /> -->

    <button @click="submitInvoice">Submit</button>
  </div>
</template>

<script setup>
import Cinput from "./Cinput.vue";
import { ref } from "vue";

const invoiceNumber = ref("");

const submitInvoice = () => {
  console.log("Invoice Number:", invoiceNumber.value);
};
</script>
