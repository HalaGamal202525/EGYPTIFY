<template>
  <Navbar />
  <div v-if="place">
    <h1 class="text-3xl font-bold">{{ place.name }}</h1>
    <img :src="place.img" alt="" class="w-full max-h-[400px] object-cover my-4" />
    <p class="text-lg text-gray-700">{{ place.descripation }}</p>
    <p class="text-md text-gray-500 mt-2">Rating: {{ place.review }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Navbar from '../components/NavBar-Black.vue' // خلي بالك من الـ N كابتال

const route = useRoute()
const place = ref(null)

onMounted(async () => {
  const id = route.params.id
  try {
    const res = await axios.get(`http://localhost:3000/api/Data/places/${id}`)
    place.value = res.data
  } catch (err) {
    console.error('Error loading place details:', err)
  }
})
</script>
