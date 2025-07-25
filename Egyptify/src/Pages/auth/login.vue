 <template>
  <div class="flex h-screen bg-[#fefaf2] ">
   
    <div class="w-1/2 flex justify-center items-center p-8">
      <AuthForm
        formTitle="Log in"
        buttonLabel="Login"
        :showUsername="false"
        :showConfirmPassword="false"
        :showForgotPassword="true"
        @submit="handleLogin"
      />
    </div>

    
    <div class="w-1/2 hidden md:block">
      <img
        src="../../assets/signup .png"
        alt="Login visual"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import AuthForm from '../../components/AuthForm.vue'

function handleLogin() {
  alert('Login submitted')
}
</script> 









