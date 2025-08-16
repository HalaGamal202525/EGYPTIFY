 <template>
  <div class="flex h-screen bg-[#fefaf2]">
    <div class="w-full md:w-1/2 flex justify-center items-center p-8">
      <form @submit.prevent="handleReset" class="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
        <h2 class="text-3xl font-bold mb-4 text-black text-center">Reset Password</h2>
        <p class="text-center text-gray-500 mb-6">
          Enter your email to receive a reset link
        </p>

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
        <!-- <a href="../OTP">
          Send Reset Link
          </a> -->
          Send Reset Link
        </BaseButton>

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

   <div class="hidden md:block md:w-1/2 bg-gray-100">
      <img
        src="../../assets/signup .png"
        alt="Password reset visual"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputField from '../../components/InputField.vue'
import BaseButton from '../../components/BaseButton.vue'

import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

const email = ref('')
const message = ref('')
const error = ref('')

const handleReset = async () => {
  const auth = getAuth()
  try {
    await sendPasswordResetEmail(auth, email.value)
    message.value = 'Password reset email sent! Check your inbox.'
    error.value = ''
  } catch (err) {
    message.value = ''
    error.value = err.message
  }
}
</script>


