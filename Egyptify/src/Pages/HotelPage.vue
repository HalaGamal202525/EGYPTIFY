<template>
  <div class="font-sans">
    <Navbar />

    <section class="container mx-auto px-4 py-8 mt-16">

      <!-- عنوان الفندق و زر الحجز -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 class="text-2xl font-bold text-black">Iberotel Luxor</h1>
          <p class="text-sm text-black">⭐️⭐️⭐️⭐️⭐️</p>
          <p class="text-black mt-1">
            <i class="fas fa-map-marker-alt"></i> Khaled Ibn El Waleed Street, East Bank, 99999 Luxor, Egypt.
            <a href="#" class="text-blue-600 underline ml-2">Show Map</a>
          </p>
        </div>

        <div class="flex gap-4 items-center">
          <i class="far fa-heart text-2xl cursor-pointer"></i>
          <i class="fas fa-share-alt text-2xl cursor-pointer text-gray-600 hover:text-blue-500 transition-colors"></i>
          <BaseButton class="text-white">Reserve</BaseButton>
        </div>
      </div>

      <!-- صور الفندق -->
      <section class="mt-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div class="md:col-span-8">
            <img src="/hotel/main.jpg" alt="Main Image" class="w-full h-[310px] object-cover rounded-lg" />
          </div>
          <div class="md:col-span-4 flex flex-col gap-4">
            <img src="/hotel/img1.jpg" alt="Top" class="w-full h-[150px] object-cover rounded-lg" />
            <img src="/hotel/img2.jpg" alt="Bottom" class="w-full h-[150px] object-cover rounded-lg" />
          </div>
          <div class="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <img
              v-for="i in 4"
              :key="i"
              :src="`/hotel/thumb${i}.jpg`"
              :alt="`Thumbnail ${i}`"
              class="w-full h-[150px] object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      <!-- الوصف -->
      <div class="mt-8">
        <h2 class="text-black font-semibold mb-2">Description</h2>
        <p class="text-gray-700 leading-6">
          A heated pool floating on the Nile is one of the most unique features of this 4-star hotel. Overlooking the Theban Hills, Iberotel Luxor also offers a restaurant boat and rooms with private balconies.
        </p>
        <p class="mt-2 text-gray-700 leading-6">
          Centrally located in Luxor, the hotel is positioned directly on the Nile and just 10 minutes’ walk from the Luxor Temple. Luxor Airport is 20 minutes’ drive away.
        </p>
        <p class="mt-2 text-gray-700 leading-6">
          There are many historical sites to explore including the world’s largest open-air museum. Guests can ask the concierge for recommendations and bookings. Romantic Nile cruises are also available on request.
        </p>
      </div>

      <!-- المرافق -->
      <div class="mt-6">
        <h2 class="text-black font-semibold mb-2">Most popular facilities</h2>
        <ul class="flex flex-wrap gap-4 text-gray-600 text-sm">
          <li><i class="fas fa-swimming-pool mr-1"></i> Outdoor swimming pool</li>
          <li><i class="fas fa-wifi mr-1"></i> Free Wi-Fi</li>
          <li><i class="fas fa-utensils mr-1"></i> Restaurant</li>
          <li><i class="fas fa-concierge-bell mr-1"></i> Room Service</li>
          <li><i class="fas fa-smoking-ban mr-1"></i> Non-smoking rooms</li>
          <li><i class="fas fa-glass-martini-alt mr-1"></i> Bar</li>
          <li><i class="fas fa-fire mr-1"></i> BBQ Facilities</li>
        </ul>
      </div>

      <!-- نموذج الحجز -->
      <div class="mt-8 border p-4 rounded-lg bg-gray-50">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="text-black">Check-in Date</label>
            <input type="date" class="border w-full p-2 rounded-md text-black" />
          </div>
          <div>
            <label class="text-black">Check-out Date</label>
            <input type="date" class="border w-full p-2 rounded-md text-black" />
          </div>
          <div>
            <label class="text-black">Guests</label>
            <input type="text" class="border w-full p-2 rounded-md text-black" placeholder="2 Adults - 0 Children - 1 Room" />
          </div>
          <div class="flex items-end">
            <BaseButton class="text-white w-full">Search</BaseButton>
          </div>
        </div>
      </div>

      <!-- نوع الغرف -->
      <div class="mt-6">
        <h2 class="text-xl font-semibold mb-2 text-black">Room Type</h2>
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <div class="flex gap-4">
            <p class="text-black flex items-center"><i class="fas fa-city mr-1"></i> City View</p>
            <p class="text-black flex items-center"><i class="fas fa-smoking-ban mr-1"></i> Non-Smoking rooms</p>
          </div>
          <a href="#" class="text-blue-600 underline">Show Details</a>
        </div>
      </div>

      <!-- التقييمات -->
      <div class="mt-8">
        <h2 class="text-black font-semibold mb-4">Guest Reviews</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <reviews
            name="Manar"
            avatar="https://i.pravatar.cc/150?img=44"
            date="July 2025"
            rating="4.5"
            comment="Amazing location with view of the Nile. Stunning gardens, gorgeous pool with bar. Staff were wonderful. Spacious. Shop and cash point there."
          />
          <reviews
            name="Sara"
            avatar="https://i.pravatar.cc/150?img=20"
            date="July 2025"
            rating="5"
            comment="Amazing location with view of the Nile. Stunning gardens, gorgeous pool with bar. Staff were wonderful. Spacious. Shop and cash point there."
          />
          <reviews
            name="Yasmine"
            avatar="https://i.pravatar.cc/150?img=5"
            date="July 2025"
            rating="4"
            comment="The location is perfect for exploring the east bank. Very nice view and pool directly on the Nile. The breakfast was delicious and huge."
          />
        </div>
        <div class="mt-4">
          <router-link to="/user-review">
            <BaseButton class="text-white">Write a review</BaseButton>
          </router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/navbar-black.vue'
import Footer from '../components/footer.vue'
import reviews from '../components/reviews.vue'
import BaseButton from '../components/BaseButton.vue'
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
