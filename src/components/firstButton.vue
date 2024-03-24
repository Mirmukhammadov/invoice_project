<template>
  <div>
    <button
      @click="$emit('someEvent')"
      class="pl-2 pr-4 py-2 bg-violet-500 rounded-3xl flex items-center justify-between gap-2.5 text-white text-[15px] font-bold font-['League Spartan'] leading-[15px] hover:bg-indigo-400 transition-all duration-300"
    >
      <div class="py-4 px-4 mr-1 bg-white rounded-full">
        <img
          src="../assets/image/icon-plus.svg"
          alt=""
          class="w-[10px] h-[10px]"
        />
      </div>
      New Invoice
    </button>
  </div>
  <!-- 
  <style></style>

  <script></script> -->
</template>
<script setup></script>
