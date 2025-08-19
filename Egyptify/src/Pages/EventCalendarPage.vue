<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <Hero
      title="Explore Egypt's Event"
      description="Experience the magic of ancient and modern Egypt and Explore monthly & annual events across Egypt"
      :image="heroImage"
    />

    <!-- Month Navigation -->
    <section class="text-center py-6 bg-gray-100">
      <div class="flex justify-center items-center gap-90">
        <div @click="prevMonth">
          <ButtonComponent>< Previous</ButtonComponent>
        </div>

        <h2 class="text-2xl font-semibold mx-8">{{ currentMonthYear }}</h2>

        <div @click="nextMonth">
          <ButtonComponent>Next > </ButtonComponent>
        </div>
      </div>
    </section>

    <!-- Filters -->
    <section class="bg-white shadow p-4 my-4 max-w-6xl mx-auto rounded-lg">
      <div class="flex flex-wrap justify-center gap-4">
        <DropdownComponent
          :label="filters.city?.label || 'All Cities'"
          :options="cityOptions"
          @select="(val) => (filters.city = val)"
        />

        <DropdownComponent
          :label="filters.type?.label || 'All Types'"
          :options="typeOptions"
          @select="(val) => (filters.type = val)"
        />

        <div
          @click="viewMode = 'annual'"
          :class="
            viewMode === 'annual'
              ? 'ring-2 ring-yellow-500 rounded-[16px] scale-100'
              : 'opacity-90'
          "
        >
          <ButtonComponent>Annual</ButtonComponent>
        </div>

        <div
          @click="viewMode = 'monthly'"
          :class="
            viewMode === 'monthly'
              ? 'ring-2 ring-yellow-500 rounded-[16px] scale-100'
              : 'opacity-90'
          "
        >
          <ButtonComponent>Monthly</ButtonComponent>
        </div>
      </div>
    </section>

    <!-- Event Cards -->
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto"
    >
      <CardComponent
        v-for="event in filteredEvents"
        :key="event.id"
        :image="event.image"
        :showBadge="true"
        :badgeText="event.type"
        :title="event.title"
        :description="event.description"
        :date="event.date"
        :location="event.location"
        :showButton="true"
        :buttonText="'Show Details'"
        :showHeart="true"
        @click="
          () => {
            goToEvent(event.id);
            handleCardClick(event);
          }
        "
      />

     
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Navbar from "../components/navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/footer.vue";
import DropdownComponent from "../components/DropdownMenu.vue";
import CardComponent from "../components/card.vue";
import heroImage from "../assets/eventCalendar.jpg";
import bookingEvents from "../data/bookingEvents.json";
import ButtonComponent from "../components/BaseButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToEvent = (id) => {
  router.push(`/events/${id}`);
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = new Date();
const currentMonthIndex = ref(today.getMonth());
const currentYear = ref(today.getFullYear());

const filters = ref({
  city: "",
  type: "",
});
import { useBookingStore } from "../data/store.js";
const bookingStore = useBookingStore();

function handleCardClick(card) {
  bookingStore.setCardData({
    image: card.image,
    title: card.title,
    rate: card.rate,
    price: card.price,
  });
}

const viewMode = ref("annual");
const events = ref(bookingEvents.bookings || []);

const currentMonthYear = computed(() => {
  return `${months[currentMonthIndex.value]} ${currentYear.value}`;
});

const filteredEvents = computed(() => {
  return events.value.filter((event) => {
    const eventDate = new Date(event.date);
    const isMonthMatch =
      viewMode.value === "monthly"
        ? eventDate.getMonth() === currentMonthIndex.value &&
          eventDate.getFullYear() === currentYear.value
        : eventDate.getFullYear() === currentYear.value;

    const selectedCity = filters.value.city?.value?.toLowerCase() || "";
    const selectedType = filters.value.type?.value?.toLowerCase() || "";

    const eventCity = event.location?.toLowerCase() || "";
    const eventType = event.type?.toLowerCase() || "";

    const cityMatch = !selectedCity || eventCity.includes(selectedCity);
    const typeMatch = !selectedType || eventType === selectedType;
    return isMonthMatch && cityMatch && typeMatch;
  });
});

function nextMonth() {
  if (currentMonthIndex.value === 11) {
    currentMonthIndex.value = 0;
    currentYear.value++;
  } else {
    currentMonthIndex.value++;
  }
}

function prevMonth() {
  if (currentMonthIndex.value === 0) {
    currentMonthIndex.value = 11;
    currentYear.value--;
  } else {
    currentMonthIndex.value--;
  }
}

const cityOptions = [
  { label: "All Cities", value: "" },
  { label: "Cairo", value: "Cairo" },
  { label: "Alexandria", value: "Alexandria" },
  { label: "Luxor", value: "Luxor" },
  { label: "Aswan", value: "Aswan" },
  { label: "Giza", value: "Giza" },
  { label: "Siwa", value: "Siwa" },
  { label: "Hurghada", value: "Hurghada" },
  { label: "South Sinai", value: "South Sinai" },
  { label: "Downtown Cairo", value: "Downtown Cairo" },
  { label: "Across Egypt", value: "Across Egypt" },
];

const typeOptions = [
  { label: "All Types", value: "" },
  { label: "Music", value: "Music" },
  { label: "Culture", value: "Culture" },
  { label: "Heritage", value: "Heritage" },
  { label: "Show", value: "Show" },
  { label: "Nature", value: "Nature" },
  { label: "Local", value: "Local" },
  { label: "Adventure", value: "Adventure" },
  { label: "Arts", value: "Arts" },
  { label: "Sports", value: "Sports" },
];
</script>
<style scoped>

:deep(.card-title) {
  height: 35px; /* أو اللي يناسبك */
  margin-bottom: 20px;
}


</style>
