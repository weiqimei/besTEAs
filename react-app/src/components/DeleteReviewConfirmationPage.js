import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getReview, deleteReview } from "../store/reviews";


const DeleteReviewConfirmationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { reviewId } = useParams();
  const { bobaShopId } = useParams();
  
  const review = Object.values(useSelector(state => state.reviewReducer));
  // const reviewId = review[0].id;
  console.log(review, "---------THIS IS REVIEW from DeleteReviewConfirmationPage.js");
  console.log(reviewId, "---------THIS IS REVIEW ID from DeleteReviewConfirmationPage.js");
  console.log(bobaShopId, "---------THIS IS BOBASHOP ID from DeleteReviewConfirmationPage.js");

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteReview(reviewId));
    history.push(`/bobaShops/${bobaShopId}`);
  }

  useEffect(() => {
    dispatch(getReview(reviewId));
  }, [dispatch, reviewId]);

  return (
    <div>
      <h1 className="confirm-delete">Are you sure you want to delete this Review?</h1>
      <button className='submit-button confirm' onClick={handleDelete}>Confirm Delete</button>
    </div>
  )
}

export default DeleteReviewConfirmationPage;
