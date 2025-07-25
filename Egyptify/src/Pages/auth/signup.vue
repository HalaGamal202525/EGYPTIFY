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

    <div class="w-1/2 hidden md:block">
      <img
        src="../../assets/signup .png"
        alt="Login visual"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import AuthForm from '../../components/AuthForm.vue'

function handleSignup() {
  alert('Signup submitted') // replace with actual logic
}
</script>