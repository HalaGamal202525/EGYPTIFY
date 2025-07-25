<template>
  <div class="w-full"> 
    <Navbar />
    <otp style="margin-top: 80px; color: blue;"> <OtpInput />
    </otp>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
import Footer from "../components/footer.vue"
import btn from "../components/BaseButton.vue"
import OtpInput from '../components/OtpInput.vue'
</script>