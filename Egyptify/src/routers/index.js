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
import  profilePersonalDetails from "../Pages/profile-personal-details.vue"
import aboutUs from '../Pages/About-Us.vue'
import Map from '../Pages/Map.vue'
import HistoricalDetail from '../Pages/activity/place details/historical/place detailspage.vue'
import NaturalDetail from '../Pages/activity/place details/natural/place detailspage.vue'
import EntertainmentDetail from '../Pages/activity/place details/Entertainment/place detailspage.vue'
import Roomtype from "../Pages/Roomtype.vue"
// import offergrid from "../Pages/offer/gridpage.vue"
import offergrid from "../Pages/offer/offerpage.vue"
import HotelPage from '../Pages/HotelPage.vue'
import UserReview from '../Pages/UserReview.vue'
import DestinationPage from '../Pages/DestinationPage.vue'
import form from "../Pages/payment/paymentform.vue"
import payment from "../Pages/payment/payment.vue"
import searchresult from '../Pages/searchresult.vue'
import TransportationBooking from "../Pages/TransportationBooking.vue"
import PassengerInfo from '../Pages/PassengerInfo.vue'
import TransportationPayment from '../Pages/TransportationPayment.vue'
import TransportationConfirmation from '../Pages/TransportationConfirmation.vue'
import DestinationDetailsPage from '../Pages/DestinationDetailsPage.vue'

const routes = [
  { path: '/', component: Home },{path:"/search-results",component:searchresult},
  { path: '/login', component: Login },
  { path: '/auth/Forgot-Password', component: ForgotPassword },
  { path: '/hotelpage', component: HotelPage },

  { path: '/OTP', component: OTPPage },
    { path: '/form', component: form },
      { path: '/payment', component: payment },


  {
    path: '/tripplanner',
    name: 'TripPlanner',
    component: TripPlanner
  },  
  {
    path: '/profile',
    name: 'ProfilePersonalDetails',
    component: profilePersonalDetails
  },
  
  { path: '/about-us', component: aboutUs},
  { path: '/map', component: Map },

  { path: '/Signup', component: Signup },
  { path: '/explore', component: ExplorePage },
  { path: '/blogs', component: BlogPage },
   {
    path: '/blogs/:id',
    name: 'blogdetail',
    component: BlogDetailPage
  },
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

  },
  {
    path:"/offerpage",component:offergrid
  },
  {
  path: '/user-review',
  name: 'User Review',
  component: UserReview
},
{
  path: '/destination',
  name: 'Destination Page',
  component: DestinationPage
},
{
  path: '/transportation-booking',
  name: '/TransportationBooking',
  component: TransportationBooking
},
{
  path: '/passenger-info',
  name: '/Passenger Info',
  component: PassengerInfo
},
{
  path: '/transportation-payment',
  name: '/Transportation Payment',
  component: TransportationPayment
},
{
  path: '/transportation-confirmation',
  name: '/TransportationConfirmation',
  component: TransportationConfirmation
},
{
  path: '/destination/:slug',
  name: '/DestinationDetails',
  component: DestinationDetailsPage
},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
