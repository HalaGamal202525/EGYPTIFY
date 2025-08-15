src/pages/Transportation.vue
<template>
  <div class="bg-[#fefaf2] min-h-screen flex flex-col">
   
    <NavBar />

  <!-- Hero Section with Search -->
<section
  class="relative bg-cover bg-center text-white py-24 px-4"
  style="background-image: url('/bookingRestaurants/ExplorePageHero.jpg')"
>
  <!-- Dark overlay -->
  <div class="absolute inset-0 bg-black opacity-60"></div>

  <div class="relative z-10 max-w-5xl mx-auto text-center">
    <!-- Title and Description -->
    <h1 class="text-4xl md:text-5xl font-extrabold">
      Explore Egypt <span class="text-yellow-400">Every Way</span>
    </h1>
    <p class="mt-4 text-lg max-w-3xl mx-auto text-white">
      From high-speed trains to enchanting Nile cruises, choose the perfect
      transportation for your journey through the land of the Pharaohs
    </p>

    <!-- Search Box -->
    <div
      class="mt-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl"
    >
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-left text-white">
        <!-- From -->
        <div>
          <label class="block text-sm font-semibold mb-1">From</label>
          <select class="w-full rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Choose city</option>
            <option>Cairo</option>
            <option>Giza</option>
            <option>Alexandria</option>
            <option>Luxor</option>
            <option>North Coast</option>
            <option>Sharm El-Sheikh</option>
          </select>
        </div>

        <!-- To -->
        <div>
          <label class="block text-sm font-semibold mb-1">To</label>
         <select class="w-full rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Choose destination</option>
            <option>Luxor</option>
            <option>Aswan</option>
            <option>Hurghada</option>
            <option>Cairo</option>
            <option>North Coast</option>
            <option>Sharm El-Sheikh</option>
          </select>
        </div>

        <!-- Travel Date -->
        <div>
          <label class="block text-sm font-semibold mb-1">Travel Date</label>
          <input
            type="date"
            class="w-full rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <!-- Passengers -->
        <div>
          <label class="block text-sm font-semibold mb-1">Passengers</label>
        <select class="w-full rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Select number</option>
            <option>1 Passenger</option>
            <option>2 Passengers</option>
            <option>3 Passengers</option>
            <option>4 Passengers</option>
            <option>5+ Passengers</option>
          </select>
        </div>
      </div>

      <!-- Search Button -->
<div class="mt-6 flex justify-center">
  <BaseButton class="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-xl" @click="gototarnsportion">
    Search Trips
  </BaseButton>
</div>

    </div>
  </div>
</section>


  
    <section class="text-center py-12">
      <h2 class="text-black text-2xl font-bold mb-2">Choose Your Transportation</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        We offer you a variety of transportation options to suit your budget, time, and preferences.
      </p>
    </section>

    
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-20 max-w-6xl mx-auto">
      <TransportationCard
       icon="fa-solid fa-bus"
        title="Tourist Buses"
        description="Economic choice with excellent service"
        price="From 150 EGP"
        duration="4 - 8 hours"
        :features="['Air Conditioning', 'Comfortable seats', 'Regular stops']"
        :routes="['Cairo - Hurghada', 'Cairo - Dahab']"
      />

      <TransportationCard
             icon="fa-solid fa-car"
        title="Car Rental"
        description="Complete freedom to move and explore"
        price="From 300 EGP / Day"
        duration="Your choice"
        :features="['Total Flexibility', 'Free exploration', 'Privacy']"
        :routes="['All over Egypt', 'Safe highways']"
      />

      <TransportationCard
                   icon="fa-solid fa-train-subway"

        title="Trains"
        description="Travel in comfort and enjoy scenic views"
        price="From 200 EGP"
        duration="3 - 12 hours"
        :features="['Air Conditioning', 'Comfortable seats', 'Regular stops']"
        :routes="['Cairo - Alexandria', 'Cairo - Luxor']"
      />

      <TransportationCard
                   icon="fa-solid fa-ship"

        title="Nile Cruise"
        description="Unique experience on the banks of the eternal Nile"
        price="From 2,500 EGP"
        duration="3 - 7 days"
        :features="['Nile views', 'Heritage experience', 'Ultimate comfort']"
        :routes="['Luxor - Aswan', 'Cairo - Luxor']"
      />
    </section>

   

    <!-- Special Offers Section -->
<section class="px-6 pb-20 w-full">
  <div
    class="rounded-xl bg-[#0b2344] relative overflow-hidden text-white py-10 px-6 text-center shadow-2xl"
  >
    <!-- لمسة إضاءة دائرية للخلفية -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>

    <h2 class="text-2xl md:text-3xl font-bold mb-2 relative z-10">
      Special Offers for Early Bookings
    </h2>
    <p class="text-md md:text-lg text-gray-200 mb-6 relative z-10">
      Book your trip 30 days in advance and get up to 25% discount
    </p>

    <!-- Offer Badges -->
    <div class="flex flex-wrap justify-center gap-4 relative z-10">
      <!-- Offer Badge -->
      <div class="flex items-center gap-3 bg-yellow-400/20 backdrop-blur-sm text-yellow-300 px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 border border-yellow-500/30">
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-300/20">
          <i class="fa-solid fa-percent"></i>
        </div>
        <span class="font-semibold">25% Off</span>
      </div>

      <!-- Cancellation Badge -->
      <div class="flex items-center gap-3 bg-green-400/20 backdrop-blur-sm text-green-300 px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 border border-green-500/30">
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-green-300/20">
          <i class="fa-solid fa-ban"></i>
        </div>
        <span class="font-semibold">Free Cancellation</span>
      </div>
    </div>
  </div>
</section>




    <Footer />
  </div>
</template>

<script setup>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import TransportationCard from '../components/TransportationCard.vue'
import BaseButton from '../components/BaseButton.vue'
import { useRouter } from "vue-router";
const router = useRouter();
function gototarnsportion(){
router.push("/transportiondetails")
}
</script>
