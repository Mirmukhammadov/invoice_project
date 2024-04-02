<template>
  <div class="input-field p-1 pb-6">
    <label
      class="text-slate-400 text-[13px] font-medium font-['League Spartan'] leading-[15px] pb-1 dark:bg-[#1e2139]"
      >{{ props.label }}</label
    >
    <input
      :id="props.id"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :type="props.type || 'text'"
      @input="$emit('update:modelValue', $event.target.value)"
      class="dark:bg-[#1e2139] dark:border-slate-800 dark:placeholder:text-white outline-none dark:text-white"
      :class="{ border: true, 'border-red-500': false }"
    />
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  label: "props.label",
  id: String,
  type: String,
  placeholder: String,
  modelValue: [String, Number],
  required: Boolean,
  modelValueError: Boolean,
});

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);

const inputValue = ref(props.modelValue || "");
const emit = defineEmits(["update:modelValue"]);
</script>

<style>
.input-field {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
