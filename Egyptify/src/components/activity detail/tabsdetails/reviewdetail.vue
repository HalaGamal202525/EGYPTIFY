<template>
  <div class="p-6 space-y-8">
    <!-- عرض الريفيوهات -->
    <div class="space-y-4">
      <ReviewItem
        v-for="(review, index) in reviews"
        :key="index"
        :review="review"
      />
    </div>

    <!-- كتابة كومنت -->
    <div class="mt-6 space-y-4">
      <CommentInput v-model="newComment" />

      <AppButton @click="submitComment">Submit</AppButton>

      <p class="text-gray-600 text-sm mt-2">Share your experience with others!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import ReviewItem from '../../reviews.vue';
import CommentInput from '../../InputField.vue';
import AppButton from '../../BaseButton.vue';

const newComment = ref('');

const reviews = ref([
  {
    name: 'Sarah A.',
    date: 'July 2025',
    content: 'Amazing place! Very clean and staff were friendly.',
    rating: 5
  },
  {
    name: 'Ahmed M.',
    date: 'June 2025',
    content: 'Nice experience, but it was a bit crowded.',
    rating: 4
  }
]);

function submitComment() {
  if (newComment.value.trim() !== '') {
    reviews.value.push({
      name: 'You',
      date: new Date().toLocaleDateString(),
      content: newComment.value,
      rating: 5 // ممكن تضيف تقييم لاحقًا
    });
    newComment.value = '';
  }
}
</script>
