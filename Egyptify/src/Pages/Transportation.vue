<!-- src/pages/Transportation.vue -->
<template>
  <div class="bg-[#fefaf2] min-h-screen flex flex-col">
    <!-- Navbar -->
    <NavBar />

    <!-- Header Section -->
    <section class="text-center py-12">
      <h2 class="text-black font-bold mb-2">Choose Your Transportation</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        We offer you a variety of transportation options to suit your budget, time, and preferences.
      </p>
    </section>

    <!-- Cards Section -->
    <section class="flex flex-wrap justify-center gap-8 px-4 pb-16">
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
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import TransportationCard from '../components/TransportationCard.vue'
</script>