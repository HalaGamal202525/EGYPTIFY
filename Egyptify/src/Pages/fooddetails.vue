<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <div class="py-6 text-base text-gray-600 mt-0 px-26">
      <router-link to="/" class="text-blue-600 hover:underline"
        >Home</router-link
      >
      <span> &gt; </span>
      <router-link to="/food" class="text-blue-600 hover:underline"
        >Food</router-link
      >
      <span> &gt; </span>
      <span class="text-gray-800 font-semibold">{{ place.title }}</span>
    </div>
    <div class="max-w-6xl mx-auto px-4 py-8 mt-0">
      <div class="grid md:grid-cols-2 gap-8">
        <img
          :src="place.image"
          alt="Main Image"
          class="w-full h-96 object-cover rounded-xl"
        />

        <div>
          <h1 class="text-3xl font-bold mb-4">{{ place.title }}</h1>
          <p class="text-gray-600 mb-4">{{ place.description }}</p>

          <div class="text-gray-700 space-y-2">
            <p>
              <i class="fa-solid fa-location-dot text-yellow-500 mr-2"></i>
              {{ place.location }}
            </p>
            <p>
              <i class="fa-solid fa-calendar text-yellow-500 mr-2"></i>
              {{ place.date }}
            </p>
            <p>
              <i class="fa-solid fa-clock text-yellow-500 mr-2"></i>
              {{ place.duration }}
            </p>
            <p>
              <i class="fa-solid fa-user-group text-yellow-500 mr-2"></i>
              Suitable for {{ place.people }}
            </p>
          </div>

          <div class="mt-6 text-lg font-semibold text-yellow-600">
            Price: {{ place.price }} EGP
          </div>

          <BaseButton class="mt-6" @click="bookNow">Book This Trip</BaseButton>
        </div>
      </div>

      <div v-if="place.images?.length" class="mt-12">
        <h2 class="text-2xl font-semibold mb-4">Gallery</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            v-for="(img, index) in place.images"
            :key="index"
            :src="img"
            class="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>

      <div class="mt-12">
        <h2 class="text-2xl font-semibold mb-4">Traveler Reviews</h2>
        <p class="text-gray-500">No reviews yet.</p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import Navbar from "../components/NavBar-Black.vue";
import Footer from "../components/Footer.vue";
import BaseButton from "../components/BaseButton.vue";

const places = [
  {
    id: "4",
    title: "Koshari El Tahrir",
    category: "Food",
    image: "/sara/Koshari El Tahrir.webp",
    images: [
      "/sara/kahri tahria.webp",
      "/sara/Koshari El Tahrir2.webp",
      "/sara/Koshari El Tahrir2.webp",
      "/sara/Koshari El Tahrir3.webp",
    ],
    description:
      "Taste the authentic Egyptian Koshari in the heart of downtown Cairo.",
    location: "Cairo",
    date: "Available All Year",
    duration: "1 Hour",
    people: "1-20 People",
    price: "50",
  },
  {
    id: "5",
    title: "Seafood in Alexandria",
    category: "Food",
    image: "/sara/Seafood in Alexandria.jpeg",
    images: [
      "/sara/Seafood in Alexandria.webp",
      "/sara/Fish Market Alexandria.webp",
      "/sara/Fish Market Alexandria2.webp",
      "/sara/Fish Market Alexandria3.webp",
      "/sara/Fish Market Alexandria4.webp",
    ],
    description:
      "Fresh seafood dishes by the Mediterranean at a local favorite.",
    location: "Alexandria",
    date: "Available All Year",
    duration: "1.5 Hours",
    people: "1-15 People",
    price: "150",
  },
  {
    id: "6",
    title: "Traditional Nubian Dinner",
    category: "Food",
    image: "/sara/Nubian House.jpeg",
    images: [
      "/sara/Nubian House2.webp",
      "/sara/Nubian House3.jpeg",
      "/sara/Nubian House4.jpeg",
      "/sara/Traditional Nubian Dinner.webp",
    ],
    description:
      "Home-cooked Nubian dinner with traditional music and culture.",
    location: "Aswan",
    date: "Available All Year",
    duration: "2 Hours",
    people: "2-10 People",
    price: "120",
  },
];

import { useRouter } from "vue-router";

const router = useRouter();

import { useCardStore } from "../data/store.js";
const bookingStore = useCardStore();

function bookNow() {
  if (!place) return;

  bookingStore.setCardData({
    image: place.image,
    title: place.title,
    rate: place.rating,
    price: place.price,
  });

  router.push("/form");
}

const route = useRoute();
const placeId = route.params.id;
const place = places.find((p) => p.id === placeId);
</script>
