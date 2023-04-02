import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;

  const genre = genres.map(genre => genre.name).join(' ');

  return (
    <>
      <img
        alt={original_title}
        src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
      />
      <h1>
        {original_title} ({Number.parseInt(release_date)})
      </h1>
      <p>User score: {(vote_average * 10).toFixed(0)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genre}</p>
      <Link to="cast">Cast</Link>
      <Link to="review">Review</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
