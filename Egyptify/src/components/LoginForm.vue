<template>
  <form class="w-[400px] bg-transparent px-4">
    <h2 class="text-4xl font-bold text-black mb-2">Log in</h2>
    <p class="text-gray-500 mb-6">Welcome back! Please enter your details</p>

    <!-- E-mail -->
    <div class="mb-4">
      <label class="font-bold text-black block mb-1">E-mail<span class="text-red-500">*</span></label>
      <InputField type="email" placeholder="Enter Your E-mail">
        <template #icon>
          <i class="fas fa-envelope"></i>
        </template>
      </InputField>
    </div>

    <!-- Password -->
    <div class="mb-4">
      <label class="font-bold text-black block mb-1">Password<span class="text-red-500">*</span></label>
      <InputField type="password" placeholder="Enter Your Password">
        <template #icon>
          <i class="fas fa-lock"></i>
        </template>
        <template #suffix-icon>
          <span class="absolute right-3 top-3 text-gray-400">
            <i class="fas fa-eye-slash"></i>
          </span>
        </template>
      </InputField>
      <div class="text-right mt-1">
        <a href="#" class="text-sm text-gray-500 hover:underline">Forget Password ?</a>
      </div>
    </div>

    <!-- Login Button -->
 <BaseButton class="w-full h-[52px] text-lg font-bold text-white bg-yellow-400 hover:bg-yellow-500 rounded-xl shadow">
  Login
</BaseButton>

    <!-- Social -->
    <div class="flex justify-center gap-4 mt-6 text-xl text-gray-600">
      <i class="fab fa-facebook"></i>
      <i class="fab fa-x-twitter"></i>
      <i class="fab fa-google"></i>
    </div>

    <p class="text-center mt-4 text-sm text-gray-500">
      Don’t you have an account?
      <a href="#" class="font-bold text-black hover:underline">Sign Up</a>
    </p>
  </form>
</template>

<script setup>
import InputField from './InputField.vue'
import BaseButton from './BaseButton.vue'
</script>

