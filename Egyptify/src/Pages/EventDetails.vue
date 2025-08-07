<template>
  <div class="event-detail-page bg-white text-gray-800">
    <Navbar />

    <div class="container mx-auto px-4 py-6 pt-24">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 class="text-2xl font-semibold">{{ event.name }}</h1>
          <p class="text-gray-600 mt-1 flex items-center">
            <i class="fas fa-map-marker-alt mr-1"></i>
            {{ event.location }}
          </p>
          <p class="text-sm text-gray-500 mt-1">Over 500,000 people are expected to attend</p>
        </div>
        <div class="mt-4 md:mt-0 flex items-center gap-3">
          <button class="text-white bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500">Book Ticket</button>
          <i class="fas fa-heart text-xl text-gray-400 cursor-pointer"></i>
          <i class="fas fa-share-alt text-xl text-gray-400 cursor-pointer"></i>
        </div>
      </div>

      <!-- Top Image + Map -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <img :src="getImage(event.images[0])" alt="Main Event" class="w-full h-72 object-cover rounded-lg" />
        <iframe :src="event.mapEmbedUrl" class="w-full h-72 rounded-lg" loading="lazy"></iframe>
      </div>

      <!-- Image Carousel -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <img v-for="(img, index) in event.images.slice(1)" :key="index" :src="getImage(img)" class="h-32 object-cover rounded-lg w-full" />
      </div>

      <!-- Description -->
      <h2 class="text-xl font-semibold mb-2">Description</h2>
      <p class="text-gray-700 leading-relaxed mb-8">{{ event.description }}</p>

      <!-- Details + Form -->
      <div class="grid md:grid-cols-3 gap-10">
        <!-- Event Details -->
        <div class="md:col-span-2">
          <h3 class="text-lg font-semibold mb-3">Event Details</h3>
          <ul class="text-gray-700 space-y-2">
            <li><strong>📅 Date:</strong> {{ event.dateRange }}</li>
            <li><strong>🕒 Visiting Hours:</strong> {{ event.visitingHours }}</li>
            <li><strong>⏰ Extended Hours:</strong> {{ event.extendedHours }}</li>
            <li><strong>🎟️ Ticket:</strong> {{ event.ticketDetails }}</li>
            <li><strong>💳 Purchase Options:</strong> {{ event.ticketPurchaseInfo }}</li>
            <li><strong>🌐 Official Website:</strong>
              <a :href="event.website" class="text-blue-500 underline" target="_blank">{{ event.website }}</a>
            </li>
            <li><strong>🚌 Transportation Options:</strong>
              <ul class="list-disc list-inside mt-1 text-sm text-gray-600">
                <li v-for="(route, index) in event.transportation" :key="index">{{ route }}</li>
              </ul>
            </li>
            <li><strong>💡 Visitor Tips:</strong> {{ event.visitorTips }}</li>
          </ul>
        </div>

        <!-- Reservation Form -->
        <div class="border rounded-lg p-4 shadow-sm bg-white">
          <h3 class="text-lg font-semibold mb-4">Ticket Reservation Form</h3>
          <form @submit.prevent="submitForm" class="space-y-3">
            <input type="text" placeholder="Name" v-model="form.name" class="w-full border p-2 rounded" />
            <input type="tel" placeholder="Phone number" v-model="form.phone" class="w-full border p-2 rounded" />
            <input type="number" placeholder="Number of tickets" v-model="form.tickets" class="w-full border p-2 rounded" />
            <input type="date" v-model="form.date" class="w-full border p-2 rounded" />
            <input type="time" v-model="form.time" class="w-full border p-2 rounded" />
            <button type="submit" class="bg-yellow-400 text-white font-semibold w-full py-2 rounded hover:bg-yellow-500 transition">Book Ticket</button>
          </form>
        </div>
      </div>

      <!-- Visitor Reviews -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold mb-4">Visitors Reviews:</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(review, index) in event.reviews" :key="index" class="bg-gray-100 rounded-lg p-4 shadow-sm">
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold uppercase">
                {{ review.name.charAt(0) }}
              </div>
              <span class="ml-2 font-medium">{{ review.name }}</span>
            </div>
            <p class="text-sm text-gray-700 italic">"{{ review.text }}"</p>
            <a href="#" class="text-yellow-500 text-sm mt-2 inline-block">Read more</a>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/NavBar-Black.vue';
import Footer from '../components/footer.vue';

export default {
  components: { Navbar, Footer },
  data() {
    return {
      event: {},
      form: {
        name: '',
        phone: '',
        tickets: 1,
        date: '',
        time: '',
      },
    };
  },
  created() {
    const id = parseInt(this.$route.params.id);
    fetch('/events.json')
      .then(res => res.json())
      .then(data => {
        this.event = data.find(e => e.id === id);
      });
  },
  methods: {
    submitForm() {
      alert('Reservation submitted!');
    },
    getImage(imageName) {
      return `/events/${imageName}`;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
