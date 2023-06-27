import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import moviesAPI from '../servises/api';
import css from './css/movie-details.module.css';

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
    <div className={css.container}>
      <Link to={backLinkLocationRef.current} className={css.button}>
        ~ Go back
      </Link>
      <div className={css.section}>
        <img
          src={
            backdrop_path &&
            `https://image.tmdb.org/t/p/original/${backdrop_path}`
          }
          alt={title}
          className={css.image}
        />
        <div className={css.data}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.rating}>{`Popularit: ${vote_average}`}</p>
          <h3>Overview</h3>
          <p className={css.overview}>{overview}</p>

          <h3 className={css.genresTitle}>Genres</h3>
          <ul className={css.genresList}>
            {genres?.map(({ id, name }) => (
              <li key={id} className={css.genresItem}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
