<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Navbar from "../components/NavBar-Black.vue";
import Footer from "../components/footer.vue";
import { generateRestaurantDetails } from "../data/fakedata";
import BaseButton from "../components/BaseButton.vue";
import { useReservationStore } from "../data/Storeresturant"; 
const reservationStore = useReservationStore();


const router = useRouter()
const route = useRoute();
const restaurant = ref(null);

onMounted(() => {
  const slug = route.params.slug;
  restaurant.value = generateRestaurantDetails(slug);
});
const reservation = ref({
  name: "",
  phone: "",
  guests: 1,
  date: "",
  time: "",
});

const submitReservation = () => {
  // ✅ حفظ تفاصيل الحجز
  reservationStore.setReservation(reservation.value);

  // ✅ حفظ بيانات المطعم
  reservationStore.setRestaurant(restaurant.value);

  // ✅ إضافة الحجز لقائمة الحجوزات
  reservationStore.addBooking({
    type: "Restaurant",
    name: restaurant.value.name,
    price: restaurant.value.price
      ? parseInt(restaurant.value.price.toString().replace(/\D/g, ""))
      : 0,
  });

  // ✅ تحويل المستخدم لصفحة الفورم
  router.push("/resturantform");
};





</script>

<template>
  <Navbar />

  <div class="container mx-auto px-4 mt-26">
    <!-- Back Link -->
    <router-link
      to="/resturant"
      class="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-100 mb-6 mx-15"
    >
      <i class="fas fa-arrow-left mr-2 text-lg"></i>
      <span class="font-medium">Back</span>
    </router-link>

    <div
      v-if="restaurant"
      class="max-w-6xl mx-auto p-4 md:p-6 bg-white rounded-xl shadow-md"
    >
      <!-- Images -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <img
          v-if="restaurant.images.length > 0"
          :src="restaurant.images[0]"
          class="w-full h-[350px] md:h-[500px] object-cover rounded-xl shadow md:col-span-2 md:row-span-2"
        />
        <div class="flex flex-col gap-4">
          <img
            v-for="(img, index) in restaurant.images.slice(1, 3)"
            :key="index"
            :src="img"
            class="w-full h-[150px] md:h-[240px] object-cover rounded-xl shadow"
          />
        </div>
      </div>

      <!-- Name, Rating & Price -->
      <div class="flex flex-col items-start gap-4 mb-6 text-left">
        <!-- Name & Rating -->
        <div>
          <h1 class="text-3xl font-bold text-gray-800">
            {{ restaurant.name }}
          </h1>
          <div class="flex gap-2 text-yellow-500 mt-2">
            <i class="fa-solid fa-star"></i>
            <span class="font-semibold">{{ restaurant.rating }}</span>
            <span class="text-gray-500"
              >({{ restaurant.reviewsCount }} reviews)</span
            >
          </div>
          <p class="text-gray-500 mt-1">{{ restaurant.rank }}</p>
        </div>

        <!-- Price -->
        <div>
          <span
            class="px-3 py-1 bg-green-100 text-green-700 rounded-full mt-2 text-sm"
          >
         Price:   {{ restaurant.price }} EGP 
          </span>
        </div>

        <!-- Info: Cuisine, Address, Phone -->
        <div class="space-y-1 text-gray-700 text-sm">
          <p>
            <i class="fa-solid fa-utensils text-gray-600"></i>
            {{ restaurant.cuisine }}
          </p>
          <p>
            <i class="fa-solid fa-location-dot text-gray-600"></i>
            {{ restaurant.address }}
          </p>
          <p>
            <i class="fa-solid fa-phone text-gray-600"></i>
            {{ restaurant.phone }}
          </p>
        </div>
      </div>

      <!-- Main Content: About + Reservation Form -->
      <div class="flex flex-col lg:flex-row gap-6 mb-8 mt-20">
        <!-- About & Info -->
        <div class="flex-1 space-y-4">
          <div>
            <h2 class="text-xl font-semibold mb-2">About</h2>
            <p class="text-gray-700">{{ restaurant.description }}</p>
          </div>
        </div>

        <!-- Reservation Form -->
        <div
          class="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md"
        >
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            Reserve a Table
          </h2>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col">
              <label class="text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                class="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                v-model="reservation.name"
                required
              />
            </div>

            <div class="flex flex-col">
              <label class="text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+20 123 456 7890"
                class="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                v-model="reservation.phone"
                required
              />
            </div>

            <div class="flex flex-col">
              <label class="text-gray-700 font-medium mb-1"
                >Number of Guests</label
              >
              <input
                type="number"
                min="1"
                placeholder="2"
                class="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                v-model="reservation.guests"
                required
              />
            </div>

            <div class="flex flex-col">
              <label class="text-gray-700 font-medium mb-1">Date</label>
              <input
                type="date"
                class="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                v-model="reservation.date"
                required
              />
            </div>

            <div class="flex flex-col">
              <label class="text-gray-700 font-medium mb-1">Time</label>
              <input
                type="time"
                class="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                v-model="reservation.time"
                required
              />
            </div>

            <div class="flex flex-col">
              <label class="text-gray-700 font-medium mb-1">Comment</label>
              <textarea
                rows="3"
                placeholder="Write a comment..."
                class="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                v-model="reservation.comment"
              ></textarea>
            </div>

            <div class="flex justify-center mt-4">
              <BaseButton
                @click="submitReservation"
                :disabled="
                  !reservation.name ||
                  !reservation.phone ||
                  !reservation.guests ||
                  !reservation.date ||
                  !reservation.time
                "
                class="bg-yellow-400 disabled:bg-gray-300 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 w-full md:w-auto transition"
              >
                Reserve Table
              </BaseButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Reviews</h2>
        <div
          v-for="(review, index) in restaurant.reviews"
          :key="index"
          class="flex flex-col md:flex-row gap-4 mb-4 p-4 bg-gray-50 rounded-xl shadow"
        >
          <img
            :src="review.avatar"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div class="flex-1">
            <div
              class="flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div class="flex items-center gap-2">
                <h3 class="font-semibold">{{ review.name }}</h3>
                <span class="text-sm text-gray-500">{{ review.date }}</span>
              </div>
              <div
                class="flex items-center text-yellow-500 text-sm mt-1 md:mt-0"
              >
                <i class="fa-solid fa-star mr-1"></i>{{ review.rating }}
              </div>
            </div>
            <p class="text-gray-700 mt-2">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
