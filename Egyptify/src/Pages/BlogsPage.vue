<script setup>
import navbar from '../components/navbar.vue'
import Hero from '../components/Hero.vue'
import HeroImage from '../assets/BlogPageHero.jpg'
import BaseButton from '../components/BaseButton.vue'
import Footer from '../components/Footer.vue'
import PaginationComponent from "../components/PaginationComponent.vue"
import { ref } from 'vue'

const currentPage = ref(1)
const totalPages = ref(5) // عدد الصفحات

function handlePageChange(newPage) {
  currentPage.value = newPage
  // تقدر تجيب الداتا الجديدة هنا حسب الصفحة الجديدة
}
</script>

<template>
  <navbar />
  
  <Hero
    title="Travel Blog"
    description="Recent Travel Blog Posts"
    :image="HeroImage"
  />

  <!-- هنا تحطي المحتوى بتاع البوستات -->

  <div class="container mx-auto px-4 mt-8 text-black mb-10">
    <!-- مثلاً هنا كاردات البوستات -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Loop للبوستات -->
      <div
        v-for="i in 6"
        :key="i"
        class="p-4 border rounded shadow text-center"
      >
        Blog Post {{ i }} - Page {{ currentPage }}
      </div>
    </div>

    <!-- Pagination -->
    <PaginationComponent
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-changed="handlePageChange"
    />
  </div>

  <Footer />
</template>
