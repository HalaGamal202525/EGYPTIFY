<template>
  <div>
    <navbar />

    <div class="relative h-64 md:h-110 bg-cover bg-center" style="background-image: url('/public/Destination/background.jpg')">
      <h1 class="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold">
        Destinations
      </h1>
    </div>

    <div class="p-4 md:p-6">
      <div class="flex justify-end mb-4">
        <select class="border p-2 rounded text-sm">
          <option>Sort by: Top Rated</option>
        </select>
      </div>

      <div class="flex flex-col lg:flex-row gap-6">
        <FilterSidebar class="text-sm" />

        <div class="flex-1 space-y-6">
          <div
            v-for="destination in paginatedDestinations"
            :key="destination.title"
            class="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow min-h-[240px]"
          >
            <img :src="destination.image" class="w-full md:w-1/3 h-48 md:h-auto object-cover" />

            <div class="p-4 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h3 class="font-bold text-lg text-black">{{ destination.title }}</h3>
                <div class="text-yellow-500 mb-1">★★★★★</div>
                <div class="text-sm text-gray-700 mb-2">{{ destination.location }}</div>
                <p class="text-sm text-black">{{ destination.description }}</p>
              </div>
              <div class="flex justify-end mt-4">
                <router-link :to="`/destination/${slugify(destination.title)}`">
  <BaseButton>Show Details</BaseButton>
</router-link>
                <!-- <BaseButton v-else>Show Details</BaseButton> -->
              </div>
            </div>
          </div>

          <!-- pagination -->
                    
<div class="flex justify-center mt-10 mb-16 text-black">
  <PaginationComponent
    :currentPage="currentPage"
    :totalPages="10"
    @page-changed="handlePageChange"
  />
</div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import FilterSidebar from '../components/FiltersSidebar.vue'
import BaseButton from '../components/BaseButton.vue'
import PaginationComponent from '../components/PaginationComponent.vue'

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}


// All cards
const allDestinations = [
   {
    title: 'Steigenberger Nile Palace',
    location: 'Luxor',
    description: 'The 5-star Steigenberger Nile Palace is situated in the heart of Luxor and provides modern accommodation with stunning views of the Nile.',
    image: '/public/Destination/steignberger.jpg',
  },
     {
    title: 'Luxor Temple',
    location: 'Luxor',
    description: 'The 5-star Steigenberger Nile Palace is situated in the heart of Luxor and provides modern accommodation with stunning views of the Nile.',
    image: '/public/Destination/luxor temple.jpg',
  },
      {
    title: 'El Tarboush',
    location: 'Luxor',
    description: 'El Tarboush is celebrated by many travelers for its authentic Lebanese cuisine, with dishes that are both expertly crafted and generously portioned.',
    image: '/public/Destination/eltarboush.jpg',
  },
        {
    title: 'Sofitel Winter Palace Luxor',
    location: 'Luxor',
    description: 'Sofitel Winter Palace Luxor is popular among travelers for its spacious, elegant rooms, although some note that the furnishings feel outdated.',
    image: '/public/Destination/sofitel.jpg',
  },
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

// cards number 
const itemsPerPage = 4
const currentPage = ref(1)

// number of pages
const totalPages = computed(() => Math.ceil(allDestinations.length / itemsPerPage))

// current page cards
const paginatedDestinations = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return allDestinations.slice(start, start + itemsPerPage)
})

// change page
function handlePageChange(newPage) {
  currentPage.value = newPage
}


</script>
