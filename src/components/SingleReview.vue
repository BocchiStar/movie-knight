<template>
  <div class="review">
    <a v-if="review.link" :href="review.link"><h3>{{ review.title }}</h3></a>
    <h3 v-else>{{ review.title }}</h3>
    <br>
    <div v-if="allReviews.length">
      <div v-for="userReview of allReviews" :key="userReview.user">
        <h4> {{ userReview.user }}</h4>
        <p> Rating: {{ userReview.rating }}</p>
        <p> Review: {{ userReview.review }}</p>
      </div>
    </div>
    <router-link :to="{ name: 'addreview', params: { id: review.id, title: review.title }}">
      Add a review
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'


export default {
  props: ["review"],
  setup(props) {
    const allReviews = computed(() => {
      const userReviews = [];
      for (const [key, value] of Object.entries(props.review.ratings)) {
        const userReview = {
          user: key,
          rating: value,
          review: props.review.reviews[key]
        };
        userReviews.push(userReview);
      }
      return userReviews;
    });

    const router = useRouter();

    return { allReviews };
  },
};
</script>

<style>
.review {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.review h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.review h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
</style>
