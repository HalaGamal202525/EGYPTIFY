<!-- src/pages/RoomListPage.vue -->
<template>
  <Navbar />

  <div class="p-14">
    <div class="flex flex-row mt-4 justify-around items-center cursor-pointer">
      <div class="flex flex-row gap-3 items-center justify-center">
        <i class="fa-solid fa-arrow-left text-2xl " @click="goback"></i>
      <h3 class="font-bold text-xl d-inline">Filtered By:</h3>
    </div>
      <RoomFilter @filter-price="setPrice" @filter-guest="setGuests"  class="flex justify-center my-4 items-center"/>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<RoomCard
  v-for="room in filteredRooms"
  :key="room.id"
  :image="room.imageurl"
  :title="room.name"
  :description="room.description"
  :people="room.guestno"
  :price="room.price"
  :showButton="true"
  buttonText="Book Now"
  v-on="{
    click: () => handleBookRoom(room)
  }"
  class="p-3"
/>


    </div>
  </div>
   <!-- :showButton="true"
        buttonText="Book Now" -->
  <foot />
</template>



<script setup>
import { ref, computed } from "vue";
import RoomFilter from "../components/roomfilter.vue";
import RoomCard from "../components/card.vue";
import Navbar from "../components/NavBar-Black.vue";
import dropdown from "../components/DropdownMenu.vue";
import foot from "../components/footer.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goback=()=>{
  router.back()
}

import { useBookingStore } from '../data/store' // إذا عندك ستور للحجز

const bookingStore = useBookingStore()

const handleBookRoom = (room) => {
  bookingStore.setRoomDetails(room.name, room.guestno, room.price,room.image)

   // إضافة الحجز لقائمة الحجوزات وحساب الإجمالي
  bookingStore.addBooking({
    type: 'Hotel',
    name: room.name,
    price: room.price
  });

  router.push('/form')
}

import roomsData from "../data/room.json"; 

const allRooms = ref(roomsData); 

const selectedPrice = ref(null);
const selectedGuests = ref(null);

function setPrice(value) {
  selectedPrice.value = value;
}
function setGuests(value) {
  selectedGuests.value = value;
}

const filteredRooms = computed(() => {
  return allRooms.value.filter((room) => {
    const matchPrice = selectedPrice.value
      ? room.price <= selectedPrice.value
      : true;
    const matchGuest = selectedGuests.value
      ? selectedGuests.value >= 4
        ? room.guestno >= 4
        : room.guestno === selectedGuests.value
      : true;
    return matchPrice && matchGuest;
  });
});







</script>
