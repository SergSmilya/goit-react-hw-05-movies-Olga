import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIMovie } from 'Utils/API';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    APIMovie(id)
      .then(({ data }) => setMovie(data))
      .catch(error => console.log(error));
  }, [id]);

    return (
      <>
        <Link>Go back</Link>
        {movie && <MovieCard movie={movie} />}
      </>
    );
}
