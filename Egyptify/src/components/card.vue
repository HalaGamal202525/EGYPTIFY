<template>
  <div
    @click="$emit('click')"
    class="w-full max-w-[300px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col relative hover:shadow-xl transition transform hover:-translate-y-1"
  >
    <div class="w-full relative">
      <img
        v-if="showImage"
        :src="image"
        alt="Card image"
        class="h-48 w-full object-cover rounded-t-xl"
      />

      <div
        v-if="showBadge && badgeText"
        class="absolute top-2 left-2 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md"
      >
        {{ badgeText }}
      </div>

      <button
        v-if="showHeart"
        @click="toggleFavorite"
        class="absolute top-2 right-2 w-9 h-9 rounded-full bg-white flex justify-end items-center shadow-md transition cursor-pointer"
      >
        <i
          :class="[
            'fa-heart',
            isFavorite ? 'fa-solid text-red-500' : 'fa-regular text-yellow-400',
          ]"
          class="text-lg transition-all duration-300 ease-in-out transform"
          :style="{ color: isFavorite ? '#ffc240' : '#ffc240', scale: isFavorite ? '1.2' : '1' }"
        >
        </i>
      </button>
    </div>

    <div
      v-if="showOverlay"
      class="absolute top-16 right-4 bg-black bg-opacity-80 text-white text-sm px-3 py-1 rounded shadow-lg transition-opacity duration-300 z-10"
    >
      {{ isFavorite ? "Added to Favorites" : "Removed from Favorites" }}
    </div>

    <div class="p-4 flex flex-col justify-between flex-1">
      <div>
        <div class="flex items-center gap-2 flex-wrap">
          <h2 class="card-title text-lg font-bold text-gray-800">{{ title }}</h2>

          <div
            v-if="type"
            class="bg-yellow-400 text-white text-xs font-semibold px-2 py-0.5 rounded"
          >
            {{ type }}
          </div>
        </div>

        <div
          v-if="kind"
          class="grid grid-col gap-1 text-sm text-gray-600 mt-3 font-bold"
        >
          {{ kind }}
        </div>

        <p class="text-sm text-gray-500 mb-2 py-2">{{ description }}</p>
        <div v-if="rating" class="text-yellow-500 text-sm mb-1 py-1">
          <span v-for="n in Math.floor(rating)" :key="n"
            ><i class="fa-solid fa-star" style="color: #ffc340"></i
          ></span>
          <span v-if="rating % 1 !== 0"
            ><i class="fa-solid fa-star-half-stroke" style="color: #ffc340"></i
          ></span>
        </div>

        <div class="grid grid-col gap-3 text-sm text-gray-600 mt-3">
          <div v-if="departure">Departure: {{ departure }}</div>
          <div v-if="arrival">Arrival: {{ arrival }}</div>
        </div>

        <div
          class="flex flex-wrap items-center text-sm text-gray-600 gap-2 mt-2"
          v-if="location || date || duration || people"
        >
          <span v-if="location"
            ><i class="fa-solid fa-location-dot mb-2" style="color: #ffc340"></i>
            {{ location }}</span
          >
        </div>

        <div>
          <span v-if="date"
            ><i class="fa-solid fa-calendar" style="color: #ffc340"></i>
            {{ date }}</span
          >
          <span v-if="duration"
            ><i class="fa-solid fa-clock" style="color: #ffc340"></i>
            {{ duration }}</span
          >
          <span v-if="people"
            ><i class="fa-solid fa-user-group" style="color: #ffc340"></i>
            {{ people }}</span
          >
        </div>
      </div>

    <div v-if="amenities?.length" class="my-5">
  <p class="text-gray-900 font-semibold mb-2">Features: </p>
  <div class="flex flex-wrap gap-2">
    <span
      v-for="amenity in amenities"
      :key="amenity"
      class="bg-yellow-50 text-yellow-900 px-3 py-1 rounded-full text-sm border border-yellow-200"
    >
      {{ amenity }}
    </span>
  </div>
</div>

      <div class="flex items-center justify-between mt-4">
        <span class="text-yellow-600 font-bold text-md" v-if="price">
          {{ price }} EGP</span
        >
        <div class="flex justify-center items-center">
          <slot name="action" v-if="hasActionSlot" />
          <BaseButton v-else-if="showButton" @click="handleClick">{{
            buttonText
          }}</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSlots, ref, onMounted, onBeforeUnmount, watch } from "vue";
import BaseButton from "./BaseButton.vue";

// Firebase imports
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";

const props = defineProps({
  id: [String, Number],
  image: String,
  title: String,
  description: String,
  location: String,
  kind: String,
  departure: String,
  arrival: String,
  amenities: String,
  date: String,
  duration: String,
  people: String,
  price: String,
  rating: Number,
  type: String,
  showButton: { type: Boolean, default: false },
  buttonText: { type: String, default: "Book Now" },
  showHeart: { type: Boolean, default: false },
  showImage: { type: Boolean, default: true },
  defaultFavorite: Boolean,
  onClick: Function,
  showBadge: { type: Boolean, default: false },
  badgeText: { type: String, default: "" },
});

const emit = defineEmits(['favorite-changed']);
const slots = useSlots();
const hasActionSlot = !!slots.action;
const isFavorite = ref(props.defaultFavorite);
const showOverlay = ref(false);
let authListener = null;
let currentUser = null;

// Watch for changes to the defaultFavorite prop
watch(() => props.defaultFavorite, (newVal) => {
  isFavorite.value = newVal;
});

function handleClick() {
  if (props.onClick) {
    props.onClick();
  }
}

const toggleFavorite = async (event) => {
  event.stopPropagation();
  
  if (!currentUser) {
    alert("Please log in to save favorites.");
    return;
  }

  const favoriteDocRef = doc(db, `users/${currentUser.uid}/favorites/${props.id}`);
  
  try {
    const docSnap = await getDoc(favoriteDocRef);
    
    if (docSnap.exists()) {
      // It's already a favorite, so remove it
      await deleteDoc(favoriteDocRef);
      // Only change local state AFTER successful delete
      isFavorite.value = false;
      showOverlay.value = true;
    } else {
      // It's not a favorite, so add it
      const newFavorite = {
        id: props.id,
        image: props.image || '',
        title: props.title || '',
        description: props.description || '',
        location: props.location || '',
        date: props.date || '',
        duration: props.duration || '',
        people: props.people || '',
        price: props.price || '',
        rating: props.rating || 0,
        type: props.type || '',
      };
      await setDoc(favoriteDocRef, newFavorite);
      // Only change local state AFTER successful set
      isFavorite.value = true;
      showOverlay.value = true;
    }
    
    emit('favorite-changed');
    
  } catch (error) {
    console.error("Error toggling favorite status:", error);
    // If there's an error, don't change the local state
    alert("An error occurred. Please try again.");
  } finally {
    setTimeout(() => {
      showOverlay.value = false;
    }, 2000);
  }
};

onMounted(() => {
  const auth = getAuth();
  authListener = onAuthStateChanged(auth, async (user) => {
    currentUser = user;
    if (user && props.id) {
      // Check if this card is a favorite when the user logs in
      const docSnap = await getDoc(doc(db, `users/${user.uid}/favorites/${props.id}`));
      isFavorite.value = docSnap.exists();
    } else {
      isFavorite.value = false;
    }
  });
});

onBeforeUnmount(() => {
  if (authListener) {
    authListener();
  }
});
</script>

<style scoped>
.model {
  background-color: rgba(128, 128, 128, 0.329);
}
a {
  cursor: pointer;
}
.fas.fa-star {
  font-size: 0.9em;
  margin-right: 2px;
}
/* Hide the default checkbox for the toggle switches */
.sr-only:checked + div::after {
  content: "";
  transform: translateX(100%);
}
/* Base styles for the toggle switch container */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
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
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}
/* The white circle/handle */
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}
/* Change background color when checked */
input:checked + .slider {
  background-color: #fbbd42;
}
/* Move the circle to the right when checked */
input:checked + .slider:before {
  transform: translateX(20px);
}
</style>