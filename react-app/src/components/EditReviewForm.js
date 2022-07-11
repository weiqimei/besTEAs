import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editReview, getReview } from "../store/reviews";

const EditReviewForm = () => {
  const user = useSelector(state => state.session.user);
  const user_id = user.id;
  // console.log(user_id, "THIS IS USER ID---------");

  const dispatch = useDispatch();
  const history = useHistory();

  const { reviewId } = useParams();
  console.log(reviewId, "THIS IS REVIEW ID----from EditReviewForm-----");

  const reviewObject = Object.values(useSelector(state => state.reviewReducer))
  console.log(reviewObject, "THIS IS REVIEW OBJECT---------");
  
  const review = reviewObject[0];
  console.log(review, "----THIS IS REVIEW---------");

  const [content, setContent] = useState(review.content);
  const [picture, setPicture] = useState(review.picture);
  const [date, setDate] = useState(review.date);

  const updateContent = (e) => setContent(e.target.value);
  const updatePicture = (e) => setPicture(e.target.value);
  const updateDate = (e) => setDate(e.target.value);

  // errors handling
  useEffect(() => { }, [content, picture]);

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
    let editedReview = await dispatch(editReview(reviewId, newReview));
    if (editedReview) {
      history.push(`/bobaShops`);
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
      </div>
      <button type='submit'>Update Review</button>
    </form>
  );
}


export default EditReviewForm;
