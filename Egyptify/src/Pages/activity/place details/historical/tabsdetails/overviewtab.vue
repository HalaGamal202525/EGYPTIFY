<!-- <template>
  <div class="flex flex-col md:flex-row gap-8 p-4">
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
      "description": "The Giza Plateau features three legendary pyramids: The Great Pyramid of Khufu, the largest and only surviving Wonder of the Ancient World;  the Pyramid of Khafre, known for its elevated base and proximity to the Great Sphinx; and the Pyramid of Menkaure, the smallest yet refined in design.Together, they reflect the engineering mastery and spiritual depth of ancient Egypt.",
    "rating": 4.9,
    "address": "Al Haram, Giza Governorate 3512201, Egypt",
    "mapLink": "https://maps.app.goo.gl/Ntc1PRJe2yMBWRHc9",
    "mapImage": " public/Details/historical/Rectangle 7.png",
}

import BaseButton from '../../../../../components/BaseButton.vue';
</script> -->



<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">Overview</h2>
     <div class="md:w-2/3 space-y-6">
      <div>
        <h2 class="text-3xl font-bold text-gray-800">{{ data.name }}</h2>
        <p class="mt-2 text-gray-600">{{ data.description }}</p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-lg  text-black">Rate: {{ data.rating }} </span>
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

    <div class="md:w-1/3 space-y-4">
      <h3 class="text-xl font-bold text-gray-800">Map Location</h3>
      <div class="flex items-start gap-2 text-gray-700">
        <i class="fa-solid fa-location-dot"></i>
        <span>{{ data.address }}</span>
      </div>

      <a :href="data.mapLink" target="_blank" rel="noopener noreferrer">
        <img
          :src="data.mapImage"
          alt="Map"
          class="rounded-lg shadow-md w-full hover:opacity-90 transition duration-300"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object
});
</script>
