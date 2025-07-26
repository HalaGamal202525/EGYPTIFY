<!-- src/components/Tabs.vue -->
<template>
  <div>
    <!-- Tabs Header -->
    <div class="flex justify-center gap-4">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'py-2 px-4 font-medium rounded transition',
          activeTab === index
            ? 'bg-[#FFC340] text-white'
            : 'text-gray-600 hover:bg-[#FFF1C4]'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tabs Content -->
    <div class="mt-8 ml-4 ">
      <component :is="tabs[activeTab].component" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  }
})

const activeTab = ref(0)
</script>
