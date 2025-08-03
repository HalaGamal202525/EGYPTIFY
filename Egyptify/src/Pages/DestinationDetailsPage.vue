<!-- <template>
  <div class="font-sans">
    <Navbar />

    <section class="container mx-auto px-4 py-8 mt-16" v-if="destination">

     
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 class="text-2xl font-bold text-black">{{ destination.title }}</h1>
          <p class="text-sm text-black">⭐️⭐️⭐️⭐️⭐️</p>
          <p class="text-black mt-1">
            <i class="fas fa-map-marker-alt"></i> {{ destination.address }}
            <a href="#" class="text-blue-600 underline ml-2">Show Map</a>
          </p>
        </div>

        <div class="flex gap-4 items-center">
          <i class="far fa-heart text-2xl cursor-pointer"></i>
          <i class="fas fa-share-alt text-2xl cursor-pointer text-gray-600 hover:text-blue-500 transition-colors"></i>
          <BaseButton class="text-white">Reserve</BaseButton>
        </div>
      </div>

    
      <section class="mt-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div class="md:col-span-8">
            <img :src="destination.mainImage" alt="Main Image" class="w-full h-[310px] object-cover rounded-lg" />
          </div>
          <div class="md:col-span-4 flex flex-col gap-4">
            <img v-for="(img, i) in destination.sideImages" :key="i" :src="img" class="w-full h-[150px] object-cover rounded-lg" />
          </div>
        </div>
      </section>

      <div class="mt-8">
        <h2 class="text-black font-semibold mb-2">Description</h2>
        <p class="text-gray-700 leading-6" v-for="(p, index) in destination.description" :key="index">{{ p }}</p>
      </div>

      <div class="mt-6">
        <h2 class="text-black font-semibold mb-2">Most popular facilities</h2>
        <ul class="flex flex-wrap gap-4 text-gray-600 text-sm">
          <li v-for="(facility, i) in destination.facilities" :key="i">
            <i class="fas fa-check-circle mr-1"></i> {{ facility }}
          </li>
        </ul>
      </div>

      <div class="mt-8">
        <h2 class="text-black font-semibold mb-4">Guest Reviews</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <reviews
            v-for="(review, index) in destination.reviews"
            :key="index"
            :name="review.name"
            :avatar="review.avatar"
            :date="review.date"
            :rating="review.rating"
            :comment="review.comment"
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
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/navbar-black.vue'
import Footer from '../components/footer.vue'
import BaseButton from '../components/BaseButton.vue'
import reviews from '../components/reviews.vue'
import destinationsData from '../data/destinations.js'

const route = useRoute()
const destination = ref(null)

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
}

onMounted(() => {
  const slug = route.params.slug
  destination.value = destinationsData.find(d => slugify(d.title) === slug)
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
 -->

 <template>
  <div class="font-sans">
    <Navbar />

    <section class="container mx-auto px-4 py-8 mt-16" v-if="destination">
      <!-- عنوان المكان -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 class="text-2xl font-bold text-black">{{ destination.name }}</h1>
          <p class="text-sm text-black">{{ destination.stars }}</p>
          <p class="text-black mt-1">
            <i class="fas fa-map-marker-alt"></i> {{ destination.address }}
            <a href="#" class="text-blue-600 underline ml-2">Show Map</a>
          </p>
        </div>

        <div class="flex gap-4 items-center">
          <i class="far fa-heart text-2xl cursor-pointer"></i>
          <i class="fas fa-share-alt text-2xl cursor-pointer text-gray-600 hover:text-blue-500 transition-colors"></i>
          <BaseButton class="text-white">Reserve</BaseButton>
        </div>
      </div>

      <!-- صور -->
      <section class="mt-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div class="md:col-span-8">
            <img :src="destination.images.main" alt="Main Image" class="w-full h-[310px] object-cover rounded-lg" />
          </div>
          <div class="md:col-span-4 flex flex-col gap-4">
            <img :src="destination.images.img1" alt="Image 1" class="w-full h-[150px] object-cover rounded-lg" />
            <img :src="destination.images.img2" alt="Image 2" class="w-full h-[150px] object-cover rounded-lg" />
          </div>
          <div class="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <img
              v-for="(thumb, index) in destination.images.thumbs"
              :key="index"
              :src="thumb"
              :alt="`Thumbnail ${index + 1}`"
              class="w-full h-[150px] object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      <!-- الوصف -->
      <div class="mt-8">
        <h2 class="text-black font-semibold mb-2">Description</h2>
        <p v-for="(p, i) in destination.description" :key="i" class="text-gray-700 leading-6 mt-2">
          {{ p }}
        </p>
      </div>

      <!-- المرافق (لو موجودة) -->
      <div class="mt-6" v-if="destination.facilities && destination.facilities.length">
        <h2 class="text-black font-semibold mb-2">Most popular facilities</h2>
        <ul class="flex flex-wrap gap-4 text-gray-600 text-sm">
          <li v-for="(item, i) in destination.facilities" :key="i">
            <i :class="item.icon + ' mr-1'"></i> {{ item.label }}
          </li>
        </ul>
      </div>

      <!-- نوع الغرف (لو نوعه فندق) -->
      <div class="mt-6" v-if="destination.type === 'hotel'">
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
            v-for="(review, index) in destination.reviews"
            :key="index"
            :name="review.name"
            :avatar="review.avatar"
            :date="review.date"
            :rating="review.rating"
            :comment="review.comment"
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
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/navbar-black.vue'
import Footer from '../components/footer.vue'
import BaseButton from '../components/BaseButton.vue'
import reviews from '../components/reviews.vue'

// البيانات المحلية لـ ٨ أماكن
const route = useRoute()

const destinations = [
  {
    slug: 'iberotel-luxor',
    name: 'Iberotel Luxor',
    type: 'hotel',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: 'Khaled Ibn El Waleed Street, East Bank, Luxor, Egypt',
    images: {
      main: '/hotel/main.jpg',
      img1: '/hotel/img1.jpg',
      img2: '/hotel/img2.jpg',
      thumbs: ['/hotel/thumb1.jpg', '/hotel/thumb2.jpg', '/hotel/thumb3.jpg', '/hotel/thumb4.jpg'],
    },
    description: [
      'A heated pool floating on the Nile is one of the most unique features of this 4-star hotel.',
      'Overlooking the Theban Hills, Iberotel Luxor offers a restaurant boat and rooms with private balconies.',
    ],
    facilities: [
      { icon: 'fas fa-swimming-pool', label: 'Outdoor pool' },
      { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
      { icon: 'fas fa-utensils', label: 'Restaurant' },
    ],
    reviews: [
      {
        name: 'Manar',
        avatar: 'https://i.pravatar.cc/150?img=44',
        date: 'July 2025',
        rating: 4.5,
        comment: 'Amazing location with view of the Nile.',
      },
    ],
  },
  {
    slug: 'steigenberger-nile-palace',
    name: 'Steigenberger Nile Palace',
    type: 'hotel',
    stars: '⭐️⭐️⭐️⭐️',
    address: 'Khaled Ben El-Walid St., Luxor 85111 Egypt',
    images: {
      main: '/Destination/steignberger.jpg',
      img1: '/Destination/steigenberger2.jpg',
      img2: '/Destination/steigenberger3.jpg',
      thumbs: ['/Destination/steigenberger4.jpg', '/Destination/steigenberger8.jpg', '/Destination/steigenberger5.jpg', '/Destination/steigenberger6.jpg'],
    },
    description: [
      'The 5-star Steigenberger Nile Palace is situated in the heart of Luxor and provides modern accommodation with stunning views of the Nile.',
    ],
    facilities: [
      { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
      { icon: 'fas fa-utensils', label: 'Restaurant' },
    ],
    reviews: [
      {
        name: 'Khaled',
        avatar: 'https://i.pravatar.cc/150?img=45',
        date: 'June 2025',
        rating: 4.2,
        comment: 'Excellent view and service.',
      },
    ],
  },
  {
    slug: 'sofitel-winter-palace-luxor',
    name: 'Sofitel Winter Palace Luxor',
    type: 'hotel',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: '17 Cornish El Nile Street, Luxor 11432 Egypt',
    images: {
      main: '/Destination/sofitel.jpg',
      img1: '/Destination/sofitel-winter-palace.jpg',
      img2: '/Destination/sofitel-winter-palace (5).jpg',
      thumbs: ['/Destination/sofitel-winter-palace (4).jpg', '/Destination/sofitel-winter-palace (3).jpg', '/Destination/sofitel-winter-palace (2).jpg', '/public/Destination/sofitel-winter-palace (1).jpg'],
    },
    description: ['A luxurious 5-star hotel overlooking the Nile in the heart of Aswan.'],
    facilities: [],
      reviews: [
      {
        name: 'Khaled',
        avatar: 'https://i.pravatar.cc/150?img=45',
        date: 'June 2025',
        rating: 4.2,
        comment: 'Excellent view and service.',
      },
      {
        name: 'Manar',
        avatar: 'https://i.pravatar.cc/150?img=44',
        date: 'July 2025',
        rating: 4.5,
        comment: 'Amazing location with view of the Nile.',
      },
    ]
  },
  {
    slug: 'hilton-luxor-resort',
    name: 'Hilton Luxor Resort & Spa',
    type: 'hotel',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: 'El Karnak El Gadid Street, Luxor 85954 Egypt',
    images: {
      main: '/Destination/hilton luxor.jpg',
      img1: '/Destination/hilton1.jpg',
      img2: '/Destination/hilton 2.jpg',
      thumbs: ['/Destination/hilton3.jpg', '/Destination/hilton4.jpg', '/Destination/hilton5.jpg', '/Destination/hilton6.jpg'],
    },
    description: ['Nestled along the Nile, Hilton Luxor Resort & Spa is celebrated for its tranquil location and stunning views, which many travelers find captivating. The hotel’s service earns praise for its friendliness and attentiveness, enhancing guests’ experiences.'],
    facilities: [],
    reviews: [],
  },
  {
    slug: 'tarboush-restaurant',
    name: 'El Tarboush ',
    type: 'restaurant',
    stars: '',
    address: 'Khaled Ben El Walid Street Steigenberger Nile Palace Luxor, Luxor 85111 Egypt',
    images: {
      main: '/Destination/eltarboush.jpg',
      img1: '/Destination/eltarboush2.jpg',
      img2: '/Destination/eltarboush3.jpg',
      thumbs: [],
    },
    description: ['At Steigenberger Nile Palace, we are pleased to welcome our Lebanese Restaurant ’El Tarboush’. The Lebanese cuisine has something for everyone, from crispy falafel and kibbeh to skewered kebabs and slow-cooked meat.'],
    facilities: [],
    reviews: [],
  },
  {
    slug: 'sofra-restaurant',
    name: 'Sofra Restaurant & Cafe',
    type: 'restaurant',
    stars: '',
    address: 'Luxor',
    images: {
      main: '/Destination/sofra restaurant.jpg',
      img1: '/Destination/sofra1.jpg',
      img2: '/Destination/sofra2.jpg',
      thumbs: [],
    },
    description: ['A restaurant located in the heart of Luxor that draws its inspiration from the rich Arabian culture. Sofra is situated in an old 1930s Egyptian house that still retains its traditional character.'],
    facilities: [],
    reviews: [],
  },
  {
    slug: 'luxor-temple',
    name: 'Luxor Temple',
    type: 'attraction',
    stars: '',
    address: 'Mabad Al Oksor Rd, Luxor 1362501 Egypt',
    images: {
      main: '/Destination/luxor temple.jpg',
      img1: '/Destination/luxor temple2.jpg',
      img2: '/Destination/luxor temple3.jpg',
      thumbs: [],
    },
    description: ['A temple built for the ritual practices exercised at the most important Ancient Egyptian festival, The Festival of Opet.'],
    facilities: [],
    reviews: [],
  },
  {
    slug: 'valley-of-the-kings',
    name: 'Valley of the Kings',
    type: 'attraction',
    stars: '',
    address: 'Luxor, Egypt',
    images: {
      main: '/Destination/valley of kings.jpg',
      img1: '/Destination/valley of kings3.jpg',
      img2: '/Destination/Valley-of-the-Kings.jpg',
      thumbs: [],
    },
    description: ['This desert valley contains the ancient burial ground of many Egyptian pharaohs. Among over 60 royal tombs is the famous Tomb of Tutankhamen that was found in pristine condition.'],
    facilities: [],
    reviews: [],
  },
]

const destination = ref(destinations.find(d => d.slug === route.params.slug))
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

