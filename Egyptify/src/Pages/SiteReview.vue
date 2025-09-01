<template>
  <NavBarBlack />
  <div
    class="min-h-screen  bg-[#FFFDF9] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-6 "
  >
    <div
      class="max-w-3xl mx-auto mt-8 bg-white rounded-lg border  border-gray-300 shadow-2xl p-10  transition"
    >
      <!-- Title -->
      <h1
        class="text-3xl font-bold text-yellow-500 text-center mb-6"
      >
        Share Your Experience With Our 
        <br> Services
      </h1>
      <p class="text-center text-gray-500 dark:text-gray-300 mb-10 text-md">
        Your feedback helps us improve and guide others to make the best choice
        🌟
      </p>

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-4 mt-16">
        <div class="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            v-for="(tab, index) in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="px-5 py-2 rounded-lg font-semibold cursor-pointer transition transform hover:scale-105  bg-gray-100 border border-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300 sm:flex-1 sm:text-center"
            :class="activeTab === tab ? 'bg-yellow-400 text-white' : ''"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Search Dropdown -->
      <div class="mb-8 relative">
        <label class="block text-gray-700 dark:text-gray-200 mb-2 font-medium">
          Select {{ activeTab }}
        </label>

        <div class="relative">
          <!-- Input مع أيقونة بحث -->
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search..."
            class="w-full pl-10 pr-4 py-3 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition"
            @focus="showDropdown = true"
            @blur="hideDropdown"
          />
          <!-- Search Icon -->
          <span
            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <ul
          v-if="showDropdown && filteredOptions.length"
          class="border mt-2 rounded-lg bg-white dark:bg-gray-700 max-h-40 overflow-y-auto absolute w-full z-10 shadow-lg"
        >
          <li
            v-for="(item, index) in filteredOptions"
            :key="index"
            @mousedown.prevent="selectItem(item)"
            class="px-4 py-2 cursor-pointer hover:bg-yellow-100 dark:hover:bg-yellow-500 transition"
          >
            {{ item.name || item.title || item.provider }}
          </li>
        </ul>
      </div>

      <!-- Review Form -->
      <form @submit.prevent="submitReview" class="space-y-6">
        <!-- Name -->
        <div>
          <label class="block text-gray-700 dark:text-gray-200 mb-2 font-medium"
            >Your Name</label
          >
          <input
            v-model="review.name"
            type="text"
            placeholder="Enter your name"
            class="w-full px-4 py-3 border border-yellow-400  rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition"
          />
        </div>

        <!-- Rating -->
        <div>
          <label class="block text-gray-700 dark:text-gray-200 mb-2 font-medium"
            >Rating</label
          >
          <div class="flex items-center gap-2">
            <span
              v-for="star in 5"
              :key="star"
              @click="review.rating = star"
              class="cursor-pointer text-3xl transition transform hover:scale-125"
              :class="
                star <= review.rating
                  ? 'text-yellow-400'
                  : 'text-gray-300 dark:text-gray-500'
              "
            >
              ★
            </span>
          </div>
        </div>

        <!-- Comment -->
        <div>
          <label class="block text-gray-700 dark:text-gray-200 mb-2 font-medium"
            >Your Review</label
          >
          <textarea
            v-model="review.comment"
            placeholder="Write your feedback..."
            rows="4"
            class="w-full px-4 py-3 border border-yellow-400  rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition"
          ></textarea>
        </div>

        <!-- Button -->
        <div class="text-center">
          <BaseButton
            type="submit"
            class=" cursor-pointer m-auto"
          >
            Submit Review
          </BaseButton>
        </div>
      </form>

      <!-- Success Message -->
      <p
        v-if="submitted"
        class="mt-8 text-center text-green-600 dark:text-green-400 font-semibold text-lg"
      >
        Thank you for your feedback! 🌟
      </p>
    </div>
  </div>
  <foot />
</template>

<script setup>
import { ref, computed } from "vue";
import NavBarBlack from "../components/NavBar-Black.vue";
import { useReviewStore } from "../data/reviewstore";
import BaseButton from "../components/BaseButton.vue";
import foot from "../components/footer.vue";
// Tabs
const tabs = [
  "Destinations",
  "Hotels",
  "Restaurants",
  "Transportation",
  "Events",
];
const activeTab = ref("Destinations");

// JSON Data
import destinations from "../data/Destaintion.json";
import hotels from "../data/hotels.json";
import { generateEgyptGovernorates } from "../data/fakedata";
import transportation from "../data/bookingTransportation.json";
import events from "../data/bookingEvents.json";

// Search & Review
const searchQuery = ref("");
const review = ref({
  name: "",
  rating: 0,
  comment: "",
  selected: "",
});
const submitted = ref(false);
const allRestaurants = ref(generateEgyptGovernorates(50));

// Dropdown visibility
const showDropdown = ref(false);
function hideDropdown() {
  setTimeout(() => {
    showDropdown.value = false;
  }, 100);
}

// Options based on active tab
const getOptions = computed(() => {
  let data = [];
  switch (activeTab.value) {
    case "Hotels":
      data = hotels;
      break;
    case "Restaurants":
      data = allRestaurants.value || [];
      break;
    case "Transportation":
      data = transportation.transportation || [];
      break;
    case "Events":
      data = events.bookings || [];
      break;
    default:
      data = destinations;
  }
  return Array.isArray(data) ? data : [];
});

// Filtered search
const filteredOptions = computed(() =>
  getOptions.value.filter((item) =>
    (item?.name || item?.title || item?.provider || "")
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
  )
);

// Select item from dropdown
function selectItem(item) {
  review.value.selected = item.name || item.title || item.provider || "";
  searchQuery.value = review.value.selected;
  showDropdown.value = false;
}

// Submit review
const reviewStore = useReviewStore();

// باقي الكود زي ما هو (tabs, data, الخ...)

function submitReview() {
  if (
    !review.value.name ||
    !review.value.rating ||
    !review.value.comment ||
    !review.value.selected
  ) {
    alert("Please fill in all fields ✍️");
    return;
  }

  // ✨ فك الـ ref عشان نخزن object عادي
  const newReview = {
    name: review.value.name,
    rating: review.value.rating,
    comment: review.value.comment,
    selected: review.value.selected,
    date: new Date().toLocaleString(),
  };

  // حفظ في الـ Pinia Store
  reviewStore.addReview(newReview);

  submitted.value = true;

  // Reset
  review.value = { name: "", rating: 0, comment: "", selected: "" };
  searchQuery.value = "";
  console.log("Saved review:", newReview);
}
</script>
