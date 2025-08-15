<!-- src/pages/BlogDetails.vue -->
<script setup>
import { blogs } from '../BlogData.js'
import { useRoute, useRouter } from 'vue-router'
import navbar from '../components/NavBar-Black.vue'
import Footer from '../components/Footer.vue'
import BaseButton from '../components/BaseButton.vue'

const route = useRoute()
const router = useRouter()
const blog = blogs.find(b => b.id === parseInt(route.params.id))
const related = blogs.filter(b => b.id !== blog.id).slice(0, 3) // عرض 3 فقط

function goToDetails(id) {
  router.push(`/blogs/${id}`)
}
</script>

<template>
  <div class="text-black">
    <navbar />

   <div class="max-w-4xl mx-auto mt-24 px-4">
  <div class="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
    <img
      :src="blog.image"
      alt="Blog Image"
      class="w-full h-80 object-cover rounded-xl"
    />
  </div>
</div>
    <!-- Blog Content -->
    <div class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">{{ blog.title }}</h1>
      <p class="text-sm text-gray-500 mb-2">By {{ blog.author }} • {{ blog.date }}</p>

      <div class="flex items-center gap-4 mb-6">
        <img :src="blog.authorImage" class="w-14 h-14 rounded-full object-cover" />
        <div>
          <p class="font-semibold">{{ blog.author }}</p>
          <p class="text-sm text-gray-600">{{ blog.authorBio }}</p>
        </div>
      </div>

      <p class="text-lg text-gray-800 leading-relaxed mb-8 whitespace-pre-line">
        {{ blog.content }}
      </p>
    </div>

    <!-- Related Posts -->
    <div class="bg-gray-50 py-10 px-4 md:px-20">
      <h2 class="text-2xl font-bold mb-6">Related Posts</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in related"
          :key="item.id"
          class="flex flex-col justify-between p-4 border rounded shadow hover:shadow-lg transition duration-300 bg-white"
        >
          <div>
            <img :src="item.image" class="w-full h-40 object-cover rounded mb-4" />
            <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-600 mb-2">By {{ item.author }}</p>
            <p class="text-sm text-gray-600 mb-4">{{ item.summary }}</p>
          </div>
          <div class="mt-auto text-center">
            <BaseButton @click="() => goToDetails(item.id)">Read More</BaseButton>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
