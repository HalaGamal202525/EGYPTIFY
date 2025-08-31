<template>
  <div class="sidebar bg-gray-200 rounded-lg border border-gray-300 p-6 shadow-lg">
    <h3 class="text-xl font-semibold text-yellow-500 mb-4">Filter by:</h3>

    <!-- Governorate -->
    <h2 class="text-[20px] font-semibold mb-2">Governorate</h2>
    <div v-if="isMobile" class="flex flex-wrap">
      <button
        v-for="gov in uniqueGovernorates"
        :key="gov"
        @click="toggleOption('governorate', gov)"
        :class="[
          'px-4 py-2 rounded-2xl m-1',
          filters.governorate.includes(gov) ? 'bg-yellow-200' : 'bg-white'
        ]"
      >
        {{ gov }}
      </button>
    </div>
<div v-else>
  <div v-for="gov in uniqueGovernorates" :key="gov" class="flex items-center mb-1">
    <input type="checkbox" :id="`gov-${gov}`" :value="gov" v-model="filters.governorate" class="mx-2" />
    <label :for="`gov-${gov}`">{{ gov }}</label>
  </div>
</div>


    <!-- Rating -->
    <h2 class="text-[20px] font-semibold mb-2">Rating</h2>
    <div v-if="isMobile" class="flex flex-wrap">
      <button
        v-for="rate in uniqueRatings"
        :key="rate"
        @click="toggleOption('rating', rate)"
        :class="[
          'px-4 py-2 rounded-2xl m-1',
          filters.rating.includes(rate) ? 'bg-yellow-200' : 'bg-white'
        ]"
      >
        ⭐ {{ rate }}+
      </button>
    </div>
    <div v-else>
      <div v-for="rate in uniqueRatings" :key="rate" class="flex items-center mb-1">
        <input type="checkbox" :id="`rate-${rate}`" :value="rate" v-model="filters.rating" class="mx-2" />
        <label :for="`rate-${rate}`">⭐ {{ rate }}+</label>
      </div>
    </div>

    <!-- Cuisine -->
    <h2 class="text-[20px] font-semibold mb-2">Cuisine</h2>
    <div v-if="isMobile" class="flex flex-wrap">
      <button
        v-for="cuisine in uniqueCuisines"
        :key="cuisine"
        @click="toggleOption('cuisine', cuisine)"
        :class="[
          'px-4 py-2 rounded-2xl m-1',
          filters.cuisine.includes(cuisine) ? 'bg-yellow-200' : 'bg-white'
        ]"
      >
        {{ cuisine }}
      </button>
    </div>
    <div v-else>
      <div v-for="cuisine in uniqueCuisines" :key="cuisine" class="flex items-center mb-1">
        <input type="checkbox" :id="`cuisine-${cuisine}`" :value="cuisine" v-model="filters.cuisine" class="mx-2" />
        <label :for="`cuisine-${cuisine}`">{{ cuisine }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  destinationdata: { type: Array, default: () => [] },
  isMobile: { type: Boolean, default: false },
});

const emit = defineEmits(["update:filters"]);

const filters = ref({ governorate: [], rating: [], cuisine: [] });

const uniqueGovernorates = computed(() => [...new Set(props.destinationdata.map(r => r.governorate))]);
const uniqueRatings = computed(() => [...new Set(props.destinationdata.map(r => Math.floor(r.rating)))].sort((a,b)=>b-a));
const uniqueCuisines = computed(() => [...new Set(props.destinationdata.map(r => r.cuisine))]);

watch(filters, newVal => emit("update:filters", newVal), { deep: true });

function toggleOption(type, value) {
  const list = filters.value[type];
  if (list.includes(value)) list.splice(list.indexOf(value), 1);
  else list.push(value);
}
</script>
