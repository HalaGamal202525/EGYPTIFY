<template>
    <nav class="w-full flex items-center justify-between px-[137px] py-4 h-20
           bg-transparent absolute top-0 left-0 z-50 shadow-sm">
        <!-- Logo -->
        <div class="flex items-center">
            <img src="../assets/logo.png" alt="Logo"   @click="goTohome" class="w-30 h-30 object-contain  hover:scale-105 transition cursor-pointer" />
        </div>

        <!-- Links -->
        <div class="hidden md:flex space-x-8 items-center text-[16px]">
            <a href="#" class="px-4 text-gray-800 font-bold hover:text-yellow-400"  @click="goTodestinations">Destinations</a>
            <a href="#" class="px-4 text-gray-800 font-bold hover:text-yellow-400" @click="goTotripplaner">Trips</a>
            <a href="#" class="px-4 text-gray-800 font-bold hover:text-yellow-400"  @click="goTotripreviews">Reviews</a>

            <!-- More Dropdown -->
            <div class="relative px-4">
  <button
    @click="toggleMenu"
    class=" font-bold text-gray-800 hover:text-yellow-400 focus:outline-none cursor-pointer"
  >
    More
  </button>

  <transition name="fade">
    <div
      v-if="isMenuOpen"
      class="absolute top-full left-0 mt-2 bg-white rounded shadow-md py-2 z-50"
    >
<Menubar :isOpen="true" />
    </div>
  </transition>
</div>

        </div>

      <div class="flex items-center space-x-4">
  <span class="text-yellow-400 text-xl">
    <i class="fa-solid fa-earth-asia"></i>
  </span>

  <template v-if="user">
     <img
    :src="imageStore.selectedImage || '/about-us/girl-4.png'"
    :alt="user.displayName || 'User'"
    @click="goToProfile"
    class="w-15 h-15 rounded-full object-contain border-2 border-yellow-400 hover:scale-105 transition cursor-pointer"
  />
  </template>

  <template v-else>
    <BaseButton
      @click="gologin"
      class="bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-500  hover:scale-105 transition cursor-pointer"
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

import BaseButton from './BaseButton.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useImageStore } from '../data/imagepicker'
const imageStore = useImageStore()
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
import Menubar from "./NavBarMenu.vue"

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
function gologin() {
router.push("../../../login")}
function goTohome(){
    router.push("/")}

function goTodestinations(){
    router.push("/destination")}

    function goTotripplaner(){
    router.push("/tripplanner")}
        function goTotripreviews(){
    router.push("/user-review")}
</script>