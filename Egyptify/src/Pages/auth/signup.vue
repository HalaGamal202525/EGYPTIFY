<template>
  <div class="flex h-screen bg-[#fefaf2]">
   
    <div class="w-full md:w-1/2 flex justify-center items-center p-8">
      <AuthForm
        title="Sign up"
        subtitle="Welcome to Egyptify! Please enter your details"
        buttonText="Sign up"
        :showUsername="true"
        :showConfirmPassword="true"
        :showForgotPassword="false"
        :showSocialIcons="true"
        authLinkText="Already have an account?"
        authLinkAction="Log in"
        authLinkRoute="/login"
        @submit="handleSignUp"
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "vue-router";

const router = useRouter();

// دي الدالة الصح اللي بتتنفذ عند الضغط على الزر
async function handleSignUp({ email, password }) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Sign up successful!");
    router.push("/"); // غيري الصفحة لو حبيتي
  } catch (error) {
    alert("Sign up failed: " + error.message);
  }
}
</script>
