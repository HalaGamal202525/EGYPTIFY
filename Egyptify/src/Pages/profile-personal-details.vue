<template>
    <Navbar />
    <div class="min-h-screen bg-[#FFFDF9] py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto mt-7 bg-white p-8 rounded-lg shadow-xl">
            <div class="flex items-center mb-8">
                <img src="../../public/profile/girl-4.png" alt="Profile Avatar"
                    class="w-20 h-20 rounded-full mr-4 object-cover">
                <div>
                    <h1 class="text-2xl font-bold text-gray-800">Yasmine Emad</h1>
                    <p class="text-gray-600">Joined in 2023</p>
                </div>
            </div>

            <div class="border-b border-gray-200 mb-8">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a href="#"
                        :class="[activeTab === 'personal' ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
                        @click.prevent="activeTab = 'personal'">
                        Personal Details
                    </a>
                    <a href="#"
                        :class="[activeTab === 'saved' ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
                        @click.prevent="activeTab = 'saved'">
                        Saved trips/Bookings
                    </a>
                    <a href="#"
                        :class="[activeTab === 'reviews' ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
                        @click.prevent="activeTab = 'reviews'">
                        Reviews Left
                    </a>
                    <a href="#"
                        :class="[activeTab === 'favorite' ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
                        @click.prevent="activeTab = 'favorite'">
                        Favorite Places
                    </a>
                    <a href="#"
                        :class="[activeTab === 'settings' ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
                        @click.prevent="activeTab = 'settings'">
                        Settings
                    </a>
                </nav>
            </div>

            <div v-if="activeTab === 'personal'">
                <h2 class="text-xl font-bold text-gray-800 mb-6">Personal Details</h2>
                <form @submit.prevent="saveChanges">
                    <InputField id="username" label="User Name*" v-model="user.username" placeholder="Yasmine Emad" type="text" required>
                        <template #icon>
                            <UserIcon class="h-5 w-5" /> </template>
                    </InputField>

                    <InputField id="email" label="E-mail*" v-model="user.email" placeholder="yasmineemad2023@gmail.com" type="email" required>
                        <template #icon>
                            <MailIcon class="h-5 w-5" /> </template>
                    </InputField>

                    <InputField id="password" label="Password*" v-model="user.password" placeholder="********" type="password" required>
                        <template #icon>
                            <LockClosedIcon class="h-5 w-5" /> </template>
                    </InputField>

                    <InputField id="phone" label="Phone*" v-model="user.phone" placeholder="01289373141" type="tel" required>
                        <template #icon>
                            <PhoneIcon class="h-5 w-5" /> </template>
                    </InputField>

                    <div class="mt-8 text-right">
                        <BaseButton type="submit"
                            class="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200">
                            Save Changes
                        </BaseButton>
                    </div>
                </form>
            </div>            <div v-else-if="activeTab === 'saved'">
                <h2 class="text-xl font-bold text-gray-800 mb-6">Saved Trips / Bookings</h2>
                <p class="text-gray-600">Content for saved trips and bookings will go here.</p>
            </div>
            <div v-else-if="activeTab === 'reviews'">
                <h2 class="text-xl font-bold text-gray-800 mb-6">Reviews Left</h2>
                <p class="text-gray-600">Content for reviews left by the user will go here.</p>
            </div>
            <div v-else-if="activeTab === 'favorite'">
                <h2 class="text-xl font-bold text-gray-800 mb-6">Favorite Places</h2>
                <p class="text-gray-600">Content for favorite places will go here.</p>
            </div>
            <div v-else-if="activeTab === 'settings'">
                <h2 class="text-xl font-bold text-gray-800 mb-6">Settings</h2>
                <p class="text-gray-600">Content for user settings will go here.</p>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { ref, reactive } from 'vue'; // Removed 'computed' as it's not used in this specific component
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';
import BaseButton from '../components/BaseButton.vue';
import InputField from '../components/InputField.vue';

const activeTab = ref('personal');

const user = reactive({
    username: 'Yasmine Emad',
    email: 'yasmineemad2023@gmail.com',
    password: 'password123', // In a real app, you wouldn't pre-fill this like this
    phone: '01289373141'
});

const saveChanges = () => {
    console.log('Saving changes:', user);
    // Here you would typically send data to an API
    alert('Changes saved successfully!');
};
</script>
