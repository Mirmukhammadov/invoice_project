<template>
  <div class="dark:bg-[#141625] h-screen w-screen">
    <div class="flex justify-between">
      <SidebarVue />
      <Cform class="fixed left-[120px]" />
    </div>
    <div class="container">
      <CheaderVue />
      <div class="mt-[100px]">
        <emptyInvoice v-if="false" />
        <invoice />
      </div>
    </div>
  </div>
</template>

<script setup>
import CheaderVue from "../components/Cheader.vue";
import SidebarVue from "../components/Csidebar.vue";
import emptyInvoice from "../components/emptyInvoice.vue";
import invoice from "@/components/invoice.vue";
import Cform from "@/components/Cform.vue";
</script>
