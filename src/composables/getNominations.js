import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getNominations = () => {
  const nominations = ref([]);
  const error = ref(null);


  const load = async () => {
    try {
      const res = await projectFirestore.collection('nominations').get();
      
      nominations.value = res.docs.map(nomination => {
        console.log(nomination.data());
        return  { ...nomination.data(), id: nomination.id};
      })
    } catch (err) {
      error.value = err.message;
    }
  }

  return  { nominations, error, load };
}

export default getNominations;
