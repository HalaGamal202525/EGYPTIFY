<!-- src/components/tabs/restaurants.vue -->
<template>
  <div class="max-w-screen-xl mx-auto px-2">
    <!-- Filter Section -->
    <div class="bg-white border border-gray-300 rounded-lg p-4 mx-4 mb-6 shadow">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">Filter</h2>
      <div class="flex justify-center flex-wrap gap-4">
        <DropdownMenu label="Price" :options="priceOptions"    @select="filters.price = $event.value" />
        <DropdownMenu label="Cuisine" :options="cuisineOptions"         @select="filters.cuisine = $event.value" />
        <DropdownMenu label="Location" :options="locationOptions"   @select="filters.location = $event.value" />
      </div>
    </div>
<!-- v-model="filters.location -->
    <!-- Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
      <CardComponent
        v-for="restaurant in filteredRestaurants"
        :key="restaurant.id"
        :title="restaurant.name"
        :description="restaurant.cuisine"
        :location="restaurant.location"
        :price="restaurant.price"
        :image="restaurant.image"
        :rating="restaurant.rating"
        :type="restaurant.cuisine"
        :showHeart="true"
        :showButton="true"
        :buttonText="'Book Now'"
        @book-now="$emit('book-now', restaurant)"

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
  { label: 'All Prices', value: '' },
  { label: '$', value: '$' },
  { label: '$$', value: '$$' },
  { label: '$$$', value: '$$$' },
  { label: '$$$$', value: '$$$$' }
]

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
    const matchesPrice = filters.value.price ? r.price === filters.value.price : true
    const matchesCuisine = filters.value.cuisine ? r.cuisine === filters.value.cuisine : true
    const matchesLocation = filters.value.location ? r.location === filters.value.location : true
    return matchesPrice && matchesCuisine && matchesLocation
  })
})



const handleBookNow = (restaurant) => {
  alert(`You booked a table at ${restaurant.name} located in ${restaurant.location}`)
}



import { defineEmits } from 'vue'

const emit = defineEmits(['book-now'])

</script>

<style scoped>
/* optional styles */
</style>
