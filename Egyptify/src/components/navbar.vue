<template>
  <nav
    class="w-full flex items-center justify-between px-[137px] py-4 h-28 
           bg-transparent absolute top-0 left-0 z-50"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <img src="../assets/logo.png" alt="Logo" class="w-40 h-40 object-contain" />
    </div>

    <!-- Links -->
    <div class="hidden md:flex space-x-8 items-center">
      <a href="#" class="px-4 text-white font-bold hover:text-yellow-400">Explore</a>
      <a href="#" class="px-4 text-white font-bold hover:text-yellow-400">Trips</a>
      <a href="#" class="px-4 text-white font-bold hover:text-yellow-400">Reviews</a>

      <!-- More Dropdown -->
      <div class="relative px-4" @mouseleave="isDropdownOpen = false">
        <button
          @mouseenter="isDropdownOpen = true"
          class="text-white font-bold hover:text-yellow-400 focus:outline-none"
        >
          More
        </button>
        <div
          v-show="isDropdownOpen"
          class="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-md py-2 w-40 z-50"
        >
          <a href="#" class="block px-4 py-2 hover:bg-yellow-100 font-bold text-[32px]">About</a>
          <a href="#" class="block px-4 py-2 hover:bg-yellow-100 font-bold">Contact</a>
          <a href="#" class="block px-4 py-2 hover:bg-yellow-100 font-bold">FAQ</a>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div class="flex items-center space-x-4">
      <span class="text-yellow-400 text-xl">
        <i class="fa-solid fa-earth-asia"></i>
      </span>
      <button class="bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-500">
        Login
      </button>
    </div>
  </nav>
</template>
