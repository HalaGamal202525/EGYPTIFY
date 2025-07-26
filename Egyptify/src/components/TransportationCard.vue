<!-- src/components/TransportationCard.vue -->
<template>
  <div class="border rounded-md p-6 w-full max-w-sm bg-white shadow-sm">
    <div class="flex justify-center mb-4">
      <div class="w-16 h-16 bg-gradient-to-b from-yellow-400 to-green-600 rounded-full"></div>
    </div>

    <h3 class="text-black font-bold text-center mb-1">{{ title }}</h3>
    <p class="text-sm text-gray-600 text-center mb-4">{{ description }}</p>

    <div class="flex items-center justify-between mb-2 text-sm">
      <span class="bg-yellow-400 px-3 py-1 rounded-full text-white font-medium">{{ price }}</span>
      <div class="flex items-center gap-1 text-gray-600">
        <i class="fas fa-clock text-yellow-500"></i>
        <span>{{ duration }}</span>
      </div>
    </div>

    <div class="mb-2">
      <p class="text-black font-medium mb-1">Features:</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="feature in features"
          :key="feature"
          class="bg-yellow-200 text-yellow-900 px-2 py-1 rounded-full text-xs"
        >
          {{ feature }}
        </span>
      </div>
    </div>

    <div class="mt-2">
      <p class="text-black font-medium mb-1">Popular Routes:</p>
      <ul class="text-sm text-gray-700 list-disc list-inside">
        <li v-for="route in routes" :key="route">{{ route }}</li>
      </ul>
    </div>

    <div class="mt-4">
      <BaseButton class="w-full">Book Now</BaseButton>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  price: String,
  duration: String,
  features: Array,
  routes: Array
})
import BaseButton from './BaseButton.vue'
</script>
