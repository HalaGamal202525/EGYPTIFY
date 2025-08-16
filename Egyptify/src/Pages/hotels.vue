<template>
  <div>
    <navbar />

    <div
      class="relative h-64 md:h-125 bg-cover bg-center"
      style="background-image: url('/unsplashfood/hero11.jpg')"
    >
      <h1
        class="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold"
      >
        Hotels
      </h1>
    </div>

    <div class="p-4 md:p-9">
      <div class="flex flex-col lg:flex-row gap-6 items-start">

        <!-- زرار فلتر الموبايل -->
        <div class="lg:hidden w-full mb-4 flex justify-center">
          <button
            @click="isOverlayOpen = true"
            class="bg-yellow-400 text-black font-bold px-4 py-2 rounded shadow w-full max-w-md"
          >
            Filter
          </button>
        </div>

        <!-- Sidebar للشاشات الكبيرة -->
        <div class="hidden lg:block w-64 mt-0 bg-white p-4 rounded shadow space-y-4">
          <SideFilter
            :destinationdata="hotlesdata"
            @update:filters="applyFilters"
            class="text-black"
          />
        </div>

        <!-- قائمة الفنادق -->
        <div class="flex-1 space-y-6">
          <section class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8 mb-6 cursor-pointer " >
            <div
              v-for="hotel in paginatedDestinations"
              :key="hotel.details.slug"
              class="card  bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              @click="selectHotel(hotel)"
            >
              <img :src="hotel.image" :alt="hotel.title" class="w-full h-44 object-cover rounded-md mb-4" />
              <h3 class="text-xl font-bold text-gray-800 mb-1 h-15 px-3">{{ hotel.title }}</h3>
              <p class="text-sm text-gray-500 mb-2 px-3">
                <i class="fas fa-map-marker-alt mr-1"></i> {{ hotel.location }}
              </p>
              <p class="text-sm text-yellow-600 font-semibold mb-2 px-3">
                Budget: {{ hotel.budget || 'N/A' }}
              </p>
              <p
                class="text-gray-700 text-sm line-clamp-3 mb-3 h-20 px-3"
                title="Description"
              >
                {{ hotel.description.length > 120 ? hotel.description.slice(0, 120) + '...' : hotel.description }}
              </p>
              <p class="text-sm text-blue-600 font-medium mb-4 px-3">
                Best Time to Visit: {{ hotel.bestTime || 'All Year' }}
              </p>
                    <div class="pt-4 flex justify-center mb-3">

              <router-link
                :to="`/hotel/${hotel.details.slug}`"
                class="inline-block w-[150px] h-[40px] font-semibold text-white bg-yellow-400 hover:bg-yellow-600 rounded-xl px-4 py-2 text-center transition"
                @click.stop
              >
                See Details
              </router-link>
              </div>

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

    <!-- Overlay فلتر الموبايل -->

  <transition name="fade">
    <div
      v-if="isOverlayOpen"
      class="fixed inset-0 bg-gray-300 bg-opacity-50 z-50 flex justify-center mt-0 items-start pt-20 overflow-y-auto"
    >
      <div class="rounded-lg bg-white w-11/12 max-w-md p-6 shadow-lg mb-20">
        <SideFilter 
  :destinationdata="hotlesdata" 
  @update:filters="applyFilters"
  :isMobile="true" 
/>

        <div class="flex justify-end mt-4 space-x-2">
          <button @click="closeOverlay" class="px-4 py-2 bg-white border border-[#ffc30] text-[#ffc340] rounded hover:bg-yellow-700">
            Cancel
          </button>
          <button @click="applyOverlayFilters" class="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
            Apply
          </button>
        </div>
      </div>
    </div>
  </transition>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted ,watch} from "vue";
import navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import SideFilter from "./hotelsfilters.vue";
import PaginationComponent from "../components/PaginationComponent.vue";
import hotles from "../data/hotels.json"; 

import { useBookingStore } from '../data/store'
const bookingStore = useBookingStore()

const hotlesdata = ref([]);
onMounted(() => {
  hotlesdata.value = hotles;
});

function selectHotel(selectedHotel) {
  bookingStore.setHotel(selectedHotel);
}

// Pagination & filters
const currentPage = ref(Number(localStorage.getItem("currentPage")) || 1);
const itemsPerPage = 6;

// كل ما الصفحة تتغير نخزنها
watch(currentPage, (newPage) => {
  localStorage.setItem("currentPage", newPage);
});
const filters = ref({ location: [], budget: [], bestTime: [] });
const tempFilters = ref({ ...filters.value });
const isOverlayOpen = ref(false);

function applyFilters(newFilters) {
  filters.value = newFilters;
  currentPage.value = 1;
  tempFilters.value = { ...newFilters };
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
  return filteredDestinations.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() =>
  Math.max(Math.ceil(filteredDestinations.value.length / itemsPerPage), 1)
);

function handlePageChange(newPage) {
  currentPage.value = newPage;
    window.scrollTo({ top: 0, behavior: 'smooth' }); 

}

// Unique filter values
const uniqueLocations = computed(() => [
  ...new Set(hotlesdata.value.map(d => d.location).filter(Boolean))
]);
const uniqueCategory = computed(() => [
  ...new Set(hotlesdata.value.map(d => d.budget).filter(Boolean))
]);
const uniqueRate = computed(() => [
  ...new Set(hotlesdata.value.map(d => String(d.bestTime)).filter(Boolean))
]);

// Overlay actions
function closeOverlay() {
  isOverlayOpen.value = false;
  tempFilters.value = { ...filters.value };
}
function applyOverlayFilters() {
  filters.value = { ...tempFilters.value };
  currentPage.value = 1;
  isOverlayOpen.value = false;
}
</script>

<style scoped>
/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
