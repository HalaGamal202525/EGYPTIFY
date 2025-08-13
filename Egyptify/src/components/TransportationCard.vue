<template>
  <div class="border rounded-2xl p-6 w-full max-w-sm bg-white shadow-md hover:shadow-lg transition-all duration-300">
    <!-- Icon -->
    <div class="flex justify-center mb-5">
      <div class="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 text-3xl shadow-sm">
        <i :class="icon" ></i>
      </div>
    </div>

    <!-- Title -->
    <h3 class="text-xl font-bold text-center mb-2 text-gray-900">{{ title }}</h3>
    <p class="text-sm text-gray-500 text-center mb-5 leading-relaxed">{{ description }}</p>

    <!-- Price & Duration -->
    <div class="flex items-center justify-between mb-5">
      <span class="bg-yellow-500 px-4 py-1.5 rounded-full text-white font-semibold text-sm shadow-sm">
        {{ price }}
      </span>
      <div class="flex items-center gap-2 text-gray-500 text-sm">
        <i class="fas fa-clock text-yellow-500"></i>
        <span>{{ duration }}</span>
      </div>
    </div>

    <!-- Features -->
    <div v-if="features?.length" class="mb-5 h-20">
      <p class="text-gray-900 font-semibold mb-2">Features</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="feature in features"
          :key="feature"
          class="bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-xs border border-yellow-200"
        >
          {{ feature }}
        </span>
      </div>
    </div>

    <!-- Routes -->
    <div v-if="routes?.length" class="mb-6">
      <p class="text-gray-900 font-semibold mb-2">Popular Routes</p>
      <ul class="text-sm text-gray-600 list-disc list-inside space-y-1">
        <li v-for="route in routes" :key="route">{{ route }}</li>
      </ul>
    </div>

    <!-- Button -->
    <router-link to="/form">
      <BaseButton class="w-full  text-white font-semibold py-2.5 rounded-lg shadow-md transition-all">
        Book Now
      </BaseButton>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  icon: String, // مثال: "fas fa-bus"
  title: String,
  description: String,
  price: String,
  duration: String,
  features: Array,
  routes: Array
})
import BaseButton from './BaseButton.vue'
</script>
