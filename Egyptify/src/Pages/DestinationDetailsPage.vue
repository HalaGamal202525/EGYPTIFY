<template>
  <div class="font-sans">
    <Navbar />

    <div class="container mx-auto px-4 mt-28 ">
      <router-link
         to="/destination"
        class="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
      >
        <i class="fas fa-arrow-left mr-2 text-lg"></i>
        <span class="font-medium">Back</span>
      </router-link>
    </div>

    <section class="container mx-auto px-4 py-8 mt-2" v-if="destination">
      <!-- عنوان المكان -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 class="text-2xl font-bold text-black">{{ destination.name }}</h1>
          <p class="text-sm text-black">{{ destination.stars }}</p>
          <p class="text-black mt-1">
            <i class="fas fa-map-marker-alt"></i> {{ destination.address }}
            <a href="/map" class="text-blue-600 underline ml-2">Show Map</a>
          </p>
        </div>

        <div class="flex gap-4 items-center">
          <i class="far fa-heart text-2xl cursor-pointer"></i>
          <i class="fas fa-share-alt text-2xl cursor-pointer text-gray-600 hover:text-blue-500 transition-colors"></i>
          <BaseButton @click="$router.push('/booking')" class="text-white">Reserve</BaseButton>
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
          <a href="/roomtype" class="text-blue-600 underline">Show Details</a>
        </div>
      </div>

      <!-- نموذج حجز للفنادق -->
<div
  v-if="destination.type === 'hotel'"
  class="mt-8 border p-4 rounded-lg bg-gray-50"
>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="flex-1">
      <label class="text-black">Check-in Date</label>
      <input
        type="date"
        class="border w-full p-2 rounded-md text-black"
      />
    </div>
    <div class="flex-1">
      <label class="text-black">Check-out Date</label>
      <input
        type="date"
        class="border w-full p-2 rounded-md text-black"
      />
    </div>
    <div class="flex-1">
      <label class="text-black">Guests</label>
      <input
        type="text"
        class="border w-full p-2 rounded-md text-black"
        placeholder="2 Adults - 0 Children - 1 Room"
      />
    </div>
    <div class="flex items-end">
      <BaseButton class="text-white">Search</BaseButton>
    </div>
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
import Navbar from '../components/Navbar-Black.vue'
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
       { icon: 'fas fa-concierge-bell', label: 'Room Service' },
      { icon: 'fas fa-fire', label: 'BBQ Facilities' },
    ],
    reviews: [
      {
        name: 'Manar',
        avatar: 'https://i.pravatar.cc/150?img=44',
        date: 'July 2025',
        rating: 4.5,
        comment: 'Amazing location with view of the Nile.',
      },
      {
          name: 'Yasmine',
         avatar:'https://i.pravatar.cc/150?img=5',
  date:'July 2025',
  rating: 4,
  comment:'The location is perfect for exploring the east bank. Very nice view and pool directly on the Nile. The breakfast was delicious and huge.'
      },
      {
         name:'Sara',
  avatar:'https://i.pravatar.cc/150?img=20',
  date:'July 2025',
  rating:'5',
  comment:'Amazing location with view of the Nile. Stunning gardens, gorgeous pool with bar. Staff were wonderful. Spacious. Shop and cash point there.'

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
       { icon: 'fas fa-concierge-bell', label: 'Room Service' },
      { icon: 'fas fa-fire', label: 'BBQ Facilities' },
    ],
    reviews: [
      {
        name: 'Khaled',
        avatar: 'https://i.pravatar.cc/150?img=45',
        date: 'June 2025',
        rating: 4.2,
        comment: 'Excellent view and service.',
      },
               {
             name:'Annibear',
  avatar:'https://i.pravatar.cc/120?img=54',
  date:'July 2025',
  rating:'5',
  comment:"Amazing and excellent hotel, service and people , It is a part of the history everything  there take you to the past , the atmosphere and hotel vibes I can't wait to go back"

         },
                     {
             name:'Neil G ',
  avatar:'https://i.pravatar.cc/120?img=13',
  date:'July 2025',
  rating:'5',
  comment:"it was truly an unforgettable experience. From the moment I arrived, I was captivated by the hotel’s timeless charm and elegance. The historical atmosphere, blended with luxurious comfort, made every moment special."

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
    description: ['A luxurious 5-star hotel overlooking the Nile in the heart of Aswan.Sofitel Winter Palace Luxor is popular among travelers for its spacious, elegant rooms, although some note that the furnishings feel outdated. Its location near Luxor Temple and the Nile River earns rave reviews. The historic atmosphere and old-world charm are highlights, and the attentive, friendly service is often praised.'],
    facilities: [
        { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
      { icon: 'fas fa-utensils', label: 'Restaurant' },
      { icon: 'fas fa-concierge-bell', label: 'Room Service' },
      { icon: 'fas fa-fire', label: 'BBQ Facilities' },
    ],
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
       {
        name: 'Peter',
        avatar: 'https://i.pravatar.cc/150?img=58',
        date: 'July 2025',
        rating: 4.5,
        comment: 'it was truly an unforgettable experience. From the moment I arrived, I was captivated by the hotel’s timeless charm and elegance. The historical atmosphere, blended with luxurious comfort, made every moment special.',
      },

    ]
  },
  {
    slug: 'hilton-luxor-resort--spa',
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
    description: ['Nestled along the Nile, Hilton Luxor Resort & Spa is celebrated for its tranquil location and stunning views, which many travelers find captivating. The hotel’s service earns praise for its friendliness and attentiveness, enhancing guests’ experiences.While the rooms are noted for their comfort and cleanliness, some travelers mention they could benefit from updates. Overall, the resort offers a peaceful atmosphere with luxurious amenities, such as a spa and pools, though some reviewers suggest modernizing certain areas.'],
    facilities: [
         { icon: 'fas fa-concierge-bell', label: 'Room Service' },
      { icon: 'fas fa-fire', label: 'BBQ Facilities' },
        { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
      { icon: 'fas fa-utensils', label: 'Restaurant' },
    ],
    reviews: [
         {
        name: 'Yara',
        avatar: 'https://i.pravatar.cc/150?img=28',
        date: 'June 2025',
        rating: 4.8,
        comment: 'My first time in Egypt and I couldn’t have picked a better place to stay than Hilton Luxor Resort & Spa. Excellent view and service.',
      },
      {
        name: 'Manar',
        avatar: 'https://i.pravatar.cc/150?img=44',
        date: 'July 2025',
        rating: 4.5,
        comment: 'The Hilton Luxor Resort was great, a welcome bastion from the heat, hustle, and bustle of Luxor (which we also thoroughly enjoyed). ',
      },
      {
        name: 'Andy',
        avatar: 'https://i.pravatar.cc/150?img=65',
        date: 'July 2025',
        rating: 4.5,
        comment: 'The environment is beautiful, the service is warm, the price of the accommodation meal is also appropriate, the hotel accommodation is good,',
      },
    ],
  },
  {
    slug: 'el-tarboush',
    name: 'EL Tarboush restaurant ',
    type: 'restaurant',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: 'Khaled Ben El Walid Street Steigenberger Nile Palace Luxor, Luxor 85111 Egypt',
    images: {
      main: '/Destination/eltarboush.jpg',
      img1: '/Destination/eltarboush2.jpg',
      img2: '/Destination/eltarboush3.jpg',
      thumbs: [],
    },
    description: ['At Steigenberger Nile Palace, we are pleased to welcome our Lebanese Restaurant ’El Tarboush’. The Lebanese cuisine has something for everyone, from crispy falafel and kibbeh to skewered kebabs and slow-cooked meat.'],
    facilities: [],
    reviews: [
                  {
             name:'Melissa',
  avatar:'https://i.pravatar.cc/120?img=10',
  date:'July 2025',
  rating:'5',
  comment:'For a refined Lebanese‑style dining experience, with expressive flavors, Nile‑view elegance, and top-tier service, El Tarboush is a standout choice.'

      },
         {
             name:'Annibear',
  avatar:'https://i.pravatar.cc/120?img=54',
  date:'July 2025',
  rating:'5',
  comment:"One of the best Lebanese restaurants in Luxor… grilled lamb chops were made to perfection… tender, falling off the bone…"

         },
                     {
             name:'Neil G ',
  avatar:'https://i.pravatar.cc/120?img=13',
  date:'July 2025',
  rating:'5',
  comment:"Service is 10+ stars… one of the most delicious meals I’ve ever experienced… ambiance is divine."

      },
    ],
  },
  {
    slug: 'sofra-restaurant--cafe',
    name: 'Sofra Restaurant & Cafe',
    type: 'restaurant',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: 'Luxor',
    images: {
      main: '/Destination/sofra restaurant.jpg',
      img1: '/Destination/sofra1.jpg',
      img2: '/Destination/sofra2.jpg',
      thumbs: [],
    },
    description: ['A restaurant located in the heart of Luxor that draws its inspiration from the rich Arabian culture. Sofra is situated in an old 1930s Egyptian house that still retains its traditional character.'],
    facilities: [],
    reviews: [
                      {
             name:'Melissa',
  avatar:'https://i.pravatar.cc/120?img=10',
  date:'July 2025',
  rating:'5',
  comment:'For a refined Lebanese‑style dining experience, with expressive flavors, Nile‑view elegance, and top-tier service, El Tarboush is a standout choice.'

      },
         {
             name:'Annibear',
  avatar:'https://i.pravatar.cc/120?img=54',
  date:'July 2025',
  rating:'5',
  comment:"For authentic Egyptian home-style dishes and budget-friendly value, Sofra is ideal—especially for mezze tastings and cozy rooftop ambiance."

         },
                     {
             name:'Neil G ',
  avatar:'https://i.pravatar.cc/120?img=13',
  date:'July 2025',
  rating:'5',
  comment:"Service is 10+ stars… one of the most delicious meals I’ve ever experienced… ambiance is divine."

      },
    ],
  },
  {
    slug: 'luxor-temple',
    name: 'Luxor Temple',
    type: 'attraction',
    stars: '⭐️⭐️⭐️⭐️',
    address: 'Mabad Al Oksor Rd, Luxor 1362501 Egypt',
    images: {
      main: '/Destination/luxor temple.jpg',
      img1: '/Destination/luxor temple2.jpg',
      img2: '/Destination/luxor temple3.jpg',
      thumbs: [],
    },
    description: ['A temple built for the ritual practices exercised at the most important Ancient Egyptian festival, The Festival of Opet.'],
    facilities: [],
    reviews: [
        {
             name:'Mera',
  avatar:'https://i.pravatar.cc/120?img=30',
  date:'July 2025',
  rating:'5',
  comment:'One of the most beautiful archaeological sites in the world… overlooking the Nile Corniche directly… one of the most beautiful places I have ever visited.'

      },
         {
             name:'Ibrahim',
  avatar:'https://i.pravatar.cc/120?img=53',
  date:'July 2025',
  rating:'5',
  comment:'Truly a historical and religious festival… best to visit before sunset to enjoy the colors of the sky and artistic lighting… features a Pharaonic temple, Greek columns, Alexander’s chamber, a church, and a mosque in the same place.'
         },
    ],
  },
  {
    slug: 'valley-of-the-kings',
    name: 'Valley of the Kings',
    type: 'attraction',
    stars: '⭐️⭐️⭐️⭐️',
    address: 'Luxor, Egypt',
    images: {
      main: '/Destination/valley of kings3.jpg',
      img1: '/Destination/valley of kings.jpg',
      img2: '/Destination/Valley-of-the-Kings.jpg',
      thumbs: [],
    },
    description: ['This desert valley contains the ancient burial ground of many Egyptian pharaohs. Among over 60 royal tombs is the famous Tomb of Tutankhamen that was found in pristine condition.'],
    facilities: [],
    reviews: [
                {
             name:'Melissa',
  avatar:'https://i.pravatar.cc/120?img=10',
  date:'July 2025',
  rating:'5',
  comment:'Go early. It’s amazing to see the tombs and hear the story of Tut’s discovery. I skipped Tut due to the long line and wait. Very hot—bring water.'

      },
         {
             name:'Annibear',
  avatar:'https://i.pravatar.cc/120?img=54',
  date:'July 2025',
  rating:'5',
  comment:"An amazing site, though you need to pay extra fees. We were delighted to see King Tutankhamun’s mummy, which had been returned to the site about five years ago. The original colors of the carvings are stunning, and it was surreal to be here."

         },
                     {
             name:'Neil G ',
  avatar:'https://i.pravatar.cc/120?img=13',
  date:'July 2025',
  rating:'5',
  comment:
"The Valley of the Kings is definitely one of the most incredible places I’ve been. But I was hassled by some vendors who asked for my phone and then gave it back in exchange for goods."

      },
    ],
  },

  //cairo
   {
    slug: 'pyramids-of-giza',
    name: 'Pyramids of Giza',
    type: 'Historic',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: 'Cairo',
    images: {
      main: '/Destination/pyramids2.jpg',
      img1: '/Destination/pyramids1.jpg',
      img2: '/Destination/pyramids3.jpg',
      thumbs: ['/Destination/pyramids4.jpg', '/Destination/pyramids5.jpg', '/Destination/pyramids1.jpg', '/Destination/pyramids6.jpg'],
    },
    description: [
      'Iconic ancient monuments including the Great Pyramid and the Sphinx, located on the Giza',
      'Iconic ancient monuments including the Great Pyramid and the Sphinx, located on the Giza',
    ],
    facilities: [
      { icon: 'fas fa-landmark', label: 'Historic Site' },
      { icon: 'fas fa-camera', label: 'Photography Spots' },
      { icon: 'fas fa-walking', label: 'Guided Tours' },
      
    ],
    reviews: [
      {
        name: 'Omar',
        avatar: 'https://i.pravatar.cc/150?img=15',
        date: 'July 2025',
        rating: 4.5,
        comment: 'Amazing location with view of the Nile.',
      },
      {
          name: 'Yasmine',
         avatar:'https://i.pravatar.cc/150?img=5',
  date:'July 2025',
  rating: 4,
  comment:'The location is perfect for exploring the east bank. Very nice view and pool directly on the Nile. The breakfast was delicious and huge.'
      },
      {
         name:'Sara',
  avatar:'https://i.pravatar.cc/150?img=20',
  date:'July 2025',
  rating:'5',
  comment:'Amazing location with view of the Nile. Stunning gardens, gorgeous pool with bar. Staff were wonderful. Spacious. Shop and cash point there.'

      },
    ],
  },
  {
    slug: 'egyptian-museum',
    name: 'Egyptian Museum',
    type: 'Historic',
    stars: '⭐️⭐️⭐️⭐️',
    address: 'Cairo',
    images: {
      main: '/Destination/egyptian-muesum.jpg',
      img1: '/Destination/egyptian-muesum2.webp',
      img2: '/Destination/egyptian-muesum3.jpg',
      thumbs: [],
    },
    description: [
      'Home to thousands of ancient artifacts including the treasures of King Tutankhamun.',
    ],
    facilities: [
      { icon: 'fas fa-university', label: 'Museum' },
      { icon: 'fas fa-headest', label: 'Audio Guides' },
       { icon: 'fas fa-gift', label: 'Gift Shop' },
    ],
    reviews: [
      {
        name: 'Khaled',
        avatar: 'https://i.pravatar.cc/150?img=45',
        date: 'June 2025',
        rating: 4.2,
        comment: 'Excellent view and service.',
      },
               {
             name:'Annibear',
  avatar:'https://i.pravatar.cc/120?img=54',
  date:'July 2025',
  rating:'5',
  comment:"Amazing and excellent hotel, service and people , It is a part of the history everything  there take you to the past , the atmosphere and hotel vibes I can't wait to go back"

         },
                     {
             name:'Neil G ',
  avatar:'https://i.pravatar.cc/120?img=13',
  date:'July 2025',
  rating:'5',
  comment:"it was truly an unforgettable experience. From the moment I arrived, I was captivated by the hotel’s timeless charm and elegance. The historical atmosphere, blended with luxurious comfort, made every moment special."

      },
      
    ],
  },
  {
    slug: 'khan-el-khalili',
    name: 'Khan El Khalili',
    type: 'Shopping',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: 'Cairo',
    images: {
      main: '/Destination/Khan-El-Khalili1.jpg',
      img1: '/Destination/Khan-El-Khalili2.jpg',
      img2: '/Destination/Khan-El-Khalili3.jpg',
      thumbs: [],
    },
    description: ['A luxurious 5-star hotel overlooking the Nile in the heart of Aswan.Sofitel Winter Palace Luxor is popular amThis vibrant open-air bazaar is a treasure trove of Egyptian culture, with bustling streets filled with local artisans and vendors. Here, you can pick up unique souvenirs like spices and perfumes, or simply soak up the local atmosphere.'],
    facilities: [
        { icon: 'fas fa-store', label: 'Market' },
      { icon: 'fas fa-coffee', label: 'Cafes' },
      { icon: 'fas fa-gifts', label: 'Souvenirs' },
    ],
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
       {
        name: 'Peter',
        avatar: 'https://i.pravatar.cc/150?img=58',
        date: 'July 2025',
        rating: 4.5,
        comment: 'it was truly an unforgettable experience. From the moment I arrived, I was captivated by the hotel’s timeless charm and elegance. The historical atmosphere, blended with luxurious comfort, made every moment special.',
      },

    ]
  },
  {
    slug: 'intercontinental-cairo-semiramis',
    name: 'Intercontinental Cairo Semiramis',
    type: 'hotel',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: 'Cairo',
    images: {
      main: '/Destination/semiramis.jpg',
      img1: '/Destination/semiramis1.jpg',
      img2: '/Destination/semiramis2.jpg',
      thumbs: ['/Destination/semiramis3.jpg', '/Destination/semiramis4.jpg', '/Destination/semiramis.jpg', '/Destination/semiramis5.jpg'],
    },
    description: ['On the historic Semiramis hotel site, guests can enjoy modern luxury by the river Nile. Semiramis InterContinental Cairo is located in the heart of downtown Cairo, next to the Egyptian Museum and Khan el Khalili.'],
    facilities: [
         { icon: 'fas fa-concierge-bell', label: 'Room Service' },
      { icon: 'fas fa-fire', label: 'BBQ Facilities' },
        { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
      { icon: 'fas fa-utensils', label: 'Restaurant' },
       { icon: 'fas fa-swimming-pool', label: 'Outdoor Pool' },
    ],
    reviews: [
         {
        name: 'Yara',
        avatar: 'https://i.pravatar.cc/150?img=28',
        date: 'June 2025',
        rating: 4.8,
        comment: 'My first time in Egypt and I couldn’t have picked a better place to stay than Hilton Luxor Resort & Spa. Excellent view and service.',
      },
      {
        name: 'Manar',
        avatar: 'https://i.pravatar.cc/150?img=44',
        date: 'July 2025',
        rating: 4.5,
        comment: 'The Hilton Luxor Resort was great, a welcome bastion from the heat, hustle, and bustle of Luxor (which we also thoroughly enjoyed). ',
      },
      {
        name: 'Andy',
        avatar: 'https://i.pravatar.cc/150?img=65',
        date: 'July 2025',
        rating: 4.5,
        comment: 'The environment is beautiful, the service is warm, the price of the accommodation meal is also appropriate, the hotel accommodation is good,',
      },
    ],
  },
  {
    slug: 'al-azhar-mosque',
    name: 'Al Azhar Mosque ',
    type: 'Islamic',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: 'Cairo',
    images: {
      main: '/Destination/alazhar-mosque1.jpg',
      img1: '/Destination/alazhar-mosque2.jpg',
      img2: '/Destination/alazhar-mosque3.png',
      thumbs: [],
    },
    description: ['Al-Azhar Mosque is a historic Islamic landmark in Cairo and one of the oldest centers of Islamic learning in the world.'],
    facilities: [
      { icon: 'fas fa-mosque', label: 'Mosque' },
      { icon: 'fas fa-landmark', label: 'Historic Site' },
        { icon: 'fas fa-walking', label: 'Guide Tours' },
    ],
    reviews: [
                  {
             name:'Melissa',
  avatar:'https://i.pravatar.cc/120?img=10',
  date:'July 2025',
  rating:'5',
  comment:'For a refined Lebanese‑style dining experience, with expressive flavors, Nile‑view elegance, and top-tier service, El Tarboush is a standout choice.'

      },
         {
             name:'Annibear',
  avatar:'https://i.pravatar.cc/120?img=54',
  date:'July 2025',
  rating:'5',
  comment:"One of the best Lebanese restaurants in Luxor… grilled lamb chops were made to perfection… tender, falling off the bone…"

         },
                     {
             name:'Neil G ',
  avatar:'https://i.pravatar.cc/120?img=13',
  date:'July 2025',
  rating:'5',
  comment:"Service is 10+ stars… one of the most delicious meals I’ve ever experienced… ambiance is divine."

      },
    ],
  },
  {
    slug: 'the-citadel',
    name: 'The Citadel',
    type: 'Historical',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: 'Cairo',
    images: {
      main: '/Destination/sofra restaurant.jpg',
      img1: '/Destination/sofra1.jpg',
      img2: '/Destination/sofra2.jpg',
      thumbs: [],
    },
    description: ['A medieval Islamic fort with panoramic views of Cairo and the iconic Mosque.'],
    facilities: [
      { icon: 'fas fa-landmark', label: 'Historic Fort' },
      { icon: 'fas fa-binoculars', label: 'Panoramic Views' },
        { icon: 'fas fa-mosque', label: 'Mosque' },
    ],
    reviews: [
                      {
             name:'Melissa',
  avatar:'https://i.pravatar.cc/120?img=10',
  date:'July 2025',
  rating:'5',
  comment:'For a refined Lebanese‑style dining experience, with expressive flavors, Nile‑view elegance, and top-tier service, El Tarboush is a standout choice.'

      },
         {
             name:'Annibear',
  avatar:'https://i.pravatar.cc/120?img=54',
  date:'July 2025',
  rating:'5',
  comment:"For authentic Egyptian home-style dishes and budget-friendly value, Sofra is ideal—especially for mezze tastings and cozy rooftop ambiance."

         },
                     {
             name:'Neil G ',
  avatar:'https://i.pravatar.cc/120?img=13',
  date:'July 2025',
  rating:'5',
  comment:"Service is 10+ stars… one of the most delicious meals I’ve ever experienced… ambiance is divine."

      },
    ],
  },
  {
    slug: 'le-passage-cairo-hotel--casino',
    name: 'Le Passage Cairo Hotel & Casino',
    type: 'Hotel',
    stars: '⭐️⭐️⭐️⭐️',
    address: 'Cairo',
    images: {
      main: '/Destination/Le Passage1.jpg',
      img1: '/Destination/Le Passage2.jpg',
      img2: '/Destination/Le Passage3.jpg',
      thumbs: ['/Destination/Le Passage4.jpg','/Destination/Le Passage5.jpg','/Destination/Le Passage2.jpg','/Destination/Le Passage3.jpg',],
    },
    description: ['Le Passage Cairo Hotel & Casino is located in Heliopolis, an elegant business and residential district in Cairo and it is considered one of the safest area in town. The hotel is only five minutes from Cairo International Airport and ten minutes from the Cairo International Convention Centre and Fair Grounds, with free shuttle bus service, free wifi and free internet. Great design is the key to this urban, cosmopolitan business and leisure base, providing a sophisticated and stylish environment in the throbbing heart of Egypt and the Middle East.'],
    facilities: [
         { icon: 'fas fa-concierge-bell', label: 'Room Service' },
      { icon: 'fas fa-fire', label: 'BBQ Facilities' },
        { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
      { icon: 'fas fa-utensils', label: 'Restaurant' },
       { icon: 'fas fa-swimming-pool', label: 'Outdoor Pool' },

    ],
    reviews: [
        {
             name:'Mera',
  avatar:'https://i.pravatar.cc/120?img=30',
  date:'July 2025',
  rating:'5',
  comment:'One of the most beautiful archaeological sites in the world… overlooking the Nile Corniche directly… one of the most beautiful places I have ever visited.'

      },
         {
             name:'Ibrahim',
  avatar:'https://i.pravatar.cc/120?img=53',
  date:'July 2025',
  rating:'5',
  comment:'Truly a historical and religious festival… best to visit before sunset to enjoy the colors of the sky and artistic lighting… features a Pharaonic temple, Greek columns, Alexander’s chamber, a church, and a mosque in the same place.'
         },
    ],
  },
  {
    slug: 'steigenberger-hotel-el-tahrir-cairo',
    name: 'Steigenberger Hotel El Tahrir Cairo',
    type: 'Hotel',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    address: 'Cairo, Egypt',
    images: {
      main: '/Destination/steigenberger2.jpg',
      img1: '/Destination/steigenberger3.jpg',
      img2: '/Destination/steigenberger4.jpg',
      thumbs: ['/Destination/steigenberger5.jpg','/Destination/steigenberger6.jpg','/Destination/steigenberger8.jpg','/Destination/steigenberger4.jpg',],
    },
    description: ['Among Cairo hotels, Steigenberger El Tahrir secures a spectacular location in El Tahrir Square, overlooking the Egyptian museum, minutes away from Khan El Khalili Bazar, and in close proximity to Egypt’s major attractions with a total area of 21,633 sqm.'],
    facilities: [
           { icon: 'fas fa-concierge-bell', label: 'Room Service' },
      { icon: 'fas fa-fire', label: 'BBQ Facilities' },
        { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
      { icon: 'fas fa-utensils', label: 'Restaurant' },
       { icon: 'fas fa-swimming-pool', label: 'Outdoor Pool' },

    ],
    reviews: [
                {
             name:'Melissa',
  avatar:'https://i.pravatar.cc/120?img=10',
  date:'July 2025',
  rating:'5',
  comment:'Go early. It’s amazing to see the tombs and hear the story of Tut’s discovery. I skipped Tut due to the long line and wait. Very hot—bring water.'

      },
         {
             name:'Annibear',
  avatar:'https://i.pravatar.cc/120?img=54',
  date:'July 2025',
  rating:'5',
  comment:"An amazing site, though you need to pay extra fees. We were delighted to see King Tutankhamun’s mummy, which had been returned to the site about five years ago. The original colors of the carvings are stunning, and it was surreal to be here."

         },
                     {
             name:'Neil G ',
  avatar:'https://i.pravatar.cc/120?img=13',
  date:'July 2025',
  rating:'5',
  comment:
"The Valley of the Kings is definitely one of the most incredible places I’ve been. But I was hassled by some vendors who asked for my phone and then gave it back in exchange for goods."

      },
    ],
  },

  //Aswan

  // Sofitel Legend Old Cataract Aswan
{
   slug: 'sofitel-legend-old-cataract-aswan',
  name: 'Sofitel Legend Old Cataract Aswan',
  location: 'Aswan',
  type: 'Hotel',
  images: {
      main: '/Destination/Sofitel Legend Old Cataract Aswan2.jpg',
      img1: '/Destination/Sofitel Legend Old Cataract Aswan3.jpg',
      img2: '/Destination/Sofitel Legend Old Cataract Aswan4.jpg',
      thumbs: ['/Destination/Sofitel Legend Old Cataract Aswan5.jpg','/Destination/Sofitel Legend Old Cataract Aswan6.jpg','/Destination/sofitel-legend-old-cataract.jpg','/Destination/sofitel-legend-old-cataract1.jpg',],
    },
  description: ['A historic luxury hotel on the banks of the Nile, famous for hosting royalty, celebrities, and authors. Combines Victorian architecture with modern comfort and stunning views.'],
  facilities: [
    { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
    { icon: 'fas fa-swimming-pool', label: 'Outdoor Pool' },
    { icon: 'fas fa-utensils', label: 'Fine Dining' },
  ],
  
  reviews: [
    {
      name: 'James',
      avatar: 'https://i.pravatar.cc/150?img=15',
      date: 'July 2025',
      rating: 5,
      comment: 'Absolutely stunning views of the Nile. The service is exceptional.'
    },
    {
      name: 'Emily',
      avatar: 'https://i.pravatar.cc/150?img=32',
      date: 'June 2025',
      rating: 4.8,
      comment: 'A hotel with rich history and unmatched elegance.'
    }
  ]
},

// Movenpick Resort Aswan
{
   slug: 'movenpick-resort-aswan',
  name: 'Movenpick Resort Aswan',
  location: 'Aswan',
  type: 'Hotel',
    images: {
      main: '/Destination/Movenpick Resort Aswan4.jpg',
      img1: '/Destination/Movenpick Resort Aswan5.jpg',
      img2: '/Destination/movenpick-resort-aswan6.jpg',
      thumbs: ['/Destination/movenpick-resort-aswan.3.jpg','/Destination/movenpick-resort-aswan6.jpg','/Destination/movenpick-resort-aswan1.jpg','/Destination/movenpick-resort-aswan.2.jpg',],
    },
  description: ['Located on Elephantine Island, this resort offers panoramic views of the Nile, lush gardens, and a peaceful atmosphere just minutes from the city center.'],
  facilities: [
    { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
    { icon: 'fas fa-swimming-pool', label: 'Outdoor Pool' },
    { icon: 'fas fa-dumbbell', label: 'Fitness Center' },
  ],
  reviews: [
    {
      name: 'Michael',
      avatar: 'https://i.pravatar.cc/150?img=18',
      date: 'July 2025',
      rating: 4.7,
      comment: 'Beautiful resort with great service and amazing views.'
    },
    {
      name: 'Sophia',
      avatar: 'https://i.pravatar.cc/150?img=40',
      date: 'June 2025',
      rating: 4.5,
      comment: 'Relaxing location with friendly staff.'
    }
  ]
},

// Nubian Museum
{
   slug: 'nubian-museum',
  name: 'Nubian Museum',
  location: 'Aswan',
  type: 'Museum',
     images: {
      main: '/Destination/nubian-museum1.jpg',
      img1: '/Destination/nubian-museum2.jpg',
      img2: '/Destination/nubian-museum3.jpg',
      thumbs: [],
    },
  description: ['Showcases the rich culture and history of Nubia, featuring ancient artifacts, art, and exhibitions about Nubian life and heritage.'],
  facilities: [
    { icon: 'fas fa-university', label: 'Museum' },
    { icon: 'fas fa-headset', label: 'Audio Guides' },
    { icon: 'fas fa-gift', label: 'Gift Shop' },
  ],
  reviews: [
    {
      name: 'Anna',
      avatar: 'https://i.pravatar.cc/150?img=25',
      date: 'May 2025',
      rating: 5,
      comment: 'An informative and beautifully arranged museum about Nubian culture.'
    },
    {
      name: 'Omar',
      avatar: 'https://i.pravatar.cc/150?img=42',
      date: 'July 2025',
      rating: 4.8,
      comment: 'Great for history lovers. Very well maintained.'
    }
  ]
},

// Unfinished Obelisk
{
   slug: 'unfinished-obelisk',
  name: 'Unfinished Obelisk',
  location: 'Aswan',
  type: 'Historic',
     images: {
      main: '/Destination/unfinished-obelisk1.jpg',
      img1: '/Destination/unfinished-obelisk4.jpg',
      img2: '/Destination/unfinished-obelisk3.jpg',
      thumbs: [],
    },
  description: ['An ancient obelisk partially carved out of bedrock, providing insight into the stone-carving techniques of Ancient Egypt.'],
  facilities: [
    { icon: 'fas fa-landmark', label: 'Historic Site' },
    { icon: 'fas fa-walking', label: 'Guided Tours' },
    { icon: 'fas fa-camera', label: 'Photography Spots' },
  ],
  reviews: [
    {
      name: 'David',
      avatar: 'https://i.pravatar.cc/150?img=12',
      date: 'July 2025',
      rating: 4.6,
      comment: 'Fascinating site showing ancient engineering skills.'
    },
    {
      name: 'Layla',
      avatar: 'https://i.pravatar.cc/150?img=33',
      date: 'June 2025',
      rating: 4.5,
      comment: 'Short visit but worth seeing for its historical importance.'
    }
  ]
},

// Temple of Philae
{
   slug: 'temple-of-philae',
  name: 'Temple of Philae',
  location: 'Aswan',
  type: 'Historic',
    images: {
      main: '/Destination/Temple of Philae1.jpg',
      img1: '/Destination/Temple of Philae3.jpg',
      img2: '/Destination/Temple of Philae4.jpg',
      thumbs: ['/Destination/Temple of Philae5.jpg','/Destination/Temple of Philae1.jpg','/Destination/Temple of Philae5.jpg','/Destination/Temple of Philae3.jpg',],
    },
  description:[ 'A beautiful ancient temple dedicated to the goddess Isis, located on Agilkia Island, accessible by boat.'],
  facilities: [
    { icon: 'fas fa-landmark', label: 'Historic Site' },
    { icon: 'fas fa-ship', label: 'Boat Access' },
    { icon: 'fas fa-camera', label: 'Photography Spots' },
  ],
  reviews: [
    {
      name: 'Hannah',
      avatar: 'https://i.pravatar.cc/150?img=27',
      date: 'July 2025',
      rating: 5,
      comment: 'Absolutely magical place, especially at sunset.'
    },
    {
      name: 'Youssef',
      avatar: 'https://i.pravatar.cc/150?img=45',
      date: 'June 2025',
      rating: 4.9,
      comment: 'Breathtaking temple with a serene atmosphere.'
    }
  ]
},

// 1902 Restaurant
{
   slug: '1902-restaurant',
  name: '1902 Restaurant',
  location: 'Aswan',
  type: 'Restaurant',
     images: {
      main: '/Destination/1902-Restaurant.jpg',
      img1: '/Destination/1902-Restaurant1.jpg',
      img2: '/Destination/1902-Restaurant2.jpg',
      thumbs: [],
    },
  
  description: ['A fine dining restaurant inside the Sofitel Legend Old Cataract, offering gourmet cuisine in a historic and elegant setting.'],
  facilities: [
    { icon: 'fas fa-utensils', label: 'Fine Dining' },
    { icon: 'fas fa-wine-glass', label: 'Wine Selection' },
    { icon: 'fas fa-concierge-bell', label: 'Reservations' },
  ],
  reviews: [
    {
      name: 'Oliver',
      avatar: 'https://i.pravatar.cc/150?img=21',
      date: 'July 2025',
      rating: 5,
      comment: 'One of the best dining experiences in Egypt.'
    },
    {
      name: 'Fatima',
      avatar: 'https://i.pravatar.cc/150?img=50',
      date: 'June 2025',
      rating: 4.8,
      comment: 'Excellent food and impeccable service.'
    }
  ]
},

// Kato Dool Wellness Resort
{
   slug: 'kato-dool-wellness-resort',
  name: 'Kato Dool Wellness Resort',
  location: 'Aswan',
  type: 'Hotel',
     images: {
      main: '/Destination/Kato-Resort1.jpg',
      img1: '/Destination/Kato-Resort2.jpg',
      img2: '/Destination/Kato-Resort3.jpg',
      thumbs: ['/Destination/Kato-Resort5.jpg','/Destination/Kato-Resort2.jpg','/Destination/Kato-Resort3.jpg','/Destination/Kato-Resort1.jpg',],
    },
  description: ['A Nubian-style resort offering a relaxing retreat with wellness facilities, colorful architecture, and Nile views.'],
  facilities: [
    { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
    { icon: 'fas fa-spa', label: 'Wellness Center' },
    { icon: 'fas fa-utensils', label: 'Restaurant' },
  ],
  reviews: [
    {
      name: 'Mark',
      avatar: 'https://i.pravatar.cc/150?img=17',
      date: 'July 2025',
      rating: 4.9,
      comment: 'Charming place with authentic Nubian design and peaceful vibes.'
    },
    {
      name: 'Sara',
      avatar: 'https://i.pravatar.cc/150?img=31',
      date: 'June 2025',
      rating: 4.7,
      comment: 'Perfect for relaxation and experiencing Nubian culture.'
    }
  ]
},

// Solaih Nubian Restaurant
{
   slug: 'solaih-nubian-restaurant',
  name: 'Solaih Nubian Restaurant',
  location: 'Aswan',
  type: 'Restaurant',
     images: {
      main: '/Destination/Solaih- Nubian1.jpg',
      img1: '/Destination/Solaih- Nubian2.jpg',
      img2: '/Destination/Solaih- Nubian3.jpg',
      thumbs: [],
    },
  description: ['A traditional Nubian restaurant serving local dishes with fresh ingredients and a warm, authentic atmosphere.'],
  facilities: [
    { icon: 'fas fa-utensils', label: 'Traditional Cuisine' },
    { icon: 'fas fa-leaf', label: 'Fresh Ingredients' },
    { icon: 'fas fa-chair', label: 'Outdoor Seating' },
  ],
  reviews: [
    {
      name: 'Noah',
      avatar: 'https://i.pravatar.cc/150?img=26',
      date: 'July 2025',
      rating: 4.8,
      comment: 'Delicious food and friendly staff.'
    },
    {
      name: 'Mariam',
      avatar: 'https://i.pravatar.cc/150?img=38',
      date: 'June 2025',
      rating: 4.7,
      comment: 'Great place to try authentic Nubian flavors.'
    }
  ]
},

//Sharm El-sheikh
// Rixos Premium Seagate
{
   slug: 'rixos-premium-seagate',
  name: 'Rixos Premium Seagate',
  location: 'Sharm El Sheikh',
  type: 'Hotel',
     images: {
      main: '/Destination/rixos1.jpg',
      img1: '/Destination/rixos.jpg',
      img2: '/Destination/rixos2.jpg',
      thumbs: ['/Destination/rixos3.jpg','/Destination/rixos4.jpg','/Destination/rixos5.jpg','/Destination/rixos6.jpg',],
    },
  description: ['A luxurious all-inclusive resort offering private beaches, gourmet dining, multiple pools, and premium entertainment in Nabq Bay.'],
  facilities: [
    { icon: 'fas fa-wifi', label: 'Free Wi-Fi' },
    { icon: 'fas fa-swimming-pool', label: 'Multiple Pools' },
    { icon: 'fas fa-utensils', label: 'All-Inclusive Dining' },
  ],
  reviews: [
    {
      name: 'Laura',
      avatar: 'https://i.pravatar.cc/150?img=19',
      date: 'July 2025',
      rating: 5,
      comment: 'Top-notch service and luxury. Perfect for families and couples.'
    },
    {
      name: 'Adam',
      avatar: 'https://i.pravatar.cc/150?img=30',
      date: 'June 2025',
      rating: 4.9,
      comment: 'Amazing beach, great food, and excellent facilities.'
    }
  ]
},

// Naama Bay
{
   slug: 'naama-bay',
  name: 'Naama Bay',
  location: 'Sharm El Sheikh',
  type: 'Beach & Nightlife',
     images: {
      main: '/Destination/neama-bay.png',
      img1: '/Destination/neama-bay1.jpg',
      img2: '/Destination/neama-bay2.jpg',
      thumbs: [],
    },
  description: ['The heart of Sharm El Sheikh’s nightlife and tourism, with sandy beaches, restaurants, cafes, and lively entertainment.'],
  facilities: [
    { icon: 'fas fa-umbrella-beach', label: 'Beach Access' },
    { icon: 'fas fa-music', label: 'Nightlife' },
    { icon: 'fas fa-store', label: 'Shopping' },
  ],
  reviews: [
    {
      name: 'Sophie',
      avatar: 'https://i.pravatar.cc/150?img=29',
      date: 'July 2025',
      rating: 4.8,
      comment: 'Lively atmosphere with plenty to do day and night.'
    },
    {
      name: 'Karim',
      avatar: 'https://i.pravatar.cc/150?img=44',
      date: 'June 2025',
      rating: 4.7,
      comment: 'Great mix of relaxation and entertainment.'
    }
  ]
},

// Ras Mohamed National Park
{
  slug: 'ras-mohammed-national-park',
  name: 'Ras Mohamed National Park',
  location: 'Sharm El Sheikh',
  type: 'Nature & Diving',
     images: {
      main: '/Destination/rasmohamed-park1.jpg',
      img1: '/Destination/rasmohamed-park.jpg',
      img2: '/Destination/rasmohamed-park2.jpg',
      thumbs: [],
    },
  description: ['A protected area famous for its stunning coral reefs, rich marine life, and spectacular snorkeling and diving spots.'],
  facilities: [
    { icon: 'fas fa-water', label: 'Snorkeling' },
    { icon: 'fas fa-fish', label: 'Diving' },
    { icon: 'fas fa-binoculars', label: 'Wildlife Watching' },
  ],
  reviews: [
    {
      name: 'George',
      avatar: 'https://i.pravatar.cc/150?img=36',
      date: 'July 2025',
      rating: 5,
      comment: 'A paradise for divers and nature lovers.'
    },
    {
      name: 'Nour',
      avatar: 'https://i.pravatar.cc/150?img=47',
      date: 'June 2025',
      rating: 4.9,
      comment: 'Unforgettable underwater experience.'
    }
  ]
},

// Soho Square
{
   slug: 'soho-square',
  name: 'Soho Square',
  location: 'Sharm El Sheikh',
  type: 'Entertainment & Shopping',
     images: {
      main: '/Destination/soho.jpg',
      img1: '/Destination/soho1.jpg',
      img2: '/Destination/soho2.jpg',
      thumbs: [],
    },
  description: ['A vibrant hub offering restaurants, cafes, ice skating, bowling, and shopping, perfect for evening strolls.'],
  facilities: [
    { icon: 'fas fa-store', label: 'Shops' },
    { icon: 'fas fa-utensils', label: 'Restaurants' },
    { icon: 'fas fa-gamepad', label: 'Entertainment' },
  ],
  reviews: [
    {
      name: 'Isabella',
      avatar: 'https://i.pravatar.cc/150?img=22',
      date: 'July 2025',
      rating: 4.8,
      comment: 'Clean, modern, and full of activities for all ages.'
    },
    {
      name: 'Hassan',
      avatar: 'https://i.pravatar.cc/150?img=41',
      date: 'June 2025',
      rating: 4.7,
      comment: 'Great evening destination with lots of options.'
    }
  ]
},

// Tirana Beach
{
   slug: 'tirana-beach',
  name: 'Tirana Beach',
  location: 'Sharm El Sheikh',
  type: 'Beach',
     images: {
      main: '/Destination/tirana.jpg',
      img1: '/Destination/tirana1.jpeg',
      img2: '/Destination/tirana2.jpg',
      thumbs: [],
    },
  description: ['A pristine stretch of white sand and crystal-clear waters, ideal for sunbathing, swimming, and relaxing.'],
  facilities: [
    { icon: 'fas fa-umbrella-beach', label: 'Sun Loungers' },
    { icon: 'fas fa-water', label: 'Swimming' },
    { icon: 'fas fa-umbrella', label: 'Shaded Areas' },
  ],
  reviews: [
    {
      name: 'Ethan',
      avatar: 'https://i.pravatar.cc/150?img=35',
      date: 'July 2025',
      rating: 4.9,
      comment: 'Quiet, clean, and incredibly beautiful.'
    },
    {
      name: 'Layla',
      avatar: 'https://i.pravatar.cc/150?img=28',
      date: 'June 2025',
      rating: 4.8,
      comment: 'Perfect for a peaceful beach day.'
    }
  ]
},

// Na‘ama Aquarium
{
   slug: 'naama-aquarium',
  name: 'Na’ama Aquarium',
  location: 'Sharm El Sheikh',
  type: 'Aquarium',
     images: {
      main: '/Destination/naama.jpg',
      img1: '/Destination/naama1.jpg',
      img2: '/Destination/naama2.jpg',
      thumbs: [],
    },
  description: ['An interactive marine life attraction showcasing the Red Sea’s diverse aquatic species in themed exhibits.'],
  facilities: [
    { icon: 'fas fa-fish', label: 'Marine Life Exhibits' },
    { icon: 'fas fa-child', label: 'Family Friendly' },
    { icon: 'fas fa-camera', label: 'Photography Allowed' },
  ],
  reviews: [
    {
      name: 'Ava',
      avatar: 'https://i.pravatar.cc/150?img=20',
      date: 'July 2025',
      rating: 4.6,
      comment: 'Fun and educational for kids and adults.'
    },
    {
      name: 'Omar',
      avatar: 'https://i.pravatar.cc/150?img=43',
      date: 'June 2025',
      rating: 4.5,
      comment: 'Good place to learn about Red Sea marine life.'
    }
  ]
},

// Old Market Sharm
{
   slug: 'old-market-sharm',
  name: 'Old Market Sharm',
  location: 'Sharm El Sheikh',
  type: 'Shopping',
     images: {
      main: '/Destination/old-market.jpg',
      img1: '/Destination/old-market1.jpg',
      img2: '/Destination/old-market2.jpg',
      thumbs: [],
    },
  description: ['A traditional Egyptian market with shops selling spices, souvenirs, handicrafts, and local food.'],
  facilities: [
    { icon: 'fas fa-store', label: 'Souvenir Shops' },
    { icon: 'fas fa-utensils', label: 'Street Food' },
    { icon: 'fas fa-users', label: 'Local Experience' },
  ],
  reviews: [
    {
      name: 'Daniel',
      avatar: 'https://i.pravatar.cc/150?img=34',
      date: 'July 2025',
      rating: 4.7,
      comment: 'A great place to shop and experience local culture.'
    },
    {
      name: 'Mona',
      avatar: 'https://i.pravatar.cc/150?img=48',
      date: 'June 2025',
      rating: 4.6,
      comment: 'Bustling and colorful market atmosphere.'
    }
  ]
},

// Al Mustafa Mosque
{
   slug: 'al-mustafa-mosque',
  name: 'Al Mustafa Mosque',
  location: 'Sharm El Sheikh',
  type: 'Historic',
     images: {
      main: '/Destination/almustafa-mosque1.jpg',
      img1: '/Destination/almustafa-mosque2.jpeg',
      img2: '/Destination/almustafa-mosque3.jpg',
      thumbs: [],
    },
  description: ['A beautiful mosque known for its intricate architecture and peaceful ambiance, open for visitors outside prayer times.'],
  facilities: [
    { icon: 'fas fa-mosque', label: 'Prayer Area' },
    { icon: 'fas fa-camera', label: 'Photography Spots' },
    { icon: 'fas fa-leaf', label: 'Peaceful Environment' },
  ],
  reviews: [
    {
      name: 'Amira',
      avatar: 'https://i.pravatar.cc/150?img=37',
      date: 'July 2025',
      rating: 5,
      comment: 'Beautiful design and very serene atmosphere.'
    },
    {
      name: 'John',
      avatar: 'https://i.pravatar.cc/150?img=24',
      date: 'June 2025',
      rating: 4.9,
      comment: 'A must-see landmark in Sharm El Sheikh.'
    }
  ]
},

]

const destination = ref(destinations.find(d => d.slug === route.params.slug))
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

