<!-- src/components/DropdownMenu.vue -->
<template>
  <div ref="dropdownRef" class="relative inline-block text-left">
    <button
      @click="isOpen = !isOpen"
      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-[#FFC340] rounded-md shadow-sm hover:bg-gray-50 focus:outline-none cursor-pointer"
    >
      {{ label }}
      <svg
        class="w-4 h-4 ml-6 mt-0.5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute z-50 right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg"
    >
      <ul class="py-1 text-sm text-gray-700">
        <li
          v-for="(item, index) in options"
          :key="index"
          @click="handleSelect(item)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Menu' },
  options: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select'])

const isOpen = ref(false)
const dropdownRef = ref(null)

function handleSelect(item) {
  emit('select', item)
  isOpen.value = false
}

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
