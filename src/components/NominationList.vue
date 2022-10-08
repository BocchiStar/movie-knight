<template>
  <div class="nomination-list">
    <div v-for="nomination in nominations" :key="nomination.id">
      <SingleNomination :nomination="nomination" />
    </div>
  </div>
</template>

<script>

// component imports
import SingleNomination from './SingleNomination.vue'

export default {
  props: ['nominations'],
  components: { SingleNomination },
  setup() {

  }
}
</script>

<style>

</style>