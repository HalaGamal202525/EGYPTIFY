<template>
   <form class="bg-white rounded-xl w-full max-w-md p-8">
    <h2 class="text-3xl font-bold mb-4 text-black text-center">
      {{ title }}
    </h2>
    <p class="text-center text-gray-500 mb-6">
      {{ subtitle }}
    </p>

    <!-- Username -->
    <div v-if="showUsername" class="mb-4">
      <label class="block text-black font-semibold mb-1">User Name*</label>
      <InputField
        type="text"
        placeholder="Enter Your User Name"
      >
        <template #icon>
          <i class="fas fa-user" />
        </template>
      </InputField>
    </div>

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

    <!-- Forgot Password (only for Login) -->
    <div v-if="showForgotPassword" class="text-right mt-1">
      <router-link
        to="/auth/forgot-password"
        class="text-sm text-gray-500 hover:text-yellow-600"
      >
        Forget Password?
      </router-link>
    </div>

    <!-- Confirm Password (only for Sign Up) -->
    <div v-if="showConfirmPassword" class="mb-6">
      <label class="block text-black font-semibold mb-1">Confirm Password*</label>
      <InputField
        type="password"
        placeholder="Confirm Your Password"
      >
        <template #icon>
          <i class="fas fa-lock" />
        </template>
        <template #suffix-icon>
          <i class="fas fa-eye-slash absolute right-4 top-3 text-gray-400" />
        </template>
      </InputField>
    </div>

    <!-- Button -->
    <BaseButton class="w-full text-white text-lg py-3">
      {{ buttonText }}
    </BaseButton>

     <!-- <div v-if="showSocialIcons" class="flex justify-center gap-4">
      <button type="button" class="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
        <i class="fab fa-google text-gray-600"></i>
      </button>
      <button type="button" class="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
        <i class="fab fa-facebook-f text-gray-600"></i>
      </button>
      <button type="button" class="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
        <i class="fab fa-twitter text-gray-600"></i>
      </button>
    </div> -->
    <div v-if="showSocialIcons" class="flex justify-center gap-4 mt-6">
   
    <button type="button" class="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all">
      <i class="fab fa-google text-red-500 text-xl"></i>
    </button>
    
    <button type="button" class="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all">
      <i class="fab fa-facebook-f text-blue-600 text-xl"></i>
    </button>
    
    <button type="button" class="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all">
      <i class="fab fa-twitter text-blue-400 text-xl"></i>
    </button>
  </div>

    <div v-if="showSignUpLink" class="text-center mt-6">
      <span class="text-gray-500">Don't you have an account?</span>
      <router-link to="/auth/signup" class="text-yellow-400 font-semibold ml-1">Sign Up</router-link>
    </div>

    <div v-if="showAuthLink" class="text-center mt-6">
      <span class="text-gray-500">{{ authLinkText }}</span>
      <router-link :to="authLinkRoute" class="text-yellow-400 font-semibold ml-1">
        {{ authLinkAction }}
      </router-link>
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
  showForgotPassword: { type: Boolean, default: false },
  showSocialIcons: { type: Boolean, default: true },
  showAuthLink: { type: Boolean, default: true },
  authLinkText: { type: String, default: "Don't you have an account?" },
  authLinkAction: { type: String, default: 'Sign up' },
  authLinkRoute: { type: String, default: '/signup' }
})


import InputField from './InputField.vue'
import BaseButton from './BaseButton.vue'
</script>