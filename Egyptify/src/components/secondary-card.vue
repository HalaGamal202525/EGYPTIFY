<template>
  <div :class="['rounded-2xl shadow-sm border bg-white', cardClass]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  cardClass: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
</style>