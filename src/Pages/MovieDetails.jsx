import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { APIMovie } from 'Utils/API';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    APIMovie(id)
      .then(({ data }) => setMovie(data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <>
      <Link to={location.state ?? '/'}>Go back</Link>
      {movie && <MovieCard movie={movie} />}
    </>
  );
}
