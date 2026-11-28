import { CartItemType } from '../../types/CartItemType';
import styles from './CartItem.styles.module.scss';
import CloseButton from '../../assets/icons/closebutton.svg?react';
import CloseButtonDark from '../../assets/icons/closebutton-dark.svg?react';
import AddIcon from '../../assets/icons/add.svg?react';
import AddIconDark from '../../assets/icons/add-dark.svg?react';
import DisabledIcon from '../../assets/icons/disabled.svg?react';
import DisabledIconDark from '../../assets/icons/disabled-dark.svg?react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  item: CartItemType;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const { theme } = useTheme();

  return (
    <article className={styles.cartItem}>
      <div className={styles.cartItemHead}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => removeFromCart(item.product.itemId)}
        >
          {theme === 'dark' ? <CloseButtonDark /> : <CloseButton />}
        </button>
        <img
          className={styles.image}
          src={item.product.image}
          alt={item.product.name}
        />
        <h4 className={styles.cartItemName}>
          <Link
            to={`/product/${item.product.itemId}`}
            className={styles.productLink}
          >
            {item.product.name}
          </Link>
        </h4>
      </div>

      <div className={styles.cartItemBot}>
        <div className={styles.counter}>
          <button
            type="button"
            className={styles.counterButton}
            onClick={() => decreaseQuantity(item.product.itemId)}
          >
            {theme === 'dark' ? <DisabledIconDark /> : <DisabledIcon />}
          </button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button
            type="button"
            className={styles.counterButton}
            onClick={() => increaseQuantity(item.product.itemId)}
          >
            {theme === 'dark' ? <AddIconDark /> : <AddIcon />}
          </button>
        </div>

        <span className={styles.price}>
          ${item.product.price * item.quantity}
        </span>
      </div>
    </article>
  );
};
