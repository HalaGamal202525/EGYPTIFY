<!-- <template>
  <NavBarBlack />

  <div class="flex justify-center items-center gap-8 mt-29">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex flex-col items-center"
    >
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
      <div class="flex flex-wrap gap-6 justify-center my-4">

        <div
          class="rounded-2xl shadow-lg p-6 overflow-hidden flex flex-col w-full md:w-[48%]"
        >
          <div v-if="hotel">
            <div class="py-4 space-y-2">
              <img :src="hotel.image"/>
              <h2 class="text-xl font-bold text-gray-800">{{ hotel.name }}</h2>
              <p class="text-gray-600">
                {{ hotel.location }}
              </p>
              <p class="text-gray-600">
                <span class="font-semibold">Check-in:</span>
                {{ bookingStore.dates.checkIn }}
              </p>

              <p class="text-gray-600">
                <span class="font-semibold">Check-out:</span>
                {{ bookingStore.dates.checkOut }}
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
                <span class="font-bold">Price:</span>
                {{ bookingStore.price }} EGP / night
              </p>
            </div>
          </div>

          <div v-if="bookingStore.transportation" class="mb-10">
            <h2 class="text-xl font-bold text-gray-800 mb-4">
              Transportation Booking
            </h2>
            <p class="mb-3">
              <strong>Type:</strong> {{ bookingStore.transportation.type }}
            </p>
            <p class="mb-3">
              <strong>Provider:</strong>
              {{ bookingStore.transportation.provider }}
            </p>
            <p class="mb-3">
              <strong>From:</strong> {{ bookingStore.transportation.from }}
            </p>
            <p class="mb-3">
              <strong>To:</strong> {{ bookingStore.transportation.to }}
            </p>
            <p class="mb-3">
              <strong>Departure:</strong>
              {{ bookingStore.transportation.departure }}
            </p>
            <p class="mb-3">
              <strong>Arrival:</strong>
              {{ bookingStore.transportation.arrival }}
            </p>
            <p class="mb-3"><strong>Date:</strong> {{ formData.date }}</p>
            <p class="font-bold">
              <strong>Price:</strong>
              {{ bookingStore.transportation.price }} EGP
            </p>
          </div>

          <div v-if="bookingStore.reservation.name" class="mt-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4">
              Reservation Details
            </h2>
            <p class="mb-3">
              <strong>Name:</strong> {{ bookingStore.reservation.name }}
            </p>
            <p class="mb-3">
              <strong>Phone:</strong> {{ bookingStore.reservation.phone }}
            </p>
            <p class="mb-3">
              <strong>Guests:</strong> {{ bookingStore.reservation.guests }}
            </p>
            <p class="mb-3">
              <strong>Date:</strong> {{ bookingStore.reservation.date }}
            </p>
            <p class="mb-3">
              <strong>Time:</strong> {{ bookingStore.reservation.time }}
            </p>
            <p class="mb-3">
              <strong>Comment:</strong> {{ bookingStore.reservation.comment }}
            </p>
          </div>

          <div>
         <div v-if="cardData && cardData.title">
  <div
    class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden  mb-6"
  >
    <img
      :src="cardData.image"
      alt="place image"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <h2 class="text-2xl font-bold">{{ cardData.title }}</h2>
      <p class="text-gray-600">{{ cardData.description }}</p>
      <p class="mt-2 text-lg font-semibold text-blue-600">
        {{ cardData.price }}
      </p>

<h3 class="text-lg font-semibold mb-2">Activities:</h3>

<div v-if="cardData.activities && cardData.activities.length">
  <div
    v-for="(activity, index) in cardData.activities"
    :key="index"
    class="activity-card  rounded-md p-3 mb-3"
  >
    <img
      :src="activity.image"
      alt="Activity Image"
      class="w-full h-40 object-cover rounded-md"
    />
    <h3 class="text-lg font-semibold mt-2">{{ activity.name }}</h3>
        <p class="text-gray-600">{{ activity.description }}</p>

    <p class="text-gray-600">{{ activity.price }}</p>
  </div>
</div>

<p v-else class="text-gray-500">No activities added</p>


    </div>
  </div>
</div>

          </div>
        </div>

        <div class="p-6 bg-white rounded-xl shadow-md md:col-span-2 w-full">
          <h2 class="text-2xl font-bold mb-4">Traveller Details</h2>
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
              <strong>Date:</strong> {{ formData.date }}
            </li>

            <div class="h-px w-full bg-gray-100"></div>
            <li class="flex justify-between text-gray-600">
              <strong>Passengers:</strong> {{ formData.passengerCount }}
            </li>
          </ul>
        </div>
      </div>

      <div class="h-1 w-full bg-[#ffc340] my-6"></div>


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
          class="mt-4 w-60 !bg-white border-2 border-[#ffc340] !text-[#ffc340] font-semibold px-4 py-2 rounded-md hover:bg-[#ffc340] hover:text-white transition-colors duration-300 ease-in-out"
        >
          Previous
        </BaseButton>

        <BaseButton
          @click="nextStep()"
          class="mt-4 w-60 border-2 border-[#ffc340] text-[#ffc340] font-semibold px-4 py-2 rounded-md hover:bg-[#ffc340] hover:text-white transition-colors duration-300 ease-in-out"
          >Next</BaseButton
        >
      </div>
    </div>
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
          <div v-if="!showOtpSection" class="flex flex-col gap-4">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">
              Fawry Number
            </h3>
            <InputField placeholder="Enter Phone Number" />

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

          <div v-else class="flex flex-col gap-4">
            <p class="text-base font-medium mt-2">Enter OTP sent via Fawry:</p>
            <otp @otp-verified="goToStepThree" />

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
              <div class="w-1/2">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <InputField
                  type="text"
                  placeholder="MM/YY"
                  class="w-full px-2 py-2 rounded-md"
                />
              </div>

              <div class="w-1/2">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <InputField
                  placeholder="CVV"
                  class="w-full px-2 py-2 rounded-md"
                />
              </div>
            </div>

            <div
              class="text-lg font-bold flex justify-between items-center pt-4 border-t mt-4"
            >
              <span>Total Price:</span>
              <span>{{ bookingStore.totalPrice }} EGP</span>
            </div>

            <BaseButton @click="nextStep" class="w-full mt-4"
              >Continue</BaseButton
            >
          </div>
        </div>
      </div>

      <div
        v-if="activeTab === 'vodafone'"
        class="flex justify-center w-full my-5"
      >
        <div
          class="w-full max-w-md bg-white p-6 rounded-2xl shadow-md transition-all gap-6 duration-300"
        >
          <div v-if="!showOtpSection" class="flex flex-col gap-4">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">
              Fawry Number
            </h3>
            <InputField placeholder="Enter Phone Number" />

            <p class="text-sm text-gray-600">
              You will receive a code on your phone number.
            </p>

            <div
              class="text-lg font-bold flex flex-row justify-between items-center mt-4 border-t pt-4"
            >
              <span>Total Price:</span>
              <span>400 EGP</span>
            </div>

            <BaseButton @click="goToOtpSection" class="w-full mt-6"
              >Continue</BaseButton
            >
          </div>

          <div v-else class="flex flex-col gap-4">
            <p class="text-base font-medium mt-2">Enter OTP sent via Fawry:</p>
            <otp @otp-verified="goToStepThree" />

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
      <div
        class="w-full max-w-md bg-white p-6 rounded-2xl shadow-md text-center"
      >
        <svg
          class="mx-auto mb-4 w-16 h-16 text-green-500"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>

        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          Payment Confirmed!
        </h2>
        <p class="text-gray-600 mb-6">
          Your booking has been successfully confirmed. We’ve sent a
          confirmation email with the details.
        </p>

        <BaseButton @click="$router.push('/')" class="w-full"
          >Back to Home</BaseButton
        >
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
import NavBarBlack from "../../components/NavBar-Black.vue";
import BaseButton from "../../components/BaseButton.vue";
import foot from "../../components/footer.vue";
import InputField from "../../components/InputField.vue";
import otp from "../../components/OtpInput.vue";

import { computed } from "vue";
import { useBookingStore } from "../../data/store";

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

const goToHome = () => {
  router.push("/");
};

const continueVerification = () => {
  const fullOtp = otpDigits.value.join("");
  if (fullOtp.length === 4 && /^\d{4}$/.test(fullOtp)) {
    emit("otp-verified");
  } else {
    alert("Please enter the 4-digit code.");
  }
};
const emit = defineEmits(["otp-verified"]);
const goToStepThree = () => {
  currentStep.value = 3;
};
import { watchEffect } from "vue";

watchEffect(() => {
  console.log("hotel data:", bookingStore.hotel);
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


const totalPrice = computed(() => {
  return bookingStore.bookings.reduce((sum, booking) => sum + booking.price, 0);
});

</script>

<style scoped>
input[type="checkbox"] {
  border: 1px solid black !important;
}
</style> -->

<template>
  <NavBarBlack />

  <!-- 🔹 Stepper -->
  <div class="w-full bg-white shadow-md py-6 px-10 mt-8">
    <div class="flex justify-between items-center max-w-5xl mx-auto">
      <!-- Step 1 -->
      <div class="flex-1 text-center">
        <div
          class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-gray-200 text-gray-500 font-bold"
        >
          1
        </div>
        <p class="mt-2 text-sm font-medium text-gray-700">Guest Info</p>
      </div>

      <div class="flex-1 h-1 bg-gray-200 mx-2 relative">
        <div class="h-1 bg-[#ffc340] absolute left-0 top-0 w-full"></div>
      </div>

      <!-- Step 2 (active) -->
      <div class="flex-1 text-center">
        <div
          class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-[#ffc340] text-white font-bold"
        >
          2
        </div>
        <p class="mt-2 text-sm font-medium text-gray-700">Payment</p>
      </div>

      <div class="flex-1 h-1 bg-gray-200 mx-2 relative"></div>

      <!-- Step 3 -->
      <div class="flex-1 text-center">
        <div
          class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-gray-200 text-gray-500 font-bold"
        >
          3
        </div>
        <p class="mt-2 text-sm font-medium text-gray-700">Confirmation</p>
      </div>
    </div>
  </div>

  <!-- 🔹 Payment Form -->
  <div class="max-w-5xl mx-auto mt-10 bg-white p-10 rounded-2xl shadow-lg">
    <h2 class="text-2xl font-bold text-gray-800 text-center mb-10">
      Choose Payment Method
    </h2>

    <!-- ✅ 3 كروت جنب بعض -->
    <div class="max-w-5xl mx-auto">
      <!-- ✅ Payment Tabs -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Credit Card -->
        <div
          @click="activeTab = 'credit'"
          class="flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer transition border-2"
          :class="
            activeTab === 'credit'
              ? 'border-[#ffc340] bg-[#fff9e6] shadow-lg'
              : 'border-gray-200 hover:border-[#ffc340]'
          "
        >
          <div
            class="w-14 h-14 flex items-center justify-center rounded-full text-2xl mb-4 transition"
            :class="
              activeTab === 'credit'
                ? 'bg-[#ffc340] text-white'
                : 'bg-gray-100 text-gray-600'
            "
          >
            💳
          </div>
          <p class="font-semibold text-gray-800">Credit / Debit Card</p>
          <p class="text-sm text-gray-600">Visa / MasterCard / AMEX</p>
        </div>

        <!-- Vodafone Cash -->
        <div
          @click="activeTab = 'vodafone'"
          class="flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer transition border-2"
          :class="
            activeTab === 'vodafone'
              ? 'border-[#ffc340] bg-[#fff9e6] shadow-lg'
              : 'border-gray-200 hover:border-[#ffc340]'
          "
        >
          <div
            class="w-14 h-14 flex items-center justify-center rounded-full text-2xl mb-4 transition"
            :class="
              activeTab === 'vodafone'
                ? 'bg-[#ffc340] text-white'
                : 'bg-gray-100 text-gray-600'
            "
          >
            📱
          </div>
          <p class="font-semibold text-gray-800">Vodafone Cash</p>
          <p class="text-sm text-gray-600">Instant mobile wallet transfer</p>
        </div>

        <!-- Fawry -->
        <div
          @click="activeTab = 'fawry'"
          class="flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer transition border-2"
          :class="
            activeTab === 'fawry'
              ? 'border-[#ffc340] bg-[#fff9e6] shadow-lg'
              : 'border-gray-200 hover:border-[#ffc340]'
          "
        >
          <div
            class="w-14 h-14 flex items-center justify-center rounded-full text-2xl mb-4 transition"
            :class="
              activeTab === 'fawry'
                ? 'bg-[#ffc340] text-white'
                : 'bg-gray-100 text-gray-600'
            "
          >
            🏧
          </div>
          <p class="font-semibold text-gray-800">Fawry</p>
          <p class="text-sm text-gray-600">Pay at any Fawry outlet</p>
        </div>
      </div>

      <!-- ✅ Tabs Content -->
      <div class="mt-10">
        <!-- 💳 Credit Card -->
        <div
          v-if="activeTab === 'credit'"
          class="w-full max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 space-y-5"
        >
          <h3 class="text-xl font-semibold text-gray-800">Card Details</h3>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Cardholder Name</label
              >
              <InputField type="text" placeholder="Enter Cardholder Name" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Card Number</label
              >
              <InputField type="text" placeholder="1234 5678 9012 3456" />
            </div>

            <div class="flex gap-4">
              <div class="w-1/2">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Expiry Date</label
                >
                <InputField type="text" placeholder="MM/YY" />
              </div>
              <div class="w-1/2">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >CVV</label
                >
                <InputField type="text" placeholder="123" />
              </div>
            </div>
          </div>

          <div
            class="text-lg font-bold flex justify-between items-center pt-4 border-t"
          >
            <!-- <span>Total:</span> -->
            <span> Total: </span>
            <span> {{ grandTotal }} EGP</span>
          </div>

          <BaseButton @click="nextStep" class="w-full cursor-pointer mt-4"
            >Pay Securely</BaseButton
          >
        </div>

        <!-- 📱 Vodafone -->
        <div
          v-if="activeTab === 'vodafone'"
          class="w-full max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 space-y-5"
        >
          <h3 class="text-xl font-semibold text-gray-800">Vodafone Cash</h3>

          <div v-if="!showOtpSection" class="space-y-5">
            <p class="text-sm text-gray-600">
              Enter your phone number to receive an OTP.
            </p>

            <InputField placeholder="Enter Phone Number" />

            <div
              class="text-lg font-bold flex justify-between items-center pt-4 border-t"
            >
              <span> Total: </span>
              <span> {{ grandTotal }} EGP </span>
            </div>

            <BaseButton
              @click="goToOtpSection"
              class="w-full cursor-pointer mt-4"
              >Continue</BaseButton
            >
          </div>

          <!-- ✅ بعد ما يضغط Continue يظهر الـ OTP -->
          <div v-else class="mt-6 space-y-4">
            <p class="text-base font-medium">Enter OTP:</p>
            <otp @otp-verified="goToStepThree" />

            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                id="agree"
                v-model="isChecked"
                class="accent-[#ffc340] !bg-gray-100 rounded cursor-pointer"
              />
              <label for="agree" class="text-sm text-gray-700"
                >I agree to the terms.</label
              >
            </div>

            <div class="flex gap-3 justify-between">
              <BaseButton
                @click="previous"
                class="w-1/2 !bg-white !text-[#ffc340] !border cursor-pointer !border-[#ffc340] !hover:bg-[#ffc340]"
                >Back</BaseButton
              >
              <BaseButton
                @click="nextStep"
                class="w-1/2 cursor-pointer"
                :disabled="!isChecked"
                >Confirm</BaseButton
              >
            </div>
          </div>
        </div>

        <!-- Fawry Payment -->
        <div
          v-if="activeTab === 'fawry'"
          class="w-full max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 space-y-5"
        >
          <!-- العنوان -->
          <h3
            class="text-xl font-semibold text-gray-800 flex items-center gap-2"
          >
            Fawry Payment
          </h3>

          <div v-if="!showOtpSection" class="space-y-5">
            <p class="text-sm text-gray-600">
              Enter your phone number to receive an OTP.
            </p>

            <InputField placeholder="Enter Phone Number" />

            <div
              class="text-lg font-bold flex justify-between items-center pt-4 border-t"
            >
              <span> Total: </span>
              <span> {{ grandTotal }} EGP </span>
            </div>

            <BaseButton
              @click="goToOtpSection"
              class="w-full cursor-pointer mt-4"
              >Continue</BaseButton
            >
          </div>

          <!-- ✅ بعد ما يضغط Continue يظهر الـ OTP -->
          <div v-else class="mt-6 space-y-4">
            <p class="text-base font-medium">Enter OTP:</p>
            <otp @otp-verified="goToStepThree" />

            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                id="agree"
                v-model="isChecked"
                class="accent-[#ffc340] !bg-gray-100 rounded cursor-pointer"
              />
              <label for="agree" class="text-sm text-gray-700"
                >I agree to the terms.</label
              >
            </div>

            <div class="flex gap-3 justify-between">
              <BaseButton
                @click="previous"
                class="w-1/2 !bg-white !text-[#ffc340] !border !border-[#ffc340] cursor-pointer !hover:bg-[#ffc340]"
                >Back</BaseButton
              >
              <BaseButton
                @click="nextStep"
                class="w-1/2 cursor-pointer"
                :disabled="!isChecked"
                >Confirm</BaseButton
              >
            </div>
          </div>
        </div>
      </div>
      <BaseButton
        @click="goBack"
        class="w-1/2 !bg-white !text-[#ffc340] !border !border-[#ffc340] cursor-pointer !hover:bg-[#ffc340]"
      >
        Back
      </BaseButton>
    </div>
  </div>

  <foot />
</template>
<script setup>
import NavBarBlack from "../../components/NavBar-Black.vue";
import foot from "../../components/footer.vue";
import BaseButton from "../../components/BaseButton.vue";
import InputField from "../../components/InputField.vue";
import otp from "../../components/OtpInput.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back(); // بيرجع للصفحة اللي قبلها
};

const activeTab = ref("credit");
const showOtpSection = ref(false);
const isChecked = ref(false);

const nextStep = () => {
  console.log("Next step");
  router.push("/confirm");
};

const previous = () => {
  showOtpSection.value = false;
};

const goToOtpSection = () => {
  showOtpSection.value = true;
};

const goToStepThree = () => {
  console.log("OTP verified -> go to step 3");
};
import { useCardStore } from "../../data/store";
import { useReservationStore } from "../../data/Storeresturant";
import { useTransportationStore } from "../../data/storetransport";
import { useHotelStore } from "../../data/storehotel";

const cardStore = useCardStore();
const reservationStore = useReservationStore();
const transportationStore = useTransportationStore();
const hotelStore = useHotelStore();

// 🟢 Total from all stores
const grandTotal = computed(() => {
  return (
    (cardStore.total || 0) +
    (reservationStore.totalPrice || 0) +
    (transportationStore.transportation?.price || 0) +
    (hotelStore.totalPrice || 0)
  );
});
</script>
