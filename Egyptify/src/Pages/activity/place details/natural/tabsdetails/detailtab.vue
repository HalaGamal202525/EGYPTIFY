<template>
  <div class="grid md:grid-cols-2 gap-6 p-6">
    <!-- الكارت الأول: Visiting Hours -->
     <!-- الكارت الأول: Visiting Hours -->
    <div class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl">
    <i class="fa-solid fa-clock"></i>
      <div>
        <h3 class="font-bold text-gray-800">Visiting Hours</h3>
        <p class="text-gray-600 mt-1">{{ place.visitingHours }}</p>
      </div>
    </div>

    <!-- الكارت التاني: Entry Fees -->
    <div class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl">
     <i class="fa-solid fa-dollar-sign"></i>
      <div>
        <h3 class="font-bold text-gray-800">Entry Fees</h3>
        <p class="text-gray-600 mt-1">{{ place.entryFees }}</p>
      </div>
    </div>

    <!-- الكارت الثالث: Best Time to Visit -->
    <div class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl">
      <i class="fa-solid fa-sun"></i>
      <div>
        <h3 class="font-bold text-gray-800">Best Time to Visit</h3>
        <p class="text-gray-600 mt-1">{{ place.bestTimeToVisit }}</p>
      </div>
    </div>

    <!-- الكارت الرابع: How to Get There -->
    <div class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl">
    <i class="fa-solid fa-car"></i>
      <div>
        <h3 class="font-bold text-gray-800">How to Get There</h3>
        <p class="text-gray-600 mt-1">{{ place.howToGet }}</p>
      </div>
    </div>
    <!-- قسم النصائح -->
<div class="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
  <div class="flex items-center gap-2 mb-2">
<i class="fa-solid fa-lightbulb"></i>
    <h3 class="text-xl font-bold text-yellow-700">Tips</h3>
  </div>
  <ul class="list-disc pl-6 text-gray-700 space-y-1">
    <li>Bring sunscreen, sunglasses, and a scarf (for sand/dust)
  .</li>
    <li>Keep a water bottle with you at all times
.</li>
    <li> Internet coverage can be limited — prepare offline maps or guides
</li>
    <li>Try the 4x4 desert safari — it’s one of Siwa’s best experiences.</li>
  </ul>
</div>

  </div>
</template>

<script setup>
const place ={
        "visitingHours": "9:00AM-5:00PM",
    "entryFees": "Around EGP 30",
    "bestTimeToVisit": "October to March (15°C to 28°C)",
    "howToGet": "From Cairo:🚗 By Car: 750 km (about 10 hours)🚌 By Bus:  (12–14 hours)",
    "tips": "Go early to avoid queues"
}
defineProps({
  place: Object
});
</script>
