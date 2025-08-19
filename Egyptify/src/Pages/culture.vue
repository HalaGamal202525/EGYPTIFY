<template>
  <Navbar />

  <div class="px-8 py-6 text-base text-gray-600 mt-20">
    <router-link to="/" class="text-blue-600 hover:underline">Home</router-link>
    <span> &gt; </span>
    <span class="text-gray-800 font-semibold">Culture</span>
  </div>

  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">Cultural Experiences</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        v-for="place in culturePlaces"
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
  name: "CultureCategory",
  components: {
    Navbar,
    Footer,
    Card
  },
  data() {
    return {
      culturePlaces: [
        {
          id: 7,
          title: "Egyptian Museum",
          image: "/sara/The-Grand-Egyptian.jpg",
          description: "Explore ancient Egyptian artifacts in one of the world's most renowned museums."
        },
        {
          id: 8,
          title: "Abu Simbel Temples",
          image: "/sara/Abu Simbel Temples.jpeg",
          description: "Discover the grandeur of Ramses II’s temples near Lake Nasser."
        },
        {
          id: 9,
          title: "Islamic Cairo",
          image: "/sara/Islamic Cairo.webp",
          description: "Walk through the historic mosques and architecture of Old Cairo."
        }
      ]
    };
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
      this.$router.push(`/culture/${id}`);
    }
  }
}
</script>
