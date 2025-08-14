<template>
  <div>
    <navbar />

    <div
      class="relative h-64 md:h-125 bg-cover bg-center"
      style="background-image: url('/public/Destination/background.jpg')"
    >
      <h1
        class="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold"
      >
        Destinations
      </h1>
    </div>

    <div class="p-4 md:p-9">
      <div class="flex flex-col lg:flex-row gap-6 items-start">
<div class="w-full lg:w-64 mt-0 bg-white p-4 rounded shadow space-y-4">

  <!-- زر الفلتر للموبايل -->
  <button
    @click="openOverlay"
    class="lg:hidden bg-yellow-400 text-black font-bold px-4 py-2 rounded shadow w-full"
  >
    Filter
  </button>

  <!-- فلتر جانبي للشاشات الكبيرة -->
  <div class="hidden lg:block">
    <SideFilter
      :destinationdata="destinationdata"
      @update:filters="applyFilters"
      class="text-black"
    />
  </div>

  <!-- Overlay للموبايل -->
<transition name="fade">
 <div
  v-if="isOverlayOpen"
  class="fixed inset-0 bg-gray-300 bg-opacity-50 z-50 flex justify-center mt-0 items-start pt-20 overflow-y-auto"
>
  <div class=" rounded-lg bg-white w-11/12 max-w-md p-6 shadow-lg mb-20">
    <SideFilter :destinationdata="destinationdata" @update:filters="updateTempFilters" :isMobile="true"/>
    <div class="flex justify-end mt-4 space-x-2">
      <button @click="closeOverlay" class="px-4 py-2 bg-white border border-[#ffc30] !text-[#ffc340] rounded hover:bg-yellow-700">Cancel</button>
      <button @click="applyOverlayFilters" class="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">Save</button>
    </div>
  </div>
</div>

</transition>


</div>

        <div class="flex-1 space-y-6">
          <section
            class="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mb-6 cursor-pointer"
          >
     <CardComponent
  v-for="item in paginatedDestinations"
  :key="item.id"
  :title="item.name"
  :description="item.description"
  :image="item.image"
  :rating="item.rate"
  :showHeart="true"
  :showButton="true"
  buttonText="Show Details"
  @click="() => { router.push(`/destination/${item.id}`); handleCardClick(item); }"
/>


          </section>

          <!-- Pagination -->
          <div class="flex justify-center mb-16">
            <PaginationComponent
              :currentPage="currentPage"
              :totalPages="totalPages"
              @page-changed="handlePageChange"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import SideFilter from "./filterdestaination.vue";
import PaginationComponent from "../components/PaginationComponent.vue";
import CardComponent from "../components/card.vue";
import destination from "../data/Destaintion.json";
import { useRouter } from "vue-router";

const router = useRouter();

const destinationdata = ref([]);

onMounted(() => {
  destinationdata.value = destination;
});

const currentPage = ref(1);
const itemsPerPage = 6;

const filters = ref({
  location: [],
  category: [],
  rate: [],
});
 

import { useBookingStore } from '../data/store.js'
const bookingStore = useBookingStore()

function handleCardClick(card) {
  bookingStore.setCardData({
    image: card.image,
    title: card.title,
    rate: card.rate,
    price: card.price
  })
}

function applyFilters(newFilters) {
  filters.value = newFilters;
  currentPage.value = 1;  // ارجع الصفحة الأولى لما يتغير الفلتر
}

const filteredDestinations = computed(() => {
  return destinationdata.value.filter(item => {
    const matchLocation = filters.value.location.length
      ? filters.value.location.includes(item.location)
      : true;

    const matchCategory = filters.value.category.length
      ? filters.value.category.includes(item.category)
      : true;

    const matchRate = filters.value.rate.length
      ? filters.value.rate.includes(String(item.rate))
      : true;

    return matchLocation && matchCategory && matchRate;
  });
});

const paginatedDestinations = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredDestinations.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredDestinations.value.length / itemsPerPage) || 1;
});

function handlePageChange(newPage) {
  currentPage.value = newPage;
}
const isOverlayOpen = ref(false)
const tempFilters = ref({ location: [], category: [], rate: [] })

function openOverlay() {
  tempFilters.value = JSON.parse(JSON.stringify(filters.value)) // نسخ الفلاتر الحالية
  isOverlayOpen.value = true
}

function closeOverlay() {
  isOverlayOpen.value = false
}

function updateTempFilters(newFilters) {
  tempFilters.value = newFilters
}

function applyOverlayFilters() {
  filters.value = tempFilters.value
  currentPage.value = 1
  isOverlayOpen.value = false
}

</script>
