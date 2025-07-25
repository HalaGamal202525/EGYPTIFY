import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Pages/auth/login.vue'
import Hala from '../Pages/Hala.vue'
import Signup from '../Pages/auth/signup.vue'
import Sara from '../Pages/sara.vue'
import Home from '../Pages/Home.vue'
import ForgotPassword from '../Pages/auth/ForgotPassword.vue'
import OTPPage from '../Pages/OTP.vue'
import ExplorePage from '../Pages/ExplorePage.vue'

   
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/auth/Forgot-Password', component: ForgotPassword },
{ path: '/OTP', component: OTPPage },

  { path: '/Signup', component: Signup },
  {path: '/explore', component: ExplorePage},
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
