<template>
  <div class="booking-page flex flex-col min-h-screen bg-gray-50">
    

    <!-- رأس الصفحة -->
    <div class="w-full flex justify-between items-center px-6 md:px-20 pt-24 pb-4">
      <!-- رجوع -->
      <button @click="$router.push('/transportation')" class="flex items-center text-gray-600 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to home
      </button>

      <!-- العنوان -->
      <h1 class="text-xl md:text-2xl font-bold text-black text-center">Book Your Journey</h1>

      <!-- الخطوة -->
      <div class="text-sm text-gray-500 font-medium">Step 1 of 4</div>
    </div>

    <!-- شريط الخطوات -->
    <div class="flex justify-between items-center px-6 md:px-20 py-5 bg-yellow-100 border-b border-gray-200">
      <div class="text-center text-gray-700 font-medium flex-1">
        <div class="w-9 h-9 rounded-full bg-yellow-400 text-black flex items-center justify-center mx-auto mb-2 font-semibold">1</div>
        Trip Details
      </div>
      <div class="text-center text-gray-600 font-medium flex-1">
        <div class="w-9 h-9 rounded-full bg-gray-200 text-black flex items-center justify-center mx-auto mb-2">2</div>
        Passenger Info
      </div>
      <div class="text-center text-gray-600 font-medium flex-1">
        <div class="w-9 h-9 rounded-full bg-gray-200 text-black flex items-center justify-center mx-auto mb-2">3</div>
        Payment
      </div>
      <div class="text-center text-gray-600 font-medium flex-1">
        <div class="w-9 h-9 rounded-full bg-gray-200 text-black flex items-center justify-center mx-auto mb-2">4</div>
        Confirmation
      </div>
    </div>

    <!-- نموذج الحجز -->
    <div class="max-w-5xl w-full mx-auto px-6 md:px-12 mt-12">
      <div class="bg-white rounded-xl shadow-md p-6 md:p-10">
        <h2 class="text-2xl text-black font-bold mb-6">Trip Details</h2>

        <!-- صف -->
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            
            <label class="flex items-center mb-2 text-gray-800 font-medium">
              <!-- <MapPin class="w-5 h-5 mr-2 text-gray-600" /> -->
              From
            </label>
            <!-- <select class="w-full border border-gray-300 rounded-md p-3">
              <option disabled selected>Select departure city</option>
              <option>Cairo</option>
              <option>Alexandria</option>
              <option>Luxor</option>
              <option>Aswan</option>
              <option>Sharm El Sheikh</option>
              <option>Dahab</option>
            </select> -->
            <InputField><template #icon>
    <MapPin class="w-5 h-5" />
  </template></InputField>
          
          </div>

          <div>
            <label class="flex items-center mb-2 text-gray-800 font-medium">
              <!-- <MapPin class="w-5 h-5 mr-2 text-gray-600" /> -->
              To
            </label>
            <!-- <select class="w-full border border-gray-300 rounded-md p-3">
              <option disabled selected>Select destination</option>
              <option>Cairo</option>
              <option>Alexandria</option>
              <option>Luxor</option>
               <option>Aswan</option>
              <option>Sharm El Sheikh</option>
              <option>Dahab</option>
            </select> -->
                  <InputField><template #icon>
    <MapPin class="w-5 h-5" />
  </template></InputField>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="flex items-center mb-2 text-gray-800 font-medium">
              <!-- <Calendar class="w-5 h-5 mr-2 text-gray-600" /> -->
              Travel Date
            </label>
            <!-- <input type="date" class="w-full border border-gray-300 rounded-md p-3" /> -->
                   <InputField><template #icon>
    <Calendar class="w-5 h-5" />
  </template></InputField>
          </div>

          <div>
            <label class="flex items-center mb-2 text-gray-800 font-medium">
              <!-- <Users class="w-5 h-5 mr-2 text-gray-600" /> -->
              Passengers
            </label>
            <!-- <select class="w-full border border-gray-300 rounded-md p-3">
              <option disabled selected>Number of passengers</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select> -->

            <InputField
  type="select"
  placeholder="Select number"
  :options="['1', '2', '3', '4+']"
  v-model="form.number"
>
  <template #icon>
    <Users class="w-5 h-5" />
  </template>
</InputField>
          </div>
        </div>
        
        <div class="mb-6">
          <label class="flex items-center mb-2 text-gray-800 font-medium">
            <!-- <Truck class="w-5 h-5 mr-2 text-gray-600" /> -->
            Transportation Type
          </label>
          <!-- <select class="w-full border border-gray-300 rounded-md p-3">
            <option disabled selected>Select transport</option>
            <option>Train</option>
            <option>Bus</option>
            <option>Car</option>
            <option>Nile Cruise</option>
          </select> -->
          <InputField
  label="Transportation Type"
  type="select"
  :options="['Train', 'Bus', 'Car', 'Nile Cruise']"
  placeholder="Select transport"
  v-model="form.transportationType"
>
  <template #icon>
    <BusFront class="w-5 h-5" />
  </template>
</InputField>

        </div>

        <div class="mb-6">
          <label class="flex items-center mb-2 text-gray-800 font-medium">
            <!-- <MessageSquare class="w-5 h-5 mr-2 text-gray-600" /> -->
            Special Requests (Optional)
          </label>
          <!-- <textarea
            class="w-full border border-gray-300 rounded-md p-3 min-h-[120px]"
            placeholder="Any special requirements or preferences..."
          ></textarea> -->
          <InputField class="min-h-[120px]"
  label="Special Requests"
  type="textarea"
  placeholder="Any special requirements or preferences..."
  v-model="form.specialRequests"
>
  <template #icon>
    <MessageSquare class="w-5 h-5" />
  </template>
</InputField>

        </div>

   


        <!-- الأزرار -->
        <div class="flex flex-col md:flex-row justify-between gap-4 mt-10">
          <BaseButton class="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 bg-white">
            Previous
          </BaseButton>
          <BaseButton class="px-6 py-3 bg-yellow-400 text-white font-medium rounded-md hover:bg-yellow-500 transition" @click="$router.push('/passenger-info')">
            Next Step
          </BaseButton>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// import NavBar from '../components/navbar.vue';
import Footer from '../components/footer.vue';
import BaseButton from '../components/BaseButton.vue';
import { MapPin, Calendar, Users, Truck, MessageSquare } from 'lucide-vue-next';
import InputField from '../components/InputField.vue';

export default {
  name: 'BookingPage',
  components: {
    Footer,
    BaseButton,
    InputField,
    MapPin,
    Calendar,
    Users,
    Truck,
    MessageSquare
  },
  data() {
  return {
    form: {
      number: ''
    }
  }
}
};
</script>
