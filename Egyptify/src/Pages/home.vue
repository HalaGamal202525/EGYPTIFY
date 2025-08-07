<template>
  <div class="w-full">
    <Navbar />
    <!-- <Slide v-for="(img, index) in images" :key="index">
  <img :src="img" :alt="'Slide ' + (index + 1)" class="slide-img" />
</Slide> -->
    <slide></slide>
    <!-- section -->
    <div class="flex items-center justify-center py-12 bg-[#FFFDF9]">
      <div
        class="bg-gray-100 rounded-xl w-full max-w-5xl p-8 shadow-lg flex flex-col gap-6"
      >
        <div class="grid grid-cols-1 w-full md:grid-cols-3 gap-6">
          <!-- Location -->
           <div class="flex flex-col gap-2 relative w-full max-w-md mx-auto">
    <!-- Label -->
    <label class="text-gray-700 font-semibold text-lg">Where to?</label>

    <!-- InputField -->
    <InputField
      v-model="searchText"
      type="text"
      placeholder="Enter Location"
      @input="filterPlaces"
      @focus="showSuggestions = true"
      @blur="hideSuggestions"
    >
      <!-- Icon -->
      <template #icon>
        <i class="fa-solid fa-location-dot mr-2 text-[#ffc340] text-xl"></i>
      </template>
    </InputField>
    <!-- Suggestions -->
    <ul
      v-if="showSuggestions && filteredPlaces.length"
      class="absolute top-[82px] left-0 w-full bg-white border border-yellow-300 rounded-lg shadow-lg z-10 max-h-[200px] overflow-y-auto"
    >
      <li
        v-for="place in filteredPlaces"
        :key="place"
        class="px-4 py-2 text-gray-700 hover:bg-yellow-100 cursor-pointer"
        @mousedown.prevent="selectPlace(place)"
      >
        {{ place }}
      </li>
    </ul>
  </div>

          <!-- Date -->
          <div class="flex flex-col gap-2">
            <label class="text-gray-700 font-semibold text-lg"
              >When to go?</label
            >
            <InputField v-model="date" type="date">
              <template #icon> <i class="fa-solid fa-calendar"></i> </template>
            </InputField>
          </div>
          

          <!-- Guests -->
          <div class="flex flex-col gap-2">
            <label class="text-gray-700 font-semibold text-lg">Guests?</label>
            <InputField
              v-model="guests"
              type="number"
              placeholder="No of Guests"
            >
              <template #icon>
                <i class="fa-solid fa-user-group"></i>
              </template>
            </InputField>
          </div>
        </div>
<div
  v-if="showModal"
  class="fixed top-6 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300"
>
  Please fill in all fields before searching.
</div>
        <!-- Search Button -->
        <div class="flex justify-center w-full">
          <basebutton class="w-full" @click="handleSearch">
            <i class="fa-solid fa-magnifying-glass mr-2"></i> Search
          </basebutton>
        </div>
      </div>
    </div>

    <!-- Destination Section -->
   <section class="py-16 bg-[#FFFDF9]">
  <div class="text-center mb-12">
    <h2 class="special-heading">Destination</h2>
    <p class="text-xl text-gray-700">Popular Destination</p>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8"
  >
    <div
      v-for="card in popular"
      :key="card.id"
      class="relative group py-2 transition-transform duration-300 hover:scale-105 flex justify-center items-center overflow-hidden"
    >
      <!-- عند الضغط على الكارت => صفحة تفاصيل -->
      <router-link :to="`/popular/${card.id}`" class="w-full max-w-xs">
        <Card
          :image="card.image"
          :title="card.title"
          :description="card.description"
          class="bg-white shadow-2xl rounded-xl w-full"
        />
      </router-link>

      <!-- عند الضغط على السهم => صفحة الأماكن كلها -->
      <router-link
        to="/destination"
        class="absolute bottom-4 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      >
        <div
          class="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg hover:bg-yellow-500"
        >
          <i class="fa-solid fa-arrow-right !text-white"></i>
        </div>
      </router-link>
    </div>
  </div>
</section>

    <!-- trip planner -->
 <div class="planner flex flex-col justify-center items-center relative z-10 text-center">
  <div class="flex flex-col justify-center items-center cont">
  <h2 class="text-white text-4xl font-bold">Plan your perfect trip</h2>
  <p class="text-white py-4">
    Pick a destination, choose your dates, and let us do the rest!
  </p>
  <basebutton @click="gotoplanner" class="  py-3 rounded-full cursor-pointer  transition">
    Start planning
  </basebutton>
  </div>
</div>


    <!-- discover -->
    <section class="py-16 bg-[#FFFDF9]">
      <div class="text-center mb-12">
        <h2 class="special-heading">Discover</h2>
        <p class="text-xl text-gray-700">Thing to Do</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-9 px-8">
        <div
          v-for="card in discover"
          :key="card.id"
          @click="goToCategory(card.title)"          
          class="relative rounded-xl overflow-hidden h-64 group shadow-lg transition-transform duration-300 hover:scale-120 discover"
          >
          <img
            :src="card.image"
            alt="Card Image"
            class="w-full h-full object-cover"
          />

          <div
            class="absolute inset-0 b flex flex-col items-start justify-end text-center px-4 py-4"
          >
            <h3 class="text-xl text-white font-semibold mb-2">
              {{ card.title }}
            </h3>
            <p class="text-sm text-white">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- top rated -->
    <section class="py-16 bg-[#FFFDF9] relative" style="height: 650px">
      <div class="text-center mb-12">
        <h2 class="special-heading">Top rated</h2>
        <p class="text-xl text-gray-700">Chosen by explorers like you</p>
      </div>

      <div
        ref="scrollContainer"
        @scroll="checkScroll"
        class="flex gap-6 overflow-x-auto px-8 scroll-smooth no-scrollbar py-4"
      >
        <div
          v-for="card in top"
          :key="card.id"
                    @click="gotopuplar"

          class="shrink-0 w-[260px] flex justify-center items-center transition-transform duration-300 hover:scale-105"
        >
          <Card
            :image="card.image"
            :title="card.title"
            :rating="card.rate"
            :description="card.description"
            :showHeart="true"
            class="bg-white shadow-2xl rounded-xl gap-3 w-full max-w-xs"
            style="height: 380px"
          />
        </div>
      </div>

      <!-- Left Arrow -->
      <button
        v-if="canScrollLeft"
        @click="scrollLeft"
        class="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 transition flex items-center justify-center shadow-lg"
      >
        <i class="fa-solid fa-arrow-left text-white"></i>
      </button>

      <!-- Right Arrow -->
      <button
        v-if="canScrollRight"
        @click="scrollRight"
        class="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 transition flex items-center justify-center shadow-lg"
      >
        <i class="fa-solid fa-arrow-right text-white"></i>
      </button>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-[#FFFDF9] relative" style="height: 600px">
      <div class="text-center mb-12">
        <h2 class="special-heading">Testimonials</h2>
        <p class="text-xl text-gray-700">What Travelers Say</p>
      </div>

      <div class="flex flex-row flex-wrap justify-center gap-6 items-start">
        <ReviewCard
          v-for="review in reviews"
          :key="review.id"
          :name="review.name"
          :avatar="review.avatar"
          :date="review.date"
          :rating="review.rating"
          :comment="review.comment"
          class="w-[300px] h-40"
        />
      </div>
    </section>

    <!-- join -->
    <section class="py-16 px-6 bg-[#1E293B] text-center flex flex-col md:flex-row items-center justify-between gap-6">
  <!-- Text -->
  <div class="md:w-1/2 text-white text-left">
    <h2 class="text-4xl font-bold mb-4">Join Our Journey</h2>
    <p class="text-lg">Subscribe and get <span class="text-[#FFC340] font-semibold">5% off</span> your first trip!</p>
  </div>

  <!-- Form -->
  <div class="flex flex-wrap gap-4 items-center">
    <InputField
      v-model="mailinput"
      type="email"
      placeholder="Enter your email"
      class="rounded-lg px-4 py-2 w-[250px] text-white placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FFC340]"
      style="height: 50px"
    />
    <basebutton
      @click="handleJoin"
      class="bg-[#FFC340] hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg transition"
      style="height: 50px"
    >
      Join
    </basebutton>
  </div>

  <!-- Modal -->
  <div v-if="Modelsubscribe" class="fixed inset-0 bg-gray-200 !bg-opacity-90 flex justify-center items-center z-50"   style="background-color: rgba(0, 0, 0, 0.3);">
    <div class="bg-white rounded-2xl p-6 w-[90%] max-w-md text-center flex flex-col justify-center items-center shadow-xl border border-gray-200">
      <h3 class="text-2xl font-bold text-green-600 mb-4">🎉 Thank You!</h3>
      <p class="text-gray-700 mb-6">Thanks for subscribing! You’ve received a <strong>5% discount</strong> on your first trip.</p>
      <basebutton
        @click="Modelsubscribe = false"
        class="bg-[#1E293B] hover:bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        Close
      </basebutton>
    </div>
  </div>
</section>

    <!-- recommended -->
    <section class="py-16 bg-[#FFFDF9]">
      <div class="text-center mb-12">
        <h2 class="special-heading">Recommended</h2>
        <p class="text-xl text-gray-700">Discover top-rated adventures</p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8"
      >
        <div
          v-for="card in recommended"
          :key="card.id"
          class="group py-2 transition-transform duration-300 hover:scale-110 flex justify-center items-center overflow-hidden"
        >
          <!-- Card -->
          <Card
            :image="card.image"
            :title="card.title"
            :rating="card.rate"
            :description="card.description"
            :showButton="true"
            buttonText="Explore"
            @click="gotoactivity"
            class="!bg-gray-50 shadow-2xl rounded-xl flex  text-left w-full max-w-xs"
          />
        </div>
      </div>
    </section>
    <!-- offer -->
    <section class="py-16 bg-[#FFFDF9]">
      <div class="text-center mb-12">
        <h2 class="special-heading">offers</h2>
        <p class="text-xl text-gray-700">special offer</p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8"
      >
        <div
          v-for="card in offer"
          :key="card.id"
          class="group py-2 transition-transform duration-300 hover:scale-110 flex justify-center items-center text-center overflow-hidden"
        >
          <!-- Card -->
          <Card
            :image="card.image"
            :title="card.title"
            :description="card.description"
            :showButton="true"
            buttonText="View offer"
            @click="gotoffer"
            class="!bg-gray-50  shadow-2xl rounded-xl flex  text-left w-full max-w-xs"
          />
        </div>
      </div>
    </section>
    <!-- package -->
        <section class="py-16 bg-[#F9FAFB]">
     <div class="text-center mb-12">
        <h2 class="special-heading"> Packages</h2>
        <p class="text-xl text-gray-700">Explore Packages</p>
      </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12">
      <div
        v-for="category in categories"
        :key="category.slug"
        class="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
      >
        <img :src="category.image" :alt="category.name" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-1">{{ category.name }}</h3>
          <p class="text-gray-600 text-sm h-13">{{ category.description }}</p>
         <router-link
  :to="`/packages/${category.slug}`"
  class="inline-block mt-4 text-blue-600 font-medium hover:underline"
>
  View Packages →
</router-link>
        </div>
      </div>
    </div>

    <div class="text-center mt-10">
      <!-- <router-link
        to="/packages"
        class="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        View All Packages
      </router-link> -->
    </div>
  </section>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import basebutton from "../components/BaseButton.vue";
import InputField from "../components/InputField.vue";
import Card from "../components/card.vue";
import ReviewCard from "../components/reviews.vue";
import Slide from "../components/ImageSlider.vue";
import "vue3-carousel/dist/carousel.css";
// import populardestaion from "./populardestaion.vue";
const userInput = ref("");

import rawData from '../data/packages_data.json';

const categories = Object.values(rawData.packageCategories);



const popular = [
  {
    id: 1,
    image: "hero/alazhar.jpg",
    title: "Cairo",
    description: "Al-Azhar Mosque",
  },
  {
    id: 2,
    image: "hero/aswan.jpg",
    title: "Aswan",
    description: "Philae Temple",
  },
  {
    id: 3,
    image: "hero/bluehole.jpg",
    title: "Dahab",
    description: "Blue Hole",
  },
  {
    id: 4,
    image: "/sara/Alexandria Library1.webp",
    title: "Alexandria",
    description: "Alexandria Library",
  },
];
const discover = [
  {
    id: 1,
    image: "sara/سانت كاترين.jpg",
    title: "Adventures",
    description: "Feel the adrenaline in every trip ",
  },
  {
    id: 2,
    image: "sara/Food.jpg",
    title: "Food",
    description: "Taste the world’s most delicious cuisines",
  },
  {
    id: 3,
    image: "hero/طريقالكباش.jpg",
    title: "Culture",
    description: "Walk through ancient civilizations",
  },
];
const top = [
  {
    id: 1,
    image: "sara/praymids1.jpg",
    title: "Giza Pyramids Giza",
    rate: 4,
    description: "Walk through one of the world's ancient wonders.",
  },
  {
    id: 2,
    image: "hero/tambel.jpg",
    title: "Karnak Temple  Luxor",
    rate: 5,

    description: "Discover the grandeur of ancient Egyptian architecture.",
  },
  {
    id: 3,
    image: "hero/luxortambel.jpg",
    title: "Valley of the Kings Luxor",
    rate: 4.5,

    description: "Explore the royal tombs of ancient pharaohs.",
  },
  {
    id: 4,
    image: "sara/Rasmohamed.jpg",
    title: "Ras Mohammed – Sharm El Sheikh",
    rate: 4,
    description: "Unmatched diving and marine life.",
  },
  {
    id: 5,
    image: "sara/whitedesert.jpg",
    title: "The White Desert - Western Desert ",
    rate: 4.9,
    description: "The White Desert in Egypt is a unique natural wonder.",
  },
  {
    id: 6,
    image: "sara/The-Grand-Egyptian.jpg",
    title: "Grand Egyptian Museum – Giza,",
    rate: 4,
    description: "showcases ancient treasures near the Giza Pyramids.",
  },
];

const reviews = [
  {
    id: 1,
    name: "Sarah Mohamed",
    avatar: "/sara/person.jpeg",
    date: "July 20, 2025",
    rating: 4.5,
    comment:
      "Amazing experience! Everything was perfectly organized and the guide was very friendly.",
  },
  {
    id: 2,
    name: "Ahmed Youssef",
    avatar: "/sara/person2.jpeg",
    date: "July 18, 2025",
    rating: 5,
    comment: "One of the best trips I’ve ever had. Highly recommend!",
  },
];
const recommended = [
  {
    id: 1,
    image: "sara/tour.jpg",
    title: "Pyramids Tour",
    rate: 5,
    description: "Pyramids Tour",
  },
  {
    id: 2,
    image: "hero/sailing.jpg",
    title: "Nile Sailing",
    rate: 4,

    description: "Luxor, Egypt",
  },
  {
    id: 3,
    image: "hero/mouz.jpg",
    title: "Market Tour",
    rate: 4.5,
    description: "Cairo, Egypt",
  },
  {
    id: 4,
    image: "hero/alazhar1.jpg",
    title: "Al-Azhar Mosque",
    rate: 5,

    description: "Cairo, Egypt",
  },
];
const offer = [
  {
    id: 1,
    image: "hero/seasunset.jpg",
    title: "Summer Escape",
    description: "Enjoy 20% off on all Red Sea trips",
  },
  {
    id: 2,
    image: "hero/safari.webp",
    title: "Safari Deal",
    description: "Free quad bike with desert tour",
  },
  {
    id: 3,
    image: "hero/luxor,aswan.webp",
    title: "Luxor & Aswan",
    description: "Bundle deal – Cruise + Hotels",
  },
];

import { ref, onMounted, nextTick,computed } from "vue";

const scrollContainer = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

const checkScroll = () => {
  const el = scrollContainer.value;
  if (!el) return;
  canScrollLeft.value = el.scrollLeft > 0;
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
};

const scrollRight = () => {
  scrollContainer.value?.scrollBy({ left: 300, behavior: "smooth" });
};

const scrollLeft = () => {
  scrollContainer.value?.scrollBy({ left: -300, behavior: "smooth" });
};

onMounted(() => {
  nextTick(() => checkScroll());
});

//join section

import { db } from '../firebase.js'
import { collection, addDoc } from 'firebase/firestore'

const mailinput = ref('')
const joined = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const Modelsubscribe = ref(false)
const handleJoin = async () => {
if (!emailRegex.test(mailinput.value)) {
  alert('Please enter a valid email address.')
  return
}

  try {
    await addDoc(collection(db, 'subscribers'), {
      email: mailinput.value,
      discount: '5%',
      joinedAt: new Date()
    })

    joined.value = true
     Modelsubscribe.value = true
    mailinput.value = ''
  } catch (error) {
    console.error('Error saving to Firebase:', error)
    alert('Something went wrong. Please try again.')
  }
}


const location = ref("");
const date = ref("");
const guests = ref("");



import { useRouter } from "vue-router";

const router = useRouter();
const goToCategory = (title) => {
  const routes = {
    "Adventures": "/adventures",
    "Food": "/food",
    "Culture": "/culture",
  };

  router.push(routes[title]);
};


const showModal = ref(false)

const handleSearch = () => {
  if (!searchText.value || !date.value || !people.value) {
    showModal.value = true

    // نخليه يختفي بعد 3 ثواني
    setTimeout(() => {
      showModal.value = false
    }, 3000)

    return
  }

  router.push({
    path: '/search-results',
    query: {
      location: searchText.value,
      date: date.value,
      people: people.value,
    }
  })
}
const searchText = ref("");
const showSuggestions = ref(false);
const allPlaces = ["Cairo", "Aswan", "Luxor", "Alexandria", "Siwa", "Dahab"];
const filteredPlaces = ref([]);

const filterPlaces = () => {
  filteredPlaces.value = allPlaces.filter((place) =>
    place.toLowerCase().includes(searchText.value.toLowerCase())
  );
};
const gotopuplar =()=>{
  router.push("/puplor")
}
const gotoplanner =()=>{
  router.push("/tripplanner")
}
const gotoadventure=()=>{
  router.push("/adventure")
}
const gotofood=()=>{
  router.push("/food")
}
const gotoactivity=()=>{
  router.push("/activity")
}
const gotooffer=()=>{
    router.push("/offerpage")

}
const selectPlace = (place) => {
  searchText.value = place;
  showSuggestions.value = false;
};

const hideSuggestions = () => {
  setTimeout(() => {
    showSuggestions.value = false;
  }, 200);
};
</script>
<style scoped>
label {
  color: black;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
}
.special-heading {
  color: #ebeced;
  font-size: 100px;
  text-align: center;
  font-weight: 800;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
}

.special-heading + p {
  margin-top: -90px;
  font-size: 36px;
  text-align: center;
  color: black;
}

@media (max-width: 767px) {
  .special-heading {
    font-size: 60px;
  }

  .special-heading + p {
    margin-top: -60px;
    font-size: 24px;
  }
}
.planner {
  background-image: url("../../public/sara/planner.jpeg");
  background-size: cover;
  width: 100%;
  height: 600px;
  position: relative;
  z-index: 1;
}

.planner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(119, 118, 118, 0.38);
}
.planner .cont{
  z-index: 100;
}
.discover {
  height: 400px;
}
.discover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(41, 41, 41, 0.24);
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
