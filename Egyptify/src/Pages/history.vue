<script setup>
import { useBookingStore } from "../data/bookingstore";
import NavBarBlack from "../components/NavBar-Black.vue";
import foot from "../components/footer.vue"
const bookingStore = useBookingStore();
</script>

<template>
  <NavBarBlack />
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Booking History</h2>

    <div v-if="bookingStore.history.length === 0">
      <p class="text-gray-500">No bookings yet.</p>
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="booking in bookingStore.history"
        :key="booking.id"
        class="border p-4 rounded shadow"
      >
        <h3 class="text-lg font-semibold">{{ booking.title }}</h3>
        <p>Date: {{ booking.date }}</p>
        <p>Price: {{ booking.price }} EGP</p>
        <p>Status: <span class="text-green-600">{{ booking.status }}</span></p>
      </div>
    </div>
  </div>
  <foot/>
</template>