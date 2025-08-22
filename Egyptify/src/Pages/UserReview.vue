<template>
  <Navbar />
  <main class="flex-grow pt-2">
    <div class="pt-20 container mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 md:col-span-4">
          <h1 class="text-3xl font-bold text-gray-800 mb-6 leading-tight">
            Tell us,<br/> how was your stay?
          </h1>
          <div class="bg-white rounded-lg border border-gray-300 shadow-xl p-6 mb-6">
            <img src="/hotel/main.jpg" alt="Hotel Image" class="w-full h-48 object-cover rounded-md mb-3" />
            <h2 class="text-xl font-semibold text-black">Iberotel Luxor</h2>
            <p class="text-sm text-gray-700">
              Khaled Ibn El Waleed Street, East Bank, 99999 Luxor, Egypt.
            </p>
          </div>
        </div>

        <div class="col-span-12 md:col-span-8 space-y-6">
          
          <div class=" p-6 bg-white rounded-lg border border-gray-300 shadow-lg">
            <h3 class="text-2xl font-bold text-yellow-500 mb-4">When did you go?</h3>
            <div class="relative w-48">
              <select class="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black text-sm">
                <option disabled selected>Select one</option>
                <option>Last month</option>
                <option>2-6 months ago</option>
                <option>7-12 months ago</option>
                <option>Over a year ago</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
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
            <UserReview/>
          </div>
        </div>
      </div>
          
    </div>

    <Footer />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import Navbar from '../components/navbar-Black.vue';
import Footer from '../components/footer.vue';
// import BaseButton from '../components/BaseButton.vue';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'vue-router';
import UserReview from '../components/userReview.vue';

const rating = ref(0);
const hoverRating = ref(0);
const reviewText = ref('');
const reviewTitle = ref('');
const selectedCompanion = ref('');
const certified = ref(false); // New state for the certification checkbox
const companionOptions = ['Business', 'Family', 'Couples', 'Friends', 'Solo'];
const showTips = ref(false);

const getRatingText = (value) => {
  const texts = {
    1: 'Terrible',
    2: 'Poor',
    3: 'Average',
    4: 'Good',
    5: 'Excellent',
  };
  return texts[value] || '';
};

const isFormValid = computed(() => {
  return (
    rating.value > 0 &&
    reviewText.value.length <= 100 &&
    reviewTitle.value.length > 0 &&
    reviewTitle.value.length <= 20 &&
    certified.value // Ensure the certification checkbox is checked
  );
});

const router = useRouter();
const auth = getAuth();

const submitReview = async () => {
  const currentFirebaseUser = auth.currentUser;

  if (!isFormValid.value) {
    alert('Please fill out all required fields and certify the review.');
    return;
  }

  if (!currentFirebaseUser) {
    alert('You must be logged in to submit a review.');
    router.push('/login');
    return;
  }

  try {
    const newReview = {
      userId: currentFirebaseUser.uid,
      userName: currentFirebaseUser.displayName || 'Yasmine Emad',
      userAvatar: currentFirebaseUser.photoURL || '/profile/unnamed.png',
      location: 'Iberotel Luxor',
      rating: rating.value,
      title: reviewTitle.value,
      text: reviewText.value,
      companion: selectedCompanion.value,
      date: serverTimestamp(), // Use serverTimestamp for accuracy
      imageUrl: '/hotel/main.jpg',
    };

    await addDoc(collection(db, `users/${currentFirebaseUser.uid}/reviews`), newReview);
    alert('Review submitted successfully!');
    router.push('/profile');
  } catch (error) {
    console.error('Error submitting review:', error);
    alert('Failed to submit review. Please try again.');
  }
};
</script>

<style scoped>
/* Scoped styles from your original code, adjusted for clarity */
.bg-yellow-500 {
  background-color: #FBBF24;
}

.hover\:bg-yellow-600:hover {
  background-color: #F59E0B;
}

.text-yellow-500 {
  color: #FBBF24;
}

.focus\:ring-yellow-400:focus {
  --tw-ring-color: #FCD34D;
}
</style>