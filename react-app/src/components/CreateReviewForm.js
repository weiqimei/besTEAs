import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllReviews, addReview } from '../store/reviews';
import './CreateReviewForm.css';

const CreateReviewForm = ({ bobaShopId }) => {
  const user = useSelector(state => state.session.user);
  const user_id = user.id;
  // console.log(user_id, "THIS IS USER ID from CreateReviewForm.js---------");

  const dispatch = useDispatch();
  const history = useHistory();
  const [content, setContent] = useState('');
  const [picture, setPicture] = useState('');
  const [errors, setErrors] = useState([]);

  // const [date, setDate] = useState('');

  const updateContent = (e) => setContent(e.target.value);
  const updatePicture = (e) => setPicture(e.target.value);

  // const updateDate = (e) => setDate(e.target.value);

  // errors handling
  useEffect(() => {
    const err = [];
    if (!content) err.push('Please enter a review');
    if (content.startsWith(' ')) err.push('Review cannot start with a space');
    if (content.length > 255) err.push('Review must be less than 255 characters');
    if (!picture) err.push('Please add a picture');
    if (picture.startsWith(' ')) err.push('Picture cannot start with a space');
    if (picture && !picture.startsWith('https://') && !picture.endsWith('.jpg') && !picture.endsWith('.png') && !picture.endsWith('.jpeg')) err.push('Please provide a valid image URL');

    setErrors(err);
  }, [content, picture]);

  useEffect(() => {
    dispatch(getAllReviews(bobaShopId));
  }, [dispatch, bobaShopId]);


  // console.log(bobaShopId, "THIS IS BOBASHOP ID from CreateReviewForm.js---------");

  const reset = () => {
    setContent("");
    setPicture("");
  }

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
      reset();
    }
  }

  return (
    <>
      <h2 className='add-review-title'>Add a Review</h2>
      <div className=''>
      <form onSubmit={handleSubmit}>
        <div>
          {errors.length > 0 && errors.map((err, i) => (
            <li className='errors' key={i}>{err}</li>
          ))}
        </div>
        <br />
        <div>
          <input className='input-field'
            type='text'
            placeholder='Review goes here (e.g. I love this boba shop!!)'
            value={content}
            onChange={updateContent}
          />
        </div>
        <br />
        <div>
            <input className='input-field'
            type='text'
            placeholder='Provide an image URL to show off the boba you ordered!'
            value={picture}
            onChange={updatePicture}
          />
        </div>
        <br />
        {/* <input
          type='text'
          placeholder='date'
          value={date}
          onChange={updateDate}
        /> */}
          <button className='submit-button' type="submit" disabled={!!errors.length}>Submit Review</button>
      </form>
      </div>
    </>
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
