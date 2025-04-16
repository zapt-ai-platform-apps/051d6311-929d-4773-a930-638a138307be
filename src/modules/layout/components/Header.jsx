import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { earningCategories } from '../../earnings/data/categories';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isToolsOpen) setIsToolsOpen(false);
  };

  const toggleTools = () => {
    setIsToolsOpen(!isToolsOpen);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsToolsOpen(false);
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
            
            <div className="relative">
              <button 
                onClick={toggleTools}
                className={`font-medium flex items-center ${
                  ['/path-finder', '/income-calculator', '/get-started', '/success-stories', '/compare'].includes(location.pathname) 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Tools & Resources
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isToolsOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-20 py-1">
                  <Link 
                    to="/path-finder" 
                    onClick={closeMenus}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    👣 Find Your Earning Path
                  </Link>
                  <Link 
                    to="/income-calculator" 
                    onClick={closeMenus}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    🧮 Income Calculator
                  </Link>
                  <Link 
                    to="/compare" 
                    onClick={closeMenus}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    ⚖️ Compare Methods
                  </Link>
                  <Link 
                    to="/get-started" 
                    onClick={closeMenus}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    🚀 Getting Started Guide
                  </Link>
                  <Link 
                    to="/success-stories" 
                    onClick={closeMenus}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    🏆 Success Stories
                  </Link>
                  <Link 
                    to="/resources" 
                    onClick={closeMenus}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    📚 Learning Resources
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pb-2 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`p-2 rounded ${location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={closeMenus}
              >
                Home
              </Link>
              
              {earningCategories.map(category => (
                <Link 
                  key={category.id} 
                  to={`/category/${category.id}`}
                  className={`p-2 rounded ${location.pathname === `/category/${category.id}` ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={closeMenus}
                >
                  {category.name}
                </Link>
              ))}
              
              <div className="border-t border-gray-200 pt-2">
                <div className="font-medium p-2 text-gray-500">Tools & Resources</div>
                <Link 
                  to="/path-finder" 
                  className={`p-2 pl-4 rounded ${location.pathname === '/path-finder' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={closeMenus}
                >
                  👣 Find Your Earning Path
                </Link>
                <Link 
                  to="/income-calculator" 
                  className={`p-2 pl-4 rounded ${location.pathname === '/income-calculator' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={closeMenus}
                >
                  🧮 Income Calculator
                </Link>
                <Link 
                  to="/compare" 
                  className={`p-2 pl-4 rounded ${location.pathname === '/compare' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={closeMenus}
                >
                  ⚖️ Compare Methods
                </Link>
                <Link 
                  to="/get-started" 
                  className={`p-2 pl-4 rounded ${location.pathname === '/get-started' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={closeMenus}
                >
                  🚀 Getting Started Guide
                </Link>
                <Link 
                  to="/success-stories" 
                  className={`p-2 pl-4 rounded ${location.pathname === '/success-stories' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={closeMenus}
                >
                  🏆 Success Stories
                </Link>
                <Link 
                  to="/resources" 
                  className={`p-2 pl-4 rounded ${location.pathname === '/resources' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={closeMenus}
                >
                  📚 Learning Resources
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}