import React from 'react';
import { Link } from 'react-router-dom';


const productosElectronicos = [
  { id: 1, titulo: 'Teclado Kumura k552', imagen: '/img/teclado.jpg' },
  { id: 2, titulo: 'Monitor Curvo Philips', imagen: '/img/monitor-curvo.jpg' },
  { id: 3, titulo: 'Mouse Logitech G203', imagen: '/img/Mouse.jpg' },
];

const ElectronicsCategoryPage = () => {
  return (
    <div className="text-center">
      <h2>Productos electrónicos</h2>
      <div className="row">
        {productosElectronicos.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <Link to={`/id/${producto.id}`}>
              <img src={producto.imagen} alt={producto.titulo} />
              <h3>{producto.titulo}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsCategoryPage;