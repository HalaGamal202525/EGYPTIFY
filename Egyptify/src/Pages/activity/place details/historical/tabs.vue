<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  tabs: Array,
  activeTab: Number
})

const emit = defineEmits(['update:activeTab'])
</script>

<template>
  <div>
    <div class="flex gap-4 mb-6">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="emit('update:activeTab', index)"
        :class="[
          'py-2 px-4 font-semibold cursor-pointer',
          activeTab === index ? 'bg-[#ffc340] rounded-md text-black' : 'text-gray-500'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- المحتوى -->
    <component
      v-if="tabs.length > 0 && tabs[activeTab]"
      :is="tabs[activeTab].component"
      :key="activeTab"
      v-bind="tabs[activeTab].props"
    />
  </div>
</template>
