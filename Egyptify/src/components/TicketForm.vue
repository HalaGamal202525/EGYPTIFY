<template>
  <form class="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-6 text-center">Ticket Reservation Form</h1>
    
    <!-- Name -->
    <div class="mb-4">
      <label class="block text-gray-700 mb-2">Name</label>
      <input 
        type="text" 
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Enter your name"
      >
    </div>
    
    <!-- Phone Number -->
    <div class="mb-4">
      <label class="block text-gray-700 mb-2">Phone number</label>
      <input 
        type="tel" 
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Enter your phone number"
      >
    </div>
    
    <!-- Number of Tickets -->
    <div class="mb-4">
      <label class="block text-gray-700 mb-2">Number of tickets</label>
      <input 
        type="number" 
        min="1"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Enter number of tickets"
      >
    </div>
    
    <div class="grid grid-cols-2 gap-4 mb-6">
      <!-- Date -->
      <div>
        <label class="block text-gray-700 mb-2">Date</label>
        <input 
          type="date" 
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
      </div>
      
      <!-- Time -->
      <div>
        <label class="block text-gray-700 mb-2">Time</label>
        <input 
          type="time" 
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
      </div>
    </div>
    
    <!-- Book Ticket Button -->
    <BaseButton 
      class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg"
      @click="submitForm"
    >
      Book Ticket
    </BaseButton>
  </form>
</template>

<script setup>
import BaseButton from './BaseButton.vue';

const submitForm = (e) => {
  e.preventDefault();
  // Handle form submission logic here
  alert('Ticket booked successfully!');
};
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(0.5);
  cursor: pointer;
}
</style>