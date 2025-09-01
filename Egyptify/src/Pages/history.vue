<script setup>
import { useBookingStore } from "../data/bookingstore";
import NavBarBlack from "../components/NavBar-Black.vue";
import foot from "../components/footer.vue";
const bookingStore = useBookingStore();
import { onMounted,ref } from "vue";
const showConfirmModal = ref(false); 
console.log(localStorage.getItem("bookingHistory"));

</script>
<template>

  <div class="p-6 mt-4 max-w-6xl mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Booking History</h2>
      <!-- زرار مسح الكل -->
      <button
        @click="showConfirmModal = true"
        class="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition"
      >
         Clear All
      </button>
    </div>

    <!-- ✅ المودال -->
    <div
      v-if="showConfirmModal"
      class="model fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        <h3 class="text-lg font-bold mb-4 text-gray-800">
          Are you sure you want to delete all bookings?
        </h3>
        <div class="flex justify-center gap-4">
          <button
            @click="bookingStore.clearHistory(); showConfirmModal = false"
            class="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-red-600 transition"
          >
            Yes, Delete
          </button>
          <button
            @click="showConfirmModal = false"
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <!-- لو مفيش حجوزات -->
    <div
      v-if="bookingStore.history.length === 0"
      class="h-64 flex items-center justify-center"
    >
      <p class="text-gray-400 text-lg">No bookings yet...</p>
    </div>
    <!-- لو فيه حجوزات -->
    <div v-else class="space-y-8">
      <div
        v-for="booking in bookingStore.history"
        :key="booking.id"
        class="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition p-6"
      >
        <!-- عنوان الحجز -->
        <div class="flex justify-between items-center border-b pb-3 mb-4">
          <h3 class="text-xl font-semibold text-gray-800">
            
            <span v-if="booking.trip?.title">Trip</span>
            <span v-else-if="booking.hotel?.name">Hotel</span>
            <span v-else-if="booking.restaurant?.name">Restaurant</span>
            <span v-else-if="booking.transportation?.type">Transportation</span>
            <span v-else-if="booking.event?.name">Event</span>
          </h3>
          <p class="text-sm text-gray-500">{{ booking.date }}</p>
        </div>
        <!-- ✅ تفاصيل الرحلة -->
        <div v-if="booking.trip?.title" class="space-y-4">
          <div class="relative">
            <img
              v-if="booking.trip.image"
              :src="booking.trip.image"
              alt="Trip Image"
              class="w-full h-52 object-cover rounded-xl shadow"
            />
            <span
              class="absolute top-3 right-3 bg-yellow-400 text-white text-sm font-bold px-2 py-1 rounded-lg shadow"
            >
              ⭐ {{ booking.trip.rate }}
            </span>
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">
             Place:  {{ booking.trip.title }}
            </h3>
            <p class="text-gray-600 mt-1">
              Category:
              <span
                class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs"
              >
                {{ booking.trip.description }}
              </span>
            </p>
            <p class="text-gray-900 font-semibold mt-2 text-lg">
             Price  {{ booking.trip.price }} <span class="text-sm">EGP</span>
            </p>
          </div>
        </div>
        <!-- ✅ الأنشطة -->
        <div v-if="booking.activities?.length" class="mt-6">
          <h3 class="text-lg font-bold mb-3 text-gray-800"> Activities</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="(activity, index) in booking.activities"
              :key="index"
              class="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-3"
            >
              <img
                :src="activity.image"
                alt="Activity Image"
                class="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h4 class="text-md font-semibold text-gray-800">
                {{ activity.name }}
              </h4>
              <p class="text-gray-500 text-sm">{{ activity.duration }}</p>
              <p class="text-gray-900 font-semibold mt-1">
                {{ activity.price }} EGP
              </p>
            </div>
          </div>
        </div>
        <!-- ✅ المطعم -->
        <div
          v-if="booking.restaurant?.name"
          class="bg-gray-50 p-5 my-6 rounded-xl shadow-inner border-l-4 border-yellow-400"
        >
          <div class="flex items-center gap-4">
            <img
              v-if="booking.restaurant.image"
              :src="booking.restaurant.image"
              alt="Restaurant Image"
              class="w-32 h-24 object-cover rounded-lg"
            />
            <div>
              <h3 class="text-lg font-bold text-gray-800">
                🍴 {{ booking.restaurant.name }}
              </h3>
              <p class="text-gray-600 text-sm">
                {{ booking.restaurant.address }}
              </p>
              <p class="text-yellow-900 text-sm">
                 {{ booking.restaurant.rating }} ⭐
              </p>
            </div>
          </div>
          <div
            v-if="booking.restaurant.reservation?.name"
            class="mt-4 bg-white p-4 rounded-lg shadow-sm"
          >
            <h4 class="font-semibold text-gray-800 mb-2">
              Reservation Details:
            </h4>
            <p><b>Name:</b> {{ booking.restaurant.reservation.name }}</p>
            <p><b>Phone:</b> {{ booking.restaurant.reservation.phone }}</p>
            <p><b>Guests:</b> {{ booking.restaurant.reservation.guests }}</p>
            <p><b>Date:</b> {{ booking.restaurant.reservation.date }}</p>
            <p><b>Time:</b> {{ booking.restaurant.reservation.time }}</p>
            <p v-if="booking.restaurant.reservation.comment">
              <b>Comment:</b> {{ booking.restaurant.reservation.comment }}
            </p>
          </div>
        </div>
        <!-- ✅ المواصلات -->
        <div
          v-if="booking.transportation?.type"
          class="bg-white p-5 my-6 rounded-xl shadow border-l-4 border-yellow-400"
        >
          <h3 class="text-lg font-bold text-gray-800 mb-2">
            🚖 {{ booking.transportation.type }}
          </h3>
          <p class="text-sm text-gray-600">
            From: {{ booking.transportation.from }}
          </p>
          <p class="text-sm text-gray-600">
            To: {{ booking.transportation.to }}
          </p>
          <p class="text-sm text-gray-600">
            {{ booking.transportation.date }} -
            {{ booking.transportation.time }}
          </p>
          <p class="font-semibold mt-2">
            Price: {{ booking.transportation.price }} EGP
          </p>
        </div>
        <!-- ✅ الفندق -->
        <div
          v-if="booking.hotel?.name"
          class="bg-white p-5 my-6 rounded-xl shadow border-l-4 border-yellow-400"
        >
          <h3 class="text-lg font-bold text-gray-800 mb-2">
             {{ booking.hotel.name }}
          </h3>
          <p class="text-yellow-500">⭐ {{ booking.hotel.rate }}</p>
          <p class="text-gray-600">{{ booking.hotel.address }}</p>
          <div
            v-if="booking.hotel.bookingDetails?.roomType"
            class="mt-3 bg-gray-50 p-4 rounded-lg"
          >
            <h4 class="font-semibold text-gray-800">Booking Details:</h4>
            <p>Room: {{ booking.hotel.bookingDetails.roomType }}</p>
            <p>Guests: {{ booking.hotel.bookingDetails.guests }}</p>
            <p>
              Check-in: {{ booking.hotel.bookingDetails.checkIn }} | Check-out:
              {{ booking.hotel.bookingDetails.checkOut }}
            </p>
            <p class="font-semibold">
              Price/Night: {{ booking.hotel.bookingDetails.price }} EGP
            </p>
            <p>Total: {{ booking.hotel.totalPrice }} EGP</p>
          </div>
        </div>
        <!-- ✅ الـ Event -->
        <div
          v-if="booking.event?.name"
          class="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <img
            :src="booking.event.image"
            alt="event image"
            class="w-full h-40 object-cover"
          />
          <div class="p-4 space-y-2">
            <h3 class="text-xl font-bold text-gray-800">
              {{ booking.event.name }}
            </h3>
            <p class="text-gray-600">
              <span class="font-medium">Date:</span> {{ booking.event.date }}
            </p>
            <p class="text-gray-600">
              <span class="font-medium">Location:</span>
              {{ booking.event.location }}
            </p>
            <p v-if="booking.event.type" class="text-gray-600">
              <span class="font-medium">Type:</span> {{ booking.event.type }}
            </p>
            <p class="text-gray-800 font-semibold text-lg">
               Price: {{ booking.event.price }} EGP
            </p>
            <p>
              <span class="font-medium">Guests:</span>
              {{ booking.event.people }}
            </p>
               <p class="text-gray-800 font-semibold text-lg">
              Total Price: {{ booking.event.totalPrice }} EGP
            </p>
          </div>
        </div>

        <!-- ✅ الحالة -->
        <div class="pt-4 border-t mt-4 flex justify-between items-center">
          <p class="text-sm">
            Status:
            <span
              :class="
                booking.status === 'Confirmed'
                  ? 'text-green-600 font-bold'
                  : 'text-red-500 font-bold'
              "
            >
              {{ booking.status }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
.model{
  background-color: rgba(164, 165, 165, 0.384);
}
</style>