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
      "description": "Dream Park is one of Egypt’s largest and most popular amusement parks, located on Wahat Road in the Dreamland Compound, 6th of October City, Giza. Established in 1999 and spanning over 150 acres, the park is divided into three main zones: Kids Zone, Family Zone, and Thrill Zone — offering more than 30 attractions ranging from gentle rides to intense roller coasters. It features an inverted roller coaster with five loops, 5D and 7D simulators, bumper cars, a Ferris wheel, Go-Karts, and a famous Horror House.",
    "rating": 4.8,
    "address": "Wahat Road, Dreamland Compound, 6th of October City, Giza, Egypt",
    "mapLink": "https://maps.app.goo.gl/nzmydsifoXZ6iEQe7",
    "mapImage": "/public/Details/entetainment/3.png",
}

import BaseButton from '../../../../../components/BaseButton.vue';
</script>
