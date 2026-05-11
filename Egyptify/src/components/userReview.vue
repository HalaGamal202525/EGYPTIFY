<template>
  <div class="p-6 mb-6 bg-white rounded-lg border border-gray-300 shadow-xl">
    <h2 class="text-2xl font-bold text-yellow-500 mb-4">Write a Review</h2>
    <form @submit.prevent="submitReview" class="space-y-4">
      <!-- <div v-if="locationName" class="mb-4 p-3 bg-gray-50 rounded-md text-gray-500">
        <h3 class="text-lg font-semibold">{{ locationName }}</h3>
      </div> -->

      <div>
        <label for="reviewText" class="block text-md font-medium text-gray-700">Your Review</label>
        <textarea
          id="reviewText"
          v-model="newReview.text"
          placeholder=" Share details of your experience..."
          class="mt-3 block w-full rounded-md text-gray-700 border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
          rows="5"
          required
        ></textarea>
        <p class="mt-1 text-sm text-gray-500">{{ newReview.text.length }}/100 max characters</p>
      </div>

      <div>
        <label class="block text-md font-medium text-gray-700">Rating</label>
        <div class="flex items-center mt-3">
          <i
            v-for="n in 5"
            :key="n"
            class="text-2xl cursor-pointer"
            :class="{ 'fas fa-star text-yellow-400': n <= newReview.rating, 'far fa-star text-gray-400': n > newReview.rating }"
            @click="setRating(n)"
          ></i>
        </div>
      </div>

      <BaseButton
        type="submit"
        class="w-full py-2 px-4 border rounded-md  text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        Submit Review
      </BaseButton>
    </form>
    <p v-if="submissionMessage" class="mt-4 text-center" :class="{'text-green-600': submissionSuccess, 'text-red-600': !submissionSuccess}">
      {{ submissionMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps } from 'vue';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy } from 'firebase/firestore';
import BaseButton from './BaseButton.vue';

const submissionMessage = ref('');
const submissionSuccess = ref(false);

const props = defineProps({
  locationName: {
    type: String,
    default: 'A place you visited',
  },
  userName: {
    type: String,
    default: 'User\'s Review', // Provide a default in case it's not passed
  }
});

const newReview = reactive({
  text: '',
  rating: 0,
  imageUrl: '../../public/profile/unnamed.png',
  // Use the userName prop here
  location: props.userName,
});

const reviews = ref([]); 

const fetchUserReviews = async () => {
  const auth = getAuth();
  const currentFirebaseUser = auth.currentUser;

  if (!currentFirebaseUser) {
    console.error("User not authenticated, cannot fetch reviews.");
    reviews.value = [];
    return;
  }

  try {
    const reviewsCollectionRef = collection(db, `users/${currentFirebaseUser.uid}/reviews`);
    const q = query(reviewsCollectionRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);

    const fetchedReviews = [];
    querySnapshot.forEach((doc) => {
      fetchedReviews.push({ id: doc.id, ...doc.data() });
    });
    reviews.value = fetchedReviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

const submitReview = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    submissionMessage.value = "No authenticated user, cannot submit review.";
    submissionSuccess.value = false;
    return;
  }
  
  if (!newReview.text || newReview.rating === 0) {
    submissionMessage.value = "Please provide a review and a rating.";
    submissionSuccess.value = false;
    return;
  }
  
  try {
    const reviewsCollectionRef = collection(db, `users/${user.uid}/reviews`);
    await addDoc(reviewsCollectionRef, {
      ...newReview,
      date: serverTimestamp(),
      userId: user.uid,
    });

    console.log("Review submitted successfully!");
    submissionMessage.value = "Review submitted successfully!";
    submissionSuccess.value = true;
    newReview.text = '';
    newReview.rating = 0;
    
    await fetchUserReviews();
    
  } catch (error) {
    console.error("Error submitting review: ", error);
    submissionMessage.value = `Error submitting review: ${error.message}`;
    submissionSuccess.value = false;
  }
};

const setRating = (rating) => {
    newReview.rating = rating;
};

</script>

<style scoped>
/* You can add specific styles for this component here if needed */
</style>