<template>
  <div class="flex flex-col md:flex-row gap-8 p-4">
    <!-- الشمال -->
    <div class="md:w-2/3 space-y-6">
      <div>
        <h2 class="text-3xl font-bold text-gray-800">{{ overviewData.name }}</h2>
        <p class="mt-2 text-gray-600">{{ overviewData.description }}</p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-lg  text-black">Rate: {{ overviewData.rating }} </span>
                <span class="text-yellow-500 text-xl"><i class="fa-solid fa-star"></i></span>

      </div>

      <div class="flex gap-4">
        <BaseButton class="bg-[#FFC340] hover:bg-[#eab308] text-white font-bold py-2 px-4 rounded-xl shadow">
          Book Now
        </BaseButton>
        <BaseButton class="bg-white border border-[#FFC340] !text-[#FFC340] hover:bg-[#fff6dc] font-bold py-2 px-4 rounded-xl shadow">
          Add to Favorite
        </BaseButton>
      </div>
    </div>

    <!-- اليمين -->
    <div class="md:w-1/3 space-y-4">
      <h3 class="text-xl font-bold text-gray-800">Map Location</h3>
      <div class="flex items-start gap-2 text-gray-700">
        <i class="fa-solid fa-location-dot"></i>
        <span>{{ overviewData.address }}</span>
      </div>

      <a :href="overviewData.mapLink" target="_blank" rel="noopener noreferrer">
        <img
          :src="overviewData.mapImage"
          alt="Map"
          class="rounded-lg shadow-md w-full hover:opacity-90 transition duration-300"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
const overviewData ={
      "description": "Siwa Oasis is one of Egypt’s most remote and enchanting destinations, located near the Libyan border in the heart of the Western Desert. Known for its serene landscapes, Siwa offers a unique blend of natural beauty, historical significance, and indigenous Amazigh (Berber) culture.The oasis is home to crystal-clear salt lakes, hot and cold springs, golden sand dunes, and thousands of date palm trees. One of its most famous spots is Cleopatra’s Pool, a natural spring where legend says the queen herself once bathed..",
    "rating": 4.8,
    "address": "Siwa Oasis, Matrouh Governorate, Western Desert, Egypt",
    "mapLink": "https://maps.app.goo.gl/SRqoKNggiac9QwYy5",
    "mapImage": "/public/Details/natural/image 9.png",
}

import BaseButton from '../../../../../components/BaseButton.vue';
</script>
