<template>
  <navbar />
  <Hero
    :title="currentHero.title"
    :description="currentHero.description"
    :image="currentHero.image"
  />

  <section class="py-16 bg-[#f9f9f9]">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="place in popularPlaces"
          :key="place.id"
        >
          <Card
            :image="place.img"
            :title="place.name"
            :rating="place.review"
            :description="place.descripation"
            :showHeart="true"
             :defaultFavorite="place.isFavorite"
            class="flex flex-col h-full"
          />
        </div>
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
import Card from "../components/card.vue"
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
  image: "/sara/sculptures-pharaohs-ancient-egyptian-drawings-columns-luxor-temple.jpg",
}
</script>

<style scoped>
/* تحسين مظهر النصوص داخل الكارت لو محتاج */
</style>
