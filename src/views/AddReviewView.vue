<template>
  <div class="add-review">
    <h3> Add a review for {{ title }}</h3>
    <form @submit.prevent="handleSubmit">
      <label>ReviewedBy:</label>
      <input v-model="reviewedBy" type="text" required>
      <label>Rating(0-10):</label>
      <input v-model="rating" type="number" required>
      <label>Review:</label>
      <input v-model="reviewText" type="text" required>
      <button>Add a Review!</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore, timestamp } from '../firebase/config';
import getReview from '../composables/getReview';

export default {
  setup() {
    const route = useRoute();
    const { error, review, load } = getReview(route.params.id);

    const title = ref("");
    const reviewedBy = ref("");
    const rating = ref(0);
    const reviewText = ref("");

    const router = useRouter();
    load();

    title.value = route.params.title;
  
    const handleSubmit = async () => {
      var newRatings = review.value.ratings;
      newRatings[reviewedBy.value] = rating.value;
      var newReviews =  review.value.reviews;
      newReviews[reviewedBy.value] = reviewText.value;
      const updatedReview = {
        title: review.value.title,
        watchedOn: review.value.watchedOn,
        link: review.value.link,
        ratings: newRatings,
        reviews: newReviews,
      };

      const res = await projectFirestore.collection('reviews').doc(route.params.id).update(updatedReview);
      console.log(res);

      router.push({ name: 'reviews'});
    }

    return { title, reviewedBy, rating, reviewText, handleSubmit };
  }

}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
</style>