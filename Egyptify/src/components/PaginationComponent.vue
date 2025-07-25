<template>
  <div class="flex justify-center items-center space-x-2 mt-8">
    <!-- Previous -->
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-4 py-2 border rounded disabled:opacity-50"
    >
      Prev
    </button>

    <!-- Page Numbers -->
    <button
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      :class="[
        'px-4 py-2 border rounded',
        currentPage === page ? 'bg-yellow-400 font-bold' : 'bg-white'
      ]"
    >
      {{ page }}
    </button>

    <!-- Next -->
    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 border rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  currentPage: Number,
  totalPages: Number
})

const emit = defineEmits(['page-changed'])

function goToPage(page) {
  if (page >= 1 && page <= props.totalPages) {
    emit('page-changed', page)
  }
}
</script>

<style scoped>
button {
  transition: all 0.2s ease;
}
button:hover:not(:disabled) {
  background-color: #fde68a; /* Light yellow */
}
</style>
