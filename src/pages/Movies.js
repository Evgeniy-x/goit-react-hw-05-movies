import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import moviesAPI from '../servises/api';

const api = new moviesAPI();

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieId = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!searchParams) {
      return;
    }
    api
      .fetchMovie(searchParams)
      .then(res => {
        setMovies(res.results);
      })
      .catch(erorr => console.log(erorr));
  }, [searchParams]);

  const onSubmitSearch = evt => {
    evt.preventDefault();

    api
      .fetchMovie(searchParams)
      .then(res => {
        setMovies(res.results);
      })
      .catch(erorr => console.log(erorr));
  };

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value });
  };

  return (
    <>
      <form onSubmit={onSubmitSearch}>
        <input type="text" value={movieId} onChange={updateQueryString} />

        <button type="Submit">Search</button>
      </form>

      <div>
        <ul>
          {movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Movies;
