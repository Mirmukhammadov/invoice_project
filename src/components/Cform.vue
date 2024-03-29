<template>
  <div class="bg-white p-[60px] dark:bg-[#1e2139]">
    <h2
      class="text-gray-950 text-2xl font-bold font-['League Spartan'] leading-loose dark:text-white"
    >
      New Invoice
    </h2>

    <div class="pt-14">
      <p
        class="text-violet-500 text-[15px] font-bold font-['League Spartan'] leading-[15px] pb-6"
      >
        Bill From
      </p>
      <Cinput label="Street address" v-model="billfrom.street" />

      <div class="flex justify-between">
        <Cinput label="City" v-model="billfrom.city" />
        <Cinput label="Post Code" v-model="billfrom.postcode" type="number" />
        <Cinput label="Country" v-model="billfrom.country" />
      </div>
    </div>

    <div class="pt-14">
      <p
        class="text-violet-500 text-[15px] font-bold font-['League Spartan'] leading-[15px] pb-6"
      >
        Bill To
      </p>
      <Cinput label="Client’s Name" v-model="billto.clientName" />
      <Cinput
        label="Client’s Email"
        v-model="billto.clientEmail"
        placeholder="e.g. email@example.co"
        type="email"
        required
      />
      <Cinput label="Street Address" v-model="billto.street" />

      <div class="flex justify-between">
        <Cinput label="City" v-model="billto.city" />
        <Cinput label="Post Code" v-model="billto.postcode" type="number" />
        <Cinput label="Country" v-model="billto.country" />
      </div>
    </div>
    <div class="flex justify-between">
      <Cinput
        label="Invoice Date"
        v-model="billto.date"
        placeholder="enter date"
        type="date"
        style="width: 65%"
      />
      <Cinput
        label="Payment Terms"
        v-model="billto.terms"
        placeholder=""
        style="width: 65%"
      />
    </div>

    <Cinput
      label="Project Description"
      v-model="billto.desc"
      placeholder="e.g. Graphic Design Service"
    />

    <div class="text-red-500" v-if="validationError">
      There is something wrong
    </div>

    <p
      class="text-slate-500 text-lg font-bold font-['League Spartan'] leading-loose"
    >
      Item List
    </p>

    <div class="">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex justify-between items-start"
      >
        <Cinput label="Item Name" v-model="item.name" class="w-1/3" />
        <Cinput
          label="Qty."
          v-model="item.qty"
          placeholder="0"
          type="number"
          class="w-1/12"
        />
        <Cinput
          label="Price"
          v-model="item.price"
          placeholder="0.00"
          type="number"
          class="w-1/6"
        />
        <div class="flex-1 dark:text-white p-2 ml-2 pb-6 gap-4 flex flex-col">
          <p
            class="text-slate-400 text-[13px] font-medium font-['League Spartan'] leading-[15px] pb-1 dark:bg-[#1e2139]"
          >
            Total
          </p>
          <span
            class="dark:text-white text-slate-400 text-[15px] font-bold font-['League Spartan'] leading-[15px]"
            >{{ item.qty * item.price }}</span
          >
          <!-- <button @click="saveItem(index)">Save</button> -->
        </div>
        <button
          class="flex-1 dark:text-white p-1 mt-10"
          @click="removeItem(index)"
        >
          <img src="../assets/image/icon-delete.svg" alt="" />
        </button>
      </div>
    </div>

    <button
      @click="createNewitem"
      class="dark:bg-slate-800 dark:text-white mt-3 mb-8 w-full h-12 bg-indigo-100 rounded-3xl text-center text-slate-400 text-[15px] font-bold font-['League Spartan'] leading-[15px]"
    >
      Add New Item
    </button>

    <div class="flex items-end justify-between w-[280px] ml-auto mr-0">
      <button class="dark:text-white buttonStyle bg-gray-700">
        Save as Draft
      </button>
      <button
        @click="submitInvoice"
        class="dark:text-white buttonStyle bg-violet-500"
      >
        Save & Send
      </button>
    </div>
  </div>
</template>

<script setup>
import Cinput from "./Cinput.vue";
import { ref, computed, defineEmits } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useMyModule } from "../store/modules/myModule"; // Adjust the import path as per your project structure

const myModuleStore = useMyModule(); // Initialize the Pinia store
const items = ref([]);

function createNewitem() {
  items.value.push({ name: "", qty: "", price: "" });
}

function removeItem(index) {
  items.value = items.value.filter((item, indes) => {
    return indes !== index;
  });
}

const billfrom = ref({
  street: "",
  city: "",
  postcode: "",
  country: "",
});

const billto = ref({
  clientName: "",
  clientEmail: "",
  street: "",
  city: "",
  postcode: "",
  country: "",
  desc: "",
  date: "",
  terms: "",
});

const rules = {
  billfrom: {
    street: { required },
    city: { required },
    postcode: { required },
    country: { required },
  },
  billto: {
    clientName: { required },
    clientEmail: { required, email },
    street: { required },
    city: { required },
    postcode: { required },
    country: { required },
    desc: { required },
    date: { required },
    terms: { required },
  },
};

const v$ = useVuelidate(rules, { billfrom, billto });

const emit = defineEmits(["closeForm"]);
let validationError = ref(false);

const submitInvoice = () => {
  v$.value.$validate();

  if (v$.value.$error) {
    validationError.value = true;
    console.log(validationError);

    return;
  } else {
    console.log("all is good");
  }
  myModuleStore.addObjectToStore(billfrom.value);
  myModuleStore.itemsArray = items.value;

  emit("closeForm");
};
</script>

<style scoped>
.buttonStyle {
  width: 133px;
  height: 48px;
  border-radius: 24px;
  color: #dfe3fa;
  font-size: 15px;
  font-family: League Spartan;
  font-weight: 700;
  line-height: 15px;
  /* word-wrap: break-word" */
}
</style>
