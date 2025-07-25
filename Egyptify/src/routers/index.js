import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Pages/auth/login.vue'
import Hala from '../Pages/Hala.vue'
import Home from '../Pages/home.vue'
import Signup from '../Pages/auth/signup.vue'
   
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {path: '/Signup', component: Signup},
  {
    path: '/Hala',
    name: 'Hala',
    component: Hala
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
