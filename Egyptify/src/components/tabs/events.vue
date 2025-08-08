<!-- src/components/tabs/events.vue -->
<template>
  <div class="max-w-screen-xl mx-auto px-2">
    <!-- Filter Section -->
    <div class="bg-yellow-20 border border-gray-300 rounded-lg p-4 mx-4 mb-6 shadow">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">Filter</h2>
      <div class="flex flex-wrap gap-4 justify-center">
        

      <DropdownMenu
        :label="filterOptions.location?.label || 'Select Location'"
        :options="locationOptions"
        @select="filterOptions.location = $event"
      />

      <DropdownMenu
        :label="filterOptions.type?.label || 'Select Type'"
        :options="typeOptions"
        @select="filterOptions.type = $event"
      />

      <DropdownMenu
        :label="filterOptions.price?.label || 'Select Price'"
        :options="priceOptions"
        @select="filterOptions.price = $event"
      />
      </div>
    </div>

    <!-- Events Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-4">
      <CardComponent
        v-for="event in filteredEvents"
        :key="event.id"
        :image="event.image"
        :title="event.title"
        :description="event.description"
        :price="event.price"
        :type="event.type"
        :showButton="true"
        :buttonText="'Book Now'"
        :showHeart="true"
        button-text="Book Now"
        @book-now="$emit('book-now', event)"

      />
    </div>

    <!-- Booking Calendar -->
    <bookingCalendar
      v-if="showBooking"
      :selectedItem="selectedEvent"
      @confirm="handleBooking"
      @close="showBooking = false"
    />

    <!-- Checkout Section -->
    <Checkout
      v-if="bookingDetails"
      :title="selectedEvent.title"
      :date="bookingDetails.date"
      :people="bookingDetails.people"
      :notes="bookingDetails.notes"
      :price="selectedEvent.price"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DropdownMenu from '../../components/DropdownMenu.vue'
import CardComponent from '../../components/card.vue'
import bookingCalendar from '../../components/bookingCalendar.vue'
import bookingEventsJSON from '../../data/bookingEvents.json'


// State
const eventsData = ref(bookingEventsJSON.bookings)
const selectedEvent = ref(null)
const showBooking = ref(false)
const bookingDetails = ref(null)



const filterOptions = ref({
  location: { label: 'All Locations', value: '' },
  type: { label: 'All Types', value: '' },
  price: { label: 'All Prices', value: '' }
})




// Dropdown options
const locationOptions = [
  { label: 'All Locations', value: '' },
  ...Array.from(new Set(eventsData.value.map(event => event.location))).map(loc => ({
    label: loc,
    value: loc
  }))
]

const typeOptions = [
  { label: 'All Types', value: '' },
  ...Array.from(new Set(eventsData.value.map(event => event.type))).map(type => ({
    label: type,
    value: type
  }))
]

const priceOptions = [
  { label: 'All Prices', value: '' },
  { label: 'Less than 500 EGP', value: 'lt500' },
  { label: '500 - 1000 EGP', value: '500-1000' },
  { label: 'More than 1000 EGP', value: 'gt1000' }
]


// Filter logic

const filteredEvents = computed(() => {
  return eventsData.value.filter(event => {
    const matchLocation = !filterOptions.value.location.value || event.location === filterOptions.value.location.value
    const matchType = !filterOptions.value.type.value || event.type === filterOptions.value.type.value
    const matchPrice =
      !filterOptions.value.price.value ||
      (filterOptions.value.price.value === 'lt500' && event.price < 500) ||
      (filterOptions.value.price.value === '500-1000' && event.price >= 500 && event.price <= 1000) ||
      (filterOptions.value.price.value === 'gt1000' && event.price > 1000)

    return matchLocation && matchType && matchPrice
  })
})



// Booking actions
const handleBookNow = (event) => {
  selectedEvent.value = event
  showBooking.value = true
}

const handleBooking = (data) => {
  bookingDetails.value = data
  showBooking.value = false
}

import { defineEmits } from 'vue'

const emit = defineEmits(['book-now'])
</script>
