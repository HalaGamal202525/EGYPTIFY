<template>
  <NavBarBlack />
  <div class="min-h-screen bg-[#FFFDF9] py-12 px-4 sm:px-6 lg:px-8 mt-6">
    <div class="max-w-4xl mx-auto  bg-white rounded-lg border border-gray-300 shadow-2xl p-8">
      <h1 class="text-3xl font-bold text-center text-yellow-500 mb-16">Trip Planner</h1>

      <div class="mb-10 text-center">
        <h2 class="text-lg text-left font-semibold text-gray-600 mb-6">Plan Your Dream Trip to Egypt</h2>

        <div class="mb-8 text-left">
          <h3 class="text-m font-medium text-yellow-500 mb-3">Step 1: Select Your Interests</h3>
          <div class="flex flex-wrap gap-2">
            <button v-for="interest in interests" :key="interest" @click="toggleInterest(interest)" :class="{
                'px-4 py-2 rounded-xl border text-xs font-medium transition-colors duration-200': true,
                'bg-yellow-400 text-black border-yellow-500': selectedInterests.includes(interest),
                'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200' : !selectedInterests.includes(interest)
              }" class="cursor-pointer">
              {{ interest }}
            </button>
          </div>
        </div>

        <div class="mb-8 text-left">
          <h3 class="text-m font-medium text-yellow-500 mb-3">Step 2: Choose Your Budget</h3>
          <div class="flex gap-2">
            <button v-for="budget in budgets" :key="budget.value" @click="selectedBudget = budget.value"
              :class="{
                'px-4 py-2 rounded-xl border text-xs font-medium transition-colors duration-200': true,
                'bg-yellow-400 text-black border-yellow-500': selectedBudget === budget.value,
                'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200': selectedBudget !== budget.value
              }" class="cursor-pointer">
              {{ budget.label }}
            </button>
          </div>
        </div>

        <div class="mb-8 text-left">
          <h3 class="text-m font-medium text-yellow-500 mb-3">Step 3: Select Transportation</h3>
          <div class="flex gap-2">
            <button v-for="transport in transportation" :key="transport"
              @click="selectedTransportation = transport" :class="{
                'px-4 py-2 rounded-xl border text-xs font-medium transition-colors duration-200': true,
                'bg-yellow-400 text-black border-yellow-500': selectedTransportation === transport,
                'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200': selectedTransportation !== transport
              }" class="cursor-pointer">
              {{ transport }}
            </button>
          </div>
        </div>

        <div class="mb-10 text-left">
          <h3 class="text-m font-medium text-yellow-500 mb-3">Step 4: Select Your Travel Dates</h3>
          <div class="flex justify-center gap-8 mt-16">
            <div class="flex flex-col items-center">
              <div class="calendar h-[250px] p-4 border border-yellow-300 rounded-lg bg-gray-50 shadow-xl">
                <div class="flex justify-between items-center mb-2">
                  <button @click="changeMonth(calendar1.month, calendar1.year, -1)"
                    class="text-yellow-500 hover:text-yellow-600 font-extrabold cursor-pointer">&lt;</button>
                  <span class="font-semibold text-yellow-500">{{ getMonthName(calendar1.month) }} {{ calendar1.year }}</span>
                  <button @click="changeMonth(calendar1.month, calendar1.year, 1)"
                    class="text-yellow-500 hover:text-yellow-600 font-extrabold cursor-pointer">&gt;</button>
                </div>
                <div class="grid grid-cols-7 gap-1 text-xs text-gray-600">
                  <span v-for="dayName in dayNames" :key="dayName" class="text-gray-600 font-medium mt-3">{{ dayName }}</span>
                  <span v-for="blank in getStartDay(calendar1.year, calendar1.month)" :key="'blank1-' + blank"
                    class="p-1 text-center"></span>
                  <span v-for="day in getDaysInMonth(calendar1.year, calendar1.month)" :key="'day1-' + day"
                    @click="selectDate(new Date(calendar1.year, calendar1.month, day), 'start')" :class="{
                      'p-1 text-center rounded-full cursor-pointer': true,
                      'bg-yellow-300 text-gray-800 font-bold': isSelectedDate(new Date(calendar1.year, calendar1.month, day), 'start'),
                      'bg-green-200 text-green-800 font-bold': isSelectedDate(new Date(calendar1.year, calendar1.month, day), 'end'),
                      'bg-blue-100': isDateInSelectedRange(new Date(calendar1.year, calendar1.month, day)),
                      'hover:bg-blue-100': !isSelectedDate(new Date(calendar1.year, calendar1.month, day), 'start') && !isSelectedDate(new Date(calendar1.year, calendar1.month, day), 'end')
                    }">
                    {{ day }}
                  </span>
                </div>
              </div>
              <h3 class="text-m font-medium text-yellow-500 mt-3">Start Date</h3>
            </div>


            <div class="flex flex-col items-center">
              <div class="calendar h-[250px] p-4 border border-yellow-300 rounded-lg bg-gray-50 shadow-xl">
                <div class="flex justify-between items-center mb-2">
                  <button @click="changeMonth(calendar2.month, calendar2.year, -1)"
                    class="text-yellow-500 hover:text-yellow-600 font-extrabold cursor-pointer">&lt;</button>
                  <span class="font-semibold text-yellow-500">{{ getMonthName(calendar2.month) }} {{ calendar2.year }}</span>
                  <button @click="changeMonth(calendar2.month, calendar2.year, 1)"
                    class="text-yellow-500 hover:text-yellow-600 font-extrabold cursor-pointer">&gt;</button>
                </div>
                <div class="grid grid-cols-7 gap-1 text-xs text-gray-600">
                  <span v-for="dayName in dayNames" :key="dayName" class="text-gray-600 font-medium mt-3">{{ dayName }}</span>
                  <span v-for="blank in getStartDay(calendar2.year, calendar2.month)" :key="'blank2-' + blank"
                    class="p-1 text-center"></span>
                  <span v-for="day in getDaysInMonth(calendar2.year, calendar2.month)" :key="'day2-' + day"
                    @click="selectDate(new Date(calendar2.year, calendar2.month, day), 'end')" :class="{
                      'p-1 text-center rounded-full cursor-pointer': true,
                      'bg-yellow-200 text-gray-800 font-bold': isSelectedDate(new Date(calendar2.year, calendar2.month, day), 'start'),
                      'bg-yellow-300 text-gray-800 font-bold': isSelectedDate(new Date(calendar2.year, calendar2.month, day), 'end'),
                      'bg-blue-100': isDateInSelectedRange(new Date(calendar2.year, calendar2.month, day)),
                      'hover:bg-blue-100': !isSelectedDate(new Date(calendar2.year, calendar2.month, day), 'start') && !isSelectedDate(new Date(calendar2.year, calendar2.month, day), 'end')
                    }">
                    {{ day }}
                  </span>
                </div>
              </div>
              <h3 class="text-m font-medium text-yellow-500 mt-3">End Date</h3>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-4 text-center">
            Selected Trip Dates:
            {{ selectedStartDate ? selectedStartDate.toDateString() : 'None' }}
            -
            {{ selectedEndDate ? selectedEndDate.toDateString() : 'None' }}
          </p>
          <p v-if="dateError" class="text-red-500 text-sm mt-2 text-center">{{ dateError }}</p>
          <p v-if="noResultsError" class="text-red-500 text-sm mt-2 text-center">{{ noResultsError }}</p>
        </div>

        <div class="text-center">
          <BaseButton @click="generateItinerary" :disabled="isLoading" class="ml-auto mr-auto w-[180px] ">
            <span v-if="!isLoading">Generate Itinerary</span>
            <span v-else>Generating...</span>
          </BaseButton>
        </div>
      </div>

      <div v-if="itinerary.length > 0">
        <h2 class="text-xl font-semibold text-gray-600 mb-6 text-left">Your Personalized Itinerary</h2>
        <div class="space-y-6">
          <div v-for="(item, index) in itinerary" :key="index"
            class="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
            <img :src="item.image" alt="Itinerary Item"
              class="w-20 h-20 object-cover rounded-lg flex-shrink-0">
            <div>
              <h3 class="text-lg font-semibold text-gray-800">{{ item.day }}: {{ item.title }}</h3>
              <p class="text-gray-600 text-sm">Accommodation: {{ item.accommodation }}</p>
            </div>
          </div>
        </div>
        <!-- <div class="mt-8 flex justify-center gap-4">
          <DisabledButton>
            Customize Itinerary
          </DisabledButton>
          <BaseButton>
            Save & Share
          </BaseButton>
        </div> -->
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, reactive } from 'vue';
import allItineraries from '../data/itineraries.json';

import NavBarBlack from '../components/NavBar-Black.vue';
import BaseButton from '../components/BaseButton.vue';
import DisabledButton from '../components/DisabledButton.vue';
import Footer from '../components/footer.vue';

// --- Calendar Logic ---
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

const calendar1 = reactive({
  month: currentMonth,
  year: currentYear
});

const calendar2 = reactive({
  month: (currentMonth + 1) % 12,
  year: currentMonth === 11 ? currentYear + 1 : currentYear
});

const selectedStartDate = ref(null);
const selectedEndDate = ref(null);
const dateError = ref('');
const noResultsError = ref('');

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const getMonthName = (monthIndex) => monthNames[monthIndex];
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getStartDay = (year, month) => new Date(year, month, 1).getDay();

const changeMonth = (monthRef, yearRef, offset) => {
  let newDate = new Date(yearRef, monthRef + offset, 1);
  let newMonth = newDate.getMonth();
  let newYear = newDate.getFullYear();

  if (monthRef === calendar1.month && yearRef === calendar1.year) {
    calendar1.month = newMonth;
    calendar1.year = newYear;
    let c2Date = new Date(calendar1.year, calendar1.month + 1, 1);
    calendar2.month = c2Date.getMonth();
    calendar2.year = c2Date.getFullYear();
  } else {
    calendar2.month = newMonth;
    calendar2.year = newYear;
    let c1Date = new Date(calendar2.year, calendar2.month - 1, 1);
    calendar1.month = c1Date.getMonth();
    calendar1.year = c1Date.getFullYear();
  }
  dateError.value = '';
};

const selectDate = (date, type) => {
  dateError.value = '';
  const selectedDateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  if (type === 'start') {
    selectedStartDate.value = selectedDateTime;
    if (selectedEndDate.value && selectedStartDate.value > selectedEndDate.value) {
      selectedEndDate.value = null;
    }
  } else if (type === 'end') {
    if (!selectedStartDate.value || selectedDateTime < selectedStartDate.value) {
      dateError.value = 'End date cannot be before start date. Please select a valid range.';
      selectedEndDate.value = null;
    } else {
      selectedEndDate.value = selectedDateTime;
    }
  }
};

const isSelectedDate = (date, type) => {
  const comparableDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  if (type === 'start' && selectedStartDate.value) {
    return comparableDate.getTime() === selectedStartDate.value.getTime();
  }
  if (type === 'end' && selectedEndDate.value) {
    return comparableDate.getTime() === selectedEndDate.value.getTime();
  }
  return false;
};

const isDateInSelectedRange = (date) => {
  const comparableDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  if (selectedStartDate.value && selectedEndDate.value) {
    return comparableDate >= selectedStartDate.value && comparableDate <= selectedEndDate.value;
  }
  return false;
};

// --- Trip Planner Logic ---
const interests = ['Tour', 'Nature & Outdoor', 'Entertainment', 'Food & Drinks', 'Cultural & Historical Places'];
const selectedInterests = ref([]);
const budgets = [
  { label: 'Economy', value: 'economy' },
  { label: 'Mid-Range', value: 'mid-range' },
  { label: 'Luxury', value: 'luxury' }
];
const selectedBudget = ref('');
const transportation = ['Bus', 'Car'];
const selectedTransportation = ref('');
const itinerary = ref([]);
const isLoading = ref(false);

const toggleInterest = (interest) => {
  const index = selectedInterests.value.indexOf(interest);
  if (index > -1) {
    selectedInterests.value.splice(index, 1);
  } else {
    selectedInterests.value.push(interest);
  }
};

const generateItinerary = async () => {
  dateError.value = '';
  noResultsError.value = '';
  itinerary.value = [];
  isLoading.value = true;

  if (selectedInterests.value.length === 0 || !selectedBudget.value || !selectedTransportation.value || !selectedStartDate.value || !selectedEndDate.value) {
    dateError.value = 'Please select all options to generate an itinerary.';
    isLoading.value = false;
    return;
  }

  try {
    const timeDiff = selectedEndDate.value.getTime() - selectedStartDate.value.getTime();
    const tripDuration = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

    // Filter itineraries from the JSON file
    const matchingItineraries = allItineraries.filter(it => 
      it.duration === tripDuration &&
      it.budget === selectedBudget.value &&
      it.transportation === selectedTransportation.value &&
      it.interests.every(interest => selectedInterests.value.includes(interest))
    );

    if (matchingItineraries.length > 0) {
      const randomIndex = Math.floor(Math.random() * matchingItineraries.length);
      itinerary.value = matchingItineraries[randomIndex].itinerary;
    } else {
      noResultsError.value = 'No itineraries found matching your criteria. Please try different options.';
    }

  } catch (error) {
    console.error('Error generating itinerary:', error);
    noResultsError.value = 'An error occurred while generating the itinerary. Please try again.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
a, button {
  cursor: pointer;
}
.calendar .grid-cols-7>span:nth-child(n+8):hover {
  background-color: #fee392;
  cursor: pointer;
}
.star-rating .fa-star {
    font-size: 1.5rem;
}
</style>