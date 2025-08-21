<template>
  <nav
    class="w-full flex items-center justify-between px-[137px] py-4 h-20
      bg-white fixed top-0 left-0 z-50 shadow-sm">
    
    <!-- Logo -->
    <div class="flex items-center">
      <img src="../assets/logo.png" alt="Logo"
        @click="goTohome"
        class="w-36 h-30 object-contain hover:scale-105 transition cursor-pointer" />
    </div>

    <!-- Links -->
    <div class="hidden md:flex space-x-8 items-center text-[16px]">
      <a @click="goTodestinations" class="px-4 text-gray-800 font-bold hover:text-yellow-400">Destinations</a>
      <a @click="goTotripplaner" class="px-4 text-gray-800 font-bold hover:text-yellow-400">Trips</a>
      <a @click="goTotripreviews" class="px-4 text-gray-800 font-bold hover:text-yellow-400">Reviews</a>

      <!-- More Dropdown -->
      <div class="relative px-4">
        <button @click="toggleMenu"
          class="font-bold text-gray-800 hover:text-yellow-400 focus:outline-none cursor-pointer">
          More
        </button>
        <transition name="fade">
          <div v-if="isMenuOpen"
            class="absolute top-full left-0 mt-2 bg-white rounded shadow-md py-2 z-50">
            <Menubar :isOpen="true" />
          </div>
        </transition>
      </div>
    </div>

    <!-- Right Side -->
    <div class="flex items-center space-x-4">
      <!-- 🌐 زر اللغات -->
     <div class="relative" ref="langMenuRef">
        <button
          @click="toggleLangMenu"
          class=" rounded hover:scale-105 transition cursor-pointer flex items-center gap-2"
        >
          <span class="text-yellow-400 text-2xl">
<i class="fa-solid fa-earth-asia !text-yellow-400 text-2xl"></i>
          </span>
        </button>

        <transition name="fade">
         <ul
  v-if="isLangMenuOpen"
  class="absolute right-0 mt-2 w-48 bg-white shadow-md rounded text-black z-50"
>
  <li
    v-for="lang in languages"
    :key="lang.code"
    @click="translatePage(lang.code)"
    class="px-4 py-2 hover:bg-yellow-200 cursor-pointer flex items-center gap-2"
  >
    <span :class="`fi fi-${lang.flag}`"></span>
    {{ lang.label }}
  </li>
</ul>

        </transition>
      </div>

      <!-- User -->
      <template v-if="user">
        <img :src="imageStore.selectedImage || '/about-us/girl-4.png'"
          :alt="user.displayName || 'User'"
          @click="goToProfile"
          class="w-15 h-15 rounded-full object-contain border-2 border-yellow-400 hover:scale-105 transition cursor-pointer" />
      </template>
      <template v-else>
        <BaseButton @click="gologin"
          class="bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-500 hover:scale-105 transition cursor-pointer">
          Login
        </BaseButton>
      </template>
    </div>
  </nav>

  <!-- ✅ ويدجت الترجمة (مخفي تماما) -->
  <div id="google_translate_element" style="display:none;"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "./BaseButton.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useImageStore } from "../data/imagepicker";
import Menubar from "./NavBarMenu.vue";

const router = useRouter();
const imageStore = useImageStore();
const user = ref(null);

const auth = getAuth();
onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

// More dropdown
const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);

// Language dropdown
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
  { code: "ja", label: "日本語", flag: "jp" }
];

const toggleLangMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value;
};
const handleClickOutsideLang = (event) => {
  if (langMenuRef.value && !langMenuRef.value.contains(event.target)) {
    isLangMenuOpen.value = false;
  }
};

// ✅ تفعيل الترجمة مباشرة
function translatePage(lang) {
  const select = document.querySelector(".goog-te-combo");
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
  }
  isLangMenuOpen.value = false;
}

// تحميل Google Translate مرة واحدة
onMounted(() => {
  document.addEventListener("click", handleClickOutsideLang);

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
  document.removeEventListener("click", handleClickOutsideLang);
});

// Routing
function goToProfile() {
  router.push("/profile");
}
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
  router.push("/user-review");
}
</script>

<style scoped>
nav {
  position:relative;
  z-index: 999999 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ✅ إخفاء كل حاجة خاصة بجوجل */
.goog-logo-link,
.goog-te-gadget,
.goog-te-banner-frame,
#goog-gt-tt,
.goog-tooltip,
.goog-te-balloon-frame {
  display: none !important;
  visibility: hidden !important;
}

body {
  top: 0px !important;
}
</style>
