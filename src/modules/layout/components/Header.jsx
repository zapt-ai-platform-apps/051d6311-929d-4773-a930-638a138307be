import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { earningCategories } from '../../earnings/data/categories';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            <span className="mr-2">💰</span>
            Earn Online Guide
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            
            {earningCategories.map(category => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className={`font-medium ${location.pathname === `/category/${category.id}` ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                {category.name}
              </Link>
            ))}
            
            <Link 
              to="/resources" 
              className={`font-medium ${location.pathname === '/resources' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Resources
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pb-2 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`p-2 rounded ${location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {earningCategories.map(category => (
                <Link 
                  key={category.id} 
                  to={`/category/${category.id}`}
                  className={`p-2 rounded ${location.pathname === `/category/${category.id}` ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              
              <Link 
                to="/resources" 
                className={`p-2 rounded ${location.pathname === '/resources' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}