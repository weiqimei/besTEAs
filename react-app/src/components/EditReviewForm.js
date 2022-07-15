import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editReview, getReview } from "../store/reviews";

const EditReviewForm = () => {
  const user = useSelector(state => state.session.user);
  const user_id = user.id;
  // console.log(user_id, "THIS IS USER ID---------");

  const { bobaShopId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const { reviewId } = useParams();
  console.log(reviewId, "THIS IS REVIEW ID----from EditReviewForm-----");

  const reviewArray = Object.values(useSelector(state => state.reviewReducer))
  console.log(reviewArray, "THIS IS REVIEW Array---------");

  const review = reviewArray.filter(review => review.id === parseInt(reviewId));

  console.log(review, "----THIS IS REVIEW---------");

  const [content, setContent] = useState(review[0].content);
  const [picture, setPicture] = useState(review[0].picture);
  const [errors, setErrors] = useState([]);
  const [date, setDate] = useState(review.date);

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
    if (picture && !picture.startsWith('https://') && !picture.endsWith('.jpg') && !picture.endsWith('.png') && !picture.endsWith('.jpeg') && !picture.endsWith('.gif')) err.push('Please provide a valid image URL');

    setErrors(err);
  }, [content, picture]);

  useEffect(() => {
    dispatch(getReview(reviewId));
  }, [dispatch, reviewId]);

  // console.log(user_id, "THIS IS USER ID from EditReviewForm.js---------");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      ...review,
      user_id,
      // bobaShopId,
      content,
      picture,
      // date
    };

    console.log(newReview, "THIS IS NEW REVIEW---------");

    let editedReview = await dispatch(editReview(reviewId, newReview));
    if (editedReview) {
      history.push(`/bobaShops/${bobaShopId}`);
    }
  }

  return (
    <>
      <h2 className='log-in-to-beateas'>Edit Your Review</h2>
      <div className='form-div'>

      <form onSubmit={handleSubmit}>
        <div>
          {errors.length > 0 && errors.map((err, i) => (
            <li className='errors' key={i}>{err}</li>
          ))}
        </div>
        <div>
          <input className='add-boba-shop-input-field'
            type='text'
            placeholder='content'
            value={content}
            onChange={updateContent}
          />
        </div>
        <br />

        <div>
          <input className='add-boba-shop-input-field'
            type='text'
            placeholder='picture'
            value={picture}
            onChange={updatePicture}
          />
        </div>
        {/* <input
          type='text'
          placeholder='date'
          value={date}
          onChange={updateDate}
        /> */}
        <br />
        <button className='submit-button' type='submit' disabled={!!errors.length}>Update Review</button>
      </form>
      </div>
    </>
  );
}


export default EditReviewForm;
