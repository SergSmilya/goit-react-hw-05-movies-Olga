import { NavLink, Route, Routes } from 'react-router-dom';

import Home from 'Pages/Home';
import MovieDetails from 'Pages/MovieDetails';
import { lazy } from 'react';
// import Cast from './Cast';
// import Review from './Review';

const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Review'));

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={'Movies'} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
};
