<script setup>
import { ref, computed } from 'vue'
import { generateEgyptGovernorates } from '../data/fakedata'
import Navbar from "../components/navbar.vue"
import Footer from '../components/footer.vue'
import SideFilter from './Resturantfilter.vue'
import PaginationComponent from "../components/PaginationComponent.vue"
import BaseButton from '../components/BaseButton.vue'
import { useRouter } from 'vue-router'

const itemsPerPage = 4
const allRestaurants = ref(generateEgyptGovernorates(50))

const appliedFilters = ref({
  governorate: [],
  rating: [],
  cuisine: []
})

const currentPage = ref(1)
const isOverlayOpen = ref(false)
const tempFilters = ref({ ...appliedFilters.value })
const destinationdata = ref(allRestaurants.value)

const filteredRestaurants = computed(() => {
  return allRestaurants.value.filter(r => {
    const matchGov = appliedFilters.value.governorate.length === 0 || appliedFilters.value.governorate.includes(r.governorate)
    const matchRate = appliedFilters.value.rating.length === 0 || appliedFilters.value.rating.some(rate => r.rating >= rate)
    const matchCuisine = appliedFilters.value.cuisine.length === 0 || appliedFilters.value.cuisine.includes(r.cuisine)
    return matchGov && matchRate && matchCuisine
  })
})

const totalPages = computed(() => Math.ceil(filteredRestaurants.value.length / itemsPerPage))
const paginatedRestaurants = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredRestaurants.value.slice(start, start + itemsPerPage)
})

const handlePageChange = (page) => {
  currentPage.value = page
}

const applyFilters = (filters) => {
  appliedFilters.value = filters
  currentPage.value = 1
}

const updateTempFilters = (filters) => {
  tempFilters.value = filters
}

const closeOverlay = () => {
  isOverlayOpen.value = false
  tempFilters.value = { ...appliedFilters.value }
}

const applyOverlayFilters = () => {
  appliedFilters.value = { ...tempFilters.value }
  isOverlayOpen.value = false
  currentPage.value = 1
}

const router = useRouter()
</script>

<template>
  <Navbar/>

  <div
    class="relative h-64 md:h-125 bg-cover bg-center"
    style="background-image: url('/unsplashfood/hero19.jpg')"
  >
    <h1 class="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold">
      Restaurant
    </h1>
  </div>

  <!-- flex الأب: عمودي على الموبايل وأفقي على الشاشات الكبيرة -->
  <div class="flex flex-col lg:flex-row gap-6 p-6">

    <!-- زرار الفلتر للموبايل -->
    <div class="lg:hidden w-full mb-4 flex justify-center">
      <button
        @click="isOverlayOpen = true"
        class="bg-yellow-400 text-black font-bold px-4 py-2 rounded shadow w-full max-w-md"
      >
        Filter
      </button>
    </div>

    <!-- فلتر جانبي للشاشات الكبيرة -->
    <div class="hidden lg:block w-64 bg-white p-4 rounded shadow">
      <SideFilter
        :destinationdata="destinationdata"
        @update:filters="applyFilters"
        class="text-black p-6"
      />
    </div>

    <!-- قائمة المطاعم -->
    <div class="flex-1 flex flex-col gap-4">
      <div
        v-for="restaurant in paginatedRestaurants"
        :key="restaurant.id"
        class="flex items-center gap-4 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
      >
        <img
          :src="restaurant.image"
          :alt="restaurant.name"
          class="w-56 h-44 object-cover rounded-lg"
        />

        <div class="flex flex-col justify-between flex-1">
          <div>
            <h2 class="text-lg font-bold text-gray-800">{{ restaurant.name }}</h2>
            <p class="text-sm text-gray-500">
              <i class="fa-solid fa-location-dot"></i> {{ restaurant.governorate }}
            </p>
            <span class="text-green-600">{{ restaurant.priceRange }}</span>
          </div>

          <div class="mt-1 text-yellow-500 font-medium">
            <i class="fa-solid fa-star"></i> {{ restaurant.rating }}
            <span class="text-gray-500 text-sm">({{ restaurant.reviewsCount }} reviews)</span>
          </div>

          <div class="flex justify-between items-center mt-4">
            <div class="text-sm text-gray-500">
              <i class="fa-solid fa-utensils"></i> {{ restaurant.cuisine }}
            </div>
            <BaseButton @click="() => router.push(`/restaurants/${restaurant.slug}`)">
              Show Details
            </BaseButton>
          </div>
        </div>
      </div>

<div class="flex justify-center items-center flex-wrap gap-2 my-6">
  <PaginationComponent
    :currentPage="currentPage"
    :totalPages="totalPages"
    @page-changed="handlePageChange"
  />
</div>


    </div>
  </div>

  <!-- Overlay للموبايل -->
  <transition name="fade">
    <div
      v-if="isOverlayOpen"
      class="fixed inset-0 bg-gray-300 bg-opacity-50 z-50 flex justify-center mt-0 items-start pt-20 overflow-y-auto"
    >
      <div class="rounded-lg bg-white w-11/12 max-w-md p-6 shadow-lg mb-20">
        <SideFilter
          :destinationdata="destinationdata"
          @update:filters="updateTempFilters"
          :isMobile="true"
        />
        <div class="flex justify-end mt-4 space-x-2">
          <button @click="closeOverlay" class="px-4 py-2 bg-white border border-[#ffc30] text-[#ffc340] rounded hover:bg-yellow-700">
            Cancel
          </button>
          <button @click="applyOverlayFilters" class="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
            Apply
          </button>
        </div>
      </div>
    </div>
  </transition>

  <Footer/>
</template>
