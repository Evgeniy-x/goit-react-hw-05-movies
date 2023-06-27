import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../../servises/api';
import css from './cast.module.css';

const api = new moviesAPI();

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    api
      .fetchMovieCast(movieId)
      .then(res => {
        setCast(res.cast);
      })
      .catch(error => console.error(error));
  }, [movieId]);
  return (
    <div>
      <h3>Cast:</h3>
      <ul className={css.list}>
        {cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              alt={name}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original/${profile_path}`
                  : 'https://img.freepik.com/premium-vector/male-avatar-icon-unknown-or-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-on-white-background-vector-illustration_735449-120.jpg?w=996'
              }
              className={css.images}
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
