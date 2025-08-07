<template>
  <div class="max-w-screen-xl mx-auto px-2">
    <!-- Filter Section -->
    <div
      class="bg-yellow-20 border border-gray-300 rounded-lg p-4 mx-4 mb-6 shadow"
    >
      <h2 class="text-lg font-semibold mb-4 text-gray-700">Filter</h2>
      <div class="flex justify-center flex-wrap gap-4">
        <!-- From Dropdown -->
        <DropdownMenu
          label="From"
          :options="cityOptions"
          @select="(item) => (selectedFrom = item.value)"
        />

        <!-- To Dropdown -->
        <DropdownMenu
          label="To"
          :options="cityOptions"
          @select="(item) => (selectedTo = item.value)"
        />

        <!-- Travel Date -->
        <input
          type="date"
          v-model="selectedDate"
          class="px-4 py-2 border border-[#FFC340] rounded-md shadow-sm text-gray-700 focus:outline-none"
        />

        <!-- Type Dropdown -->
        <DropdownMenu
          label="Type"
          :options="typeOptions"
          @select="(item) => (selectedType = item.value)"
        />

        <!-- Search Button -->
        <button
          @click="handleSearch"
          class="bg-[#FFC340] hover:bg-yellow-400 text-white px-6 py-2 rounded-md shadow font-semibold"
        >
          Search
        </button>
      </div>
    </div>

    <!-- Transportation Cards -->
    <section
      class="grid grid-cols-1 gap-4 px-4 pb-10"
      style="grid-template-columns: repeat(3, minmax(350px, 1fr)) "
    >
      <CardComponent
        v-for="item in filteredTransportation"
        :key="item.id"
        :title="`${item.provider}  |  ${item.type}`"
        :kind="item.kind"
        :amenities="item.amenities"
        :price="item.price"        
        :features="item.features"
        :icon="item.icon"
        :showButton="true"
        :buttonText="'Book Now'"
        :showHeart="true"
        :showImage="false"
        :departure="item.type === 'Car' ? 'Departure: Upon request' : `${item.departure}`"
        :arrival="item.type === 'Car' ? 'Arrival: Upon request' : `${item.arrival}`"
        :duration="item.type === 'Car' ? 'Duration: Based on distance' : `${item.duration}`"
        :location="
          item.type === 'Car'
            ? 'From: Flexible → To: As requested'
            : `From: ${item.from} → To: ${item.to}` "
        
        @book-now="$emit('book-now', item)"
          class="!w-full space-y-4"
      />
    </section>


    <!-- Booking Calendar -->
    <BookingCalendar
      v-if="showBooking"
      :selectedItem="selectedTransport"
      @confirm="handleBooking"
    />

    <!-- Checkout Section -->
    <div
      v-if="bookingDetails"
      class="bg-white border mt-6 p-4 rounded-lg shadow"
    >
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Checkout</h3>
      <p>Booked on: {{ bookingDetails.date }}</p>
      <p>People: {{ bookingDetails.people }}</p>
      <p>Notes: {{ bookingDetails.notes }}</p>
      <p class="font-bold text-lg mt-2">
        Total: {{ selectedTransport.price * bookingDetails.people }} EGP
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import DropdownMenu from "../../components/DropdownMenu.vue";
import CardComponent from "../../components/card.vue";
import BookingCalendar from "../../components/bookingCalendar.vue";

// بيانات وسائل النقل من JSON
import transportationDataJSON from "../../data/bookingTransportation.json";
const transportationData = ref(transportationDataJSON.transportation);

// متغيرات الفلتر
const selectedFrom = ref(null);
const selectedTo = ref(null);
const selectedDate = ref(null);
const selectedType = ref(null);

// خيارات المدن
const cityOptions = [
  { label: "Cairo", value: "Cairo" },
  { label: "Alexandria", value: "Alexandria" },
  { label: "Luxor", value: "Luxor" },
  { label: "Aswan", value: "Aswan" },
];

// خيارات نوع الوسيلة
const typeOptions = [
  { label: "Train", value: "Train" },
  { label: "Bus", value: "Bus" },
  { label: "Car", value: "Car" },
];

// فلترة البيانات
const filteredTransportation = computed(() => {
  return transportationData.value.filter((item) => {
    const fromMatch = !selectedFrom.value || item.from === selectedFrom.value;
    const toMatch = !selectedTo.value || item.to === selectedTo.value;
    const typeMatch = !selectedType.value || item.type === selectedType.value;
    return fromMatch && toMatch && typeMatch;
  });
});

// عملية البحث
const handleSearch = () => {
  showBooking.value = false;
  bookingDetails.value = null;
};

// عند الضغط على Book Now
const showBooking = ref(false);
const selectedTransport = ref(null);

const handleBookNow = (item) => {
  selectedTransport.value = item;
  showBooking.value = true;
};

// استقبال بيانات الحجز من الـ Calendar
const bookingDetails = ref(null);

const handleBooking = (data) => {
  bookingDetails.value = data;
};

import { defineEmits } from "vue";

const emit = defineEmits(['book-now']) 
</script>
