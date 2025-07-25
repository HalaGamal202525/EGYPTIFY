<template>
  <div class="page-container">
    <h2>Enter the verification code</h2>
    <OTPInput />
  </div>
</template>

<script setup>
import OTPInput from '../components/OtpInput.vue' // عدلي المسار حسب مكان الكومبوننت
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
}
</style>
