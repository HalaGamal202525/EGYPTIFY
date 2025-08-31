<template>
  <Navbar/>
  <section class="py-0 mb-8 bg-[#FFFDF9] px-4 md:px-12">
    <div class="text-center my-12">
      <h2 class="text-4xl font-bold text-gray-800 mb-2">All Packages</h2>
      <p class="text-gray-600 text-lg">Choose the right trip for you</p>
    </div>

    <!-- Tabs -->
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <button
        v-for="(category, index) in categories"
        :key="index"
        @click="selectedCategory = category.slug"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium border transition',
          selectedCategory === category.slug
            ? 'bg-[#ffc340] text-white border-[#ffc340]'
            : 'bg-white text-[#ffc340] border-[#ffc340] hover:bg-[#fff3cc]'
        ]"
      >
        {{ category.name }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="pkg in filteredPackages"
        :key="pkg.slug"
        class="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
      >
        <img :src="pkg.image" :alt="pkg.name" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h4 class="text-xl font-semibold text-gray-800">{{ pkg.name }}</h4>
          <p class="text-gray-600 text-sm mb-2">{{ pkg.shortDescription }}</p>
          <p class="text-sm font-bold text-[#ffc340]">{{ pkg.price }} • {{ pkg.duration }}</p>

          <BaseButton
          @click="handleCardClick(pkg) "
            class="inline-block mt-3 text-[#ffc340] font-medium hover:underline"
          >
            View Details →
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
  <Foot/>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import rawData from '../data/packages_data.json';
import Navbar from '../components/NavBar-Black.vue';
import Foot from '../components/footer.vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const categories = Object.values(rawData.packageCategories);
const selectedCategory = ref(categories[0]?.slug || '');
const route = useRoute();

const setCategoryFromQuery = () => {
  const queryCategory = route.query.category;
  if (queryCategory && categories.some(c => c.slug === queryCategory)) {
    selectedCategory.value = queryCategory;
  }
};

onMounted(setCategoryFromQuery);
watch(() => route.query.category, setCategoryFromQuery);
import { useCardStore } from '../data/store.js'
const bookingStore = useCardStore()

import BaseButton from '../components/BaseButton.vue';

function handleCardClick(card) {
  bookingStore.setCardData({
    image: card.image,
    title: card.title,
    rate: card.rate,
    price: card.price
  })
 router.push(`/packages/${selectedCategory.value}/${card.slug}`);}
const filteredPackages = computed(() => {
  const cat = categories.find(c => c.slug === selectedCategory.value);
  return cat ? Object.values(cat.packages) : [];
});
</script>

