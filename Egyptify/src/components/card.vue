<template>
  <div class="w-full max-w-[300px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
<div class="w-full">
  <img :src="image" alt="Card image" class="h-48 w-full object-cover rounded-t-xl" />
  
  <button
   v-if="showHeart"
    @click="toggleFavorite"
    class="absolute top-2 right-2 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md transition"
  >
    <i
   
      class="fa-heart fa-regular" style="color:#ffc340"
      :class="isFavorite ? 'text-red-500' : 'text-gray-400'"
    ></i>
  </button>
</div>

    <div class="p-4 flex flex-col justify-between flex-1">
      <div>
        <h2 class="text-lg font-bold text-gray-800 ">{{ title }}</h2>
        <p class="text-sm text-gray-500 mb-2 py-2">{{ description }}</p>

  
        <div v-if="rating" class="text-yellow-500 text-sm mb-1 py-4">
          <span v-for="n in Math.floor(rating)" :key="n"><i class="fa-solid fa-star" style="color: #ffc340;"></i></span>
          <span v-if="rating % 1 !== 0"><i class="fa-solid fa-star-half-stroke" style="color: #ffc340;"></i></span>
        </div>
        
        <div class="flex flex-wrap items-center text-sm text-gray-600 gap-2 mt-2" v-if="location || date || duration||people">
          <span v-if="location"><i class="fa-solid fa-location-dot" style="color: #ffc340;"></i> {{ location }}</span>
          <span v-if="date"><i class="fa-solid fa-calendar" style="color: #ffc340;"></i> {{ date }}</span>
          <span v-if="duration"><i class="fa-solid fa-clock" style="color: #ffc340;"></i> {{ duration }}</span>
                    <span v-if="people"><i class="fa-solid fa-user-group" style="color: #ffc340;"></i> {{ people }}</span>

        </div>
      </div>

      <div class="flex items-center justify-between mt-4">
        <span class="text-yellow-600 font-bold text-md" v-if="price"> {{ price }} EGP</span>

 
<slot name="action" v-if="hasActionSlot" />
<BaseButton v-else-if="showButton">{{ buttonText }}</BaseButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useSlots } from 'vue'
import BaseButton from './BaseButton.vue'

defineProps({
  image: String,
  title: String,
  description: String,
  location: String,
  date: String,
  duration: String,
  people:String,
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
import { ref } from 'vue'

const isFavorite = ref(false)
const showHeart = ref(false)

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}
</script>