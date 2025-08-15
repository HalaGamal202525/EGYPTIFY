<template>
  <div class="sidebar bg-gray-200 rounded-lg border border-gray-300 p-6 shadow-lg">
    <h3 class="text-xl font-semibold text-yellow-500 mb-4">Filter by:</h3>

    <!-- Location -->
    <h2 class="font-bold mb-2">Location</h2>
    <div v-if="isMobile" class="flex flex-wrap">
      <button
        v-for="loc in uniqueLocations"
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
      <div v-for="loc in uniqueLocations" :key="loc" class="flex items-center mb-1">
        <input type="checkbox" :id="`loc-${loc}`" :value="loc" v-model="filters.location" class="mx-2" />
        <label :for="`loc-${loc}`">{{ loc }}</label>
      </div>
    </div>

    <!-- Budget -->
    <h2 class="font-bold my-2">Budget</h2>
    <div v-if="isMobile" class="flex flex-wrap">
      <button
        v-for="budget in uniqueBudget"
        :key="budget"
        @click="toggleOption('budget', budget)"
        :class="[
          'px-4 py-2 rounded-2xl m-1',
          filters.budget.includes(budget) ? 'bg-yellow-200' : 'bg-white'
        ]"
      >
        {{ budget }}
      </button>
    </div>
    <div v-else>
      <div v-for="budget in uniqueBudget" :key="budget" class="flex items-center mb-1">
        <input type="checkbox" :id="`budget-${budget}`" :value="budget" v-model="filters.budget" class="mx-2" />
        <label :for="`budget-${budget}`">{{ budget }}</label>
      </div>
    </div>

    <!-- Best Time -->
    <h2 class="font-bold my-2">Best Time</h2>
    <div v-if="isMobile" class="flex flex-wrap">
      <button
        v-for="time in uniqueBestTime"
        :key="time"
        @click="toggleOption('bestTime', time)"
        :class="[
          'px-4 py-2 rounded-2xl m-1',
          filters.bestTime.includes(time) ? 'bg-yellow-200' : 'bg-white'
        ]"
      >
        {{ time }}
      </button>
    </div>
    <div v-else>
      <div v-for="time in uniqueBestTime" :key="time" class="flex items-center mb-1">
        <input type="checkbox" :id="`time-${time}`" :value="time" v-model="filters.bestTime" class="mx-2" />
        <label :for="`time-${time}`">{{ time }}</label>
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

const filters = ref({ location: [], budget: [], bestTime: [] });

const uniqueLocations = computed(() => [...new Set(props.destinationdata.map(r => r.location).filter(Boolean))]);
const uniqueBudget = computed(() => [...new Set(props.destinationdata.map(r => r.budget).filter(Boolean))]);
const uniqueBestTime = computed(() => [...new Set(props.destinationdata.map(r => r.bestTime).filter(Boolean))]);

watch(filters, newVal => emit("update:filters", newVal), { deep: true });

function toggleOption(type, value) {
  const list = filters.value[type];
  if (list.includes(value)) list.splice(list.indexOf(value), 1);
  else list.push(value);
}
</script>
