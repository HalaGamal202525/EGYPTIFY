<template>
  <div class="sidebar bg-gray-200 rounded-lg border border-gray-300 p-6 shadow-lg">
    <h3 class="text-xl font-semibold text-yellow-500 mb-4">Filter Restaurants</h3>

    <!-- Governorate -->
    <div class="filter-group mb-4">
      <h2 class="font-bold mb-2">Governorate</h2>
      <div v-for="gov in uniqueGovernorates" :key="gov" class="flex items-center mb-1">
        <input 
          type="checkbox" 
          :id="`gov-${gov}`" 
          :value="gov" 
          v-model="filters.governorate" 
          class="mx-2"
        />
        <label :for="`gov-${gov}`">{{ gov }}</label>
      </div>
    </div>

    <!-- Rating -->
    <div class="filter-group mb-4">
      <h2 class="font-bold mb-2">Rating</h2>
      <div v-for="rate in uniqueRatings" :key="rate" class="flex items-center mb-1">
        <input 
          type="checkbox" 
          :id="`rate-${rate}`" 
          :value="rate" 
          v-model="filters.rating" 
          class="mx-2"
        />
        <label :for="`rate-${rate}`">⭐ {{ rate }}+</label>
      </div>
    </div>

    <!-- Cuisine -->
    <div class="filter-group">
      <h2 class="font-bold mb-2">Cuisine</h2>
      <div v-for="cuisine in uniqueCuisines" :key="cuisine" class="flex items-center mb-1">
        <input 
          type="checkbox" 
          :id="`cuisine-${cuisine}`" 
          :value="cuisine" 
          v-model="filters.cuisine" 
          class="mx-2"
        />
        <label :for="`cuisine-${cuisine}`">{{ cuisine }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  restaurants: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:filters'])

const filters = ref({
  governorate: [],
  rating: [],
  cuisine: []
})

// استخراج القيم الفريدة
const uniqueGovernorates = computed(() => [...new Set(props.restaurants.map(r => r.governorate).filter(Boolean))])
const uniqueRatings = computed(() => [...new Set(props.restaurants.map(r => Math.floor(r.rating)).filter(Boolean))].sort((a,b) => b-a))
const uniqueCuisines = computed(() => [...new Set(props.restaurants.map(r => r.cuisine).filter(Boolean))])

// إرسال الفلاتر للأب
watch(filters, (newVal) => {
  emit('update:filters', newVal)
}, { deep: true })
</script>
