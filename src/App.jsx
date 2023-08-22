import React from 'react';
import CustomNavbar from './components/Navbar'; 
import ItemListContainer from './components/ItemListContainer'; 

const App = () => {
  return (
    <div>
      <CustomNavbar /> {/* Navbar */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />      
    </div>
  );
};

export default App;