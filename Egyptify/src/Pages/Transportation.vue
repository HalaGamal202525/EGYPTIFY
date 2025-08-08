src/pages/Transportation.vue
<template>
  <div class="bg-[#fefaf2] min-h-screen flex flex-col">
   
    <NavBar />

  <!-- Hero Section with Search -->
<section
  class="relative bg-cover bg-center text-white py-24 px-4"
  style="background-image: url('/src/assets/ExplorePageHero.jpg')"
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
  <BaseButton class="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-xl">
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
        title="Tourist Buses"
        description="Economic choice with excellent service"
        price="From 150 EGP"
        duration="4 - 8 hours"
        :features="['Air Conditioning', 'Comfortable seats', 'Regular stops']"
        :routes="['Cairo - Hurghada', 'Cairo - Dahab']"
      />

      <TransportationCard
        title="Car Rental"
        description="Complete freedom to move and explore"
        price="From 300 EGP / Day"
        duration="Your choice"
        :features="['Total Flexibility', 'Free exploration', 'Privacy']"
        :routes="['All over Egypt', 'Safe highways']"
      />

      <TransportationCard
        title="Trains"
        description="Travel in comfort and enjoy scenic views"
        price="From 200 EGP"
        duration="3 - 12 hours"
        :features="['Air Conditioning', 'Comfortable seats', 'Regular stops']"
        :routes="['Cairo - Alexandria', 'Cairo - Luxor']"
      />

      <TransportationCard
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
    class="rounded-xl bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 text-white py-10 px-6 text-center shadow-lg"
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

      <div class="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-full text-white font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 9l.5 6m4-6l-.5 6m4.5-10.5H6.75a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75z" />
        </svg>
        Free Canellation
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
</script>
