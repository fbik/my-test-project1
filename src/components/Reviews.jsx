import React, { useState, useEffect } from 'react';
import { fetchReviews } from '../api/reviews';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews()
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="reviews">
      {loading ? (
        <p>Загрузка отзывов...</p>
      ) : (
        reviews.map(review => (
          <div key={review.id} dangerouslySetInnerHTML={{ __html: review.text }} />
        ))
      )}
    </div>
  );
}

export default Reviews;