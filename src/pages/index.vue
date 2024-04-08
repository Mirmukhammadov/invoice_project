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
      <CheaderVue @childData="handleChildData" />

      <div class="mt-[100px]">
        <invoice v-if="itemsArraylength" />
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
import { useMyModule } from "@/store/modules/myModule";

import { ref } from "vue";

const formModall = ref(false);
const myModule = useMyModule();

function handleChildData(data) {
  formModall.value = data;
}

let itemsArraylength = JSON.parse(localStorage.getItem("myModule"));
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
