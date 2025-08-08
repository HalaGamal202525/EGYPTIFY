<template>
  <footer class="footer">
    <div class="footer-section logo">
      <img class="logo-img cursor-pointer" src="../assets/logo.png" alt="EGYPTIFY Logo" @click="gotohome" />
      <p class="slogan">"Discover the magic of Egypt"</p>
    </div>

    <div class="footer-section social">
      <h3 class="nowrap">Find Us In Social Media</h3>
      <div class="icons">
        <p><i class="fab fa-instagram"></i></p>
        <p><i class="fab fa-facebook-f"></i></p>
        <p><i class="fab fa-whatsapp"></i></p>
        <p><i class="fab fa-x-twitter"></i></p>
        <p><i class="fab fa-linkedin-in"></i></p>
      </div>
    </div>

    <div class="footer-section links">
      <h4 @click="gotoabout">About Us</h4>
      <ul>
        <li><router-link :to="{ path: '/about-us', hash: '#mission' }">Mission</router-link></li>
        <li><router-link :to="{ path: '/about-us', hash: '#story' }">Story</router-link></li>
        <li><router-link :to="{ path: '/about-us', hash: '#team' }">Team</router-link></li>
        <li><router-link :to="{ path: '/about-us', hash: '#mission' }">Partenrs</router-link></li>
        <li><router-link :to="{ path: '/about-us', hash: '#mission' }">press</router-link></li>
      </ul>
    </div>

    <div class="footer-section links">
      <h4 @click="gotocontact">Contact Us</h4>
      <ul>
        <li><a href="#" @click="gotocontact">Contact</a></li>
        <li><router-link :to="{ path: '/contact', hash: '#form' }">Form</router-link></li>
        <li><router-link :to="{path: '/contact',hash:'#email'}">Email</router-link></li>
        <li><router-link :to="{path: '/contact',hash:'#contactway'}">Social</router-link></li>
        <li><router-link :to="{path: '/contact',hash:'#livechat'}">Livechat</router-link></li>
      </ul>
    </div>

    <div class="footer-section links">
      <h4 @click="gototerms">Policies</h4>
      <ul>
        <li><a href="#" @click="gototerms">FAQ</a></li>
        <li><a href="#" @click="gototerms">Support</a></li>
        <li><a href="#" @click="gototerms">Feedback</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#" @click="gototerms">Terms</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const gotocontact=()=>{
  router.push('./contact')
}

const gotoabout=()=>{
router.push({ path: '/about-us', hash: '#start' });
}
const gototerms=()=>{
router.push({ path: '/Terms-of-use', hash: '#start' });
}
const gotohome=()=>{
  router.push('/')
}

</script>

<style scoped>
.footer {
  background-color: #000424;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  color: white;
  font-size: 1.05rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* لينكات عالشمال */
}

.logo-img {
  width: 180px;
  max-width: 100%; /* يخليه responsive */
  height: auto;
}



.slogan {
  font-style: italic;
  font-size: 1rem;
  text-align: center;
}

h3, h4 {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.nowrap {
  white-space: nowrap; /* علشان العنوان ما ينزلش سطر تاني */
}

.social .icons {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.icons p {
  background-color: #dddddd00;
  border: 1px solid white; /* ستروك أسود */
  border-radius: 50%;
  padding: 10px;
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;
  color: black;
}

.links ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* اللينكات تبقى شمال */
}

.links li {
  margin: 0.25rem 0;
}

.links a {
  text-decoration: none;
  color: white;
  transition: color 0.2s ease;
}

.links a:hover {
  color: #FFC340;
}


</style>
