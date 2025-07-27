<template>
  <nav class="w-full bg-white shadow-sm py-3 px-6 fixed top-0 z-40">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- اللوجو على اليسار -->
      <router-link to="/">
        <img 
          src="../assets/logo.png" 
          alt="Egyptify Logo" 
          class="h-10 object-contain"
        >
      </router-link>

      <!-- الجزء الأيمن: زر العودة أولاً ثم أيقونة البحث -->
      <div class="flex items-center space-x-6">
        <!-- زر العودة مع السهم -->
        <router-link 
          to="/explore" 
          class="flex items-center space-x-1 group"
        >
          <ArrowLeft class="w-4 h-4 text-gray-600 group-hover:text-yellow-500 transition-colors"/>
          <span class="text-gray-900 font-medium">Go back to Egyptify</span>
        </router-link>

        <!-- أيقونة البحث -->
        <button class="text-gray-600 hover:text-yellow-500 transition-colors">
          <Search class="w-5 h-5" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ArrowLeft, Search } from 'lucide-vue-next'
</script>

