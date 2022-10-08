<template>
  <div class="add-nomination">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required>
      <label>NominatedBy:</label>
      <input v-model="nominatedBy" type="text" required>
      <label>Link for more details:</label>
      <input v-model="link" type="text">
      <button>Nominate!</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectFirestore, timestamp } from '../firebase/config'

export default {
  setup() {
    const title = ref("");
    const nominatedBy = ref("");
    const link = ref("");

    const router = useRouter();

    const handleSubmit = async () => {
      const nomination = {
        title: title.value,
        nominatedBy: nominatedBy.value,
        link: link.value,
        nominatedAt: timestamp(),
      };

      const res = await projectFirestore.collection('nominations').add(nomination);
      console.log(res);

      router.push({ name: 'nominations'});
    }

    return { title, nominatedBy, link, handleSubmit };
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