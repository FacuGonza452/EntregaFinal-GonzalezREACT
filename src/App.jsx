import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CategoryList from './components/CategoryList'; 
import ElectronicsCategoryPage from './components/ElectronicsCategoryPage'; 
import ProductDetail from './components/ProductDetails/ProductDetail';  

const LoadingIndicator = () => (
  <div className="text-center" style={{ minHeight: '100vh' }}>
    <h3>Cargando...</h3>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
  }, []);

  return (
    <Router>
      <div>
        <CustomNavbar />
        <Switch>
          <Route path="/" exact>
            {isLoading ? <LoadingIndicator /> : <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />}
          </Route>
          <Route path="/category/electronics">
            {isLoading ? <LoadingIndicator /> : <ElectronicsCategoryPage />}
          </Route>
          <Route path="/id/:id">
            {isLoading ? <LoadingIndicator /> : <ProductDetail />}  
          </Route>
          <Route path="/categories">
            {isLoading ? <LoadingIndicator /> : <CategoryList />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;