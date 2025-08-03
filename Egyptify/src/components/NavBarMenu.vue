<template>
  <div v-if="isOpen" ref="menuRef" class="absolute right-0 top-full mt-2 w-[650px] bg-white shadow-lg rounded-xl z-50 p-6 grid grid-cols-3 gap-4">
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
        <a href="#" class="block hover:text-[#FFC340] font-medium">Explore Egypt</a>
        <a href="#" class="block hover:text-[#FFC340] font-medium" @click="goTodestination">Destinations</a>
        <a href="#" class="block hover:text-[#FFC340] font-medium" @click="goToblogs">Travel Blog</a>
      </div>

      <div class="space-y-2">
        <a href="#" class="block hover:text-[#FFC340] font-medium" @click="goTooffers">Offers</a>
        <a href="#" class="block hover:text-[#FFC340] font-medium" @click="goToactivity">Attractions & Activities</a>
        <a href="#" class="block hover:text-[#FFC340] font-medium">Event Calendar</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import menuImg from '/src/assets/BlogPageHero.jpg'
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['close'])

const menuRef = ref(null)

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    emit('close')
  }
}
function goTooffers() {
  router.push("/offerpage");
}
function goToactivity() {
  router.push("/activity");
}
function goTodestination() {
  router.push("/destination");
}
function goToblogs() {
  router.push("/blogs");
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
