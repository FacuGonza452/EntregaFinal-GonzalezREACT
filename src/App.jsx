import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CategoryList from './components/CategoryList/CategoryList';
import ProductDetail from './components/ProductDetails/ProductDetail';
import CartPage from './components/CartPage/CartPage';
import { CartProvider } from './components/Context/CartContext'; 


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <CartProvider> 
      <BrowserRouter>
        <CustomNavbar />
        {isLoading ? (
          <div className="text-center" style={{ minHeight: '100vh' }}>
            <h3>Cargando...</h3>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          <>
           <Route path="/" exact>
              <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
            </Route>
            <Route path="/category/:idCategory">
              <ItemListContainer />
            </Route>
            <Route path="/id/:id">
              <ProductDetail />
            </Route>
            <Route path="/categories">
              <CategoryList />
            </Route>
            <Route path="/cart">
              <CartPage /> 
            </Route>
          </>
        )}
      </BrowserRouter>
    </CartProvider> 
  );
};

export default App;