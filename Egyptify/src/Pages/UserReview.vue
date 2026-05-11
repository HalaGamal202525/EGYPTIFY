

<template>
  <Navbar />
  <main class="flex-grow pt-2">
    <div class="pt-20 container mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-12 gap-8" v-if="hotel">
        
        <div class="col-span-12 md:col-span-4">
          <h1 class="text-3xl font-bold text-gray-800 mb-6 leading-tight">
            Tell us,<br /> how was your stay?
          </h1>

          <div class="bg-white rounded-lg border border-gray-300 shadow-xl p-6 mb-6">
            <img
              :src="hotel.details.images.main"
              alt="Hotel Image"
              class="w-full h-48 object-cover rounded-md mb-3"
            />
            <h2 class="text-xl font-semibold text-black">{{ hotel.details.name }}</h2>
            <p class="text-sm text-gray-700">{{ hotel.details.location }}</p>
          </div>
        </div>

        <div class="col-span-12 md:col-span-8 space-y-6">
          <div class="p-6 bg-white rounded-lg border border-gray-300 shadow-lg">
            <h3 class="text-2xl font-bold text-yellow-500 mb-4">When did you go?</h3>
            <div class="relative w-48">
              <select
                class="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black text-sm"
              >
                <option disabled selected>Select one</option>
                <option>Last month</option>
                <option>2-6 months ago</option>
                <option>7-12 months ago</option>
                <option>Over a year ago</option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="p-6 mb-6 bg-white rounded-lg border border-gray-300 shadow-lg">
            <h3 class="text-2xl font-bold text-yellow-500 mb-4">Who did you go with?</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                v-for="option in companionOptions"
                :key="option"
                @click="selectedCompanion = option"
                class="py-2 px-3 rounded-md text-sm font-medium border border-gray-300"
                :class="{
                  'bg-yellow-500 border-yellow-500 text-white': selectedCompanion === option,
                  'bg-white text-black': selectedCompanion !== option,
                }"
              >
                {{ option }}
              </button>
            </div>
          </div>

          <div>
            <UserReview />
          </div>
        </div>
      </div>

      <div v-else class="text-center text-red-500 font-semibold">
        Hotel not found
      </div>
    </div>

    <Footer />
  </main>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Navbar from "../components/navbar-Black.vue";
import Footer from "../components/footer.vue";
import UserReview from "../components/userReview.vue";
import hoteldetails from "../data/hotels.json";

const route = useRoute();
const hotel = ref(null);

watchEffect(() => {
  const slug = route.params.slug;
  hotel.value = hoteldetails.find((h) => h.details.slug === slug) || null;
});

const selectedCompanion = ref("");
const companionOptions = ["Business", "Family", "Couples", "Friends", "Solo"];
</script>
