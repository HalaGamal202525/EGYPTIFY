<template>
  <div class="sidebar">
    <h3>Filter by:</h3>

    <!-- Location -->
    <div class="filter-group">
      <h4>Location</h4>
      <div v-for="loc in uniqueLocations" :key="loc">
        <input type="checkbox" :id="`loc-${loc}`" :value="loc" v-model="filters.location" />
        <label :for="`loc-${loc}`">{{ loc }}</label>
      </div>
    </div>

    <!-- Type -->
    <div class="filter-group">
      <h4>Type</h4>
      <div v-for="type in uniqueTypes" :key="type">
        <input type="checkbox" :id="`type-${type}`" :value="type" v-model="filters.type" />
        <label :for="`type-${type}`">{{ type }}</label>
      </div>
    </div>

    <!-- Budget -->
    <div class="filter-group">
      <h4>Budget</h4>
      <div v-for="b in uniqueBudgets" :key="b">
        <input type="checkbox" :id="`budget-${b}`" :value="b" v-model="filters.budget" />
        <label :for="`budget-${b}`">{{ b }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { toRaw } from 'vue'

const props = defineProps({
  allDestinations: Array,
})
const emit = defineEmits(['update:filters'])

const filters = ref({
  location: [],
  type: [],
  budget: [],
})

const uniqueLocations = computed(() => [...new Set(props.allDestinations.map(d => d.location))])
const uniqueTypes = computed(() => [...new Set(props.allDestinations.map(d => d.type).filter(Boolean))])
const uniqueBudgets = computed(() => [...new Set(props.allDestinations.map(d => d.budget).filter(Boolean))])

watch(filters, (newVal) => {
  emit('update:filters', toRaw(newVal))
}, { deep: true })
</script>

<style scoped>
.sidebar {
  padding: 1rem;
  border-radius: 8px;
  max-width: 250px;
  font-family: sans-serif;
  background-color: #ddd;
}

.filter-group {
  margin-bottom: 1.5rem;
}

.filter-group h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
}

.filter-group label {
  margin-left: 0.5rem;
}
</style>
