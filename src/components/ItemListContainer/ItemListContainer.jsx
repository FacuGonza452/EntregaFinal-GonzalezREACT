import React from 'react';
import styles from './ItemListContainer.module.css'; 

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles['item-list-container']}>
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;