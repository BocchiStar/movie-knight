import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getReview = (id) => {

  const review = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await projectFirestore.collection('reviews').doc(id).get();
      if (!res.exists){
        throw Error("That review does not exist");
      }
      review.value = {
        ...res.data(), id: res.id
      };
    }
    catch (err) {
      error.value = err.message;
    }
  }

  return { review, error, load };
}

export default getReview;