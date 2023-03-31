import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APITrending } from '../Utils/API';

export default function Home() {
  const [movies, setMovies] = useState([]);

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
          <Link to={`/movies/${id}`}>{original_title}</Link>
        </li>
      ))}
    </ul>
  );
}
