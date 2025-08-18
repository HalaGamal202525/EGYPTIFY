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
  <div class="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
    <img
      :src="blog.image"
      alt="Blog Image"
      class="w-full h-80 object-cover rounded-lg"
    />
  </div>
</div>
    <div class="max-w-10xl mx-20 px-4 py-6 mt-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl md:text-4xl font-medium mb-8 ">{{ blog.title }}</h1>
      
      <p class="text-sm text-gray-500 mb-4">By {{ blog.author }} • {{ blog.date }}</p>

      <div class="flex items-center gap-4 mb-6 ">
        <img :src="blog.authorImage" class="w-14 h-14 rounded-full shadow-sm  object-contain" />
        <div>
          <p class="font-semibold">{{ blog.author }}</p>
          <p class="text-sm text-gray-600">{{ blog.authorBio }}</p>
        </div>
      </div>

      <p class="text-lg text-gray-800 leading-relaxed mb-8 whitespace-pre-line">
        {{ blog.content }}
      </p>
    </div>

    <div class="container mx-auto px-4 mt-20 text-black mb-18">
      <h2 class="text-2xl font-bold mb-6">Related Posts</h2>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-8">
        <div
          v-for="item in related"
          :key="item.id"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition duration-300 transform hover:scale-105 cursor-pointer"
          @click="() => goToDetails(item.id)"
        >
          <img :src="item.image" class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ item.title }}</h3>
                        <p class="text-md font-semibold text-gray-800 mb-2">By {{ item.author }}</p>
            <p class="text-gray-600 text-sm flex-grow mb-4">{{ item.summary }}</p>

            <div class="mt-auto">
              <BaseButton class="w-1/2 mx-auto text-center">View offer</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>