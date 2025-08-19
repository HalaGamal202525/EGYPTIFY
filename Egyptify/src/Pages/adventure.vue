
<template>
  <Navbar />

  <div class="px-8 py-6 text-base text-gray-600 mt-20">
    <router-link to="/" class="text-blue-600 hover:underline">Home</router-link>
    <span> &gt; </span>
    <span class="text-gray-800 font-semibold">Adventure</span>
  </div>
  <div class="p-8 ">
    <h1 class="text-3xl font-bold mb-6">Adventure Activities</h1>

    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20 cursor-pointer">
<Card
  v-for="place in adventurePlaces"
  :key="place.id"
  :image="place.image"
  :title="place.title"
  :description="place.description"
  @click="handleCardClick(place); goToDetails(place.id)"
   class="cuersor-pointer"
 />


    </div>
  </div>

  <Footer />
</template>

<script>
import Navbar from '../components/NavBar-Black.vue';
import Footer from '../components/Footer.vue';
import Card from '../components/Card.vue';
import { useCardStore } from '../data/store.js'
export default {
  name: "AdventureCategory",
  components: {
    Navbar,
    Footer,
    Card
  },
  data() {
    return {
      adventurePlaces: [
        {
          id: 1,
          title: "Desert Safari in Siwa",
          image: "/sara/Desert Safari in Siwa.jpg",
          description: "Explore the majestic dunes of Siwa in a 4x4 safari.",
          rate: 4.5,
          price: 120
        },
        {
          id: 2,
          title: "Sinai Mountain Hiking",
          image: "/sara/Sinai Mountain Hiking.webp",
          description: "Climb Mount Sinai and enjoy breathtaking views at sunrise.",
          rate: 4.8,
          price: 150
        },
        {
          id: 3,
          title: "Camping by Wadi El-Rayan",
          image: "/sara/wadi alrayan.jpg",
          description: "Spend a night under the stars beside the waterfalls.",
          rate: 4.2,
          price: 90
        },
      ]
    }
  },
 methods: {
  handleCardClick(card) {
const bookingStore = useCardStore()
    bookingStore.setCardData({
      image: card.image,
      title: card.title,
      rate: card.rate,
      price: card.price
    });
    console.log('Set card data:', bookingStore.card);
  },
  goToDetails(id) {
    console.log('Going to details for id:', id);
    this.$router.push(`/adventure/${id}`);
  }
}

}
</script>

