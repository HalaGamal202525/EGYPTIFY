<template>
  <Navbar />
  <section class="bg-[#fffdf6] text-gray-800 pb-20">
    <!-- Hero Section -->
    <div
      class="relative w-full h-[500px] overflow-hidden rounded-b-3xl shadow-md"
    >
      <img
        :src="pkg.image"
        class="w-full h-full object-cover"
        alt="Main image"
      />
      <div
        class="absolute inset-0 bg-black/30 flex items-center justify-center"
      >
        <h1 class="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          {{ pkg.name }}
        </h1>
      </div>
    </div>

    <!-- Main Details -->
    <div class="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10">
      <!-- Left: Text -->
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold text-[#ffc340]">
          {{ pkg.location }}
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ pkg.fullDescription }}
        </p>

        <ul class="mt-6 space-y-2">
          <li>
            <span class="font-semibold text-[#ffc340]"> Duration:</span>
            {{ pkg.duration }}
          </li>
          <li>
            <span class="font-semibold text-[#ffc340]"> Price:</span>
            {{ pkg.price }}
          </li>
        </ul>
        <!-- Activities -->
        <div>
          <h3 class="text-xl font-semibold text-[#ffc340] mb-2">Activities</h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="(activity, index) in pkg.activities"
              :key="index"
              class="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm shadow-sm"
            >
              {{ activity }}
            </span>
          </div>
        </div>

        <!-- Includes -->
        <div class="mt-6">
          <h3 class="text-xl font-semibold text-[#ffc340] mb-2">Includes</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li
              v-for="(item, index) in pkg.includes"
              :key="index"
              class="flex items-start gap-2 bg-white p-3 rounded-xl shadow"
            >
              <span class="text-green-500 text-lg">✔</span>
              
              <p class="text-gray-700">{{ item }}</p>
            </li>
          </ul>
        </div>
        <!-- Back Button -->
        <button
          @click="goBack"
          class="inline-flex items-center gap-2 px-6 py-3 mr-9 text-[#ffb703] hover:text-white bg-white border border-[#ffb703] hover:bg-[#ffb703] transition duration-300 rounded-full shadow-sm"
        >
          <i class="fa-solid fa-arrow-left !text-[#ffc340] !hover:text-white"></i>
          <span>Back</span>
        </button>

        <!-- Book Button -->
        <button
          class="mt-8 bg-[#ffc340] text-white px-8 py-3 rounded-full shadow hover:bg-yellow-400 transition"
        >
          Book Now
        </button>
      </div>

      <!-- Right: Gallery -->
      <div class="grid grid-cols-2 gap-4">
        <img
          v-for="(img, index) in pkg.gallery"
          :key="index"
          :src="img"
          class="w-full h-48 object-cover rounded-xl shadow hover:scale-105 transition"
        />
      </div>
    </div>
    <!-- إغلاق الـ grid -->

    <!-- Itinerary Section -->
    <div
      v-if="pkg.itinerary && pkg.itinerary.length"
      class="mt-12 px-6 py-8 bg-gradient-to-b from-[#fffaf0] to-white rounded-3xl shadow-lg border border-yellow-200"
    >
      <h3
        class="text-3xl font-semibold text-[#ffb703] mb-6 flex items-center gap-3"
      >
        <i class="fa-solid fa-map-signs text-[#ffb703] text-xl"></i>
        Trip Itinerary
      </h3>

      <ol class="space-y-6 relative border-l-4 border-[#ffb703] pl-6">
        <li
          v-for="(item, index) in pkg.itinerary"
          :key="index"
          class="relative"
        >
          <span
            class="absolute -left-[1.2rem] top-2 w-4 h-4 bg-[#ffb703] rounded-full border-2 border-white shadow"
          ></span>

          <!-- لو العنصر String -->
          <template v-if="typeof item === 'string'">
            <div class="text-lg text-gray-800 font-medium leading-relaxed">
              {{ item }}
            </div>
          </template>

          <!-- لو العنصر Object -->
          <template v-else>
            <div class="mb-1 text-sm text-gray-500 font-semibold uppercase">
              {{ item.day }}
            </div>
            <div class="text-lg font-bold text-gray-800">{{ item.title }}</div>
            <p class="text-gray-700 leading-relaxed mt-1">
              {{ item.description }}
            </p>
          </template>
        </li>
      </ol>
    </div>

    <!-- Reviews Section (Optional) -->
    <div class="max-w-6xl mx-auto mt-20 px-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-6">What People Say</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="i in 3"
          :key="i"
          class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <p class="text-gray-600 italic">
            "Amazing experience, highly recommended!"
          </p>
          <div class="mt-4 flex items-center gap-2">
            <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
            <span class="font-medium text-gray-700">Traveler {{ i }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Foot />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

import rawData from "../data/packages_data.json";
import Navbar from "../components/navbar.vue";
import Foot from "../components/footer.vue";
const categories = Object.values(rawData.packageCategories);

onMounted(() => {
  console.log("Categories:", categories);
  setCategoryFromQuery();
});

import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  router.back();
};

const route = useRoute();
const categorySlug = route.params.category;
const packageSlug = route.params.slug;

const pkg = computed(() => {
  const category = rawData.packageCategories[categorySlug];
  if (category) {
    return category.packages[packageSlug] || null;
  }
  return null;
});
</script>
