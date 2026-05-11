<script setup>
import { defineAsyncComponent } from 'vue'

import Tabs from '../../components/Tabs.vue'

const tabs = [
  {
    label: 'Top Events',
    component: defineAsyncComponent(() => import('../../components/tabs/events.vue')),
  },
  {
    label: 'Hotels',
    component: defineAsyncComponent(() => import('../../components/tabs/hotels.vue')),
  },
  {
    label: 'Restaurants',
    component: defineAsyncComponent(() => import('../../components/tabs/restaurants.vue')),
  },
  {
    label: 'Transportation',
    component: defineAsyncComponent(() => import('../../components/tabs/transportation.vue')),
  }
]
</script>

<template>
   
  <Tabs :tabs="tabs" />

</template>
