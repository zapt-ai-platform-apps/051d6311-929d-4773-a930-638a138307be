import React, { useState, useEffect } from 'react';
import { earningMethods } from '../data/methods';
import { earningCategories } from '../data/categories';

export default function IncomeCalculator() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [experienceLevel, setExperienceLevel] = useState('beginner');
  const [commitment, setCommitment] = useState(6);
  const [estimatedIncome, setEstimatedIncome] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [filteredMethods, setFilteredMethods] = useState(earningMethods);

  useEffect(() => {
    if (categoryFilter === 'all') {
      setFilteredMethods(earningMethods);
    } else {
      setFilteredMethods(earningMethods.filter(method => method.categoryId === categoryFilter));
    }
  }, [categoryFilter]);

  const calculateIncome = () => {
    setIsCalculating(true);
    
    // Find the selected method
    const method = earningMethods.find(m => m.id === selectedMethod);
    if (!method) {
      setEstimatedIncome(null);
      setIsCalculating(false);
      return;
    }
    
    // Parse the earning potential range
    let potentialRange = method.earningPotential;
    let minRate = 0;
    let maxRate = 0;
    
    // Handle different formats of earning potential
    if (potentialRange.includes('per hour')) {
      // Parse hourly rate (e.g., "$15-100+ per hour")
      const matches = potentialRange.match(/\$(\d+)-(\d+)/);
      if (matches && matches.length >= 3) {
        minRate = parseInt(matches[1]);
        maxRate = parseInt(matches[2]);
      }
      
      // Calculate monthly income based on hours per week
      const monthlyHours = hoursPerWeek * 4.33; // Average weeks per month
      
      // Adjust rate based on experience level
      let rateMultiplier = 0;
      switch (experienceLevel) {
        case 'beginner':
          rateMultiplier = 0;
          break;
        case 'intermediate':
          rateMultiplier = 0.33;
          break;
        case 'advanced':
          rateMultiplier = 0.66;
          break;
        case 'expert':
          rateMultiplier = 1;
          break;
        default:
          rateMultiplier = 0;
      }
      
      // Calculate the rate within the range based on experience
      const rate = minRate + (maxRate - minRate) * rateMultiplier;
      
      // Apply commitment factor (longer commitment typically means higher earnings as skills improve)
      const commitmentMultiplier = Math.min(1, commitment / 12); // Max out at 12 months
      const adjustedRate = rate * (1 + commitmentMultiplier * 0.5); // Up to 50% increase for 12+ months
      
      // Calculate estimated monthly income
      const calculatedIncome = Math.round(adjustedRate * monthlyHours);
      
      // Set minimum and maximum values
      const minMonthly = Math.round(minRate * monthlyHours);
      const maxMonthly = Math.round(maxRate * monthlyHours * 1.5); // 1.5x for expert level with long commitment
      
      setTimeout(() => {
        setEstimatedIncome({
          monthly: calculatedIncome,
          hourly: Math.round(adjustedRate),
          range: {
            min: minMonthly,
            max: maxMonthly
          },
          method: method.name
        });
        setIsCalculating(false);
      }, 1000);
      
    } else if (potentialRange.includes('per month')) {
      // Parse monthly rate (e.g., "$500-50,000+ per month")
      const matches = potentialRange.match(/\$(\d+)-(\d+,?\d*)/);
      if (matches && matches.length >= 3) {
        minRate = parseInt(matches[1].replace(/,/g, ''));
        maxRate = parseInt(matches[2].replace(/,/g, ''));
      }
      
      // Adjust based on hours per week (assuming 40 hours is full-time)
      const timeCommitmentFactor = hoursPerWeek / 40;
      
      // Adjust rate based on experience level
      let rateMultiplier = 0;
      switch (experienceLevel) {
        case 'beginner':
          rateMultiplier = 0;
          break;
        case 'intermediate':
          rateMultiplier = 0.33;
          break;
        case 'advanced':
          rateMultiplier = 0.66;
          break;
        case 'expert':
          rateMultiplier = 1;
          break;
        default:
          rateMultiplier = 0;
      }
      
      // Calculate the rate within the range based on experience
      const baseRate = minRate + (maxRate - minRate) * rateMultiplier;
      
      // Apply commitment factor
      const commitmentMultiplier = Math.min(1, commitment / 12);
      const adjustedRate = baseRate * (1 + commitmentMultiplier * 0.5);
      
      // Apply time commitment factor
      const calculatedIncome = Math.round(adjustedRate * timeCommitmentFactor);
      
      setTimeout(() => {
        setEstimatedIncome({
          monthly: calculatedIncome,
          hourly: Math.round(calculatedIncome / (hoursPerWeek * 4.33)),
          range: {
            min: Math.round(minRate * timeCommitmentFactor),
            max: Math.round(maxRate * timeCommitmentFactor)
          },
          method: method.name
        });
        setIsCalculating(false);
      }, 1000);
    } else {
      // For more complex cases or when "Varies widely" is mentioned
      setTimeout(() => {
        setEstimatedIncome({
          monthly: "Varies widely",
          hourly: "Varies widely",
          range: {
            min: null,
            max: null
          },
          method: method.name
        });
        setIsCalculating(false);
      }, 1000);
    }
  };

  return (
    <div className="container-custom py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Income Potential Calculator</h1>
          <p className="text-xl text-white/90">
            Estimate your potential earnings from various online opportunities based on your time commitment and experience.
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Your Details</h2>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Select Category</label>
                <select 
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 box-border"
                >
                  <option value="all">All Categories</option>
                  {earningCategories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Select Earning Method</label>
                <select 
                  value={selectedMethod}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 box-border"
                >
                  <option value="">-- Select a method --</option>
                  {filteredMethods.map(method => (
                    <option key={method.id} value={method.id}>{method.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Hours Per Week: {hoursPerWeek}
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="40" 
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 hour</span>
                  <span>10 hours</span>
                  <span>20 hours</span>
                  <span>30 hours</span>
                  <span>40 hours</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Your Experience Level</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['beginner', 'intermediate', 'advanced', 'expert'].map(level => (
                    <button 
                      key={level}
                      onClick={() => setExperienceLevel(level)}
                      className={`py-2 px-4 rounded-md cursor-pointer border ${
                        experienceLevel === level 
                          ? 'bg-blue-100 border-blue-500 text-blue-700' 
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Commitment Duration (months): {commitment}
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="24" 
                  value={commitment}
                  onChange={(e) => setCommitment(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>6</span>
                  <span>12</span>
                  <span>18</span>
                  <span>24</span>
                </div>
              </div>
              
              <button 
                onClick={calculateIncome}
                disabled={!selectedMethod || isCalculating}
                className="btn-primary bg-green-600 hover:bg-green-700 w-full py-3 text-lg flex justify-center items-center cursor-pointer"
              >
                {isCalculating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Calculating...
                  </>
                ) : (
                  'Calculate Potential Income'
                )}
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Your Estimate</h2>
              
              {estimatedIncome ? (
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-1">{estimatedIncome.method}</h3>
                    <p className="text-gray-500 text-sm">Based on your inputs</p>
                  </div>
                  
                  {typeof estimatedIncome.monthly === 'number' ? (
                    <>
                      <div className="border-t border-gray-200 pt-4 mb-4">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          ${estimatedIncome.monthly.toLocaleString()}/month
                        </div>
                        <div className="text-md text-gray-500">
                          Approx. ${estimatedIncome.hourly}/hour
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-4">
                        <p>This estimate is based on:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>{hoursPerWeek} hours per week</li>
                          <li>{experienceLevel.charAt(0).toUpperCase() + experienceLevel.slice(1)} skill level</li>
                          <li>{commitment} month commitment</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-800">
                        <p className="font-medium">Income range for this method:</p>
                        <p>${estimatedIncome.range.min?.toLocaleString()} - ${estimatedIncome.range.max?.toLocaleString()} per month</p>
                      </div>
                    </>
                  ) : (
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-lg mb-3">
                        The income for this method varies widely depending on many factors.
                      </p>
                      <p className="text-sm text-gray-600">
                        This method has a highly variable income potential that's difficult to estimate. 
                        Factors such as market conditions, specific skills, and individual effort will 
                        significantly impact your results.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-500">
                    Select an earning method and fill in your details to see an estimated income calculation.
                  </p>
                </div>
              )}
              
              <div className="mt-6 bg-yellow-50 p-4 rounded-md border border-yellow-100">
                <h3 className="font-semibold text-yellow-800 mb-2">Important Note</h3>
                <p className="text-sm text-yellow-800">
                  These estimates are approximations based on typical earnings reported in the industry. 
                  Actual earnings can vary significantly based on individual skills, work quality, market 
                  conditions, and many other factors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}