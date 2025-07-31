<template>
  <div>
    <navbar />
    
   <div class="relative h-96 bg-cover bg-center" style="background-image: url('/src/assets/BlogPageHero.jpg')">
  <h1 class="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
    Destinations
  </h1>
</div>


    <div class="p-6">
      <div class="flex justify-end mb-4">
        <select class="border p-2 rounded">
          <option>Sort by: Top Rated</option>
        </select>
      </div>

      <div class="flex gap-6">
        <FilterSidebar />

        <div class="flex-1 space-y-6">
          <div v-for="destination in destinations" :key="destination.title" class="flex bg-gray-100 rounded-lg overflow-hidden shadow min-h-[240px]">
  <img :src="destination.image" class="w-1/3 object-cover" />
  <div class="p-4 flex flex-col justify-between w-2/3">
    <div>
      <h3 class="font-bold text-lg text-black">{{ destination.title }}</h3>
      <div class="text-yellow-500 mb-1">★★★★★</div>
      <div class="text-sm text-gray-700 mb-2">{{ destination.location }}</div>
      <p class="text-sm text-black">{{ destination.description }}</p>
    </div>
   <div class="flex justify-end mt-4">
      <router-link v-if="destination.title === 'Iberotel Luxor'" to="/hotelpage">
        <BaseButton>Show Details</BaseButton>
      </router-link>
      <BaseButton v-else>Show Details</BaseButton>
    </div>
  </div>
</div>

          <!-- Pagination -->
          
 

        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>


<script setup>
import navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import FilterSidebar  from '../components/FiltersSidebar.vue'
import BaseButton from '../components/BaseButton.vue'
import PaginationComponent from '../components/PaginationComponent.vue'







const destinations = [
  {
    title: 'Valley of the Kings',
    location: 'Luxor',
    description: 'This desert valley contains the ancient burial ground of many Egyptian pharaohs. Among over 60 royal tombs is the famous Tomb of Tutankhamen that was found in pristine condition.',
    image: '/public/Destination/valley of kings.jpg',
  },
  {
    title: 'Iberotel Luxor',
    location: 'Luxor',
    description: 'A heated pool floating on the Nile is one of the most unique features of this 4-star hotel. Overlooking the Theben Hills, Iberotel Luxor also offers a restaurant boat and rooms with private balconies.',
    image: '/public/hotel/img1.jpg',
  },
  {
    title: 'Sofra Restaurant & Cafe',
    location: 'Luxor',
    description: 'A restaurant located in the heart of Luxor that draws its inspiration from the rich Arabian culture. Sofra is situated in an old 1930s Egyptian house that still retains its traditional character. ',
    image: '/public/Destination/sofra restaurant.jpg',
  },
  {
    title: 'Hilton Luxor Resort & Spa',
    location: 'Luxor',
    description: 'Nestled on the banks of the Nile, Hilton Luxor Resort & Spa offers stylish rooms with uninterrupted views from the water’s edge, luxurious spa facilities and stunning infinity pools.',
    image: '/public/Destination/hilton luxor.jpg',
  },
]
</script>
