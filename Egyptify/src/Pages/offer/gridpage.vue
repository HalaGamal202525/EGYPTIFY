<template>
  <Navbar />
  <div class="p-6 my-18">
    <!-- أزرار التبديل -->
<div class="flex justify-center gap-2 mb-4 bg-[#ffc340] w-35 rounded-3xl py-1 ">
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

   <div v-if="viewMode === 'grid'" class="grid grid-cols-2 md:grid-cols-3 gap-4">
     <cardgrid v-for="place in places" :key="place.id" :data="place" />
</div>

<div v-else class="grid grid-cols-1 xl:grid-col-1 gap-6">
   <cardlist
        v-for="place in places"
        :key="place.id"
        :data="place"
      />
</div>
  </div>
  <foot />
</template>

<script setup>
import Navbar from "../../components/NavBar-Black.vue"
import cardgrid  from "../../components/offer/cardgrid.vue";
import cardlist from "../../components/offer/cardlist.vue";

import foot from "../../components/footer.vue"

import { ref, onMounted } from 'vue';
import axios from 'axios';

const places = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/Data/places');
    places.value = res.data;
  } catch (err) {
    console.error('Error fetching places:', err);
  }
});
const viewMode = ref('grid')
</script>
