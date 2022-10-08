import { projectFirestore, timestamp } from '../firebase/config'

const handleWatchAction = async (nomination) => {

  const newReview = {
    title: nomination.title,
    watchedOn: timestamp(),
    link: nomination.link,
    ratings: {},
    reviews: {},
  }
  try {
    await projectFirestore.collection('reviews').add(newReview);
  } catch (err) {
    return err;
  }

  try {
    await projectFirestore.collection('nominations').doc(nomination.id).delete();
  } catch (err) {
    return err;
  }

  location.reload();
  
  return null;
}

export default handleWatchAction;