import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import css from '../css/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.user_menu}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button
        className={css.log_out_btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
