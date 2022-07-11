import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from "react-router-dom";
import { getAllBobaShops, getBobaShop } from '../store/bobashops';


function Reviews({ reviews }) {
  const { bobaShopId } = useParams();
  const dispatch = useDispatch();

  // console.log(typeof bobaShopId, "THIS IS BOBASHOPID from Reviews.js");

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
            <div className='boba-image' style={{ backgroundImage: `url(${review.picture})` }}></div>
            <div>Date Reviewed: {review.date}</div>
            {/* add the other review columns */}
            <NavLink to={`/bobaShops/${bobaShopId}/${review.id}/edit`}>
              <button>Edit Review</button>
            </NavLink>
            <NavLink to={`/bobaShops/${bobaShopId}/${review.id}/delete`}>
              <button>Delete Review</button>
            </NavLink>
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
