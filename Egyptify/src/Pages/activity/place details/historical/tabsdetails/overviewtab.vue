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
      "description": "Sobhy Kaber is one of the most famous Egyptian restaurants known for its rich, flavorful grilled meats, liver dishes, and traditional side plates. Located in Shubra El Kheima, the restaurant has built a strong reputation for authentic Egyptian cuisine, massive portions, and a lively local atmosphere. It’s a must-try for food lovers seeking a true taste of Cairo.",
    "rating": 4.5,
    "address": "151 Obaid Street, Shubra El Kheima, Qalyubia Governorate, Egypt",
    "mapLink": "https://maps.app.goo.gl/YJUtGMJZ8NyTDzbq9",
    "mapImage": "  public/Details/food/Rectangle 7.png",
}

import BaseButton from '../../../../../components/BaseButton.vue';
</script>
