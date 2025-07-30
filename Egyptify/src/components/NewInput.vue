<template>
  <div class="relative">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full py-3 px-4 pl-12 text-gray-700 border border-yellow-400 rounded-[16px] focus:outline-none focus:ring-1 focus:ring-yellow-400"
    />
    <div v-if="iconName" class="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400">
      <component :is="getIconComponent(iconName)" class="w-5 h-5" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'; // <-- Import defineEmits

// Import all Lucide icons that this InputField component might need across your app.
import { Search, Lock, Mail, Phone, User } from 'lucide-vue-next';

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  iconName: {
    type: String,
    default: null,
  },
  modelValue: { // <-- New prop for v-model
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']); // <-- New emit declaration

const getIconComponent = (name) => {
  switch (name) {
    case 'Search': return Search;
    case 'Lock': return Lock;
    case 'Mail': return Mail;
    case 'Phone': return Phone;
    case 'User': return User;
    default: return null;
  }
};
</script>

<style scoped>
/* ... (rest of style) ... */
</style>