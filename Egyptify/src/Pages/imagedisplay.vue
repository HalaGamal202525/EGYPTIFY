<template>
  <div>
    <img :src="store.selectedImage" class="w-48 h-48 object-cover cursor-pointer" @click="openModal" />
    <ImageModal :show="showModal" :images="imageList" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useImageStore } from '../store/imageStore';
import ImageModal from './ImageModal.vue';

const store = useImageStore();
const showModal = ref(false);

const imageList = [
  '/about-us/girl-3.png',
  '/about-us/girl-4.png',
  '/about-us/girl-6.png',
  '/about-us/girl-7.png',
  '/about-us/girl-10.png'
];

function openModal() {
  showModal.value = true;
}
</script>
