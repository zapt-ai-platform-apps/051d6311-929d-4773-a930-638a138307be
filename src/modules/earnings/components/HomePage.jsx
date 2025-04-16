import React from 'react';
import { Link } from 'react-router-dom';
import { earningCategories } from '../data/categories';
import { earningMethods } from '../data/methods';
import CategoryCard from './CategoryCard';
import MethodCard from './MethodCard';

export default function HomePage() {
  // Get 3 methods from different categories for featured section
  const featuredMethods = [
    earningMethods.find(m => m.id === 'freelance-writing'),
    earningMethods.find(m => m.id === 'youtube-channel'),
    earningMethods.find(m => m.id === 'online-courses')
  ];

  return (
    <div className="container-custom py-6 md:py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 md:p-12 mb-12 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover How to Earn Money Online</h1>
          <p className="text-xl mb-6">
            Explore legitimate ways to generate income online, from freelancing and remote jobs to
            passive income streams and digital entrepreneurship.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="#categories" className="btn-primary bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium cursor-pointer">
              Explore Opportunities
            </Link>
            <Link to="/path-finder" className="btn-primary border border-white bg-blue-700/30 hover:bg-blue-700/50 px-6 py-3 rounded-md font-medium cursor-pointer">
              Find Your Path
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Helpful Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/path-finder" className="card hover:translate-y-[-5px] transition-all cursor-pointer p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <div className="text-4xl mb-3">👣</div>
            <h3 className="font-bold text-xl mb-2">Path Finder</h3>
            <p className="text-gray-700 mb-3">Discover the perfect online earning methods for your skills and goals.</p>
            <span className="text-blue-600 font-medium inline-flex items-center">
              Find Your Path
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>

          <Link to="/income-calculator" className="card hover:translate-y-[-5px] transition-all cursor-pointer p-6 bg-gradient-to-br from-green-50 to-teal-50 border border-green-100">
            <div className="text-4xl mb-3">🧮</div>
            <h3 className="font-bold text-xl mb-2">Income Calculator</h3>
            <p className="text-gray-700 mb-3">Estimate your potential earnings from different online opportunities.</p>
            <span className="text-blue-600 font-medium inline-flex items-center">
              Calculate Now
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>

          <Link to="/get-started" className="card hover:translate-y-[-5px] transition-all cursor-pointer p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-xl mb-2">Getting Started</h3>
            <p className="text-gray-700 mb-3">Step-by-step guides to launch your online earning journey.</p>
            <span className="text-blue-600 font-medium inline-flex items-center">
              Start Now
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>

          <Link to="/success-stories" className="card hover:translate-y-[-5px] transition-all cursor-pointer p-6 bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-100">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold text-xl mb-2">Success Stories</h3>
            <p className="text-gray-700 mb-3">Real people who built successful online incomes from scratch.</p>
            <span className="text-blue-600 font-medium inline-flex items-center">
              Read Stories
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Featured Methods */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Opportunities</h2>
          <Link to="#categories" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
            View All Categories →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredMethods.map(method => (
            <MethodCard key={method.id} method={method} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Explore by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {earningCategories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6">Your Path to Online Income</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 text-blue-800 rounded-full p-4 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Discover</h3>
            <p>
              Use our <Link to="/path-finder" className="text-blue-600">Path Finder</Link> to identify earning methods that match your skills and goals.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-green-100 text-green-800 rounded-full p-4 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Learn</h3>
            <p>
              Use our detailed guides and <Link to="/resources" className="text-blue-600">resources</Link> to gain the knowledge you need to succeed.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-purple-100 text-purple-800 rounded-full p-4 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Start</h3>
            <p>
              Follow our <Link to="/get-started" className="text-blue-600">step-by-step guides</Link> to launch your online income stream with confidence.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-orange-100 text-orange-800 rounded-full p-4 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">4. Grow</h3>
            <p>
              Scale your earnings by applying proven strategies from our <Link to="/success-stories" className="text-blue-600">success stories</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-50 rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Take the first step toward financial independence with our personalized guidance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/path-finder" className="btn-primary px-8 py-3 text-lg cursor-pointer">
            Find Your Path
          </Link>
          <Link to="/compare" className="btn-primary bg-white text-blue-700 border border-blue-300 hover:bg-blue-50 px-8 py-3 text-lg cursor-pointer">
            Compare Methods
          </Link>
        </div>
      </section>
    </div>
  );
}