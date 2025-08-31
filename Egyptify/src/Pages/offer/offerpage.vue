<template>
  <Navbar />
  <div class="flex flex-col lg:flex-row gap-6 px-6 my-12">
    <!-- Sidebar Filters -->
    <div class="w-full lg:w-64 mt-10 bg-white p-4 rounded shadow space-y-4">
      <!-- زرار يظهر بس في الموبايل -->
      <button
        @click="openOverlay"
        class="lg:hidden bg-yellow-400 text-white font-bold px-4 py-2 rounded shadow w-full"
      >
        Filter
      </button>

      <!-- الفلتر في الديسكتوب -->
      <div class="hidden lg:block">
        <PlaceFilters :allPlaces="places" @update:filters="applyFilters" />
      </div>

      <!-- overlay يظهر في الموبايل -->
      <transition name="fade">
        <div
          v-if="isOverlayOpen"
          class="fixed inset-0 bg-gray-300 bg-opacity-50 z-50 flex justify-center items-start pt-20 overflow-y-auto"
        >
          <div class="rounded-lg bg-white w-11/12 max-w-md p-6 shadow-lg mb-20">
            <PlaceFilters
              :allPlaces="places"
              @update:filters="updateTempFilters"
              :isMobile="true"
            />
            <div class="flex justify-end mt-4 space-x-2">
              <button
                @click="closeOverlay"
                class="px-4 py-2 bg-white border border-[#ffc30] !text-[#ffc340] rounded hover:bg-yellow-100"
              >
                Cancel
              </button>
              <button
                @click="applyOverlayFilters"
                class="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Content Section -->
    <div class="flex-1">
      <!-- Toggle View -->
      <div class="flex flex-row justify-between items-center px-3">
        <p class="mt-4 text-lg font-bold">
          {{ filteredPlaces.length }} results found
        </p>

        <div
          class="flex justify-center gap-2 my-6 bg-[#ffc340] w-35 rounded-3xl py-1"
        >
          <button
            @click="viewMode = 'grid'"
            :class="viewMode === 'grid' ? 'bg-white text-black rounded-2xl' : ' border border-[#ffc340] rounded-2xl text-white'"
            class="px-4 py-1 rounded text-sm"
          >
            Grid
          </button>

          <button
            @click="viewMode = 'list'"
            :class="viewMode === 'list' ? 'bg-white text-black rounded-2xl' : 'border border-[#ffc340] rounded-2xl text-white'"
            class="px-4 py-1 rounded text-sm"
          >
            List
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div v-if="viewMode === 'grid'" class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <cardgrid
          v-for="place in paginatedPlaces"
          :key="place.id"
          :data="place"
          @book="handleBook(place)"
        />
      </div>

      <div v-else class="grid grid-cols-1 gap-4">
        <cardlist
          v-for="place in paginatedPlaces"
          :key="place.id"
          :data="place"
          @book="handleBook(place)"
        />
      </div>

      <div class="flex justify-center mb-16">
        <PaginationComponent
          :currentPage="currentPage"
          :totalPages="totalPages"
          @page-changed="handlePageChange"
        />
      </div>
    </div>
  </div>
  <foot />
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";

import Navbar from "../../components/Navbar-Black.vue";
import cardgrid from "../../components/offer/cardgrid.vue";
import cardlist from "../../components/offer/cardlist.vue";
import PlaceFilters from "../../components/offer/filterplaces.vue";
import foot from "../../components/footer.vue";
import PaginationComponent from "../../components/PaginationComponent.vue";
import { useRouter } from "vue-router";
import { useCardStore } from "../../data/store.js";

const places = ref([]);
const viewMode = ref("grid");

const currentPage = ref(1);
const itemsPerPage = ref(6);

const filters = ref({
  type: [],
  location: [],
  review: []
});

const totalPages = computed(() => {
  return Math.ceil(filteredPlaces.value.length / itemsPerPage.value);
});
const paginatedPlaces = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredPlaces.value.slice(start, end);
});

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/Data/places");
    places.value = res.data;
  } catch (err) {
    console.error("Error fetching places:", err);
  }
});

const filteredPlaces = computed(() => {
  return places.value.filter((place) => {
    const matchType =
      filters.value.type.length === 0 || filters.value.type.includes(place.type);
    const matchWhere =
      filters.value.location.length === 0 ||
      filters.value.location.includes(place.location);
    const matchReview =
      filters.value.review.length === 0 ||
      filters.value.review.some(
        (r) => parseFloat(place.review) >= parseFloat(r)
      );

    return matchType && matchWhere && matchReview;
  });
});

const router = useRouter();
const bookingStore = useCardStore();

function handleBook(place) {
  bookingStore.setCardData({
    image: place.img,
    title: place.name,
    rate: place.review || place.rating || 0,
    price: place.afterdesc
  });
  router.push("/form");
}

function handlePageChange(page) {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const applyFilters = (newFilters) => {
  filters.value = newFilters;
};

// ==== overlay state للموبايل ====
const isOverlayOpen = ref(false);
const tempFilters = ref({ type: [], location: [], review: [] });

function openOverlay() {
  tempFilters.value = JSON.parse(JSON.stringify(filters.value));
  isOverlayOpen.value = true;
}

function closeOverlay() {
  isOverlayOpen.value = false;
}

function updateTempFilters(newFilters) {
  tempFilters.value = newFilters;
}

function applyOverlayFilters() {
  filters.value = tempFilters.value;
  currentPage.value = 1;
  isOverlayOpen.value = false;
}
</script>

<!-- 
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

import Navbar from '../../components/Navbar-Black.vue';
import cardgrid  from "../../components/offer/cardgrid.vue";
import cardlist from "../../components/offer/cardlist.vue";
import PlaceFilters from '../../components/offer/filterplaces.vue';
import foot from "../../components/footer.vue"
import PaginationComponent from "../../components/PaginationComponent.vue";

const places = ref([]);

const currentPage = ref(1);
const itemsPerPage = ref(6); 
const totalPages = computed(() => {
  return Math.ceil(filteredPlaces.value.length / itemsPerPage.value);
});
const paginatedPlaces = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredPlaces.value.slice(start, end);
});

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/Data/places');
        console.log('Data received:', res.data);
    places.value = res.data;
  } catch (err) {
    console.error('Error fetching places:', err);
  }
});

const viewMode = ref('grid');
const filters = ref({
  type: [],
  location: [],
  review: []
});

const filteredPlaces = computed(() => {
  return places.value.filter(place => {
    const matchType = filters.value.type.length === 0 || filters.value.type.includes(place.type);
    const matchWhere = filters.value.location.length === 0 || filters.value.location.includes(place.location);
    const matchReview = filters.value.review.length === 0 || filters.value.review.some(r => parseFloat(place.review) >= parseFloat(r));

    return matchType && matchWhere && matchReview;
  });
});
import { useRouter } from 'vue-router';
import { useCardStore } from '../../data/store.js';

const router = useRouter();
const bookingStore = useCardStore();

function handleBook(place) {
  bookingStore.setCardData({
    image: place.img,
    title: place.name,
    rate: place.review || place.rating || 0,
    price: place.afterdesc,
  });
  router.push('/form'); 
}
function handlePageChange(page) {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

const applyFilters = (newFilters) => {
  filters.value = newFilters;
};
</script> -->
