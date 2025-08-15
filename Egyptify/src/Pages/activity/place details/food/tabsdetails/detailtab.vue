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
    <li>Arrive early to avoid crowds, especially on weekends.</li>
    <li>Bring cash for entry as some places may not accept cards.</li>
    <li>Wear comfortable shoes — expect to walk a lot.</li>
    <li>Respect local customs and dress modestly if required.</li>
  </ul>
</div>

  </div>
</template>

<script setup>
const place ={
        "visitingHours": "10:00 AM - 12:00 AM",
    "entryFees": "Free",
    "bestTimeToVisit": "Evening",
    "howToGet": "Take metro to Sadat Station, 5 min walk",
    "tips": "Go early to avoid queues"
}
defineProps({
  place: Object
});
</script>
