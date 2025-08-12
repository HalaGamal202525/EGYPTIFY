<template>
  <div>
    <navbar />

    <div
      class="relative h-64 md:h-125 bg-cover bg-center"
      style="background-image: url('/public/Destination/background.jpg')"
    >
      <h1
        class="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold"
      >
        Destinations
      </h1>
    </div>

    <div class="p-4 md:p-9">
      <div class="flex flex-col lg:flex-row gap-6 items-start">
        <div class="w-full lg:w-64 mt-0 bg-white p-4 rounded shadow space-y-4">
          <SideFilter
            :destinationdata="destinationdata"
            @update:filters="applyFilters"
            class="text-black"
          />
        </div>
        <div class="flex-1 space-y-6">
          <section
            class="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mb-6 cursor-pointer"
          >
            <CardComponent
              v-for="item in paginatedDestinations"
              :key="item.id"
              :title="item.name"
              :description="item.description"
              :image="item.image"
              :rating="item.rate"
              :showHeart="true"
              :showButton="true"
              buttonText="Show Details"
              @click="() => router.push(`/destination/${item.id}`)"
            />
          </section>

          <!-- Pagination -->
          <div class="flex justify-center mb-16">
            <PaginationComponent
              :currentPage="currentPage"
              :totalPages="totalPages"
              @page-changed="handlePageChange"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import SideFilter from "./filterdestaination.vue";
import PaginationComponent from "../components/PaginationComponent.vue";
import CardComponent from "../components/card.vue";
import destination from "../data/Destaintion.json";
import { useRouter } from "vue-router";

const router = useRouter();

const destinationdata = ref([]);

onMounted(() => {
  destinationdata.value = destination;
});

const currentPage = ref(1);
const itemsPerPage = 6;

const filters = ref({
  location: [],
  category: [],
  rate: [],
});

function applyFilters(newFilters) {
  filters.value = newFilters;
  currentPage.value = 1;  // ارجع الصفحة الأولى لما يتغير الفلتر
}

const filteredDestinations = computed(() => {
  return destinationdata.value.filter(item => {
    const matchLocation = filters.value.location.length
      ? filters.value.location.includes(item.location)
      : true;

    const matchCategory = filters.value.category.length
      ? filters.value.category.includes(item.category)
      : true;

    const matchRate = filters.value.rate.length
      ? filters.value.rate.includes(String(item.rate))
      : true;

    return matchLocation && matchCategory && matchRate;
  });
});

const paginatedDestinations = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredDestinations.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredDestinations.value.length / itemsPerPage) || 1;
});

function handlePageChange(newPage) {
  currentPage.value = newPage;
}
</script>
