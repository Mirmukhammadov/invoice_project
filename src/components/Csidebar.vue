<template>
  <div
    class="w-[103px] h-screen bg-gray-700 rounded-tr-[20px] rounded-br-[20px] flex flex-col justify-between fixed"
  >
    <div
      class="w-full h-[103px] bg-violet-500 rounded-tr-[20px] rounded-br-[20px] flex items-center justify-center"
    >
      <img src="@/assets/image/logo.svg" alt="" class="" />
    </div>

    <div class="flex flex-col items-center mb-7 justify-center">
      <button class="mb-5 relative cursor-pointer" @click="toggleIsDark">
        <img
          src="@/assets/image/icon-moon.svg"
          alt=""
          class=""
          v-if="!isDark"
        />
        <img src="@/assets/image/icon-sun.svg" alt="" v-if="isDark" />
      </button>
      <span class="w-[103px] h-px bg-slate-600 block mb-5"></span>
      <div class="w-10 h-10 rounded-full">
        <img
          src="@/assets/image/image-avatar.jpg"
          alt=""
          class="rounded-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const isDark = ref(false);

// onMounted(() => {
//   const storedIsDark = localStorage.getItem("isDark");
//   isDark.value = storedIsDark !== null ? JSON.parse(storedIsDark) : false;
// });

function toggleIsDark() {
  isDark.value = !isDark.value;
  localStorage.setItem("isDark", isDark.value);

  if (isDark.value) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
</script>
