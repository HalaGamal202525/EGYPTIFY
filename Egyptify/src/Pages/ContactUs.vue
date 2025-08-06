<template>
  <div class="bg-[#FFFDF9]">
    <!-- Navbar -->
    <NavBar />

    <!-- Hero Section -->
    <Hero 
      title="Contact Us" 
      description="Get in touch with us for any inquiries or support" 
      :image="contactHeroImg"

    />

    <!-- Contact Types Section -->
    <section class="py-10 bg-white text-center ml-3">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mx-15 ml-40">
        <div class="border border-[#FFC340] rounded-xl h-40 w-70 shadow">
          <i class="fa-solid fa-clock text-3xl text-[#FFC340] mb-4 mt-4"></i>
          <h3 class="font-bold h-8">24/7 Support</h3>
          <p>Available around the clock for your <br> convenience.</p>
        </div>
        <div class="border border-[#FFC340] rounded-xl h-40 w-70 shadow">
          <i class="fa-solid fa-users text-3xl text-[#FFC340] mb-4 mt-4"></i>
          <h3 class="font-bold h-8">Expert Team</h3>
          <p>Experienced professionals ready to <br> assist.</p>
        </div>
        <div class="border border-[#FFC340] rounded-xl h-40 w-70 shadow">
          <i class="fas fa-headset text-3xl text-[#FFC340] mb-4 mt-4"></i>
          <h3 class="font-bold h-8">Quick Response</h3>
          <p>Fast replies within 2 hours <br> guaranteed.</p>
        </div>
      </div>
    </section>

    
<section class="bg-gray-50 py-10">
  <div class="container mx-auto border border-[#FFC340] rounded-lg mx-50 max-w-6xl">
    <div class="bg-gray-50  px-6 py-4 rounded-t-xl">
      <h2 class="text-xl font-bold mt-3 mb-3"><i class="fa-solid fa-paper-plane fa-lg mr-4" style="color: #FFD43B;"></i>
        Send Us a Message</h2>
      <p class="text-gray-700 mb-3">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

      
    </div>

    <!--border -->
    <div class=" p-6 rounded-b-xl bg-white shadow" id="form">
      <form class="grid grid-cols-1 md:grid-cols-2 gap-4" >
        <!-- Full Name -->
        <div>
          <label class="block mb-1 text-gray-700" style="font-size: 18px !important;">Full Name*</label>
          <input type="text" class="w-full border border-[#FFC340] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC340] shadow" placeholder="Your name" />
        </div>

        <!-- Email Address -->
        <div>
          <label class="block mb-1 text-gray-700" style="font-size: 18px !important;">Email Address*</label>
          <input type="email" class="w-full border border-[#FFC340] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC340] shadow" placeholder="you@example.com" />
        </div>

        <!-- Phone Number -->
        <div>
          <label class="block mb-1 text-gray-700" style="font-size: 18px !important;">Phone Number</label>
          <input type="text" class="w-full border border-[#FFC340] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC340] shadow" placeholder="+20..." />
        </div>

        <!-- Subject -->
        <div>
          <label class="block mb-1 text-gray-700" style="font-size: 18px !important;">Subject*</label>
          <input type="text" class="w-full border border-[#FFC340] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC340] shadow" placeholder="Subject" />
        </div>

        <!-- Message-->
        <div class="col-span-1 md:col-span-2">
          <label class="block mb-1 text-gray-700" style="font-size: 18px !important;">Message*</label>
          <textarea class="w-full border border-[#FFC340] p-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#FFC340] shadow" placeholder="Write your message..."></textarea>
        </div>

        <!-- Send -->
        <div class="col-span-1 md:col-span-2">
          <button class="w-full bg-[#FFC340] text-white py-3 rounded-lg font-semibold hover:bg-[#E6AD36] transition cursor">
            <i class="fa-solid fa-paper-plane fa-lg" style="color: white;"></i>
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

<!-- Contact Info -->
    <section class="bg-white py-10" id="email">
      <div class="container mx-auto  border border-[#FFC340] rounded-lg max-w-6xl p-6 shadow-md" >
        <h2 class="text-xl font-bold mb-10 px-15">Contact Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div><i class="fas fa-envelope mr-2 text-blue-500"></i>info@egyptify.com</div>
          <div><i class="fas fa-phone mr-2 text-green-500"></i>+20 1234567891</div>
          <div><i class="fas fa-map-marker-alt mr-2 text-red-500"></i>Cairo, Egypt</div>
        </div>
      </div>
    </section>

    <!-- Section: Connect With Us -->
<section class="bg-white py-10" id="contactway">
  <div class="max-w-6xl mx-auto border border-[#FFC340] rounded-lg shadow-md p-6" >
    <h2 class="text-xl font-bold py-2 px-15 rounded mb-4 inline-block">
      Connect With Us
    </h2>
    <p class="mb-6 text-gray-600 text-center">Follow us on social media for the latest updates</p>
    
      <div class="flex justify-center gap-8 text-2xl text-gray-600">
        <a href="#" class="hover:opacity-80 transition">
          <i class="fab fa-facebook" style="color: #1877F2;"></i>
        </a>
        <a href="#" class="hover:opacity-80 transition">
          <i class="fab fa-instagram" style="color: #E1306C;"></i>
        </a>
        <a href="#" class="hover:opacity-80 transition">
          <i class="fab fa-x-twitter" style="color: #000;"></i>
        </a>
        <a href="#" class="hover:opacity-80 transition">
          <i class="fab fa-linkedin" style="color: #0077B5;"></i>
        </a>
      </div>

  </div>
</section>



<!-- Live Support Section -->
<section class="bg-white py-10" id="livechat">
  <div class="max-w-6xl mx-auto px-4">
    <div class="bg-yellow-50 rounded-xl p-6 shadow-md text-center">
      <!-- Icon -->
      <div class="text-blue-600 text-5xl mb-4">
        <i class="fas fa-headset"></i>
      </div>

      <!-- Text -->
      <h3 class="text-2xl font-bold text-gray-800 mb-2">Live Support</h3>
      <p class="text-gray-600 mb-6">
        Our support team is available to help you right now!      
      </p>

      <!-- Button Full Width -->
      <button class="bg-[#FFC340] text-white w-full py-3 rounded-lg hover:bg-[#E6AD36] transition cursor-pointer">
        Contact Support
      </button>
    </div>
  </div>
</section>


    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import contactHeroImg from '../assets/contact-hero.jpg'
import NavBar from '../components/navbar.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/footer.vue'

</script>
