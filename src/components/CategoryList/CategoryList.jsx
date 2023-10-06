import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';

const categories = [
  { id: 'electronics', name: 'Electrónica' },
];

const CategoryList = () => {
  return (
    <div className="category-list-container">
      <h2 className="category-list-title">Categorías</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            <Link to={`/category/${category.id}`} className="category-link">
              <h3 className="category-name">{category.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;


