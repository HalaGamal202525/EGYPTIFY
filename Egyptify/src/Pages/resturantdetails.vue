<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Navbar from "../components/NavBar-Black.vue";
import Footer from "../components/footer.vue";
import { generateRestaurantDetails } from "../data/fakedata";

const route = useRoute();
const restaurant = ref(null);

onMounted(() => {
  const slug = route.params.slug;
  restaurant.value = generateRestaurantDetails(slug);
});
</script>

<template>
  <Navbar />

    <div class="container mx-auto px-4 mt-28 ">
      <router-link
         to="/destination"
        class="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-100"
      >
        <i class="fas fa-arrow-left mr-2 text-lg"></i>
        <span class="font-medium">Back</span>
      </router-link>
    </div>
  <!-- <div v-if="restaurant" class="max-w-6xl mx-auto p-6 mt-10">
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
 
  <img
    v-if="restaurant.images.length > 0"
    :src="restaurant.images[0]"
    class="w-full h-full object-cover rounded-xl shadow md:col-span-2 row-span-2"
  />

 
  <img
    v-for="(img, index) in restaurant.images.slice(1, 3)"
    :key="index"
    :src="img"
    class="w-full h-58  object-cover rounded-xl shadow"
  />
</div> -->

<div v-if="restaurant" class="max-w-6xl mx-auto p-6 mt-10">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <!-- الصورة الكبيرة على اليسار -->
    <img
      v-if="restaurant.images.length > 0"
      :src="restaurant.images[0]"
      class="w-full h-[500px] object-cover rounded-xl shadow md:col-span-2 md:row-span-2"
    />

    <!-- الصورتين على اليمين فوق بعض -->
    <div class="flex flex-col gap-6"> <!-- زودت المسافة لـ gap-6 -->
      <img
        v-for="(img, index) in restaurant.images.slice(1, 3)"
        :key="index"
        :src="img"
        class="w-full h-[240px] object-cover rounded-xl shadow"
      />
    </div>
  </div>








  <!-- باقي التفاصيل زي ما هي -->

    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">{{ restaurant.name }}</h1>
        <div class="flex items-center gap-2 text-yellow-500 mt-1">
          <i class="fa-solid fa-star"></i>
          <span class="font-semibold">{{ restaurant.rating }}</span>
          <span class="text-gray-500">({{ restaurant.reviewsCount }} reviews)</span>
        </div>
        <p class="text-gray-500 mt-1">{{ restaurant.rank }}</p>
      </div>
      <div class="mt-4 md:mt-0 text-right">
        <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
          {{ restaurant.priceRange }}
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="space-y-2">
        <p><i class="fa-solid fa-utensils text-gray-600"></i> {{ restaurant.cuisine }}</p>
        <p><i class="fa-solid fa-location-dot text-gray-600"></i> {{ restaurant.address }}</p>
        <p><i class="fa-solid fa-phone text-gray-600"></i> {{ restaurant.phone }}</p>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">About</h2>
        <p class="text-gray-700">{{ restaurant.description }}</p>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-semibold mb-4">Reviews</h2>
      <div
        v-for="(review, index) in restaurant.reviews"
        :key="index"
        class="flex gap-4 mb-4 p-4 bg-white rounded-lg shadow"
      >
        <img
          :src="review.avatar"
          class="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div class="flex items-center gap-2">
            <h3 class="font-semibold">{{ review.name }}</h3>
            <span class="text-sm text-gray-500">{{ review.date }}</span>
          </div>
          <div class="flex items-center text-yellow-500 text-sm">
            <i class="fa-solid fa-star mr-1"></i>{{ review.rating }}
          </div>
          <p class="text-gray-700 mt-1">{{ review.comment }}</p>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
