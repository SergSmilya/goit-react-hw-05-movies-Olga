import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { APIMovie } from 'Utils/API';
import css from './MovieDetailsComponent.module.css';

export default function MovieDetailsComponent() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    APIMovie(id)
      .then(({ data }) => setMovie(data))
      .catch(error => toast.error('Something goes wrong! Please, try again!'));
  }, [id]);

  return (
    <>
      <Link to={location.state ?? '/'} className={css.greenButton}>
        Go back
      </Link>
      {movie && <MovieCard movie={movie} />}
    </>
  );
}
