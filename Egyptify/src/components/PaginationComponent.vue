

<template>
  <div class="flex justify-center items-center space-x-2 mt-8">
    <!-- Prev -->
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full disabled:opacity-40 disabled:cursor-not-allowed bg-white/20 backdrop-blur-md shadow-md hover:bg-white/30 transition-all duration-300"
    >
      <i class="fa-solid fa-chevron-left"></i>
      Prev
    </button>

    <!-- Pages -->
    <button
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      :class="[
        'px-4 py-2 border border-white/30 rounded-full shadow-md backdrop-blur-md transition-all duration-300',
        currentPage === page
          ? 'bg-[#FFC340]/80 text-white font-bold shadow-lg scale-110 border-[#FFC340]/50'
          : 'bg-white/20 text-black hover:bg-white/30'
      ]"
    >
      {{ page }}
    </button>

    <!-- Next -->
    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full disabled:opacity-40 disabled:cursor-not-allowed bg-white/20 backdrop-blur-md shadow-md hover:bg-white/30 transition-all duration-300"
    >
      Next
      <i class="fa-solid fa-chevron-right"></i>
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
  transition: all 0.25s ease;
}
i{
  color: #ffc340;
}
</style>
