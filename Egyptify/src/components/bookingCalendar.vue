<template>
  <div class="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow grid gap-6 border border-yellow-300 bg-gray-50 shadow-xl">

    <!-- Calendar Section -->
    <div>
      <div class="flex justify-between items-center mb-4">
        <button @click="changeMonth(-1)" class="text-yellow-500 hover:text-yellow-600 font-extrabold cursor-pointer">&lt;</button>
        <h2 class="text-lg font-semibold text-yellow-500">
          {{ getMonthName(calendar.month) }} {{ calendar.year }}
        </h2>
        <button @click="changeMonth(1)" class="text-yellow-500 hover:text-yellow-600 font-extrabold cursor-pointer">&gt;</button>
      </div>

      <div class="grid grid-cols-7 text-center text-sm font-medium text-gray-600 mb-2">
        <div v-for="day in dayNames" :key="day">{{ day }}</div>
      </div>

      <div class="grid grid-cols-7 text-center text-sm gap-1">
        <div v-for="n in getStartDay(calendar.year, calendar.month)" :key="'empty-' + n"></div>
        <div
          v-for="day in getDaysInMonth(calendar.year, calendar.month)"
          :key="day"
          @click="selectDate(new Date(calendar.year, calendar.month, day))"
          :class="[
            'cursor-pointer p-2 rounded-full',
            isSelectedDate(new Date(calendar.year, calendar.month, day))
              ? 'bg-[#FFC340] text-white'
              : 'hover:bg-yellow-200'
          ]"
        >
          {{ day }}
        </div>
      </div>
    </div>

    <!-- Inputs Section -->
    <div class="grid gap-4">
      <div>
        <label for="people" class="block text-sm font-medium text-gray-700">Number of People</label>
        <input
          id="people"
          type="number"
          min="1"
          v-model="numberOfGuests"
          class="mt-1 w-full border border-yellow-500 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-200"
        />
      </div>

      <div>
        <label for="notes" class="block text-sm font-medium text-gray-700">Special Notes</label>
        <textarea
          id="notes"
          rows="3"
          v-model="specialNotes"
          class="mt-1 w-full border border-yellow-500 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-200"
        ></textarea>
      </div>
    </div>

    <!-- Confirm Button -->
    <button
      @click="confirmBooking"
      class="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 w-full"
    >
      Confirm Booking
    </button>

    <!-- Checkout Section -->
    <div v-if="checkoutTotal > 0" class="mt-4 text-center text-lg font-semibold text-yellow-600">
      Total: {{ checkoutTotal }} EGP
    </div>
  </div>

  
</template>

<script setup>
import { ref, reactive, defineProps } from 'vue';

// const emit = defineEmits(['booking-confirmed']);


// Props


const props = defineProps({
  visible: Boolean, // للتحكم في الظهور من الأب
  item: Object // مهم عشان توصلك بيانات العنصر المحجوز

});

// State
// const numberOfGuests = ref(1);
const specialNotes = ref('');
// const selectedDate = ref(null);
const checkoutTotal = ref(0);

// Calendar state
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

const calendar = reactive({
  month: currentMonth,
  year: currentYear
});

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Calendar methods
const getMonthName = (monthIndex) => monthNames[monthIndex];
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getStartDay = (year, month) => new Date(year, month, 1).getDay();
const changeMonth = (offset) => {
  let newDate = new Date(calendar.year, calendar.month + offset, 1);
  calendar.month = newDate.getMonth();
  calendar.year = newDate.getFullYear();
};
const selectDate = (date) => {
  selectedDate.value = new Date(date.getFullYear(), date.getMonth(), date.getDate());
};
const isSelectedDate = (date) => {
  if (!selectedDate.value) return false;
  return date.toDateString() === selectedDate.value.toDateString();
};





const handleCardClick = (hotel) => {
  selectedHotel.value = hotel;
  showBooking.value = true;
};



  // const confirmBooking = () => {
  // const { date, guests, notes } = bookingInputs.value;

  // if (!date || !guests) {
  //   alert('Please select a date and number of people.');
  //   return;
  // }

  // if (!selectedHotel.value) {
  //   alert('No hotel selected.');
  //   return;
  // }

//   const total = guests * selectedHotel.value.price;

//   checkout.value = {
//     date,
//     guests,
//     notes,
//     total
//   };

//   bookingHistory.value.push({ date, guests, notes, total });
// };













// ✅ المتغيرات المطلوبة
const selectedDate = ref(null);
const numberOfGuests = ref(1);

// ✅ حساب السعر الكلي باستخدام سعر العنصر
const total = computed(() => {
  return numberOfGuests.value * (props.item?.price || 0);
});

// ✅ لما المستخدم يعمل Confirm
// defineProps(['item'])

const emit = defineEmits(['booking-confirmed', 'close']);

// const confirmBooking = () => {
//   const bookingDetails = {
//     title: props.item.title,
//     date: selectedDate.value,
//     guests: numberOfGuests.value,
//     notes: notes.value,
//     total: total.value,
//   };
//   emit('booking-confirmed', bookingDetails);
//   emit('close');
// };





const confirmBooking = () => {
  if (!selectedDate.value || !numberOfGuests.value) {
    alert('Please select a date and number of people.');
    return;
  }

  const bookingDetails = {
    title: props.item.title,
    date: selectedDate.value,
    guests: numberOfGuests.value,
    notes: specialNotes.value,
    total: total.value,
    type: props.item.type, // لو عندك نوع زي "hotel" أو "event"
  };

  emit('booking-confirmed', bookingDetails);
  emit('close');
};








</script>
