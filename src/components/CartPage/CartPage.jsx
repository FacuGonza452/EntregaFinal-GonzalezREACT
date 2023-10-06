import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { initFirebase } from '../firebase/config';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import './CartPage.css';

const db = getFirestore(initFirebase());

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [orderNumber, setOrderNumber] = useState(null);

  // Función para calcular el precio total
  const calculateTotal = () => cart.reduce((total, product) => total + product.price * product.quantity, 0);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Registra la orden de compra en Firebase Firestore
      const ordersCollection = collection(db, 'orders');
      const newOrder = {
        // Define los datos de la orden de compra (nombre, teléfono, email, productos, total, etc.)
      };

      // Agrega la orden y obtén el ID del documento generado
      const docRef = await addDoc(ordersCollection, newOrder);

      // Configura el número de orden con el ID del documento
      setOrderNumber(docRef.id);

      // Limpia el carrito después de registrar la orden de compra
      clearCart();

      

    } catch (error) {
      console.error('Error al registrar la orden de compra:', error);
      
    }
  };

  return (
    <div className="cart-container">
      {orderNumber && (
        <div className="order-number-message">
          Se ha generado la orden de compra: {orderNumber}
        </div>
      )}
      {cart.length === 0 ? (
        <div className="empty-cart-message">Carrito vacío. ¡Ve a comprar! ;)</div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.title} />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>Precio Unitario: ${product.price}</p>
                  <p>Cantidad: {product.quantity}</p>
                  <button onClick={() => removeFromCart(product.id)}>Quitar 1</button>
                </div>
              </div>
            ))}
          </div>
          {/* Formulario de compra */}
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Datos de Compra</h2>
            {renderFormInput('name', 'Ingresar nombre', formData.name, handleInputChange)}
            {renderFormInput('phone', 'Ingresar teléfono', formData.phone, handleInputChange)}
            {renderFormInput('email', 'Ingresar email', formData.email, handleInputChange)}
            <button type="submit">Terminar compra</button>
          </form>

          {/* Mostrar el precio total debajo de los datos de compra */}
          <div className="total-price">Precio Total: ${calculateTotal()}</div>
        </>
      )}
    </div>
  );
};

// Función para renderizar los campos del formulario
const renderFormInput = (name, label, value, onChange) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={name === 'email' ? 'email' : 'text'}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Cart;