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
      <div class="text-sm text-gray-500 font-medium">Step 2 of 4</div>
    </div>

    <!-- خطوات التنقل -->
    <div class="steps-container flex justify-between items-center px-8 md:px-20 py-5 bg-yellow-100 border-b border-gray-200">
      <div class="step text-center text-gray-600 font-medium flex-1">
        <div class="step-number w-9 h-9 rounded-full bg-yellow-200 text-black flex items-center justify-center mx-auto mb-2 font-semibold">1</div>
        Trip Details
      </div>
      <div class="step text-center text-gray-600 font-medium flex-1">
        <div class="step-number w-9 h-9 rounded-full bg-yellow-400 text-white flex items-center justify-center mx-auto mb-2 font-semibold">2</div>
        Passenger Info
      </div>
      <div class="step text-center text-gray-600 font-medium flex-1">
        <div class="step-number w-9 h-9 rounded-full bg-gray-200 text-black flex items-center justify-center mx-auto mb-2">3</div>
        Payment
      </div>
      <div class="step text-center text-gray-600 font-medium flex-1">
        <div class="step-number w-9 h-9 rounded-full bg-gray-200 text-black flex items-center justify-center mx-auto mb-2">4</div>
        Confirmation
      </div>
    </div>

    <!-- المحتوى -->
    <div class="flex-grow py-12 px-4 md:px-10 max-w-5xl mx-auto w-full">
      <div class="bg-white rounded-xl shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Passenger Information</h2>

        <!-- النموذج -->
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" placeholder="Enter first name" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" placeholder="Enter last name" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="your@email.com" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="text" placeholder="+20 XXX XXX XXXX" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Passport Number</label>
              <input type="text" placeholder="Passport number" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option disabled selected>Select nationality</option>
                <option>Egyptian</option>
                <option>Saudi</option>
                <option>Europian</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
            <input type="text" placeholder="Emergency contact name and phone" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>

          <!-- الأزرار -->
          <div class="flex justify-between mt-8">
            <button type="button" @click="$router.push('/transportation-booking')" class="px-6 py-3 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100 transition">
              Previous
            </button>
            <button type="button" @click="$router.push('/transportation-payment')" class="px-6 py-3 bg-yellow-400 text-white font-medium rounded-md hover:bg-yellow-500 transition">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- الفوتر -->
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/footer.vue';

export default {
  name: 'PassengerInfo',
  components: {
    Footer
  }
};
</script>
