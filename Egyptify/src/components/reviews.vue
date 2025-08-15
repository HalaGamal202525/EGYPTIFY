<template>
  <div class="bg-white shadow-md rounded-xl p-4 flex gap-4 max-w-xl w-full">
    <img
      :src="avatar"
      alt="Reviewer avatar"
      class="w-12 h-12 rounded-full object-cover"
    />

    <div class="flex-1">
      <div class="flex justify-between items-center mb-1">
        <h3 class="font-semibold text-gray-800">{{ name }}</h3>
        <span class="text-sm text-gray-400">{{ date }}</span>
      </div>

      <div class="text-yellow-500 text-sm mb-2">
        <i
          v-for="n in Math.floor(rating)"
          :key="n"
          class="fa-solid fa-star"
        ></i>
        <i
          v-if="rating % 1 !== 0"
          class="fa-solid fa-star-half-stroke"
        ></i>
      </div>

      <p class="text-gray-600 text-sm">{{ comment }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  avatar: String,
  date: String,
  rating: Number,
  comment: String
})
</script>
