<template>
  <div class="review-list">
    <div v-for="review in reviews" :key="review.id">
      <SingleReview :review="review" />
    </div>
  </div>
</template>

<script>

// component imports
import SingleReview from './SingleReview.vue'

export default {
  props: ['reviews'],
  components: { SingleReview },
  setup() {

  }
}
</script>

<style>

</style>