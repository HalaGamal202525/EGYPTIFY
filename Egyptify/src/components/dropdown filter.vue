<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="bg-white border border-gray-300 px-4 py-2 rounded-md min-w-[150px] text-left flex justify-between items-center"
    >
      {{ selectedLabel }}
      <span class="ml-2">▼</span>
    </button>

    <ul
      v-if="isOpen"
      class="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-full z-10"
    >
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: String,
  options: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select'])

const isOpen = ref(false)
const selectedLabel = ref(props.label)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectOption(option) {
  selectedLabel.value = option.label
  emit('select', option)
  isOpen.value = false  // ✅ ده بيقفل الـ dropdown
}

</script>
