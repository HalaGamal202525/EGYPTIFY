<template>
  <section class="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 mb-6 cursor-pointer">
<CardComponent
  v-for="item in historicalData"
  :key="item.id"
  :id="item.id"
  :title="item.name"
  :description="item.description"
  :location="item.location"
  :image="item.image"
  :rating="item.rate"
  :showHeart="true"
 :showButton="true"
  buttonText="Show Details"
 @click="() => router.push(`/historicaldetail/${item.id}`)">

</CardComponent>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CardComponent from "../../components/card.vue";
import sidefilter from "../filterdestaination.vue"
import historicalJson from "../../data/historical.json";

const historicalData = ref([]);
import { useRouter } from "vue-router";
const router = useRouter();
// const handleDetailsClick = (e, id) => {
//   if (e && e.target && e.target.innerText === 'Show Details') {
//     router.push(`/historicaldetail/${id}`);
//   }
// };


onMounted(() => {
  historicalData.value = historicalJson;
});
</script>
