<template>
    <div class="bg-[#fefaf2] min-h-screen flex flex-col">

  <Navbar />
  

  <!-- Hero Section with Search -->
<section
  class="relative bg-cover bg-center text-white py-24 px-4"
  style="background-image: url('/bookingRestaurants/transportation.jpg')"
>
  <!-- Dark overlay -->
  <div class="absolute inset-0 bg-black opacity-60"></div>

  <div class="relative z-10 max-w-5xl mx-auto text-center">
    <!-- Title and Description -->
    <h1 class="text-4xl md:text-5xl font-extrabold">
      Explore Egypt <span class="text-yellow-400">Every Way</span>
    </h1>
    <p class="mt-4 text-lg max-w-3xl mx-auto text-white">
      From high-speed trains to enchanting Nile cruises, choose the perfect
      transportation for your journey through the land of the Pharaohs
    </p>

    <!-- Search Box -->
    <div
      class="mt-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl"
    >
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-left text-white">
        <!-- From -->
        <div>
          <label class="block text-sm font-semibold mb-1">From</label>
          <select class="w-full rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Choose city</option>
            <option>Cairo</option>
            <option>Giza</option>
            <option>Alexandria</option>
            <option>Luxor</option>
            <option>Sinai</option>
            <option>North Coast</option>
            <option>Sharm El-Sheikh</option>
            <option>Aswan</option>
            <option>Hurghada</option>
            <option>Fayoum</option>
            <option>Sahl Hasheesh</option>
            <option>Western Desert</option>
            <option>Dahab</option>
            <option>Siwa</option>
          </select>
        </div>

        <!-- To -->
        <div>
          <label class="block text-sm font-semibold mb-1">To</label>
         <select class="w-full rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Choose destination</option>
            <option>Cairo</option>
            <option>Giza</option>
            <option>Luxor</option>
            <option>Aswan</option>
            <option>Alexandria</option>
            <option>Hurghada</option>
            <option>North Coast</option>
            <option>Sahl Hasheesh</option>
            <option>Sharm El-Sheikh</option>
            <option>Dahab</option>
            <option>Siwa</option>
            <option>Western Desert</option>
            <option>Fayoum</option>
            <option>Sinai</option>
            

          </select>
        </div>



        <!-- Travel Date -->
        <div>
          <label class="block text-sm font-semibold mb-1">Travel Date</label>
          <input
            type="date"
            class="w-full rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <!-- Passengers -->
        <div>
          <label class="block text-sm font-semibold mb-1">Passengers</label>
        <select class="w-full rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Select number</option>
            <option>1 Passenger</option>
            <option>2 Passengers</option>
            <option>3 Passengers</option>
            <option>4 Passengers</option>
            <option>5+ Passengers</option>
          </select>
        </div>
      </div>

      <!-- Search Button -->
<div class="mt-6 flex justify-center">
  <BaseButton class="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-8 rounded-xl cursor-pointer" @click="gototarnsportion">
    Search Trips
  </BaseButton>
</div>

    </div>
  </div>
</section>


  
    <section class="text-center py-12">
      <h2 class="text-black text-2xl font-bold mb-2">Choose Your Transportation</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        We offer you a variety of transportation options to suit your budget, time, and preferences.
      </p>
    </section>

    



    <!-- Filter Section -->
     <!-- <div class="mx-8">
    <div
      class="bg-yellow-20 border border-gray-300 rounded-lg p-4 mx-4 mb-6 shadow"
    >
      <h2 class="text-lg font-semibold mb-4 text-gray-700">Filter</h2>
      <div class="flex justify-center flex-wrap gap-4"> -->
        <!-- From Dropdown -->
        <!-- <DropdownMenu
          :label="selectedFrom || 'From'"
          :options="cityOptions"
          @select="(item) => (selectedFrom = item.value)" 
        />-->

        <!-- To Dropdown -->
        <!-- <DropdownMenu
          :label="selectedTo || 'To'"
          :options="cityOptions"
          @select="(item) => (selectedTo = item.value)"
        /> -->

        <!-- Type Dropdown -->
        <!-- <DropdownMenu
          :label="selectedType || 'Type'"
          :options="typeOptions"
          @select="(item) => (selectedType = item.value)"
        />
      </div>
    </div> -->

    <!-- Transportation Cards -->
    <section
      class="grid grid-cols-1 gap-4 px-4 pb-10 ml-20"
      style="grid-template-columns: repeat(3, minmax(350px, 1fr))"
    >
      <CardComponent
        v-for="item in filteredTransportation"
        :key="item.id"
        :title="item.provider"
        :type="item.type"
        :kind="item.kind"
        :amenities="item.amenities"
        :price="item.price"
        :features="item.features"
        :icon="item.icon"
        :showButton="true"
        :buttonText="'Book Now'"
        :showImage="false"
        :departure="
          item.type === 'Car' ? 'Departure: Upon request' : `${item.departure}`
        "
        :arrival="
          item.type === 'Car' ? 'Arrival: Upon request' : `${item.arrival}`
        "
        :duration="
          item.type === 'Car'
            ? 'Duration: Based on distance'
            : `${item.duration}`
        "
        :location="
          item.type === 'Car'
            ? 'From: Flexible → To: As requested'

            : `From: ${item.from} → To: ${item.to}` "
        
            :onClick="() => handleBookNow(item)"

          class="!w-full space-y-4"

      />
    </section>
    </div>

    <!-- Booking Calendar -->
    <BookingCalendar
      v-if="showBooking"
      :selectedItem="selectedTransport"
      @confirm="handleBooking"
      @close="showBooking = false"
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


    

    <!-- Special Offers Section -->
<section class="px-6 pb-20 w-full">
  <div
    class="rounded-xl bg-[#0b2344] relative overflow-hidden text-white py-10 px-6 text-center shadow-2xl"
  >
    <!-- لمسة إضاءة دائرية للخلفية -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>

    <h2 class="text-2xl md:text-3xl font-bold mb-2 relative z-10">
      Special Offers for Early Bookings
    </h2>
    <p class="text-md md:text-lg text-gray-200 mb-6 relative z-10">
      Book your trip 30 days in advance and get up to 25% discount
    </p>

    <!-- Offer Badges -->
    <div class="flex flex-wrap justify-center gap-4 relative z-10">
      <!-- Offer Badge -->
      <div class="flex items-center gap-3 bg-yellow-400/20 backdrop-blur-sm text-yellow-300 px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 border border-yellow-500/30">
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-300/20">
          <i class="fa-solid fa-percent"></i>
        </div>
        <span class="font-semibold">25% Off</span>
      </div>

      <!-- Cancellation Badge -->
      <div class="flex items-center gap-3 bg-green-400/20 backdrop-blur-sm text-green-300 px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 border border-green-500/30">
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-green-300/20">
          <i class="fa-solid fa-ban"></i>
        </div>
        <span class="font-semibold">Free Cancellation</span>
      </div>
    </div>
  </div>
</section>





  <Footer />
 
</template>

<script setup>
import { ref, computed } from "vue";
import DropdownMenu from "../components/DropdownMenu.vue";
import CardComponent from "../components/card.vue";
import BookingCalendar from "../components/bookingCalendar.vue";


const bookingHeroImg = "/booking-hero.webp"
// بيانات وسائل النقل من JSON
import transportationDataJSON from "../data/bookingTransportation.json";
const transportationData = ref(transportationDataJSON.transportation);

// متغيرات الفلتر
const selectedFrom = ref(null);
const selectedTo = ref(null);
const selectedDate = ref(null);
const selectedType = ref(null);

import Navbar from "../components/navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/footer.vue";

const cityOptions = computed(() => {
  const cities = new Set();

  transportationData.value.forEach((item) => {
    if (item.from) cities.add(item.from);
    if (item.to) cities.add(item.to);
  });

  return [
    { label: "All Cities", value: "" },
    ...Array.from(cities).map((city) => ({
      label: city,
      value: city,
    })),
  ];
});

// خيارات نوع الوسيلة
const typeOptions = [
  { label: "All Types", value: "" },
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
// const showBooking = ref(false);
// const selectedTransport = ref(null);

// const handleBookNow = (item) => {
//   selectedTransport.value = item;
//   showBooking.value = true;
// };

// استقبال بيانات الحجز من الـ Calendar
const bookingDetails = ref(null);

const handleBooking = (data) => {
  bookingDetails.value = data;
};

import { defineEmits } from "vue";

const emit = defineEmits(['book-now']) 






import { useRouter } from "vue-router";
import { useBookingStore } from "../data/Store";

const bookingStore = useBookingStore();
const router = useRouter();

const handleBookNow = (item) => {
  // حفظ بيانات وسيلة المواصلات في store
  bookingStore.setTransportation(item);

  // الانتقال لصفحة الفورم
  router.push("/form");
};


// const emit = defineEmits(["book-now"]);
</script>
