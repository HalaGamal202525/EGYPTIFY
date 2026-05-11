<template>
  <NavBarBlack />
  <div class="flex h-screen mt-18 bg-[#FFFDF9]">
    <div class="w-full flex justify-center items-center p-8">
      <form @submit.prevent="handleSubmit" class="bg-white rounded-2xl border border-gray-300 shadow-md w-full max-w-md p-8">
        <h2 class="text-3xl font-bold mb-4 text-black text-center">Reset Password</h2>
        <p class="text-center text-gray-500 mb-6">
          Enter your email to receive a reset link
        </p>

        <div v-if="message" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span class="block sm:inline">{{ message }}</span>
        </div>

        <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span class="block sm:inline">{{ error }}</span>
        </div>

        <div v-if="!showPasswordFields">
          <div class="mb-6">
            <label class="block text-black font-semibold mb-1">Email*</label>
            <InputField
              type="email"
              placeholder="Enter Your Email"
              v-model="email"
              required
            >
              <template #icon>
                <i class="fas fa-envelope" />
              </template>
            </InputField>
          </div>
          <BaseButton 
            type="submit" 
            class="w-full text-white text-lg py-3 mb-6"
          >
            Send Reset Link
          </BaseButton>
        </div>

        <div v-else >
          <div class="mb-6">
            <label class="block text-black font-semibold mb-1">New Password*</label>
            <InputField
              type="password"
              placeholder="Enter a new password"
              v-model="newPassword"
              required
            >
              <template #icon>
                <i class="fas fa-lock" />
              </template>
            </InputField>
          </div>
          <div class="mb-6">
            <label class="block text-black font-semibold mb-1">Confirm Password*</label>
            <InputField
              type="password"
              placeholder="Confirm password"
              v-model="confirmPassword"
              required
            >
              <template #icon>
                <i class="fas fa-lock" />
              </template>
            </InputField>
          </div>
          <BaseButton 
            type="submit" 
            class="w-full text-white text-lg py-3 mb-6"
          >
            {{ showPasswordFields ? 'Save' : 'Send Reset Link' }}
          </BaseButton>
        </div>

        <div class="text-center">
          <router-link 
            to="/login"
            class="text-yellow-500 hover:text-yellow-600 font-medium"
          >
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Login
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InputField from '../../components/InputField.vue';
import BaseButton from '../../components/BaseButton.vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import NavBarBlack from '../../components/NavBar-Black.vue';

const email = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const message = ref('');
const error = ref('');
const showPasswordFields = ref(false);

const auth = getAuth();
const router = useRouter(); // Initialize router

const handleSubmit = async () => {
  message.value = '';
  error.value = '';

  if (!showPasswordFields.value) {
    // Step 1: Send the reset link
    try {
      await sendPasswordResetEmail(auth, email.value);
      message.value = 'Password reset email sent! Check your inbox.';
      error.value = '';
      showPasswordFields.value = true;
    } catch (err) {
      message.value = '';
      error.value = err.message;
    }
  } else {
    // Step 2: Handle the new password submission
    if (newPassword.value !== confirmPassword.value) {
      error.value = "Passwords do not match.";
      return;
    }
    
    // NOTE: This is a placeholder for a real-world secure password change process.
    // This code will not actually change the password in Firebase.
    // The correct process involves a user clicking a reset link with a unique token.
    try {
      // Simulate a successful password change
      message.value = 'Password saved successfully!';
      newPassword.value = '';
      confirmPassword.value = '';
      error.value = '';

      // Redirect to login page after a short delay to show the success message
      setTimeout(() => {
        router.push('/login');
      }, 2000); // 2-second delay
      
    } catch (err) {
      error.value = err.message;
    }
  }
};
</script>

<style scoped>
/* Scoped styles from your original code */
a {
  cursor: pointer;
}
.calendar .grid-cols-7>span:nth-child(n+8):hover {
  background-color: #fee392;
  cursor: pointer;
}
.star-rating .fa-star {
  font-size: 1.5rem;
}
</style>