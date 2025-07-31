<template>
    <NavBarBlack />

    <div class="min-h-screen bg-[#FFFDF9] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-20">
        <h1 class="text-3xl font-bold mb-6 text-yellow-500">Where to?</h1>
        <div class="w-full max-w-3xl mb-6 mt-4">
            <NewInput
                placeholder="Search for a place in egypt"
                icon-name="Search"
                class="w-full"
                v-model="searchQuery"
                @keyup.enter="updateMapAndLink"
            />
        </div>

    
        <div class="relative max-w-3xl  h-[500px] rounded-[16px] shadow-lg overflow-hidden">
            <a :href="googleMapsLink" target="_blank" rel="noopener noreferrer">
                <img :src="currentMapImage" :alt="`Map of ${currentCity}`" class="w-full h-full object-cover cursor-pointer">
            </a>

            <div class="absolute bottom-4 right-2 flex flex-col space-y-2">
                <button class="bg-gray-200 p-2 rounded-t-xl shadow-3xl border border-gray-400 text-gray-700 font-bolder hover:bg-gray-300 focus:outline-none flex items-center justify-center cursor-pointer">
                    <Plus class="w-5 h-5" />
                </button>
                <button class="bg-gray-200 p-2 rounded-b-xl shadow-3xl border border-gray-400 text-gray-700 font-bolder hover:bg-gray-300 focus:outline-none flex items-center justify-center cursor-pointer">
                    <Minus class="w-5 h-5" />
                </button>
                <button class="bg-gray-200 p-2 rounded-full shadow-3xl border border-gray-400 text-gray-700 font-bolder hover:bg-gray-300 focus:outline-none flex items-center justify-center cursor-pointer" @click="openGoogleMapsForCurrentLocation">
                    <MapPin class="w-5 h-5" />
                </button>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script setup>
import { ref, computed } from 'vue'; // Import ref and computed
import NavBarBlack from '../components/NavBar-Black.vue';
import Footer from '../components/footer.vue';
import NewInput from '../components/NewInput.vue';
// Import specific Lucide icons directly into this component for the buttons
import { Plus, Minus, MapPin } from 'lucide-vue-next';

// Reactive state for the search query
const searchQuery = ref('');
const searchQueryEgypt = ref(''); // If you want to use the second input, handle its value too.
// Reactive state for the currently displayed map image path
const currentMapImage = ref('../../public/map/egypt-map.png'); // Default map image
// Reactive state for the current city/governorate displayed
const currentCity = ref('Egypt');

// --- Map Image Mapping (Define your custom map images here) ---
// IMPORTANT: You need to have these images in your public/map/ folder.
const cityMapImages = {
    'cairo': '../../public/map/cairo-map.png', // Adjust the path as necessary
    'giza': '../../public/map/giza-map.png',
    'luxor': '../../public/map/luxor-map.png',
    'aswan': '../../public/map/aswan-map.png',
    'alexandria': '../public/map/alex-map.png',
    // Add more city/governorate names and their corresponding image paths
    // Ensure the keys are lowercase for consistent matching
};

// Function to update the map image and current city based on search input
const updateMapAndLink = () => {
    const input = searchQuery.value.trim().toLowerCase(); // Use the first input primarily
    // You could also combine inputs if needed: const input = (searchQuery.value || searchQueryEgypt.value).trim().toLowerCase();

    if (cityMapImages[input]) {
        currentMapImage.value = cityMapImages[input];
        currentCity.value = input.charAt(0).toUpperCase() + input.slice(1); // Capitalize for display
    } else {
        // Fallback to a default map image if the city is not found
        currentMapImage.value = '../../public/map/egypt-map.png'; // Or your generic map
        currentCity.value = 'Egypt';
    }
};

// Computed property to generate the Google Maps URL
const googleMapsLink = computed(() => {
    // Encode the current city name for URL safety
    const encodedCity = encodeURIComponent(currentCity.value + ', Egypt');
    return `https://www.google.com/maps/search/?api=1&query=${encodedCity}`;
});

// Function to open Google Maps for the *current* location (different from the search query)
// This usually implies the user's actual geolocation, which requires browser permissions.
// For simplicity, this will open Google Maps centered on Egypt for now,
// but in a real app, you'd use navigator.geolocation to get actual coords.
const openGoogleMapsForCurrentLocation = () => {
    // If you want to use the browser's current location, you'd do:
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
        }, (error) => {
            console.error("Error getting geolocation:", error);
            alert("Could not get your current location.");
            // Fallback to generic Egypt map if geolocation fails
            window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Egypt')}`, '_blank');
        });
    } else {
        alert("Geolocation is not supported by your browser.");
        // Fallback to generic Egypt map
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Egypt')}`, '_blank');
    }

    // For now, it opens a generic Egypt map or the last searched city's map:
    window.open(googleMapsLink.value, '_blank');
};

// Set initial map image and link based on default/initial state
updateMapAndLink(); // Call once on component load to set initial image/link
</script>

<style scoped>
/* Any specific styles for this page can go here if not covered by Tailwind */
</style>