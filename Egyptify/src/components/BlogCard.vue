<template>
  <div class="bg-white shadow-md rounded-2xl overflow-hidden w-[350px]">
    <img :src="blog.image" alt="blog post" class="w-full h-[200px] object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-bold mb-1">{{ blog.title }}</h2>
      <p class="text-gray-600 text-sm mb-2">{{ blog.date }} | By {{ blog.author }}</p>
      <p class="text-gray-800 text-sm mb-4">{{ blog.summary }}</p>
      <div class="flex items-center gap-3 mb-4">
        <img :src="blog.authorImage" alt="author" class="w-8 h-8 rounded-full" />
        <p class="text-xs text-gray-600 italic">{{ blog.authorBio }}</p>
      </div>
      <div class="flex justify-center">
        <BaseButton @click="goToDetails(blog.id)">
          Read More
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'

defineProps({
  blog: Object
})

const goToDetails = (id) => {
  console.log("Going to details of blog:", id)
  // هنا ممكن تروحي لصفحة التفاصيل لو عندك Routing
}
</script>
