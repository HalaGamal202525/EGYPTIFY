<template>
  <div>
    <navbar />

    <div
      class="relative h-64 md:h-125 bg-cover bg-center"
      style="background-image: url('/unsplashfood/herohotel.avif')"
    >
      <h1
        class="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold"
      >
        Hotels
      </h1>
    </div>

    <div class="p-4 md:p-9">
      <div class="flex flex-col lg:flex-row gap-6 items-start">
        <div class="w-full lg:w-64 mt-0 bg-white p-4 rounded shadow space-y-4">
          <SideFilter
            :destinationdata="hotlesdata"
            @update:filters="applyFilters"
            class="text-black"
          />
        </div>
        <div class="flex-1 space-y-6">
          <section
            class="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mb-6 cursor-pointer"
          >
<div
  v-for="hotel in paginatedDestinations"
  :key="hotel.details.slug"
  class="card p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
  @click="selectHotel(hotel)"
>
  <img :src="hotel.image" :alt="hotel.title" class="w-full h-44 object-cover rounded-md mb-4" />
  <h3 class="text-xl font-bold text-gray-800 mb-1 h-15">{{ hotel.title }}</h3>
  <p class="text-sm text-gray-500 mb-2">
    <i class="fas fa-map-marker-alt mr-1"></i> {{ hotel.location }}
  </p>
  <p class="text-sm text-yellow-600 font-semibold mb-2">
    Budget: {{ hotel.budget || 'N/A' }}
  </p>
  <p
    class="text-gray-700 text-sm line-clamp-3 mb-3"
    title="Description"
  >
    {{ hotel.description.length > 120 ? hotel.description.slice(0, 120) + '...' : hotel.description }}
  </p>
  <p class="text-sm text-blue-600 font-medium mb-4">
    Best Time to Visit: {{ hotel.bestTime || 'All Year' }}
  </p>
  <router-link
    :to="`/hotel/${hotel.details.slug}`"
    class="inline-block w-[150px] h-[40px] font-semibold text-white bg-yellow-400 hover:bg-yellow-600 rounded px-4 py-2 text-center transition"
    @click.stop
  >
    See Details
  </router-link>
</div>


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
import SideFilter from "./hotelsfilters.vue";
import PaginationComponent from "../components/PaginationComponent.vue";
import hotles from "../data/hotels.json"; 

const hotlesdata = ref([]);
import { useBookingStore } from '../data/store'
const bookingStore = useBookingStore()

function selectHotel(selectedHotel) {
  console.log("hotel"+selectHotel),
 bookingStore.setHotel(selectedHotel)}
onMounted(() => {
  hotlesdata.value = hotles;
});

const currentPage = ref(1);
const itemsPerPage = 6;

const filters = ref({
  location: [],
  budget: [],
  bestTime: [],
});

function applyFilters(newFilters) {
  filters.value = newFilters;
  currentPage.value = 1;
}

const filteredDestinations = computed(() => {
  return hotlesdata.value.filter(item => {
    const matchLocation = filters.value.location.length
      ? filters.value.location.includes(item.location)
      : true;

    const matchBudget = filters.value.budget.length
      ? filters.value.budget.includes(item.budget)
      : true;

    const matchBestTime = filters.value.bestTime.length
      ? filters.value.bestTime.includes(item.bestTime)
      : true;

    return matchLocation && matchBudget && matchBestTime;
  });
});

const paginatedDestinations = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredDestinations.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.max(Math.ceil(filteredDestinations.value.length / itemsPerPage), 1);
});

function handlePageChange(newPage) {
  currentPage.value = newPage;
}
</script>
