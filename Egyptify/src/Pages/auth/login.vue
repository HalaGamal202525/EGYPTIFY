<template>
  <div class="flex flex-col md:flex-row h-screen ">
    <div
      class="w-full md:w-1/2 h-1/2 md:h-full bg-white flex justify-center items-center p-6 md:p-8"
    >
      <AuthForm
        formTitle="Log in"
        buttonLabel="Log in"
        :showUsername="false"
        :showConfirmPassword="false"
        :showForgotPassword="true"
        @submit="handleLogin"
      />
    </div>

    <div class="w-full md:w-1/2 h-1/2 md:h-full bg-gray-100">
      <img
      
        src="../../assets/egyptian-hieroglyphs-wall.jpg"
        alt="Login visual"
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
      <p>Email or password incorrect.</p>
    </div>
  </div> 
    <div
      v-if="showForgotPassword"
      class="text-center md:text-right mt-2 md:mt-1 mb-4 px-4"
    >
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
import { onMounted, ref } from "vue";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { useUserStore } from "../../data/signupstore";
import AuthForm from "../../components/AuthForm.vue";
import BaseButton from "../../components/BaseButton.vue";

const router = useRouter();
const userStore = useUserStore();

const showModal = ref(false);
const showErrorModal = ref(false);

onMounted(async () => {
  // تسجيل الخروج ومسح البيانات
  await signOut(auth);
  userStore.clearUserData();
  console.log("تم تسجيل الخروج ومسح بيانات المستخدم");
});

const gotohome = () => {
  router.push("/");
};

async function handleLogin({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const docSnap = await getDoc(doc(db, "users", user.uid));
    if (docSnap.exists()) {
      userStore.setUserData(docSnap.data());
      showModal.value = true;

      const formElement = document.querySelector("form");
      if (formElement) formElement.reset();
    } else {
      console.log("No user profile found!");
    }
  } catch (error) {
    console.error("Login failed:", error);
    showErrorModal.value = true;
  }
}

// إلغاء onAuthStateChanged عشان ما يرجعش بيانات قديمة
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docSnap = await getDoc(doc(db, "users", user.uid));
    if (docSnap.exists()) {
      userStore.setUserData(docSnap.data());
    } else {
      userStore.clearUserData();
    }
  }
});


</script>


<style scoped>
.model {
  background-color: rgba(128, 128, 128, 0.329);
}
</style>
