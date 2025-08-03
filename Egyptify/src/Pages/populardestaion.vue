<template>
  <navbar />
  <Hero
    :title="currentHero.title"
    :description="currentHero.description"
    :image="currentHero.image"
  />
  <section class="py-16 bg-[#f9f9f9]">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
      <div
        v-for="place in popularPlaces"
        :key="place.id"
        class="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
      >
        <router-link :to="`/place/${place.id}`">
          <img :src="place.img" :alt="place.name" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-semibold">{{ place.name }}</h3>
            <p class="text-gray-600">{{ place.review }} ⭐</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
  <foot />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import navbar from '../components/navbar.vue'
import Hero from '../components/Hero.vue'
import foot from '../components/footer.vue'

const popularPlaces = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/Data/places')
    console.log("places data:", res.data)
    popularPlaces.value = res.data
      .filter(p => p.review > 4.4)
      .sort((a, b) => b.review - a.review)
  } catch (error) {
    console.error('Error loading popular destinations:', error)
  }
})

const currentHero = {
  title: "Popular Destinations",
  description: "Discover the most visited places.",
  image: "/sara/sculptures-pharaohs-ancient-egyptian-drawings-columns-luxor-temple.jpg", // لا تكتب public/
}
</script>

<style scoped>
/* Custom styles لو حابة */
</style>
