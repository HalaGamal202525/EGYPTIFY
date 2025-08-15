<template>
  <Navbar />

  <div class="flex px-6 my-20 py-4 gap-6 flex-col sm:flex-row">
    <div class="flex-1 rounded-md border border-black">
      <div class="px-6 py-4 space-y-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-4">
              <button
                @click="$router.back()"
                class="text-gray-900 hover:text-black text-xl"
              >
                <i class="fa-solid fa-arrow-left !text-black"></i>
              </button>
            </div>
            <h1 class="text-2xl font-bold text-black">
              {{ place?.name || "Place not found" }}
            </h1>
          </div>
          <p class="text-lg text-gray-500 font-medium">
            {{ place?.category || "" }}
          </p>
        </div>

<div class="grid grid-cols-4 gap-4" v-if="place && place.images && place.images.length">
  <!-- الصورة الرئيسية -->
  <img
    :src="place.images[0]"
    alt="Main Image"
    class="col-span-3 row-span-3 w-full h-[400px] object-cover rounded-xl shadow"
  />

  <!-- باقي الصور -->
  <div class="col-span-1 flex flex-col gap-4">
    <img
      v-for="(img, index) in place.images.slice(1)"
      :key="index"
      :src="img"
      alt="Sub Image"
      class="w-full h-[120px] object-cover rounded-xl shadow"
    />
  </div>
</div>


        <section class="px-4 md:px-16 rounded-md">
          <div class="p-4">
            <div class="flex gap-4 shadow-xl h-14 rounded-md mb-6">
              <button
                v-for="(tab, index) in tabs"
                :key="index"
                @click="activeTab = index"
                :class="[
                  'py-2 px-4 font-semibold cursor-pointer',
                  activeTab === index
                    ? 'bg-[#ffc340] rounded-md text-black'
                    : 'text-gray-500',
                ]"
              >
                {{ tab }}
              </button>
            </div>

            <div v-if="activeTab === 0">
              <div class="flex flex-col md:flex-row gap-8 p-4">
                <div class="md:w-2/3 space-y-6">
                  <div>
                    <h2 class="text-3xl font-bold text-gray-800">
                      {{ overviewData.name }}
                    </h2>
                    <p class="mt-2 text-gray-600">
                      {{ overviewData.description }}
                    </p>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="text-lg text-black"
                      >Rate: {{ overviewData.rating }}
                    </span>
                    <span class="text-yellow-500 text-xl"
                      ><i class="fa-solid fa-star"></i
                    ></span>
                  </div>

                  <div class="flex gap-4">
                    <BaseButton @click="bookNow"
                      class="bg-[#FFC340] hover:bg-[#eab308] text-white font-bold py-2 px-4 rounded-xl shadow"
                    >
                      Book Now
                    </BaseButton>
             
                  </div>
                </div>

                <div class="md:w-1/3 space-y-4">
                  <h3 class="text-xl font-bold text-gray-800">Map Location</h3>
                  <div class="flex items-start gap-2 text-gray-700">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{{ overviewData.address }}</span>
                  </div>

                  <a
                    :href="overviewData.mapLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      :src="overviewData.mapImage"
                      alt="Map"
                      class="rounded-lg shadow-md w-full hover:opacity-90 transition duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div v-if="activeTab === 1">
              <div class="grid md:grid-cols-2 gap-6 p-6">
                <div
                  class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl"
                >
                  <i class="fa-solid fa-clock"></i>
                  <div>
                    <h3 class="font-bold text-gray-800">Visiting Hours</h3>
                    <p class="text-gray-600 mt-1">
                      {{ detailsData.visitingHours }}
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl"
                >
                  <i class="fa-solid fa-dollar-sign"></i>
                  <div>
                    <h3 class="font-bold text-gray-800">Entry Fees</h3>
                    <p class="text-gray-600 mt-1">
                      {{ detailsData.entryFees }}
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl"
                >
                  <i class="fa-solid fa-sun"></i>
                  <div>
                    <h3 class="font-bold text-gray-800">Best Time to Visit</h3>
                    <p class="text-gray-600 mt-1">
                      {{ detailsData.bestTimeToVisit }}
                    </p>
                  </div>
                </div>
                <div
                  class="flex items-start gap-4 bg-white shadow-md p-4 rounded-xl"
                >
                  <i class="fa-solid fa-car"></i>
                  <div>
                    <h3 class="font-bold text-gray-800">How to Get There</h3>
                    <p class="text-gray-600 mt-1">{{ detailsData.howToGet }}</p>
                  </div>
                </div>
                <div
                  class="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md"
                >
                  <div class="flex items-center gap-2 mb-2">
                    <i class="fa-solid fa-lightbulb"></i>
                    <h3 class="text-xl font-bold text-yellow-700">Tips</h3>
                  </div>
                  <ul class="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Wear a hat and sunglasses.</li>
                    <li>Bring water.</li>
                    <li>Avoid aggressive street vendors.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div v-if="activeTab === 2">
              <div
                v-for="(review, index) in reviewsData"
                :key="index"
                class="mb-4 flex items-start gap-4 bg-white shadow p-4 rounded-lg"
              >
                <img
                  :src="review.avatar"
                  alt="Avatar"
                  class="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div class="font-semibold text-lg">{{ review.name }}</div>
                  <div class="text-sm text-gray-500 mb-1">
                    {{ review.date }}
                  </div>
                  <div class="text-gray-700">{{ review.content }}</div>
                  <div class="text-yellow-500">
                    <i class="fa-solid fa-star"></i> {{ review.rating }}
                  </div>
                </div>
              </div>
              <div class="border-t pt-6 mt-6 space-y-4">
                <h3 class="text-xl font-semibold text-gray-800">
                  Add Your Review
                </h3>

                <InputField v-model="newComment" />

                <BaseButton
                  @click="submitComment"
                  class="bg-yellow-400 hover:bg-yellow-500 transition-colors"
                >
                  Submit Review
                </BaseButton>

                <p class="text-gray-500 text-sm">
                  Your feedback helps others discover great places!
                </p>
              </div>
            </div>
            <div v-if="activeTab === 3">

  
<div
  v-for="(act, index) in activitiesData"
  :key="index"
  class="bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center mb-6"
>
  
  <div class="flex flex-col md:flex-row items-center md:items-start flex-1">
    <img
      :src="act.image"
      :alt="act.title"
      class="w-2/3 md:w-28 md:h-28 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
    />
    <div class="text-center md:text-left">
      <h3 class="text-xl font-bold text-gray-800">{{ act.title }}</h3>
      <p class="text-gray-600 mt-2 leading-relaxed text-base">{{ act.description }}</p>
      <p v-if="act.duration" class="text-sm text-gray-500 mt-2">{{ act.duration }}</p>
      <p v-if="act.price" class="text-sm text-gray-500">{{ act.price }}</p>
    </div>
  </div>

  
  <BaseButton
    @click="addToPackage(act)"
    class="bg-[#FFC340] hover:bg-[#eab308] text-white font-bold py-2 px-6 rounded-xl shadow w-full md:w-auto mt-4 md:mt-0"
  >
    Add to Package
  </BaseButton>
</div>
</div>

          </div>
        </section>
      </div>
    </div>

    <div class="sticky top-24 h-fit md:w-1/3 w-full">
      <sidecard title="Related Places" :items="relatedPlaces" />
    </div>
  </div>

  <foot />
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute,useRouter } from "vue-router";

import Navbar from "../components/NavBar-Black.vue";
import sidecard from "../components/activity detail/sidecard.vue";
import foot from "../components/footer.vue";

import data from "../data/Destaintion.json";
import BaseButton from "../components/BaseButton.vue";
import InputField from "../components/InputField.vue";

import { useBookingStore } from '../data/store'
const bookingStore = useBookingStore()
function bookNow() {
  if (!place.value) return;

  bookingStore.setCardData({
    image: place.value.image,
    title: place.value.name,
    rate: place.value.rate,
    price: place.value.price,
  });

  router.push('/form');
}
function addToPackage(activity) {
  bookingStore.setCardData({
    image: place.value.image,
    title: `${place.value.name} - ${activity.title}`,
    rate: place.value.rate,
    price: place.value.price,
  });
  router.push('/form');
}


const route = useRoute();
const router = useRouter();

const placeId = Number(route.params.id);

const place = computed(() => data.find((p) => p.id === placeId) || {});

const overviewData = computed(() => place.value?.overview || {});
const detailsData = computed(() => place.value?.detail || {});
const reviewsData = computed(() => place.value?.review || []);
const activitiesData = computed(() => place.value?.activity || []);

const tabs = ["Overview", "Details", "Reviews", "Activities"];
const activeTab = ref(0);


const gotobooking=()=>{
  router.push("/booking")
}
const relatedPlaces = computed(() =>
  data.filter((p) => p.id !== placeId).slice(4, 10)
);
</script>
