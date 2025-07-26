<script setup>
import navbar from "../components/navbar.vue";
import Hero from "../components/Hero.vue";
import HeroImage from "../assets/ExplorePageHero.jpg";
import BaseButton from "../components/BaseButton.vue";
import CTAImage from "../assets/ExplorePage/CTA.jpg";
import foot from "../components/footer.vue";
</script>

<template>
  <navbar />
  <Hero
    title="Explore the Best of Egypt"
    description="Choose your next adventure from unique cultural experiences to thrilling outdoor activities."
    :image="HeroImage"
  />

  <section class="py-2 px-6 bg-[#FFFCF6]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Experiences</h2>
      <p class="text-gray-600 mb-6">Camel rides, Felucca trips, city tours</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <img
          src="..\assets\ExplorePage\experience\img1.jpg"
          alt="Felucca"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\experience\img2.jpg"
          alt="Camel ride"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\experience\img3.jpg"
          alt="Camel tour"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\experience\img4.jpg"
          alt="Desert safari"
          class="rounded-xl w-full h-40 object-cover"
        />
      </div>
      <div class="flex justify-end">
        <BaseButton>Book Now</BaseButton>
      </div>
    </div>
  </section>

  <section class="py-2 px-6 bg-[#FFFCF6]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Local Food Tours</h2>
      <p class="text-gray-600 mb-6">Taste Egypt’s flavors like a local!</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <img
          src="..\assets\ExplorePage\food\img1.jpg"
          alt="Food tour"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\food\img2.jpg"
          alt="Food tour"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\food\img3.jpg"
          alt="Food tour"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\food\img4.jpg"
          alt="Food tour"
          class="rounded-xl w-full h-40 object-cover"
        />
      </div>
      <div class="flex justify-end">
        <BaseButton>Book Now</BaseButton>
      </div>
    </div>
  </section>

  <section class="py-2 px-6 bg-[#FFFCF6]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Shopping Spots</h2>
      <p class="text-gray-600 mb-6">Colorful bazaars and traditional markets</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <img
          src="..\assets\ExplorePage\shopping\img1.jpg"
          alt="Shopping"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\shopping\img2.jpg"
          alt="Shopping"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\shopping\img3.jpg"
          alt="Shopping"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\shopping\img4.jpg"
          alt="Shopping"
          class="rounded-xl w-full h-40 object-cover"
        />
      </div>
      <div class="flex justify-end">
        <BaseButton>Add to Trip</BaseButton>
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
        <img
          src="..\assets\ExplorePage\adv&act\img1.jpg"
          alt="Adventure"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\adv&act\img2.jpg"
          alt="Adventure"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\adv&act\img3.jpg"
          alt="Adventure"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\adv&act\img4.jpg"
          alt="Adventure"
          class="rounded-xl w-full h-40 object-cover"
        />
      </div>
      <div class="flex justify-end">
        <BaseButton>Book Now</BaseButton>
      </div>
    </div>
  </section>

  <section class="py-2 px-6 bg-[#FFFCF6]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Events & Festivals</h2>
      <p class="text-gray-600 mb-6">Live the moment in Egypt’s top events</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <img
          src="..\assets\ExplorePage\Events\img1.jpg"
          alt="Events"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\Events\img2.jpg"
          alt="Events"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\Events\img3.jpg"
          alt="Events"
          class="rounded-xl w-full h-40 object-cover"
        />
        <img
          src="..\assets\ExplorePage\Events\img4.webp"
          alt="Events"
          class="rounded-xl w-full h-40 object-cover"
        />
      </div>
      <div class="flex justify-end">
        <BaseButton>Book Tickets</BaseButton>
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
        <button
          class="bg-[#005C4B] text-white text-xl font-semibold px-8 py-4 rounded-full hover:bg-[#00463a] transition"
        >
          Plan your own trip now!
        </button>
      </div>
    </div>
  </section>
  <foot />
</template>
