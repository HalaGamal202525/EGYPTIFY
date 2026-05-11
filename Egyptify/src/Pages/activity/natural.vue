<template>
  <section class="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 mb-6 cursor-pointer">
    <CardComponent
      v-for="item in historicalData"
      :key="item.id"
      :title="item.name"
      :description="item.description"
      :image="item.image"
:rating="item.rate"
      :showHeart="true" 
  :showButton="true"
  buttonText="Show Details"
 @click="() => router.push(`/naturaldetail/${item.id}`)"
    />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import CardComponent from '../../components/card.vue'
import historicalJson from '../../data/natural.json' 
// import placedetail from "./place details/natural/place detailspage.vue"

const historicalData = ref([])

import { useRouter } from "vue-router";
const router = useRouter();
const eventclick =()=>{
  router.push("./naturaldetail")
}

onMounted(() => {
  historicalData.value = historicalJson
})
</script>
