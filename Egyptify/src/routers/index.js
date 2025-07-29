import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Pages/auth/login.vue'
import Hala from '../Pages/Hala.vue'
import Tabs from '../Pages/auth/tabs.vue'
import DropdownMenu from '../Pages/auth/DropdownDemo.vue'
import Signup from '../Pages/auth/signup.vue'
import Home from '../Pages/home.vue'
import ForgotPassword from '../Pages/auth/ForgotPassword.vue'
import OTPPage from '../Pages/OTP.vue'
import ExplorePage from '../Pages/ExplorePage.vue'
import BlogPage from '../Pages/BlogsPage.vue'
import BlogDetailPage from '../Pages/BlogDetails.vue'
import Transportation from '../Pages/Transportation.vue'
import NavBarMenu from '../Pages/auth/NavBarMenu.vue'
import TripPlanner from '../Pages/TripPlanner.vue'
import ContactUs from '../Pages/ContactUs.vue'
import Activity from "../Pages/activity/tabactivitypage.vue"
import Historical from '../Pages/activity/historicalactivity.vue'
import Natural from '../Pages/activity/natural.vue'
import Entertainment from '../Pages/activity/entertainment.vue'
import Food from '../Pages/activity/food.vue'
import TermsOfUse from '../Pages/Terms-of-use.vue'
import FoodDetail from '../Pages/activity/place details/food/place detailspage.vue'
import HistoricalDetail from '../Pages/activity/place details/historical/place detailspage.vue'
import NaturalDetail from '../Pages/activity/place details/natural/place detailspage.vue'
import EntertainmentDetail from '../Pages/activity/place details/Entertainment/place detailspage.vue'
import Roomtype from "../Pages/Roomtype.vue"
import offergrid from "../Pages/offer/gridpage.vue"
import  profilePersonalDetails from "../Pages/profile-personal-details.vue"
import HotelPage from '../Pages/HotelPage.vue'

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

// activity detail
    { path: '/fooddetail', component: FoodDetail },
    { path: '/historicaldetail', component: HistoricalDetail },
   { path: '/naturaldetail', component: NaturalDetail },
    { path: '/entertainmentdetail', component: EntertainmentDetail },


  {
  path: '/dropdownDemo',
  name: 'DropdownDemo',
  component: DropdownMenu
},
  {
    path:"/roomtype",component:Roomtype
  },
  {
    path: '/transportation',
    name: 'Transportation',
    component: Transportation
  },
   { path: '/NavBarMenu', component: NavBarMenu },
    {
    path: '/tripplanner',
    name: 'TripPlanner',
    component: TripPlanner
  },
  {
  path: '/contact',
  name: 'ContactUs',
  component: ContactUs
},

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
