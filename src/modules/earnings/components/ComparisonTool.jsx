import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { earningMethods } from '../data/methods';
import { earningCategories } from '../data/categories';

export default function ComparisonTool() {
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [filteredMethods, setFilteredMethods] = useState(earningMethods);
  const [isComparing, setIsComparing] = useState(false);

  // Filter methods by category
  useEffect(() => {
    if (categoryFilter === 'all') {
      setFilteredMethods(earningMethods);
    } else {
      setFilteredMethods(earningMethods.filter(method => method.categoryId === categoryFilter));
    }
  }, [categoryFilter]);

  // Toggle method selection
  const toggleMethodSelection = (methodId) => {
    if (selectedMethods.includes(methodId)) {
      setSelectedMethods(selectedMethods.filter(id => id !== methodId));
    } else {
      if (selectedMethods.length < 3) {
        setSelectedMethods([...selectedMethods, methodId]);
      }
    }
  };

  // Get difficulty score
  const getDifficultyScore = (difficulty) => {
    switch (difficulty) {
      case 'Very Low': return 1;
      case 'Low': return 2;
      case 'Low to Medium': return 3;
      case 'Medium': return 4;
      case 'Medium to High': return 5;
      case 'High': return 6;
      default: return 4;
    }
  };

  // Get startup cost score
  const getStartupCostScore = (cost) => {
    switch (cost) {
      case 'Very Low': return 1;
      case 'Low': return 2;
      case 'Low to Medium': return 3;
      case 'Medium': return 4;
      case 'Medium to High': return 5;
      case 'High': return 6;
      default: return 4;
    }
  };
  
  // Get time to earnings score (lower is faster/better)
  const getTimeScore = (timeframe) => {
    if (timeframe.includes('Fast')) return 1;
    if (timeframe.includes('Medium')) return 3;
    if (timeframe.includes('Slow')) return 5;
    return 3;
  };

  // Parse earning potential to get a numerical value for comparison
  const getEarningScore = (potential) => {
    // For hourly rates
    if (potential.includes('per hour')) {
      const matches = potential.match(/\$(\d+)-(\d+)/);
      if (matches && matches.length >= 3) {
        const min = parseInt(matches[1]);
        const max = parseInt(matches[2]);
        return (min + max) / 2; // Average hourly rate
      }
    }
    
    // For monthly income
    if (potential.includes('per month')) {
      const matches = potential.match(/\$(\d+)-(\d+),?(\d*)/);
      if (matches) {
        const min = parseInt(matches[1].replace(/,/g, ''));
        const maxStr = matches[2] + (matches[3] || "");
        const max = parseInt(maxStr.replace(/,/g, ''));
        return ((min + max) / 2) / 100; // Scaled down average monthly
      }
    }
    
    // Default
    return 25;
  };

  const selectedMethodsData = selectedMethods.map(id => 
    earningMethods.find(method => method.id === id)
  );

  return (
    <div className="container-custom py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Method Comparison Tool</h1>
          <p className="text-xl text-white/90">
            Compare different online earning methods side-by-side to find the best fit for your goals and situation.
          </p>
        </div>
        
        {!isComparing ? (
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Select Methods to Compare (max 3)</h2>
              
              {/* Category filter */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Filter by Category</label>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => setCategoryFilter('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      categoryFilter === 'all' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } cursor-pointer`}
                  >
                    All Categories
                  </button>
                  
                  {earningCategories.map(category => (
                    <button 
                      key={category.id}
                      onClick={() => setCategoryFilter(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        categoryFilter === category.id 
                          ? `${category.color} ${category.textColor}` 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } cursor-pointer`}
                    >
                      {category.icon} {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Method selection grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMethods.map(method => {
                  const category = earningCategories.find(c => c.id === method.categoryId);
                  const isSelected = selectedMethods.includes(method.id);
                  
                  return (
                    <div 
                      key={method.id}
                      onClick={() => toggleMethodSelection(method.id)}
                      className={`
                        border rounded-lg p-4 cursor-pointer
                        ${isSelected 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${category.color} ${category.textColor}`}>
                          {category.name}
                        </span>
                        
                        <div className="w-5 h-5 rounded-full border flex items-center justify-center">
                          {isSelected && (
                            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-1">{method.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{method.description.substring(0, 100)}...</p>
                      
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex justify-between">
                          <span>Earning Potential:</span>
                          <span>{method.earningPotential}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Difficulty:</span>
                          <span>{method.difficulty}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Startup Costs:</span>
                          <span>{method.startupCosts}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {selectedMethods.length > 0 && (
                <div className="mt-6 flex justify-center">
                  <button 
                    onClick={() => setIsComparing(true)}
                    className="btn-primary px-8 py-3 cursor-pointer"
                  >
                    Compare {selectedMethods.length} Method{selectedMethods.length > 1 ? 's' : ''}
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Comparison Results</h2>
              <button 
                onClick={() => setIsComparing(false)}
                className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
              >
                ← Back to Selection
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left border-b border-gray-200 w-1/4">Features</th>
                    {selectedMethodsData.map(method => (
                      <th key={method.id} className="p-4 text-left border-b border-gray-200">
                        {method.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Category */}
                  <tr>
                    <td className="p-4 border-b border-gray-200 font-medium">Category</td>
                    {selectedMethodsData.map(method => {
                      const category = earningCategories.find(c => c.id === method.categoryId);
                      return (
                        <td key={method.id} className="p-4 border-b border-gray-200">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${category.color} ${category.textColor}`}>
                            {category.icon} {category.name}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                  
                  {/* Earning Potential */}
                  <tr>
                    <td className="p-4 border-b border-gray-200 font-medium">Earning Potential</td>
                    {selectedMethodsData.map(method => (
                      <td key={method.id} className="p-4 border-b border-gray-200">
                        <div className="font-semibold">{method.earningPotential}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div 
                            className="bg-green-600 h-2.5 rounded-full" 
                            style={{ width: `${Math.min(100, getEarningScore(method.earningPotential) * 2)}%` }}
                          ></div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Difficulty */}
                  <tr>
                    <td className="p-4 border-b border-gray-200 font-medium">Difficulty</td>
                    {selectedMethodsData.map(method => (
                      <td key={method.id} className="p-4 border-b border-gray-200">
                        <div>{method.difficulty}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div 
                            className="bg-red-500 h-2.5 rounded-full" 
                            style={{ width: `${(getDifficultyScore(method.difficulty) / 6) * 100}%` }}
                          ></div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Startup Costs */}
                  <tr>
                    <td className="p-4 border-b border-gray-200 font-medium">Startup Costs</td>
                    {selectedMethodsData.map(method => (
                      <td key={method.id} className="p-4 border-b border-gray-200">
                        <div>{method.startupCosts}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div 
                            className="bg-yellow-500 h-2.5 rounded-full" 
                            style={{ width: `${(getStartupCostScore(method.startupCosts) / 6) * 100}%` }}
                          ></div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Time to First Earning */}
                  <tr>
                    <td className="p-4 border-b border-gray-200 font-medium">Time to First Earning</td>
                    {selectedMethodsData.map(method => (
                      <td key={method.id} className="p-4 border-b border-gray-200">
                        <div>{method.timeToFirstEarning}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div 
                            className="bg-blue-500 h-2.5 rounded-full" 
                            style={{ width: `${(getTimeScore(method.timeToFirstEarning) / 5) * 100}%` }}
                          ></div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Required Skills */}
                  <tr>
                    <td className="p-4 border-b border-gray-200 font-medium">Required Skills</td>
                    {selectedMethodsData.map(method => (
                      <td key={method.id} className="p-4 border-b border-gray-200">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {method.skillsRequired.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Pros */}
                  <tr>
                    <td className="p-4 border-b border-gray-200 font-medium">Pros</td>
                    {selectedMethodsData.map(method => (
                      <td key={method.id} className="p-4 border-b border-gray-200">
                        <ul className="list-disc pl-5 space-y-1 text-sm text-green-700">
                          {method.pros.slice(0, 3).map((pro, index) => (
                            <li key={index}>{pro}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Cons */}
                  <tr>
                    <td className="p-4 border-b border-gray-200 font-medium">Cons</td>
                    {selectedMethodsData.map(method => (
                      <td key={method.id} className="p-4 border-b border-gray-200">
                        <ul className="list-disc pl-5 space-y-1 text-sm text-red-700">
                          {method.cons.slice(0, 3).map((con, index) => (
                            <li key={index}>{con}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Popular Platforms */}
                  <tr>
                    <td className="p-4 border-b border-gray-200 font-medium">Popular Platforms</td>
                    {selectedMethodsData.map(method => (
                      <td key={method.id} className="p-4 border-b border-gray-200">
                        <div className="flex flex-wrap gap-2">
                          {method.platforms.slice(0, 3).map((platform, index) => (
                            <a 
                              key={index}
                              href={platform.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 py-1 rounded"
                            >
                              {platform.name}
                            </a>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Links to Details */}
                  <tr>
                    <td className="p-4 border-b border-gray-200 font-medium">Details</td>
                    {selectedMethodsData.map(method => (
                      <td key={method.id} className="p-4 border-b border-gray-200">
                        <Link 
                          to={`/method/${method.id}`}
                          className="btn-primary inline-block cursor-pointer"
                        >
                          View Full Details
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">Comparison Summary</h3>
              <p className="text-blue-800 text-sm mb-3">
                Based on the comparison, here are some quick insights:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-blue-800">
                {selectedMethodsData.length > 1 && (
                  <>
                    <li>
                      <strong>Fastest Time to Earnings:</strong> {
                        selectedMethodsData.sort((a, b) => 
                          getTimeScore(a.timeToFirstEarning) - getTimeScore(b.timeToFirstEarning)
                        )[0].name
                      }
                    </li>
                    <li>
                      <strong>Lowest Startup Cost:</strong> {
                        selectedMethodsData.sort((a, b) => 
                          getStartupCostScore(a.startupCosts) - getStartupCostScore(b.startupCosts)
                        )[0].name
                      }
                    </li>
                    <li>
                      <strong>Highest Earning Potential:</strong> {
                        selectedMethodsData.sort((a, b) => 
                          getEarningScore(b.earningPotential) - getEarningScore(a.earningPotential)
                        )[0].name
                      }
                    </li>
                    <li>
                      <strong>Lowest Difficulty:</strong> {
                        selectedMethodsData.sort((a, b) => 
                          getDifficultyScore(a.difficulty) - getDifficultyScore(b.difficulty)
                        )[0].name
                      }
                    </li>
                  </>
                )}
                <li>Remember that the best method depends on your specific skills, goals, and circumstances.</li>
                <li>Consider trying our <Link to="/path-finder" className="text-blue-600 hover:text-blue-800">Path Finder</Link> tool for personalized recommendations.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}