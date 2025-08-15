<template>
  <div class="max-w-md mx-auto mt-10 space-y-6">
    <div v-for="(step, index) in steps" :key="index" class="flex items-start space-x-4 relative">

      <!-- الخط الرأسي -->
      <div class="flex flex-col items-center">
        <!-- الدائرة -->
        <div
          class="w-8 h-8 flex items-center justify-center rounded-full font-bold text-white"
          :class="{
            'bg-yellow-400 text-black': index === 0,
            'bg-gray-700': index > 0 && index < steps.length - 1,
            'bg-red-500': index === steps.length - 1
          }"
        >
          <span class="text-xs">
            {{ index === 0 ? 'Start' : index === steps.length - 1 ? 'End' : index }}
          </span>
        </div>

        <!-- الخط -->
        <div
          v-if="index < steps.length - 1"
          class="w-1 h-12 bg-gray-300"
        ></div>
      </div>

      <!-- التفاصيل -->
      <div class="bg-gray-100 p-3 rounded-md shadow w-full">
        <div class="text-sm text-gray-600">{{ step.time }}</div>
        <div class="text-base font-semibold">{{ step.activity }}</div>
        <div v-if="step.description" class="text-gray-600 text-sm">{{ step.description }}</div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<style scoped>
/* ممكن تضيفي تنسيق إضافي هنا لو حبيتي */
</style>






















