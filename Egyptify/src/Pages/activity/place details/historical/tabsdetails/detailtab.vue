<template>
  <div class="grid md:grid-cols-2 gap-6 p-6">
    <div class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl">
    <i class="fa-solid fa-clock"></i>
      <div>
        <h3 class="font-bold text-gray-800">Visiting Hours</h3>
        <p class="text-gray-600 mt-1">{{ place.visitingHours }}</p>
      </div>
    </div>

    <div class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl">
     <i class="fa-solid fa-dollar-sign"></i>
      <div>
        <h3 class="font-bold text-gray-800">Entry Fees</h3>
        <p class="text-gray-600 mt-1">{{ place.entryFees }}</p>
      </div>
    </div>

    <div class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl">
      <i class="fa-solid fa-sun"></i>
      <div>
        <h3 class="font-bold text-gray-800">Best Time to Visit</h3>
        <p class="text-gray-600 mt-1">{{ place.bestTimeToVisit }}</p>
      </div>
    </div>
    <div class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl">
    <i class="fa-solid fa-car"></i>
      <div>
        <h3 class="font-bold text-gray-800">How to Get There</h3>
        <p class="text-gray-600 mt-1">{{ place.howToGet }}</p>
      </div>
    </div>
<div class="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
  <div class="flex items-center gap-2 mb-2">
<i class="fa-solid fa-lightbulb"></i>
    <h3 class="text-xl font-bold text-yellow-700">Tips</h3>
  </div>
  <ul class="list-disc pl-6 text-gray-700 space-y-1">
    <li>Wear a hat and sunglasses.</li>
    <li>Bring water.</li>
    <li>Avoid aggressive street vendors.</li>
  </ul>
</div>

  </div>


    <div>
    <img :src="data.image" alt="Overview Image" />
    <p>{{ data.description }}</p>
  </div>
</template>

<script setup>
// const place ={
//         "visitingHours": "8:00AM-5:00PM",
//     "entryFees": "EGP 200 for Egyptians, EGP 400 for foreigners",
//     "bestTimeToVisit": "October to April (cooler weather and fewer crowds)",
//     "howToGet": "Take the metro to Giza Station, then use a taxi or Careem ",
//     "tips": "Go early "
// }
import places from "../../../../../data/historical.json"
defineProps({ data: Object });
// defineProps({
//   place: Object
// });
</script>
