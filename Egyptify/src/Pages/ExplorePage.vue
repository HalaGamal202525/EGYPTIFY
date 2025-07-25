<script setup>
import navbar from '../components/navbar.vue'
import Hero from '../components/Hero.vue'
import HeroImage from '../assets/ExplorePageHero.jpg' // دي أهم خطوة

</script>

<template>
  <navbar />
  <Hero
    title="Explore the Best of Egypt"
    description="Choose your next adventure from unique cultural experiences to thrilling outdoor activities."
    :image="HeroImage"
  />
</template>
