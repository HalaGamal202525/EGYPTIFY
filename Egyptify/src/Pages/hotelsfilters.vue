<template>
  <div class="sidebar bg-gray-200 rounded-lg border border-gray-300 p-6 shadow-lg">
    <h3 class="text-xl font-semibold text-yellow-500">Filter by:</h3>

    <!-- Location -->
    <div class="filter-group">
      <h2 class="font-bold">Location</h2>
      <div v-for="loc in uniqueLocations" :key="loc">
        <input type="checkbox" :id="`loc-${loc}`" :value="loc" v-model="filters.location" class="mx-3" />
        <label :for="`loc-${loc}`">{{ loc }}</label>
      </div>
    </div>

    <!-- Budget -->
    <div class="filter-group">
      <h2 class="font-bold">Budget</h2>
      <div v-for="type in uniqueCategory" :key="type">
        <input type="checkbox" :id="`type-${type}`" :value="type" v-model="filters.budget" class="mx-3" />
        <label :for="`type-${type}`">{{ type }}</label>
      </div>
    </div>

    <!-- Best Time -->
    <div class="filter-group">
      <h2 class="font-bold">Best Time</h2>
      <div v-for="bestTime in uniqueRate" :key="bestTime">
        <input type="checkbox" :id="`bestTime-${bestTime}`" :value="bestTime" v-model="filters.bestTime" class="mx-3" />
        <label :for="`bestTime-${bestTime}`">{{ bestTime }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  destinationdata: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:filters'])

const filters = ref({
  location: [],
  budget: [],
  bestTime: []
})

const uniqueLocations = computed(() => [...new Set(props.destinationdata.map(d => d.location).filter(Boolean))])
const uniqueCategory = computed(() => [...new Set(props.destinationdata.map(d => d.budget).filter(Boolean))])
const uniqueRate = computed(() => [...new Set(props.destinationdata.map(d => String(d.bestTime)).filter(Boolean))])

watch(filters, (newVal) => {
  emit('update:filters', newVal)
}, { deep: true })
</script>
