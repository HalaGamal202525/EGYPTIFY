<template> 
   <NavBarBlack/>
    <div class="pt-20"> 
      <div
      v-if="event"
      class="max-w-6xl mx-auto px-4 py-10 text-black space-y-8"
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
  :src="`https://www.google.com/maps?q=${encodeURIComponent(event.location)}&output=embed`"
  width="100%"
  height="300"
  style="border: 0"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>

        </div>
      </div>

      <!-- Basic Info -->
      <div class="space-y-2">
        <h1 class="text-3xl font-bold">{{ event.title }}</h1>
        <p class="text-lg text-gray-700 flex items-center gap-2">
          <i class="fa-solid fa-calendar"></i> {{ event.date }} | <i class="fa-solid fa-map-location"></i> {{ event.location }} | <i class="fa-solid fa-masks-theater"></i> {{ event.type }}
        </p>
        <p class="text-lg text-gray-600 flex items-center gap-2">
          <i class="fa-solid fa-user-group"></i> People: {{ event.people }} | <i class="fa-solid fa-money-bill-1-wave"></i> Price: {{ event.price }} EGP
        </p>
      </div>

      <!-- Description -->
      <div>
        <h2 class="text-xl font-semibold mb-2"><i class="fa-light fa-book-open-lines"></i> Description</h2>
        <p>{{ event.description }}</p>
      </div>

      <!-- Visit Hours -->
      <div>
        <h2 class="text-xl font-semibold mb-2 text-yellow-400"><i class="fa-solid fa-clock"></i> Visit Hours</h2>
        <p>{{ event.visit_hours }}</p>
      </div>

      <!-- Ticket Info -->
      <div>
        <h2 class="text-xl font-semibold mb-2"><i class="fa-solid fa-ticket"></i> Ticket Purchase Info</h2>
        <p>{{ event.ticket_purchase_info }}</p>
      </div>

      <!-- Transportation Info -->
      <div>
        <h2 class="text-xl font-semibold mb-2"><i class="fa-solid fa-car"></i> Transportation Info</h2>
        <p>{{ event.transportation_info }}</p>
      </div>

      <!-- External Links -->
      <div class="space-y-2">
        <h2 class="text-xl font-semibold"><i class="fa-solid fa-link"></i> Useful Links</h2>
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
  <BookButton @click="bookNow" >
    Book Ticket Now
  </BookButton>
</div>
      <!-- Reviews -->
<div v-if="event.reviews && event.reviews.length">
  <h2 class="text-xl font-semibold mb-4"><i class="fa-solid fa-comment"></i> Reviews</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 h-">
    <div
      v-for="(review, index) in event.reviews"
      :key="index"
      class="bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-sm flex items-start gap-4"
    >
      <div class="text-xl mt-1"><i class="fa-solid fa-comment"></i></div>
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
import { useRoute ,useRouter} from 'vue-router'
import NavBarBlack from '../components/NavBar-Black.vue'
import Footer from '../components/footer.vue'
import bookingEvents from '../data/bookingEvents.json'
import BookButton from '../components/BaseButton.vue'
const route = useRoute()
const router = useRouter()

const eventId = route.params.id

const event = ref(null)
import { useCardStore } from '../data/store.js'
const bookingStore = useCardStore()

function bookNow() {
  if (!event.value) return;

  bookingStore.setCardData({
    image: event.value.image,
    title: event.value.title,
    rate: event.value.date,
    price: event.value.price,
  });

  router.push('/form');
}


onMounted(() => {
  event.value = bookingEvents.bookings.find(e => e.id === eventId)
})
</script>

<style scoped>
  h2{
    color: var(--color-yellow-500);
  }
</style>
