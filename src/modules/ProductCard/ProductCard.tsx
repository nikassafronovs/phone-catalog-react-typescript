import React from 'react';
import { Product } from '../../types/Products';
import styles from './ProductCard.styles.module.scss';
import FavoritesHeart from '../../assets/icons/favouritesheart.svg?react';
// eslint-disable-next-line max-len
import FavoritesHeartDark from '../../assets/icons/favouritesheart-dark.svg?react';
import FavoritesFilled from '../../assets/icons/favouritesHeatFilled.svg?react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context';
import { useCart } from '../../context/CartContext';
import classNames from 'classnames';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  product: Product;
  showDiscount?: boolean;
};

export const ProductCard: React.FC<Props> = ({
  product,
  showDiscount = true,
}) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart, removeFromCart, isInCart } = useCart();

  const favorite = isFavorite(product.itemId);
  const inCart = isInCart(product.itemId);
  const { theme } = useTheme();

  const handleCartClick = () => {
    if (inCart) {
      removeFromCart(product.itemId);
    } else {
      addToCart(product);
    }
  };

  const getFavoriteIcon = () => {
    if (favorite) {
      return <FavoritesFilled />;
    }

    return theme === 'dark' ? <FavoritesHeartDark /> : <FavoritesHeart />;
  };

  return (
    <article className={styles.card}>
      <Link to={`/product/${product.itemId}`}>
        <img className={styles.image} src={product.image} alt={product.name} />
      </Link>
      <Link to={`/product/${product.itemId}`} className={styles.productLink}>
        <h3 className={styles.card__name}>{product.name}</h3>
      </Link>
      <div className={styles.card__price}>
        {showDiscount ? (
          <>
            <span className={styles.price__discount}>${product.price}</span>
            <span className={styles.price__regular}>${product.fullPrice}</span>
          </>
        ) : (
          <span className={styles.price__discount}>${product.fullPrice}</span>
        )}
      </div>
      <div className={styles.card__info}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Screen</span>
          <span className={styles.infoValue}>{product.screen}</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Capacity</span>
          <span className={styles.infoValue}>{product.capacity}</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>RAM</span>
          <span className={styles.infoValue}>{product.ram}</span>
        </div>
      </div>
      <div className={styles.card__buttons}>
        <button
          type="button"
          className={classNames(styles.addToCart, {
            [styles.added]: inCart,
          })}
          onClick={handleCartClick}
        >
          {inCart ? 'Added to cart' : 'Add to cart'}
        </button>
        <button
          type="button"
          className={styles.addToFavorite}
          onClick={() => toggleFavorite(product)}
        >
          {getFavoriteIcon()}
        </button>
      </div>
    </article>
  );
};
