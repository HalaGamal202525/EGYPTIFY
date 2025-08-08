<template>
  <navbar />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 p-6">
 
            <Card
  v-for="place in favoritePlaces"
  :key="place.id"
  :id="place.id"
  :title="place.title"
  :image="place.image"
  :description="place.description"
  :location="place.location"
  :date="place.date"
  :duration="place.duration"
  :people="place.people"
  :price="place.price"
  :rating="place.rating"
  :type="place.type"
  :showHeart="true"
/>

  </div>
  <foot />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import navbar from '../components/NavBar-Black.vue';
import foot from '../components/footer.vue';
import Card from '../components/card.vue'; 

const favoritePlaces = ref([]);

function syncFavorites() {
  favoritePlaces.value = JSON.parse(localStorage.getItem("favorites")) || [];
}

onMounted(() => {
  window.addEventListener("storage", syncFavorites);
  syncFavorites();
});

onBeforeUnmount(() => {
  window.removeEventListener("storage", syncFavorites);
});

</script>
