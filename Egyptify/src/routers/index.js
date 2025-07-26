import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Pages/auth/login.vue'
import Hala from '../Pages/Hala.vue'
import Tabs from '../Pages/auth/tabs.vue'
import DropdownMenu from '../Pages/auth/DropdownDemo.vue'
import Signup from '../Pages/auth/signup.vue'
import Sara from '../Pages/sara.vue'
import Home from '../Pages/Home.vue'
import ForgotPassword from '../Pages/auth/ForgotPassword.vue'
import OTPPage from '../Pages/OTP.vue'
import ExplorePage from '../Pages/ExplorePage.vue'
import BlogPage from '../Pages/BlogsPage.vue'
import BlogDetailPage from '../Pages/BlogDetails.vue'
import Transportation from '../Pages/Transportation.vue'
import TripPlanner from '../Pages/TripPlanner.vue'


   
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/auth/Forgot-Password', component: ForgotPassword },
{ path: '/OTP', component: OTPPage },

  { path: '/Signup', component: Signup },
  { path: '/explore', component: ExplorePage },
  { path: '/blog', component: BlogPage },
  {path: '/blogdetail', component: BlogDetailPage},
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
   {
    path: '/Sara',
    name: 'Sara',
    component: Sara
  },
  {
    path: '/transportation',
    name: 'Transportation',
    component: Transportation
  },
    {
    path: '/tripplanner',
    name: 'TripPlanner',
    component: TripPlanner
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
