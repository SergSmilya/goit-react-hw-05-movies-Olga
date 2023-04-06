import { useEffect, useState } from 'react';
import { APISearchMovie } from '../../Utils/API';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import css from './MovieSearch.module.css';

export default function MovieSearch() {
  const [query, setQuery] = useState('');
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const titleToSearch = params.get('search');
  const location = useLocation();

  useEffect(() => {
    if (titleToSearch)
      APISearchMovie(titleToSearch)
        .then(({ data }) => setMovies(data.results))
        .catch(error =>
          toast.error('Something goes wrong! Please, try again!')
        );
  }, [titleToSearch]);

  function onChange(e) {
    setQuery(e.target.value);
  }

  function onSearchClick() {
    setParams({ query });
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter film title"
          value={query}
          name="search"
          onChange={onChange}
          className={css.input}
        />
        <button onClick={onSearchClick} className={css.greenButton}>
          Search
        </button>
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={location}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
