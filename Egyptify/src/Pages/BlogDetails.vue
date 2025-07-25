<script setup>
import { blogs } from '../BlogData.js' // تأكدي من المسار الصحيح
import { useRoute } from 'vue-router'

const route = useRoute()
const blog = blogs.find(b => b.id === parseInt(route.params.id))
</script>

<template>
  <div class="px-4 md:px-16 py-10 max-w-4xl mx-auto text-black">
    <img :src="blog.image" class="w-full h-80 object-cover rounded-lg mb-6" />
    <h1 class="text-3xl font-bold mb-2">{{ blog.title }}</h1>
    <p class="text-gray-500 mb-6">By {{ blog.author }} • {{ blog.date }}</p>
    
    <div class="flex items-center mb-8">
      <img :src="blog.authorImage" class="w-16 h-16 rounded-full mr-4" />
      <div>
        <p class="font-bold">{{ blog.author }}</p>
        <p class="text-sm text-gray-600">{{ blog.authorBio }}</p>
      </div>
    </div>

    <p class="text-lg leading-relaxed text-gray-800">
      This is where you can add full blog content, images, quotes, etc. You can expand this to be dynamic if your blog data includes full content later.
    </p>
  </div>
</template>
