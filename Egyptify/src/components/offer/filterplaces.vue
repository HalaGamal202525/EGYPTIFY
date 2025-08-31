<template>
  <div class="flex flex-wrap gap-4 my-6 bg-gray-200 p-3 rounded-2xl">
    <!-- Category -->
    <div>
      <p class="text-[20px] font-semibold mb-2">Category</p>

      <div v-if="isMobile" class="flex flex-wrap">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="toggleOption('type', cat)"
          :class="[
            'px-4 py-2 rounded-2xl m-1',
            filters.type.includes(cat) ? 'bg-yellow-200' : 'bg-white'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <div v-else>
        <div v-for="cat in categories" :key="cat" class="font-light">
          <label class="!text-[16px] !font-normal">
            <input type="checkbox" :value="cat" v-model="filters.type" class="mr-1" />
            {{ cat }}
          </label>
        </div>
      </div>
    </div>

    <!-- Location -->
    <div class="mt-6">
      <p class="text-[20px] font-semibold mb-2">Location</p>

      <div v-if="isMobile" class="flex flex-wrap">
        <button
          v-for="loc in locations"
          :key="loc"
          @click="toggleOption('location', loc)"
          :class="[
            'px-4 py-2 rounded-2xl m-1',
            filters.location.includes(loc) ? 'bg-yellow-200' : 'bg-white'
          ]"
        >
          {{ loc }}
        </button>
      </div>

      <div v-else>
        <div v-for="loc in locations" :key="loc">
          <label class="!text-[16px] !font-normal">
            <input type="checkbox" :value="loc" v-model="filters.location" class="mr-1" />
            {{ loc }}
          </label>
        </div>
      </div>
    </div>

    <!-- Reviews -->
    <div class="mt-6">
      <p class="text-[20px] font-semibold mb-2">Rate</p>

      <div v-if="isMobile" class="flex flex-wrap">
        <button
          v-for="rate in rates"
          :key="rate"
          @click="toggleOption('review', rate)"
          :class="[
            'px-4 py-2 rounded-2xl m-1',
            filters.review.includes(rate) ? 'bg-yellow-200' : 'bg-white'
          ]"
        >
         ⭐ {{ rate }}+
        </button>
      </div>

      <div v-else>
        <div v-for="rate in rates" :key="rate">
          <label class="!text-[16px] !font-normal">
            <input type="checkbox" :value="rate" v-model="filters.review" class="mr-1" />
           ⭐ {{ rate }}+
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive, watch } from "vue";

const props = defineProps({
  allPlaces: Array,
  isMobile: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(["update:filters"]);

const categories = [
  "Tour",
  "Natural location",
  "Entertainment location",
  "Historical location",
  "Restaurant",
  "Hotel"
];

const locations = [
  "Cairo",
  "Sharm El-Sheikh",
  "Luxor",
  "Hurghada",
  "Aswan",
  "Dahab",
  "Siwa",
  "Giza",
  "Sinai"
];

const rates = [4.5, 4.0, 3.5, 3.0];

// الفلاتر المختارة
const filters = reactive({
  type: [],
  location: [],
  review: []
});

watch(
  filters,
  () => {
    emit("update:filters", filters);
  },
  { deep: true }
);

function toggleOption(type, value) {
  const list = filters[type];
  if (list.includes(value)) {
    filters[type] = list.filter((v) => v !== value);
  } else {
    filters[type].push(value);
  }
}
</script>
