<!-- <template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold text-yellow-500 mb-6">Rate Our Website</h1>


    <UserReview userName="Website Review" />
  </div>
</template>

<script setup>
import UserReview from "../components/UserReview.vue";
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style> -->



<template>
  <NavBarBlack/>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 mt-12 px-6">
    <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <!-- Title -->
      <h1 class="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        Share Your Experience With Our Services      
      </h1>
      <p class="text-center text-gray-600 dark:text-gray-300 mb-8">
        Your feedback helps us improve and guide others to make the best choice 🌟
      </p>

      <!-- Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-6">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="px-4 py-2 rounded-lg font-semibold cursor-pointer"
          :class="activeTab === tab 
            ? 'bg-yellow-400 text-white' 
            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'"
            :style="(index >= 3 && window.innerWidth < 640) ? 'flex-basis: 100%; text-align: center;' : ''"

        >
          {{ tab }}
        </button>
      </div>

      <!-- Search Dropdown -->
      <div class="mb-6 relative">
        <label class="block text-gray-700 dark:text-gray-200 mb-2">
          Select {{ activeTab }}
        </label>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search..."
          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          @focus="showDropdown = true"
          @blur="hideDropdown"
        />
        <ul
          v-if="showDropdown && filteredOptions.length"
          class="border mt-2 rounded-lg bg-white dark:bg-gray-700 max-h-40 overflow-y-auto absolute w-full z-10"
        >
          <li
            v-for="(item, index) in filteredOptions"
            :key="index"
            @mousedown.prevent="selectItem(item)" 
            class="px-4 py-2 cursor-pointer hover:bg-yellow-100 dark:hover:bg-yellow-500"
          >
            {{ item.name || item.title || item.provider }}
          </li>
        </ul>
      </div>

      <!-- Review Form -->
      <form @submit.prevent="submitReview" class="space-y-6">
        <!-- Name -->
        <div>
          <label class="block text-gray-700 dark:text-gray-200 mb-2">Your Name</label>
          <input
            v-model="review.name"
            type="text"
            placeholder="Enter your name"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        <!-- Rating -->
        <div>
          <label class="block text-gray-700 dark:text-gray-200 mb-2">Rating</label>
          <div class="flex items-center gap-2">
            <span
              v-for="star in 5"
              :key="star"
              @click="review.rating = star"
              class="cursor-pointer text-3xl"
              :class="star <= review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'"
            >
              ★
            </span>
          </div>
        </div>

        <!-- Comment -->
        <div>
          <label class="block text-gray-700 dark:text-gray-200 mb-2">Your Review</label>
          <textarea
            v-model="review.comment"
            placeholder="Write your feedback..."
            rows="4"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          ></textarea>
        </div>

        <!-- Button -->
        <div class="text-center">
          <button
            type="submit"
            class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg transition"
          >
            Submit Review
          </button>
        </div>
      </form>

      <!-- Success Message -->
      <p v-if="submitted" class="mt-6 text-center text-green-600 dark:text-green-400 font-semibold">
        Thank you for your feedback! 🌟
      </p>
    </div>
  </div>
  <foot/>
</template>

<script setup>
import { ref, computed } from "vue";
import NavBarBlack from "../components/NavBar-Black.vue";
import foot  from "../components/footer.vue"
// Tabs
const tabs = ["Destinations", "Hotels", "Restaurants", "Transportation", "Events"];
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
  selected: ""
});
const submitted = ref(false);
const allRestaurants = ref(generateEgyptGovernorates(50))

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
      data =  allRestaurants.value || [];
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
    (item?.name || item?.title || item?.provider || "").toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

// Select item from dropdown
function selectItem(item) {
  review.value.selected = item.name || item.title || item.provider || "";
  searchQuery.value = review.value.selected;
}

// Submit review
function submitReview() {
  if (!review.value.name || !review.value.rating || !review.value.comment || !review.value.selected) {
    alert("Please fill in all fields ✍️");
    return;
  }
  console.log("Review submitted:", review.value);
  submitted.value = true;

  // Reset
  review.value = { name: "", rating: 0, comment: "", selected: "" };
  searchQuery.value = "";
}
</script>
