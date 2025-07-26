<template>
  <div class="relative" @click="toggleDropdown">
    <button class="px-4 py-2 font-semibold hover:text-[#FFC340]">
      More
    </button>

    <div
      v-show="isOpen"
      class="absolute right-0 top-full mt-2 w-[650px] bg-white shadow-lg rounded-xl transition duration-300 z-50 p-6 grid grid-cols-3 gap-4"
    >
      <!-- العمود الأيسر للصورة -->
      <div class="col-span-1 flex items-center justify-center">
        <img
          :src="menuImg"
          alt="Menu Illustration"
          class="w-35 h-35 rounded-lg"
        />
      </div>

      <!-- العمودين الآخرين للروابط -->
      <div class="col-span-2 grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <a href="#" class="block hover:text-[#FFC340] font-medium">Explore Egypt</a>
          <a href="#" class="block hover:text-[#FFC340] font-medium">Destinations</a>
          <a href="#" class="block hover:text-[#FFC340] font-medium">Trip Planner</a>
          <a href="#" class="block hover:text-[#FFC340] font-medium">Travel Blog</a>
        </div>

        <div class="space-y-2">
          <a href="#" class="block hover:text-[#FFC340] font-medium">Offers</a>
          <a href="#" class="block hover:text-[#FFC340] font-medium">Attractions & Activities</a>
          <a href="#" class="block hover:text-[#FFC340] font-medium">Event Calendar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import menuImg from '/src/assets/BlogPageHero.jpg'

const isOpen = ref(false)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}
</script>
