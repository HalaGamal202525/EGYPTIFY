<template>
  
    <Navbar />
      <main class="flex-grow pt-24">

    <div class="pt-20 container mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-12 gap-8">
       
        <div class="col-span-12 md:col-span-4">
          <h1 class="text-3xl font-bold text-black mb-6 leading-tight">Tell us,<br>how was your stay?</h1>
          
          <div class="border border-gray-200 bg-white p-4 rounded-lg shadow-sm mb-6">
            <img src="/hotel/main.jpg" alt="Hotel Image" class="w-full h-48 object-cover rounded-md mb-3">
            <h2 class="text-xl font-semibold text-black">Iberotel Luxor</h2>
            <p class="text-sm text-gray-700">
              Khaled Ibn El Waleed Street, East Bank, 99999 Luxor, Egypt.
            </p>
          </div>
        </div>

      
        <div class="col-span-12 md:col-span-8 space-y-6">

          
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-lg font-semibold text-black mb-4">How would you rate your experience?</h2>
            <div class="flex items-center gap-2 mb-2">
              <div v-for="i in 5" :key="i"
                   @mouseover="hoverRating = i"
                   @mouseleave="hoverRating = 0"
                   @click="rating = i"
                   class="w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors"
                   :class="{
                     'bg-green-500 border-green-600': i <= hoverRating,
                     'border-gray-300': i > hoverRating
                   }">
              </div>
              <span class="ml-4 font-medium text-black">
                {{ getRatingText(hoverRating || rating) }}
              </span>
            </div>
          </div>

         
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-medium text-black mb-3">When did you go?</h3>
            <div class="relative w-48">
              <select class="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black text-sm">
                <option disabled selected>Select one</option>
                <option>Last month</option>
                <option>2-6 months ago</option>
                <option>7-12 months ago</option>
                <option>Over a year ago</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-medium text-black mb-3">Who did you go with?</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                v-for="option in companionOptions"
                :key="option"
                @click="selectedCompanion = option"
                class="py-2 px-3 rounded-md text-sm font-medium border border-gray-300"
                :class="{
                  'bg-yellow-400 border-yellow-400 text-white': selectedCompanion === option,
                  'bg-white text-black': selectedCompanion !== option
                }"
              >
                {{ option }}
              </button>
            </div>
          </div>

          
           <div class="bg-white p-6 rounded-lg shadow-sm">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-medium text-black">Write your review</h3>
      <button 
        class="flex items-center gap-1 text-gray-500 text-sm hover:text-blue-500"
        @click="showTips = true"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z"/>
        </svg>
        <span>Review Tips</span>
      </button>
    </div>
    <textarea
      v-model="reviewText"
      class="w-full p-3 border border-gray-300 rounded-md h-32 text-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
      placeholder="Share details of your experience..."
    ></textarea>
    <div class="text-right text-xs mt-1" :class="{'text-red-500': reviewText.length < 100, 'text-gray-500': reviewText.length >= 100}">
      {{ reviewText.length }}/100 min characters
    </div>
  </div>


  
  <div v-if="showTips" class="fixed inset-0 z-50 flex items-center justify-center">
  
    <div class="absolute inset-0" @click="showTips = false"></div>
    
    
    <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 mx-4 border border-gray-200">
      <button 
        @click="showTips = false" 
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      
      <h3 class="text-xl font-bold text-black mb-4">What makes a great review?</h3>
      
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold text-green-600 mb-2">Do</h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Get specific - the more details, the better</li>
            <li>Share the good, the bad, and just OK</li>
            <li>Tell us stuff you'd tell your friends</li>
            <li>Sprinkle in a few tips and recs</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold text-red-600 mb-2">Don't</h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Use profanity, threats, or personal insults</li>
            <li>Include personal info like email or phone numbers</li>
            <li>Write in ALL CAPS</li>
            <li>Share someone else's experience</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-6 text-right">
        <button 
          @click="showTips = false"
          class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-500 transition-colors"
        >
          Got it!
        </button>
      </div>
    </div>
  </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-medium text-black mb-3">Title your review</h3>
            <input
              v-model="reviewTitle"
              type="text"
              class="w-full p-3 border border-gray-300 rounded-md text-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Give us the gist of your experience"
            />
            <div class="text-right text-xs mt-1" :class="{'text-red-500': reviewTitle.length > 20, 'text-gray-500': reviewTitle.length <= 20}">
              {{ reviewTitle.length }}/20 max characters
            </div>
          </div>

         
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex justify-between items-center mb-3">
              <h3 class="text-lg font-medium text-black">Add some photos</h3>
              <span class="text-sm text-gray-500">Optional</span>
            </div>
            <div class="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50">
              <svg class="w-10 h-10 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <p class="text-sm text-gray-500">Click to add photos or drag and drop</p>
              <input type="file" class="hidden" multiple accept="image/*">
            </div>
          </div>

          
          <div class="bg-white p-6 rounded-lg shadow-sm flex items-start">
            <input type="checkbox" id="certify" class="mt-1 mr-2 h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded">
            <label for="certify" class="text-sm font-normal text-gray-700">
              I certify that this review is based on my own experience and is my genuine opinion of this hotel, and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review.
            </label>
          </div>

          <BaseButton
            label="Continue"
            class="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-8 rounded-md transition-colors mb-10"
            :disabled="!isFormValid">Continue </BaseButton>
          

        </div>
      </div>
    
  </div>
  <Footer />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import Navbar from '../components/navbar-Black.vue'
import Footer from '../components/footer.vue'
import BaseButton from '../components/BaseButton.vue'

const rating = ref(0)
const hoverRating = ref(0)
const reviewText = ref('')
const reviewTitle = ref('')
const selectedCompanion = ref('')
const companionOptions = ['Business', 'Family', 'Couples', 'Friends', 'Solo']
const showTips = ref(false)

const getRatingText = (value) => {
  const texts = {
    1: 'Terrible',
    2: 'Poor',
    3: 'Average',
    4: 'Good',
    5: 'Excellent'
  }
  return texts[value] || ''
}

const isFormValid = computed(() => {
  return rating.value > 0 &&
         reviewText.value.length >= 100 &&
         reviewTitle.value.length > 0 &&
         reviewTitle.value.length <= 20
})
</script>

