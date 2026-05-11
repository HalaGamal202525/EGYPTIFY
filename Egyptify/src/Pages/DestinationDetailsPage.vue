<template>
  <NavBarBlack />
<div class="pt-2 bg-[#FFFDF9] min-h-screen mb-10">

  <div class="flex px-6 py-4 gap-6 flex-col sm:flex-row">
    <div class="flex-1 rounded-lg border border-gray-300 shadow-lg">
      <div class="px-6 py-4 space-y-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-4">
              <button
                @click="$router.back()"
                class="text-gray-900 hover:text-black text-xl"
              >
                <i class="fa-solid fa-arrow-left !text-gray-800"></i>
              </button>
            </div>
            <h1 class="text-2xl font-bold text-gray-800">
              {{ place?.name || "Place not found" }}
            </h1>
          </div>
          <p class="text-lg text-yellow-500 font-bold">
            {{ place?.category || "" }}
          </p>
        </div>

        <div
          class="grid grid-cols-4 gap-4"
          v-if="place && place.images && place.images.length"
        >
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
                    <BaseButton
                      @click="bookNow"
                      class="bg-[#FFC340] hover:bg-[#eab308] text-white font-bold py-2 px-4 shadow"
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
              <div class="pt-6 mt-6 space-y-4">
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

                <p class="text-gray-500 text-sm">
                  Your feedback helps others discover great places!
                </p>
              </div>
            </div>
<div v-show="activeTab === 3">
              <div
                v-for="(act, index) in activitiesData"
                :key="index"
                class="bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center mb-6"
              >
                <div
                  class="flex flex-col md:flex-row items-center md:items-start flex-1"
                >
                  <img
                  :src="act.image || place.images?.[0]"
                    :alt="act.title"
                    class="w-2/3 md:w-28 md:h-28 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
                  />
                  <div class="text-center md:text-left">
                    <h3 class="text-xl font-bold text-gray-800">
                      {{ act.name }}
                    </h3>
                    <p class="text-gray-600 mt-2 leading-relaxed text-base">
                      {{ act.description }}
                    </p>
                    <p v-if="act.duration" class="text-sm text-gray-500 mt-2">
                      {{ act.duration }}
                    </p>
                    <p v-if="act.price" class="text-lg text-gray-500">
                      {{ act.price }}
                    </p>
                  </div>
                </div>

                <BaseButton
                  :disabled="addedActivities.includes(act.name)"
                  @click="addToPackage(act)"
                  :class="[
                    'font-bold py-2 px-6  shadow w-full md:w-auto mt-4 md:mt-0',
                    addedActivities.includes(act.name)
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#FFC340] hover:bg-[#eab308] text-white',
                  ]"
                >
                  {{
                    addedActivities.includes(act.name)
                      ? "Added!"
                      : "Add to Package"
                  }}
                </BaseButton>

              </div>

                              <BaseButton @click="goToForm">Go to check-out</BaseButton>

            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="sticky top-24 h-fit md:w-1/3 w-full">
      <sidecard title="Related Places" :items="relatedPlaces" />
    </div>
  </div>
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 model  z-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-120">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Add Activities?</h2>
      <p class="text-gray-600 mb-6">
        Do you want to add some activities before booking?
      </p>
      <div class="flex justify-center gap-4">
        <BaseButton
          class="bg-gray-300 hover:bg-gray-400 text-black font-bold px-4 py-2 w-40 rounded"
          @click="goToForm"
        >
          No, Continue
        </BaseButton>
        <BaseButton
          class="bg-[#FFC340] hover:bg-[#eab308] text-white font-bold  py-2 w-40  rounded"
          @click="goToActivities"
        >
          Yes,Show Activity
        </BaseButton>
      </div>
    </div>
  </div>
</div> 
  <foot />
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";

import NavBarBlack from "../components/NavBar-Black.vue";
import sidecard from "../components/activity detail/sidecard.vue";
import foot from "../components/footer.vue";

import data from "../data/Destaintion.json";
import BaseButton from "../components/BaseButton.vue";
import InputField from "../components/InputField.vue";

import { useCardStore } from "../data/store.js";
const bookingStore = useCardStore();
function bookNow() {
  if (!place.value) return;

  bookingStore.setCardData({
    image: place.value.images?.[0] || "",
    title: place.value.name,
    rate: place.value.rate,
    price: place.value.price,
    description: place.value.category, 
  });

  showModal.value = true;
}


const addedActivities = ref([])


function addToPackage(activity) {
  if (!addedActivities.value.includes(activity.name)) {
    addedActivities.value.push(activity.name)

    bookingStore.addActivityToCard({
      name: activity.name,
      image: activity.image,
      price: activity.price,
      description:activity.description,
      duration: activity.duration
    })

    console.log("store after add:", bookingStore.card)
console.log("activities:", bookingStore.card.activities)
  }
}

const route = useRoute();
const router = useRouter();

const placeId = route.params.id; 

const place = computed(() => data.find((p) => p.id === placeId) || {});


const overviewData = computed(() => place.value?.overview || {});
const detailsData = computed(() => place.value?.detail || {});
const activitiesData = computed(() => place.value?.activities || []);

const newComment = ref("");
const reviewsData = ref([]);
const showModal = ref(false);

watch(
  place,
  (newPlace) => {
    const savedReviews = localStorage.getItem(`reviews_place_${placeId}`);
    if (savedReviews) {
      reviewsData.value = JSON.parse(savedReviews);
    } else {
      reviewsData.value = newPlace.review ? Object.values(newPlace.review) : [];
    }
  },
  { immediate: true }
);
const tabs = ["Overview", "Details", "Reviews", "Activities"];
import { useImageStore } from "../data/imagepicker";
const imageStore = useImageStore();
function submitComment() {
  if (!newComment.value.trim()) return;

  const newReview = {
    name: "You",
    date: new Date().toLocaleDateString(),
    content: newComment.value,
    rating: 5,
    avatar: imageStore.selectedImage || "/about-us/girl-4.png",
  };

  // أضف التعليق للقائمة
  reviewsData.value.unshift(newReview);

  // خزّن كل التعليقات في LocalStorage
  localStorage.setItem(
    `reviews_place_${placeId}`,
    JSON.stringify(reviewsData.value)
  );

  newComment.value = "";
}
function goToForm() {
  showModal.value = false;
  router.push("/form");
}

function goToActivities() {
  showModal.value = false;
  nextTick(() => {
    activeTab.value = 3;
    console.log("activeTab is now:", activeTab.value);
  });
}
console.log("store after add:", bookingStore.cardData)


const relatedPlaces = computed(() =>
  data.filter((p) => p.id !== placeId).slice(4, 10)
);
// خلي قيمة التاب مرتبطة بالـ localStorage
const activeTab = ref(Number(localStorage.getItem("activeTab")) || 0);

// كل ما التاب يتغير نخزن القيمة
watch(activeTab, (newTab) => {
  localStorage.setItem("activeTab", newTab);
});

</script>


<style scoped>
.model{
  background-color: rgba(248, 248, 255, 0.603);
}
</style>