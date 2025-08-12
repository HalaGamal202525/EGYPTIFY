<script setup>
import { ref, computed } from 'vue'
import { generateEgyptGovernorates } from '../data/fakedata'
import Navbar from "../components/navbar.vue"
import Footer from '../components/footer.vue'
import RestaurantFilter from './Resturantfilter.vue'
import PaginationComponent from "../components/PaginationComponent.vue"
import BaseButton from '../components/BaseButton.vue'

// عدد العناصر في الصفحة
const itemsPerPage = 4

// كل المطاعم
const allRestaurants = ref(generateEgyptGovernorates(50))

// الفلاتر المختارة
const appliedFilters = ref({
  governorate: [],
  rating: [],
  cuisine: []
})

// الصفحة الحالية
const currentPage = ref(1)

// فلترة البيانات
const filteredRestaurants = computed(() => {
  return allRestaurants.value.filter(r => {
    const matchGov = appliedFilters.value.governorate.length === 0 || appliedFilters.value.governorate.includes(r.governorate)
    const matchRate = appliedFilters.value.rating.length === 0 || appliedFilters.value.rating.some(rate => r.rating >= rate)
    const matchCuisine = appliedFilters.value.cuisine.length === 0 || appliedFilters.value.cuisine.includes(r.cuisine)
    return matchGov && matchRate && matchCuisine
  })
})

// عدد الصفحات
const totalPages = computed(() => {
  return Math.ceil(filteredRestaurants.value.length / itemsPerPage)
})

// البيانات المقسّمة للصفحة الحالية
const paginatedRestaurants = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredRestaurants.value.slice(start, start + itemsPerPage)
})

// تغيير الصفحة
const handlePageChange = (page) => {
  currentPage.value = page
}
</script>

<template>
  <Navbar/>

  <div
    class="relative h-64 md:h-125 bg-cover bg-center"
    style="background-image: url('/unsplashfood/hero19.jpg')"
  >
    <h1
      class="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold"
    >
      Restaurant
    </h1>
  </div>

  <div class="flex gap-6 p-6">
    <RestaurantFilter 
      :restaurants="allRestaurants" 
      @update:filters="appliedFilters = $event"
      class="bg-gray-200 rounded-lg border border-gray-300 p-6 shadow-lg w-full lg:w-64"
    />

    <div class="flex flex-col gap-4 flex-1">
      <div 
        v-for="restaurant in paginatedRestaurants" 
        :key="restaurant.id" 
        class="flex items-center gap-4 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
      >
        <img 
          :src="restaurant.image" 
          :alt="restaurant.name" 
          class="w-58 h-44 object-cover rounded-lg"
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

          <!-- <div class="text-sm text-gray-600">
            <p class="text-sm text-gray-500">
              <i class="fa-solid fa-utensils"></i> {{ restaurant.cuisine }}
            </p>
          </div>
<BaseButton @click="$router.push(`/restaurants/${restaurant.slug}`)" class="mt-4">
  Show Details
</BaseButton>
        </div> -->
        <div class="flex justify-between items-center mt-4">
  <div class="text-sm text-gray-500">
    <i class="fa-solid fa-utensils"></i> {{ restaurant.cuisine }}
  </div>
  <BaseButton @click="$router.push(`/restaurants/${restaurant.slug}`)">
    Show Details
  </BaseButton>
</div>
</div>
      </div>

      <div class="flex justify-center my-6">
        <PaginationComponent
          :currentPage="currentPage"
          :totalPages="totalPages"
          @page-changed="handlePageChange"
        />
      </div>
    </div>
  </div>

  <Footer/>
</template>
