<template>
  <div class="flex flex-col md:flex-row gap-8 p-4">
    <!-- الشمال -->
    <div class="md:w-2/3 space-y-6">
      <div>
        <h2 class="text-3xl font-bold text-gray-800">{{ place.name }}</h2>
        <p class="mt-2 text-gray-600">{{ place.description }}</p>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-2">
        <span class="text-yellow-500 text-xl">★</span>
        <span class="text-lg font-semibold">{{ place.rating }}</span>
      </div>

      <!-- الزرارين -->
      <div class="flex gap-4">
        <BaseButton class="bg-[#FFC340] hover:bg-[#eab308] text-white font-bold py-2 px-4 rounded-xl shadow">
          Book Now
        </BaseButton>
        <BaseButton class="bg-white border border-[#FFC340] text-[#FFC340] hover:bg-[#fff6dc] font-bold py-2 px-4 rounded-xl shadow">
          Add to Favorite
        </BaseButton>
      </div>
    </div>

    <!-- اليمين -->
    <div class="md:w-1/3 space-y-4">
      <h3 class="text-xl font-bold text-gray-800">Map Location</h3>

      <div class="flex items-start gap-4 text-gray-700">
        <svg class="w-6 h-6 text-[#FFC340]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z"/>
        </svg>
        <span>{{ place.address }}</span>
      </div>

      <!-- صورة الخريطة -->
<a :href="place.mapLink" target="_blank" rel="noopener noreferrer">
  <img
    :src="place.mapImage"
    alt="Map"
    class="rounded-lg shadow-md w-full hover:opacity-90 transition duration-300"
  />
</a>

    </div>
  </div>
</template>

<script setup>
import BaseButton from '../../BaseButton.vue';
defineProps({
  place: Object
});
</script>
