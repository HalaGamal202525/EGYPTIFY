<template>
  <div class="sticky top-24 h-fit">
    <div class="  p-4 w-full bg-gray-50 rounded-lg border border-gray-400">
      <h1 class="text-2xl font-bold mb-4 text-black">{{ title }}</h1>

      <div
        v-for="item in items"
        :key="item.id"
        class="flex bg-white shadow-md rounded-lg overflow-hidden mb-4 h-36"
      >
        <img
          :src="item.image"
          alt="item image"
          class="w-1/3 object-cover h-full"
        />

        <div class="p-3 flex flex-col justify-center w-2/3">
          <h2 class="text-lg font-semibold mb-1 text-black">{{ item.name }}</h2>
          <p class="text-gray-700 text-sm line-clamp-2">{{ item.description }}</p>

          <div v-if="item.rating" class="text-yellow-500 text-xs mt-2">
            <span v-for="n in Math.floor(item.rating)" :key="n + item.id">
              <i class="fa-solid fa-star" style="color: #ffc340;"></i>
            </span>
            <span v-if="item.rating % 1 !== 0">
              <i class="fa-solid fa-star-half-stroke" style="color: #ffc340;"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: Array
})
</script>
