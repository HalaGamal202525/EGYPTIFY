<script setup>
import { useBookingStore } from "../data/bookingstore";
import NavBarBlack from "../components/NavBar-Black.vue";
import foot from "../components/footer.vue";
const bookingStore = useBookingStore();
import { useCardStore } from "../data/store";
import { useHotelStore } from "../data/storehotel";
import { useReservationStore } from "../data/Storeresturant";
import { useTransportationStore } from "../data/storetransport";
import { useGuestStore } from "../data/storeguset";

const guestStore = useGuestStore();
const transportationStore = useTransportationStore();
const reservationStore = useReservationStore();
const cardStore = useCardStore(); // ✅ نستخدمه هنا
const hotelStore = useHotelStore();
</script>

<template>
  <NavBarBlack/>
  <div class="p-6 mt-4">
    <h2 class="text-2xl font-bold mb-4">Booking History</h2>

    <div v-if="bookingStore.history.length === 0" class="h-68">
      <p class="text-gray-500">No bookings yet.</p>
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="booking in bookingStore.history"
        :key="booking.id"
        class="border border-gray-300 p-4 rounded shadow"
      >
        <h3 class="text-lg font-semibold">{{ booking.title }}</h3>
        <p>Date: {{ booking.date }}</p>

        <!-- ✅ تفاصيل الرحلة -->
        <div
          v-if="booking.trip?.title"
          class="bg-white p-6 rounded-2xl shadow-lg"
        >
          <!-- صورة الرحلة -->
          <div class="relative">
            <img
              v-if="booking.trip.image"
              :src="booking.trip.image"
              alt="Trip Image"
              class="w-full h-48 object-cover rounded-xl shadow-sm hover:scale-105 transition-transform"
            />
            <!-- ⭐ التقييم -->
            <span
              class="absolute top-3 right-3 bg-yellow-400 text-white text-sm font-bold px-2 py-1 rounded-lg shadow"
            >
              ⭐ {{ booking.trip.rate }}
            </span>
          </div>

          <!-- تفاصيل الرحلة -->
          <div class="mt-4">
            <h3 class="text-xl font-bold text-gray-800 flex items-center gap-2">
              🗺️ {{ booking.trip.title }}
            </h3>
            <p class="text-gray-600 mt-1">
              Category:
              <span
                class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-sm"
              >
                {{ booking.trip.description }}
              </span>
            </p>
            <p class="text-gray-900 font-semibold mt-2 text-lg">
              💰 {{ booking.trip.price }} <span class="text-sm">EGP</span>
            </p>
          </div>

          <!-- ✅ الأنشطة -->
          <div v-if="booking.activities?.length" class="mt-6">
            <h3 class="text-lg font-bold mb-3">🎯 Activities:</h3>
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
        </div>

        <!-- ✅ المطعم -->
        <div
          v-if="booking.restaurant?.name"
          class="bg-white p-6 my-6 rounded-2xl shadow-lg border-t-4 border-[#ffc340]"
        >
          <img
            v-if="booking.restaurant.image"
            :src="booking.restaurant.image"
            alt="Restaurant Image"
            class="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 class="text-lg font-bold text-gray-800">
            🍴 Restaurant: {{ booking.restaurant.name }}
          </h3>
          <p class="text-gray-600">{{ booking.restaurant.address }}</p>
          <p class="text-gray-600">⭐ {{ booking.restaurant.rate }}</p>
          <p v-if="booking.restaurant.description" class="text-gray-600 mt-2">
            {{ booking.restaurant.description }}
          </p>

          <div
            v-if="booking.restaurant.reservation?.name"
            class="mt-4 p-4 bg-gray-50 rounded-lg"
          >
            <h4 class="font-semibold text-gray-800">Reservation Details:</h4>
            <p>Name: {{ booking.restaurant.reservation.name }}</p>
            <p>Phone: {{ booking.restaurant.reservation.phone }}</p>
            <p>Guests: {{ booking.restaurant.reservation.guests }}</p>
            <p>Date: {{ booking.restaurant.reservation.date }}</p>
            <p>Time: {{ booking.restaurant.reservation.time }}</p>
            <p v-if="booking.restaurant.reservation.comment">
              Comment: {{ booking.restaurant.reservation.comment }}
            </p>

            <div v-if="booking.restaurant.orders?.length" class="mt-3">
              <h4 class="font-semibold">Your Orders:</h4>
              <ul class="list-disc list-inside text-gray-700">
                <li v-for="(order, i) in booking.restaurant.orders" :key="i">
                  {{ order.name }} - {{ order.price }} EGP
                </li>
              </ul>
              <p class="mt-2 font-bold">
                Total: {{ booking.restaurant.totalPrice }} EGP
              </p>
            </div>
          </div>
        </div>

        <!-- ✅ المواصلات -->
        <div
          v-if="booking.transportation?.type"
          class="bg-white p-6 my-6 rounded-2xl shadow-lg border-t-4 border-[#ffc340]"
        >
          <h3 class="text-lg font-bold text-gray-800">
            🚖 Transportation: {{ booking.transportation.type }}
          </h3>
          <p class="text-gray-600">From: {{ booking.transportation.from }}</p>
          <p class="text-gray-600">To: {{ booking.transportation.to }}</p>
          <p class="text-gray-600">Date: {{ booking.transportation.date }}</p>
          <p class="text-gray-600">Time: {{ booking.transportation.time }}</p>
          <p class="font-semibold mt-2">
            Price: {{ booking.transportation.price }} EGP
          </p>
        </div>

        <!-- ✅ الفندق -->
        <div
          v-if="booking.hotel?.name"
          class="bg-white p-6 my-6 rounded-2xl shadow-lg border-t-4 border-[#ffc340]"
        >
          <h3 class="text-lg font-bold text-gray-800">
            Hotel: {{ booking.hotel.name }}
          </h3>
          <p class="text-gray-600">⭐ {{ booking.hotel.rate }}</p>
          <p class="text-gray-600">{{ booking.hotel.address }}</p>
          <p v-if="booking.hotel.description" class="text-gray-600 mt-2">
            {{ booking.hotel.description }}
          </p>

          <div
            v-if="booking.hotel.bookingDetails?.roomType"
            class="mt-4 p-4 bg-gray-50 rounded-lg"
          >
            <h4 class="font-semibold text-gray-800">Booking Details:</h4>
            <p>Room Type: {{ booking.hotel.bookingDetails.roomType }}</p>
            <p>Guests: {{ booking.hotel.bookingDetails.guests }}</p>
            <p>Check-in: {{ booking.hotel.bookingDetails.checkIn }}</p>
            <p>Check-out: {{ booking.hotel.bookingDetails.checkOut }}</p>
            <p class="font-semibold">
              Price/Night: {{ booking.hotel.bookingDetails.price }} EGP
            </p>
            <img
              v-if="booking.hotel.bookingDetails.roomImage"
              :src="booking.hotel.bookingDetails.roomImage"
              alt="Room Image"
              class="w-full h-32 object-cover rounded-lg mt-3"
            />
            <p>Num of Night: {{ booking.hotel.totalNights }}</p>
            <p>Total: {{ booking.hotel.totalPrice }} EGP</p>
          </div>
        </div>

        <p class="mt-4">
          Status: <span class="text-green-600">{{ booking.status }}</span>
        </p>
      </div>
    </div>
  </div>
  <foot/>
</template>
