import { NavLink } from 'react-router-dom';
import css from '../css/AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.navigation}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Login
      </NavLink>
    </div>
  );
};
