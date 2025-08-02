<template>
  <section class="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 cursor-pointer">
    <CardComponent
      v-for="item in historicalData"
      :key="item.id"
      :title="item.name"
      :description="item.description"
      :image="item.image"
:rating="item.rate"
      :showHeart="true"  
            @click="eventclick" 
      
    />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardComponent from '../../components/card.vue'
import historicalJson from '../../data/historical.json' 

const historicalData = ref([])
import { useRouter } from "vue-router";
const router = useRouter();
const eventclick =()=>{
  router.push("./historicaldetail")
}
onMounted(() => {
  historicalData.value = historicalJson
})
</script>
