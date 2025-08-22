<template>
  <div class="flex gap-4 mb-6">
    <DropdownMenu
      :label="selectedGuestLabel"
      :options="guestOptions"
      @select="(item) => { 
        emit('filter-guest', item.value) 
        selectedGuestLabel = item.label
      }"
    />

    <DropdownMenu
      :label="selectedPriceLabel"
      :options="priceOptions"
      @select="(item) => { 
        emit('filter-price', item.value) 
        selectedPriceLabel = item.label
      }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DropdownMenu from './DropdownMenu.vue'

const emit = defineEmits(['filter-price', 'filter-guest'])

const guestOptions = [
  { label: 'Any', value: null },
  { label: '1 Guest', value: 1 },
  { label: '2 Guests', value: 2 },
  { label: '3 Guests', value: 3 },
  { label: '4+ Guests', value: 4 }
]

const priceOptions = [
  { label: 'Any', value: null },
  { label: 'Under 500', value: 500 },
  { label: 'Under 1000', value: 1000 },
  { label: 'Under 1500', value: 1500 },
  { label: 'Under 2000', value: 2000 },
  { label: 'Under 3000', value: 3000 }
]

// قيم بتتغير مع الاختيار
const selectedGuestLabel = ref('Guests')
const selectedPriceLabel = ref('Price')

</script>
