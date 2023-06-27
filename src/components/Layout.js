import css from './Layout/Layout.module.css';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink to="/">Home page</NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
