<template>
  <NavBarBlack />

  <!-- 🔹 Stepper -->
<div class="w-full bg-white shadow-md py-6 px-10 mt-2">
  <div class="flex justify-between items-center max-w-5xl mx-auto">
    <!-- Step 1 -->
    <div class="flex-1 text-center">
      <div
        class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-gray-200 text-white font-bold"
      >
        1
      </div>
      <p class="mt-2 text-sm font-medium text-gray-700">Guest Info</p>
    </div>

    <div class="flex-1 h-1 bg-gray-200 mx-2 relative">
      <div class="h-1 bg-[#ffc340] absolute left-0 top-0 w-full"></div>
    </div>

    <!-- Step 2 -->
    <div class="flex-1 text-center">
      <div
        class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-gray-200 text-white font-bold"
      >
        2
      </div>
      <p class="mt-2 text-sm font-medium text-gray-700">Payment</p>
    </div>

    <div class="flex-1 h-1 bg-gray-200 mx-2 relative">
      <div class="h-1 bg-[#ffc340] absolute left-0 top-0 w-full"></div>
    </div>

    <!-- Step 3 (active) -->
    <div class="flex-1 text-center">
      <div
        class="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-[#ffc340] text-white font-bold"
      >
        3
      </div>
      <p class="mt-2 text-sm font-medium text-gray-700">Confirmation</p>
    </div>
  </div>
</div>



  <foot />
</template>
<script setup>
import NavBarBlack from "../../components/NavBar-Black.vue";
import foot from "../../components/footer.vue";

</script>