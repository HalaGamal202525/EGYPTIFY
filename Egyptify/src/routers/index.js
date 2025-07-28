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
import Activity from "../Pages/activity/tabactivitypage.vue"
import Historical from '../Pages/activity/historicalactivity.vue'
import Natural from '../Pages/activity/natural.vue'
import Entertainment from '../Pages/activity/entertainment.vue'
import Food from '../Pages/activity/food.vue'
import TermsOfUse from '../Pages/Terms-of-use.vue'
import FoodDetail from '../Pages/activity/place details/food/place detailspage.vue'

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
  // {
  //   path: '/profile-personal-details',
  //   name: 'ProfilePersonalDetails',
  //   component: profilePersonalDetails
  // },
  
  { path: '/Signup', component: Signup },
  { path: '/explore', component: ExplorePage },
  { path: '/blog', component: BlogPage },
  {path: '/blogdetail', component: BlogDetailPage},
  {
    path: '/Hala',
    name: 'Hala',
    component: Hala
  },

  { path: '/tabs', component: Tabs },  { path: '/fooddetail', component: FoodDetail },


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
  },

  {
    path:'/Terms-of-use',
    name:'Terms of use',
    component: TermsOfUse

  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
