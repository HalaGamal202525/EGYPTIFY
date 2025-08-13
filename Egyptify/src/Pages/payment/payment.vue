<template>
  <div class="flex justify-center items-center gap-8 my-8">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex flex-col items-center"
    >
      <!-- الدائرة -->
      <div
        class="w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300"
        :class="{
          'bg-[#ffc340] text-white border-[#ffc340]': currentStep === index + 1,
          'bg-green-500 text-white border-green-500': currentStep > index + 1,
          'border-gray-400 text-gray-600': currentStep < index + 1,
        }"
      >
        <span v-if="currentStep > index + 1">✔</span>
        <span v-else>{{ index + 1 }}</span>
      </div>

      <p
        class="mt-2 text-sm font-medium transition-all duration-300"
        :class="{
          'text-[#ffc340] font-bold': currentStep === index + 1,
          'text-gray-600': currentStep !== index + 1,
        }"
      >
        {{ step }}
      </p>
    </div>
  </div>

  <div class="mt-10 px-6">
    <div v-if="currentStep === 1">
      <div class="h-1 w-full bg-[#ffc340]"></div>
      <!-- كروت النقل والفندق -->
      <div class="flex flex-wrap gap-6 justify-center my-4">
        <!-- كارت وسيلة النقل -->
        <!-- <div
          class="bg-gray-50 rounded-2xl shadow-lg p-6 overflow-hidden flex flex-col w-full md:w-[48%]"
        >
          <img
            :src="transport.image"
            alt="Transport Image"
            class="w-full h-48 rounded-2xl object-cover"
          />
          <div class="py-4 space-y-2">
            <h2 class="text-xl font-bold text-gray-800">
              {{ transport.company }}
            </h2>
            <p class="text-gray-600">
              <span class="font-semibold">Type:</span> {{ transport.type }}
            </p>
            <p class="text-gray-600">
              <span class="font-semibold">From:</span>
              {{ transport.from }} &nbsp;
              <span class="font-semibold">To:</span> {{ transport.to }}
            </p>
            <p class="text-gray-600">
              <span class="font-semibold">Departure:</span>
              {{ transport.departureTime }} &nbsp;
              <span class="font-semibold">Arrival:</span>
              {{ transport.arrivalTime }}
            </p>
            <p class="text-gray-600">
              <span class="font-semibold">Duration:</span>
              {{ transport.duration }}
            </p>
            <p class="text-gray-600">
              <span class="font-semibold">Bags:</span> {{ transport.bags }} bags
            </p>
            <p class="text-gray-600">
              <span class="font-semibold">Seat No:</span> {{ transport.seatno }}
            </p>
            <p class="text-gray-900 font-bold text-lg">
              <span class="font-bold">Price:</span> {{ transport.price }} EGP
            </p>
          </div>
        </div> -->

 <!-- كارت الفندق -->
<div
  class="bg-gray-50 rounded-2xl shadow-lg p-6 overflow-hidden flex flex-col w-full md:w-[48%]"
>
<div v-if="hotel">
   <div class="py-4 space-y-2">
    <h2 class="text-xl font-bold text-gray-800">{{hotel.name }}</h2>
    <p class="text-gray-600">
    {{ hotel.location }}
    </p>
    <p class="text-gray-600">
      <span class="font-semibold">Check-in:</span> {{ bookingStore.dates.checkIn  }}
    </p>

    <p class="text-gray-600">
      <span class="font-semibold">Check-out:</span> {{bookingStore.dates.checkOut }}
    </p>
    <p>
  <span class="font-semibold">Room Type:</span>
  {{ bookingStore.roomType }}
</p>

<p class="text-gray-600">
  <span class="font-semibold">Guests:</span> Up to
  {{ bookingStore.guests }} people
</p>

<p class="text-gray-900 font-bold text-lg">
  <span class="font-bold">Price:</span> {{ bookingStore.price }} EGP / night
</p>
  </div>
</div>

<div>
  <div v-if="cardData && cardData.title">
    <div class="max-w-sm mx-auto  rounded-lg shadow-lg overflow-hidden p-4">
      <img
        v-if="cardData.image"
        :src="cardData.image"
        alt="Booking Image"
        class="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        {{ cardData.title }}
      </h2>
      <div class="flex items-center mb-3">
        <span v-for="n in 5" :key="n" class="text-yellow-400 mr-1">
          <i
            class="fa-solid"
            :class="n <= Math.round(cardData.rate) ? 'fa-star' : 'fa-star-half-stroke'"
          ></i>
        </span>
        <span class="text-gray-600 ml-2">({{ cardData.rate || 0 }})</span>
      </div>
      <p class="text-lg font-bold text-green-600">
        {{ cardData.price ? `$${cardData.price}` : 'Price not available' }}
      </p>
    </div>
  </div>




</div>


  
</div>

<!-- كارت المسافر (مكرر فقط مرة واحدة) -->
<div class="p-6 bg-white rounded-xl shadow-md md:col-span-2 w-full">
  <h2 class="text-2xl font-bold mb-4">Traveler Details</h2>
  <ul class="space-y-2">
    <li class="flex justify-between text-gray-600">
      <strong>Name:</strong> {{ formData.name }}
    </li>
    <div class="h-px w-full bg-gray-100"></div>
    <li class="flex justify-between text-gray-600">
      <strong>Address:</strong> {{ formData.address }}
    </li>
    <div class="h-px w-full bg-gray-100"></div>
    <li class="flex justify-between text-gray-600">
      <strong>Nationality:</strong> {{ formData.nationality }}
    </li>
    <div class="h-px w-full bg-gray-100"></div>
    <li class="flex justify-between text-gray-600">
      <strong>Gender:</strong> {{ formData.gender }}
    </li>
    <div class="h-px w-full bg-gray-100"></div>
    <li class="flex justify-between text-gray-600">
      <strong>ID Type:</strong> {{ formData.idType }}
    </li>
    <div class="h-px w-full bg-gray-100"></div>
    <li class="flex justify-between text-gray-600">
      <strong>ID Number:</strong> {{ formData.idNumber }}
    </li>
    <div class="h-px w-full bg-gray-100"></div>
    <li class="flex justify-between text-gray-600">
      <strong>Phone:</strong> {{ formData.phone }}
    </li>
    <div class="h-px w-full bg-gray-100"></div>
    <li class="flex justify-between text-gray-600">
      <strong>Email:</strong> {{ formData.email }}
    </li>
    <div class="h-px w-full bg-gray-100"></div>
    <li class="flex justify-between text-gray-600">
      <strong>Passengers:</strong> {{ formData.passengerCount }}
    </li>
  </ul>
</div>


      </div>

      <!-- خط -->
      <div class="h-1 w-full bg-[#ffc340] my-6"></div>

      <!-- كروت المسافر والرحلة -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  

       
      </div>

      <!-- checkbox -->
      <div class="flex items-center justify-start py-6 px-6 mt-4">
        <input
          type="checkbox"
          id="agree"
          v-model="isAgreed"
          class="w-4 h-4 text-blue-600 border border-black rounded focus:ring-blue-500"
        />
        <label for="agree" class="ml-2 text-gray-700 text-base"
          >I agree to all terms</label
        >
      </div>

      <div class="flex flex row justify-center gap-8 mb-5">
      <BaseButton
  @click="previous()"
  class="mt-4 w-60 !bg-white border-2 border-[#ffc340] !text-[#ffc340] font-semibold px-4 py-2 rounded-md
         hover:bg-[#ffc340] hover:text-white transition-colors duration-300 ease-in-out">
  Previous
</BaseButton>


        <BaseButton
          @click="nextStep()"
          class="mt-4 w-60 border-2 border-[#ffc340] text-[#ffc340] font-semibold px-4 py-2 rounded-md
         hover:bg-[#ffc340] hover:text-white transition-colors duration-300 ease-in-out"
          >Next</BaseButton
        >
      </div>
    </div>
    <!-- step 2 -->
    <div v-else-if="currentStep === 2">
      <div class="flex space-x-4 justify-center mb-4">
        <BaseButton @click="activeTab = 'fawry'" :class="tabClass('fawry')"
          >Fawry</BaseButton
        >
        <BaseButton @click="activeTab = 'credit'" :class="tabClass('credit')"
          >Credit/Visa</BaseButton
        >
        <BaseButton
          @click="activeTab = 'vodafone'"
          :class="tabClass('vodafone')"
          >Vodafone Cash</BaseButton
        >
      </div>

      <div v-if="activeTab === 'fawry'" class="flex justify-center w-full my-5">
        <div
          class="w-full max-w-md bg-white p-6 rounded-2xl shadow-md transition-all gap-6 duration-300"
        >
          <!-- Step 1: Phone number -->
          <div v-if="!showOtpSection" class="flex flex-col gap-4">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">
              Fawry Number
            </h3>
            <InputField placeholder="Enter Phone Number" type="number" />

            <p class="text-sm text-gray-600">
              You will receive a code on your phone number.
            </p>

            <div
              class="text-lg font-bold flex flex-row justify-between items-center mt-4 border-t pt-4"
            >
              <span>Total Price:</span>
              <span>{{ totalPrice }} EGP</span>
            </div>

            <BaseButton @click="goToOtpSection" class="w-full mt-6"
              >Continue</BaseButton
            >
          </div>

          <!-- Step 2: OTP Section -->
          <div v-else class="flex flex-col gap-4">
            <p class="text-base font-medium mt-2">Enter OTP sent via Fawry:</p>
            <otp @otp-verified="goToStepThree" />

            <!-- زر الرجوع -->
            <div class="flex items-center justify-center mb-2 mt-1">
              <input
                type="checkbox"
                id="agree"
                v-model="isChecked"
                class="mr-2 mt-1"
              />
              <label for="agree" class="text-sm text-gray-700">
                I agree to the terms and conditions.
              </label>
            </div>

            <p class="text-sm text-blue-600 cursor-pointer mb-2">
              Didn’t receive a code?
            </p>

            <!-- أزرار التنقل -->
            <div class="flex justify-between gap-4 mt-4">
              <BaseButton
                @click="previous"
                class="w-full bg-gray-300 text-gray-800 hover:bg-gray-400"
              >
                Back
              </BaseButton>

              <BaseButton
                @click="nextStep"
                class="w-full"
                :disabled="!isChecked"
              >
                Next
              </BaseButton>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="activeTab === 'credit'"
        class="flex justify-center w-full my-5"
      >
        <div
          class="w-full max-w-md bg-white p-6 rounded-2xl shadow-md transition-all duration-300 flex flex-col gap-5"
        >
          <h3 class="text-lg font-semibold text-gray-800">
            Credit Card Details
          </h3>

          <div class="flex flex-col gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Cardholder Name</label
              >
              <InputField
                type="text"
                placeholder="Enter Cardholder Name"
                class="w-full px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Card Number</label
              >
              <div class="flex justify-between gap-2">
                <InputField
                  type="text"
                  placeholder="X"
                  class="w-1/4 px-2 py-2 rounded-md"
                />
                <InputField
                  type="text"
                  placeholder="X"
                  class="w-1/4 px-2 py-2 rounded-md"
                />
                <InputField
                  type="text"
                  placeholder="X"
                  class="w-1/4 px-2 py-2 rounded-md"
                />
                <InputField
                  type="text"
                  placeholder="X"
                  class="w-1/4 px-2 py-2 rounded-md"
                />
              </div>
            </div>

            <div class="flex justify-between gap-3">
              <div class="w-1/3">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Exp. Month</label
                >
                <InputField
                  type="number"
                  placeholder="MM"
                  class="w-full px-2 py-2 rounded-md"
                />
              </div>
              <div class="w-1/3">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Exp. Year</label
                >
                <InputField
                  type="number"
                  placeholder="YY"
                  class="w-full px-2 py-2 rounded-md"
                />
              </div>
              <div class="w-1/3">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >CVC</label
                >
                <InputField
                  type="number"
                  placeholder="CVC"
                  class="w-full px-2 py-2 rounded-md"
                />
              </div>
            </div>

            <div
              class="text-lg font-bold flex justify-between items-center pt-4 border-t mt-4"
            >
              <span>Total Price:</span>
              <span>{{ totalPrice }} EGP</span>
            </div>

            <BaseButton @click="nextStep" class="w-full mt-4"
              >Continue</BaseButton
            >
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'vodafone'" class="flex justify-center w-full my-5">
       <div
          class="w-full max-w-md bg-white p-6 rounded-2xl shadow-md transition-all gap-6 duration-300"
        >
          <!-- Step 1: Phone number -->
          <div v-if="!showOtpSection" class="flex flex-col gap-4">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">
              Fawry Number
            </h3>
            <InputField placeholder="Enter Phone Number" type="number" />

            <p class="text-sm text-gray-600">
              You will receive a code on your phone number.
            </p>

            <div
              class="text-lg font-bold flex flex-row justify-between items-center mt-4 border-t pt-4"
            >
              <span>Total Price:</span>
              <span>{{ totalPrice }} EGP</span>
            </div>

            <BaseButton @click="goToOtpSection" class="w-full mt-6"
              >Continue</BaseButton
            >
          </div>

          <!-- Step 2: OTP Section -->
          <div v-else class="flex flex-col gap-4">
            <p class="text-base font-medium mt-2">Enter OTP sent via Fawry:</p>
            <otp @otp-verified="goToStepThree" />

            <!-- زر الرجوع -->
            <div class="flex items-center justify-center mb-2 mt-1">
              <input
                type="checkbox"
                id="agree"
                v-model="isChecked"
                class="mr-2 mt-1"
              />
              <label for="agree" class="text-sm text-gray-700">
                I agree to the terms and conditions.
              </label>
            </div>

            <p class="text-sm text-blue-600 cursor-pointer mb-2">
              Didn’t receive a code?
            </p>

            <!-- أزرار التنقل -->
            <div class="flex justify-between gap-4 mt-4">
              <BaseButton
                @click="previous"
                class="w-full bg-gray-300 text-gray-800 hover:bg-gray-400"
              >
                Back
              </BaseButton>

              <BaseButton
                @click="nextStep"
                class="w-full"
                :disabled="!isChecked"
              >
                Next
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
   <div v-if="currentStep === 3" class="flex justify-center w-full my-10">
  <div class="w-full max-w-md bg-white p-6 rounded-2xl shadow-md text-center">
    <svg
      class="mx-auto mb-4 w-16 h-16 text-green-500"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg>

    <h2 class="text-2xl font-semibold text-gray-800 mb-2">Payment Confirmed!</h2>
    <p class="text-gray-600 mb-6">
      Your booking has been successfully confirmed. We’ve sent a confirmation email with the details.
    </p>

    <BaseButton @click="$router.push('/')" class="w-full">Back to Home</BaseButton>
  </div>
</div>

  </div>

  <foot />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const router = useRouter();
import BaseButton from "../../components/BaseButton.vue";
import foot from "../../components/footer.vue";
import InputField from "../../components/InputField.vue";
import otp from "../../components/OtpInput.vue";
// localStorage.setItem('selectedTransport', JSON.stringify(transport));
// localStorage.setItem('selectedHotel', JSON.stringify(hotel));
// localStorage.setItem('tripDetails', JSON.stringify(trip));

import { computed } from 'vue';
import { useBookingStore } from '../../data/store';

const bookingStore = useBookingStore();

const cardData = computed(() => bookingStore.card);
const hotel = computed(() => bookingStore.hotel);

const steps = ["Customer Detail ", "Payment Methoed", "Confirmation"];
const currentStep = ref(1);
const isAgreed = ref(false);

const activeTab = ref("fawry");
const tabClass = (tab) => {
  return activeTab.value === tab
    ? "bg-[#ffc340] text-white px-4 py-2 rounded"
    : "bg-gray-100 !text-gray-900 px-4 py-2 rounded";
};
const showOtpSection = ref(false);
const isChecked = ref(false);

const goToOtpSection = () => {
  showOtpSection.value = true;
};

const goToConfirmation = () => {
  if (otp.value && isChecked.value) {
    currentStep.value = 3;
  } else {
    alert("Please enter OTP and agree to terms.");
  }
};

const nextStep = () => {
  if (currentStep.value === 1 && !isAgreed.value) {
    alert("check agree box ");
    return;
  }
  if (currentStep.value < 3) {
    currentStep.value++;
  }
};
const previous = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};
const goBack = () => {
  router.push("/form");
};
const continueVerification = () => {
  const fullOtp = otpDigits.value.join("");
  if (fullOtp.length === 4 && /^\d{4}$/.test(fullOtp)) {
    // إبعتي حدث للكومبوننت الأب
    emit("otp-verified");
  } else {
    alert("Please enter the 4-digit code.");
  }
};
const emit = defineEmits(["otp-verified"]);
const goToStepThree = () => {
  // كود نقلك للخطوة الثالثة، ممكن تغيري قيمة step مثلاً
  currentStep.value = 3;
};
import { watchEffect } from 'vue';

watchEffect(() => {
  console.log('hotel data:', bookingStore.hotel);
});


const formData = ref({});

onMounted(() => {
  const stored = localStorage.getItem("formData");
  if (stored) {
    formData.value = JSON.parse(stored);
  }
});

const resetSteps = () => {
  currentStep.value = 1;
};
// const transport = {
//   image: "/sara/R (8).jpeg",
//   company: "GoBus",
//   type: "Bus",
//   from: "Cairo",
//   to: "Hurghada",
//   departureTime: "08:00 AM",
//   arrivalTime: "01:30 PM",
//   duration: "5h 30m",
//   bags: 2,
//   price: 220,
// };
// const hotel = {
//   image: "/sara/wood-hotel-house-1001965.jpg",
//   name: "Grand Nile Hotel",
//   location: "Garden City, Cairo",
//   checkin: "12 Jul 2025  12:00PM",
//   checkout: "15 Jul 2025  3:00PM",
//   rating: 4.5,
//   roomType: "Deluxe Room",
//   guests: 2,
//   facilities: ["Wi-Fi", "Breakfast", "Pool", "Gym"],
//   price: 1200,
// };
const trip = {
  transport: {
    name: "GoBus",
    price: 800,
  },
  hotel: {
    name: "Grand Nile Hotel",
    price: 1200,
  },
  meals: "Breakfast & Dinner",
  mealPrice: 400,
  service: "Tour Guide",
  servicePrice: 500,
  place: "siwa osisa",
  placeprice: 500,
  Tourguide: "Sarah",
  tourprice: 400,
  seatno: "14A",
};
const totalPrice =
  trip.transport.price +
  trip.hotel.price +
  trip.mealPrice +
  trip.servicePrice +
  trip.placeprice +
  trip.tourprice;
</script>

<style scoped>
input[type="checkbox"] {
  border: 1px solid black !important;
}
</style>
