import React from 'react';
import styles from './ItemListContainer.module.css'; // Importa los estilos en módulos

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles['item-list-container']}>
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;