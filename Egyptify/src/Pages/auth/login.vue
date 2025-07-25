<template>
  <div class="flex h-screen bg-[#fefaf2] justify-center items-center px-6">
    <div class="flex items-center bg-white shadow-md overflow-hidden max-w-6xl w-full">
      <div class="w-1/2 p-10">
        <LoginForm />
      </div>
      <div class="w-1/2 hidden md:block h-full">
        <div class="w-full h-full">
          <img
            src="../../assets/signup .png"
            alt="Login visual"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from '../../components/LoginForm.vue'
</script>
