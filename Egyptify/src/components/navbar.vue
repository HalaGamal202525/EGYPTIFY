<template>
  <nav
    class="w-full flex items-center justify-between px-[137px] py-4 h-20 
           bg-transparent absolute top-0 left-0 z-50"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <img src="../assets/logo.png" alt="Logo" @click="goTohome" class="w-30 h-30 object-contain  hover:scale-105 transition cursor-pointer" />
    </div>

    <!-- Links -->
    <div class="hidden md:flex space-x-8 items-center text-[16px]">
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
          <a href="#" class="block px-4 py-2 hover:bg-yellow-100 font-bold ">About</a>
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

  <!-- ✅ لو في مستخدم، اعرض صورته -->
  <template v-if="user">
    <img
      :src="user.photoURL || '/1752250863586.jpg'"
      :alt="user.displayName || 'User'"
            @click="goToProfile"
      class="w-12 h-12 rounded-full object-cover border-2 border-yellow-400  hover:scale-105 transition cursor-pointer"
    />
  </template>

  <!-- ✅ لو مفيش مستخدم، اعرض زرار Login -->
  <template v-else>
    <BaseButton
      @click="gologin"
      class="bg-yellow-400 text-black font-bold cursor-pointer px-4 py-2 rounded hover:bg-yellow-500  hover:scale-105 transition cursor-pointer"
    >
      Login
    </BaseButton>
  </template>
</div>

  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";


import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = useRouter();

// حالة المستخدم
const user = ref(null);
function goToProfile() {
  router.push("/profile");
}
// متابعة حالة تسجيل الدخول
const auth = getAuth();
onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

const isDropdownOpen = ref(false);
function gologin() {
router.push("../../../login")}

function goTohome(){
    router.push("/")}


</script>