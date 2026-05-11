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
    <section class="px-4 md:px-16  mt-6">
      <Tabs :tabs="tabsWithComponents" v-model:activeTab="activeTab"  class="cursor-pointer"/>
    </section>

    <!-- Footer -->
    <foot />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import Navbar from "../../components/navbar.vue";
import Tabs from "../../components/tabactivity.vue";
import Hero from "../../components/Hero.vue";
import foot from "../../components/footer.vue";

import Historical from "../activity/historicalactivity.vue";
import Natural from "../activity/natural.vue";
import Entertainment from "../activity/entertainment.vue";
import Food from "../activity/food.vue";

// import herohistorical from"../../../public/historical/Rectangle 2.png"
// import heronatural from "../../../public/natural/sea2.jpg"
// import heroenter from "../../../public/entertainment/hero.png"
// import herofood from "../../../public/food/hero.png"

const tabsWithComponents = [
  {
    label: "Historical & Cultural Sites",
    component: Historical,
    hero: {
      title: "Attractions & Activities",
      description: "Explore monuments and cultural sites in Egypt.",
      image: "/historical/Rectangle2.png",
    },
  },
  {
    label: "Natural Attractions",
    component: Natural,
    hero: {
      title: "Nature Wonders",
      description: "Relax in oases, mountains, and the Nile valley.",
      image: "/natural/sea2.jpg",
    },
  },
  {
    label: "Entertainment Venues",
    component: Entertainment,
    hero: {
      title: "Fun & Entertainment",
      description: "Find amusement parks, beaches, and nightlife.",
      image: "/entertainment/hero.png",
    },
  },
  {
    label: "Food & Dining",
    component: Food,
    hero: {
      title: "Taste Egypt",
      description: "From koshari to stuffed vine leaves, taste it all!",
      image: "/food/hero.png",
    },
  },
];

const activeTab = ref(0);

const currentHero = computed(() => tabsWithComponents[activeTab.value].hero);
</script>
