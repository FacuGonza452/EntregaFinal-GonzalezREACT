import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './Context/CartContext';

const CustomNavbar = () => {
  const { cart } = useCart();

  const calculateTotalItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const totalItems = calculateTotalItems();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Ecommerce</Link>
        <button className="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categorias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                {totalItems > 0 ? `Carrito (${totalItems})` : 'Carrito'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
