import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useReviewStore = defineStore("reviewStore", () => {
  // نقرأ الداتا من localStorage أول ما الستيت يتعمل
  const storedReviews = localStorage.getItem("reviews");
  const reviews = ref(storedReviews ? JSON.parse(storedReviews) : []);

  function addReview(review) {
    reviews.value.push(review);
  }

  // نعمل watch علشان أي تغيير يحصل يتسجل في localStorage
  watch(
    reviews,
    (newReviews) => {
      localStorage.setItem("reviews", JSON.stringify(newReviews));
    },
    { deep: true } // علشان يراقب التغيرات جوه الأوبجيكت كمان
  );

  return { reviews, addReview };
});
