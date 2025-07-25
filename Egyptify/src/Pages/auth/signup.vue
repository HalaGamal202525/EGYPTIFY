<template>
  <div class="flex h-screen bg-[#fefaf2]">
   
    <div class="w-full md:w-1/2 flex justify-center items-center p-8">
      <AuthForm
        title="Sign Up"
        subtitle="Welcome to Egyptify! Please enter your details"
        buttonText="Sign Up"
        :showUsername="true"
        :showConfirmPassword="true"
        :showForgotPassword="false"
        :showSocialIcons="true"
        authLinkText="Already have an account?"
        authLinkAction="Log in"
        authLinkRoute="/auth/login"
      />
    </div>

   
    <div class="hidden md:block md:w-1/2 bg-gray-100">
      <img
        src="../../assets/signup .png"
        alt="Signup visual"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import AuthForm from '../../components/AuthForm.vue'
</script>