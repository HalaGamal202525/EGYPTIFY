<template>
  <div class="bg-white shadow-lg rounded-2xl p-4 overflow-hidden hover:shadow-xl transition duration-300">
    <img
      :src="data.img"
      alt="Image"
      class="w-full h-60 object-cover rounded-2xl"
    />

    <div class=" p-5 space-y-3">
      <h2 class="text-xl font-semibold h-15 text-gray-800">{{ data.name }}</h2>

      <div class="text-gray-600">
        <p class="text-base h-12"><i class="fa-solid fa-location-dot" style="color: #ffc340"></i> {{ data.where }}</p>
        <p class="text-sm text-gray-500">far : {{ data.fromcenter }}</p>
      </div>

      <p class="text-gray-700 text-sm h-25 leading-relaxed">
        {{ data.descripation }}
      </p>

      <div class="text-sm font-medium" style="color: #ffc340;">
         {{ data.review }} ⭐
        <span class="text-gray-500">({{ data.numofreviews }})</span>
      </div>
        <p class="text-gray-800 font-bold text-base h-10 my-3">Trip time: {{ data.howlong }}</p>

      <div class="flex flex-col gap-1">
        <p class="text-green-700 font-bold text-base">{{ data.afterdesc }}</p>
        <p class="line-through text-sm text-gray-400">{{ data.beforedesc }}</p>
      </div>
        <p class="text-gray-800 text-base h-4">spot left: {{ data.numoflocation }}</p>
        <p class="text-gray-800 text-base h-6">Type: {{ data.type }}</p>

        <div
        class=" font-normal text-base h-16 "
      >
        {{ data.moredetail || 'المزيد من التفاصيل' }}
    </div>
        <BaseButton :restaurant="data"   class="w-full text-sm py-2"/>

    </div>

  </div>
</template>

<script setup>
import BaseButton from '../BaseButton.vue';
import BookNowButton from '../booknowbutton.vue';

import { useRouter } from 'vue-router';
const router = useRouter();
const gotobooking=()=>{
  router.push("/booking")
}
const props = defineProps({
  data: Object
});
</script>




