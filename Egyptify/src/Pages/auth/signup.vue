<template>
  <div class="flex flex-col md:flex-row h-screen bg-[#fefaf2]">

   
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
  <div v-if="showErrorModal" class="fixed inset-0 flex items-center justify-center bg-black model z-50">
    <div class="bg-pink-100 border border-pink-400 text-pink-800 px-6 py-4 rounded-lg shadow-lg w-80">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-bold">Feild to login</h3>
        <button @click="showErrorModal = false" class="text-pink-800 font-bold">&times;</button>
      </div>
      <p> Eamil  Exists.</p>
    </div>
  </div> 
  </div>
</template>

<script setup>
import AuthForm from '../../components/AuthForm.vue'
import { createUserWithEmailAndPassword } from "firebase/auth";
import BaseButton from '../../components/BaseButton.vue';
import { auth } from "../../firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";

const showModal = ref(false);
const showErrorModal = ref(false);
const router = useRouter();
const gotohome = () => {
  showModal.value = true;
  router.push("/");
}
async function handleSignUp({ email, password }) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    showModal.value = true;
  } catch (error) {
showErrorModal.value = true;    }
}
</script>


<style scoped>
.model {
  background-color: rgba(128, 128, 128, 0.329);
}
</style>