<template>
  <div class=" flex flex-col min-h-screen bg-gray-50">
    

    <!-- رأس الصفحة -->
    <div class="w-full flex justify-between items-center px-6 md:px-20 pt-24 pb-4">
      <!-- رجوع -->
      <button @click="$router.go(-1)" class="flex items-center text-gray-600 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to home
      </button>

      <!-- العنوان -->
      <h1 class="text-xl md:text-2xl font-bold text-black text-center">Book Your Journey</h1>

      <!-- الخطوة -->
      <div class="text-sm text-gray-500 font-medium">Step 3 of 4</div>
    </div>

    <!-- شريط الخطوات -->
    <div class="steps-container flex justify-between items-center px-8 md:px-20 py-5 bg-yellow-100 border-b border-gray-200">
      <div class="step text-center flex-1 text-gray-600 font-medium">
        <div class="w-9 h-9 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-2 font-semibold">1</div>
        Trip Details
      </div>
      <div class="step text-center flex-1 text-gray-600 font-medium">
        <div class="w-9 h-9 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-2 font-semibold">2</div>
        Passenger Info
      </div>
      <div class="step text-center flex-1 text-gray-600 font-medium">
        <div class="w-9 h-9 rounded-full bg-yellow-400 text-white flex items-center justify-center mx-auto mb-2 font-semibold">3</div>
        Payment
      </div>
      <div class="step text-center flex-1 text-gray-600 font-medium">
        <div class="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-2">4</div>
        Confirmation
      </div>
    </div>

    <!-- محتوى الدفع -->
    <div class="flex-grow py-12 px-4 md:px-10 max-w-5xl mx-auto w-full">
      <div class="bg-white rounded-xl shadow-md p-8">

        <h2 class="text-2xl font-bold text-gray-900 mb-8">Payment</h2>

        <form class="space-y-6">
          <div>
             <label class="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
            <!-- <input type="text" placeholder="Name on card" class="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-400" /> --> 

            <InputField placeholder="Name on card" ><template #icon>
    <User class="w-5 h-5" />
  </template></InputField>
          </div>
          <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <!-- <input type="text" placeholder="1234 5678 9012 3456" class="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-400" /> -->
             <InputField placeholder="1234 5678 9012 3456"><template #icon>
    <CreditCard class="w-5 h-5" />
  </template></InputField>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <!-- <input type="month" class="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-400" /> -->
               <InputField type="date"></InputField>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">CVV</label>
              <!-- <input type="text" placeholder="123" class="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-400" /> -->
               <InputField placeholder="123 "><template #icon>
    <Shield class="w-5 h-5" />
  </template></InputField>
            </div>
          </div>

          <div class="flex justify-between mt-8">
            <button type="button" @click="$router.push('/passenger-info')" class="px-6 py-3 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100 transition">
              Previous
            </button>
            <button type="button" @click="$router.push('/transportation-confirmation')" class="px-6 py-3 bg-yellow-400 text-white font-medium rounded-md hover:bg-yellow-500 transition">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/footer.vue';
import InputField from '../components/InputField.vue';
import { User, CreditCard, CalendarClock, Shield, } from 'lucide-vue-next';

export default {
  name: 'Payment',
  components: { Footer,
    InputField,
    User,
    CreditCard,
    CalendarClock,
    Shield
   }
};
</script>
