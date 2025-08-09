<!-- <template>
  <div>
    <navbar />

    <div class="relative h-64 md:h-110 bg-cover bg-center" style="background-image: url('/public/Destination/background.jpg')">
      <h1 class="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold">
        Destinations
      </h1>
    </div>

    <div class="p-4 md:p-6">
      <div class="flex justify-end mb-4">
        <select class="border p-2 rounded text-sm">
          <option>Sort by: Top Rated</option>
        </select>
      </div>

     
        <div class="flex flex-col lg:flex-row gap-6 items-start">
  <FilterSidebar class="text-sm sticky top-4 self-start min-h-full" />
  
    
        <div class="flex-1 space-y-6">
          <div
            v-for="destination in paginatedDestinations"
            :key="destination.title"
            class="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow min-h-[240px]"
          >
            <img :src="destination.image" class="w-full md:w-1/3 h-48 md:h-auto object-cover" />

            <div class="p-4 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h3 class="font-bold text-lg text-black">{{ destination.title }}</h3>
                <div class="text-yellow-500 mb-1">★★★★★</div>
                <div class="text-sm text-gray-700 mb-2">{{ destination.location }}</div>
                <p class="text-sm text-black">{{ destination.description }}</p>
              </div>
              <div class="flex justify-end mt-4">
                <router-link :to="`/destination/${slugify(destination.title)}`">
  <BaseButton>Show Details</BaseButton>
</router-link>
                
              </div>
            </div>
          </div>

                    
<div class="flex justify-center mt-10 mb-16 text-black">
  <PaginationComponent
    :currentPage="currentPage"
    :totalPages="10"
    @page-changed="handlePageChange"
  />
</div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import FilterSidebar from '../components/FiltersSidebar.vue'
import BaseButton from '../components/BaseButton.vue'
import PaginationComponent from '../components/PaginationComponent.vue'


function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}


const allDestinations = [
   {
    title: 'Steigenberger Nile Palace',
    location: 'Luxor',
    description: 'The 5-star Steigenberger Nile Palace is situated in the heart of Luxor and provides modern accommodation with stunning views of the Nile.',
    image: '/public/Destination/steignberger.jpg',
  },
     {
    title: 'Luxor Temple',
    location: 'Luxor',
    description: 'The 5-star Steigenberger Nile Palace is situated in the heart of Luxor and provides modern accommodation with stunning views of the Nile.',
    image: '/public/Destination/luxor temple.jpg',
  },
      {
    title: 'El Tarboush',
    location: 'Luxor',
    description: 'El Tarboush is celebrated by many travelers for its authentic Lebanese cuisine, with dishes that are both expertly crafted and generously portioned.',
    image: '/public/Destination/eltarboush.jpg',
  },
        {
    title: 'Sofitel Winter Palace Luxor',
    location: 'Luxor',
    description: 'Sofitel Winter Palace Luxor is popular among travelers for its spacious, elegant rooms, although some note that the furnishings feel outdated.',
    image: '/public/Destination/sofitel.jpg',
  },
  {
    title: 'Valley of the Kings',
    location: 'Luxor',
    description: 'This desert valley contains the ancient burial ground of many Egyptian pharaohs. Among over 60 royal tombs is the famous Tomb of Tutankhamen that was found in pristine condition.',
    image: '/public/Destination/valley of kings.jpg',
  },
   {
    title: 'Iberotel Luxor',
    location: 'Luxor',
    description: 'A heated pool floating on the Nile is one of the most unique features of this 4-star hotel. Overlooking the Theben Hills, Iberotel Luxor also offers a restaurant boat and rooms with private balconies.',
    image: '/public/hotel/img1.jpg',
  },
  {
    title: 'Sofra Restaurant & Cafe',
    location: 'Luxor',
    description: 'A restaurant located in the heart of Luxor that draws its inspiration from the rich Arabian culture. Sofra is situated in an old 1930s Egyptian house that still retains its traditional character. ',
    image: '/public/Destination/sofra restaurant.jpg',
  },
  {
    title: 'Hilton Luxor Resort & Spa',
    location: 'Luxor',
    description: 'Nestled on the banks of the Nile, Hilton Luxor Resort & Spa offers stylish rooms with uninterrupted views from the water’s edge, luxurious spa facilities and stunning infinity pools.',
    image: '/public/Destination/hilton luxor.jpg',
  },
  
]


const itemsPerPage = 4
const currentPage = ref(1)


const totalPages = computed(() => Math.ceil(allDestinations.length / itemsPerPage))


const paginatedDestinations = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return allDestinations.slice(start, start + itemsPerPage)
})


function handlePageChange(newPage) {
  currentPage.value = newPage
}


</script> -->


<template>
  <div>
    <navbar />

    <div class="relative h-64 md:h-125 bg-cover bg-center" style="background-image: url('/public/Destination/background.jpg')">
      <h1 class="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold">
        Destinations
      </h1>
    </div>

    <div class="p-4 md:p-9">
      <div class="flex justify-between mb-4">
        <!-- cities filteration-->
        <!-- <select v-model="selectedLocation" class="border p-2 rounded text-sm">
          <option value="">All Locations</option>
          <option v-for="loc in uniqueLocations" :key="loc" :value="loc">{{ loc }}</option>
        </select> -->

        <!-- sort-->
        <!-- <select class="border p-2 rounded text-sm">
          <option>Sort by: Top Rated</option>
        </select> -->
      </div>

      <div class="flex flex-col lg:flex-row gap-6 items-start">
  <div class="w-full lg:w-64 mt-0 bg-white p-4 rounded shadow space-y-4 ">
    <SideFilter :allDestinations="allDestinations" @update:filters="applyFilters" class="text-black"/> </div>
        <div class="flex-1 space-y-6">
          <div
            v-for="destination in paginatedDestinations"
            :key="destination.title"
            class="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow min-h-[240px]"
          >
            <img :src="destination.image" class="w-full md:w-1/3 h-48 md:h-auto object-cover" />

            <div class="p-4 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h3 class="font-bold text-lg text-black">{{ destination.title }}</h3>
                <div class="text-yellow-500 mb-1">★★★★★</div>
                <div class="text-sm text-gray-700 mb-2">{{ destination.location }}</div>
                <p class="text-sm text-black">{{ destination.description }}</p>
              </div>
              <div class="flex justify-end mt-4">
                <router-link :to="`/destination/${slugify(destination.title)}`">
                  <BaseButton>Show Details</BaseButton>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Pagination-->
        <div class="flex justify-center  mb-16 text-black">
  <PaginationComponent
    :currentPage="currentPage"
    :totalPages="10"
    @page-changed="handlePageChange"
  />
</div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import SideFilter from './filterdestaination.vue'
import BaseButton from '../components/BaseButton.vue'
import PaginationComponent from '../components/PaginationComponent.vue'

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

// all destinations
const allDestinations = [
  // Luxor
  { title: 'Steigenberger Nile Palace', location: 'Luxor',type: 'Luxury', activities: ['Spa', 'Pools'], budget: 'Elite', duration: 'More than 3 days', bestTime: 'Winter', suitableFor: ['Couples', 'Families'], description: 'The 5-star Steigenberger Nile Palace is situated in the heart of Luxor and provides modern accommodation with stunning views of the Nile.', image: '/public/Destination/steignberger.jpg' },
  { title: 'Luxor Temple', location: 'Luxor',type: 'Historic', activities: ['Museums'], budget: 'Economy', duration: 'Less than 3 days', bestTime: 'Winter', suitableFor: ['Families'], description: 'A temple built for the ritual practices exercised at the most important Ancient Egyptian festival, The Festival of Opet.', image: '/public/Destination/luxor temple.jpg' },
  { title: 'El Tarboush', location: 'Luxor', description: 'El Tarboush is celebrated by many travelers for its authentic Lebanese cuisine, with dishes that are both expertly crafted and generously portioned.', image: '/public/Destination/eltarboush.jpg' },
  { title: 'Iberotel Luxor', location: 'Luxor', description: 'A heated pool floating on the Nile is one of the most unique features of this 4-star hotel. Overlooking the Theben Hills, Iberotel Luxor also offers a restaurant boat and rooms with private balconies.', image: '/public/hotel/main.jpg' },
  { title: 'Sofitel Winter Palace Luxor',location: 'Luxor', description: 'Sofitel Winter Palace Luxor is popular among travelers for its spacious, elegant rooms, although some note that the furnishings feel outdated.', image: '/public/Destination/sofitel.jpg' },
  { title: 'Valley of the Kings', location: 'Luxor',type: 'Historic', activities: ['Museums'], budget: '$500-1000', duration: '2-3 days', bestTime: 'Winter', suitableFor: ['Families', 'Solo Travelers'], description: 'This desert valley contains the ancient burial ground of many Egyptian pharaohs. Among over 60 royal tombs is the famous Tomb of Tutankhamen that was found in pristine condition.', image: '/public/Destination/valley of kings.jpg' },

  { title: 'Sofra Restaurant & Cafe', location: 'Luxor', description: 'A restaurant located in the heart of Luxor that draws its inspiration from the rich Arabian culture. Sofra is situated in an old 1930s Egyptian house that still retains its traditional character.', image: '/public/Destination/sofra restaurant.jpg' },
  { title: 'Hilton Luxor Resort & Spa', location: 'Luxor', description: 'Nestled on the banks of the Nile, Hilton Luxor Resort & Spa offers stylish rooms with uninterrupted views from the water’s edge, luxurious spa facilities and stunning infinity pools.', image: '/public/Destination/hilton luxor.jpg' },

  // Cairo
  { title: 'Pyramids of Giza', location: 'Cairo',type: 'Historic',activities: ['Museums'],  budget: 'Economy', duration: 'Less than 3 days', bestTime: 'Winter', suitableFor: ['Families'],  description: 'Iconic ancient monuments including the Great Pyramid and the Sphinx, located on the Giza', image: '/public/historical/pyramids.jpg' },
  { title: 'Egyptian Museum', location: 'Cairo',type: 'Historic', activities: ['Museums'], budget: 'Economy', duration: 'Less than 3 days', bestTime: 'Winter', suitableFor: ['Families'], description: 'Home to thousands of ancient artifacts including the treasures of King Tutankhamun.', image: '/public/historical/The-Grand-Egyptian.jpg' },
  { title: 'Khan El Khalili', location: 'Cairo',type: 'Shopping', activities: ['Markets'], budget: 'Economy', duration: 'Less than 3 days', bestTime: 'Spring', description: 'This vibrant open-air bazaar is a treasure trove of Egyptian culture, with bustling streets filled with local artisans and vendors. Here, you can pick up unique souvenirs like spices and perfumes, or simply soak up the local atmosphere.', image: '/public/historical/khan-elkhalili1.jpg' },
  { title: 'Intercontinental Cairo Semiramis', type:'Luxury', activities:['Pools', 'Restaurants','Spa'],location: 'Cairo', description: 'On the historic Semiramis hotel site, guests can enjoy modern luxury by the river Nile. Semiramis InterContinental Cairo is located in the heart of downtown Cairo, next to the Egyptian Museum and Khan el Khalili.', image: '/public/hotel/samiramis.jpg' },
  { title: 'Al Azhar Mosque', location: 'Cairo', description: 'Al-Azhar Mosque is a historic Islamic landmark in Cairo and one of the oldest centers of Islamic learning in the world.', image: '/public/historical/alazhar.jpg' },
  { title: 'The Citadel', location: 'Cairo', description: 'A medieval Islamic fort with panoramic views of Cairo and the iconic Mosque', image: '/public/historical/citadel.jpg' },
  { title: 'Le Passage Cairo Hotel & Casino', location: 'Cairo', description: 'Le Passage Cairo Hotel & Casino is located in Heliopolis, an elegant business and residential district in Cairo and it is considered one of the safest area in town. The hotel is only five minutes from Cairo International Airport and ten minutes from the Cairo International Convention Centre and Fair Grounds, with free shuttle bus service, free wifi and free internet. Great design is the key to this urban, cosmopolitan business and leisure base, providing a sophisticated and stylish environment in the throbbing heart of Egypt and the Middle East.', image: '/public/historical/lepassage.jpg' },
  { title: 'Steigenberger Hotel El Tahrir Cairo', location: 'Cairo', description: 'Among Cairo hotels, Steigenberger El Tahrir secures a spectacular location in El Tahrir Square, overlooking the Egyptian museum, minutes away from Khan El Khalili Bazar, and in close proximity to Egypt’s major attractions with a total area of 21,633 sqm.', image: '/public/historical/steigenberger-hotel.jpg' },

  //Aswan
    { title: 'Sofitel Legend Old Cataract Aswan', location: 'Aswan',type: 'Luxury', activities: ['Spa', 'Pools'], budget: 'Elite', duration: 'More than 3 days', bestTime: 'Winter', suitableFor: ['Couples', 'Families'], description: 'Hotel Complex encompassing famous Victorian-style Cataract Hotel & adjacent high-rise New Cataract Hotel (1963).', image: '/public/hotel/sofitel-legend.jpg' },
  { title: 'Movenpick Resort Aswan', location: 'Aswan',type: 'Luxury', activities: ['Pool','Boating'], budget: 'Elite', duration: 'Less than 3 days', bestTime: 'Winter', suitableFor: ['Families'], description: 'Mövenpick Resort Aswan provides a tranquil environment of lush tropical gardens and magnificent views of the River Nile . Located on its own island , the hotel offers 404 rooms & suites , 6 restaurants & bars , two swimming pools , recreation facilities and lavish landscape.', image: '/public/hotel/movenpick-resort-aswan.jpg' },
  { title: 'Nubian Museum', location: 'Aswan', type: 'Museum', description: 'This museum traces the history from the earliest settlements to present day of Nubia, the region defined as the area between Aswan in Egypt and Khartoum in the Sudan.', image: '/public/historical/nubian-museum.jpg' },
  { title: 'Unfinished Obelisk',location: 'Aswan', description: 'This gigantic semi-finished obelisk, dating from the New Kingdom, would have weighed a staggering 1,197 tons if completed.', image: '/public/historical/obelisk.jpg' },
  { title: 'Temple of Philae', location: 'Aswan',type: 'Historic', activities: ['Museums'], budget: '$500-1000', duration: '2-3 days', bestTime: 'Winter', suitableFor: ['Families', 'Solo Travelers'], description: 'This large temple complex, relocated to the island of Agilika with the building of the High Dam in Aswan, features the magnificent Temple of Isis that was built in the late Ptolemaic and early Roman periods.', image: '/public/hotel/temple-of-philae.jpg' },
  { title: '1902 Restaurant', location: 'Aswan', description: 'A heated pool floating on the Nile is one of the most unique features of this 4-star hotel. Overlooking the Theben Hills, Iberotel Luxor also offers a restaurant boat and rooms with private balconies.', image: '/public/hotel/img1.jpg' },
  { title: 'Kato Dool Wellness Resort', location: 'Aswan', description: 'Live like a local Nubian in an eco-friendly wellness sanctuary. Katodool Wellness is ideally located on the hillside of the Nubian Village in Aswan, embracing the beauty of the surrounding nature of the river Nile and the protectorate of Salouga and Ghazal, preserving the genuine Nubian lifestyle and its mindfulness activities. ', image: '/public/hotel/kato-dool-wellness-resort.jpg' },
  { title: 'Solaih Nubian Restaurant', location: 'Aswan', description: 'Nubian kitchen is rich with its recipes, but unfortunately these recipes are not commonly used right now among Nubians and started to disappear. Our aim was to establish a Nubian restaurant that provide only Nubian cuisine with old and new recipes. The restaurant is located in a premium location on an island overlooking the famous Philae temple.', image: '/public/food/salaih-nubian.jpg' },

  //sharm
  {
    title: "Rixos Premium Seagate",location: "Sharm El Sheikh",type: "Luxury Resort",activities: ["Beach", "Scuba Diving", "Spa"],budget: "Elite",duration: "More than 3 days",bestTime: "Summer",suitableFor: ["Couples", "Families"],description: "All‑inclusive beachfront resort with private beach, diving center and spa services.",image: "/public/hotel/rixos-premium-seagate.jpg"},
  {
    title: "Naama Bay",location: "Sharm El Sheikh",type: "Beach District",activities: ["Beach", "Shopping", "Nightlife"],budget: "$500‑1000",duration: "1‑2 days",bestTime: "Summer",suitableFor: ["Families", "Solo Travelers"],description: "Souvenir shops, cafes, water‑sports and vibrant nightlife along a sandy bay.",image: "/public/hotel/neaamabay.jpg"
  },
  {
    title: "Ras Mohammed National Park",location: "Sharm El Sheikh",type: "Natural Reserve",activities: ["Diving", "Wildlife", "Photography"],budget: "Economy",duration: "Day trip",bestTime: "Spring",suitableFor: ["Nature Lovers", "Divers"], description: "Protected marine park with pristine reef systems and migratory bird habitats.",image: "/public/hotel/ra's-mohamed.jpg"
  },
  {
    title: "Soho Square",location: "Sharm El Sheikh",type: "Entertainment",activities: ["Dining", "Shows", "Shopping"], budget: "Elite",duration: "Evening",bestTime: "Summer",suitableFor: ["Families", "Couples"],description: "Upscale entertainment hub with restaurants, live performances and arcade games.",image: "/public/hotel/soho-square.jpg"
  },
  {
    title: "Tirana Beach",location: "Sharm El Sheikh",type: "Beach",activities: ["Swimming", "Sunbathing", "Snorkeling"],budget: "Economy",duration: "Half‑day",bestTime: "Summer",suitableFor: ["Families", "Relaxation Seekers"],description: "Relaxed sandy cove with calm waters ideal for snorkeling and swimming.", image: "/public/hotel/tirana.jpeg"
  },
  {
    title: "Na’ama Aquarium",location: "Sharm El Sheikh",type: "Aquarium",activities: ["Marine Viewing", "Photography"],budget: "Economy",duration: "1‑2 hours",bestTime: "All year",suitableFor: ["Families", "Children"],description: "Small aquarium showcasing Red Sea marine life species in eye‑level tanks.",image: "/public/hotel/aquarium.jpg"
  },
  {
    title: "Old Market Sharm",location: "Sharm El Sheikh",type: "Traditional Market",activities: ["Shopping", "Local Food"],budget: "Economy", duration: "1‑2 hours",bestTime: "Evening",suitableFor: ["Families", "Solo Travelers"],description: "Colorful bazaar with local crafts, spices and casual dining options.",image: "/public/hotel/oldmarket.jpg"
  },
  {
    title: "Al Mustafa Mosque",location: "Sharm El Sheikh",type: "Historic",activities: ["Sightseeing"],budget: "Free",duration: "30 min",bestTime: "All year",suitableFor: ["Families", "Cultural Tourists"],description: "Beautiful Ottoman‑style mosque located near the marina area.",image: "/public/hotel/mosque.jpeg"
  },
]


const selectedLocation = ref("")


const uniqueLocations = computed(() => [...new Set(allDestinations.map(d => d.location))])

//filteration
// const filteredDestinations = computed(() => {
//   if (!selectedLocation.value) return allDestinations
//   return allDestinations.filter(d => d.location === selectedLocation.value)
// })

// pagination
const itemsPerPage = 8
const currentPage = ref(1)
// const totalPages = computed(() => Math.ceil(filteredDestinations.value.length / itemsPerPage))

// const paginatedDestinations = computed(() => {
//   const start = (currentPage.value - 1) * itemsPerPage
//   return filteredDestinations.value.slice(start, start + itemsPerPage)
// })

const paginatedDestinations = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return combinedFilteredDestinations.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => Math.ceil(combinedFilteredDestinations.value.length / itemsPerPage))


function handlePageChange(newPage) {
  currentPage.value = newPage
}
const filters = ref({
  location: '',
  type: '',
  budget: '',
})

const applyFilters = (newFilters) => {
  filters.value = newFilters
}

const combinedFilteredDestinations = computed(() => {
  return allDestinations.filter(item => {
    const matchesLocationDropdown =
      !selectedLocation.value || item.location === selectedLocation.value

    const matchesSideFilters =
      (filters.value.location.length === 0 || filters.value.location.includes(item.location)) &&
      (filters.value.type.length === 0 || filters.value.type.includes(item.type)) &&
      (filters.value.budget.length === 0 || filters.value.budget.includes(item.budget))

    return matchesLocationDropdown && matchesSideFilters
  })
})


</script>
