<template>
  <div class="w-full">
    <Navbar /> 
    <section class="p-8">

        <otp />
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
import Footer from "../components/footer.vue"
import btn from "../components/BaseButton.vue"
import otp from '../components/OTP.vue'
</script>