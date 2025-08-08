<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-yellow-500 mb-4">Write a Review</h2>
    <form @submit.prevent="submitReview" class="space-y-4">
      <div v-if="locationName" class="mb-4 p-3 bg-gray-50 rounded-md">
        <h3 class="text-lg font-semibold">{{ locationName }}</h3>
      </div>

      <div>
        <label for="reviewText" class="block text-sm font-medium text-gray-700">Your Review</label>
        <textarea
          id="reviewText"
          v-model="newReview.text"
          placeholder="Share details of your experience..."
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
          rows="5"
          required
        ></textarea>
        <p class="mt-2 text-sm text-gray-500">{{ newReview.text.length }}/100 min characters</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Rating</label>
        <div class="flex items-center mt-1">
          <i
            v-for="n in 5"
            :key="n"
            class="fas fa-star text-2xl cursor-pointer"
            :class="{ 'text-yellow-400': n <= newReview.rating, 'text-gray-300': n > newReview.rating }"
            @click="setRating(n)"
          ></i>
        </div>
      </div>

      <button
        type="submit"
        class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        Submit Review
      </button>
    </form>
    <p v-if="submissionMessage" class="mt-4 text-center" :class="{'text-green-600': submissionSuccess, 'text-red-600': !submissionSuccess}">
      {{ submissionMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase'; // Assuming your firebase config is in src/firebase.js
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const newReview = reactive({
  text: '',
  rating: 0,
});

const submissionMessage = ref('');
const submissionSuccess = ref(false);

const auth = getAuth();

// You can pass locationName as a prop to make this component reusable
const props = defineProps({
  locationName: {
    type: String,
    default: 'A place you visited',
  }
});

const setRating = (rating) => {
  newReview.rating = rating;
};

const submitReview = async () => {
  const user = auth.currentUser;

  if (!user) {
    submissionMessage.value = 'You must be logged in to submit a review.';
    submissionSuccess.value = false;
    return;
  }

  if (newReview.text.length < 100) {
    submissionMessage.value = 'Review must be at least 100 characters.';
    submissionSuccess.value = false;
    return;
  }

  if (newReview.rating === 0) {
    submissionMessage.value = 'Please provide a rating.';
    submissionSuccess.value = false;
    return;
  }

  try {
    const reviewsCollectionRef = collection(db, `users/${user.uid}/reviews`);
    await addDoc(reviewsCollectionRef, {
      ...newReview,
      location: props.locationName,
      date: serverTimestamp(),
      userId: user.uid,
    });
    
    submissionMessage.value = 'Review submitted successfully!';
    submissionSuccess.value = true;
    newReview.text = '';
    newReview.rating = 0;

  } catch (error) {
    console.error("Error submitting review:", error);
    submissionMessage.value = `Failed to submit review: ${error.message}`;
    submissionSuccess.value = false;
  }
};
</script>

<style scoped>
/* You can add specific styles for this component here if needed */
</style>