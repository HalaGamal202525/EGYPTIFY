import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favoriteIds = ref([]) // store card ids

  function toggleFavorite(card) {
    const idx = favoriteIds.value.indexOf(card.id)
    if (idx === -1) {
      favoriteIds.value.push(card.id)
    } else {
      favoriteIds.value.splice(idx, 1)
    }
  }

  function isFavorite(id) {
    return favoriteIds.value.includes(id)
  }

  return { favoriteIds, toggleFavorite, isFavorite }
})