<!-- src/pages/YourPage.vue -->
<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
<Hero
  :title="currentHero.title"
  :description="currentHero.description"
  :image="currentHero.image"
/>


    <!-- Tabs Section -->
    <section class="px-4 md:px-16 border ">
<Tabs :tabs="tabsWithComponents" v-model:activeTab="activeTab" />    </section>

    <!-- Footer -->
    <foot />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import Navbar from '../../components/navbar.vue'
import Tabs from '../../components/Tabs.vue'
import Hero from '../../components/Hero.vue'
import foot from '../../components/footer.vue'

import Historical from '../activity/historicalactivity.vue'
import Natural from '../activity/natural.vue'
import Entertainment from '../activity/entertainment.vue'
import Food from '../activity/food.vue'

import herohistorical from"../../../public/historical/Rectangle 2.png"
import heronatural from "../../../public/natural/sea2.jpg"


// 🟡 Tabs array with hero data
const tabsWithComponents = [
  {
    label: 'Historical & Cultural Sites',
    component: Historical,
    hero: {
      title: 'Attractions & Activities',
      description: 'Explore monuments and cultural sites in Egypt.',
      image:herohistorical
    }
  },
  {
    label: 'Natural Attractions',
    component: Natural,
    hero: {
      title: 'Nature Wonders',
      description: 'Relax in oases, mountains, and the Nile valley.',
      image: heronatural
    }
  },
  {
    label: 'Food & Dining',
    component: Food,
    hero: {
      title: 'Taste Egypt',
      description: 'From koshari to stuffed vine leaves, taste it all!',
      image: '/images/food.jpg'
    }
  },
  {
    label: 'Entertainment Venues',
    component: Entertainment,
    hero: {
      title: 'Fun & Entertainment',
      description: 'Find amusement parks, beaches, and nightlife.',
      image: '/images/entertainment.jpg'
    }
  }
]

// 🟢 Selected tab
const activeTab = ref(0)

// 🟢 Current hero section
const currentHero = computed(() => tabsWithComponents[activeTab.value].hero)
</script>
