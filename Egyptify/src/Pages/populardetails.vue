<template>
  <div class="font-sans text-gray-800 bg-[#FAFAFA]">
    <Navbar />

    <section v-if="place" class="max-w-7xl mx-auto px-6 py-8 mt-20">
      <!-- Title and Rating -->
       <router-link :to="`/`" class="underline text-blue-600">Home</router-link>
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center my-6">
        <h1 class="text-4xl font-bold mb-2">{{ place.title }}</h1>
        <div class="flex items-center gap-2 text-yellow-500 text-lg">
          <i class="fa-solid fa-star"></i>
          <span class="font-semibold">{{ place.rating }}</span>
          <span class="text-gray-600 text-sm">({{ place.reviews.length }} reviews)</span>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="rounded-xl overflow-hidden shadow-lg mb-6">
        <img :src="place.image" class="w-full h-[400px] object-cover" />
      </div>

      <!-- Image Gallery -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <img v-for="(img, i) in place.gallery" :key="i" :src="img" class="h-40 w-full object-cover rounded-lg" />
      </div>

      <!-- Details -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Description -->
        <div class="md:col-span-2 space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900">About</h2>
          <p class="text-gray-700 leading-relaxed">{{ place.description }}</p>

          <h2 class="text-2xl font-semibold mt-6 text-gray-900">Location & Info</h2>
          <ul class="space-y-2 mt-2 text-gray-700">
            <li><strong>Location:</strong> {{ place.location }}</li>
            <li><strong>Entry Fees:</strong> {{ place.entryFees }}</li>
            <li><strong>Visiting Hours:</strong> {{ place.visitingHours }}</li>
            <li>
              <strong>Map:</strong>
              <a :href="place.mapLink" target="_blank" class="text-blue-600 underline">View on Google Maps</a>
            </li>
          </ul>
        </div>

        <!-- Booking -->
        <div class="bg-white shadow-md rounded-xl h-55 p-6 space-y-7">
          <h3 class="text-xl font-bold text-gray-900">Plan Your Visit</h3>
          <p class="text-gray-800 text-lg">From <span class="font-semibold">{{ place.price }} EGP</span></p>
          <BaseButton class="w-full  font-bold py-2 rounded-lg transition"   @click="bookNow">
            Book Now
          </BaseButton>
        </div>
      </div>

<!-- Reviews Section -->
<div class="mt-12">
  <h2 class="text-2xl font-bold mb-6 border-b pb-2">Guest Reviews</h2>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="(review, index) in place.reviews"
      :key="index"
      class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
    >
      <div class="flex items-center justify-between mb-4">
        <!-- Avatar + Name -->
        <div class="flex items-center gap-3">
          <img
            :src="`https://i.pravatar.cc/60?img=${index + 12}`"
            alt="User avatar"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p class="font-semibold text-lg text-gray-900">{{ review.user }}</p>
            <p class="text-sm text-gray-500">{{ review.date || "Visited recently" }}</p>
          </div>
        </div>

        <!-- Rating -->
        <div class="flex items-center gap-1 text-yellow-400 text-sm">
          <i class="fa-solid fa-star" v-for="n in Math.floor(review.rating || 4)" :key="n"></i>
          <span class="text-gray-600 ml-1">{{ (review.rating || 4).toFixed(1) }}/5</span>
        </div>
      </div>

      <!-- Comment -->
      <p class="text-gray-700 leading-relaxed italic">“{{ review.comment }}”</p>
    </div>
  </div>
</div>


    </section>

    <p v-else class="text-center text-gray-500 mt-20">Loading...</p>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/NavBar-Black.vue'
import Footer from '../components/footer.vue'
import { useRouter } from "vue-router";

const router = useRouter();
const places = [
{
  id: 1,
  title: "Al-Azhar Mosque",
  image: "/hero/alazhar.jpg",
  gallery: [
    "/sara/الازهر (1).webp",
    "/sara/الازهر (2).webp",
    "/sara/الازهر1.webp",
    "/sara/الحسين.jpg"
  ],
  description:
    "Al-Azhar Mosque, established in 970 AD, is one of the oldest and most influential Islamic institutions in the world. Known for its stunning Fatimid architecture, the mosque is a spiritual, educational, and historical beacon in the heart of Islamic Cairo.",
  location: "Al-Azhar St., Islamic Cairo, Egypt",
  entryFees: "Free Entry",
  visitingHours: "9:00 AM – 6:00 PM",
  mapLink: "https://maps.app.goo.gl/QrZHUcYxKMZ2",
  price: 100 ,
  rating: 4.8,
  reviews: [
    { user: "Mona", comment: "A beautiful place full of history and serenity." },
    { user: "Youssef", comment: "Incredible architecture and spiritual atmosphere." }
  ]
},
 {
  id: 2,
  title: "Philae Temple",
  image: "/sara/Philae5.webp",
  gallery: [
    "/sara/Philae2.webp",
    "/sara/Philae3.webp",
    "/sara/Philae4.jpeg",
    "/sara/Philae1.webp"
  ],
  description:
    "Located on Agilkia Island in Aswan, Philae Temple is a beautiful ancient Egyptian temple complex dedicated to the goddess Isis. Surrounded by the Nile, the temple boasts stunning carvings and a unique island atmosphere. It was relocated during the UNESCO Nubia Campaign to avoid submersion after the building of the Aswan High Dam.",
  location: "Agilkia Island, Aswan, Egypt",
  entryFees: "150 EGP (Adults), 75 EGP (Students)",
  visitingHours: "7:00 AM – 5:00 PM",
  mapLink: "https://maps.app.goo.gl/4oUQDAZUz6x9Vjv87",
  price: 250,
  rating: 4.8,
  reviews: [
    { user: "Mona", comment: "The boat ride to the temple made the experience magical!" },
    { user: "Youssef", comment: "Stunning carvings and peaceful island vibes." }
  ],
  category: "Aswan"
},
{
  id: 3,
  title: "Blue Hole – Dahab",
  image: "/hero/bluehole.jpg",
  gallery: [
    "/sara/Blue Hole1.jpeg",
    "/sara/Blue Hole2.webp",
    "/sara/Blue Hole3.webp",
    "/sara/Blue Hole4.webp"
  ],
  description:
    "The Blue Hole in Dahab is one of the world’s most famous diving spots. Known for its crystal-clear waters, rich marine life, and dramatic coral walls, it attracts divers and adventurers from all over the world. Even if you're not diving, the views and beach cafés make it a perfect spot to relax.",
  location: "Blue Hole, Dahab, South Sinai, Egypt",
  entryFees: "Free access (diving tours extra)",
  visitingHours: "6:00 AM – 6:00 PM",
  mapLink: "https://maps.app.goo.gl/dahab-blue-hole",
  price: 220,
  rating: 4.7,
  reviews: [
    { user: "Hana", comment: "The snorkeling experience here was magical!" },
    { user: "Omar", comment: "Best diving spot I’ve ever visited." }
  ],
  category: "Dahab"
}
,
  {
    id: 4,
    title: "Alexandria Library",
    image: "/sara/Alexandria Library2.webp",
    gallery: ["/sara/Alexandria Library1.webp", "/sara/Alexandria Library3.webp", "/sara/Alexandria Library4.jpg", "/sara/Alexandria Library5.webp"],
    description: "Bibliotheca Alexandrina is a modern library and cultural center built in commemoration of the ancient Library of Alexandria. It’s an architectural marvel and a knowledge hub.",
    location: "Alexandria, Egypt",
    entryFees: "70 EGP (Adults), 35 EGP (Students)",
    visitingHours: "9:00 AM – 4:00 PM",
    mapLink: "https://maps.app.goo.gl/alexandria-library",
    price: 150,
    rating: 4.3,
    reviews: [
      { user: "Yasmine", comment: "Impressive architecture and exhibitions." },
      { user: "Karim", comment: "Loved the design and collections." }
    ]
  },
 

]
import { useCardStore } from '../data/store.js'
const bookingStore = useCardStore()
import BaseButton from '../components/BaseButton.vue';


function bookNow() {
  if (!place.value) return;

  bookingStore.setCardData({
    image: place.value.image,
    title: place.value.title,
    rate: place.value.rating,
    price: place.value.price,
  })

  router.push('/form') 
}
const route = useRoute()
const place = ref(null)

onMounted(() => {
  const id = parseInt(route.params.id)
  place.value = places.find(p => p.id === id)
})
</script>

<style scoped>
</style>
