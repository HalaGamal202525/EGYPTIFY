<template>
  <div  class="w-full max-w-[300px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative">
    <!-- الصورة -->
    <div class="w-full relative">
      <img
        v-if="showImage"
        :src="image"
        alt="Card image"
        class="h-48 w-full object-cover rounded-t-xl"
      />

      <!-- زر القلب -->
      <button
        v-if="showHeart"
        @click="toggleFavorite"
        class="absolute top-2 right-2 w-9 h-9 rounded-full bg-white flex justify-end items-center shadow-md transition"
      >
        <i
          :class="[
            'fa-heart',
            isFavorite ? 'fa-solid text-red-500' : 'fa-regular text-gray-400',
          ]"
          class="text-lg transition-all duration-300 ease-in-out transform"
          :style="{ color: '#ffc340', scale: isFavorite ? '1.2' : '1' }"
        >
        </i>
      </button>
    </div>

    <!-- رسالة overlay -->
    <div
      v-if="showOverlay"
      class="absolute top-16 right-4 bg-black bg-opacity-80 text-white text-sm px-3 py-1 rounded shadow-lg transition-opacity duration-300 z-10"
    >
      {{ isFavorite ? "Added to Favorites" : "Removed from Favorites" }}
    </div>

    <div class="p-4 flex flex-col justify-between flex-1">
      <div>
        <div class="flex items-center gap-2 flex-wrap">

          
        <h2 class="text-lg font-bold text-gray-800 ">{{ title }}</h2>
          <h2 class="text-lg font-bold text-gray-800">{{ title }}</h2>

          <div
            v-if="type"
            class="bg-yellow-400 text-white text-xs font-semibold px-2 py-0.5 rounded"
          >
            {{ type }}
          </div>
        </div>


          <div v-if="kind" class="grid grid-col gap-1 text-sm text-gray-600 mt-3 font-bold">{{ kind }}</div>




        <p class="text-sm text-gray-500 mb-2 py-2">{{ description }}</p>
        <div v-if="rating" class="text-yellow-500 text-sm mb-1 py-4">
          <span v-for="n in Math.floor(rating)" :key="n"
            ><i class="fa-solid fa-star" style="color: #ffc340"></i
          ></span>
          <span v-if="rating % 1 !== 0"
            ><i class="fa-solid fa-star-half-stroke" style="color: #ffc340"></i
          ></span>
        </div>

        <div
          class="flex flex-wrap items-center text-sm text-gray-600 gap-2 mt-2"
          v-if="location || date || duration || people"
        >
          <span v-if="location"
            ><i class="fa-solid fa-location-dot" style="color: #ffc340"></i>
            {{ location }}</span
          >
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




        <div class="grid grid-col gap-3 text-sm text-gray-600 mt-3">
          <div v-if="departure"> Departure: {{ departure }}</div>
          <div v-if="arrival"> Arrival: {{ arrival }}</div>
        </div>



        
        <div class="flex flex-wrap items-center text-sm text-gray-600 gap-2 mt-2" v-if="location || date || duration||people">

          <span v-if="location"><i class="fa-solid fa-location-dot" style="color: #ffc340;"></i> {{ location }}</span>
          <span v-if="date"><i class="fa-solid fa-calendar" style="color: #ffc340;"></i> {{ date }}</span>
          <span v-if="duration"><i class="fa-solid fa-clock" style="color: #ffc340;"></i> {{ duration }}</span>
          <span v-if="people"><i class="fa-solid fa-user-group" style="color: #ffc340;"></i> {{ people }}</span>
        </div>
      </div>

       <div v-if="amenities" class="grid grid-col gap-3 text-sm text-gray-600 mt-3"> Features: {{ amenities }}</div>


      <div class="flex items-center justify-between mt-4">
        <span class="text-yellow-600 font-bold text-md" v-if="price">
          {{ price }} EGP</span
        >

        <slot name="action" v-if="hasActionSlot" />
        <BaseButton v-else-if="showButton">{{ buttonText }}</BaseButton>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>
import { useSlots } from "vue";
import BaseButton from "./BaseButton.vue";
const props = defineProps({
  id: [String, Number],
  image: String,
  title: String,
  description: String,
  location: String,
  kind: String,
  location: String, 
  departure: String,
  arrival: String,
  amenities: String,
  date: String,
  duration: String,
  people: String,
  price: String,
  rating: Number,
  type: String,
  showButton: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
    default: "Book Now",
  },
  showHeart: {
    type: Boolean,
    default: false,
  },
  showImage: {
    type: Boolean,
    default: true,
  },
  defaultFavorite: Boolean,
});
const slots = useSlots();
const hasActionSlot = !!slots.action;
import { ref } from "vue";
import { watchEffect } from "vue";

const isFavorite = ref(props.defaultFavorite || false);
const showOverlay = ref(false);

watchEffect(() => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  isFavorite.value = favorites.some((p) => p.id === props.id);
});

// Toggle favorite
function toggleFavorite() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const exists = favorites.find((p) => p.id === props.id);
  let updatedFavorites;

  if (exists) {
    updatedFavorites = favorites.filter((p) => p.id !== props.id);
    isFavorite.value = false;
  } else {
    const newFavorite = {
      id: props.id,
      title: props.title,
      image: props.image,
      description: props.description,
      location: props.location,
      date: props.date,
      duration: props.duration,
      people: props.people,
      price: props.price,
      rating: props.rating,
      type: props.type,
    };
    updatedFavorites = [...favorites, newFavorite];
    isFavorite.value = true;
  }

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  isFavorite.value = !isFavorite.value;
  // Show overlay
  showOverlay.value = true;
  setTimeout(() => {
    showOverlay.value = false;
  }, 2000);
}
import { onMounted, onBeforeUnmount } from "vue";

function syncFavoriteState() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  isFavorite.value = favorites.some((p) => p.id === props.id);
}

onMounted(() => {
  syncFavoriteState();
  window.addEventListener("storage", syncFavoriteState);
});

onBeforeUnmount(() => {
  window.removeEventListener("storage", syncFavoriteState);
});
</script>
