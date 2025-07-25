<script >
import { ref } from 'vue'
const isDropdownOpen = ref(false)
</script>

<template>
  <nav class="w-full text-white flex items-center justify-between px-6 py-4 h-20">
    <!-- Logo -->
    <div class="flex items-center space-x-2">
      <img src="../assets/logo.png" alt="Logo" class="w-24 h-24 object-contain" />
    </div>

    <!-- Links -->
    <div class="hidden md:flex space-x-8 items-center">
      <a href="#" class="text-black hover:text-yellow-400">Explore</a>
      <a href="#" class="text-black hover:text-yellow-400">Trips</a>
      <a href="#" class=" text-black hover:text-yellow-400">Reviews</a>

      <!-- More Dropdown -->
      <div class="relative" @mouseleave="isDropdownOpen = false">
        <button
          @mouseenter="isDropdownOpen = true"
          class="text-black hover:text-yellow-400 focus:outline-none"
        >
          More
        </button>
        <div
          v-show="isDropdownOpen"
          class="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-md py-2 w-40 z-50"
        >
          <a href="#" class="block px-4 py-2 hover:bg-yellow-100">About</a>
          <a href="#" class="block px-4 py-2 hover:bg-yellow-100">Contact</a>
          <a href="#" class="block px-4 py-2 hover:bg-yellow-100">FAQ</a>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div class="flex items-center space-x-4">
      <span class="text-gray-400 text-xl"><i class="fa-solid fa-earth-asia" style="color: #ffc340;"></i></span>
      <button class="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500">
        Login
      </button>
    </div>
  </nav>
</template>
