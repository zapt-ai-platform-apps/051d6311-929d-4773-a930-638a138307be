import React from 'react';
import { Link } from 'react-router-dom';

export default function MethodCard({ method }) {
  return (
    <Link to={`/method/${method.id}`} className="block">
      <div className="card hover:translate-y-[-5px] transition-all h-full flex flex-col">
        <div className="p-6 border-b border-gray-100 flex-grow">
          <h3 className="text-xl font-bold mb-2">{method.name}</h3>
          <p className="text-gray-700 mb-4">{method.description}</p>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-gray-500 text-sm font-medium w-36">Earning Potential:</span>
              <span className="text-gray-900 text-sm flex-1">{method.earningPotential}</span>
            </div>
            
            <div className="flex items-start">
              <span className="text-gray-500 text-sm font-medium w-36">Difficulty:</span>
              <span className="text-gray-900 text-sm flex-1">{method.difficulty}</span>
            </div>
            
            <div className="flex items-start">
              <span className="text-gray-500 text-sm font-medium w-36">Startup Costs:</span>
              <span className="text-gray-900 text-sm flex-1">{method.startupCosts}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-b-lg">
          <span className="text-blue-600 font-medium inline-flex items-center">
            View Details
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}