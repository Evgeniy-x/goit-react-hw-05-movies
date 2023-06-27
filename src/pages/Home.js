import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moviesAPI from '../servises/api';

// import { useSearchParams } from 'react-router-dom';

const api = new moviesAPI();

const Home = () => {
  const [list, setList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    api.fetchTopList().then(res => {
      setList(res.results);
    });
  }, []);
  return (
    <ul>
      {list.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
