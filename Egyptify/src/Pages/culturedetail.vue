<template>
  <div class="min-h-screen bg-white">
    <Navbar />
<div class="px-8 py-6 text-base text-gray-600 mt-20">
    <router-link to="/" class="text-blue-600 hover:underline">Home</router-link>
    <span> &gt; </span>
    <router-link to="/culture" class="text-blue-600 hover:underline">Culture</router-link>
    <span> &gt; </span>
    <span class="text-gray-800 font-semibold">{{ place.title }}</span>
  </div>
    <div class="max-w-6xl mx-auto px-4 py-8 mt-10">
      <div class="grid md:grid-cols-2 gap-8">
        <img :src="place.image" alt="Main Image" class="w-full h-96 object-cover rounded-xl" />

        <div>
          <h1 class="text-3xl font-bold mb-4">{{ place.title }}</h1>
          <p class="text-gray-600 mb-4">{{ place.description }}</p>

          <div class="text-gray-700 space-y-2">
            <p><i class="fa-solid fa-location-dot text-yellow-500 mr-2"></i> {{ place.location }}</p>
            <p><i class="fa-solid fa-calendar text-yellow-500 mr-2"></i> {{ place.date }}</p>
            <p><i class="fa-solid fa-clock text-yellow-500 mr-2"></i> {{ place.duration }}</p>
            <p><i class="fa-solid fa-user-group text-yellow-500 mr-2"></i> Suitable for {{ place.people }}</p>
          </div>

          <div class="mt-6 text-lg font-semibold text-yellow-600">
            Price: {{ place.price }} EGP
          </div>

          <BaseButton class="mt-6">Book This Trip</BaseButton>
        </div>
      </div>

      <div v-if="place.images?.length" class="mt-12">
        <h2 class="text-2xl font-semibold mb-4">Gallery</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img v-for="(img, index) in place.images" :key="index" :src="img" class="w-full h-48 object-cover rounded-lg" />
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
import { useRoute } from 'vue-router'
import Navbar from '../components/NavBar-Black.vue'
import Footer from '../components/Footer.vue'
import BaseButton from '../components/BaseButton.vue'

const places = [
  {
    id: '7',
    title: "Egyptian Museum Visit",
    category: "Culture",
    image: "/sara/Egyptian Museum.jpeg",
    images: [
      "/sara/Egyptian Museum2.webp",
      "/sara/Egyptian Museum3.jpeg",
      "/sara/Egyptian Museum4.webp",
      "/sara/Egyptian Museum5.jpg",
      "/sara/Egyptian Museum6.jpeg"
    ],
    description: "Discover ancient artifacts at the world-famous Egyptian Museum.",
    location: "Cairo",
    date: "Open Daily",
    duration: "3 Hours",
    people: "1-20 People",
    price: "200"
  },
  {
    id: '8',
    title: "Abu Simbel Temples",
    category: "Culture",
    image: "/sara/Abu Simbel Temples.jpeg",
    images: [
      "/sara/Abu Simbel Temples2.webp",
      "/sara/Abu Simbel Temples3.jpg",
      "/sara/Abu Simbel Temples4.webp",
      "/sara/Abu Simbel Temples5.webp",
      "/sara/Abu Simbel Temples6.jpeg"
    ],
    description: "Explore the grand Abu Simbel Temples Temple complex and learn about ancient Theban history.",
    location: "Luxor",
    date: "Daily Guided Tours",
    duration: "2 Hours",
    people: "1-15 People",
    price: "250"
  },
  {
    id: '9',
    title: "Islamic Cairo Walking Tour",
    category: "Culture",
    image: "/sara/Islamic Cairo.webp",
    images: [
      "/sara/Islamic Cairo2.jpeg",
      "/sara/Islamic Cairo3.webp",
      "/sara/Islamic Cairo4.jpeg",
      "/sara/Islamic Cairo5.jpg",
      "/sara/Islamic Cairo6.webp",
      "/sara/Islamic Cairo7.webp"
    ],
    description: "Walk through centuries of Islamic architecture and history in Old Cairo.",
    location: "Cairo",
    date: "Fridays & Saturdays",
    duration: "4 Hours",
    people: "1-10 People",
    price: "180"
  }
];


const route = useRoute()
const placeId = route.params.id
const place = places.find(p => p.id === placeId)
</script>

