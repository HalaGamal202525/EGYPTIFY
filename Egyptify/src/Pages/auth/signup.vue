<!-- src/pages/auth/Signup.vue -->
<template>
  <div class="flex h-screen justify-center items-center bg-[#fefaf2] px-4">
    <AuthForm
      formTitle="Sign Up"
      buttonLabel="Register"
      :showUsername="true"
      :showConfirmPassword="true"
      :showForgotPassword="false"
      @submit="handleSignup"
    />
  </div>
</template>

<script setup>
import AuthForm from '../../components/AuthForm.vue'

function handleSignup() {
  alert('Signup submitted') // replace with actual logic
}
</script>