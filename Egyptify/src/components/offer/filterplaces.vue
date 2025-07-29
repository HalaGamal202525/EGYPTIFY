<template>
  <div class="flex flex-wrap gap-4 my-6">
    <!-- Category -->
    <!-- Category -->
    <div>
      <p class="font-semibold mb-2">Category</p>
      <div
        v-for="cat in [
          'Tour',
          'Natural location',
          'Entertainment location',
          'Restaurant',
          'Historical location',
          'Hotel'
        ]"
        :key="cat"
      >
        <label>
          <input type="checkbox" :value="cat" v-model="filters.type" />
          {{ cat }}
        </label>
      </div>
    </div>

    <!-- Location -->
    <div class="mt-4">
      <p class="font-semibold mb-2">Location</p>
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
          'Sinai',
        ]"
        :key="loc"
      >
        <label>
          <input type="checkbox" :value="loc" v-model="filters.location" />
          {{ loc }}
        </label>
      </div>
    </div>

    <!-- Reviews -->
    <div class="mt-4">
      <p class="font-semibold mb-2">Reviews</p>
      <div v-for="rate in [4.5, 4.0, 3.5, 3.0]" :key="rate">
        <label>
          <input
            type="radio"
            name="reviews"
            :value="rate"
            v-model="filters.review"
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
