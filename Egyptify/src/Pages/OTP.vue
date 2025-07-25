<template>
  <div class="w-full">
    <Navbar /> 
        <otp />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
import Footer from "../components/footer.vue"
import btn from "../components/BaseButton.vue"
import OtpInput from '../components/OtpInput.vue'
</script>