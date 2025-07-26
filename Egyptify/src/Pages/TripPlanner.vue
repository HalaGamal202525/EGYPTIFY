<template>
    <div class="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Trip Planner</h1>

            <div class="mb-10 text-center">
                <h2 class="text-2xl font-semibold text-gray-700 mb-4">Plan Your Dream Trip to Egypt</h2>

                <div class="mb-8 text-left">
                    <h3 class="text-lg font-medium text-gray-800 mb-3">Step 1: Select Your Interests</h3>
                    <div class="flex flex-wrap gap-2">
                        <button v-for="interest in interests" :key="interest" @click="toggleInterest(interest)" :class="{
                            'px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200': true,
                            'bg-yellow-400 text-black border-yellow-500': selectedInterests.includes(interest),
                            'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200': !selectedInterests.includes(interest)
                        }">
                            {{ interest }}
                        </button>
                    </div>
                </div>

                <div class="mb-8 text-left">
                    <h3 class="text-lg font-medium text-gray-800 mb-3">Step 2: Choose Your Budget</h3>
                    <div class="flex gap-2">
                        <button v-for="budget in budgets" :key="budget.value" @click="selectedBudget = budget.value"
                            :class="{
                                'px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200': true,
                                'bg-yellow-400 text-black border-yellow-500': selectedBudget === budget.value,
                                'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200': selectedBudget !== budget.value
                            }">
                            {{ budget.label }}
                        </button>
                    </div>
                </div>

                <div class="mb-8 text-left">
                    <h3 class="text-lg font-medium text-gray-800 mb-3">Step 3: Select Transportation</h3>
                    <div class="flex gap-2">
                        <button v-for="transport in transportation" :key="transport"
                            @click="selectedTransportation = transport" :class="{
                                'px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200': true,
                                'bg-yellow-400 text-black border-yellow-500': selectedTransportation === transport,
                                'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200': selectedTransportation !== transport
                            }">
                            {{ transport }}
                        </button>
                    </div>
                </div>

                <div class="mb-10 text-left">
                    <h3 class="text-lg font-medium text-gray-800 mb-3">Step 4: Select Your Travel Dates</h3>
                    <div class="flex justify-center gap-8">
                        <div class="calendar p-4 border rounded-lg bg-gray-50 shadow-sm">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-semibold text-gray-700">July 2025</span>
                                <div class="flex gap-1">
                                    <button class="text-gray-500 hover:text-gray-700">&lt;</button>
                                    <button class="text-gray-500 hover:text-gray-700">&gt;</button>
                                </div>
                            </div>
                            <div class="grid grid-cols-7 gap-1 text-xs text-gray-600">
                                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                                <span v-for="day in 31" :key="'july-' + day"
                                    :class="{ 'p-1 text-center rounded-full': true, 'bg-blue-100': day === 15, 'font-bold': day === 15 }">{{
                                    day }}</span>
                            </div>
                        </div>
                        <div class="calendar p-4 border rounded-lg bg-gray-50 shadow-sm">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-semibold text-gray-700">August 2025</span>
                                <div class="flex gap-1">
                                    <button class="text-gray-500 hover:text-gray-700">&lt;</button>
                                    <button class="text-gray-500 hover:text-gray-700">&gt;</button>
                                </div>
                            </div>
                            <div class="grid grid-cols-7 gap-1 text-xs text-gray-600">
                                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                                <span v-for="day in 31" :key="'august-' + day"
                                    :class="{ 'p-1 text-center rounded-full': true, 'bg-blue-100': day === 10, 'font-bold': day === 10 }">{{
                                    day }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <button @click="generateItinerary"
                        class="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-200 shadow">
                        Generate Itinerary
                    </button>
                </div>
            </div>

            <div v-if="itinerary.length > 0">
                <h2 class="text-2xl font-semibold text-gray-700 mb-6 text-center">Your Personalized Itinerary</h2>

                <div class="space-y-6">
                    <div v-for="(item, index) in itinerary" :key="index"
                        class="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                        <img :src="item.image" alt="Itinerary Item"
                            class="w-20 h-20 object-cover rounded-lg flex-shrink-0">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800">{{ item.day }}: {{ item.title }}</h3>
                            <p class="text-gray-600 text-sm">Accommodation: {{ item.accommodation }}</p>
                        </div>
                    </div>
                </div>

                <div class="mt-8 flex justify-center gap-4">
                    <button
                        class="px-6 py-3 border border-yellow-400 text-yellow-600 font-semibold rounded-full hover:bg-yellow-50 transition-colors duration-200">
                        Customize Itinerary
                    </button>
                    <button
                        class="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-200 shadow">
                        Save & Share
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Step 1: Interests
const interests = ['Icon', 'Nature & Outdoor', 'Entertainment', 'Food & Drinks', 'Cultural & Historic Places'];
const selectedInterests = ref([]);

const toggleInterest = (interest) => {
    const index = selectedInterests.value.indexOf(interest);
    if (index > -1) {
        selectedInterests.value.splice(index, 1); // Remove if already selected
    } else {
        selectedInterests.value.push(interest); // Add if not selected
    }
};

// Step 2: Budget
const budgets = [
    { label: 'Economy', value: 'economy' },
    { label: 'Mid-Range', value: 'mid-range' },
    { label: 'Luxury', value: 'luxury' }
];
const selectedBudget = ref('');

// Step 3: Transportation
const transportation = ['Bus', 'Car'];
const selectedTransportation = ref('');

const itinerary = ref([]);

const generateItinerary = () => {
    console.log('Generating itinerary with:', {
        interests: selectedInterests.value,
        budget: selectedBudget.value,
        transportation: selectedTransportation.value,
        // Add date selections here
    });

    // Dummy Itinerary Data
    itinerary.value = [
        {
            day: 'Day 1',
            title: 'Arrival in Cairo & Pyramid Tour',
            accommodation: 'Hotel in Cairo',
            image: '/TripPlanner/Pyramids2.jpeg'
        },
        {
            day: 'Day 2',
            title: 'Luxor - Valley of the Kings',
            accommodation: 'Hotel in Luxor',
            image: '/TripPlanner/luxor-vally of the kings.jpg'
        },
        {
            day: 'Day 3',
            title: 'Nile Cruise',
            accommodation: 'Nile Cruise',
            image: '/TripPlanner/Nile-River.jpg'
        },
        {
            day: 'Day 4',
            title: 'Aswan - Abu Simbel Temples',
            accommodation: 'Nile Cruise',
            image: '/TripPlanner/Aswan-Abu-Simple-Tour.jpg'
        },
        {
            day: 'Day 5',
            title: 'Departure from Aswan',
            accommodation: 'N/A',
            image: '/TripPlanner/Aswan-Night.jpeg'
        },
    ];
};

</script>

<style scoped>

/* Basic calendar grid styling */
.calendar .grid-cols-7>span:nth-child(n+8):hover {
    background-color: #fee392;
    cursor: pointer;
}
</style>