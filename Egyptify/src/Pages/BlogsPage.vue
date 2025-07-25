<script setup>
import navbar from '../components/navbar.vue'
import Hero from '../components/Hero.vue'
import HeroImage from '../assets/BlogPageHero.jpg'
import BaseButton from '../components/BaseButton.vue'

import Footer from '../components/Footer.vue'
</script>

<template>
  <navbar />
  <Hero
    title="Explore the Best of Egypt"
    description="Choose your next adventure from unique cultural experiences to thrilling outdoor activities."
    :image="HeroImage"
  />

 <Footer />

</template>
