<template>
  <div class="bg-white shadow-lg rounded-2xl p-4 overflow-hidden hover:shadow-xl transition duration-300">
    <img
      :src="data.img"
      alt="Image"
      class="w-full h-60 object-cover rounded-2xl"
    />

    <div class=" p-5 space-y-3">
      <h2 class="text-xl font-semibold text-gray-800">{{ data.name }}</h2>

      <div class="text-gray-600">
        <p class="text-base">📍 {{ data.where }}</p>
        <p class="text-sm text-gray-500">far : {{ data.fromcenter }}</p>
      </div>

      <p class="text-gray-700 text-sm h-22 leading-relaxed">
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




<!-- <template>
  <div class="bg-white shadow rounded-lg overflow-hidden">
    <img :src="data.img" class="w-full h-48 object-cover" />

    <div class="p-4">
      <h2 class="text-xl font-bold">{{ data.name }}</h2>
      <p class="text-gray-600">{{ data.type }}</p>
      <p class="text-sm mt-2 truncate">{{ data.description }}</p>


      <router-link :to="`/place/${data.id}`">
        <button class="mt-4 text-white bg-[#ffc340] px-4 py-1 rounded-full w-full text-sm hover:bg-yellow-400">
          More
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps(['data']);
</script> -->
