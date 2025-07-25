<template>
  <div class="w-full max-w-[300px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
    <img src="../assets/signup .png" alt="Card image" class="h-48 w-full object-cover" />

    <div class="p-4 flex flex-col justify-between flex-1">
      <div>
        <h2 class="text-lg font-bold text-gray-800">{{ title }}</h2>
        <p class="text-sm text-gray-500 mb-2">{{ description }}</p>

        <div v-if="rating" class="text-yellow-500 text-sm mb-1">
          <span v-for="n in Math.floor(rating)" :key="n"><i class="fa-solid fa-star" style="color: #ffc340;"></i></span>
          <span v-if="rating % 1 !== 0"><i class="fa-solid fa-star-half-stroke" style="color: #ffc340;"></i></span>
        </div>

        <div class="flex flex-wrap items-center text-sm text-gray-600 gap-2 mt-2" v-if="location || date || duration">
          <span v-if="location"><i class="fa-solid fa-location-dot" style="color: #ffc340;"></i> {{ location }}</span>
          <span v-if="date"><i class="fa-solid fa-calendar" style="color: #ffc340;"></i> {{ date }}</span>
          <span v-if="duration"><i class="fa-solid fa-clock" style="color: #ffc340;"></i> {{ duration }}</span>
        </div>
      </div>

      <div class="flex items-center justify-between mt-4">
        <span class="text-yellow-600 font-bold text-md" v-if="price"> {{ price }} EGP</span>

 
        <slot name="action" v-if="hasActionSlot" />
        
        <!-- زرار افتراضي يظهر بشرط -->
        <butn v-else-if="showButton" class="text-black" :text="buttonText" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useSlots } from 'vue'
import butn from './BaseButton.vue'

defineProps({
  image: String,
  title: String,
  description: String,
  location: String,
  date: String,
  duration: String,
  price: String,
  rating: Number,
  showButton: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: 'Book Now'
  }
})

const slots = useSlots()
const hasActionSlot = !!slots.action
</script>