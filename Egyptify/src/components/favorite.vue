<template>
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

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
