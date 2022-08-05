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
    <div className='review-page-div'>
      <h2 className='reviews-title'>Reviews</h2>
      <div>
        {reviews.map((review) => {
          return <div className='each-review' key={review.id}>
            {/* <div>{review.user_id}</div> */}
            <div className='review-content'>
              <div>Reviewed By: {review.user.first_name} {review.user.last_name}</div>
            </div>
            <div className='review-content'>
              <div>{review.content}</div>
            </div>
            <div className='review-content'>
              <div className='review-image' style={{ backgroundImage: `url(${review.picture})` }}></div>
            </div>
            <div className='date-reviewed'>
              <div>Date Reviewed: {review.date}</div>
            </div>

            {/* <div>Review By: {sessionUser.first_name}</div> */}

            <div className='edit-delete-review-buttons'>
              {
                sessionUser?.id === review.user_id &&
                <NavLink to={`/bobaShops/${bobaShopId}/${review.id}/edit`}>
                  <button className='button'>Edit Review</button>
                </NavLink>}
              {
                sessionUser?.id === review.user_id &&
                <NavLink to={`/bobaShops/${bobaShopId}/${review.id}/delete`}>
                  <button className='button'>Delete Review</button>
                </NavLink>}
            </div>
          </div>
        })}

      </div>
    </div>
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
