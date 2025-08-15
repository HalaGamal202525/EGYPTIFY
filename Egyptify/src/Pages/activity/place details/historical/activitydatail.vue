<!-- <template> -->
  <!-- <div>
    <div class="flex gap-4 mb-6 ">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[ 
          'py-2 px-4 font-semibold cursor-pointer',
          activeTab === index ? ' bg-[#ffc340] rounded-md text-black' : 'text-gray-500'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <component
      :is="tabs[activeTab].component"
      :key="tabs[activeTab].label" 
      v-bind="data"
    />
  </div> -->
   <!-- <div>
    <div class="flex gap-4 mb-6">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[ 
          'py-2 px-4 font-semibold cursor-pointer',
          activeTab === index ? 'bg-[#ffc340] rounded-md text-black' : 'text-gray-500'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <component
      :is="tabs[activeTab].component"
      v-bind="tabs[activeTab].props"
    />
  </div>
</template> -->

<!-- <script setup>
import { ref,watch } from 'vue'



const props = defineProps({
  tabs: Array,
  activeTab: Number
});

const emit = defineEmits(['update:activeTab']);

const activeTab = ref(props.activeTab ?? 0);

watch(activeTab, (val) => {
  emit('update:activeTab', val);
});

const activeTab = ref(0)

import TabOverview from './tabsdetails/overviewtab.vue'
import TabDetails from './tabsdetails/detailtab.vue'
import TabReviews from './tabsdetails/reviewstav.vue'

const tabs = [
  { label: 'Overview', component: TabOverview },
  { label: 'Details', component: TabDetails },
  { label: 'Reviews', component: TabReviews }
]
</script> -->

<!-- <template>
  <div>
    <div class="flex gap-4 mb-6">
      <button
        v-for="(tab, index) in props.tabs"
        :key="index"
@click="emit('update:activeTab', index)"
        :class="[ 
          'py-2 px-4 font-semibold cursor-pointer',
          props.activeTab === index ? 'bg-[#ffc340] rounded-md text-black' : 'text-gray-500'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

<component
  v-if="props.tabs.length > 0 && props.tabs[props.activeTab]"
  :is="props.tabs[props.activeTab].component"
  :key="props.activeTab"  
  :data="props.tabs[props.activeTab].props"
/>



  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TabOverview from './tabsdetails/overviewtab.vue'
import TabDetails from './tabsdetails/detailtab.vue'
import TabReviews from './tabsdetails/reviewstav.vue'


import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  tabs: Array,
    fullData: Object,
  activeTab: Number
})

const emit = defineEmits(['update:activeTab'])

const activeTab = ref(0)

const tabs = computed(() => {
  if (!props.fullData) return []

  return [
    {
      label: 'Overview',
      component: TabOverview,
      props: props.fullData.overview
    },
    {
      label: 'Details',
      component: TabDetails,
      props: props.fullData.detail
    },
    {
      label: 'Reviews',
      component: TabReviews,
      props: props.fullData.review
    }
  ]
})

</script> -->

<!-- <script setup>
import { ref, computed } from 'vue'
import { defineProps, defineEmits } from 'vue'

import TabOverview from './tabsdetails/overviewtab.vue'
import TabDetails from './tabsdetails/detailtab.vue'
import TabReviews from './tabsdetails/reviewstav.vue'

const props = defineProps({
  fullData: Object,
  activeTab: Number
})

const emit = defineEmits(['update:activeTab'])

const tabs = computed(() => {
  if (!props.fullData) return []

  return [
    {
      label: 'Overview',
      component: TabOverview,
      props: props.fullData.overview
    },
    {
      label: 'Details',
      component: TabDetails,
      props: props.fullData.detail
    },
    {
      label: 'Reviews',
      component: TabReviews,
      props: props.fullData.review
    }
  ]
})
</script>

<template>
  <div>
    <div class="flex gap-4 mb-6">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="emit('update:activeTab', index)"
        :class="[
          'py-2 px-4 font-semibold cursor-pointer',
          activeTab === index ? 'bg-[#ffc340] rounded-md text-black' : 'text-gray-500'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <component
      v-if="tabs.length > 0 && tabs[activeTab]"
      :is="tabs[activeTab].component"
      :key="activeTab"
      v-bind="tabs[activeTab].props"
    />
  </div>
</template> -->



<template>
  <div class="p-6">
    <!-- Tabs -->
    <div class="flex gap-4 mb-6">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'py-2 px-4 font-semibold rounded-md',
          activeTab === index
            ? 'bg-[#ffc340] text-black'
            : 'bg-gray-100 text-gray-600'
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Content based on active tab -->
    <div v-if="activeTab === 0">
      <!-- Overview Tab -->
      <h2 class="text-2xl font-bold">{{ place.name }}</h2>
      <p class="text-gray-600 mt-2">{{ place.overview.description }}</p>
      <div class="mt-4">
        <span class="font-semibold">Rating:</span> {{ place.rating }}
        <i class="fa-solid fa-star text-yellow-500 ml-2"></i>
      </div>
    </div>

    <div v-if="activeTab === 1">
      <!-- Details Tab -->
      <h3 class="text-xl font-bold mb-2">Details</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-1">
        <li><strong>Visiting Hours:</strong> {{ place.detail.visitingHours }}</li>
        <li><strong>Entry Fees:</strong> {{ place.detail.entryFees }}</li>
        <li><strong>Location:</strong> {{ place.address }}</li>
      </ul>
    </div>

    <div v-if="activeTab === 2">
      <!-- Reviews Tab -->
      <h3 class="text-xl font-bold mb-4">Reviews</h3>
      <ul class="space-y-3">
        <li v-for="(review, index) in place.review.reviews" :key="index" class="bg-gray-100 p-4 rounded-lg">
          <p class="font-semibold text-gray-800">{{ review.user }}</p>
          <p class="text-gray-600">{{ review.comment }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Tabs labels
const tabs = ['Overview', 'Details', 'Reviews']
const activeTab = ref(0)

// // Fake place data (تقدر تجيبها من ملف JSON لو عايز)
// const place = {
//   name: 'Pyramids of Giza',
//   rating: 4.8,
//   address: 'Giza, Egypt',
//   overview: {
//     description: 'The Pyramids of Giza are among the most magnificent man-made structures in history.'
//   },
//   detail: {
//     visitingHours: '8 AM - 5 PM',
//     entryFees: '100 EGP for Egyptians, 200 EGP for foreigners'
//   },
//   review: {
//     reviews: [
//       { user: 'Ahmed', comment: 'Amazing experience!' },
//       { user: 'Sara', comment: 'A must-visit place!' }
//     ]
//   }
// }
</script>

<style scoped>
button {
  transition: all 0.2s ease-in-out;
}
</style>

