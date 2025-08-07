<!-- <template>

   <div class="max-w-screen-xl mx-auto px-2">
 -->






    <!-- Filter Section -->







<!-- 

      <div class="bg-yellow-20 border border-gray-300 rounded-lg p-4 mx-4 mb-6 shadow">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">Filter</h2>
      <div class="flex justify-center flex-wrap gap-4">      
        <DropdownMenu
        label="Filter by Price"
        :options="priceOptions"
        @select="filterByPrice"
      />
      <DropdownMenu
        label="Filter by City"
        :options="cityOptions"
        @select="filterByCity"
      />
      <DropdownMenu
        label="Filter by Rating"
        :options="ratingOptions"
        @select="filterByRating"
      />
     </div>
    </div> -->







   <!-- Hotels Cards Section  @click="(e) => handleCardClick(e)"  -->




  <!-- <section class="grid sm-grid-cols-1 md:grid-cols-4 gap-6 p-8">
    <CardComponent
      v-for="hotel in filteredHotels"
      :key="hotel.id"
      :image="hotel.image"
      :title="hotel.title"
      :description="hotel.description"
      :location="hotel.location"
      :price="hotel.price"
      :rating="hotel.rating"
      :showButton="true"
      :buttonText="'Book Now'"
      :showHeart="true"
  @click="() => handleCardClick(hotel)"


    />
    </section> -->





  <!-- ✅ كارد الحجز في منتصف الصفحة -->




  

<!-- 
<bookingCalendar
  v-if="showBooking"
  :visible="true"
  @booking-confirmed="handleBooking"
/>
</div>

  <section class="mt-20">
  <div v-if="isLoggedIn" class="mt-8 p-4 bg-gray-100 rounded-lg shadow">
  <h2 class="text-lg font-semibold mb-4">Booking History</h2>
  <div v-for="item in allHotelData.history" :key="item.id" class="mb-2 border-b pb-1">
    <p><strong>{{ item.title }}</strong> - {{ item.city }} - {{ item.date }}</p>
    <p> Price: {{ item.price }} EGP</p>
     <p class="ml-250 bg-[#FFC340] text-white pl-3 border border-[#FFC340] rounded-2xl"> {{ item.status }} </p>
  </div>
</div>
</section>


<section class="bg-yellow-20 h-40 pt-10 pl-120 mt-20 border border-[#FFC340] rounded-lg shadow">

  <div class="text-lg font-semibold text-gray-800 ml-3">
      Total Price: <span class="text-green-600">{{ totalPrice }} EGP</span>
    </div>

    <button
      class="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded mt-4"
      @click="bookNow"
    >
      Proceed to Payment
    </button>

</section>

 -->








    
<!-- <div v-if="totalPrice > 0" class="mt-8 p-4 bg-green-100 rounded-lg shadow text-green-900">
  <h2 class="text-lg font-semibold mb-2">Checkout Summary</h2>
  <p>Total : <strong>{{ totalPrice }}</strong> EGP</p>
  
  <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-2">Proceed to Payment</button>
</div>
 -->








<!--  
</template>

<script setup>
import { ref, computed } from 'vue'
import bookingCalendar from '../../components/bookingCalendar.vue'
import CardComponent from '../../components/card.vue'
import DropdownMenu from '../../components/dropdownmenu.vue'
import allHotelData from '../../data/bookingHotels.json'

const filters = allHotelData.filters;
const bookings = allHotelData.bookings;


const isLoggedIn = ref(true)

 -->







// const totalPrice = ref(0)


// const allHotelData = 
//  {
//   "filters": {
//     "cities": ["Cairo", "Giza", "Sharm El Sheikh", "Alexandria", "Luxor", "Aswan", "Hurghada", "El Gouna"],
//     "price": ["Less than 5000", "5000 - 15000", "More than 15000"],
//     "Rating": ["4+ Stars", "4.5+ Stars", "5 Stars"],

//   },
//   "bookings": [
//     {
//       "id": 1,
//       "image": "../public/bookingHotels/Casa Cook, El Gouna.webp",
//       "title": "Marriott Mena House",
//       "description": "Luxury hotel near the pyramids.",
//       "location": "Giza, Egypt",
//       "date": "2025-08-15",
//       "duration": "3 nights",
//       "people": "2 adults",
//       "price": 20000,
//       "rating": 4.5,
//       "type": "Hotel"
//     },
//     {
//       "id": 2,
//       "image": "../public/bookingHotels/pyramids hotel.webp",
//       "title": "Pyramids Hotel",
//       "description": "A beautiful stay with pyramid views.",
//       "location": "Giza, Egypt",
//       "date": "2025-09-01",
//       "duration": "2 nights",
//       "people": "1 adult",
//       "price": 3000,
//       "rating": 4.2,
//       "type": "Resort"
//     },
//     {
//       "id": 3,
//       "image": "../public/bookingHotels/four season cairo.webp",
//       "title": "Four Seasons Hotel Cairo",
//       "description": "5-star hotel overlooking the Nile.",
//       "location": "Cairo, Egypt",
//       "date": "2025-08-10",
//       "duration": "4 nights",
//       "people": "2 adults, 1 child",
//       "price": 12000,
//       "rating": 4.9,
//       "type": "Hostel"
//     },
//     {
//       "id": 4,
//       "image": "../public/bookingHotels/Cleopatra Luxury Resort Sharm el-Sheikh.webp",
//       "title": "Cleopatra Luxury Resort",
//       "description": "Beachfront resort with modern amenities.",
//       "location": "Sharm El Sheikh",
//       "date": "2025-10-05",
//       "duration": "5 nights",
//       "people": "2 adults",
//       "price": 6000,
//       "rating": 3.9,
//       "type": "Resort"
//     },
//     {
//       "id": 5,
//       "image": "../public/bookingHotels/Sofitel Winter Palace.webp",
//       "title": "Sofitel Winter Palace",
//       "description": "Historic hotel in Luxor with royal charm.",
//       "location": "Luxor, Egypt",
//       "date": "2025-09-15",
//       "duration": "3 nights",
//       "people": "1 adult",
//       "price": 5000,
//       "rating": 4.6,
//       "type": "Hostel"
//     },
//     {
//       "id": 6,
//       "image": "../public/bookingHotels/Mövenpick Resort Aswan.webp",
//       "title": "Mövenpick Resort",
//       "description": "Peaceful retreat by the Nile.",
//       "location": "Aswan, Egypt",
//       "date": "2025-11-20",
//       "duration": "4 nights",
//       "people": "2 adults",
//       "price": 5000,
//       "rating": 4.5,
//       "type": "Hostel"
//     },
//     {
//       "id": 7,
//       "image": "../public/bookingHotels/The V Luxury Resort Sahl Hasheesh, Hurghada.webp",
//       "title": "The V Luxury Resort Sahl Hasheesh",
//       "description": "Exclusive resort with sea views.",
//       "location": "Hurghada, Egypt",
//       "date": "2025-12-10",
//       "duration": "6 nights",
//       "people": "2 adults, 2 children",
//       "price": 4000,
//       "rating": 4.1,
//       "type": "Resort"
//     },
//     {
//       "id": 8,
//       "image": "../public/bookingHotels/Casa Cook, El Gouna.webp",
//       "title": "Casa Cook",
//       "description": "Boho-chic style boutique hotel.",
//       "location": "El Gouna, Egypt",
//       "date": "2025-08-25",
//       "duration": "3 nights",
//       "people": "2 adults",
//       "price": 6000,
//       "rating": 4.3,
//       "type": "Hostel"
//     },
//     {
//       "id": 9,
//       "image": "../public/bookingHotels/Steigenberger Cecil Hotel.webp",
//       "title": "hostel8.jpg",
//       "description": "Historic hotel in the heart of Alexandria.",
//       "location": "Alexandria, Egypt",
//       "date": "2025-08-18",
//       "duration": "2 nights",
//       "people": "1 adult",
//       "price": 9000,
//       "rating": 4.0,
//       "type": "Hostel"
//     },
//   {
//     "id": 10,
//     "image": "../public/bookingHotels/rixos-magawish-hotel.jpg",
//     "title": "Rixos Premium Magawish (Hurghada)",
//     "description": "Luxury beachfront resort with villas and pools.",
//     "location": "Hurghada, Egypt",
//     "date": "2025-08-18",
//     "duration": "3 nights",
//     "people": "2 adults",
//     "price": 28000,
//     "rating": 4.7,
//     "type": "Resort"
//   },
//   {
//     "id": 11,
//     "image": "../public/bookingHotels/jaz-aquaviva.jpg",
//     "title": "Jaz Aquaviva (Sharm El Sheikh)",
//     "description": "5-star resort with a large water park.",
//     "location": "Sharm El Sheikh, Egypt",
//     "date": "2025-08-18",
//     "duration": "3 nights",
//     "people": "2 adults",
//     "price": 29000,
//     "rating": 4.6,
//     "type": "Resort"
//   },
//   {
//     "id": 12,
//     "image": "../public/bookingHotels/four seasons alex.jpg",
//     "title": "Four Seasons Alexandria at San Stefano",
//     "description": "Luxury hotel on the Corniche with sea views.",
//     "location": "Alexandria, Egypt",
//     "date": "2025-08-18",
//     "duration": "3 nights",
//     "people": "2 adults",
//     "price": 35000,
//     "rating": 4.9,
//     "type": "Hotel"
//   }
// ],

//   "history": [
//     {
//       "id": 101,
//       "title": "Old Nile View Hotel",
//       "city": "Cairo",
//       "date": "2025-03-05",
//       "price": 1000,
//       "status": "Completed"
//     },
//     {
//       "id": 102,
//       "title": "Old Resort Stay",
//       "city": "Sharm El Sheikh",
//       "date": "2025-04-12",
//       "price": 1700,
//       "status": "Completed"
//     }
//   ]
//   }








<!--   
const hotelsData = ref(allHotelData.bookings)



const selectedPrice = ref(null)
const selectedCity = ref(null)
const selectedRating = ref(null)

const priceOptions = [
  { label: 'Less than 5000', value: 5000 },
  { label: '5000 - 15000', value: [5000, 15000] },
  { label: 'More than 15000', value: 15000 }
]

const cityOptions = [
  { label: 'Cairo', value: 'Cairo' },
  { label: 'Giza', value: 'Giza' },
  { label: 'Alexandria', value: 'Alexandria' },
  { label: 'Luxor', value: 'Luxor' },
  { label: 'Aswan', value: 'Aswan' },
  { label: 'Sharm El Sheikh', value: 'Sharm El Sheikh' },
  { label: 'Hurghada', value: 'Hurghada' },
  { label: 'El Gouna', value: 'El Gouna' },
 
  
]

const ratingOptions = [
  { label: '4+ Stars', value: 4 },
  { label: '4.5+ Stars', value: 4.5 },
  { label: '5 Stars', value: 5 }
]

const filterByPrice = (option) => {
  selectedPrice.value = option.value
}

const filterByCity = (option) => {
  selectedCity.value = option.value
}

const filterByRating = (option) => {
  selectedRating.value = option.value
}

const filteredHotels = computed(() => {
  return hotelsData.value.filter(hotel => {
    const priceMatch = !selectedPrice.value ||
      (Array.isArray(selectedPrice.value)
        ? hotel.price >= selectedPrice.value[0] && hotel.price <= selectedPrice.value[1]
        : (selectedPrice.value < 5000
            ? hotel.price < selectedPrice.value
            : hotel.price > selectedPrice.value))


    const cityMatch = !selectedCity.value || hotel.location.includes(selectedCity.value)
    const ratingMatch = !selectedRating.value || hotel.rating >= selectedRating.value

    return priceMatch && cityMatch && ratingMatch
  })
})





const selectedHotel = ref(null);
const selectedDate = ref(null);
const numberOfPeople = ref(0);
const specialNotes = ref('');

const pricePerPerson = 500;

const totalPrice = computed(() => {
  return selectedDate.value && numberOfPeople.value > 0
    ? numberOfPeople.value * pricePerPerson
    : 0;
});

const bookNow = () => {
  if (!selectedDate.value || numberOfPeople.value <= 0) {
    alert('Please select a date and number of people.');
    return;
  }

  alert(`Booked at ${selectedHotel.value.title} on ${selectedDate.value.toDateString()} for ${numberOfPeople.value} people`);

};
 -->

  // Reset if needed
  // selectedHotel.value = null


<!-- 

const handleBookNow = (hotel) => {
  selectedHotel.value = hotel;
};


const bookingDetails = ref(null);
const showBooking = ref(false);

const handleBooking = (data) => {
  bookingDetails.value = data;
  // ممكن تخزنها في checkout أو history
}; -->










// const handleCardClick = (e) => {
//   const target = e.target;
//   if (target.tagName === 'BUTTON' && target.textContent.includes('Book Now')) {
//     showBooking.value = true;
//   }
// };




// const confirmBooking = () => {
//   const { date, guests, notes } = bookingInputs.value;
//   if (!date || !guests) {
//     alert('Please select a date and number of people.');
//     return;
//   }

//   if (!selectedHotel.value) {
//     alert('No hotel selected.');
//     return;
//   }

//   const total = guests * selectedHotel.value.price;

//   checkout.value = {
//     date,
//     guests,
//     notes,
//     total
//   };

//   bookingHistory.value.push({
//     date,
//     guests,
//     notes,
//     total
//   });
// };










<!-- 
const handleCardClick = (hotel) => {
  selectedHotel.value = hotel;
  showBooking.value = true;
};



const confirmBooking = () => {
  const { date, guests, notes } = bookingInputs.value;

  if (!date || !guests) {
    alert('Please select a date and number of people.');
    return;
  }

  if (!selectedHotel.value) {
    alert('No hotel selected.');
    return;
  }

  const total = guests * selectedHotel.value.price;

  checkout.value = {
    
    total
  };

  bookingHistory.value.push({ date, guests, notes, total });
};


</script>

<style scoped>
</style>
 -->











<template>

   <div class="max-w-screen-xl mx-auto px-2">
 

    <!-- Filter Section -->


      <div class="bg-yellow-20 border border-gray-300 rounded-lg p-4 mx-4 mb-6 shadow">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">Filter</h2>
      <div class="flex justify-center flex-wrap gap-4">      
        <DropdownMenu
        label="Price"
        :options="priceOptions"
    @select="selectedPrice = $event.value"
      />
      <DropdownMenu
        label="City"
        :options="cityOptions"
    @select="selectedCity = $event.value"
      />
      <DropdownMenu
        label="Rating"
        :options="ratingOptions"
    @select="selectedRating = $event.value"
      />
     </div>
    </div> 



   <!-- Hotels Cards Section  @click="(e) => handleCardClick(e)"  -->


   <section class="grid sm-grid-cols-1 md:grid-cols-4 gap-6 p-8">
    <CardComponent
      v-for="hotel in filteredHotels"
      :key="hotel.id"
      :image="hotel.image"
      :title="hotel.title"
      :description="hotel.description"
      :location="hotel.location"
      :price="hotel.price"
      :rating="hotel.rating"
      :showButton="true"
      :buttonText="'Book Now'"
      :showHeart="true"
      @book-now="$emit('book-now', hotel)"



    />
    </section> 



    <bookingCalendar
  v-if="showBooking"
  :selectedHotel="selectedHotel"
  @confirm="handleBooking"
/>


</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DropdownMenu from '../../components/DropdownMenu.vue'
import CardComponent from '../../components/card.vue'
import hotelsDataJSON from '../../data/bookingHotels.json'
const hotelsData = ref(hotelsDataJSON.bookings)




import bookingCalendar from '../../components/bookingCalendar.vue'

// const selectedHotel = ref(null)
const showBooking = ref(false)
const bookingDetails = ref(null)

const openBooking = (hotel) => {
  selectedHotel.value = hotel
  showBooking.value = true
}

const handleBooking = (data) => {
  bookingDetails.value = data
}





const selectedCity = ref(null)
const selectedPrice = ref(null)
const selectedRating = ref(null)

const priceOptions = [
  { label: 'Less than 5000', value: 'below5000' },
  { label: '5000 - 15000', value: 'between' },
  { label: 'More than 15000', value: 'above15000' }
]

const cityOptions = [
  { label: 'Cairo', value: 'Cairo' },
  { label: 'Giza', value: 'Giza' },
  { label: 'Alexandria', value: 'Alexandria' },
  { label: 'Luxor', value: 'Luxor' },
  { label: 'Aswan', value: 'Aswan' },
  { label: 'Sharm El Sheikh', value: 'Sharm El Sheikh' },
  { label: 'Hurghada', value: 'Hurghada' },
  { label: 'El Gouna', value: 'El Gouna' },
 
  
]

const ratingOptions = [
  { label: '4+ Stars', value: 4 },
  { label: '4.5+ Stars', value: 4.5 },
  { label: '5 Stars', value: 5 }
]

const filteredHotels = computed(() => {
  return hotelsData.value.filter(hotel => {
    const cityMatch = !selectedCity.value || hotel.city === selectedCity.value
    const ratingMatch = !selectedRating.value || hotel.rating >= selectedRating.value
    const priceMatch =
      !selectedPrice.value ||
       (selectedPrice.value === 'below5000' && hotel.price < 5000) ||
       (selectedPrice.value === 'between' && hotel.price >= 5000 && hotel.price <= 15000) ||
       (selectedPrice.value === 'above15000' && hotel.price > 15000)
        
    return cityMatch && ratingMatch && priceMatch
  })
})



import { defineEmits } from 'vue'

const emit = defineEmits(['book-now'])
</script>
