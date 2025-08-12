<template>
  <div class="font-sans">
    <Navbar />

    <div class="container mx-auto px-4 mt-28 ">
      <router-link
         to="/hotels"
        class="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-100"
      >
        <i class="fas fa-arrow-left mr-2 text-lg"></i>
        <span class="font-medium">Back</span>
      </router-link>
    </div>

    <section class="container mx-auto px-4 py-8 mt-2" v-if="destination">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 class="text-2xl font-bold text-black">{{ destination.name }}</h1>
          <p class="text-sm text-black">{{ destination.stars }}</p>
          <p class="text-black mt-1">
            <i class="fas fa-map-marker-alt"></i> {{ destination.address }}
            <a href="/map" class="text-blue-600 underline ml-2">Show Map</a>
          </p>
        </div>

        <div class="flex gap-4 items-center">
          <i class="far fa-heart text-2xl cursor-pointer"></i>
          <i class="fas fa-share-alt text-2xl cursor-pointer text-gray-600 hover:text-blue-500 transition-colors"></i>
<BaseButton class="text-white" @click="scrollToDates">
  Reserve
</BaseButton>
        </div>
      </div>

      <section class="mt-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div class="md:col-span-8">
            <img :src="destination.images.main" alt="Main Image" class="w-full h-[310px] object-cover rounded-lg" />
          </div>
          <div class="md:col-span-4 flex flex-col gap-4">
            <img :src="destination.images.img1" alt="Image 1" class="w-full h-[150px] object-cover rounded-lg" />
            <img :src="destination.images.img2" alt="Image 2" class="w-full h-[150px] object-cover rounded-lg" />
          </div>
          <div class="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <img
              v-for="(thumb, index) in destination.images.thumbs"
              :key="index"
              :src="thumb"
              :alt="`Thumbnail ${index + 1}`"
              class="w-full h-[150px] object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      <div class="mt-8">
        <h2 class="text-black font-semibold mb-2">Description</h2>
   <p class="text-gray-700 leading-6 mt-2">
  {{ destination.description }}
</p>

      </div>

      <div class="mt-6" v-if="destination.facilities && destination.facilities.length">
        <h2 class="text-black font-semibold mb-2">Most popular facilities</h2>
        <ul class="flex flex-wrap gap-4 text-gray-600 text-sm">
          <li v-for="(item, i) in destination.facilities" :key="i">
            <i :class="item.icon + ' mr-1'"></i> {{ item.label }}
          </li>
        </ul>
      </div>

      <div class="mt-6" v-if="destination.type === 'hotel'">
        <h2 class="text-xl font-semibold mb-2 text-black">Room Type</h2>
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <div class="flex gap-4">
            <p class="text-black flex items-center"><i class="fas fa-city mr-1"></i> City View</p>
            <p class="text-black flex items-center"><i class="fas fa-smoking-ban mr-1"></i> Non-Smoking rooms</p>
          </div>
          <a href="/roomtype" class="text-blue-600 underline">Show Details</a>
        </div>
      </div>
<div
  v-show="destination.type === 'hotel'"
  class="mt-8 border p-4 rounded-lg bg-gray-50"
  ref="dateSection"
>

  <div class="flex flex-col md:flex-row gap-4">
    <div class="flex-1">
      <label class="text-black">Check-in Date</label>
      <input
        type="date"
        class="border w-full p-2 rounded-md text-black"
        v-model="checkIn"
      />
    </div>
    <div class="flex-1">
      <label class="text-black">Check-out Date</label>
      <input
        type="date"
        class="border w-full p-2 rounded-md text-black"
        v-model="checkOut"
      />
    </div>
    <div class="flex-1">
      <label class="text-black">Guests</label>
      <input
        type="text"
        class="border w-full p-2 rounded-md text-black"
        placeholder="2 Adults - 0 Children - 1 Room"
      />
    </div>
    <div class="flex items-end">
      <BaseButton class="text-white" @click="goToRoomType">Search</BaseButton>
    </div>
  </div>
</div>


      <div class="mt-8">
        <h2 class="text-black font-semibold mb-4">Guest Reviews</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <reviews
            v-for="(review, index) in destination.reviews"
            :key="index"
            :name="review.name"
            :avatar="review.avatar"
            :date="review.date"
            :rating="review.rating"
            :comment="review.comment"
          />
        </div>
        <div class="mt-4">
          <router-link to="/user-review">
            <BaseButton class="text-white">Write a review</BaseButton>
          </router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/Navbar-Black.vue'
import Footer from '../components/footer.vue'
import BaseButton from '../components/BaseButton.vue'
import reviews from '../components/reviews.vue'
import hoteldetails from "../data/hotels.json"



import {  watchEffect } from 'vue'

const route = useRoute()
const destination = ref(null)

watchEffect(() => {
  const slug = route.params.slug
  const hotel = hoteldetails.find(h => h.details.slug === slug)
  destination.value = hotel ? hotel.details : null
})
import { useRouter } from 'vue-router'

const router = useRouter()

import { useBookingStore } from '../data/store'



const bookingStore = useBookingStore()
const dateSection = ref(null)

const checkIn = ref(null)
const checkOut = ref(null)


const scrollToDates = () => {
  
  if (dateSection.value) {
    dateSection.value.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.log('dateSection is null');
    alert('dateSection is null');
  }
}


const goToRoomType = () => {
  bookingStore.setHotel(destination.value)
  bookingStore.setDates(checkIn.value, checkOut.value)
  console.log('Booking Store Data:', bookingStore.hotel, bookingStore.dates)
  router.push('/roomtype')
}


console.log(hoteldetails)

</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>