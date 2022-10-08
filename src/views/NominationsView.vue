<template>
  <div class="nomination-view">
    <button @click="handlePick">Pick a movie!</button>
    <button @click="handleAdd">Add a new nomination</button>
    <div v-if="pickedTitle">
      The secret power from the east has picked {{ pickedTitle }}
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="nominations.length" class="layout">
      <NominationList :nominations="nominations" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import getNominations from "../composables/getNominations";
import NominationList from "../components/NominationList.vue";
export default {
  name: "NominationsView",
  components: { NominationList },
  setup() {
    const router = useRouter()
    const { nominations, error, load } = getNominations();
    const pickedTitle = ref("");
    
    load();

    const handlePick = () => {
      pickedTitle.value = nominations.value[Math.floor(Math.random() * nominations.value.length)].title;
    };

    const handleAdd = () => {
      router.push({ name: "addnomination"});
    }

    return { nominations, error, pickedTitle, handlePick, handleAdd };
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