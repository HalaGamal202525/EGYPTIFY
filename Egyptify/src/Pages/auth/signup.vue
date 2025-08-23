<template>
  <div class="flex flex-col md:flex-row h-full bg-[#fefaf2]">

    <div class="w-full md:w-1/2 h-1/2 md:h-full bg-white flex justify-center items-center p-6 md:p-8">
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

    <div class="w-full md:w-1/2 h-1/2 md:h-full bg-gray-100">
      <img
        src="../../assets/egyptian-hieroglyphs-wall.jpg"
        alt="Signup visual"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="fixed inset-0 bg-gray-400 flex items-center justify-center z-50 model"
      v-if="showModal"
    >
      <div
        class="bg-white p-8 rounded-xl w-full max-w-md flex items-center justify-center flex-col text-center shadow-lg"
      >
        <h2 class="text-2xl font-bold mb-4">Welcome!</h2>
        <p class="mb-6">You’ve successfully logged in. Let’s plan your trip!</p>
        <BaseButton @click="gotohome" class="px-4 py-2 text-white rounded-lg">
          Start
        </BaseButton>
      </div>
    </div>
    <div v-if="showErrorModal" class="fixed inset-0 model flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white border-l-4 border-red-500 text-red-700 px-6 py-4 rounded-lg shadow-lg w-96 animate-fade-in">
        <div class="flex justify-between items-center mb-3">
          <h3 class="font-bold text-lg flex items-center gap-2">
            <i class="fas fa-exclamation-circle text-red-500"></i>
            Failed to Login
          </h3>
          <button
            @click="showErrorModal = false"
            class="text-red-500 text-xl font-bold hover:text-red-700 transition"
          >
            &times;
          </button>
        </div>
        <p class="text-sm">Email already exists. Please try another one.</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import AuthForm from '../../components/AuthForm.vue'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import BaseButton from '../../components/BaseButton.vue';
import { auth } from "../../firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from '../../data/signupstore'
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const showModal = ref(false);
const showErrorModal = ref(false);
const router = useRouter();
const userStore = useUserStore()

const gotohome = () => {
  router.push("/")
}

async function handleSignUp({ username, email, password }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Corrected code: Use updateProfile to set the user's displayName
    await updateProfile(user, {
      displayName: username,
    });

    // Save user data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email,
    });

    userStore.setUserData({
      username: username,
      email: email,
    });

    showModal.value = true;
  } catch (error) {
    console.error("Signup error:", error); // Log the error for debugging
    showErrorModal.value = true;
  }
}
</script>

<style scoped>
.model {
  background-color: rgba(128, 128, 128, 0.329);
}
</style>