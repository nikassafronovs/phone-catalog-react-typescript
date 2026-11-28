import { Logo } from '../../../../components/Logo';
import styles from './TopBar.styles.module.scss';
import BurgerIcon from '../../../../assets/icons/menu.svg?react';
import BurgerIconDark from '../../../../assets/icons/menu-dark.svg?react';
import { Nav } from '../Nav';
import FavoritesHeart from '../../../../assets/icons/favouritesheart.svg?react';
// eslint-disable-next-line max-len
import FavoritesHeartDark from '../../../../assets/icons/favouritesheart-dark.svg?react';
import FavoritesBag from '../../../../assets/icons/shoppingbag.svg?react';
// eslint-disable-next-line max-len
import FavoritesBagDark from '../../../../assets/icons/shoppingbag-dark.svg?react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useFavorites } from '../../../../context';
import { useCart } from '../../../../context/CartContext';
import { ThemeSwitcher } from '../../../../components/ThemeSwitcher';
import { useTheme } from '../../../../context/ThemeContext';

type Props = {
  onMenuToggle: () => void;
};

export const TopBar = ({ onMenuToggle }: Props) => {
  const { favorites } = useFavorites();
  const { cart } = useCart();
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <div className={styles.desktopNav}>
          <Nav variant="desktop" />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.themeWrapper}>
          <ThemeSwitcher />
        </div>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            classNames(styles.favoritesHeart, {
              [styles.active]: isActive,
            })
          }
          aria-label="Open favorites"
        >
          <div className={styles.iconWrapper}>
            {theme === 'dark' ? <FavoritesHeartDark /> : <FavoritesHeart />}

            {favorites.length > 0 && (
              <span className={styles.counter}>{favorites.length}</span>
            )}
          </div>
        </NavLink>

        <NavLink
          to="/cart"
          state={{ from: location.pathname }}
          className={({ isActive }) =>
            classNames(styles.favoritesBag, {
              [styles.active]: isActive,
            })
          }
          aria-label="Open Cart"
        >
          <div className={styles.iconWrapper}>
            {theme === 'dark' ? <FavoritesBagDark /> : <FavoritesBag />}
            {cart.length > 0 && (
              <span className={styles.counter}>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </div>
        </NavLink>

        <button type="button" className={styles.burger} onClick={onMenuToggle}>
          {theme === 'dark' ? <BurgerIconDark /> : <BurgerIcon />}
        </button>
      </div>
    </div>
  );
};
