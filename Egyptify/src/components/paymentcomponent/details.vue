<template>
    <div class="h-screen w-px bg-gray-300 mx-auto"></div>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-3xl mx-auto">
    <!-- صورة وسيلة النقل -->
    <img :src="transport.image" alt="Transport Image" class="w-full md:w-1/3 h-48 object-cover" />

    <!-- التفاصيل -->
    <div class="p-4 flex-1 space-y-2">
      <h2 class="text-xl font-bold text-gray-800">{{ transport.company }}</h2>
      
      <p class="text-gray-600">
        <span class="font-semibold">Type:</span> {{ transport.type }}
      </p>

      <p class="text-gray-600">
        <span class="font-semibold">From:</span> {{ transport.from }} &nbsp;
        <span class="font-semibold">To:</span> {{ transport.to }}
      </p>

      <p class="text-gray-600">
        <span class="font-semibold">Departure:</span> {{ transport.departureTime }} &nbsp;
        <span class="font-semibold">Arrival:</span> {{ transport.arrivalTime }}
      </p>

      <p class="text-gray-600">
        <span class="font-semibold">Duration:</span> {{ transport.duration }}
      </p>

      <p class="text-gray-600">
        <span class="font-semibold">Bags:</span> {{ transport.bags }} bags
      </p>

      <p class="text-gray-900 font-bold text-lg">
        {{ transport.price }} EGP
      </p>
    </div>
  </div>
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-3xl mx-auto">
    <!-- صورة الفندق -->
    <img :src="hotel.image" alt="Hotel Image" class="w-full md:w-1/3 h-48 object-cover" />

    <!-- التفاصيل -->
    <div class="p-4 flex-1 space-y-2">
      <h2 class="text-xl font-bold text-gray-800">{{ hotel.name }}</h2>

      <p class="text-gray-600">
        <span class="font-semibold">Location:</span> {{ hotel.location }}
      </p>

      <p class="text-gray-600">
        <span class="font-semibold">Rating:</span> {{ hotel.rating }} ⭐
      </p>

      <p class="text-gray-600">
        <span class="font-semibold">Room Type:</span> {{ hotel.roomType }}
      </p>

      <p class="text-gray-600">
        <span class="font-semibold">Guests:</span> Up to {{ hotel.guests }} people
      </p>

      <p class="text-gray-600">
        <span class="font-semibold">Facilities:</span> {{ hotel.facilities.join(', ') }}
      </p>

      <p class="text-gray-900 font-bold text-lg">
        {{ hotel.price }} EGP / night
      </p>
    </div>
  </div>
      <div class="h-screen w-px bg-gray-300 mx-auto"></div>
  <div class="grid md:grid-cols-2 gap-6 p-6">

    <!-- كارت المسافر -->
   <div class="p-6 bg-white rounded-xl shadow-md max-w-2xl mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-4">Traveler Details</h2>
    <ul class="space-y-2">
      <li><strong>Name:</strong> {{ store.formData.name }}</li>
      <li><strong>Address:</strong> {{ store.formData.address }}</li>
      <li><strong>Nationality:</strong> {{ store.formData.nationality }}</li>
      <li><strong>Gender:</strong> {{ store.formData.gender }}</li>
      <li><strong>ID Type:</strong> {{ store.formData.idType }}</li>
      <li><strong>ID Number:</strong> {{ store.formData.idNumber }}</li>
      <li><strong>Phone:</strong> {{ store.formData.phone }}</li>
      <li><strong>Email:</strong> {{ store.formData.email }}</li>
      <li><strong>Passengers:</strong> {{ store.formData.passengerCount }}</li>
    </ul>
  </div>

    <!-- كارت الرحلة -->
    <div class="bg-white p-6 rounded-2xl shadow space-y-3">
      <h2 class="text-xl font-bold text-gray-800">Trip Summary</h2>
      <p><span class="font-semibold">Transport:</span> {{ trip.transport.name }} - {{ trip.transport.price }} EGP</p>
      <p><span class="font-semibold">Hotel:</span> {{ trip.hotel.name }} - {{ trip.hotel.price }} EGP</p>
      <p><span class="font-semibold">Meals:</span> {{ trip.meals }} - {{ trip.mealPrice }} EGP</p>
      <p><span class="font-semibold">Service:</span> {{ trip.service }} - {{ trip.servicePrice }} EGP</p>

      <hr class="my-2 border-gray-300" />

      <p class="text-lg font-bold">
        Total: {{ totalPrice }} EGP
      </p>
    </div>

  </div>
</template>

<script setup>
const transport = {
  image: '/sara/R (8).jpeg',
  company: 'GoBus',
  type: 'Bus',
  from: 'Cairo',
  to: 'Hurghada',
  departureTime: '08:00 AM',
  arrivalTime: '01:30 PM',
  duration: '5h 30m',
  bags: 2,
  price: 220
}
const hotel = {
  image: '/sara/wood-hotel-house-1001965.jpg',
  name: 'Grand Nile Hotel',
  location: 'Garden City, Cairo',
  rating: 4.5,
  roomType: 'Deluxe Room',
  guests: 2,
  facilities: ['Wi-Fi', 'Breakfast', 'Pool', 'Gym'],
  price: 1200
}
const trip = {
  transport: {
    name: 'GoBus',
    price: 800
  },
  hotel: {
    name: 'Grand Nile Hotel',
    price: 1200
  },
  meals: 'Breakfast & Dinner',
  mealPrice: 400,
  service: 'Tour Guide',
  servicePrice: 500
}

const totalPrice = (trip.transport.price + trip.hotel.price + trip.mealPrice + trip.servicePrice)
</script>

