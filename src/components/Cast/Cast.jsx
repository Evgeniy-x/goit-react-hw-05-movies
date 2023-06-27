import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../../servises/api';

const api = new moviesAPI();

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    api.fetchMovieCast(movieId).then(res => {
      setCast(res.cast);
    });
  }, [movieId]);
  return (
    <div>
      <p>Cast:</p>
      <ul>
        {cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <p>{name}</p>
            <img
              alt={name}
              src={`https://image.tmdb.org/t/p/original/${profile_path}`}
              style={{ width: '60px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
