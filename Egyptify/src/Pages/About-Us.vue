<template>
    <NavBarBlack />
    <div class="min-h-screen bg-[#FFFDF9] py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
            <h1 class="text-3xl sm:text-4xl font-bold text-center text-yellow-500 mb-12 mt-15">About Us</h1>

            <div class="flex flex-col md:flex-row items-center justify-between mb-16 md:space-x-12 mt-20">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
                    <p class="text-gray-700 leading-relaxed">
                        At Egyptify, our mission is to connect travelers with the rich history and vibrant culture of Egypt. We envision a world where exploring Egypt is accessible, seamless, and enriching for everyone.
                    </p>
                </div>
                <div class="md:w-1/2">
                    <img src="../../public/about-us/beautiful-egypt-landscape-digital-art.jpg" alt="Pyramids" class="rounded-lg shadow-lg w-full h-auto object-cover max-h-[300px]">
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between mb-16 md:space-x-12">
                <div class="md:w-1/2 order-2 md:order-1">
                    <img src="../../public/profile/Desert-Oasis.jpeg" alt="Pyramids" class="rounded-lg shadow-lg w-full h-auto object-cover max-h-[300px]">
                </div>
                <div class="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">The Story Behind Egyptify</h2>
                    <p class="text-gray-700 leading-relaxed">
                        Egyptify was born from a passion for travel and a deep appreciation for Egypt's heritage. Founded by a team of experienced travel professionals and Egypt enthusiasts, we recognized the need for a platform that simplifies trip planning and offers authentic experiences. Our journey began with a commitment to providing exceptional service, personalized itineraries, and unforgettable memories.
                    </p>
                </div>
            </div>

            <div class="text-center mb-12">
                <h2 class="text-2xl font-bold text-gray-800 mt-20">Meet Our team</h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-20">
                    <div class="flex flex-col items-center">
                        <img src="../../public/about-us/girl-4.png" alt="Yasmine Emad" class="w-24 h-24 rounded-full object-contain mb-3">
                        <h3 class="font-semibold text-gray-800">Yasmine Emad</h3>
                        <p class="text-sm text-gray-600">UI/UX Developer</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="../../public/about-us/girl-6.png" alt="Sara Saeed" class="w-24 h-24 rounded-full object-contain mb-3">
                        <h3 class="font-semibold text-gray-800">Sara Saeed</h3>
                        <p class="text-sm text-gray-600">UI/UX Developer</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="../../public/about-us/girl-10.png" alt="Sondos Reda" class="w-24 h-24 rounded-full object-contain mb-3">
                        <h3 class="font-semibold text-gray-800">Sondos Reda</h3>
                        <p class="text-sm text-gray-600">UI/UX Developer</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="../../public/about-us/girl-3.png" alt="Hala Gamal" class="w-24 h-24 rounded-full object-contain mb-3">
                        <h3 class="font-semibold text-gray-800">Hala Gamal</h3>
                        <p class="text-sm text-gray-600">UI/UX Developer</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="../../public/about-us/girl-7.png" alt="Manar Esmat" class="w-24 h-24 rounded-full object-contain mb-3">
                        <h3 class="font-semibold text-gray-800">Manar Esmat</h3>
                        <p class="text-sm text-gray-600">UI/UX Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import NavBarBlack from '../components/NavBar-Black.vue';
import Footer from '../components/footer.vue';

// No reactive data or methods needed for this static content page
</script>

<style scoped>
/* Any specific styles for this page can go here if not covered by Tailwind */
</style>