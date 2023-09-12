import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; 

const ProductDetail = () => {
  const { id } = useParams(); 

  
  const products = {
    1: {
      title: 'Teclado Kumara k552',
      image: '/img/teclado.jpg',
      description: 'Este es un teclado mecánico de alta calidad...',
    },
    2: {
      title: 'Monitor Curvo Philips',
      image: '/img/monitor-curvo.jpg',
      description: 'Este es un monitor curvo con excelentes características...',
    },
    3: {
      title: 'Mouse Logitech G203',
      image: '/img/Mouse.jpg',
      description: 'Este es un mouse de gaming con seguimiento preciso...',
    },
  };

  
  const product = products[id];

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