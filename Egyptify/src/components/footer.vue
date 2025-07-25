<template>
  <footer class="footer">
    <div class="footer-section logo">
      <img class="logo-img" src="../assets/logo.png" alt="EGYPTIFY Logo" />
      <p class="slogan">"Discover the magic of Egypt"</p>
    </div>

    <div class="footer-section social">
      <h3 class="nowrap">Find Us In Social Media</h3>
      <div class="icons">
        <button><i class="fab fa-instagram"></i></button>
        <button><i class="fab fa-facebook-f"></i></button>
        <button><i class="fab fa-whatsapp"></i></button>
        <button><i class="fab fa-x-twitter"></i></button>
        <button><i class="fab fa-linkedin-in"></i></button>
      </div>
    </div>

    <div class="footer-section links">
      <h4>About Us</h4>
      <ul>
        <li><a href="#">Mission</a></li>
        <li><a href="#">Story</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Press</a></li>
      </ul>
    </div>

    <div class="footer-section links">
      <h4>Contact Us</h4>
      <ul>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Form</a></li>
        <li><a href="#">Email</a></li>
        <li><a href="#">Social</a></li>
        <li><a href="#">LiveChat</a></li>
      </ul>
    </div>

    <div class="footer-section links">
      <h4>Policies</h4>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Complaints</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
.footer {
  background-color: #ddd;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  color: black;
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

.icons button {
  background-color: #ddd;
  border: 1px solid black; /* ستروك أسود */
  border-radius: 8px;
  padding: 0.5rem;
  font-size: 1.3rem;
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
  color: black;
  transition: color 0.2s ease;
}

.links a:hover {
  color: #FFC340;
}


</style>
