<template>
  <NavBarBlack />

  <!-- 🔹 Stepper -->
<div class="w-full bg-white shadow-md py-6 px-10 mt-2">
  <div class="flex justify-between items-center max-w-5xl mx-auto">
    <!-- Step 1 -->
    <div class="flex-1 text-center">
      <div
        class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-gray-200 text-white font-bold"
      >
        1
      </div>
      <p class="mt-2 text-sm font-medium text-gray-700">Guest Info</p>
    </div>

    <div class="flex-1 h-1 bg-gray-200 mx-2 relative">
      <div class="h-1 bg-[#ffc340] absolute left-0 top-0 w-full"></div>
    </div>

    <!-- Step 2 -->
    <div class="flex-1 text-center">
      <div
        class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-gray-200 text-white font-bold"
      >
        2
      </div>
      <p class="mt-2 text-sm font-medium text-gray-700">Payment</p>
    </div>

    <div class="flex-1 h-1 bg-gray-200 mx-2 relative">
      <div class="h-1 bg-[#ffc340] absolute left-0 top-0 w-full"></div>
    </div>

    <!-- Step 3 (active) -->
    <div class="flex-1 text-center">
      <div
        class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-[#ffc340] text-white font-bold"
      >
        3
      </div>
      <p class="mt-2 text-sm font-medium text-gray-700">Confirmation</p>
    </div>
  </div>
</div>
<div class="max-w-3xl mx-auto bg-white p-10 my-12 rounded-2xl shadow-2xl text-center space-y-8">
  <!-- ✅ أيقونة النجاح -->
  <div class="flex justify-center">
    <div class="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 animate-bounce">
      <svg
        class="w-12 h-12 text-green-500"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  </div>

  <!-- ✅ العنوان والنص -->
  <div>
    <h2 class="text-3xl font-extrabold text-gray-900 mb-2"> Payment Confirmed!</h2>
    <p class="text-gray-600 text-lg">
      Your booking has been successfully confirmed.<br />
      We’ve sent a confirmation email with the details.
    </p>
  </div>

  <!-- 👤 بيانات الضيف -->
  <div class="border border-gray-100 rounded-xl p-6 my-6 shadow-lg text-left bg-gray-50">
    <h3 class="text-2xl font-bold text-center mb-4  gap-2 text-gray-800">
       Guest Info
    </h3>
    <ul class="text-gray-700 space-y-4">
      <li><span class="font-medium">Name:</span> {{ guestStore.guest.name }}</li>
      <li><span class="font-medium">Nationality:</span> {{ guestStore.guest.nationality }}</li>
      <li><span class="font-medium">Phone:</span> {{ guestStore.guest.phone }}</li>
      <li><span class="font-medium">Email:</span> {{ guestStore.guest.email }}</li>
      <li><span class="font-medium">Date:</span> {{ guestStore.guest.date }}</li>
      <li><span class="font-medium">Guests:</span> {{ guestStore.guest.passengerCount }}</li>
    </ul>
  </div>

  <!-- 🔘 زر العودة -->
  <BaseButton
    @click="$router.push('/')"
    class="w-full py-3 bg-[#ffc340] text-white text-lg font-bold rounded-xl shadow-md hover:scale-105 transition"
  >
    ⬅ Back to Home
  </BaseButton>
</div>



  <foot />
</template>
<script setup>
import NavBarBlack from "../../components/NavBar-Black.vue";
import foot from "../../components/footer.vue";
import { useGuestStore } from "../../data/storeguset";

import BaseButton from "../../components/BaseButton.vue";
const guestStore = useGuestStore();

</script>