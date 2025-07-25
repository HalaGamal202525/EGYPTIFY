<template>
  <form class="bg-white rounded-xl w-full max-w-md p-8">
    <h2 class="text-3xl font-bold mb-4 text-black text-center">
      {{ title }}
    </h2>
    <p class="text-center text-gray-500 mb-6">
      {{ subtitle }}
    </p>

    <!-- Email -->
    <div class="mb-4">
      <label class="block text-black font-semibold mb-1">E-mail*</label>
      <InputField
        type="email"
        placeholder="Enter Your E-mail"
      >
        <template #icon>
          <i class="fas fa-envelope" />
        </template>
      </InputField>
    </div>

    <!-- Password -->
    <div class="mb-4">
      <label class="block text-black font-semibold mb-1">Password*</label>
      <InputField
        type="password"
        placeholder="Enter Your Password"
      >
        <template #icon>
          <i class="fas fa-lock" />
        </template>
        <template #suffix-icon>
          <i class="fas fa-eye-slash absolute right-4 top-3 text-gray-400" />
        </template>
      </InputField>
    </div>

    <!-- Forgot Password -->
    <div class="text-right mt-1 mb-6">
      <router-link
        to="/auth/forgot-password"
        class="text-sm text-gray-500 hover:text-yellow-600"
      >
        Forgot Password?
      </router-link>
    </div>

    <!-- Button -->
    <BaseButton class="w-full text-white text-lg py-3 mb-6">
      {{ buttonText }}
    </BaseButton>

    <!-- Social Icons -->
    <div v-if="showSocialIcons" class="flex justify-center gap-4">
      <button type="button" class="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
        <i class="fab fa-google text-gray-600"></i>
      </button>
      <button type="button" class="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
        <i class="fab fa-facebook-f text-gray-600"></i>
      </button>
      <button type="button" class="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
        <i class="fab fa-twitter text-gray-600"></i>
      </button>
    </div>

    <!-- Sign Up Link -->
    <div v-if="showSignUpLink" class="text-center mt-6">
      <span class="text-gray-500">Don't you have an account?</span>
      <router-link to="/auth/signup" class="text-yellow-400 font-semibold ml-1">Sign Up</router-link>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Log in' },
  subtitle: { type: String, default: 'Welcome back! Please enter your details' },
  buttonText: { type: String, default: 'Login' },
  showUsername: { type: Boolean, default: false },
  showConfirmPassword: { type: Boolean, default: false },
  showForgotPassword: { type: Boolean, default: true },
  showSocialIcons: { type: Boolean, default: true },
  showSignUpLink: { type: Boolean, default: true }
})

import InputField from './InputField.vue'
import BaseButton from './BaseButton.vue'
</script>