<script setup>
import navbar from "../components/navbar.vue";
import Hero from "../components/Hero.vue";
import HeroImage from "../assets/ExplorePageHero.jpg";
import BaseButton from "../components/BaseButton.vue";
import CTAImage from "../assets/ExplorePage/CTA.jpg";
import Footer from "../components/footer.vue";

import exp1 from "../assets/ExplorePage/experience/img1.jpg";
import exp2 from "../assets/ExplorePage/experience/img2.jpg";
import exp3 from "../assets/ExplorePage/experience/img3.jpg";
import exp4 from "../assets/ExplorePage/experience/img4.jpg";

import food1 from "../assets/ExplorePage/food/img1.jpg";
import food2 from "../assets/ExplorePage/food/img2.jpg";
import food3 from "../assets/ExplorePage/food/img3.jpg";
import food4 from "../assets/ExplorePage/food/img4.jpg";

import shop1 from "../assets/ExplorePage/shopping/img1.jpg";
import shop2 from "../assets/ExplorePage/shopping/img2.jpg";
import shop3 from "../assets/ExplorePage/shopping/img3.jpg";
import shop4 from "../assets/ExplorePage/shopping/img4.jpg";

import adv1 from "../assets/ExplorePage/adv&act/img1.jpg";
import adv2 from "../assets/ExplorePage/adv&act/img2.jpg";
import adv3 from "../assets/ExplorePage/adv&act/img3.jpg";
import adv4 from "../assets/ExplorePage/adv&act/img4.jpg";

import event1 from "../assets/ExplorePage/Events/img1.jpg";
import event2 from "../assets/ExplorePage/Events/img2.jpg";
import event3 from "../assets/ExplorePage/Events/img3.jpg";
import event4 from "../assets/ExplorePage/Events/img4.webp";
</script>

<template>
  <navbar />
  <Hero
    title="Explore the Best of Egypt"
    description="Choose your next adventure from unique cultural experiences to thrilling outdoor activities."
    :image="HeroImage"
  />

  <section class="py-6 px-6 bg-[#FFFCF6]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Experiences</h2>
      <p class="text-gray-600 mb-6">Camel rides, Felucca trips, city tours</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <img :src="exp1" alt="Felucca" class="rounded-xl w-full h-40 object-cover" />
        <img :src="exp2" alt="Camel ride" class="rounded-xl w-full h-40 object-cover" />
        <img :src="exp3" alt="Camel tour" class="rounded-xl w-full h-40 object-cover" />
        <img :src="exp4" alt="Desert safari" class="rounded-xl w-full h-40 object-cover" />
      </div>
      <div class="flex justify-end">
        <router-link to="/destination">
        <BaseButton>Explore</BaseButton>
        </router-link>
      </div>
    </div>
  </section>

  <section class="py-2 px-6 bg-[#FFFCF6]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Local Food Tours</h2>
      <p class="text-gray-600 mb-6">Taste Egypt’s flavors like a local!</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <img :src="food1" alt="Food tour" class="rounded-xl w-full h-40 object-cover" />
        <img :src="food2" alt="Food tour" class="rounded-xl w-full h-40 object-cover" />
        <img :src="food3" alt="Food tour" class="rounded-xl w-full h-40 object-cover" />
        <img :src="food4" alt="Food tour" class="rounded-xl w-full h-40 object-cover" />
      </div>
      <div class="flex justify-end">
        <router-link to="/resturant">
        <BaseButton>Explore</BaseButton>
        </router-link>
      </div>
    </div>
  </section>

  <section class="py-2 px-6 bg-[#FFFCF6]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Shopping Spots</h2>
      <p class="text-gray-600 mb-6">Colorful bazaars and traditional markets</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <img :src="shop1" alt="Shopping" class="rounded-xl w-full h-40 object-cover" />
        <img :src="shop2" alt="Shopping" class="rounded-xl w-full h-40 object-cover" />
        <img :src="shop3" alt="Shopping" class="rounded-xl w-full h-40 object-cover" />
        <img :src="shop4" alt="Shopping" class="rounded-xl w-full h-40 object-cover" />
      </div>
      <div class="flex justify-end">
        <router-link to="/events">
        <BaseButton>Explore</BaseButton>
        </router-link>
      </div>
    </div>
  </section>

  <section class="py-2 px-6 bg-[#FFFCF6]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">
        Adventure Activities
      </h2>
      <p class="text-gray-600 mb-6">
        For thrill seekers – desert safaris and more
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <img :src="adv1" alt="Adventure" class="rounded-xl w-full h-40 object-cover" />
        <img :src="adv2" alt="Adventure" class="rounded-xl w-full h-40 object-cover" />
        <img :src="adv3" alt="Adventure" class="rounded-xl w-full h-40 object-cover" />
        <img :src="adv4" alt="Adventure" class="rounded-xl w-full h-40 object-cover" />
      </div>
      <div class="flex justify-end">
        <router-link to="/adventures">
        <BaseButton>Explore</BaseButton>
        </router-link>
      </div>
    </div>
  </section>

  <section class="py-2 px-6 bg-[#FFFCF6]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Events & Festivals</h2>
      <p class="text-gray-600 mb-6">Live the moment in Egypt’s top events</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <img :src="event1" alt="Events" class="rounded-xl w-full h-40 object-cover" />
        <img :src="event2" alt="Events" class="rounded-xl w-full h-40 object-cover" />
        <img :src="event3" alt="Events" class="rounded-xl w-full h-40 object-cover" />
        <img :src="event4" alt="Events" class="rounded-xl w-full h-40 object-cover" />
      </div>
      <div class="flex justify-end">
        <router-link to="/events">
        <BaseButton>Explore</BaseButton>
        </router-link>
      </div>
    </div>
  </section>
  <section class="py-6 px-6 bg-white">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
    >
      <!-- Left: Image with text overlay -->
      <div class="relative w-full h-72 md:h-80 rounded-xl overflow-hidden">
        <img :src="CTAImage" alt="Journey" class="w-full h-full object-cover" />
        <div
          class="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <h2 class="text-white text-3xl font-bold text-center px-4">
            Ready to start your journey?
          </h2>
        </div>
      </div>

      <!-- Right: Button -->
      <div class="flex justify-center md:justify-end">
        <router-link to="/tripplanner">
 

        <button
          class="bg-green-700 text-white text-xl font-semibold px-8 py-4 rounded-full hover:bg-green-800
           transition"
        >
          Plan your own trip now!
        </button>
        </router-link>
      </div>
    </div>
  </section>
  <Footer />
</template>
