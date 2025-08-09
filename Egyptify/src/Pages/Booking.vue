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




    <!-- Special Offers Section -->
<section class="px-6 pb-20 w-full mt-10">
  <div
    class="rounded-xl gap-2 bg-green-800 hover:bg-green-700 text-white py-10 px-6 text-center shadow-lg"
  >
    <h2 class="text-2xl md:text-3xl font-bold mb-2">
      Special Offers for Early Bookings
    </h2>
    <p class="text-md md:text-lg text-white mb-6">
      Book your trip 30 days in advance and get up to 25% discount
    </p>

    <!-- Offer Badges -->
    <div class="flex flex-wrap justify-center gap-4">
      <div class="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-full text-white font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.465 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
        </svg>
        25% Off
      </div>

      <div class="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-full text-white font-medium bg-blue">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 9l.5 6m4-6l-.5 6m4.5-10.5H6.75a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75z" />
        </svg>
        Free Canellation
      </div>
    </div>
  </div>
</section>





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
      class="inline-block mt-2 px-4 py-1 text-sm font-medium rounded-full text-green-500 border border-green-500"
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
// const bookingDetails = ref([])

// Logic for user login (can be dynamic)
const isLoggedIn = true

const handleBookNow = (item) => {
  selectedItem.value = item
  showBooking.value = true
}

// const handleBooking = (data) => {
//   bookingDetails.value.push(data)
//   showBooking.value = false
// }

// Total Price Calculation
const totalPrice = computed(() =>
  bookingDetails.value.reduce((sum, item) => sum + item.total, 0)
)



// const allHistory = ref([])

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



// مصفوفه لتخزين البيانات 
const bookingDetails = ref([]);
const allHistory = ref([]);

const handleBooking = (bookingData) => {
  // تخزين في الـ Checkout
  bookingDetails.value.push(bookingData);

  // تخزين في الـ History (مع إضافة التاريخ)
  allHistory.value.push({
    ...bookingData,
    date: new Date().toLocaleDateString(),
    status: 'Confirmed',
  });

  showBooking.value = false;
};

</script>
