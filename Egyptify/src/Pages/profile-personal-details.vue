<template>
  <NavBarBlack />
  <div class="min-h-screen bg-[#fdfcf9] py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-xl border border-gray-300">
      <div class="flex items-center mb-8">
        <img
          src="../../public/about-us/girl-3.png"
          alt="Profile Avatar"
          class="w-20 h-20 rounded-full mr-4 object-fit"
        />
        <div>
          <h1 class="text-2xl font-bold text-gray-800">{{ userStore.name }}</h1>
          <p class="text-gray-600">Joined in 2025</p>
        </div>
      </div>

      <div class="border-b border-gray-300 mb-8">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a
            v-for="tab in tabs"
            :key="tab.id"
            href="#"
            :class="[
              activeTab === tab.id
                ? 'border-yellow-500 text-yellow-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm',
            ]"
            @click.prevent="activeTab = tab.id"
          >
            {{ tab.name }}
          </a>
        </nav>
      </div>

      <div v-if="activeTab === 'personal'">
        <form @submit.prevent="saveChanges">
          <div class="mb-4">
            <label
              for="username"
              class="mb-1"
              style="font-weight: 500; font-size: medium"
            >User Name*</label
            >
            <InputField
              id="username"
              type="text"
              placeholder="Yasmine Emad"
              v-model= "userStore.name "
              required
            >
              <template #icon>
                <i class="fas fa-user" />
              </template>
            </InputField>
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="mb-1"
              style="font-weight: 500; font-size: medium"
            >E-mail*</label
            >
            <InputField
              id="email"
              type="email"
              placeholder="Email"
              v-model= "userStore.email"
              required
            >
              <template #icon>
                <i class="fas fa-envelope" />
              </template>
            </InputField>
          </div>
          <div class="mb-4">
            <label
              for="currentPassword"
              class="mb-1"
              style="font-weight: 500; font-size: medium"
            >Current Password</label
            >
            <InputField
              id="currentPassword"
              :type="currentPasswordVisible ? 'text' : 'password'"
              placeholder="Enter current password if changing"
              v-model="userStore.password"
            >
              <template #icon>
                <i class="fas fa-lock" />
              </template>
              <template #suffix-icon>
                <i
                  class="absolute right-4 top-3 text-gray-400 cursor-pointer"
                  :class="currentPasswordVisible ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  @click="togglePasswordVisibility('current')"
                />
              </template>
            </InputField>
            <p class="text-sm text-gray-500 mt-1">
              Required only if you are changing your password.
            </p>
          </div>
          <div class="mb-4">
            <label
              for="newPassword"
              class="mb-1"
              style="font-weight: 500; font-size: medium"
            >New Password</label
            >
            <InputField
              id="newPassword"
              :type="newPasswordVisible ? 'text' : 'password'"
              placeholder="Enter new password"
              v-model="passwordFields.newPassword"
            >
              <template #icon>
                <i class="fas fa-lock" />
              </template>
              <template #suffix-icon>
                <i
                  class="absolute right-4 top-3 text-gray-400 cursor-pointer"
                  :class="newPasswordVisible ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  @click="togglePasswordVisibility('new')"
                />
              </template>
            </InputField>
            <p class="text-sm text-gray-500 mt-1">
              Leave blank to keep current password.
            </p>
          </div>
          <div class="mb-4">
            <label
              for="confirmPassword"
              class="mb-1"
              style="font-weight: 500; font-size: medium"
            >Confirm New Password</label
            >
            <InputField
              id="confirmPassword"
              :type="confirmPasswordVisible ? 'text' : 'password'"
              placeholder="Confirm new password"
              v-model="passwordFields.confirmPassword"
            >
              <template #icon>
                <i class="fas fa-lock" />
              </template>
              <template #suffix-icon>
                <i
                  class="absolute right-4 top-3 text-gray-400 cursor-pointer"
                  :class="confirmPasswordVisible ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  @click="togglePasswordVisibility('confirm')"
                />
              </template>
            </InputField>
          </div>
          <div class="mb-4">
            <label
              for="phone"
              class="mb-1"
              style="font-weight: 500; font-size: medium"
            >Phone*</label
            >
            <InputField
              id="phone"
              type="tel"
              placeholder="01289373141"
              v-model="personalDetails.phone"
              required
            >
              <template #icon>
                <i class="fas fa-phone" />
              </template>
            </InputField>
          </div>
          <div class="mt-8 flex justify-end">
            <BaseButton type="submit" :disabled="isSaving">
              <span v-if="!isSaving">Save Changes</span>
              <span v-else>Saving...</span>
            </BaseButton>
          </div>
          <p
            v-if="saveMessage"
            :class="{ 'text-green-600': saveSuccess, 'text-red-600': !saveSuccess }"
            class="mt-4 text-sm text-center"
          >
            {{ saveMessage }}
          </p>
        </form>
      </div>

      <div v-else-if="activeTab === 'saved'">
        <h2 class="text-xl font-bold text-yellow-500 mb-6">Saved Trips/Bookings</h2>
        <h3 class="text-lg font-semibold text-gray-800">Upcoming trips</h3>
        <div class="space-y-6 mt-4">
          <div
            v-for="trip in upcomingTrips"
            :key="trip.id"
            class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            <div class="flex-grow">
              <p class="text-sm text-gray-500 mb-1">Booking ID: {{ trip.bookingId }}</p>
              <h4 class="text-lg font-semibold text-gray-800 mb-1">{{ trip.title }}</h4>
              <p class="text-gray-600 text-sm">{{ trip.date }}</p>
              <button
                class="mt-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm"
              >
                View Details
              </button>
            </div>
            <div class="ml-4 flex-shrink-0">
              <img
                :src="trip.imageUrl"
                :alt="trip.title"
                class="w-24 h-24 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mt-8">Past trips</h3>
        <div class="space-y-6 mt-4">
          <div
            v-for="trip in pastTrips"
            :key="trip.id"
            class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            <div class="flex-grow">
              <p class="text-sm text-gray-500 mb-1">Booking ID: {{ trip.bookingId }}</p>
              <h4 class="text-lg font-semibold text-gray-800 mb-1">{{ trip.title }}</h4>
              <p class="text-gray-600 text-sm">{{ trip.date }}</p>
              <button
                class="mt-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm"
              >
                View Details
              </button>
            </div>
            <div class="ml-4 flex-shrink-0">
              <img
                :src="trip.imageUrl"
                :alt="trip.title"
                class="w-24 h-24 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'reviews'">
        <UserReview :location-name="locationName" :user-name="personalDetails.username" />
        <h2 class="text-xl font-bold text-yellow-500 mb-6 mt-8">Reviews Left</h2>
        <div class="space-y-6">
          <div
            v-for="review in reviews"
            :key="review.id"
            class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            <div class="flex-grow">
              <p class="text-gray-700 font-semibold mb-1">{{ review.location }}</p>
              <p class="text-sm text-gray-500 mb-1">{{ new Date(review.date.toDate()).toLocaleDateString() }}</p>
              
              <div class="flex items-center mb-2">
                <i
                  v-for="n in 5"
                  :key="n"
                  :class="{ 
                    'fas fa-star text-yellow-400': n <= review.rating, 
                    'far fa-star text-gray-400': n > review.rating 
                  }"
                ></i>
              </div>
              
              <p class="text-gray-700 text-sm">{{ review.text }}</p>
            </div>
            <div class="ml-4 flex-shrink-0">
              <img
                :src="review.imageUrl"
                :alt="review.location"
                class="w-24 h-24 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="activeTab === 'favorite'">
        <h2 class="text-xl font-bold text-yellow-500 mb-6">My Favorite Places</h2>
        <favorite />
      </div>

      <div v-else-if="activeTab === 'settings'">
        <div class="mb-8">
          <h3 class="text-xl font-bold text-yellow-500 mb-4">Display</h3>
          <div class="flex items-center justify-between mb-4">
            <label
              for="language-select"
              class="text-gray-700"
              style="color: #364153; font-size: medium; font-weight: normal"
            >Language</label
            >
            <select
              id="language-select"
              v-model="settings.language"
              class="border rounded-md px-3 py-2 text-gray-800"
            >
              <option value="english">English</option>
              <option value="arabic">العربية</option>
            </select>
          </div>
          <div class="flex items-center justify-between">
            <label
              for="currency-select"
              class="text-gray-700"
              style="color: #364153; font-size: medium; font-weight: normal"
            >Currency</label
            >
            <select
              id="currency-select"
              v-model="settings.currency"
              class="border rounded-md px-3 py-2 text-gray-800"
            >
              <option value="egp">EGP</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-xl font-bold text-yellow-500 mb-4">Notifications</h3>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-700 font-medium">Booking notifications</p>
              <p class="text-sm text-gray-500">
                Receive email notifications for booking confirmations and updates.
              </p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" v-model="settings.bookingNotifications" />
              <span class="slider"></span>
            </label>
          </div>
          <div class="flex items-center justify-between mt-4">
            <div>
              <p class="text-gray-700 font-medium">Promotional Offers</p>
              <p class="text-sm text-gray-500">
                Stay informed about new trips, special offers, and promotions.
              </p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" v-model="settings.promotionalOffers" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
  <div>
    <h3 class="text-xl font-bold text-yellow-500 mb-4">Account</h3>

    <!-- Change Password -->
    <a
      href="profile-change-password"
      @click.prevent="activeTab = 'personal'"
      class="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors duration-150"
    >
      <span class="text-gray-700 font-medium">Change Password</span>
      <i class="fas fa-arrow-right text-gray-400"></i>
    </a>

    <!-- Update Contact Information -->
    <a
      href="#"
      class="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors duration-150"
    >
      <span class="text-gray-700 font-medium">Update Contact Information</span>
      <i class="fas fa-arrow-right text-gray-400"></i>
    </a>

    <!-- Delete Account -->
    <a
      href="#"
      @click.prevent="showDeleteModal = true"
      class="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors duration-150 text-red-600"
    >
      <span class="font-medium">Delete Account</span>
      <i class="fas fa-arrow-right text-gray-400"></i>
    </a>

    <!-- Logout -->
    <div class="flex justify-end mt-6">
      <BaseButton @click="logout" class="bg-red-500 hover:bg-red-600">
        Logout
      </BaseButton>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="showDeleteModal"
      class="fixed inset-0 bg-black model flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 class="text-lg font-bold mb-4">Confirm Delete</h2>
        <p class="text-gray-600 mb-6">
          Are you sure you want to delete your account? This action cannot be undone.
        </p>
        <div class="flex justify-end space-x-3">
          <button
            @click="showDeleteModal = false"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            @click="confirmDelete"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>

    <!-- Success Message -->
    <div
      v-if="showSuccessMessage"
      class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg"
    >
      Account deleted successfully.
    </div>
  </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from "vue";
import NavBarBlack from "../components/NavBar-Black.vue";
import Footer from "../components/footer.vue";
import BaseButton from "../components/BaseButton.vue";
import InputField from "../components/InputField.vue";
import favorite from "./favorite.vue";

// Firebase imports
import { getAuth, signOut, deleteUser, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";
import { db } from '../firebase';
import { useRouter } from "vue-router";
import { doc, getDoc, setDoc, collection, getDocs, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore'; 

const activeTab = ref("personal");

const tabs = [
  { id: 'personal', name: 'Personal Details' },
  { id: 'saved', name: 'Saved trips/Bookings' },
  { id: 'reviews', name: 'Reviews Left' },
  { id: 'favorite', name: 'Favorite Places' },
  { id: 'settings', name: 'Settings' },
];

const personalDetails = ref({
  username: "",
  email: "",
  phone: "",
});

const passwordFields = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

// State for password visibility
const currentPasswordVisible = ref(false);
const newPasswordVisible = ref(false);
const confirmPasswordVisible = ref(false);

const settings = reactive({
  language: "english",
  currency: "egp",
  bookingNotifications: true,
  promotionalOffers: false,
});

const isSaving = ref(false);
const saveMessage = ref('');
const saveSuccess = ref(false);

const router = useRouter();
const auth = getAuth();

const currentFirebaseUser = auth.currentUser;
let userDocRef = null;

if (currentFirebaseUser) {
  userDocRef = doc(db, "users", currentFirebaseUser.uid);
} else {
  console.warn("No authenticated user found. Using dummy ID 'devUser1' for Firestore operations.");
  userDocRef = doc(db, "users", "devUser1");
}

async function fetchPersonalDetails() {
  if (!userDocRef) {
    saveMessage.value = "Error: User not identified for data loading.";
    saveSuccess.value = false;
    return;
  }
  try {
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      personalDetails.value.username = data.username || '';
      personalDetails.value.email = data.email || '';
      personalDetails.value.phone = data.phone || '';
    } else {
      console.log("No personal details found. Starting with default values.");
      personalDetails.value = {
        username: "Yasmine Emad",
        email: "yasmineemad2023@gmail.com",
        phone: "01289373141",
      };
    }
  } catch (error) {
    console.error("Error fetching personal details:", error);
    saveMessage.value = "Error loading details. Please check console.";
    saveSuccess.value = false;
  }
}

const upcomingTrips = [
  { id: 1, title: 'Cairo Adventure', date: 'Oct 20 - Oct 25, 2024', bookingId: '123456', imageUrl: '../../public/profile/Pyramids2.jpeg' },
  { id: 2, title: 'Nile Cruise', date: 'Nov 5 - Nov 12, 2024', bookingId: '789012', imageUrl: '../../public/profile/Nile-River.jpg' },
];

const pastTrips = [
  { id: 3, title: 'Alexandria Getaway', date: 'May 15 - May 18, 2024', bookingId: '345678', imageUrl: '../../public/profile/Alex.jpg' },
  { id: 4, title: 'Luxor Exploration', date: 'Feb 2 - Feb 2, 2024', bookingId: '901234', imageUrl: '../../public/profile/luxor-vally of the kings.jpg' },
];

// New reactive object for the review form
const newReview = reactive({
  text: '',
  rating: 0,
  imageUrl: '../../public/profile/unnamed.png',
  location: 'User\'s Review',
});

// New ref for storing fetched reviews
const reviews = ref([]); 

// New async function to fetch user reviews
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

// New async function to handle review submission
const submitReview = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.error("No authenticated user, cannot submit review.");
    return;
  }
  
  if (!newReview.text || newReview.rating === 0) {
      alert("Please provide a review and a rating.");
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
    // Reset the form
    newReview.text = '';
    newReview.rating = 0;
    
    // Refresh the list of reviews to show the new one
    await fetchUserReviews();
    
  } catch (error) {
    console.error("Error submitting review: ", error);
  }
};

// New function to handle star rating clicks
const setRating = (rating) => {
    newReview.rating = rating;
};

const favoritePlaces = ref([]);

function syncFavorites() {
  favoritePlaces.value = JSON.parse(localStorage.getItem("favorites")) || [];
}

const togglePasswordVisibility = (field) => {
  if (field === 'current') {
    currentPasswordVisible.value = !currentPasswordVisible.value;
  } else if (field === 'new') {
    newPasswordVisible.value = !newPasswordVisible.value;
  } else if (field === 'confirm') {
    confirmPasswordVisible.value = !confirmPasswordVisible.value;
  }
};

const saveChanges = async () => {
  isSaving.value = true;
  saveMessage.value = '';

  if (!userDocRef) {
    saveMessage.value = "Error: Cannot save changes. User not identified.";
    saveSuccess.value = false;
    isSaving.value = false;
    return;
  }

  try {
    const dataToSave = {
      username: personalDetails.value.username,
      email: personalDetails.value.email,
      phone: personalDetails.value.phone,
    };
    await setDoc(userDocRef, dataToSave, { merge: true });

    const currentPass = passwordFields.currentPassword;
    const newPass = passwordFields.newPassword;
    const confirmPass = passwordFields.confirmPassword;

    if (newPass) {
      if (!currentPass) {
        saveMessage.value = "Please enter your current password to change it.";
        saveSuccess.value = false;
        isSaving.value = false;
        return;
      }
      if (newPass !== confirmPass) {
        saveMessage.value = "New password and confirm password do not match.";
        saveSuccess.value = false;
        isSaving.value = false;
        return;
      }
      if (newPass.length < 6) {
        saveMessage.value = "New password must be at least 6 characters long.";
        saveSuccess.value = false;
        isSaving.value = false;
        return;
      }

      const user = auth.currentUser;
      if (user && user.email) {
        const credential = EmailAuthProvider.credential(user.email, currentPass);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPass);
        passwordFields.currentPassword = '';
        passwordFields.newPassword = '';
        passwordFields.confirmPassword = '';
        saveMessage.value = "Profile and password updated successfully!";
        saveSuccess.value = true;
      } else {
        saveMessage.value = "Error: Could not re-authenticate. User email not available.";
        saveSuccess.value = false;
      }
    } else {
      saveMessage.value = "Profile updated successfully!";
      saveSuccess.value = true;
    }
  } catch (error) {
    console.error("Error saving changes:", error);
    if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
      saveMessage.value = "Incorrect current password.";
    } else if (error.code === 'auth/requires-recent-login') {
      saveMessage.value = "Please log in again to update your password.";
      router.push("/login");
    } else {
      saveMessage.value = `Failed to save changes: ${error.message}`;
    }
    saveSuccess.value = false;
  } finally {
    isSaving.value = false;
    setTimeout(() => {
      saveMessage.value = '';
    }, 5000);
  }
};

function logout() {
  signOut(auth)
    .then(() => {
      router.push("/login");
    })
    .catch((error) => {
      console.error("Logout error:", error);
    });
}

const showDeleteModal = ref(false);
const showSuccessMessage = ref(false);
//////////////////////////////////////////////////
import { useUserStore } from '../data/signupstore'
const userStore = useUserStore()
///////////////////////////////////////////////////////////
function confirmDelete() {
  showDeleteModal.value = false;
  showSuccessMessage.value = true;

  setTimeout(() => {
    showSuccessMessage.value = false;
    console.log("Account deleted from backend");
  }, 2000);
      router.push("/login")

}
async function deleteAccount() {
  const user = auth.currentUser;

  if (user) {
    if (!confirm("Are you sure you want to delete your account? This action is irreversible.")) {
      return;
    }
    const currentPassword = prompt("Please enter your password to confirm account deletion:");
    if (!currentPassword) {
      alert("Password is required to delete your account.");
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await deleteUser(user);
      alert("Account deleted successfully.");
      router.push("/signup");
    } catch (error) {
      console.error("Error deleting user:", error);
      if (error.code === 'auth/requires-recent-login') {
        alert("Please log in again to delete your account.");
        router.push("/login");
      } else if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        alert("Incorrect password. Account deletion failed.");
      } else {
        alert(`Error deleting account: ${error.message}`);
      }
    }
  } else {
    alert("No user is currently logged in.");
    router.push("/login");
  }
}

onMounted(() => {
  window.addEventListener("storage", syncFavorites);
  syncFavorites();
});

onBeforeUnmount(() => {
  window.removeEventListener("storage", syncFavorites);
});

onMounted(async () => {
  await fetchPersonalDetails();
  await fetchUserReviews();
});
</script>

<style scoped>
.model{
  background-color: #cccccc8c;
}
a{
  cursor: pointer;
}
.fas.fa-star {
  font-size: 0.9em;
  margin-right: 2px;
}

/* Hide the default checkbox for the toggle switches */
.sr-only:checked + div::after {
  content: '';
  transform: translateX(100%);
}
/* Base styles for the toggle switch container */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 44px; /* w-11 */
  height: 24px; /* h-6 */
}

/* Hide the default HTML checkbox */
.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider/track of the switch */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc; /* Default grey color */
  transition: .4s;
  border-radius: 34px;
}

/* The white circle/handle */
.slider:before {
  position: absolute;
  content: "";
  height: 20px; /* h-5 */
  width: 20px; /* w-5 */
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

/* Change background color when checked */
input:checked + .slider {
  background-color: #FBBF24; /* Tailwind yellow-400 */
}

/* Move the circle to the right when checked */
input:checked + .slider:before {
  transform: translateX(20px);
}
</style>