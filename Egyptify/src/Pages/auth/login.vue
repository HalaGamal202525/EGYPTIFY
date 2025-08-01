 <template>
  <div class="flex h-screen bg-[#fefaf2] ">
  
   
    <div class="w-full md:w-1/2 h-full flex justify-center items-center p-8">
      <AuthForm
        formTitle="Log in"
        buttonLabel="Log in"
        :showUsername="false"
        :showConfirmPassword="false"
        :showForgotPassword="true"
        @submit="handleLogin"
      />
    </div>

    
    <div class=" md:block md:w-1/2 bg-gray-100">
      <img
        src="../../assets/signup .png"
        alt="Login visual"
        class="w-full h-full object-cover"
      />
    </div>

    <div v-if="showForgotPassword" class="text-right mt-1 mb-4">
    <router-link
      to="/auth/forgot-password"
      class="text-sm text-yellow-500 hover:text-yellow-600 font-medium"
    >
      Forgot Password?
    </router-link>
  </div>
    
  </div>
</template>

<script setup>
import AuthForm from '../../components/AuthForm.vue'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

async function handleLogin({ email, password }) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    router.push("/"); // او الصفحة اللي عايزاها
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}
// function handleLogin() {
// router.push("../home.vue")}
</script> 








