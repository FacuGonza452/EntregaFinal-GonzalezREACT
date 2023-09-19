import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ItemListContainer.module.css';

const products = [
  { id: 1, title: 'Teclado Kumura k552', category: 'electronics' },
  { id: 2, title: 'Monitor Curvo Philips', category: 'electronics' },
  { id: 3, title: 'Mouse Logitech G203', category: 'electronics' },
];

const ItemListContainer = ({ greeting, isLoading }) => {
  const { idCategory } = useParams();

  const isHomePage = !idCategory;

  
  const filteredProducts = isHomePage
    ? []
    : products.filter(product => product.category === idCategory);

  return (
    <div className={styles['item-list-container']}>
      <h2>Productos</h2>
      <ul>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          isHomePage ? (
            <p>{greeting}</p>
          ) : (
            filteredProducts.map(product => (
              <li key={product.id}>
                <Link to={`/id/${product.id}`}>
                  <h3>{product.title}</h3>
                </Link>
              </li>
            ))
          )
        )}
      </ul>
    </div>
  );
};

export default ItemListContainer;