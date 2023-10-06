import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ItemListContainer.module.css';

const products = [
  { id: 1, title: 'Teclado Kumura k552', category: 'electronics' },
  { id: 2, title: 'Monitor Curvo Philips', category: 'electronics' },
  { id: 3, title: 'Mouse Logitech G203', category: 'electronics' },
];

const ItemListContainer = () => {
  const { idCategory } = useParams();

  const filteredProducts = idCategory
    ? products.filter(product => product.category === idCategory)
    : [];

  return (
    <div className={styles['item-list-container']}>
      {filteredProducts.length === 0 ? (
        <p>¡Bienvenido a nuestra tienda en línea!</p>
      ) : (
        <>
          <h2>Productos</h2>
          <ul>
            {filteredProducts.map(product => (
              <li key={product.id}>
                <Link to={`/id/${product.id}`}>
                  <h3>{product.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;