<template>
<div class="flex justify-center items-center space-x-2 mt-8 flex-wrap">
    <!-- Prev -->
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full disabled:opacity-40 disabled:cursor-not-allowed bg-white/20 backdrop-blur-md shadow-md hover:bg-white/30 transition-all duration-300 cursor-pointer"
    >
      <i class="fa-solid fa-chevron-left"></i>
      Prev
    </button>

    <!-- Pages -->
    <button
      v-for="page in visiblePages"
      :key="page"
      @click="goToPage(page)"
      :class="[
        'px-4 py-2 border border-white/30 rounded-full shadow-md backdrop-blur-md transition-all duration-300 cursor-pointer',
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
      class="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full disabled:opacity-40 disabled:cursor-not-allowed bg-white/20 backdrop-blur-md shadow-md hover:bg-white/30 transition-all duration-300 cursor-pointer"
    >
      Next
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
  maxVisible: { type: Number, default: 5 } // الحد الأقصى للأزرار الظاهرة
})

const emit = defineEmits(['page-changed'])

// حساب الصفحات الظاهرة فقط
const visiblePages = computed(() => {
  const pages = []
  let start = Math.max(1, props.currentPage - Math.floor(props.maxVisible / 2))
  let end = start + props.maxVisible - 1
  if (end > props.totalPages) {
    end = props.totalPages
    start = Math.max(1, end - props.maxVisible + 1)
  }
  for (let i = start; i <= end; i++) pages.push(i)
  return pages
})

function goToPage(page) {
  if (page >= 1 && page <= props.totalPages) {
    emit('page-changed', page)
  }
}
</script>

<style scoped>
button {
  transition: all 0.25s ease;
  line-height: 1.5; /* يمنع زيادة ارتفاع الزر */
}
i {
  color: #ffc340;
}
</style>