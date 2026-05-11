<template>
   <div class="max-w-screen-xl mx-auto px-2">
    <!-- Filter Section -->
      <div class="bg-yellow-20 border border-gray-300 rounded-lg p-4 mx-4 mb-6 shadow">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">Filter</h2>
      <div class="flex justify-center flex-wrap gap-4">      
        <DropdownMenu
      :label="selectedPrice?.label || 'All Prices'"
        :options="priceOptions"
      @select="selectedPrice = $event"
      />
      <DropdownMenu
      :label="selectedCity?.label || 'All Cities'"
        :options="cityOptions"
      @select="selectedCity = $event"
      />
      <DropdownMenu
      :label="selectedRating?.label || 'All Ratings'"
        :options="ratingOptions"
      @select="selectedRating = $event"
      />
     </div>
    </div> 



   <!-- Hotels Cards Section        @book-now="$emit('book-now', hotel)"
 -->
   <section class="grid sm-grid-cols-1 md:grid-cols-4 gap-6 p-8">
    <CardComponent
      v-for="hotel in filteredHotels"
      :key="hotel.id"
      :image="hotel.image"
      :title="hotel.title"
      :description="hotel.description"
      :location="hotel.location"
      :price="hotel.price"
      :rating="hotel.rating"
      :showButton="true"
      :buttonText="'Book Now'"
      :showHeart="true"
      :onClick="() => $router.push('/bookingprocess')"

    />
    </section> 

    <bookingCalendar
  v-if="showBooking"
  :selectedHotel="selectedHotel"
  @confirm="handleBooking"
  @close="showBooking = false"

/>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DropdownMenu from '../../components/DropdownMenu.vue'
import CardComponent from '../../components/card.vue'
import hotelsDataJSON from '../../data/bookingHotels.json'
const hotelsData = ref(hotelsDataJSON.bookings)

import bookingCalendar from '../../components/bookingCalendar.vue'

// const selectedHotel = ref(null)
const showBooking = ref(false)
const bookingDetails = ref(null)

const openBooking = (hotel) => {
  selectedHotel.value = hotel
  showBooking.value = true
}

const handleBooking = (data) => {
  bookingDetails.value = data
}

const selectedCity = ref('')
const selectedPrice = ref('')
const selectedRating = ref('')

const priceOptions = [
  { label: 'All Prices', value: '' },
  { label: 'Less than 5000', value: 'below5000' },
  { label: '5000 - 15000', value: 'between' },
  { label: 'More than 15000', value: 'above15000' }
]

const cityOptions = [
  { label: 'All Cities', value: '' },
  { label: 'Cairo', value: 'Cairo' },
  { label: 'Giza', value: 'Giza' },
  { label: 'Alexandria', value: 'Alexandria' },
  { label: 'Luxor', value: 'Luxor' },
  { label: 'Aswan', value: 'Aswan' },
  { label: 'Sharm El Sheikh', value: 'Sharm El Sheikh' },
  { label: 'Hurghada', value: 'Hurghada' },
  { label: 'El Gouna', value: 'El Gouna' },
]

const ratingOptions = [
  { label: 'All Ratings', value: '' },
  { label: '3+ Stars', value: 3 },
  { label: '4+ Stars', value: 4 },
  { label: '4.5+ Stars', value: 4.5 },
  { label: '5 Stars', value: 5 }
]


const filteredHotels = computed(() => {
  return hotelsData.value.filter(hotel => {
    const city = selectedCity.value?.value || '';
    const rating = selectedRating.value?.value;
    const price = selectedPrice.value?.value;

    const cityMatch = !city || hotel.location.toLowerCase().includes(city.toLowerCase());

    const ratingMatch = !rating || hotel.rating >= rating;

    const priceMatch =
      !price ||
      (price === 'below5000' && hotel.price < 5000) ||
      (price === 'between' && hotel.price >= 5000 && hotel.price <= 15000) ||
      (price === 'above15000' && hotel.price > 15000);

    return cityMatch && ratingMatch && priceMatch;
  });
});


import { defineEmits } from 'vue'

const emit = defineEmits(['book-now'])





</script>
