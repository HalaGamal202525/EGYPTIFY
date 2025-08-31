<script setup>
import { ref } from 'vue'
 import { useTransportationStore } from "../../data/storetransport";

const transportationStore = useTransportationStore();

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
  const { name, address, nationality, gender, idType, idNumber, phone, email, passengerCount, date } = formData.value
  if (!name || !address || !nationality || !gender || !idType || !idNumber || !phone || !email || !date || !passengerCount) {
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
            guestStore.setGuest(formData.value); 

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
import { useGuestStore } from "../../data//storeguset"; 

const guestStore = useGuestStore();
</script>

<template>
  <NavBarBlack/>

  <!-- ✅ Steps Bar -->
  <div class="w-full bg-white shadow-md py-6 px-10 mt-22">
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




  <!-- ✅ لو فيه وسيلة مواصلات -->
  <div 
    v-if="transportationStore.transportation" 
    class="bg-white p-6 my-6 rounded-2xl shadow-lg border-t-4 border-[#ffc340]"
  >
    <img
      v-if="transportationStore.transportation.image"
      :src="transportationStore.transportation.image"
      alt="Transportation Image"
      class="w-full h-40 object-cover rounded-lg mb-4"
    />
    <h3 class="text-lg font-bold text-gray-800">
      🚖 Transportation: {{ transportationStore.transportation.type }}
    </h3>
    <p class="text-gray-600">From: {{ transportationStore.transportation.from }}</p>
    <p class="text-gray-600">To: {{ transportationStore.transportation.to }}</p>
    <p class="text-gray-600">Date: {{ transportationStore.transportation.date }}</p>
    <p class="text-gray-600">Time: {{ transportationStore.transportation.time }}</p>
    <p class="font-semibold mt-2">Price: {{ transportationStore.transportation.price }} EGP</p>
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


          <div class="md:col-span-2">
      <label class="block mb-1 text-gray-700">Date</label>
      <input
        type="date"
        v-model="formData.date"
        class="w-full border border-[#ffc340] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6ac20]"
      />
    </div>



      <div class="md:col-span-2">
        <label class="block mb-1 text-gray-700">Number of Guests</label>
        <input
          v-model.number="formData.passengerCount"
          type="number"
          min="1"
          class="w-full border border-[#ffc340] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6ac20]"
          placeholder="Number of Passengers"
        />
      </div>    </div>

    <!-- ✅ Actions -->
    <div class="flex justify-between mt-10">
      <button @click="goBack" 
        class="px-6 py-2 rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-700 font-medium">
        Back
      </button>
      <button @click="goToNext" 
        class="px-6 py-2 rounded-lg bg-[#ffc340] cursor-pointer hover:bg-[#e6ac20] text-white font-medium">
        Next
      </button>
    </div>
  </div>

</div>




  <foot />
</template>