import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { earningCategories } from '../data/categories';
import { earningMethods } from '../data/methods';
import MethodCard from './MethodCard';

export default function CategoryPage() {
  const { categoryId } = useParams();
  
  // Find the category
  const category = earningCategories.find(cat => cat.id === categoryId);
  
  // If category doesn't exist, redirect to home
  if (!category) {
    return <Navigate to="/" />;
  }
  
  // Get methods for this category
  const methods = earningMethods.filter(method => method.categoryId === categoryId);

  return (
    <div className="container-custom py-8">
      {/* Category Header */}
      <div className={`${category.color} rounded-xl p-8 mb-8`}>
        <Link to="/" className="text-blue-600 font-medium flex items-center mb-4">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Categories
        </Link>
        
        <div className="flex items-center mb-4">
          <span className="text-5xl mr-4">{category.icon}</span>
          <h1 className={`text-3xl md:text-4xl font-bold ${category.textColor}`}>{category.name}</h1>
        </div>
        
        <p className={`text-xl ${category.textColor}`}>{category.description}</p>
      </div>
      
      {/* Methods Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Ways to Earn with {category.name}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map(method => (
            <MethodCard key={method.id} method={method} />
          ))}
        </div>
        
        {methods.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No methods found for this category.</p>
          </div>
        )}
      </section>
      
      {/* Category Navigation */}
      <section className="mt-12 border-t pt-8">
        <h3 className="text-lg font-semibold mb-4">Explore Other Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {earningCategories
            .filter(cat => cat.id !== categoryId)
            .map(cat => (
              <Link 
                key={cat.id}
                to={`/category/${cat.id}`}
                className={`${cat.color} ${cat.textColor} p-4 rounded-lg text-center hover:opacity-90 transition-opacity`}
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <span className="font-medium">{cat.name}</span>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}