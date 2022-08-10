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
      <h2 className='reviews-title'>Recommended Reviews</h2>
      <div>
        {reviews.map((review) => {
          return <div className='each-review' key={review.id}>
            {/* <div className='ellipsis'>
              <svg xmlns="http://www.w3.org/2000/svg" className='ellipsis-icon' viewBox="0 0 448 512"><path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z" /></svg>
              </div> */}
            <div className='review-content-username'>
              <div className='review-username-div'>
                <div className='prof-pic'>
                </div>
                <div className='name-and-date'>
                  <div className='username-div'>
                    {review.user.first_name} {review.user.last_name[0]}.
                  </div>
                  <div className='date-reviewed'>
                    <div>Reviewed: {review.date.slice(0, 16)}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='review-text-and-image'>
              <div className='review-content'>
                <div className='review-text'>{review.content}</div>
              </div>
              <div className='review-content'>
                <div className='review-image' style={{ backgroundImage: `url(${review.picture})` }}></div>
              </div>
            </div>

            {/* <div>Review By: {sessionUser.first_name}</div> */}

            <div className='edit-delete-review-buttons'>
              {
                sessionUser?.id === review.user_id &&
                <NavLink to={`/bobaShops/${bobaShopId}/${review.id}/edit`}>
                  {/* <button className='button'>Edit Review</button> */}
                  <svg xmlns="http://www.w3.org/2000/svg" className='edit-icon' viewBox="0 0 512 512"><path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" /></svg>
                </NavLink>}
              {
                sessionUser?.id === review.user_id &&
                <NavLink to={`/bobaShops/${bobaShopId}/${review.id}/delete`}>
                  {/* <button className='button'>Delete Review</button> */}
                  <svg xmlns="http://www.w3.org/2000/svg" className='delete-icon' viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg>
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
