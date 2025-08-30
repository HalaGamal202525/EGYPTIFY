<template>
  <div
    v-if="isOpen"
    ref="menuRef"
    class="absolute right-0 top-full mt-2 w-[650px] bg-white shadow-lg rounded-xl z-50 p-6 grid grid-cols-3 gap-4"
  >
    <!-- العمود الأيسر للصورة -->
    <div class="col-span-1 flex items-center justify-center">
      <img
        :src="menuImg"
        alt="Menu Illustration"
        class="w-35 h-35 rounded-lg"
      />
    </div>

    <!-- العمودين الآخرين -->
    <div class="col-span-2 grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <a
          href="#"
          class="block hover:text-[#FFC340] font-medium"
          @click="gotoexplore"
          >Explore Egypt</a
        >
        
        <a
          href="#"
          class="block hover:text-[#FFC340] font-medium"
          @click="goToresturant"
          >Restaurant</a
        >

        <a
          href="#"
          class="block hover:text-[#FFC340] font-medium"
          @click="goToblogs"
          >Travel Blog</a
        >

        <a
          href="#"
          class="block hover:text-[#FFC340] font-medium"
          @click="goTooffers"
          >Offers</a
        >
        </div>

        <div class="space-y-2">
        <a
          href="#"
          class="block hover:text-[#FFC340] font-medium"
          @click="goTohotel"
          >Hotels</a
        >
        <a
          href="#"
          class="block hover:text-[#FFC340] font-medium"
          @click="gotoevents"
          >Event Calendar</a
        >
         <a
          href="#"
          class="block hover:text-[#FFC340] font-medium"
          @click="gototransportaion"
          >Transportation</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import menuImg from "/src/assets/BlogPageHero.jpg";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(["close"]);

const menuRef = ref(null);

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    emit("close");
  }
};
function gotoevents() {
  router.push("/events");
}
function gototransportaion(){
  router.push("/transportiondetails")
}
function goToresturant(){
  router.push("/resturant")
}
function gotoexplore() {
  router.push("/explore");
}
function goTooffers() {
  router.push("/offerpage");
}
function goTohotel() {
  router.push("/hotels");
}

function goToblogs() {
  router.push("/blogs");
}
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});



</script>
