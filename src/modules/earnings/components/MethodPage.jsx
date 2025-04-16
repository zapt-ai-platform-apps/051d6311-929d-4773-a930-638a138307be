import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { earningMethods } from '../data/methods';
import { earningCategories } from '../data/categories';

export default function MethodPage() {
  const { methodId } = useParams();
  
  // Find the method
  const method = earningMethods.find(m => m.id === methodId);
  
  // If method doesn't exist, redirect to home
  if (!method) {
    return <Navigate to="/" />;
  }
  
  // Find the category for this method
  const category = earningCategories.find(cat => cat.id === method.categoryId);
  
  // Find related methods in the same category (excluding current method)
  const relatedMethods = earningMethods
    .filter(m => m.categoryId === method.categoryId && m.id !== method.id)
    .slice(0, 3);

  return (
    <div className="container-custom py-8">
      {/* Navigation */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <Link to={`/category/${category.id}`} className="hover:text-blue-600">{category.name}</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">{method.name}</span>
        </div>
      </div>
      
      {/* Method Header */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className={`${category.color} p-6`}>
          <Link 
            to={`/category/${category.id}`}
            className={`inline-block ${category.textColor} bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-4`}
          >
            {category.icon} {category.name}
          </Link>
          <h1 className={`text-3xl md:text-4xl font-bold ${category.textColor}`}>{method.name}</h1>
        </div>
        
        <div className="p-6">
          <p className="text-lg text-gray-700 mb-6">{method.description}</p>
          
          {/* Key Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-500 text-sm font-medium mb-1">Earning Potential</div>
              <div className="text-gray-900 font-bold">{method.earningPotential}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-500 text-sm font-medium mb-1">Difficulty</div>
              <div className="text-gray-900 font-bold">{method.difficulty}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-500 text-sm font-medium mb-1">Startup Costs</div>
              <div className="text-gray-900 font-bold">{method.startupCosts}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-500 text-sm font-medium mb-1">Time to First Earning</div>
              <div className="text-gray-900 font-bold">{method.timeToFirstEarning}</div>
            </div>
          </div>
          
          {/* Detailed Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About {method.name}</h2>
            <div className="prose max-w-none text-gray-700">
              {method.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Skills Required */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Skills Required</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {method.skillsRequired.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Pros and Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-600">Pros</h2>
              <ul className="space-y-2">
                {method.pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-red-600">Cons</h2>
              <ul className="space-y-2">
                {method.cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Tips */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tips for Success</h2>
            <ul className="space-y-3">
              {method.tips.map((tip, index) => (
                <li key={index} className="flex items-start bg-blue-50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Platforms */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular Platforms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {method.platforms.map((platform, index) => (
                <a 
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200 hover:border-blue-300 rounded-lg p-4 text-center transition-colors"
                >
                  <div className="text-blue-600 font-semibold mb-1">{platform.name}</div>
                  <div className="text-xs text-gray-500">Visit Website →</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Methods */}
      {relatedMethods.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Ways to Earn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedMethods.map(relatedMethod => (
              <div key={relatedMethod.id} className="card">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{relatedMethod.name}</h3>
                  <p className="text-gray-700 mb-4">{relatedMethod.description}</p>
                  <Link to={`/method/${relatedMethod.id}`} className="text-blue-600 font-medium inline-flex items-center">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Back Button */}
      <div className="flex justify-between items-center">
        <Link to={`/category/${category.id}`} className="text-blue-600 font-medium flex items-center">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to {category.name}
        </Link>
        
        <Link to="/" className="text-blue-600 font-medium flex items-center">
          View All Categories
          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}