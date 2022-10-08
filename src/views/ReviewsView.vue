<template>
  <div class="review-view">
    <div v-if="error">{{ error }}</div>
    <div v-if="reviews.length" class="layout">
      <ReviewList :reviews="reviews" />
    </div>
  </div>
</template>

<script>
import getReviews from "../composables/getReviews";
import ReviewList from "../components/ReviewList.vue";
export default {
  name: "ReviewsView",
  components: { ReviewList },
  setup() {
    const { reviews, error, load } = getReviews();

    load();

    return { reviews, error };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>