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
        <h2 class="text-lg font-semibold  text-gray-800">{{ data.name }}</h2>

        <!-- الموقع والمسافة -->
        <div class="text-gray-600 text-sm">
          <p><i class="fa-solid fa-location-dot" style="color: #ffc340"></i> {{ data.where }}</p>
          <p class="text-xs text-gray-500">far: {{ data.fromcenter }}</p>
        </div>

        <!-- الوصف -->
        <p class="text-gray-700 text-sm leading-snug">
          {{ data.descripation }}
        </p>

        <!-- التقييم والسعر -->
        <div class="flex justify-between items-end">
           <div class="text-sm font-medium" style="color: #ffc340;">
         {{ data.review }} ⭐
        <span class="text-gray-500">({{ data.numofreviews }})</span>
      </div>
        <p class="text-gray-800 font-bold text-base">Trip time: {{ data.howlong }}</p>


          <div class="text-right text-sm">
            <p class="text-green-700 font-semibold">{{ data.afterdesc }}</p>
            <p class="line-through text-gray-400">{{ data.beforedesc }}</p>
          </div>
        
        </div>
      </div>
                 <p class="text-gray-800 text-base">spot left: {{ data.numoflocation }}</p>
        <p class="text-gray-800 text-base">Type: {{ data.type }}</p>
      <!-- الجزء السفلي -->
      <div class="mt-4">
        <div class="text-base font-medium text-gray-700 mb-2">
          {{ data.moredetail || 'المزيد من التفاصيل' }}
        </div>
        <BaseButton class="w-full text-sm py-2" @click="gotobooking">Book Now </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../BaseButton.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const gotobooking=()=>{
  router.push("/booking")
}
const props = defineProps({
  data: Object
});
</script>
