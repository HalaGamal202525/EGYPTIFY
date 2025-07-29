<template>
  <div class="bg-white shadow-lg rounded-2xl p-4 overflow-hidden hover:shadow-xl transition duration-300">
    <!-- الصورة -->
    <img
      :src="data.img"
      alt="Image"
      class="w-full h-60 object-cover rounded-2xl"
    />

    <!-- المحتوى -->
    <div class=" p-5 space-y-3">
      <!-- العنوان -->
      <h2 class="text-xl font-semibold text-gray-800">{{ data.name }}</h2>

      <!-- الموقع والمسافة -->
      <div class="text-gray-600">
        <p class="text-base">📍 {{ data.where }}</p>
        <p class="text-sm text-gray-500">far : {{ data.fromcenter }}</p>
      </div>

      <!-- الوصف -->
      <p class="text-gray-700 text-sm h-15 leading-relaxed">
        {{ data.descripation }}
      </p>

      <!-- التقييم والمراجعات -->
      <div class="text-sm font-medium" style="color: #ffc340;">
        ⭐ {{ data.rate }} 
        <span class="text-gray-500">({{ data.numofreviews }})</span>
      </div>

      <!-- السعر -->
      <div class="flex flex-col gap-1">
        <p class="text-green-700 font-bold text-base">{{ data.afterdesc }}</p>
        <p class="line-through text-sm text-gray-400">{{ data.beforedesc }}</p>
      </div>

      <!-- زر التفاصيل -->
        <div
        class=" font-bold text-base "
      >
        {{ data.moredetail || 'المزيد من التفاصيل' }}
    </div>
            <BaseButton class="  w-full   ">More Detail</BaseButton>

    </div>

  </div>
</template>

<script setup>
import BaseButton  from '../BaseButton.vue';

const props = defineProps({
  data: Object
});
</script>
