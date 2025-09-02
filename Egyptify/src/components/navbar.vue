<template>
  <nav
    class="w-full flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[137px] py-4 h-20 bg-transparent dark:bg-gray-900/80 absolute top-0 left-0 z-50 transition-colors duration-300 sm:space-x-3"
  >
    <div class="flex items-center md:hidden px-4">
      <button @click="isOpen = !isOpen" class="text-white text-2xl">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
    <div
      :class="[
        'fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 z-50 md:hidden',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between px-5 py-4 border-b dark:border-gray-700"
      >
        <h2
          class="text-lg font-semibold text-gray-800 dark:text-gray-200 tracking-wide"
        >
          Menu
        </h2>
        <button
          @click="isOpen = false"
          class="md:hidden text-gray-500 dark:text-gray-400 hover:text-red-500 transition text-lg"
        >
          ✖
        </button>
      </div>

      <!-- Links -->
      <nav class="mt-6 px-5 space-y-6">
        <!-- Main Links -->
        <div class="space-y-1">
          <h3
            class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
          >
            Main
          </h3>

          <RouterLink
            to="/destination"
            class="block px-3 py-2 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition"
          >
            Destinations
          </RouterLink>

          <RouterLink
            to="/site-review"
            class="block px-3 py-2 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition"
          >
            Reviews
          </RouterLink>

          <RouterLink
            to="/tripplanner"
            class="block px-3 py-2 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition"
          >
            Trips
          </RouterLink>
        </div>

        <!-- Explore Links -->
        <div class="space-y-1 pt-4 border-t border-gray-400">
          <h3
            class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
          >
            Explore
          </h3>

          <a
            href="#"
            @click="gotoexplore"
            class="block px-3 py-2 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition"
          >
            Explore Egypt
          </a>
          <a
            href="#"
            @click="goToresturant"
            class="block px-3 py-2 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition"
          >
            Restaurants
          </a>
          <a
            href="#"
            @click="goToblogs"
            class="block px-3 py-2 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition"
          >
            Travel Blog
          </a>
          <a
            href="#"
            @click="goTooffers"
            class="block px-3 py-2 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition"
          >
            Offers
          </a>
          <a
            href="#"
            @click="goTohotel"
            class="block px-3 py-2 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition"
          >
            Hotels
          </a>
          <a
            href="#"
            @click="gotoevents"
            class="block px-3 py-2 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition"
          >
            Event Calendar
          </a>
          <a
            href="#"
            @click="gototransportaion"
            class="block px-3 py-2 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition"
          >
            Transportation
          </a>
        </div>
      </nav>
    </div>

    <div class="flex items-center">
      <img
        src="../assets/logo.png"
        alt="Logo"
        @click="goTohome"
        class="w-36 h-30 object-contain hover:scale-105 transition cursor-pointer"
      />
    </div>

    <div class="hidden md:flex space-x-4 items-center text-[16px]">
      <a
        href="#"
        class="px-4 text-white dark:text-gray-200 font-bold hover:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
        @click="goTodestinations"
        >Destinations</a
      >
      <a
        href="#"
        class="px-4 text-white dark:text-gray-200 font-bold hover:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
        @click="goTotripplaner"
        >Trips</a
      >
      <router-link
        to="/site-review"
        class="px-4 text-white dark:text-gray-200 font-bold hover:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
        >Review</router-link
      >

      <div class="relative px-4" ref="moreButtonRef">
        <button
          @click="toggleMenu"
          class="text-white dark:text-gray-200 font-bold hover:text-yellow-400 dark:hover:text-yellow-300 focus:outline-none cursor-pointer transition-colors"
        >
          More
        </button>

        <transition name="fade">
          <div
            v-if="isMenuOpen"
            class="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded shadow-md py-2 z-50 transition-colors"
          >
            <Menubar :isOpen="true" />
          </div>
        </transition>
      </div>
    </div>

    <div class="flex items-center space-x-4">
      <!-- <button
        @click="themeStore.toggleDarkMode"
        class="p-2 rounded-full bg-yellow-500 dark:bg-yellow-500 hover:bg-yellow-500 dark:hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
        :title="
          themeStore.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
        "
      >
        <svg
          :class="[
            'w-5 h-5 transition-transform',
            themeStore.isDarkMode ? 'rotate-180 text-black' : 'text-black',
          ]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="themeStore.isDarkMode"
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          />
          <path
            v-else
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          />
        </svg>
      </button> -->

      <div class="relative" ref="langMenuRef">
        <button
          @click="toggleLangMenu"
          class="rounded hover:scale-105 transition cursor-pointer flex items-center gap-2"
        >
          <span class="text-yellow-400 text-2xl">
            <i class="fa-solid fa-earth-asia !text-yellow-400 text-2xl"></i>
          </span>
        </button>

        <transition name="fade">
          <ul
            v-if="isLangMenuOpen"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded text-black dark:text-gray-200 z-50 transition-colors"
          >
            <li
              v-for="lang in languages"
              :key="lang.code"
              @click="translatePage(lang.code)"
              class="px-4 py-2 hover:bg-yellow-200 dark:hover:bg-yellow-700 cursor-pointer flex items-center gap-2 transition-colors"
            >
              <span :class="`fi fi-${lang.flag}`"></span>
              {{ lang.label }}
            </li>
          </ul>
        </transition>
      </div>

      <div class="relative" v-if="user">
        <img
          :src="imageStore.selectedImage || '/about-us/girl-4.png'"
          :alt="user.displayName || 'User'"
          @click="toggleProfileMenu"
          class="w-15 h-15 rounded-full object-contain border-2 border-yellow-400 dark:border-yellow-300 hover:scale-105 transition cursor-pointer"
        />
        <transition name="fade">
          <ul
            v-if="isProfileMenuOpen"
            class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-50 text-black dark:text-gray-200"
          >
            <li>
              <a
                @click="goToProfile"
                class="block px-4 py-2 hover:bg-yellow-200 dark:hover:bg-gray-700 cursor-pointer"
                >Profile</a
              >
            </li>
          
            <li class="border-t border-gray-200 dark:border-gray-700">
              <a
                @click="logout"
                class="block px-4 py-2 hover:bg-red-200 dark:hover:bg-red-700 cursor-pointer text-red-500 dark:text-red-400"
                >Logout</a
              >
            </li>
          </ul>
        </transition>
      </div>

      <template v-else>
        <BaseButton
          @click="gologin"
          class="bg-yellow-500 dark:bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:scale-105 transition cursor-pointer"
        >
          Login
        </BaseButton>
      </template>
    </div>
  </nav>

  <div id="google_translate_element" style="display: none"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "./BaseButton.vue";
import { useUserStore } from "../data/signupstore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useImageStore } from "../data/imagepicker";
import Menubar from "./NavBarMenu.vue";
import { useThemeStore } from "../data/themeStore";

import { RouterLink } from "vue-router";

const isOpen = ref(false);

const router = useRouter();
const userStore = useUserStore();
const imageStore = useImageStore();
const themeStore = useThemeStore();

const user = ref(null);
const auth = getAuth();
onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

const isMenuOpen = ref(false);
const isProfileMenuOpen = ref(false); // New state for profile dropdown
const moreButtonRef = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value;
};

const handleClickOutside = (event) => {
  if (moreButtonRef.value && !moreButtonRef.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};
(function () {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) {
        window.chatbase.q = [];
      }
      window.chatbase.q.push(args);
    };
  }
})();

const isLangMenuOpen = ref(false);
const langMenuRef = ref(null);

const languages = [
  { code: "en", label: "English", flag: "gb" },
  { code: "ar", label: "العربية", flag: "eg" },
  { code: "fr", label: "Français", flag: "fr" },
  { code: "de", label: "Deutsch", flag: "de" },
  { code: "es", label: "Español", flag: "es" },
  { code: "ru", label: "Русский", flag: "ru" },
  { code: "it", label: "Italiano", flag: "it" },
  { code: "ko", label: "한국어", flag: "kr" },
  { code: "zh", label: "中文", flag: "cn" },
  { code: "ja", label: "日本語", flag: "jp" },
];

const toggleLangMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value;
};

const handleClickOutsideLang = (event) => {
  if (langMenuRef.value && !langMenuRef.value.contains(event.target)) {
    isLangMenuOpen.value = false;
  }
};

const handleClickOutsideProfile = (event) => {
  const profileButton = event.target.closest("img");
  const profileMenu = event.target.closest("ul");

  if (!profileButton && !profileMenu) {
    isProfileMenuOpen.value = false;
  }
};

function translatePage(lang) {
  const select = document.querySelector(".goog-te-combo");
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
  }
  isLangMenuOpen.value = false;
}

const toggleTheme = () => {
  themeStore.toggleDarkMode();
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("click", handleClickOutsideLang);
  document.addEventListener("click", handleClickOutsideProfile);

  window.googleTranslateElementInit = function () {
    new window.google.translate.TranslateElement(
      { pageLanguage: "en" },
      "google_translate_element"
    );
  };
  const gScript = document.createElement("script");
  gScript.src =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(gScript);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("click", handleClickOutsideLang);
  document.removeEventListener("click", handleClickOutsideProfile);
});

function gologin() {
  router.push("/login");
}
function goTohome() {
  router.push("/");
}
function goTodestinations() {
  router.push("/destination");
}
function goTotripplaner() {
  router.push("/tripplanner");
}
function goTotripreviews() {
  router.push("/site-review");
}
function goToProfile() {
  router.push("/profile");
  isProfileMenuOpen.value = false;
}
function gotoevents() {
  router.push("/events");
}
function gototransportaion() {
  router.push("/transportiondetails");
}
function goToresturant() {
  router.push("/resturant");
}
function gotoexplore() {
  router.push("/explore");
}
function goTooffers() {
  router.push("/offerpage");
}
function goTohotel() {
  router.push("/hotels");
}

function goToblogs() {
  router.push("/blogs");
}
function goToHistory() {
  router.push("/history");
  isProfileMenuOpen.value = false;
}
async function logout() {
  try {
    await signOut(auth);
    isProfileMenuOpen.value = false;
    router.push("/login");
  } catch (error) {
    console.error("Logout failed:", error.message);
  }
}
</script>

<style scoped>
nav {
  z-index: 100 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.goog-logo-link,
.goog-te-gadget,
.goog-te-banner-frame,
#goog-gt-tt {
  display: none !important;
}
.goog-te-banner-frame.skiptranslate {
  display: none !important;
}

body {
  top: 0px !important;
}
</style>
