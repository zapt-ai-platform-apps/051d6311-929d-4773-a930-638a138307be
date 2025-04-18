import React from 'react';
import { Link } from 'react-router-dom';
import { earningCategories } from '../../earnings/data/categories';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-10 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Earn Online Guide</h2>
            <p className="text-gray-300 mb-4">
              Your comprehensive resource for finding legitimate ways to earn money online.
              Explore various opportunities and start your online income journey today.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {earningCategories.map(category => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-300 text-sm">
              This guide provides information about various ways to earn money online.
              While we strive to provide accurate and up-to-date information, results may vary.
              Always conduct your own research before starting any online venture.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} Earn Online Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}