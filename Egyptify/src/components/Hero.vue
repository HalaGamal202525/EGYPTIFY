<template>
  <section class="hero-section" :style="backgroundStyle">
    <div class="overlay">
      <div class="hero-content">
        <div class="text-wrapper">
          <h1 class="hero-title">{{ title }}</h1>
          <p class="hero-description">{{ description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue' // ✅ لازم تضيفي السطر ده

const props = defineProps({
  title: String,
  description: String,
  image: String
})

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))
</script>

<style scoped>
.hero-section {
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-wrapper {
  text-align: center;
  color: white;
  max-width: 700px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>
