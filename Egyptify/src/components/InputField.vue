
<template>
  <div class="relative">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-600">
      <slot name="icon" />
    </span>
<input
  v-bind="$attrs"
  :type="type"
  :placeholder="placeholder"
  class="w-full pl-10 pr-10 py-3 rounded-full border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-sm
         placeholder-gray-500 placeholder-opacity-100 placeholder:text-base"
/>
    <slot name="suffix-icon" />
  </div>
</template>

<script setup>
defineProps({
  type: { type: String, default: "text" },
  placeholder: String
});
</script>


