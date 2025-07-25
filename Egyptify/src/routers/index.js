import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Pages/auth/login.vue'
import Hala from '../Pages/Hala.vue'
import Home from '../Pages/home.vue'
import Tabs from '../Pages/auth/tabs.vue'
import DropdownMenu from '../Pages/auth/DropdownDemo.vue'


   
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/Hala',
    name: 'Hala',
    component: Hala
  },
  { path: '/tabs', component: Tabs },

  {
  path: '/dropdownDemo',
  name: 'DropdownDemo',
  component: DropdownMenu
},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
