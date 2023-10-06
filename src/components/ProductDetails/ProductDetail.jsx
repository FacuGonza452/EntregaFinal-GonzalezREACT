import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { mockFetchProductDetail } from '../utils/mockFetch';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    mockFetchProductDetail(parseInt(id))
      .then(setProduct)
      .catch(console.error);
  }, [id]);

  return !product ? null : (
    <div className="product-detail-container">
      <h2 className="product-title">{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-description">Descripción: {product.description}</p>
      <p className="product-price">Precio: ${product.price}</p>
      <div className="product-buttons">
        <button onClick={() => addToCart(product)} className="add-to-cart-button">
          Agregar al carrito
        </button>
        <button onClick={() => removeFromCart(product.id)} className="remove-from-cart-button">
          Quitar del carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;