import { Route, Routes } from 'react-router-dom';

import Home from 'Pages/Home';
import MovieDetails from 'Pages/MovieDetails';
import { lazy } from 'react';
import Movie from 'Pages/Movie';
import SharedLayout from './SharedLayout/SharedLayout';

// import Cast from './Cast';
// import Review from './Review';

const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Review'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
