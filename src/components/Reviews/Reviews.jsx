import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../../servises/api';

const api = new moviesAPI();

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.fetchMovieReviews(movieId).then(res => {
      setReviews(res.results);
    });
  }, [movieId]);
  return (
    <div>
      <p>Reviews:</p>
      <ul>
        {reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
