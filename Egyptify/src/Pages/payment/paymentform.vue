<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formData = ref({
  name: '',
  address: '',
  nationality: '',
  gender: '',
  idType: '',
  idNumber: '',
  phone: '',
  email: '',
  date: '', // ✅ أضفنا التاريخ هنا
  passengerCount: 1
})

const validateForm = () => {
  const {
    name,
    address,
    nationality,
    gender,
    idType,
    idNumber,
    phone,
    email,
    passengerCount,
    date
  } = formData.value

  if (
    !name ||
    !address ||
    !nationality ||
    !gender ||
    !idType ||
    !idNumber ||
    !phone ||
    !email ||
    !date ||
    !passengerCount
  ) {
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


const goBack = () => {
  console.log('رجوع للخطوة السابقة')
  // router.push('/booking')
}
import NavBarBlack from '../../components/NavBar-Black.vue'
import foot from "../../components/footer.vue";

</script>

<template>
  <NavBarBlack/>
  <div class="max-w-3xl mx-auto mt-30 bg-white p-8 rounded-2xl shadow-lg">
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Guest Information</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </div>

    <div class="flex justify-between mt-10">
      <button @click="goBack" class="px-6 py-2 rounded-lg bg-gray-200 hover:bg-[#ffc340]text-gray-700 cursor-pointer">
        Back
      </button>
      <button  @click="goToNext()"  
        :style="{ cursor: 'pointer' }" 
       class="px-6 py-2 rounded-lg bg-[#ffc340] hover:bg-[#ffc340] text-white cursor pointer">
        Next
      </button>
    </div>
  </div>
    <foot />

</template>

























