import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers/index'
import * as LucideIcons from 'lucide-vue-next'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia()) 
app.use(router)
app.mount('#app')
for (const [key, component] of Object.entries(LucideIcons)) {
  app.component(key, component)
}


import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useUserStore } from "./data/signupstore";

const userStore = useUserStore();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docSnap = await getDoc(doc(db, "users", user.uid));
    if (docSnap.exists()) {
      const data = docSnap.data();
      userStore.setUserData(data);

      localStorage.setItem("userData", JSON.stringify(data));
    }
  } else {
    // لو مفيش مستخدم نسجّل خروج
    userStore.setUserData({});
    localStorage.removeItem("userData");
  }
});
