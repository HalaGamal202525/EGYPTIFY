import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Pages/auth/login.vue'
import Hala from '../Pages/Hala.vue'
import Home from '../Pages/home.vue'
import Signup from '../Pages/auth/signup.vue'
import Sara from '../Pages/sara.vue'
import ForgotPassword from '../Pages/auth/ForgotPassword.vue'
import otp from '../Pages/OTP.vue'

   
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/auth/Forgot-Password', component: ForgotPassword },
  {path: '/OTP', component: otp },

  {path: '/Signup', component: Signup},
  {
    path: '/Hala',
    name: 'Hala',
    component: Hala
  },
   {
    path: '/Sara',
    name: 'Sara',
    component: Sara
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
