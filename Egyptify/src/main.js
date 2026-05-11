import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routers/index';
import * as LucideIcons from 'lucide-vue-next';
import { createPinia } from 'pinia';
import "flag-icons/css/flag-icons.min.css"; 
import { useThemeStore } from './data/themeStore';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useUserStore } from "./data/signupstore";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia); 
app.use(router);

// The theme store is now initialized automatically when it's created.
const themeStore = useThemeStore();

app.mount('#app');

for (const [key, component] of Object.entries(LucideIcons)) {
  app.component(key, component);
}

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
    userStore.setUserData({});
    localStorage.removeItem("userData");
  }
});