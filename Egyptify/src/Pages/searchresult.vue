<template>
  <div class="p-8 bg-[#fffdf9] min-h-screen">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">Search Results</h1>

    <div v-if="loading" class="text-gray-600">Loading...</div>

    <div v-else-if="results.length === 0" class="text-gray-500">No results found.</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="place in results" :key="place.id" class="bg-white p-4 rounded-xl shadow">
        <img :src="place.img" alt="Image" class="w-full h-40 object-cover rounded-md mb-3">
        <h2 class="text-xl font-semibold text-gray-700">{{ place.name }}</h2>
        <p class="text-gray-500">{{ place.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase' 

const route = useRoute()
const location = route.query.location
const guests = route.query.guests

const results = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const q = query(
      collection(db, 'places'),
      where('location', '==', location)
      // ممكن تضيف شرط تاني للضيوف لو بتحفظ عددهم
    )
    const snapshot = await getDocs(q)
    results.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error("Error fetching data:", error)
  } finally {
    loading.value = false
  }
})
</script>
