import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewForm from "./ReviewForm";

const Review = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://192.168.2.61:8080/api/review/product/${productId}`
        );
        setReviews(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to fetch reviews");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            {/* <p>User: {review.user.name}</p> */}
            <p>Review: {review.review}</p>
            <p>Created At: {new Date(review.createAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <ReviewForm productId={productId} />
    </div>
  );
};

export default Review;
