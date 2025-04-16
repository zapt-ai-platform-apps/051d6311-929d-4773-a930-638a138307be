import React from 'react';
import { Link } from 'react-router-dom';
import { resources } from '../data/resources';

export default function ResourcesPage() {
  return (
    <div className="container-custom py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white mb-8">
        <Link to="/" className="text-white/80 hover:text-white font-medium flex items-center mb-4">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Helpful Resources</h1>
        <p className="text-xl text-white/90 max-w-3xl">
          Tools, learning resources, and communities to help you succeed in your online earning journey. 
          Use these curated resources to build skills, connect with others, and navigate the challenges of online work.
        </p>
      </div>
      
      {/* Resource Sections */}
      {resources.map(resourceCategory => (
        <section key={resourceCategory.id} className="mb-12" id={resourceCategory.id}>
          <h2 className="text-2xl font-bold mb-6">{resourceCategory.name}</h2>
          <p className="text-gray-700 mb-6">{resourceCategory.description}</p>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {resourceCategory.resources.map((resource, index) => (
              <div 
                key={resource.name} 
                className={`p-5 flex flex-col md:flex-row md:items-center ${
                  index < resourceCategory.resources.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{resource.name}</h3>
                    <span className="md:ml-3 text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-2.5 py-0.5 inline-block md:inline">
                      {resource.category}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3 md:mb-0">{resource.description}</p>
                </div>
                <div className="mt-2 md:mt-0 md:ml-4">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      
      {/* Disclaimer Section */}
      <section className="bg-yellow-50 border border-yellow-100 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-3">Disclaimer</h2>
        <p className="text-yellow-800">
          The resources listed on this page are provided for informational purposes only. We are not affiliated with any of these services
          unless explicitly stated. Always conduct your own research before using any tools or services, particularly those requiring
          financial investment or personal information.
        </p>
      </section>
      
      {/* Jump Links */}
      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">On This Page</h2>
        <div className="flex flex-wrap gap-3">
          {resources.map(category => (
            <a 
              key={category.id}
              href={`#${category.id}`}
              className="bg-white border border-gray-200 rounded-md px-4 py-2 text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              {category.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}