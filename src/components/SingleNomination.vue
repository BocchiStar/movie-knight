<template>
  <div class="nomination">
    <a v-if="nomination.link" :href="nomination.link"> <h3>{{ nomination.title }}</h3></a> 
    <h3 v-else>{{ nomination.title }}</h3>
    <p> Nominated by : {{ nomination.nominatedBy }}</p>
    <a :href="nomination.link" v-if="nomination.link">Details</a>
    <button @click="handleWatch" v-bind:disabled="watchedButtonClicked">We've watched it!</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import handleWatchAction from '@/composables/handleWatchAction';

export default {
  props: ["nomination"],
  setup(props) {
    const watchedButtonClicked = ref(false);

    const handleWatch = () => {
      watchedButtonClicked.value = true;
      console.log(props.nomination.id);
      handleWatchAction(props.nomination);
    }

    return { watchedButtonClicked, handleWatch };
  },
};
</script>

<style>
.nomination {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.nomination h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.nomination h3::before {
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
