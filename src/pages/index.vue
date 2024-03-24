<template>
  <div class="flex justify-between dark:bg-[#141625] overflow-x-hidden">
    <SidebarVue class="z-[100]" />
    <Cform class="z-10 pl-[150px] absolute" v-if="formModal" />
  </div>
  <div
    class="dark:bg-[#141625] h-screen overflow-x-hidden z-0"
    :class="{ formModalStyle: formModal, 'opacity-60': formModal }"
  >
    <div class="container">
      <CheaderVue @childData="handleChildData" />

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

import { ref } from "vue";

const formModal = ref(false);

function handleChildData(data) {
  console.log("clicked index");

  console.log(data);
  formModal.value = data;
}
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
