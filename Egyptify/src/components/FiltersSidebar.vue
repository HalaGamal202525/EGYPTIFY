<template>
  <div class="filters-sidebar text-black">
    <h3 class="text-lg font-bold mb-2">Filter by</h3>

    <div v-for="(group, groupName) in filters" :key="groupName" class="filter-group">
      <h4 class="text-base font-semibold mb-1">{{ groupName }}</h4>
      <div v-for="option in group" :key="option" class="filter-option">
        <label class="flex items-center gap-2">
          <input type="checkbox" :value="option" v-model="selected[groupName]" />
          <span>{{ option }}</span>
        </label>
      </div>
    </div>

    <!-- Reset Button -->
    <button class="reset-button" @click="resetFilters">
      Reset Filter
    </button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const filters = {
  'Location / Region': ['Cairo', 'Luxor', 'Aswan', 'Red Coast', 'Delta'],
  'Destination Type': ['Natural', 'Cultural', 'Beach', 'Historic', 'Shopping', 'Family-Friendly'],
  'Available Activities': ['Diving', 'Hiking', 'Museums', 'Markets', 'Festivals / Events'],
  'Budget Level': ['Elite', '$500-1000', 'Economy'],
  'Suggested Visit Duration': ['More than 3 days', 'Less than 3 days', '2-3 days'],
  'Best Time to Visit': ['Winter', 'Spring', 'Summer'],
  'Suitable For': ['Families', 'Solo Travelers', 'Couples', 'Accessibility-Friendly']
}

const selected = reactive({
  'Location / Region': [],
  'Destination Type': [],
  'Available Activities': [],
  'Budget Level': [],
  'Suggested Visit Duration': [],
  'Best Time to Visit': [],
  'Suitable For': []
})

const resetFilters = () => {
  for (const key in selected) {
    selected[key] = []
  }
}
</script>

<style scoped>
.filters-sidebar {
  width: 402px;
  margin-left: 120px;
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

.filter-group {
  margin-bottom: 1rem;
}

.filter-option {
  margin-left: 1rem;
  font-size: 14px;
}

.reset-button {
  background-color: #ffa726; /* نفس لون الصورة */
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reset-button:hover {
  background-color: #fb8c00;
}
</style>
