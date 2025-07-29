<template>
  <div class="flex flex-row bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-4 h-full">
    <!-- الصورة -->
    <img
      :src="data.img"
      alt="Image"
      class="w-70 h-70 object-cover rounded-2xl"
    />

    <!-- المحتوى -->
    <div class="flex flex-col justify-between px-5 flex-grow h-full">
      <!-- الجزء العلوي -->
      <div class="space-y-2">
        <!-- العنوان -->
        <h2 class="text-lg font-semibold text-gray-800">{{ data.name }}</h2>

        <!-- الموقع والمسافة -->
        <div class="text-gray-600 text-sm">
          <p>📍 {{ data.where }}</p>
          <p class="text-xs text-gray-500">far: {{ data.fromcenter }}</p>
        </div>

        <!-- الوصف -->
        <p class="text-gray-700 text-sm leading-snug">
          {{ data.descripation }}
        </p>

        <!-- التقييم والسعر -->
        <div class="flex justify-between items-end">
          <div class="text-sm font-medium text-yellow-400">
            ⭐ {{ data.rate }}
            <span class="text-gray-500">({{ data.numofreviews }})</span>
          </div>

          <div class="text-right text-sm">
            <p class="text-green-700 font-semibold">{{ data.afterdesc }}</p>
            <p class="line-through text-gray-400">{{ data.beforedesc }}</p>
          </div>
        </div>
      </div>

      <!-- الجزء السفلي -->
      <div class="mt-4">
        <div class="text-base font-medium text-gray-700 mb-2">
          {{ data.moredetail || 'المزيد من التفاصيل' }}
        </div>
        <BaseButton class="w-full text-sm py-2">More Detail</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../BaseButton.vue';
const props = defineProps({
  data: Object
});
</script>
