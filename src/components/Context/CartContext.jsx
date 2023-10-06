import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (productToAdd) => {
    // Verificar si el producto ya está en el carrito
    const productIndex = cart.findIndex((product) => product.id === productToAdd.id);

    if (productIndex !== -1) {
      // Si el producto ya está en el carrito, incrementar la cantidad
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  // Función para quitar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
      if (updatedCart[productIndex].quantity > 1) {
        // Si hay más de 1 unidad, simplemente decrementar la cantidad
        updatedCart[productIndex].quantity -= 1;
      } else {
        // Si solo hay 1 unidad, eliminar el producto del carrito
        updatedCart.splice(productIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  // Función para obtener el número total de productos en el carrito
  const getTotalItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
