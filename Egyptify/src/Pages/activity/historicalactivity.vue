<template>
  <section class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
    <CardComponent
      v-for="item in historicalData"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :image="item.image"
:rating="item.rate"
      :showHeart="true"  
    />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardComponent from '../../components/card.vue'
import historicalJson from '../../data/historical.json' 

const historicalData = ref([])

onMounted(() => {
  historicalData.value = historicalJson
})
</script>
