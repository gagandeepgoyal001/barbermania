import React, { useState } from "react";
import "../../styles/CustomerReviews.css";

const CustomerReviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      barberName: "John's Barber Shop",
      review: "Great customer! Very punctual and respectful.",
      rating: 5,
      date: "2024-12-20",
    },
    {
      id: 2,
      barberName: "Elite Barbers",
      review: "Always a pleasure to work with. Highly recommended!",
      rating: 4.5,
      date: "2024-11-15",
    },
    {
      id: 3,
      barberName: "Modern Cuts",
      review: "Friendly and polite customer.",
      rating: 4,
      date: "2024-10-05",
    },
  ]);

  return (
    <div className="customer-reviews">
      <h1>Your Reviews</h1>
      {reviews.length > 0 ? (
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h2>{review.barberName}</h2>
              <p className="review-text">"{review.review}"</p>
              <div className="review-meta">
                <span className="rating">Rating: {review.rating}⭐</span>
                <span className="date">Date: {review.date}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-reviews">No reviews yet. Check back later!</p>
      )}
    </div>
  );
};

export default CustomerReviews;
