import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getReviews = () => {
  const reviews = ref([]);
  const error = ref(null);


  const load = async () => {
    try {
      const res = await projectFirestore.collection('reviews').get();
      
      reviews.value = res.docs.map(review => {
        console.log(review.data());
        return  { ...review.data(), id: review.id};
      })
    } catch (err) {
      error.value = err.message;
    }
  }

  return  { reviews, error, load };
}

export default getReviews;
