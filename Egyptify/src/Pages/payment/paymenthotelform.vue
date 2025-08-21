<script setup>
import { ref } from 'vue'
import { useHotelStore } from '../../data/storehotel' 
const hotelStore = useHotelStore();
const formData = ref({
  name: '',
  address: '',
  nationality: '',
  gender: '',
  idType: '',
  idNumber: '',
  phone: '',
  email: '',
  date: '',
  passengerCount: 1
})

const validateForm = () => {
  const { name, address, nationality, gender, idType, idNumber, phone, email } = formData.value
  if (!name || !address || !nationality || !gender || !idType || !idNumber || !phone || !email ) {
    alert('Please fill in all required fields.')
    return false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.')
    return false
  }
  return true
}

const goToNext = () => {
  if (validateForm()) {
    localStorage.setItem('formData', JSON.stringify(formData.value)) 
    router.push('/payment')
  }
}

import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back(); // بيرجع للصفحة اللي قبلها
};

import NavBarBlack from '../../components/NavBar-Black.vue'
import foot from "../../components/footer.vue";
</script>

<template>
  <NavBarBlack/>

  <!-- ✅ Steps Bar -->
  <div class="w-full bg-white shadow-md py-6 px-10 mt-2">
    <div class="flex justify-between items-center max-w-5xl mx-auto">
      <div class="flex-1 text-center">
        <div class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-[#ffc340] text-white font-bold">1</div>
        <p class="mt-2 text-sm font-medium text-gray-700">Guest Info</p>
      </div>
      <div class="flex-1 h-1 bg-gray-200 mx-2 relative">
        <div class="h-1 bg-[#ffc340] absolute left-0 top-0 w-1/2"></div>
      </div>
      <div class="flex-1 text-center">
        <div class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-gray-200 text-gray-500 font-bold">2</div>
        <p class="mt-2 text-sm font-medium text-gray-700">Payment</p>
      </div>
      <div class="flex-1 h-1 bg-gray-200 mx-2 relative"></div>
      <div class="flex-1 text-center">
        <div class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-gray-200 text-gray-500 font-bold">3</div>
        <p class="mt-2 text-sm font-medium text-gray-700">Confirmation</p>
      </div>
    </div>
  </div>

  <!-- ✅ Form + Card Layout -->
<div class="max-w-6xl mx-auto mt-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

  <!-- ✅ Card Section (الشمال - 1/3) -->
<div class="space-y-6 lg:col-span-1">

  <div 
    v-if="hotelStore.hotel.name" 
    class="bg-white p-6 my-6 rounded-2xl shadow-lg border-t-4 border-[#ffc340]"
  >
    <img
      v-if="hotelStore.hotel.image"
      :src="hotelStore.hotel.image"
      alt="Hotel Image"
      class="w-full h-40 object-cover rounded-lg mb-4"
    />
    <h3 class="text-lg font-bold text-gray-800">
      Hotel: {{ hotelStore.hotel.name }}
    </h3>
    <p class="text-gray-600">⭐ {{ hotelStore.hotel.rate }}</p>
    <p class="text-gray-600">{{ hotelStore.hotel.address }}</p>
    <p v-if="hotelStore.hotel.description" class="text-gray-600 mt-2">
      {{ hotelStore.hotel.description }}
    </p>

    <!-- ✅ تفاصيل الحجز -->
    <div v-if="hotelStore.bookingDetails.roomType" class="mt-4 p-4 bg-gray-50 rounded-lg">
      <h4 class="font-semibold text-gray-800">Booking Details:</h4>
      <p>Room Type: {{ hotelStore.bookingDetails.roomType }}</p>
      <p>Guests: {{ hotelStore.bookingDetails.guests }}</p>
      <p>Check-in: {{ hotelStore.bookingDetails.checkIn }}</p>
      <p>Check-out: {{ hotelStore.bookingDetails.checkOut }}</p>
      <p class="font-semibold">Price/Night: {{ hotelStore.bookingDetails.price }} EGP</p>
      <img
        v-if="hotelStore.bookingDetails.roomImage"
        :src="hotelStore.bookingDetails.roomImage"
        alt="Room Image"
        class="w-full h-32 object-cover rounded-lg mt-3"
      />
      <p>Num of Night:  {{ hotelStore.totalNights }}</p>
      <p> Total: {{ hotelStore.totalPrice }} EGP</p>
    </div>
  </div>
</div>

  <!-- ✅ Form Section (اليمين - 2/3) -->
  <div class="bg-white p-10 rounded-2xl shadow-lg lg:col-span-2 self-start mb-6">
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Guest Information</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- باقي الفورم زي ما هو -->
    <div>
        <label class="block mb-1 text-gray-700">Full Name</label>
        <input v-model="formData.name" placeholder="Full Name" class="w-full border border-[#ffc340] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6ac20]" />
      </div>

      <div>
        <label class="block mb-1 text-gray-700">Address</label>
        <input v-model="formData.address" placeholder="Address" class="w-full border border-[#ffc340] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6ac20]" />
      </div>

      <div>
        <label class="block mb-1 text-gray-700">Nationality</label>
        <input v-model="formData.nationality" placeholder="Nationality" class="w-full border border-[#ffc340] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6ac20]" />
      </div>

      <div>
        <label class="block mb-1 text-gray-700">Gender</label>
        <select v-model="formData.gender" class="w-full border border-[#ffc340] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6ac20]">
          <option disabled value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div>
        <label class="block mb-1 text-gray-700">ID Type</label>
        <select v-model="formData.idType" class="w-full border border-[#ffc340] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6ac20]">
          <option disabled value="">ID Type</option>
          <option>National ID</option>
          <option>Passport</option>
        </select>
      </div>

      <div>
        <label class="block mb-1 text-gray-700">ID Number</label>
        <input v-model="formData.idNumber" placeholder="ID Number" class="w-full border border-[#ffc340] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6ac20]" />
      </div>

      <div>
        <label class="block mb-1 text-gray-700">Phone Number</label>
        <input v-model="formData.phone" placeholder="Phone Number" class="w-full border border-[#ffc340] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6ac20]" />
      </div>

      <div>
        <label class="block mb-1 text-gray-700">Email</label>
        <input v-model="formData.email" placeholder="Email" class="w-full border border-[#ffc340] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6ac20]" />
      </div>
    </div>

    <!-- ✅ Actions -->
    <div class="flex justify-between mt-10">
      <button @click="goBack" 
        class="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium">
        Back
      </button>
      <button @click="goToNext" 
        class="px-6 py-2 rounded-lg bg-[#ffc340] hover:bg-[#e6ac20] text-white font-medium">
        Next
      </button>
    </div>
  </div>

</div>




  <foot />
</template>