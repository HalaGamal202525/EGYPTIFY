<template>
  <div class="otp-input-container">
    <div class="otp-fields">
      <input
        type="text"
        maxlength="1"
        v-for="(digit, index) in otpDigits"
        :key="index"
        v-model="otpDigits[index]"
        @input="handleInput($event, index)"
        @keydown="handleKeyDown($event, index)"
        :ref="el => { if (el) inputRefs[index] = el }"
        class="otp-field"
      />
    </div>

    <div class="resend-section">
      <input type="checkbox" id="remember" class="resend-checkbox" />
      <label for="remember" class="resend-label">
        Don't receive a code?
        <span @click="resendCode" class="resend-link">Resend</span>
      </label>
    </div>

    <BaseButton @click="continueVerification" class="continue-button">Continue</BaseButton>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseButton from './BaseButton.vue'

const otpDigits = ref(['', '', '', ''])
const inputRefs = ref([])

onMounted(() => {
  inputRefs.value[0]?.focus()
})

const handleInput = (event, index) => {
  const value = event.target.value
  otpDigits.value[index] = value.slice(0, 1)

  if (value && index < inputRefs.value.length - 1) {
    inputRefs.value[index + 1]?.focus()
  }
}

const handleKeyDown = (event, index) => {
  if (event.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
    inputRefs.value[index - 1]?.focus()
  }

  const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab']
  if (!/^\d$/.test(event.key) && !allowedKeys.includes(event.key)) {
    event.preventDefault()
  }
}

const continueVerification = () => {
  const fullOtp = otpDigits.value.join('')
  if (fullOtp.length === 4 && /^\d{4}$/.test(fullOtp)) {
    alert('OTP submitted: ' + fullOtp)
  } else {
    alert('Please enter the 4-digit code.')
  }
}

const resendCode = () => {
  alert('Resending code...')
}
</script>

<style scoped>
.otp-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #bbbbbb;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 60px auto;
  text-align: center;
}

.otp-fields {
  color: #333;
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.otp-field {
  width: 50px;
  height: 50px;
  border: 1px solid #bbbbbb;
  border-radius: 8px;
  font-size: 20px;
  text-align: center;
  outline: none;
  transition: border-color 0.3s ease;
}

.otp-field:focus {
  border-color: #ffc340;
  box-shadow: 0 0 0 2px rgba(232, 175, 30, 0.2);
}

.resend-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.resend-checkbox {
  width: 18px;
  height: 18px;
}

.resend-label {
  font-size: 14px;
  color: #666;
  user-select: none;
}

.resend-link {
  color: #daa520;
  cursor: pointer;
  text-decoration: none;
}

.resend-link:hover {
  text-decoration: underline;
}


</style>
