<template>
    <Navbar />

    <div class="min-h-screen bg-[#FFFDF9] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div class="w-full max-w-2xl mb-6">
            <InputField
                placeholder="Where to?"
                icon-name="Search"
                class="w-full"
            />
        </div>

        <div class="w-full max-w-2xl mb-8">
            <InputField
                placeholder="Search for a place in Egypt"
                icon-name="Search"
                class="w-full"
            />
        </div>

        <div class="relative w-full max-w-4xl h-[500px] rounded-lg shadow-lg overflow-hidden">
            <img src="/map/map.png" alt="Map of Cairo and Giza" class="w-full h-full object-cover">

            <div class="absolute bottom-4 right-4 flex flex-col space-y-2">
                <button class="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none flex items-center justify-center">
                    <Plus class="w-5 h-5" />
                </button>
                <button class="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none flex items-center justify-center">
                    <Minus class="w-5 h-5" />
                </button>
                <button class="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none flex items-center justify-center">
                    <MapPin class="w-5 h-5" />
                </button>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';
import InputField from '../components/InputField.vue';

// Import specific Lucide icons directly into this component for the buttons
import { Plus, Minus, MapPin } from 'lucide-vue-next';

// No reactive data or methods needed for this static content page
</script>

<style scoped>
/* Any specific styles for this page can go here if not covered by Tailwind */
</style>