import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllReviews, addReview } from '../store/reviews';


const CreateReviewForm = ({ bobaShopId }) => {
  const user = useSelector(state => state.session.user);
  const user_id = user.id;
  console.log(user_id, "THIS IS USER ID from CreateReviewForm.js---------");

  const dispatch = useDispatch();
  const history = useHistory();
  const [content, setContent] = useState('');
  const [picture, setPicture] = useState('');
  // const [date, setDate] = useState('');

  const updateContent = (e) => setContent(e.target.value);
  const updatePicture = (e) => setPicture(e.target.value);
  // const updateDate = (e) => setDate(e.target.value);

  // errors handling
  useEffect(() => { }, [content, picture]);

  useEffect(() => {
    dispatch(getAllReviews(bobaShopId));
  }, [dispatch, bobaShopId]);


  console.log(bobaShopId, "THIS IS BOBASHOP ID from CreateReviewForm.js---------");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      user_id,
      bobaShopId,
      content,
      picture,
      // date
    };
    let review = await dispatch(addReview(bobaShopId, newReview, user_id));
    if (review) {
      history.push(`/bobaShops/${bobaShopId}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          placeholder='content'
          value={content}
          onChange={updateContent}
        />
        <input
          type='text'
          placeholder='picture'
          value={picture}
          onChange={updatePicture}
        />
        {/* <input
          type='text'
          placeholder='date'
          value={date}
          onChange={updateDate}
        /> */}
        <button type="submit">Submit Review</button>
      </div>
    </form>
  )
}

// const CreateReviewForm = ({ bobaShopId }) => {
//   const user = useSelector(state => state.session.user);
//   const user_id = user.id;

//   const dispatch = useDispatch();

//   const [content, setContent] = useState('');
//   const [picture, setPicture] = useState('');
//   const [date, setDate] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newReview = await dispatch(addReview(
//       user_id,
//       bobaShopId,
//       content,
//       picture,
//       date
//     ));
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type='text'
//             placeholder='content'
//             value={content}
//             onChange={e => setContent(e.target.value)}
//           />
//           <input
//             type='text'
//             placeholder='picture'
//             value={picture}
//             onChange={e => setPicture(e.target.value)}
//           />
//           <input
//             type='text'
//             placeholder='date'
//             value={date}
//             onChange={e => setDate(e.target.value)}
//           />
//           <button type="submit">Submit Review</button>
//         </div>
//       </form>
//     </>
//   )
// }

export default CreateReviewForm;
