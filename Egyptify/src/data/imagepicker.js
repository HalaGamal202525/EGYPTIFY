// stores/imageStore.js
import { defineStore } from 'pinia';

export const useImageStore = defineStore('image', {
  state: () => ({
    selectedImage: localStorage.getItem('selectedImage') || null
  }),
  actions: {
    setSelectedImage(image) {
      this.selectedImage = image;
      localStorage.setItem('selectedImage', image);
    },
    loadImageFromStorage() {
      const savedImage = localStorage.getItem('selectedImage');
      if (savedImage) {
        this.selectedImage = savedImage;
      }
    }
  }
});
