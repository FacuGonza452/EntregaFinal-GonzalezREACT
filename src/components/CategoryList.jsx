import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'electronics', name: 'Electrónica' },
];

const CategoryList = () => {
  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>
              <h3>{category.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;





