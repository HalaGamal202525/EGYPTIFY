<template>
  <NavBarBlack />
  <div class="min-h-screen bg-[#FFFDF9] py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-xl">
      <div class="flex items-center mb-8">
        <img
          src="../../public/profile/girl-4.png"
          alt="Profile Avatar"
          class="w-16 h-22 rounded-full mr-4 object-fit"
        />
        <div>
          <h1 class="text-2xl font-bold text-gray-800">Yasmine Emad</h1>
          <p class="text-gray-600">Joined in 2023</p>
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
            >User Name*</label>
            <InputField
              id="username"
              type="text"
              placeholder="Yasmine Emad"
              v-model="personalDetails.username"
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
            >E-mail*</label>
            <InputField
              id="email"
              type="email"
              placeholder="yasmineemad2023@gmail.com"
              v-model="personalDetails.email"
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
            >Current Password</label>
            <InputField
              id="currentPassword"
              :type="currentPasswordVisible ? 'text' : 'password'"
              placeholder="Enter current password if changing"
              v-model="passwordFields.currentPassword"
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
            >New Password</label>
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
            >Confirm New Password</label>
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
            >Phone*</label>
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
          <p v-if="saveMessage" :class="{'text-green-600': saveSuccess, 'text-red-600': !saveSuccess}" class="mt-4 text-sm text-center">
            {{ saveMessage }}
          </p>
        </form>
      </div>

      <div v-else-if="activeTab === 'saved'">
        <h2 class="text-xl font-bold text-yellow-500 mb-6">Saved Trips/Bookings</h2>
        <h3 class="text-lg font-semibold text-gray-800">Upcoming trips</h3>
        <div class="space-y-6 mt-4">
          <div v-for="trip in upcomingTrips" :key="trip.id" class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <div class="flex-grow">
              <p class="text-sm text-gray-500 mb-1">Booking ID: {{ trip.bookingId }}</p>
              <h4 class="text-lg font-semibold text-gray-800 mb-1">{{ trip.title }}</h4>
              <p class="text-gray-600 text-sm">{{ trip.date }}</p>
              <button class="mt-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                View Details
              </button>
            </div>
            <div class="ml-4 flex-shrink-0">
              <img :src="trip.imageUrl" :alt="trip.title" class="w-24 h-24 object-cover rounded-md" />
            </div>
          </div>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mt-8">Past trips</h3>
        <div class="space-y-6 mt-4">
          <div v-for="trip in pastTrips" :key="trip.id" class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <div class="flex-grow">
              <p class="text-sm text-gray-500 mb-1">Booking ID: {{ trip.bookingId }}</p>
              <h4 class="text-lg font-semibold text-gray-800 mb-1">{{ trip.title }}</h4>
              <p class="text-gray-600 text-sm">{{ trip.date }}</p>
              <button class="mt-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                View Details
              </button>
            </div>
            <div class="ml-4 flex-shrink-0">
              <img :src="trip.imageUrl" :alt="trip.title" class="w-24 h-24 object-cover rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'reviews'">
        <h2 class="text-xl font-bold text-yellow-500 mb-6">My Reviews</h2>
        <div class="space-y-6">
          <div v-for="review in reviews" :key="review.id" class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <div class="flex-grow">
              <p class="text-gray-700 font-semibold mb-1">{{ review.location }}</p>
              <p class="text-sm text-gray-500 mb-1">{{ review.date }}</p>
              <div class="flex items-center mb-2">
                <i v-for="n in 5" :key="n" class="fas fa-star" :class="{'text-yellow-400': n <= review.rating, 'text-gray-300': n > review.rating}"></i>
              </div>
              <p class="text-gray-700 text-sm">{{ review.text }}</p>
            </div>
            <div class="ml-4 flex-shrink-0">
              <img :src="review.imageUrl" :alt="review.location" class="w-24 h-24 object-cover rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'favorite'">
        <h2 class="text-xl font-bold text-yellow-500 mb-6">My Favorite Places</h2>
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Destinations</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div v-for="place in favoriteDestinations" :key="place.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <img :src="place.imageUrl" :alt="place.name" class="w-full h-40 object-cover" />
            <div class="p-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-1">{{ place.name }}</h4>
              <p class="text-sm text-gray-600">{{ place.description }}</p>
            </div>
          </div>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Accomodations</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="place in favoriteAccommodations" :key="place.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <img :src="place.imageUrl" :alt="place.name" class="w-full h-40 object-cover" />
            <div class="p-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-1">{{ place.name }}</h4>
              <p class="text-sm text-gray-600">{{ place.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'settings'">
        <div class="mb-8">
          <h3 class="text-xl font-bold text-yellow-500 mb-4">Display</h3>
          <div class="flex items-center justify-between mb-4">
            <label
              for="language-select"
              class="text-gray-700"
              style="color: #364153; font-size: medium; font-weight: normal"
            >Language</label>
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
            >Currency</label>
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
              <p class="text-sm text-gray-500">Receive email notifications for booking confirmations and updates.</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="settings.bookingNotifications"
                class="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
            </label>
          </div>
          <div class="flex items-center justify-between mt-4">
            <div>
              <p class="text-gray-700 font-medium">Promotional Offers</p>
              <p class="text-sm text-gray-500">Stay informed about new trips, special offers, and promotions.</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="settings.promotionalOffers"
                class="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
            </label>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-yellow-500 mb-4">Account</h3>
          <a
            href="#"
            @click.prevent="activeTab = 'personal'"
            class="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors duration-150"
          >
            <span class="text-gray-700 font-medium">Change Password</span>
            <i class="fas fa-arrow-right text-gray-400"></i>
          </a>
          <a href="#" class="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors duration-150">
            <span class="text-gray-700 font-medium">Update Contact Information</span>
            <i class="fas fa-arrow-right text-gray-400"></i>
          </a>
          <a href="#" @click="deleteAccount" class="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors duration-150 text-red-600">
            <span class="font-medium">Delete Account</span>
            <i class="fas fa-arrow-right text-gray-400"></i>
          </a>
          <div class="flex justify-end mt-6">
            <BaseButton
              @click="logout"
              class="bg-red-500 hover:bg-red-600"
            >
              Logout
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import NavBarBlack from "../components/NavBar-Black.vue";
import Footer from "../components/footer.vue";
import BaseButton from "../components/BaseButton.vue";
import InputField from "../components/InputField.vue";

// Firebase imports
import { getAuth, signOut, deleteUser, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useRouter } from "vue-router";

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

onMounted(async () => {
  await fetchPersonalDetails();
});

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

const reviews = [
  { id: 1, location: 'Cairo', date: '2 months ago', rating: 5, text: 'Amazing experience exploring the pyramids and the Sphinx. The guide was knowledgeable and friendly.', imageUrl: '../../public/profile/Pyramids2.jpeg' },
  { id: 2, location: 'Aswan', date: '3 months ago', rating: 4, text: 'Amazing experience exploring the pyramids and the Sphinx. The guide was knowledgeable and friendly.', imageUrl: '../../public/profile/Aswan-Abu-Simple-Tour.jpg' },
  { id: 3, location: 'Luxor', date: '4 months ago', rating: 5, text: 'Amazing experience exploring the pyramids and the Sphinx. The guide was knowledgeable and friendly.', imageUrl: '../../public/profile/luxor-vally of the kings.jpg' },
  { id: 4, location: 'Alexandria', date: '6 months ago', rating: 4, text: 'Amazing experience exploring the pyramids and the Sphinx. The guide was knowledgeable and friendly.', imageUrl: '../../public/profile/Alex.jpg' },
];

const favoriteDestinations = [
  { id: 1, name: 'Luxor', description: 'Ancient Temples & Royal Tombs', imageUrl: '../../public/profile/luxor-vally of the kings.jpg' },
  { id: 2, name: 'Aswan', description: 'Scenic Nile Cruises and Nubian Culture', imageUrl: '../../public/profile/Aswan-Abu-Simple-Tour.jpg' },
  { id: 3, name: 'Desert Oasis Resort', description: 'Eco-friendly resort in the desert', imageUrl: '../../public/profile/Desert-Oasis.jpeg' },
];

const favoriteAccommodations = [
  { id: 1, name: 'The Nile View Hotel', description: 'Luxury hotel with stunning Nile views', imageUrl: '../../public/profile/Nile-River.jpg' },
  { id: 2, name: 'Alexandria', description: 'Costal city with historical sites', imageUrl: '../../public/profile/Alex.jpg' },
  { id: 3, name: 'Costal Breeze Apartments', description: 'Modern apartments near the beach', imageUrl: '../../public/profile/Costal-Breeze.jpg' },
];

// New function to toggle password visibility
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
</script>

<style scoped>
.fas.fa-star {
  font-size: 0.9em;
  margin-right: 2px;
}

/* Hide the default checkbox for the toggle switches */
.sr-only:checked + div::after {
  content: '';
  transform: translateX(100%);
}
</style>