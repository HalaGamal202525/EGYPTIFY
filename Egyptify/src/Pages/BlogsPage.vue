<!-- src/pages/Blogs.vue -->
<script setup>
import navbar from '../components/navbar.vue'
import Hero from '../components/Hero.vue'
import HeroImage from '../assets/BlogPageHero.jpg'
import BaseButton from '../components/BaseButton.vue'
import Footer from '../components/Footer.vue'
import PaginationComponent from "../components/PaginationComponent.vue"
import { ref, computed } from 'vue'
import { blogs } from '../BlogData.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentPage = ref(1)
const perPage = 9 // نعرض 9 بوستات في الصفحة

const totalPages = computed(() => Math.ceil(blogs.length / perPage))

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return blogs.slice(start, start + perPage)
})

function handlePageChange(newPage) {
  currentPage.value = newPage
}

function goToDetails(id) {
  router.push(`/blogs/${id}`)
}
</script>

<template>
  <navbar />

  <Hero
    title="Travel Blog"
    description="Recent Travel Blog Posts"
    :image="HeroImage"
  />

  <div class="container mx-auto px-4 mt-8 text-black mb-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="blog in paginatedBlogs"
        :key="blog.id"
        class="flex flex-col justify-between p-4 border rounded shadow hover:shadow-lg transition duration-300 bg-white"
      >
        <div>
          <img :src="blog.image" alt="blog image" class="w-full h-40 object-cover rounded mb-4" />
          <h2 class="text-xl font-bold mb-2">{{ blog.title }}</h2>
          <p class="text-gray-700 text-sm mb-2">By {{ blog.author }}</p>
          <p class="text-sm text-gray-600 mb-4">{{ blog.summary }}</p>
        </div>
        <div class="mt-auto text-center">
          <BaseButton text="Read More" @click="goToDetails(blog.id)" />
        </div>
      </div>
    </div>

    <PaginationComponent
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-changed="handlePageChange"
      class="mt-10"
    />
  </div>

  <Footer />
</template>
