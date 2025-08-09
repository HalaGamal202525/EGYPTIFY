<!-- src/components/tabs/restaurants.vue -->
<template>
  <div class="max-w-screen-xl mx-auto px-2">
    <!-- Filter Section -->
    <div class="bg-white border border-gray-300 rounded-lg p-4 mx-4 mb-6 shadow">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">Filter</h2>
      <div class="flex justify-center flex-wrap gap-4">
        <DropdownMenu 
        :label="filters.price?.label || 'All Prices'"   
        :options="priceOptions"    
        @select="filters.price = $event" />

        <DropdownMenu 
        :label="filters.cuisine?.label || 'All Cuisines'"   
        :options="cuisineOptions"         
        @select="filters.cuisine = $event" />

        <DropdownMenu 
        :label="filters.location?.label || 'All Locations'"   
        :options="locationOptions"   
        @select="filters.location = $event" />
      </div>
    </div>

    <!-- Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
      <CardComponent
        v-for="restaurant in filteredRestaurants"
        :key="restaurant.id"
        :title="restaurant.name"
        :kind="restaurant.cuisine"
        :location="restaurant.location"
        :price="restaurant.price"
        :image="restaurant.image"
        :rating="restaurant.rating"
        :showHeart="true"
        :showButton="true"
        :buttonText="'Book Now'"
        :onClick="() => $router.push('/bookingprocess')"

      />
    </div>



  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import restaurantsData from '../../data/bookingRestaurants.json'
import DropdownMenu from '../../components/DropdownMenu.vue'
import CardComponent from '../../components/card.vue'

const filters = ref({
  price: '',
  cuisine: '',
  location: ''
})

const allRestaurants = ref([])

onMounted(() => {
  allRestaurants.value = restaurantsData.bookings
})

// Format options to use { label, value }
const priceOptions = [
  { label: 'All Prices', value: [0, Infinity] },
  { label: 'Less than 100 EGP', value: [0, 100] },
  { label: '100 - 500 EGP', value: [100, 500] },
  { label: '500 - 1000 EGP', value: [500, 1000] },
  { label: 'More than 1000 EGP', value: [1000, Infinity] }
];



const cuisineOptions = computed(() => {
  return [
    { label: 'All Cuisines', value: '' },
    ...Array.from(new Set(allRestaurants.value.map(r => r.cuisine))).map(cuisine => ({
      label: cuisine,
      value: cuisine
    }))
  ]
})

const locationOptions = computed(() => {
  return [
    { label: 'All Locations', value: '' },
    ...Array.from(new Set(allRestaurants.value.map(r => r.location))).map(location => ({
      label: location,
      value: location
    }))
  ]
})


const filteredRestaurants = computed(() => {
  return allRestaurants.value.filter(r => {
    // 1. فلتر السعر
    const selectedPriceRange = filters.value.price?.value; // ده Array زي [100, 500]

    const [minPrice, maxPrice] = r.price
      .split(/[-–]/)
      .map(p => parseInt(p.trim()));

    const actualMax = maxPrice || minPrice;

    const matchesPrice = !selectedPriceRange
      ? true
      : actualMax >= selectedPriceRange[0] && minPrice <= selectedPriceRange[1];

    // 2. فلتر نوع الأكل (cuisine)
    const matchesCuisine = filters.value.cuisine?.value
      ? r.cuisine === filters.value.cuisine.value
      : true;

    // 3. فلتر الموقع (location)
    const matchesLocation = filters.value.location?.value
      ? r.location === filters.value.location.value
      : true;

    return matchesPrice && matchesCuisine && matchesLocation;
  });
});



const handleBookNow = (restaurant) => {
  alert(`You booked a table at ${restaurant.name} located in ${restaurant.location}`)
}

import { defineEmits } from 'vue'

const emit = defineEmits(['book-now'])

</script>

<style scoped>
/* optional styles */
</style>
