<template>
  <div class="dark:bg-[#141625] h-screen w-screen">
    <SidebarVue />
    <div class="container">
      <CheaderVue />
      <div class="mt-[100px]">
        <emptyInvoice />
      </div>
    </div>
  </div>
</template>

<script setup>
import CheaderVue from "../components/Cheader.vue";
import SidebarVue from "../components/Csidebar.vue";
import emptyInvoice from "../components/emptyInvoice.vue";
</script>
