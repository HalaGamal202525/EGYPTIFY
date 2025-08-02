<template>
  <Navbar />

  <div class="flex px-6 my-20 py-4 gap-6 flex-col sm:flex-row">
    <!-- اليسار: التفاصيل -->
     <div class="flex-1  rounded-md border border-black"> 
      <div class="px-6 py-4 space-y-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <button @click="$router.back()" class="text-gray-900 hover:text-black text-xl"><i class="fa-solid fa-arrow-left !text-black"></i></button>
            <h1 class="text-2xl text-black  font-bold">Pyramids of Giza</h1>
          </div>
          <p class="text-lg text-gray-500 font-medium">Historical</p>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <img
            src="../../../../../public/Details/historical/1753012412581.jpg"
            alt="Main Image"
            class="col-span-3 row-span-3 w-full h-[400px] object-cover rounded-xl shadow"
          />
          <div class="col-span-1 flex flex-col gap-4">
             <img
            src="../../../../../public/Details/historical/camel-1839616_1920.jpg"
            alt="Main Image"
class="w-full h-[120px] object-cover rounded-xl shadow"          />  <img
            src=   "../../../../../public/Details/historical/pyramids (3).jpg"
            alt="Main Image"
class="w-full h-[120px] object-cover rounded-xl shadow"          />  <img
            src= "../../../../../public/Details/historical/pyramids (4).jpg"

            alt="Main Image"
class="w-full h-[120px] object-cover rounded-xl shadow"          />
          </div>
        </div>


   <section class="px-4 md:px-16 border rounded-md">
<TabComponent :tabs="tabs" v-model:activeTab="selectedTab" />
    </section>


      </div>
    </div> 
    <div class=" sticky top-24 h-fit md:w-1/3 w-full ">
      <sidecard title="Related Places" :items="data.slice(1)" />
    </div>
  </div>

  <foot />
</template>

<script setup>
import { ref, computed } from 'vue'
import Navbar from '../../../../components/NavBar-Black.vue'
import sidecard from '../../../../components/activity detail/sidecard.vue'
import foot from '../../../../components/footer.vue'
import TabComponent from './activitydatail.vue'
import overviewtab from './tabsdetails/overviewtab.vue'

import data from '../../../../data/historical.json'
import fooddetail from '../../../../data/detail/food.json'

// بيانات المكان
const place = fooddetail[0]
const activeTab = ref(0)
const tabs= [
  {label :'overview',component : overviewtab}
]

const selectedTab = ref(0)
</script>
