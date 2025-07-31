<template>
    <NavBarBlack />
    <div class="min-h-screen bg-[#FFFDF9] py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-xl">
            <div class="flex items-center mb-8">
                <img src="../../public/profile/girl-4.png" alt="Profile Avatar"
                    class="w-16 h-22 rounded-full  mr-4 object-fit">
                <div>
                    <h1 class="text-2xl font-bold text-gray-800">Yasmine Emad</h1>
                    <p class="text-gray-600">Joined in 2023</p>
                </div>
            </div>

            <div class="border-b border-gray-300 mb-8">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a href="#"
                        :class="[activeTab === 'personal' ? 'border-yellow-500 text-yellow-500 ' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm']"
                        @click.prevent="activeTab = 'personal'">
                        Personal Details
                    </a>
                    <a href="#"
                        :class="[activeTab === 'saved' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm']"
                        @click.prevent="activeTab = 'saved'">
                        Saved trips/Bookings
                    </a>
                    <a href="#"
                        :class="[activeTab === 'reviews' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm']"
                        @click.prevent="activeTab = 'reviews'">
                        Reviews Left
                    </a>
                    <a href="#"
                        :class="[activeTab === 'favorite' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm']"
                        @click.prevent="activeTab = 'favorite'">
                        Favorite Places
                    </a>
                    <a href="#"
                        :class="[activeTab === 'settings' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm']"
                        @click.prevent="activeTab = 'settings'">
                        Settings
                    </a>
                </nav>
            </div>

            <div v-if="activeTab === 'personal'">
                <!-- <h2 class="text-xl font-bold text-yellow-500 mb-6">Personal Details</h2> -->
                <form @submit.prevent="saveChanges">
                    <div class="mb-4">
                        <label for="username" class="mb-1" style="font-weight: 500; font-size: medium;">User Name*</label>
                        <InputField
                            id="username"
                            type="text"
                            placeholder="Yasmine Emad"
                            v-model="user.username"
                            required
                        >
                            <template #icon>
                                <i class="fas fa-user" />
                            </template>
                        </InputField>
                    </div>

                    <div class="mb-4">
                        <label for="email" class="mb-1" style="font-weight: 500; font-size: medium;">E-mail*</label>
                        <InputField
                            id="email"
                            type="email"
                            placeholder="yasmineemad2023@gmail.com"
                            v-model="user.email"
                            required
                        >
                            <template #icon>
                                <i class="fas fa-envelope" />
                            </template>
                        </InputField>
                    </div>

                    <div class="mb-4">
                        <label for="password" class="mb-1" style="font-weight: 500; font-size: medium;">Password*</label>
                        <InputField
                            id="password"
                            type="password"
                            placeholder="********"
                            v-model="user.password"
                            required
                        >
                            <template #icon>
                                <i class="fas fa-lock" />
                            </template>
                            <template #suffix-icon>
                                <i class="fas fa-eye-slash absolute right-4 top-3 text-gray-400" />
                            </template>
                        </InputField>
                    </div>

                    <div class="mb-4">
                        <label for="phone" class="mb-1" style="font-weight: 500; font-size: medium;">Phone*</label>
                        <InputField
                            id="phone"
                            type="tel"
                            placeholder="01289373141"
                            v-model="user.phone"
                            required
                        >
                            <template #icon>
                                <i class="fas fa-phone" />
                            </template>
                        </InputField>
                    </div>

                    <div class="mt-8 flex justify-end">
                        <BaseButton type="submit">
                            Save Changes
                        </BaseButton>
                    </div>
                </form>
            </div>

            <div v-else-if="activeTab === 'saved'">
                <h2 class="text-xl font-bold text-yellow-500 mb-6">Saved Trips/Bookings</h2>
                <div class="space-y-6">
                    <h3 class="text-lg font-semibold text-gray-800">Upcoming trips</h3>
                    <div class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div class="flex-grow">
                            <p class="text-sm text-gray-500 mb-1">Booking ID: 123456</p>
                            <h4 class="text-lg font-semibold text-gray-800 mb-1">Cairo Adventure</h4>
                            <p class="text-gray-600 text-sm">Oct 20 - Oct 25, 2024</p>
                            <button class="mt-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm">View Details</button>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                            <img src="../../public/profile/Pyramids2.jpeg" alt="Cairo Adventure" class="w-24 h-24 object-cover rounded-md" />
                        </div>
                    </div>
                    <div class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div class="flex-grow">
                            <p class="text-sm text-gray-500 mb-1">Booking ID: 789012</p>
                            <h4 class="text-lg font-semibold text-gray-800 mb-1">Nile Cruise</h4>
                            <p class="text-gray-600 text-sm">Nov 5 - Nov 12, 2024</p>
                            <button class="mt-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm">View Details</button>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                            <img src="../../public/profile/Nile-River.jpg" alt="Nile Cruise" class="w-24 h-24 object-cover rounded-md" />
                        </div>
                    </div>
                </div>
                <div class="space-y-6 mt-8">
                    <h3 class="text-lg font-semibold text-gray-800">Past trips</h3>
                    <div class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div class="flex-grow">
                            <p class="text-sm text-gray-500 mb-1">Booking ID: 345678</p>
                            <h4 class="text-lg font-semibold text-gray-800 mb-1">Alexandria Getaway</h4>
                            <p class="text-gray-600 text-sm">May 15 - May 18, 2024</p>
                            <button class="mt-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm">View Details</button>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                            <img src="../../public/profile/Alex.jpg" alt="Alexandria Getaway" class="w-24 h-24 object-cover rounded-md" />
                        </div>
                    </div>
                    <div class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div class="flex-grow">
                            <p class="text-sm text-gray-500 mb-1">Booking ID: 901234</p>
                            <h4 class="text-lg font-semibold text-gray-800 mb-1">Luxor Exploration</h4>
                            <p class="text-gray-600 text-sm">Feb 2 - Feb 2, 2024</p>
                            <button class="mt-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm">View Details</button>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                            <img src="../../public/profile/luxor-vally of the kings.jpg" alt="Luxor Exploration" class="w-24 h-24 object-cover rounded-md" />
                        </div>
                    </div>
                </div>
            </div>

            <div v-else-if="activeTab === 'reviews'">
                <h2 class="text-xl font-bold text-yellow-500 mb-6">My Reviews</h2>
                <div class="space-y-6">
                    <div class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div class="flex-grow">
                            <p class="text-gray-700 font-semibold mb-1">Cairo</p>
                            <p class="text-sm text-gray-500 mb-1">2 months ago</p>
                            <div class="flex items-center mb-2">
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                            </div>
                            <p class="text-gray-700 text-sm">Amazing experience exploring the pyramids and the Sphinx. The guide was knowledgeable and friendly.</p>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                            <img src="../../public/profile/Pyramids2.jpeg" alt="Cairo Pyramids" class="w-24 h-24 object-cover rounded-md" />
                        </div>
                    </div>
                    <div class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div class="flex-grow">
                            <p class="text-gray-700 font-semibold mb-1">Aswan</p>
                            <p class="text-sm text-gray-500 mb-1">3 months ago</p>
                            <div class="flex items-center mb-2">
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-gray-300"></i> </div>
                            <p class="text-gray-700 text-sm">Amazing experience exploring the pyramids and the Sphinx. The guide was knowledgeable and friendly.</p>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                            <img src="../../public/profile/Aswan-Abu-Simple-Tour.jpg" alt="Cairo Pyramids" class="w-24 h-24 object-cover rounded-md" />
                        </div>
                    </div>
                    <div class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div class="flex-grow">
                            <p class="text-gray-700 font-semibold mb-1">Luxor</p>
                            <p class="text-sm text-gray-500 mb-1">4 months ago</p>
                            <div class="flex items-center mb-2">
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                            </div>
                            <p class="text-gray-700 text-sm">Amazing experience exploring the pyramids and the Sphinx. The guide was knowledgeable and friendly.</p>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                            <img src="../../public/profile/luxor-vally of the kings.jpg" alt="Cairo Pyramids" class="w-24 h-24 object-cover rounded-md" />
                        </div>
                    </div>
                    <div class="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div class="flex-grow">
                            <p class="text-gray-700 font-semibold mb-1">Alexandria</p>
                            <p class="text-sm text-gray-500 mb-1">6 months ago</p>
                            <div class="flex items-center mb-2">
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-gray-300"></i> </div>
                            <p class="text-gray-700 text-sm">Amazing experience exploring the pyramids and the Sphinx. The guide was knowledgeable and friendly.</p>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                            <img src="../../public/profile/Alex.jpg" alt="Cairo Pyramids" class="w-24 h-24 object-cover rounded-md" />
                        </div>
                    </div>
                </div>
            </div>

            <div v-else-if="activeTab === 'favorite'">
                <h2 class="text-xl font-bold text-yellow-500 mb-6">My Favorite Places</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Destinations</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                        <img src="../../public/profile/luxor-vally of the kings.jpg" alt="Luxor" class="w-full h-40 object-cover" />
                        <div class="p-4">
                            <h4 class="text-lg font-semibold text-gray-800 mb-1">Luxor</h4>
                            <p class="text-sm text-gray-600">Ancient Temples & Royal Tombs</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                        <img src="../../public/profile/Aswan-Abu-Simple-Tour.jpg" alt="Aswan" class="w-full h-40 object-cover" />
                        <div class="p-4">
                            <h4 class="text-lg font-semibold text-gray-800 mb-1">Aswan</h4>
                            <p class="text-sm text-gray-600">Scenic Nile Cruises and Nubian Culture</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                        <img src="../../public/profile/Desert-Oasis.jpeg" alt="Desert Oasis Resort" class="w-full h-40 object-cover" />
                        <div class="p-4">
                            <h4 class="text-lg font-semibold text-gray-800 mb-1">Desert Oasis Resort</h4>
                            <p class="text-sm text-gray-600">Eco-friendly resort in the desert</p>
                        </div>
                    </div>
                </div>

                <h3 class="text-lg font-semibold text-gray-800 mb-4">Accomodations</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                        <img src="../../public/profile/Nile-River.jpg" alt="The Nile View Hotel" class="w-full h-40 object-cover" />
                        <div class="p-4">
                            <h4 class="text-lg font-semibold text-gray-800 mb-1">The Nile View Hotel</h4>
                            <p class="text-sm text-gray-600">Luxury hotel with stunning Nile views</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                        <img src="../../public/profile/Alex.jpg" alt="Alexandria" class="w-full h-40 object-cover" />
                        <div class="p-4">
                            <h4 class="text-lg font-semibold text-gray-800 mb-1">Alexandria</h4>
                            <p class="text-sm text-gray-600">Costal city with historical sites</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                        <img src="../../public/profile/Costal-Breeze.jpg" alt="Coastal Breeze Apartments" class="w-full h-40 object-cover" />
                        <div class="p-4">
                            <h4 class="text-lg font-semibold text-gray-800 mb-1">Costal Breeze</h4>
                            <p class="text-sm text-gray-600">Modern apartments near the beach</p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else-if="activeTab === 'settings'">
                <!-- <h2 class="text-xl font-bold text-yellow-500 mb-6">Settings</h2> -->

                <div class="mb-8">
                    <h3 class="text-xl font-bold text-yellow-500 mb-4">Display</h3>
                    <div class="flex items-center justify-between mb-4">
                        <label for="language-select" class="text-gray-700" style="color:#364153; font-size: medium; font-weight: normal;">Language</label>
                        <select id="language-select" v-model="settings.language" class="border rounded-md px-3 py-2 text-gray-800">
                            <option value="english">English</option>
                            <option value="arabic">العربية</option>
                        </select>
                    </div>
                    <div class="flex items-center justify-between">
                        <label for="currency-select" class="text-gray-700" style="color:#364153; font-size: medium; font-weight: normal;">Currency</label>
                        <select id="currency-select" v-model="settings.currency" class="border rounded-md px-3 py-2 text-gray-800">
                            <option value="egp">EGP</option>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                        </select>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-xl font-bold text-yellow-500 mb-4">Notifications</h3>
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <p class="text-gray-700">Booking notifications</p>
                            <p class="text-sm text-gray-500">Receive email notifications for booking confirmations and updates.</p>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="settings.bookingNotifications" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                        </label>
                    </div>
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-700">Promotional Offers</p>
                            <p class="text-sm text-gray-500">Stay informed about new trips, special offers, and promotions.</p>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="settings.promotionalOffers" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                        </label>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-yellow-500 mb-4">Account</h3>
                    <a href="#" class="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors duration-150">
                        <span class="text-gray-700 font-medium">Change Password</span>
                        <i class="fas fa-arrow-right text-gray-400"></i>
                    </a>
                    <a href="#" class="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors duration-150">
                        <span class="text-gray-700 font-medium">Update Contact Information</span>
                        <i class="fas fa-arrow-right text-gray-400"></i>
                    </a>
                    <a href="#" class="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors duration-150 text-red-600">
                        <span class="font-medium">Delete Account</span>
                        <i class="fas fa-arrow-right text-gray-400"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { ref, reactive } from 'vue';
// import Navbar from '../components/navbar.vue';
import NavBarBlack from '../components/NavBar-Black.vue';
import Footer from '../components/footer.vue';
import BaseButton from '../components/BaseButton.vue';
import InputField from '../components/InputField.vue';


const activeTab = ref('personal');

const user = reactive({
    username: 'Yasmine Emad',
    email: 'yasmineemad2023@gmail.com',
    password: 'password123',
    phone: '01289373141'
});

const settings = reactive({
    language: 'english',
    currency: 'egp',
    bookingNotifications: true,
    promotionalOffers: false,
});


const saveChanges = () => {
    console.log('Saving changes (Personal Details):', user);
    alert('Personal details saved successfully!');
};

// You can add a save settings function here if needed
const saveSettings = () => {
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
};
</script>

<style scoped>
/* Add any specific styles here if needed that aren't covered by Tailwind */
/* For the star icons, you might need to ensure they are the same size/alignment */
.fas.fa-star {
    font-size: 0.9em; /* Adjust as needed */
    margin-right: 2px; /* Small spacing between stars */
}

</style>