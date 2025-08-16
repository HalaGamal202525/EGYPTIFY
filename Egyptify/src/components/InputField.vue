<template>
  <div class="relative">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-600">
      <slot name="icon" />
    </span>

    <select
      v-if="type === 'select'"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="w-full h-[48px] pl-10 pr-10 py-3 text-gray-800 rounded-[16px] 
             border-1 border-yellow-400 focus:outline-none focus:ring-2 
             focus:ring-yellow-300 shadow-sm placeholder-gray-500 
             placeholder-opacity-100 placeholder:text-sm appearance-none"
    >
      <option disabled selected>{{ placeholder }}</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
      >
        {{ option }}
      </option>
    </select>

    <input
      v-else
      v-bind="$attrs"
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full h-[48px] pl-10 pr-10 py-3 text-gray-800 rounded-[16px] 
             border-1 border-yellow-400 focus:outline-none focus:ring-2 
             focus:ring-yellow-300 shadow-sm placeholder-gray-500 
             placeholder-opacity-100 placeholder:text-sm"
    />
    
    <span 
      v-if="isPasswordInput" 
      class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500"
      @click="togglePasswordVisibility"
    >
      <i :class="['fas', isPasswordVisible ? 'fa-eye' : 'fa-eye-slash']"></i>
    </span>
    
    <slot name="suffix-icon" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  }
});

defineEmits(['update:modelValue']);

// New reactivity to handle password visibility
const isPasswordVisible = ref(false);
const isPasswordInput = computed(() => props.type === 'password');
const inputType = computed(() => (isPasswordInput.value && isPasswordVisible.value) ? 'text' : props.type);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<style scoped>
/* عشان السهم في الـ select يبان بشكل افتراضي */
select {
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D'14'%20height%3D'10'%20viewBox%3D'0%200%2014%2010'%20xmlns%3D'http%3A//www.w3.org/2000/svg'%3E%3Cpath%20d%3D'M1%201l6%206%206-6'%20stroke%3D'%23A0AEC0'%20stroke-width%3D'2'%20fill%3D'none'%20fill-rule%3D'evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.65rem auto;
}
</style>