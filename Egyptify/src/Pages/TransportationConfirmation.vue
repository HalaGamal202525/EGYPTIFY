
<template>
  <div class=" flex flex-col min-h-screen bg-gray-50">
    
    
   <!-- رأس الصفحة -->
    <div class="w-full flex justify-between items-center px-6 md:px-20 pt-24 pb-4">
      <!-- رجوع -->
      <button @click="$router.go(-1)" class="flex items-center text-gray-600 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </button>

      <!-- العنوان -->
      <h1 class="text-xl md:text-2xl font-bold text-black text-center">Book Your Journey</h1>

      <!-- الخطوة -->
      <div class="text-sm text-gray-500 font-medium">Step 4 of 4</div>
    </div>

    <!-- Steps Progress Bar -->
    <div class="flex justify-between items-center px-8 md:px-20 py-4 bg-yellow-50 border-b">
      <div class="step text-center flex-1 text-gray-600 font-medium">
        <div class="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-2 font-semibold">1</div>
        Trip Details
      </div>
      <div class="step text-center flex-1 text-gray-600 font-medium">
        <div class="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-2 font-semibold">2</div>
        Passenger Info
      </div>
      <div class="step text-center flex-1 text-gray-600 font-medium">
        <div class="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-2 font-semibold">3</div>
        Payment
      </div>
      <div class="step text-center flex-1 text-black font-medium">
        <div class="w-9 h-9 rounded-full bg-yellow-400 text-white flex items-center justify-center mx-auto mb-2 font-semibold">4</div>
        Confirmation
      </div>
    </div>

    <!-- Confirmation Content -->
    <div class="flex-grow py-12 px-4 md:px-10 max-w-2xl mx-auto w-full">
      <div class="text-center mb-8">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle class="w-10 h-10 text-green-600" />
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p class="text-gray-600">Your trip has been successfully booked. You will receive a confirmation email shortly.</p>
      </div>

      <div class="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 class="text-lg font-semibold text-center mb-4">Booking Details</h3>
        <div class="space-y-3">
          <div class="flex justify-between border-b pb-2">
            <span class="text-gray-600">Booking ID:</span>
            <span class="font-medium">EGT-2024-001234</span>
          </div>
          <div class="flex justify-between border-b pb-2">
            <span class="text-gray-600">Route:</span>
            <span class="font-medium">Cairo → Luxor</span>
          </div>
          <div class="flex justify-between border-b pb-2">
            <span class="text-gray-600">Date:</span>
            <span class="font-medium">March 15, 2024</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-700">Time:</span>
            <span class="font-medium">08:30 AM</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition">
          Download Ticket
        </button>
        <button @click="$router.push('/')" class="px-6 py-3 bg-yellow-400 text-white font-medium rounded-md hover:bg-yellow-500 transition">
          Back to Home
        </button>
      </div>
    </div>


    <Footer />
  </div>
</template>

<script>

import Footer from '../components/footer.vue';
import { ArrowLeft, CheckCircle } from 'lucide-vue-next';

export default {
  name: 'ConfirmationPage',
  components: {
  
    Footer,
    ArrowLeft,
    CheckCircle
  }
};
</script>

<style scoped>
/* يمكن إضافة أي أنماط إضافية مطلوبة هنا */
.step:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -50px;
  top: 15px;
  width: 40px;
  height: 2px;
  background-color: #e5e7eb;
}

@media (max-width: 768px) {
  .step:not(:last-child)::after {
    display: none;
  }
}
</style>