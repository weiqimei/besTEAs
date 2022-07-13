import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from "react-router-dom";
import { getAllBobaShops, getBobaShop } from '../store/bobashops';
import './Reviews.css';


function Reviews({ reviews }) {
  const { bobaShopId } = useParams();
  const dispatch = useDispatch();

  // console.log(typeof bobaShopId, "THIS IS BOBASHOPID from Reviews.js");

  const sessionUser = useSelector((state) => state.session.user)
  console.log(sessionUser, '----This is sessionUser from Reviews.js');

  const reviewsObject = useSelector(state => state.reviewReducer);
  const bobaShopReviews = Object.values(reviewsObject)
  // const targetReview = bobaShopReviews.filter(review => review.user_id === sessionUser.id);
  // console.log(reviewsObject, '----This is reviewsObject from Reviews.js');
  // console.log(bobaShopReviews, '----This is bobaShopReviews from Reviews.js');
  // console.log(targetReview, '----This is targetReview from Reviews.js');

  useEffect(() => {
    dispatch(getBobaShop(bobaShopId));
  }, [dispatch, bobaShopId]);

  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => {
          return <li key={review.id}>
            <div>{review.content}</div>
            <div className='review-image' style={{ backgroundImage: `url(${review.picture})` }}></div>
            <div>Date Reviewed: {review.date}</div>
            {
              sessionUser?.id === review.user_id &&
              <NavLink to={`/bobaShops/${bobaShopId}/${review.id}/edit`}>
                <button>Edit Review</button>
              </NavLink>}
            {
              sessionUser?.id === review.user_id &&
              <NavLink to={`/bobaShops/${bobaShopId}/${review.id}/delete`}>
                <button>Delete Review</button>
              </NavLink>}
          </li>
        })}
      </ul>
    </>
  )
}

// import CreateReviewForm from "./CreateReviewForm";

// const Reviews = ({ bobaShopId, reviews, user }) => {
//   return (
//     <>
//       <h2>Reviews</h2>
//       <ul>
//         {reviews.map((review) => {
//           return <li key={review.id}>
//             <div>{review.content}</div>
//             <div className='boba-image' style={{ backgroundImage: `url(${review.picture})` }}></div>
//             <div>Date Reviewed: {review.date}</div>
//             {/* add the other review columns */}
//           </li>
//         })}
//       </ul>
//       <CreateReviewForm bobaShopId={bobaShopId} user_id={user.id} />
//     </>
//   )
// }

export default Reviews;
