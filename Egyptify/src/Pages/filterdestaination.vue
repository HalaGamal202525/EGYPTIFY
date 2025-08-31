
<template>
  <div
    class="sidebar bg-gray-200 rounded-lg border border-gray-300 p-6 shadow-lg"
  >
    <h3 class="text-xl font-semibold text-yellow-500">Filter by:</h3>

    <!-- Location -->
    <h2 class="text-[20px] font-semibold mb-2">Location</h2>
    <div class="filter-group">
      <div v-if="isMobile" class="flex flex-wrap">
        <button
          v-for="loc in uniqueLocations"
          :key="loc"
          @click="toggleOption('location', loc)"
          :class="[
            'px-4 py-2 rounded-2xl m-1',
            filters.location.includes(loc) ? 'bg-yellow-200' : 'bg-white',
          ]"
        >
          {{ loc }}
        </button>
      </div>
      <div v-else>
        <div v-for="loc in uniqueLocations" :key="loc">
          <input
            type="checkbox"
            :id="`loc-${loc}`"
            :value="loc"
            v-model="filters.location"
            class="mx-3"
          />
          <label :for="`loc-${loc}`">{{ loc }}</label>
        </div>
      </div>
    </div>

    <!-- Category -->

    <h2 class="text-[20px] font-semibold mb-2">Category</h2>

    <div v-if="isMobile" class="flex flex-wrap">
      <button
        v-for="type in uniqueCategory"
        :key="type"
        @click="toggleOption('category', type)"
        :class="[
          'px-4 py-2 rounded-2xl m-1',
          filters.category.includes(type) ? 'bg-yellow-200' : 'bg-white',
        ]"
      >
        {{ type }}
      </button>
    </div>
     <div v-else>
        <div v-for="type in uniqueCategory" :key="type">
          <input
            type="checkbox"
            :id="`type-${type}`"
            :value="type"
            v-model="filters.category"
            class="mx-3"
          />
          <label :for="`type-${type}`">{{ type }}</label>
        </div>
      </div>
    <!-- Rate -->

    <h2 class="text-[20px] font-semibold mb-2">Rate</h2>
    <div v-if="isMobile" class="flex flex-wrap">
      <button
        v-for="rate in uniqueRate"
        :key="rate"
        @click="toggleOption('rate', rate)"
        :class="[
          'px-4 py-2 rounded-2xl m-1',
          filters.rate.includes(rate) ? 'bg-yellow-200' : 'bg-white',
        ]"
      >
        ⭐ {{ rate }}
      </button>
    </div>
     <div v-else>
        <div v-for="rate in uniqueRate" :key="type">
          <input
            type="checkbox"
            :id="`rate-${rate}`"
            :value="rate"
            v-model="filters.rate"
            class="mx-3"
          />
          <label :for="`rate-${rate}`">⭐ {{ rate }}</label>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  destinationdata: {
    type: Array,
    default: () => [],
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:filters"]);

const filters = ref({
  location: [],
  category: [],
  rate: [],
});

const uniqueLocations = computed(() => [
  ...new Set(props.destinationdata.map((d) => d.location).filter(Boolean)),
]);
const uniqueCategory = computed(() => [
  ...new Set(props.destinationdata.map((d) => d.category).filter(Boolean)),
]);
const uniqueRate = computed(() => [
  ...new Set(props.destinationdata.map((d) => String(d.rate)).filter(Boolean)),
]);

watch(
  filters,
  (newVal) => {
    emit("update:filters", newVal);
  },
  { deep: true }
);

function toggleOption(type, value) {
  const list = filters.value[type];
  if (list.includes(value)) {
    filters.value[type] = list.filter((v) => v !== value);
  } else {
    filters.value[type].push(value);
  }
}
</script>
