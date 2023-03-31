export default function MovieCard({ movie }) {
  const { original_title, poster_path, vote_average, overview } = movie;
  return (
    <>
      <img
        alt={original_title}
        src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
      />
      <h1>{original_title}</h1>
      <p>User score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
    </>
  );
}
