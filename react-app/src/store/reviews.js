const GET_REVIEWS = 'GET_REVIEWS';


const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews
})


export const getAllReviews = (bobaShopId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${bobaShopId}`);

  console.log(bobaShopId, "---------THIS IS BOBASHOP ID from reviews.js getAllReviews thunk");
  console.log(response, "---------THIS IS RESPONSE from reviews.js getAllReviews thunk");

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getReviews(reviews));
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
    default:
      return state;
  }
}

export default reviewReducer;
