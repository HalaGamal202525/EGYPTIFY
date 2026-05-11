<template>
  <span :class="['inline-flex items-center rounded-full px-3 py-1 font-medium', badgeClass]">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  badgeClass: {
    type: String,
    default: 'bg-gray-200 text-gray-800 text-xs'
  }
})
</script>

<style scoped>
</style>