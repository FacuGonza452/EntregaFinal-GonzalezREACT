import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ItemListContainer.module.css';

const products = [
  { id: 1, title: 'Teclado Kumura k552', category: 'electronics' },
  { id: 2, title: 'Monitor Curvo Philips', category: 'electronics' },
  { id: 3, title: 'Mouse Logitech G203', category: 'electronics' },
  { id: 4, title: 'Ejemplo de otro producto', category: 'otra-categoria' },
  // Agrega más productos si es necesario
];

const ItemListContainer = ({ greeting }) => {
  const { idCategory } = useParams();

  const isHomePage = !idCategory;

  // Filtrar productos por categoría si no estás en la página de inicio
  const filteredProducts = isHomePage
    ? []
    : products.filter(product => product.category === idCategory);

  return (
    <div className={styles['item-list-container']}>
      {isHomePage ? (
        <p>{greeting}</p>
      ) : (
        <>
          <h2>Productos</h2> {/* Esta línea muestra "Productos" solo en las categorías */}
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