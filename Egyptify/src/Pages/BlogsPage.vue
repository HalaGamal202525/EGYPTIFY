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
const perPage = 9

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

  <div class="container mx-auto px-4 mt-20 text-black mb-18">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-8">
      <div
        v-for="blog in paginatedBlogs"
        :key="blog.id"
        class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition duration-300 transform hover:scale-105 cursor-pointer"
        @click="() => goToDetails(blog.id)"
      >
        <img :src="blog.image" alt="blog image" class="w-full h-50 object-cover" />
        <div class="p-6 flex flex-col flex-grow">
          <h2 class="text-xl font-bold text-gray-800 mb-2">{{ blog.title }}</h2>
          <p class="text-gray-500 text-sm mb-4">{{ blog.summary }}</p>
          <div class="mt-4">
            <BaseButton class="w-1/2 text-center">View offer</BaseButton>
          </div>
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