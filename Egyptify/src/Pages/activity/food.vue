<template>
  <section class="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
    <CardComponent
      v-for="item in fooddata"
      :key="item.id"
      :title="item.name"
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
import historicalJson from '../../data/food.json' 


const fooddata = ref([])

onMounted(() => {
  fooddata.value = historicalJson
})
</script>
