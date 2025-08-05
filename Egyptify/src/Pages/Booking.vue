<!-- src/pages/booking.vue -->
<template>
  <div>
    <Navbar />
    <Hero 
      title="Booking Page" 
      description="Plan & Reserve Your Trip"
      :image="bookingHeroImg"
    />

    <div class="max-w-screen-xl mx-auto px-4 mt-6">
     <Tabs 
      v-model="selectedTab" 
      :tabs="tabs"
      @book-now="handleBookNow"
     
     />
    </div>





     <!-- Booking Calendar -->
    <bookingCalendar
      :visible="showBooking"
      v-if="showBooking"
      :item="selectedItem"
      @booking-confirmed="handleBooking"
      @close="showBooking = false"
    />



    <!-- Booking History -->
<div 
  v-if="isLoggedIn && allHistory.length" 
  class="max-w-5xl mx-auto mt-8 mb-8 p-4 bg-yellow-20 border border-gray-300 rounded-lg shadow"
>
  <h2 class="text-lg font-semibold mb-4">Booking History</h2>

  <div 
    v-for="item in allHistory" 
    :key="item.id" 
    class="mb-4 p-3 bg-yellow-20 border border-gray-300 rounded-lg shadow"
  >
    <p class="font-semibold text-gray-800">
      {{ item.title }} - {{ item.city || item.location }} - {{ item.date }}
    </p>
    <p class="text-gray-600">Price: {{ item.price }} EGP</p>
    <p 
      class="inline-block mt-2 px-4 py-1 text-sm font-medium rounded-full bg-[#FFC340] text-white border border-[#FFC340]"
    >
      {{ item.status }}
    </p>
  </div>
</div>



    <!-- Checkout -->
    <div v-if="bookingDetails.length" class="max-w-5xl mx-auto mt-8 p-4 bg-green-50 border border-green-300 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Checkout Summary</h2>
      <div v-for="(item, index) in bookingDetails" :key="index" class="mb-2">
        <p>{{ item.type }} - {{ item.title }}: {{ item.total }} EGP</p>
      </div>
      <p class="font-bold text-lg mt-4">Total: {{ totalPrice }} EGP</p>
    </div>






    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/footer.vue'
import Tabs from '../components/Tabs.vue'
import bookingCalendar from '../components/bookingCalendar.vue'

import Hotels from '../components/tabs/hotels.vue'
import Transportation from '../components/tabs/transportation.vue'
import Events from '../components/tabs/events.vue'
import Restaurants from '../components/tabs/restaurants.vue'

import hotelsData from '../data/bookingHotels.json'
import transportationData from '../data/bookingTransportation.json'
import eventsData from '../data/bookingEvents.json'
import restaurantsData from '../data/bookingRestaurants.json'


import bookingHeroImg from '../assets/booking-hero.webp'

// Tabs config
const tabs = ref([
  { label: 'Hotels', component: Hotels, props: { onBookNow: (item) => handleBookNow(item) } },
  { label: 'Transportation', component: Transportation, props: { onBookNow: (item) => handleBookNow(item) } },
  { label: 'Events', component: Events, props: { onBookNow: (item) => handleBookNow(item) } },
  { label: 'Restaurants', component: Restaurants, props: { onBookNow: (item) => handleBookNow(item) } }
])





import { ref, computed, onMounted } from 'vue'

// State
const selectedItem = ref(null)
const showBooking = ref(false)
const bookingDetails = ref([])

// Logic for user login (can be dynamic)
const isLoggedIn = true

const handleBookNow = (item) => {
  selectedItem.value = item
  showBooking.value = true
}

const handleBooking = (data) => {
  bookingDetails.value.push(data)
  showBooking.value = false
}

// Total Price Calculation
const totalPrice = computed(() =>
  bookingDetails.value.reduce((sum, item) => sum + item.total, 0)
)



const allHistory = ref([])

onMounted(() => {
  const combined = [
    ...(hotelsData.history || []),
    ...(transportationData.history || []),
    ...(eventsData.history || []),
    ...(restaurantsData.history || [])
  ]

  // إزالة العناصر المكررة بناءً على الـ id
  const unique = combined.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.id === item.id)
  )

  allHistory.value = unique
})
</script>
