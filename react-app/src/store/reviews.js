const GET_REVIEW = 'reviews/GET_REVIEW';
const GET_REVIEWS = 'GET_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';
const EDIT_REVIEW = 'EDIT_REVIEW';
const DELETE_REVIEW = 'DELETE_REVIEW';

const getOneReview = (review) => {
  return {
    type: GET_REVIEW,
    payload: review
  }
}

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews
})

const addOneReview = (review) => {
  return {
    type: ADD_REVIEW,
    payload: review
  }
}

const editOneReview = (review) => {
  return {
    type: EDIT_REVIEW,
    payload: review
  }
}

const deleteOneReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    payload: reviewId
  }
}

export const getReview = (reviewId) => async (dispatch) => {
  console.log(reviewId, "------THIS IS REVIEW ID from getReview reviews.js");

  const response = await fetch(`/api/reviews/${reviewId}`);
  if (response.ok) {
    const review = await response.json();
    dispatch(getOneReview(review));
  }
}

export const getAllReviews = (bobaShopId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${bobaShopId}`);

  console.log(bobaShopId, "---------THIS IS BOBASHOP ID from reviews.js getAllReviews thunk");
  console.log(response, "---------THIS IS RESPONSE from reviews.js getAllReviews thunk");

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getReviews(reviews));
  }
}

export const addReview = (bobaShopId, review, user_id) => async (dispatch) => {
  console.log(review, "THIS IS REVIEW from reviews.js addReview thunk");
  console.log(typeof bobaShopId, "THIS IS BOBASHOPID from reviews.js addReview thunk");

  console.log(typeof user_id, "THIS IS USER_ID from reviews.js addReview thunk");

  let bobaShop_id = parseInt(bobaShopId);
  console.log(typeof bobaShop_id, bobaShop_id, "THIS IS BOBASHOPID from reviews.js addReview thunk");

  const response = await fetch(`/api/reviews/${bobaShop_id}/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  });

  console.log(response, "THIS IS RESPONSE from reviews.js addReview thunk");

  const newReview = await response.json();
  console.log(newReview, "----THIS IS NEW REVIEW----");
  dispatch(addOneReview(newReview));
  return newReview;
}

// export const addReview = (bobaShopId, review) => async (dispatch) => {
//   const response = await fetch(`/api/reviews/${bobaShopId}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(review)
//   }
//   );
//   if (response.ok) {
//     const newReview = await response.json();
//     dispatch(addOneReview(newReview));
//     return newReview;
//   }
// }

export const editReview = (reviewId, review) => async (dispatch) => {
  console.log(reviewId, "THIS IS REVIEWID from reviews.js editReview thunk");
  console.log(review, "THIS IS REVIEW from reviews.js editReview thunk");
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  });
  if (response.ok) {
    const editedReview = await response.json();
    dispatch(editOneReview(editedReview));
    return editedReview;
  }
}


export const deleteReview = (reviewId) => async (dispatch) => {
  console.log(reviewId, "THIS IS REVIEWID from reviews.js deleteReview thunk");
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
    body: JSON.stringify({ reviewId })
  });
  if (response.ok) {
    dispatch(deleteOneReview(reviewId));
  }
}

const initialState = {}

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      const allReviews = {};
      for (let review of action.payload.reviews) {
        allReviews[review.id] = review;
      }
      return { ...allReviews }
    case ADD_REVIEW: // might need to fix this
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case EDIT_REVIEW:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case DELETE_REVIEW:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}

export default reviewReducer;
