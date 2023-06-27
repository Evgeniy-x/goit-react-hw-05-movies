import { useState, useEffect, useRef } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import moviesAPI from '../servises/api';

const api = new moviesAPI();

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    api.fetchMovieDetails(movieId).then(res => {
      setMovie(res);
    });
  }, [movieId]);
  const { title, backdrop_path, vote_average, overview, genres } = movie;
  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <h2>{title}</h2>
      <img
        src={
          backdrop_path &&
          `https://image.tmdb.org/t/p/original/${backdrop_path}`
        }
        alt={title}
        style={{ width: '400px' }}
      ></img>
      <p>{`Popularit: ${vote_average}`}</p>
      <p>
        Overview <br />
        {overview}
      </p>
      <ul>
        {genres?.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
