const GET_REVIEWS = 'GET_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';


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


export const getAllReviews = (bobaShopId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${bobaShopId}`);

  console.log(bobaShopId, "---------THIS IS BOBASHOP ID from reviews.js getAllReviews thunk");
  console.log(response, "---------THIS IS RESPONSE from reviews.js getAllReviews thunk");

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getReviews(reviews));
  }
}

// this is not working!!!
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
      const newState = {
        ...state,
        [action.payload.id]: action.payload
      }
      return newState;
    default:
      return state;
  }
}

export default reviewReducer;
