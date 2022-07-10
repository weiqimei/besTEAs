function Reviews({ reviews }) {
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
          </li>
        })}
      </ul>
    </>
  )
}

export default Reviews;
