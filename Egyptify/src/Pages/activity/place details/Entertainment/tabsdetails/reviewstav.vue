<template>
  <div class="p-6 space-y-10 bg-[#F9F9F9] rounded-2xl shadow-sm">
    <!-- التقييمات -->
    <div class="space-y-6">
      <ReviewItem
        v-for="(review, index) in reviews"
        :key="index"
        :name="review.name"
        :avatar="review.avatar || defaultAvatar"
        :date="review.date"
        :rating="review.rating"
        :comment="review.content"
      />
    </div>

    <!-- إضافة تقييم جديد -->
    <div class="border-t pt-6 mt-6 space-y-4">
      <h3 class="text-xl font-semibold text-gray-800">Add Your Review</h3>

      <CommentInput v-model="newComment" />

      <AppButton @click="submitComment" class="bg-yellow-400 hover:bg-yellow-500 transition-colors">
        Submit Review
      </AppButton>

      <p class="text-gray-500 text-sm">Your feedback helps others discover great places!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ReviewItem from '../../../../../components/reviews.vue';
import CommentInput from '../../../../../components/InputField.vue';
import AppButton from '../../../../../components/BaseButton.vue';

const newComment = ref('');
const defaultAvatar = 'https://i.pravatar.cc/48?img=3';

const reviews = ref([
  {
    name: 'Sarah A.',
    date: 'July 2025',
    content: 'Great for families. Kids loved it. Camel ride was fun but overpriced.',
    rating: 5,
    avatar: '/sara/person.jpeg'
  },
  {
    name: 'Ahmed M.',
    date: 'June 2025',
    content: 'Absolutely breathtaking! A must-see. Go early to avoid crowds',
    rating: 4,
    avatar: '/sara/person2.jpeg'
  }
]);

function submitComment() {
  if (newComment.value.trim() !== '') {
    reviews.value.unshift({
      name: 'You',
      date: new Date().toLocaleDateString(),
      content: newComment.value,
      rating: 5,
      avatar: 'https://i.pravatar.cc/48?img=5'
    });
    newComment.value = '';
  }
}
</script>
