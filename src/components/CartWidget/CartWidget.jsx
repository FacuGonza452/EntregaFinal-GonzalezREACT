import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './CartWidget.module.css';

const CartWidget = () => {
  const itemCount = 3; // Número hardcodeado para la notificación

  return (
    <div className={styles['cart-widget']}>
      <span className={styles['cart-icon']}>
        <FaShoppingCart />
      </span>
      <span className={styles['item-count']}>{itemCount}</span>
    </div>
  );
};

export default CartWidget;