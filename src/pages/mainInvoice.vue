<template>
  <div class="dark:bg-[#141625] w-full h-full top-0 fixed">
    <div class="fixed top-0">
      <Csidebar />
    </div>

    <div class="container">
      <div class="mt-[60px]">
        <!-- router -->
        <router-link to="/">
          <button
            class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-[15px] flex justify-between items-center"
          >
            <div class="pr-8">
              <img src="../assets/image/icon-arrow-left.svg" alt="" />
            </div>
            Go back
          </button>
        </router-link>

        <!-- button div -->
        <div
          class="py-5 bg-white dark:bg-[#1e2139] rounded-lg shadow mt-8 flex items-center justify-between px-8"
        >
          <div class="flex items-center justify-between w-1/4">
            <p
              class="text-slate-400 dark:text-indigo-100 text-[13px] font-medium font-['League Spartan'] leading-[15px] pr-2"
            >
              status
            </p>

            <button
              class="text-amber-900 text-[15px] font-bold font-['League Spartan'] leading-[15px] w-[104px] h-10 opacity-5 bg-amber-500 rounded-md"
            >
              Pending
            </button>
          </div>

          <div class="flex items-center justify-between w-2/5">
            <button
              class="h-12 bg-slate-50 rounded-3xl text-slate-400 buttonStyle"
            >
              Edit
            </button>
            <button class="h-12 bg-rose-500 rounded-3xl text-white buttonStyle">
              Delete
            </button>
            <button
              class="h-12 bg-violet-500 rounded-3xl text-white buttonStyle"
            >
              mark as Paid
            </button>
          </div>
        </div>
        <!-- second main  div -->
        <div
          class="py-5 bg-white dark:bg-[#1e2139] rounded-lg shadow mt-8 flex flex-col justify-between px-8"
        >
          <!--bill from  -->
          <div class="flex justify-between items-start w-full">
            <div class="flex flex-col">
              <p class="mb-1">
                <span
                  class="text-slate-400 text-[15px] font-bold font-['League Spartan'] leading-normal"
                  >#</span
                ><span
                  class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-normal"
                  >{{ +routeId + 1 }}</span
                >
              </p>
              <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                Graphic Design
              </p>
            </div>
            <div class="flex items-center flex-col">
              <!-- <div class="" v-for="item in itemsObject[routeId]" :key="item"> -->
              <p
                class="invoiceparagraph mb-1 text-slate-400 dark:text-indigo-100"
              >
                {{ itemsObject[routeId].value1.street }}
              </p>
              <p
                class="invoiceparagraph mb-1 text-slate-400 dark:text-indigo-100"
              >
                {{ itemsObject[routeId].value1.city }}
              </p>
              <p
                class="invoiceparagraph mb-1 text-slate-400 dark:text-indigo-100"
              >
                {{ itemsObject[routeId].value1.country }}
              </p>
              <p
                class="invoiceparagraph mb-1 text-slate-400 dark:text-indigo-100"
              >
                {{ itemsObject[routeId].value1.postcode }}
              </p>

              <!-- </div> -->
            </div>
          </div>

          <!-- invocie dates  -->
          <div class="flex justify-between w-4/5">
            <div class="flex flex-col gap-8">
              <div>
                <p
                  class="invoiceparagraph pb-2 text-slate-400 dark:text-indigo-100"
                >
                  Invoice Date
                </p>
                <p
                  class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-tight"
                >
                  {{ itemsObject[routeId].value2.date }}
                </p>
              </div>

              <div>
                <p
                  class="invoiceparagraph pb-2 text-slate-400 dark:text-indigo-100"
                >
                  Invoice Due
                </p>
                <p
                  class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-tight"
                >
                  {{ updatedDateString }}
                </p>
              </div>
            </div>

            <!-- bill to  -->
            <div class="flex flex-col gap-2">
              <div>
                <p
                  class="invoiceparagraph pb-2 text-slate-400 dark:text-indigo-100"
                >
                  Bill to
                </p>
                <p
                  class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-tight"
                >
                  {{ itemsObject[routeId].value2.clientName }}
                </p>
              </div>
              <div class="mt-2">
                <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                  {{ itemsObject[routeId].value2.street }}
                </p>
                <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                  {{ itemsObject[routeId].value2.city }}
                </p>
                <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                  {{ itemsObject[routeId].value2.postcode }}
                </p>
                <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                  {{ itemsObject[routeId].value2.country }}
                </p>
              </div>
            </div>

            <!-- sent to -->
            <div>
              <p
                class="invoiceparagraph pb-2 text-slate-400 dark:text-indigo-100"
              >
                Sent to
              </p>
              <p
                class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-tight"
              >
                {{ itemsObject[routeId].value2.clientEmail }}
              </p>
            </div>
          </div>

          <!-- item name -->

          <div
            class="bg-slate-50 dark:bg-[#1e2139] rounded-tl-lg rounded-tr-lg mt-10 py-10 flex justify-between px-8"
          >
            <div class="flex flex-col gap-6 w-3/6">
              <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                Item Name
              </p>
              <p
                class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-[15px]"
              >
                {{ arr[routeId].name }}
              </p>
            </div>
            <div class="flex justify-between w-3/6">
              <div class="flex flex-col gap-6">
                <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                  QTY.
                </p>
                <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                  {{ arr[routeId].qty }}
                </p>
              </div>

              <div class="flex flex-col gap-6">
                <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                  Price
                </p>
                <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                  {{ arr[routeId].price }}
                </p>
              </div>

              <div class="flex flex-col gap-6">
                <p class="invoiceparagraph text-slate-400 dark:text-indigo-100">
                  Total
                </p>
                <p
                  class="text-gray-950 dark:text-white text-[15px] font-bold font-['League Spartan'] leading-[15px]"
                >
                  {{ arr[routeId].price * arr[routeId].qty }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="p-5 bg-gray-700 dark:bg-[#0C0E16] rounded-bl-lg rounded-br-lg flex justify-between items-center w-full"
          >
            <p
              class="text-white text-[13px] font-medium font-['League Spartan'] leading-[18px]"
            >
              Amount Due
            </p>
            <span
              class="text-right text-white text-2xl font-bold font-['League Spartan'] leading-loose"
              >£ {{ arr[routeId].price * arr[routeId].qty }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Csidebar from "@/components/Csidebar.vue";
import { useMyModule } from "@/store/modules/myModule";
import { useRouter } from "vue-router";
const moduleStore = useMyModule();
const router = useRouter();

let arr = JSON.parse(localStorage.getItem("myModule"));
let itemsObject = JSON.parse(localStorage.getItem("itemsObject"));

const routeId = router.currentRoute.value.params.id;

let daysToAdd = parseInt(itemsObject[routeId].value2.terms, 10);
let dateObj = new Date(itemsObject[routeId].value2.date);
dateObj.setDate(dateObj.getDate() + daysToAdd);
let updatedDateString = dateObj.toISOString().slice(0, 10);
</script>

<style scoped>
.buttonStyle {
  font-size: 15px;
  font-family: League Spartan;
  font-weight: 700;
  line-height: 15px;
  word-wrap: break-word;
  margin-left: 4px;
  padding: 10px 15px;
  align-content: center;
}

.invoiceparagraph {
  /* color: #7e88c3; */
  font-size: 13px;
  font-family: League Spartan;
  font-weight: 500;
  line-height: 15px;
  word-wrap: break-word;
}
</style>
