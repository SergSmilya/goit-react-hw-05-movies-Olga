import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APITrending } from '../Utils/API';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    APITrending()
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={location}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
