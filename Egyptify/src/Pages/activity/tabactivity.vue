<!-- src/Pages/activity/tabactivity.vue -->
<template>
  <Tabs :tabs="tabs" class="gap-6 " />
  <router-view /> <!-- مهم جدًا! -->
</template>

<script setup>
import Tabs from '../../components/Tabs.vue'

const tabs = [
  { label: 'Historical', route: '/activity/historical' },
  { label: 'Natural', route: '/activity/natural' },
  { label: 'Entertainment', route: '/activity/entertainment' },
  { label: 'Food', route: '/activity/food' }
]
</script>
