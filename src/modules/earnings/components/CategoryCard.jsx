import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.id}`} className="block">
      <div className={`card hover:translate-y-[-5px] transition-all`}>
        <div className={`p-6 ${category.color} rounded-t-lg`}>
          <div className="text-4xl mb-2">{category.icon}</div>
          <h3 className={`text-xl font-bold ${category.textColor}`}>{category.name}</h3>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4">{category.description}</p>
          <span className="text-blue-600 font-medium inline-flex items-center">
            Explore Options
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}