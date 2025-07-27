<template>
  <Navbar />
  <Hero title="Activity" :image="Heroimage" />
  <Footer />
</template>

<script setup>
import Navbar from '../../components/navbar.vue'
import Hero from "../../components/Hero.vue"
import Footer from "../../components/Footer.vue"

import  Heroimage from "/sara/pyramids (3).jpg"
</script>
