<template>
  <div>
    <Navbar />

    <div v-if="event" class="max-w-6xl mx-auto px-4 py-10 space-y-10 text-black">
      <!-- Hero Section with Image and Map -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Event Image -->
        <img
          :src="event.image"
          alt="Event Image"
          class="w-full h-[400px] object-cover rounded-lg"
        />

        <!-- Google Map (iframe) -->
        <iframe
          :src="event.map"
          width="100%"
          height="400"
          style="border:0; border-radius: 0.5rem"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <!-- Description + Event Details + Booking Form -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Event Description -->
        <div class="md:col-span-2 space-y-6">
          <div>
            <h1 class="text-4xl font-bold">{{ event.title }}</h1>
            <p class="text-lg text-gray-600 mt-2">{{ event.description }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Date:</strong> {{ formatDate(event.date) }}</p>
              <p><strong>Location:</strong> {{ event.location }}</p>
              <p><strong>People Attending:</strong> {{ event.people }}</p>
              <p><strong>Type:</strong> {{ event.type }}</p>
              <p><strong>Price:</strong> {{ event.price }} EGP</p>
            </div>
            <div>
              <p><strong>Visit Times:</strong> {{ event.visitTimes }}</p>
              <p><strong>Transportation:</strong> {{ event.transportation }}</p>
              <p><strong>Tickets:</strong> {{ event.tickets }}</p>
            </div>
          </div>
        </div>

        <!-- Booking Form -->
        <div class="bg-gray-100 p-6 rounded-lg space-y-4 shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Book Your Spot</h2>
          <form @submit.prevent="bookEvent">
            <input type="text" placeholder="Your Name" class="w-full border px-4 py-2 rounded" required />
            <input type="email" placeholder="Email" class="w-full border px-4 py-2 rounded mt-3" required />
            <input type="number" placeholder="Number of People" class="w-full border px-4 py-2 rounded mt-3" required />
            <button
              type="submit"
              class="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded mt-4"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="space-y-6 mt-10">
        <h2 class="text-3xl font-semibold mb-4">Reviews</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(review, index) in event.reviews"
            :key="index"
            class="border rounded-lg p-4 bg-white shadow-sm"
          >
            <h3 class="text-xl font-bold mb-2">{{ review.name }}</h3>
            <p class="text-gray-600 italic mb-1">Rating: {{ review.rating }} ⭐</p>
            <p class="text-gray-700">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <p class="text-xl font-semibold">Event not found.</p>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import bookingEvents from '../data/bookingEvents.json'

const route = useRoute()
const eventId = route.params.id
const event = ref(null)

onMounted(() => {
  const allEvents = bookingEvents.bookings || []
  event.value = allEvents.find(e => e.id === eventId)
})

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateStr).toLocaleDateString(undefined, options)
}

function bookEvent() {
  alert("Your booking has been received! 🎉")
}
</script>
