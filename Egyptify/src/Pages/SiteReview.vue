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
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
    <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <!-- Title -->
      <h1 class="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        Share Your Feedback About Our Website
      </h1>
      <p class="text-center text-gray-600 dark:text-gray-300 mb-8">
        Your review helps us improve and provide a better experience 🌟
      </p>

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
</template>

<script setup>
import { ref } from "vue";

const review = ref({
  name: "",
  rating: 0,
  comment: "",
});

const submitted = ref(false);

function submitReview() {
  if (!review.value.name || !review.value.rating || !review.value.comment) {
    alert("Please fill in all fields ✍️");
    return;
  }
  // Here you can send the review to your database
  console.log("Review submitted:", review.value);

  submitted.value = true;

  // Reset the form
  review.value = { name: "", rating: 0, comment: "" };
}
</script>

<style scoped>
/* Add extra styling if you want */
</style>

