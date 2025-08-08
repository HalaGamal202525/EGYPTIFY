<template>
  <form class="bg-white rounded-xl w-full max-w-md p-8">
    <h2 class="text-3xl font-bold mb-4 text-gray-900 text-center">
      {{ title }}
    </h2>
    <p class="text-center text-gray-500 mb-6">
      {{ subtitle }}
    </p>

    <!-- Username -->
    <div v-if="showUsername" class="mb-4">
      <label class="block text-gray-800 font-semibold mb-1" >User Name*</label>
      <InputField
        v-model="form.username"
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
      <label class="block text-gray-800 font-medium mb-1">E-mail*</label>
      <InputField
        v-model="form.email"
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
      <label class="block text-gray-800 font-semibold mb-1">Password*</label>
      <InputField
        v-model="form.password"
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
      <label class="block text-gray-800 font-semibold mb-1"
        >Confirm Password*</label
      >
      <InputField
        v-model="form.confirmPassword"
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
    <BaseButton
      class="w-full text-white text-lg py-3"
      @click.prevent="handleSubmit"
    >
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
      <div @click="googleLogin"
        class="p-3 w-12 h-12 rounded-full bg-gray-50 flex justify-center items-center shadow-md hover:shadow-lg transition-all"
      >
<i class="fa-brands fa-google text-2xl" style="color: #ffc340;"></i>    
 </div>

      <div
        class="p-3 w-12 h-12 rounded-full bg-gray-50 shadow-md flex justify-center items-center hover:shadow-lg transition-all"
      >
<i class="fa-brands fa-facebook-f text-2xl" style="color: #ffc340;"></i>
     </div>

      <div
     
        class="p-3 w-12 h-12 rounded-full bg-gray-50 shadow-md  flex justify-center items-center hover:shadow-lg transition-all"
      >
<i class="fa-brands fa-x-twitter text-2xl" style="color: #ffc340;"></i>
    </div>
    </div>

    <div v-if="showSignUpLink" class="text-center mt-6">
      <span class="text-gray-500">Don't you have an account?</span>
      <router-link to="/auth/signup" class="text-yellow-400 font-semibold ml-1"
        >Sign Up</router-link
      >
    </div>
<!-- Success Modal -->
<div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center bg-pink-100 model z-50">
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

<!-- Error Modal -->
<div v-if="showErrorModal" class="fixed inset-0 flex items-center justify-center bg-pink-100 model z-50">
  <div class="bg-white p-6 rounded-xl shadow-xl text-center w-[300px]">
    <h2 class="text-red-600 text-xl font-bold mb-4">Login Failed</h2>
    <p>Invalid email or password.</p>
    <button @click="showErrorModal = false" class="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Try Again</button>
  </div>
</div>

    <div v-if="showAuthLink" class="text-center mt-6">
      <span class="text-gray-500">{{ authLinkText }}</span>
      <router-link
        :to="authLinkRoute"
        class="text-yellow-400 font-semibold ml-1"
      >
        {{ authLinkAction }}
      </router-link>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";


import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
const showSuccessModal = ref(false);
const showErrorModal = ref(false);
import { useRouter } from "vue-router";

const userName = ref('');
defineProps({
  title: { type: String, default: "Log in" },
  subtitle: {
    type: String,
    default: "Welcome back! Please enter your details",
  },
  buttonText: { type: String, default: "Login" },
  showUsername: { type: Boolean, default: false },
  showConfirmPassword: { type: Boolean, default: false },
  showForgotPassword: { type: Boolean, default: false },
  showSocialIcons: { type: Boolean, default: true },
  showAuthLink: { type: Boolean, default: true },
  authLinkText: { type: String, default: "Don't you have an account?" },
  authLinkAction: { type: String, default: "Sign up" },
  authLinkRoute: { type: String, default: "/signup" },
});
const emit = defineEmits(["submit"]);

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const username = ref('');
const form = ref({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

function handleSubmit() {
  emit("submit", {
    email: form.value.email,
    password: form.value.password,
    confirmPassword: confirmPassword.value,
    username: form.value.username, 
  });
}
const router = useRouter();

const gotohome = () => {
  router.push("/");
};

function googleLogin() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((res) => {
      userName.value = res.user.displayName;
      showSuccessModal.value = true;
    })
    .catch(() => {
      showErrorModal.value = true;
    });
}
import InputField from "./InputField.vue";
import BaseButton from "./BaseButton.vue";
</script>
<style scoped>
.model {
  background-color: rgba(128, 128, 128, 0.329);
}
</style>
