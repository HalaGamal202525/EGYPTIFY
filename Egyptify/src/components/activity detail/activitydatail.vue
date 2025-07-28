<template>
  <div>
    <!-- التبويبات -->
    <div class="flex gap-4 mb-6 border-b">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[ 
          'py-2 px-4 font-semibold',
          activeTab === index ? ' bg-[#ffc340] rounded-md text-black' : 'text-gray-500'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- المحتوى حسب التبويب -->
    <component
      :is="tabs[activeTab].component"
      :key="tabs[activeTab].label" 
      v-bind="data"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: Object
})

const activeTab = ref(0)

import TabOverview from '../../Pages/activity/place details/tabsdetails/overviewtab.vue'
import TabDetails from '../../Pages/activity/place details/tabsdetails/detailtab.vue'
import TabReviews from '../../pages/activity/place details/tabsdetails/reviewstav.vue'

const tabs = [
  { label: 'Overview', component: TabOverview },
  { label: 'Details', component: TabDetails },
  { label: 'Reviews', component: TabReviews }
]
</script>
