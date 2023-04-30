import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import css from '../css/Container.module.css';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <div className={css.container}>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
