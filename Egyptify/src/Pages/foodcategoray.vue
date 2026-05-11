<template>
  <Navbar />

  <div class="px-8 py-6 text-base text-gray-600 ">
    <router-link to="/" class="text-blue-600 hover:underline">Home</router-link>
    <span> &gt; </span>
    <span class="text-gray-800 font-semibold">Food</span>
  </div>

  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">Food Experiences</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        v-for="place in foodPlaces"
        :key="place.id"
        :image="place.image"
        :title="place.title"
        :description="place.description"
  @click="handleCardClick(place); goToDetails(place.id)"      />
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
  name: "FoodCategory",
  components: {
    Navbar,
    Footer,
    Card
  },
  data() {
    return {
   foodPlaces: [
  {
    id: 4,
    title: "Koshari El Tahrir",
    image: "/sara/Koshari El Tahrir.webp",
    description: "A famous restaurant serving classic Egyptian Koshari in the heart of Cairo.",
  },
  {
    id: 5,
    title: "Fish Market Alexandria",
    image: "/sara/Fish Market Alexandria.webp",
    description: "Sea-view restaurant offering fresh seafood and Mediterranean flavors.",
  },
  {
    id: 6,
    title: "Nubian House",
    image: "/sara/Nubian House.jpeg",
    description: "Traditional Nubian restaurant with authentic home-style dishes in Aswan.",
  }
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
      this.$router.push(`/food/${id}`);
    }
  }
}
</script>
