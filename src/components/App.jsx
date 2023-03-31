import Home from 'Pages/Home';
import MovieDetails from 'Pages/MovieDetails';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
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
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
