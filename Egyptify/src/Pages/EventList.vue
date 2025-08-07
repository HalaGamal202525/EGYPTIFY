<template>
  <div class="max-w-7xl mx-auto py-8 px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="event in events"
        :key="event.title"
        class="bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
        @click="go(event)"
      >
        <img
          :src="require(`../assets/events/${event.image}`)"
          class="w-full h-48 object-cover rounded-t-lg"
          alt="event"
        />
        <div class="p-4">
          <h3 class="font-semibold text-xl mb-2">{{ event.title }}</h3>
          <p class="text-gray-600 text-sm">{{ event.location }} • {{ event.date }}</p>
          <p class="text-gray-800 mt-2">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import data from '../data/events.json'
const events = data
const router = useRouter()
function go(e) {
  const slug = encodeURIComponent(e.title.replace(/\s+/g, '-'))
  router.push(`/events/${slug}`)
}
</script>
