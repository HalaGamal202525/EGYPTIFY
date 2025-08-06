<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <Hero
      title="Explore Egypt's Event"
      description="Experience the magic of ancient and modern Egypt and Explore monthly & annual events across Egypt"
      :image="heroImage"
    />

    <!-- Month Navigation -->
    <section class="text-center py-6 bg-gray-100">
  <div class="flex justify-center items-center gap-100">
    <div @click="prevMonth">
      <ButtonComponent>< Previous</ButtonComponent>
    </div>

    <h2 class="text-2xl font-semibold mx-8">{{ currentMonthYear }}</h2>

    <div @click="nextMonth">
      <ButtonComponent>Next > </ButtonComponent>
    </div>
  </div>
</section>


    <!-- Filters -->
    <section class="bg-white shadow p-4 my-4 max-w-6xl mx-auto rounded-lg">
      <div class="flex flex-wrap justify-center gap-4">
        <DropdownComponent
  :label="filters.city?.label || 'All Cities'"
  :options="cityOptions"
  @select="(val) => filters.city = val.value"
/>

<DropdownComponent
  :label="filters.type?.label || 'All Types'"
  :options="typeOptions"
  @select="(val) => filters.type = val.value"
/>


    <div
  @click="viewMode = 'annual'"
  :class="viewMode === 'annual' ? 'ring-2 ring-yellow-500 rounded-[16px] scale-100' : 'opacity-90'"
>
  <ButtonComponent>Annual</ButtonComponent>
</div>

<div
  @click="viewMode = 'monthly'"
  :class="viewMode === 'monthly' ? 'ring-2 ring-yellow-500 rounded-[16px] scale-100' : 'opacity-90'"
>
  <ButtonComponent>Monthly</ButtonComponent>
</div>

      </div>
    </section>


    
    <!-- Event Cards -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto">
      <CardComponent
        v-for="event in filteredEvents"
        :key="event.id"
        :image="event.image"
        :type="event.type"
        :title="event.title"
        :description="event.description"
        :date="event.date"
        :location="event.location"
        :showButton="true"
        :buttonText="'Book Now'"
        :showHeart="true"
      />
    </section>




    <!-- Footer -->
    <Footer />
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import Navbar from '../components/navbar.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/footer.vue'
import DropdownComponent from '../components/DropdownMenu.vue'
import CardComponent from '../components/card.vue'
import heroImage from '../assets/eventCalendar.jpg'
import bookingEvents from '../data/bookingEvents.json'
import ButtonComponent from '../components/BaseButton.vue'


const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const today = new Date()
const currentMonthIndex = ref(today.getMonth())
const currentYear = ref(today.getFullYear())

const filters = ref({
  city: '',
  type: '',
})

const viewMode = ref('monthly')
const events = ref(bookingEvents.bookings || [])



const currentMonthYear = computed(() => {
  return `${months[currentMonthIndex.value]} ${currentYear.value}`
})

const filteredEvents = computed(() => {
  return events.value.filter((event) => {
    const eventDate = new Date(event.date)
    const isMonthMatch =
      viewMode.value === 'monthly'
        ? eventDate.getMonth() === currentMonthIndex.value && eventDate.getFullYear() === currentYear.value
        : eventDate.getFullYear() === currentYear.value

    const cityMatch = !filters.value.city?.value || event.city === filters.value.city.value
    const typeMatch = !filters.value.type?.value || event.type === filters.value.type.value

    return isMonthMatch && cityMatch && typeMatch
  })
})


function nextMonth() {
  if (currentMonthIndex.value === 11) {
    currentMonthIndex.value = 0
    currentYear.value++
  } else {
    currentMonthIndex.value++
  }
}

function prevMonth() {
  if (currentMonthIndex.value === 0) {
    currentMonthIndex.value = 11
    currentYear.value--
  } else {
    currentMonthIndex.value--
  }
}

const cityOptions = [
  { label: 'All Cities', value: '' },
  { label: 'Cairo', value: 'Cairo' },
  { label: 'Alexandria', value: 'Alexandria' },
  { label: 'Luxor', value: 'Luxor' },
  { label: 'Aswan', value: 'Aswan' }
]

const typeOptions = [
  { label: 'All types', value: '' },
  { label: 'Culture', value: 'Culture' },
  { label: 'Music', value: 'Music' },
  { label: 'Sports', value: 'Sports' }
]





</script>
<style scoped>

</style>
