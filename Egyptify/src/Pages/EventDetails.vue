<template>
  <div>
    <Navbar />

    <div
      v-if="event"
      class="max-w-6xl mx-auto px-4 py-10 text-black space-y-8 mt-20"
    >
      <!-- Hero Image + Map Side by Side -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Image Box -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img
            :src="event.image"
            alt="Event"
            class="w-full h-[300px] object-cover"
          />
        </div>

        <!-- Map Box -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <iframe
            :src="event.map_embed_url"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Basic Info -->
      <div class="space-y-2">
        <h1 class="text-4xl font-bold">{{ event.title }}</h1>
        <p class="text-lg text-gray-700 flex items-center gap-2">
          📅 {{ event.date }} | 🗺️ {{ event.location }} | 🎭 {{ event.type }}
        </p>
        <p class="text-lg text-gray-600 flex items-center gap-2">
          👥 People: {{ event.people }} | 💰 Price: {{ event.price }} EGP
        </p>
      </div>

      <!-- Description -->
      <div>
        <h2 class="text-2xl font-semibold mb-2">📝 Description</h2>
        <p>{{ event.description }}</p>
      </div>

      <!-- Visit Hours -->
      <div>
        <h2 class="text-2xl font-semibold mb-2">🕒 Visit Hours</h2>
        <p>{{ event.visit_hours }}</p>
      </div>

      <!-- Ticket Info -->
      <div>
        <h2 class="text-2xl font-semibold mb-2">🎫 Ticket Purchase Info</h2>
        <p>{{ event.ticket_purchase_info }}</p>
      </div>

      <!-- Transportation Info -->
      <div>
        <h2 class="text-2xl font-semibold mb-2">🚍 Transportation Info</h2>
        <p>{{ event.transportation_info }}</p>
      </div>

      <!-- External Links -->
      <div class="space-y-2">
        <h2 class="text-2xl font-semibold">🔗 Useful Links</h2>
        <p>
          <a
            :href="event.event_website"
            target="_blank"
            class="text-blue-600 underline"
            >Event Website</a
          >
        </p>
        <p>
          <a
            :href="event.map_url"
            target="_blank"
            class="text-blue-600 underline"
            >View on Map</a
          >
        </p>
      </div>
<div class="mt-6">
  <BookButton>
    Book Ticket Now
  </BookButton>
</div>
      <!-- Reviews -->
<div v-if="event.reviews && event.reviews.length">
  <h2 class="text-2xl font-semibold mb-4">💬 Reviews</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 h-">
    <div
      v-for="(review, index) in event.reviews"
      :key="index"
      class="bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-sm flex items-start gap-4"
    >
      <div class="text-2xl mt-1">💬</div>
      <p class="text-base">{{ review }}</p>
    </div>
  </div>
</div>

    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/NavBar-Black.vue'
import Footer from '../components/footer.vue'
import bookingEvents from '../data/bookingEvents.json'
import BookButton from '../components/BaseButton.vue'
const route = useRoute()
const eventId = route.params.id

const event = ref(null)

onMounted(() => {
  event.value = bookingEvents.bookings.find(e => e.id === eventId)
})
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
