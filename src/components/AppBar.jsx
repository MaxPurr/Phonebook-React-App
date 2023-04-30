import { Navigation } from './Navigation';
import { useAuth } from '../hooks/useAuth';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import css from '../css/AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
