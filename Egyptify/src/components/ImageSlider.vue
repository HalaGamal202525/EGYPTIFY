<template>
  <section class="slider-section">
    <Carousel
      :autoplay="true"
      :loop="true"
      :autoplayTimeout="15000"
      :transition="2000"
      :pauseAutoplayOnHover="false"
      :wrapAround="true"
      class="carousel"
    >
      <Slide v-for="(img, index) in images" :key="index">
        <img :src="img.default" class="slide-img" />
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

const images = Object.values(
  import.meta.glob('../assets/slider/*.jpg', { eager: true })
)
</script>

<style scoped>
.slider-section {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
}

.carousel {
  height: 100%;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
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
