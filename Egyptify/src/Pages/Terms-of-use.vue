<template>
  <div class="min-h-screen bg-[#fdfcf9] flex flex-col">
    <!-- Secondary Navbar -->
    <NavBarBlack />
    
    <!-- Main Navbar -->
    <NavBar />

    <!-- Main Content -->
    <main class="flex-grow max-w-4xl mx-auto px-6 py-12 w-full mt-16">
      <!-- Page Header -->
      <section class="text-center mb-12">
        <h1 class="text-4xl font-bold text-yellow-500 mb-4 mt-4">Terms of Use</h1>
        <p class="text-md text-gray-500">
          Last updated: {{ new Date().toLocaleDateString() }}
        </p>
      </section>

      <!-- Terms Content -->
      <article class="prose prose-lg max-w-none">
        <section class="mb-8">
          <p class="text-gray-700 mb-6">
            Welcome to Egyptify! By accessing or using our website, you agree to comply with these Terms of Use. 
            If you do not agree with any part of the terms, please do not use the website.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">1. Use of the Website</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>Egyptify is a digital platform that promotes tourism in Egypt by showcasing attractions, experiences, guides, and services.</li>
            <li>You agree to use the website for lawful purposes only.</li>
            <li>Commercial use or distribution of any content is strictly prohibited without prior written permission.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>All content on the site (text, images, graphics, videos, and design) is the property of Egyptify or our partners and licensors.</li>
            <li>You may not copy, reproduce, or distribute any content without our explicit consent.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>Some features may require user registration.</li>
            <li>You are responsible for maintaining the confidentiality of your login information.</li>
            <li>Egyptify is not liable for any unauthorized access resulting from your failure to secure your credentials.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">4. User-Generated Content</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>Users may post reviews, comments, or suggestions.</li>
            <li>Egyptify reserves the right to remove any content deemed inappropriate, offensive, or misleading.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">5. Third-Party Links</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>The website may include links to external websites for your convenience.</li>
            <li>Egyptify does not endorse or take responsibility for the content or services provided by third parties.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>Egyptify provides content "as is" without any warranties.</li>
            <li>We are not responsible for any direct or indirect damages resulting from the use of the website.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>Egyptify reserves the right to update or modify these terms at any time.</li>
            <li>Continued use of the website constitutes acceptance of the revised terms.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>These terms are governed by the laws of the Arab Republic of Egypt.</li>
            <li>Any disputes shall be resolved in the competent courts of Egypt.</li>
          </ul>
        </section>

        <section class="mb-8">
    <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
    <p class="text-gray-700 mb-4">
      If you have any questions regarding these Terms of Use, please contact us at:
    </p>
    <div class="flex items-center space-x-3 mt-10">
      
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      
      
      <a 
        href="mailto:support@egyptify.com" 
        class="text-yellow-500 hover:text-yellow-600 hover:underline font-medium flex items-center"
      >
        support@egyptify.com
      </a>
    </div>
  </section>
      </article>

   
    </main>

    <Footer />
  </div>
</template>

<script setup>
import NavBarBlack from '../components/NavBar-Black.vue';
import Footer from '../components/footer.vue'


</script>

<style scoped>
.prose {
  color: #374151;
}
.prose h2 {
  color: #1f2937;
  font-weight: 600;
}
.prose ul {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
</style>