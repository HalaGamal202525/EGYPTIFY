<!-- src/pages/Transportation.vue
<template>
  <div class="bg-[#fefaf2] min-h-screen flex flex-col">
   
    <NavBar />

  
    <section class="text-center py-12">
      <h2 class="text-black font-bold mb-2">Choose Your Transportation</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        We offer you a variety of transportation options to suit your budget, time, and preferences.
      </p>
    </section>

    
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


    <Footer />
  </div>
</template>

<script setup>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import TransportationCard from '../components/TransportationCard.vue'
</script> -->

<template>
  <section class="py-20 bg-gradient-to-b from-background to-muted/30">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Choose Your Transportation
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer you a variety of transportation options to suit your budget, time, and preferences.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TransportationCard
          v-for="(option, index) in transportationOptions"
          :key="option.id"
          :option="option"
          :index="index"
        />
      </div>

      <div class="mt-20">
        <Card class="bg-gradient-egypt text-white p-8 text-center">
          <h3 class="text-3xl font-bold mb-4">Special Offers for Early Bookings</h3>
          <p class="text-lg mb-6 opacity-90">
            Book your trip 30 days in advance and get up to 25% discount
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <Badge class="bg-white/20 text-white text-sm px-4 py-2">
              <Star class="w-4 h-4 mr-1" />
              25% Off
            </Badge>
            <Badge class="bg-white/20 text-white text-sm px-4 py-2">
              <Shield class="w-4 h-4 mr-1" />
              Free Cancellation
            </Badge>
            <Badge class="bg-white/20 text-white text-sm px-4 py-2">
              <Wifi class="w-4 h-4 mr-1" />
              Free WiFi
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import TransportationCard from '../TransportationCard.vue';
import { Star, Shield, Wifi } from 'lucide-vue-next';
import { Card } from '../components/secondary-card.vue';
import { Badge } from '../components/badge.vue';

const transportationOptions = [
  // {
  //   id: 'flights',
  //   title: 'Domestic Flights',
  //   description: 'Fastest way to travel between Egyptian cities',
  //   icon: 'Plane',
  //   color: 'nile',
  //   features: ['Daily flights', 'Time saving', 'Comfortable seats'],
  //   price: 'From 1,200 EGP',
  //   duration: '45 minutes - 2 hours',
  //   routes: ['Cairo - Aswan', 'Cairo - Luxor', 'Cairo - Sharm El Sheikh']
  // },
  {
    id: 'trains',
    title: 'Trains',
    description: 'Travel in comfort and enjoy scenic views',
    icon: 'Train',
    color: 'egypt',
    features: ['Spacious seats', 'Great views', 'Reasonable prices'],
    price: 'From 200 EGP',
    duration: '3 - 12 hours',
    routes: ['Cairo - Alexandria', 'Cairo - Luxor', 'Cairo - Aswan']
  },
  {
    id: 'buses',
    title: 'Tourist Buses',
    description: 'Economic choice with excellent service',
    icon: 'Bus',
    color: 'secondary',
    features: ['Air conditioning', 'Comfortable seats', 'Regular stops'],
    price: 'From 150 EGP',
    duration: '4 - 8 hours',
    routes: ['Cairo - Hurghada', 'Cairo - Dahab', 'Alexandria - Marsa Matrouh']
  },
  {
    id: 'cars',
    title: 'Car Rental',
    description: 'Complete freedom to move and explore',
    icon: 'Car',
    color: 'default',
    features: ['Total flexibility', 'Privacy', 'Free exploration'],
    price: 'From 300 EGP/day',
    duration: 'Your choice',
    routes: ['All over Egypt', 'Safe highways', 'Parking available']
  },
  {
    id: 'nile',
    title: 'Nile Cruises',
    description: 'Unique experience on the banks of the eternal Nile',
    icon: 'Ship',
    color: 'nile',
    features: ['Nile views', 'Heritage experience', 'Ultimate comfort'],
    price: 'From 2,500 EGP',
    duration: '3 - 7 days',
    routes: ['Luxor - Aswan', 'Cairo - Luxor', 'Day tours']
  }
];
</script>

<style scoped>
</style>
