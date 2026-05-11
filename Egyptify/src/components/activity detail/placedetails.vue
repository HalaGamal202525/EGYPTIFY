<template>
  <div class="px-6 py-4 space-y-6">
    <!-- رأس الصفحة -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <button @click="$router.back()" class="text-gray-900 hover:text-black text-xl">←</button>
        <h1 class="text-2xl font-bold">{{ place.name }}</h1>
      </div>
      <p class="text-lg text-gray-500 font-medium">{{ place.activity }}</p>
    </div>

    <!-- صور المكان -->
    <div class="grid grid-cols-4 gap-4">
      <img
        :src="place.mainImage"
        alt="Main Image"
        class="col-span-2 row-span-3 w-full h-[400px] object-cover rounded-xl shadow"
      />
      <div class="col-span-2 flex flex-col gap-4">
        <img
          v-for="(img, i) in place.images"
          :key="i"
          :src="img"
          alt="Extra Image"
          class="w-full h-[120px] object-cover rounded-xl shadow"
        />
      </div>
    </div>

    <!-- التبويبات -->
    <TabComponent
      :tabs="tabs"
      v-model:activeTab="selectedTab"
    />

    <!-- محتوى التاب -->
 <component
  v-if="tabs && tabs[selectedTab]"
  :is="tabs[selectedTab].component"
  :place="place" 
/>

  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  place: Object,
  tabs: Array,
  activeTab: Number
})

const emit = defineEmits(['update:activeTab'])

const selectedTab = computed({
  get: () => props.activeTab,
  set: (value) => emit('update:activeTab', value)
})

// التاب كمكون خارجي
import TabComponent from '../tabactivity.vue'
</script>
