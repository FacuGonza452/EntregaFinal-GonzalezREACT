import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const products = [
  {
    id: 1,
    title: 'Teclado Kumura k552',
    description: 'Este es un teclado mecánico de alta calidad...',
    image: '/img/teclado.jpg',
  },
  {
    id: 2,
    title: 'Monitor Curvo Philips',
    description: 'Este es un monitor curvo con excelentes características...',
    image: '/img/monitor-curvo.jpg',
  },
  {
    id: 3,
    title: 'Mouse Logitech G203',
    description: 'Este es un mouse de gaming con seguimiento preciso...',
    image: '/img/Mouse.jpg',
  },
];

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find(producto => producto.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail-container">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Nombre: {product.title}</p>
      <p>Detalles del producto:</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;