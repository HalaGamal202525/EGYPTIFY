<template>
  <div class="flex flex-wrap gap-4 my-6 bg-gray-100 p-3 rounded-2xl">
    <!-- Category -->
  
<div>
  <p class="text-[24px] font-semibold mb-2">Category</p>
  <div
    v-for="cat in [
      'Tour',
      'Natural location',
      'Entertainment location',
      'Historical location',
      'Restaurant',
      'Hotel'
    ]"
    :key="cat"
    class="font-light"
  >
    <label class="!text-[16px] !font-normal">
      <input type="checkbox" :value="cat" v-model="filters.type" class="mr-1" />
      {{ cat }}
    </label>
  </div>
</div>

<!-- Location -->
<div class="mt-6">
  <p class="text-[24px] font-semibold mb-2">Location</p>
  <div
    v-for="loc in [
      'Cairo',
      'Sharm El-Sheikh',
      'Luxor',
      'Hurghada',
      'Aswan',
      'Dahab',
      'Siwa',
      'Giza',
      'Sinai'
    ]"
    :key="loc"
  >
    <label class="!text-[16px] !font-normal">
      <input type="checkbox" :value="loc" v-model="filters.location" class="mr-1" />
      {{ loc }}
    </label>
  </div>
</div>

<!-- Reviews -->
<div class="mt-6">
  <p class="text-[24px] font-semibold mb-2">Reviews</p>
  <div v-for="rate in [4.5, 4.0, 3.5, 3.0]" :key="rate">
    <label class="!text-[16px] !font-normal">
      <input
        type="checkbox"
        name="reviews"
        :value="rate"
        v-model="filters.review"
        class="mr-1"
      />
      {{ rate }} & up
    </label>
  </div>
</div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, reactive, watch } from "vue";

const props = defineProps({
  allPlaces: Array,
});
const emit = defineEmits(["update:filters"]);

// اجمع القيم الموجودة
const type = [...new Set(props.allPlaces.map((p) => p.type))];
const locations = [...new Set(props.allPlaces.map((p) => p.location))];

// الفلاتر المختارة
const filters = reactive({
  type: [],
  location: [],
  review: [],
});

watch(
  filters,
  () => {
    emit("update:filters", filters);
  },
  { deep: true }
);
</script>
<style>

input[type="checkbox"] {
  appearance: none; /* يخفي الشكل الافتراضي */
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 20px;
  height: 20px;
  border: none;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  position: relative;
}

input[type="checkbox"]:checked {
  background-color: #ffc340;
}

input[type="checkbox"]:checked::after {
  content: "✓";
  color: white;
  position: absolute;
  top: 0;
  left: 4px;
  font-size: 16px;
}
</style>
