import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <>
      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
        <ToastContainer autoClose={3000} />
      </main>
    </>
  );
}
