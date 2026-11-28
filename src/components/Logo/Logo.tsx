import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/logo/logo.svg?react';
import LogoDark from '../../assets/logo/logo-dark.svg?react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Logo.module.scss';

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link to="/" className={styles.Link} aria-label="Nice Gadgets Home">
      {theme === 'dark' ? (
        <LogoDark className={styles.logo} />
      ) : (
        <LogoIcon className={styles.logo} />
      )}
    </Link>
  );
};
