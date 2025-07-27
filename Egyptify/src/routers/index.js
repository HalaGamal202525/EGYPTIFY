import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Pages/auth/login.vue'
import Hala from '../Pages/Hala.vue'
import Tabs from '../Pages/auth/tabs.vue'
import DropdownMenu from '../Pages/auth/DropdownDemo.vue'
import Signup from '../Pages/auth/signup.vue'
import Sara from '../Pages/sara.vue'
import Home from '../Pages/home.vue'
import ForgotPassword from '../Pages/auth/ForgotPassword.vue'
import OTPPage from '../Pages/OTP.vue'
import ExplorePage from '../Pages/ExplorePage.vue'
import BlogPage from '../Pages/BlogsPage.vue'
import BlogDetailPage from '../Pages/BlogDetails.vue'
import Transportation from '../Pages/Transportation.vue'
import NavBarMenu from '../Pages/auth/NavBarMenu.vue'
import TripPlanner from '../Pages/TripPlanner.vue'
import Activity from "../Pages/activity/tabactivity.vue"
import Historical from '../Pages/activity/historicalactivity.vue'
import Natural from '../Pages/activity/natural.vue'
import Entertainment from '../Pages/activity/entertainment.vue'
import Food from '../Pages/activity/food.vue'
import profilePersonalDetails from '../Pages/profile-personal-details.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/auth/Forgot-Password', component: ForgotPassword },

  { path: '/OTP', component: OTPPage },
  {
    path: '/tripplanner',
    name: 'TripPlanner',
    component: TripPlanner
  },   
  {
    path: '/profile-personal-details',
    name: 'ProfilePersonalDetails',
    component: profilePersonalDetails
  },
  
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
   { path: '/NavBarMenu', component: NavBarMenu },

  {
    path: '/activity',
    name: 'Activity',
    component: Activity,
    children: [
{ path: 'historical', component: Historical },
      { path: 'natural', component: Natural },
      { path: 'entertainment', component: Entertainment },
      { path: 'food', component: Food },
      { path: '/', redirect: 'historical' } // التب الإفتراضي
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
