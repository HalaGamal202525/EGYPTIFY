<template>
  <Navbar />
  <div class="flex gap-6 px-6 my-16">
    
    <!-- Sidebar Filters -->
    <div class="shadow  p-4 w-full  lg:w-64 mt-17">
      <PlaceFilters :allPlaces="places" @update:filters="applyFilters" />
    </div>

    <!-- Content Section -->
    <div class="flex-1">
      <!-- Toggle View -->
 <div class="flex flex-row justify-between items-center px-3">
         <p class="mt-4 text-lg font-bold ">
  {{ filteredPlaces.length }} results found
</p>


<div class="flex justify-center gap-2 my-6 bg-[#ffc340] w-35 rounded-3xl py-1 ">
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
        <cardgrid v-for="place in filteredPlaces" :key="place.id" :data="place"    @book="handleBook(place)"/>
      </div>

      <div v-else class="grid grid-cols-1 gap-4">
        <cardlist v-for="place in filteredPlaces" :key="place.id" :data="place"    @book="handleBook(place)"/>
        
      </div>
    </div>
  </div>
  <foot />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

import Navbar from '../../components/Navbar-Black.vue';
import cardgrid  from "../../components/offer/cardgrid.vue";
import cardlist from "../../components/offer/cardlist.vue";
import PlaceFilters from '../../components/offer/filterplaces.vue';
import foot from "../../components/footer.vue"

const places = ref([]);


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
import { useBookingStore } from '../../data/store.js';

const router = useRouter();
const bookingStore = useBookingStore();

function handleBook(place) {
  bookingStore.setCardData({
    image: place.img,
    title: place.name,
    rate: place.review || place.rating || 0,
    price: place.afterdesc,
  });
  router.push('/form'); 
}

const applyFilters = (newFilters) => {
  filters.value = newFilters;
};
</script>
