<template>
  <section class="slider-section">
<Carousel :autoplay="3000" :loop="true" :wrapAround="true">
  <Slide v-for="(img, index) in images" :key="index">
    <img :src="img" class="slide-img" />
  </Slide>
</Carousel>


    <div class="overlay">
      <div class="text-content">
        <h1 class="hero-title">Explore Egypt</h1>
        <p class="hero-description">
          Enjoy ancient wonders, vibrant culture, and unforgettable landscapes.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const images = [
  // '/public/hero/40996b0ea58ec14d349bd07f20fac572.jpg',
  // '/hero/bluehole.jpg',
  // '/hero/luxor,aswan.webp',
  //   '/hero/sailing.jpg',
  // '/hero/seasunset.jpg'
  '/public/hero/alazhar-mosque1.jpg',
  '/public/hero/hero1.jpg',
  '/src/assets/ExplorePageHero.jpg',
  '/src/assets/slider/slider4.jpg',
    '/hero/hero6.webp',
   


]
// const images = Object.values(
//   import.meta.glob('../assets/slider/*.jpg', { eager: true })
// )
</script>

<style scoped>
.slider-section {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
}

.carousel {
  height: 100%;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  padding: 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
}
</style>
