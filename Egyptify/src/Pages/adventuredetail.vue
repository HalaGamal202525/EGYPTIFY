<template>
  <div class="min-h-screen bg-white">
    <Navbar />
<div class="px-8 py-6 text-base text-gray-600 mt-20">
    <router-link to="/" class="text-blue-600 hover:underline">Home</router-link>
    <span> &gt; </span>
    <router-link to="/adventures" class="text-blue-600 hover:underline">Adventure</router-link>
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

          <BaseButton class="mt-6"  @click="bookNow" > Book This Trip</BaseButton>
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
import { useRouter } from "vue-router";

const router = useRouter();
const places = [
  {
    id: '1',
    title: "Desert Safari in Siwa",
    image: "/sara/Desert Safari in Siwa.jpg",
    images: ["/sara/Desert Safari in Siwa2.jpeg", "/sara/Desert Safari in Siwa3.webp","/sara/Desert Safari in Siwa4.webp","/sara/Desert Safari in Siwa5.webp","/sara/Desert Safari in Siwa6.webp"],
    description: "Explore the desert dunes in a 4x4 safari.",
    location: "Siwa Oasis",
    date: "Available All Year",
    duration: "6 Hours",
    people: "2-6 People",
      rating:5,

    price: "500"
  },
  {
    id: '2',
    title: "Sinai Mountain Hiking",
    image: "/sara/Sinai Mountain Hiking.jpeg",
    images: ["/sara/Sinai Mountain Hiking.webp", "/sara/Sinai Mountain Hiking2.webp","/sara/Sinai Mountain Hiking3.webp","/sara/Sinai Mountain Hiking4.webp","/sara/Sinai Mountain Hiking5.webp","/sara/Sinai Mountain Hiking6.webp"],
    description: "Climb Mount Sinai and enjoy breathtaking sunrise views.",
    location: "South Sinai",
    date: "October - April",
    duration: "1 Day",
    people: "1-10 People",
      rating:4,

    price: "700"
  },{
  id: '3',
  title: "Camping by Wadi El-Rayan",
  category: "Adventure",
  image: "/sara/Camping by Wadi El-Rayan.webp",
  images: ["/sara/Camping by Wadi El-Rayan2.webp", "/sara/Camping by Wadi El-Rayan3.webp","/sara/Camping by Wadi El-Rayan4.jpeg","/sara/Camping by Wadi El-Rayan5.webp","/sara/Camping by Wadi El-Rayan6.webp","/sara/wadi alrayan.jpg"],
  description: "Enjoy an overnight camping experience by the waterfalls of Wadi El-Rayan.",
  location: "Fayoum",
  date: "October - March",
  duration: "2 Days / 1 Night",
  people: "2-12 People",
  rating:4.3,
  price: "850"
}

]
import { useBookingStore } from '../data/store'

const bookingStore = useBookingStore()

function bookNow() {
  if (!place) return;

  bookingStore.setCardData({
    image: place.image,
    title: place.title,
    rate: place.rating,
    price: place.price,
  });

  router.push('/form');
}

const route = useRoute()
const placeId = route.params.id
const place = places.find(p => p.id === placeId)
</script>

