import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { earningMethods } from '../data/methods';
import { earningCategories } from '../data/categories';

export default function PathFinder() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    availableTime: null,
    startupBudget: null,
    skillLevel: null,
    preferredIncomeType: null,
    earningTimeframe: null
  });
  const [results, setResults] = useState([]);

  const handleAnswer = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer
    });
    setStep(step + 1);
  };

  const calculateResults = () => {
    // Algorithm to match user preferences with suitable earning methods
    let matchedMethods = [...earningMethods];
    
    // Filter by available time
    if (answers.availableTime === 'low') {
      matchedMethods = matchedMethods.filter(m => 
        m.difficulty !== 'High' && !m.fullDescription.toLowerCase().includes('time-consuming')
      );
    }
    
    // Filter by budget
    if (answers.startupBudget === 'low') {
      matchedMethods = matchedMethods.filter(m => 
        m.startupCosts === 'Low' || m.startupCosts === 'Very Low'
      );
    } else if (answers.startupBudget === 'medium') {
      matchedMethods = matchedMethods.filter(m => 
        m.startupCosts !== 'High'
      );
    }
    
    // Filter by skill level
    if (answers.skillLevel === 'beginner') {
      matchedMethods = matchedMethods.filter(m => 
        m.difficulty !== 'High'
      );
    }
    
    // Filter by income type preference
    if (answers.preferredIncomeType === 'passive') {
      matchedMethods = matchedMethods.filter(m => 
        m.categoryId === 'passive-income' || m.fullDescription.toLowerCase().includes('passive')
      );
    } else if (answers.preferredIncomeType === 'active') {
      matchedMethods = matchedMethods.filter(m => 
        m.categoryId !== 'passive-income' && !m.fullDescription.toLowerCase().includes('passive')
      );
    }
    
    // Filter by timeframe
    if (answers.earningTimeframe === 'fast') {
      matchedMethods = matchedMethods.filter(m => 
        m.timeToFirstEarning.includes('Fast') || m.timeToFirstEarning.includes('1-')
      );
    }
    
    // Sort by relevance (custom logic based on how many criteria they match)
    matchedMethods.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;
      
      // Add scoring logic based on how well each method matches the criteria
      if (answers.availableTime === 'low' && a.difficulty !== 'High') scoreA += 2;
      if (answers.availableTime === 'low' && b.difficulty !== 'High') scoreB += 2;
      
      if (answers.startupBudget === 'low' && (a.startupCosts === 'Low' || a.startupCosts === 'Very Low')) scoreA += 2;
      if (answers.startupBudget === 'low' && (b.startupCosts === 'Low' || b.startupCosts === 'Very Low')) scoreB += 2;
      
      if (answers.skillLevel === 'beginner' && a.difficulty !== 'High') scoreA += 2;
      if (answers.skillLevel === 'beginner' && b.difficulty !== 'High') scoreB += 2;
      
      if (answers.preferredIncomeType === 'passive' && a.categoryId === 'passive-income') scoreA += 3;
      if (answers.preferredIncomeType === 'passive' && b.categoryId === 'passive-income') scoreB += 3;
      
      if (answers.earningTimeframe === 'fast' && a.timeToFirstEarning.includes('Fast')) scoreA += 2;
      if (answers.earningTimeframe === 'fast' && b.timeToFirstEarning.includes('Fast')) scoreB += 2;
      
      return scoreB - scoreA;
    });
    
    // Return top methods (max 6)
    setResults(matchedMethods.slice(0, 6));
    setStep(step + 1);
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({
      availableTime: null,
      startupBudget: null,
      skillLevel: null,
      preferredIncomeType: null,
      earningTimeframe: null
    });
    setResults([]);
  };

  return (
    <div className="container-custom py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Your Ideal Earning Path</h1>
          <p className="text-xl text-white/90">
            Answer a few questions to discover the best online earning opportunities for your situation.
          </p>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div className="question-container">
              <h2 className="text-2xl font-bold mb-6">How much time can you commit each week?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => handleAnswer('availableTime', 'low')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">⏱️</div>
                  <h3 className="text-lg font-semibold mb-1">5-10 hours/week</h3>
                  <p className="text-sm text-gray-600">Part-time or occasional</p>
                </button>
                
                <button 
                  onClick={() => handleAnswer('availableTime', 'medium')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">🕰️</div>
                  <h3 className="text-lg font-semibold mb-1">10-20 hours/week</h3>
                  <p className="text-sm text-gray-600">Significant part-time</p>
                </button>
                
                <button 
                  onClick={() => handleAnswer('availableTime', 'high')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">⏳</div>
                  <h3 className="text-lg font-semibold mb-1">20+ hours/week</h3>
                  <p className="text-sm text-gray-600">Full-time commitment</p>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="question-container">
              <h2 className="text-2xl font-bold mb-6">What's your startup budget?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => handleAnswer('startupBudget', 'low')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">💰</div>
                  <h3 className="text-lg font-semibold mb-1">$0-$100</h3>
                  <p className="text-sm text-gray-600">Minimal investment</p>
                </button>
                
                <button 
                  onClick={() => handleAnswer('startupBudget', 'medium')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">💰💰</div>
                  <h3 className="text-lg font-semibold mb-1">$100-$1,000</h3>
                  <p className="text-sm text-gray-600">Moderate investment</p>
                </button>
                
                <button 
                  onClick={() => handleAnswer('startupBudget', 'high')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">💰💰💰</div>
                  <h3 className="text-lg font-semibold mb-1">$1,000+</h3>
                  <p className="text-sm text-gray-600">Significant investment</p>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="question-container">
              <h2 className="text-2xl font-bold mb-6">How would you describe your skill level?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => handleAnswer('skillLevel', 'beginner')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">🌱</div>
                  <h3 className="text-lg font-semibold mb-1">Beginner</h3>
                  <p className="text-sm text-gray-600">Still learning the basics</p>
                </button>
                
                <button 
                  onClick={() => handleAnswer('skillLevel', 'intermediate')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">🌿</div>
                  <h3 className="text-lg font-semibold mb-1">Intermediate</h3>
                  <p className="text-sm text-gray-600">Competent in some areas</p>
                </button>
                
                <button 
                  onClick={() => handleAnswer('skillLevel', 'advanced')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">🌳</div>
                  <h3 className="text-lg font-semibold mb-1">Advanced</h3>
                  <p className="text-sm text-gray-600">Expert in one or more skills</p>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="question-container">
              <h2 className="text-2xl font-bold mb-6">Do you prefer active or passive income?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => handleAnswer('preferredIncomeType', 'active')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">🏃‍♂️</div>
                  <h3 className="text-lg font-semibold mb-1">Active Income</h3>
                  <p className="text-sm text-gray-600">Trading time for money directly</p>
                </button>
                
                <button 
                  onClick={() => handleAnswer('preferredIncomeType', 'passive')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">💤</div>
                  <h3 className="text-lg font-semibold mb-1">Passive Income</h3>
                  <p className="text-sm text-gray-600">Earning while you sleep</p>
                </button>
                
                <button 
                  onClick={() => handleAnswer('preferredIncomeType', 'both')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">⚖️</div>
                  <h3 className="text-lg font-semibold mb-1">Mix of Both</h3>
                  <p className="text-sm text-gray-600">Flexible combination</p>
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="question-container">
              <h2 className="text-2xl font-bold mb-6">How quickly do you need to start earning?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => handleAnswer('earningTimeframe', 'fast')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="text-lg font-semibold mb-1">ASAP</h3>
                  <p className="text-sm text-gray-600">Need income within weeks</p>
                </button>
                
                <button 
                  onClick={() => handleAnswer('earningTimeframe', 'medium')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">🚶‍♂️</div>
                  <h3 className="text-lg font-semibold mb-1">Medium-term</h3>
                  <p className="text-sm text-gray-600">1-3 months is fine</p>
                </button>
                
                <button 
                  onClick={() => handleAnswer('earningTimeframe', 'long')}
                  className="btn-primary bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 p-6 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">🌱</div>
                  <h3 className="text-lg font-semibold mb-1">Long-term</h3>
                  <p className="text-sm text-gray-600">Focusing on sustainable growth</p>
                </button>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto mb-4"></div>
              <p className="text-lg">Finding your ideal earning opportunities...</p>
              {setTimeout(() => calculateResults(), 1500) && null}
            </div>
          )}

          {step === 7 && (
            <div className="results-container">
              <h2 className="text-2xl font-bold mb-6">Your Personalized Recommendations</h2>
              
              {results.length > 0 ? (
                <>
                  <p className="mb-6">Based on your preferences, here are the best online earning methods for you:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {results.map(method => {
                      const category = earningCategories.find(c => c.id === method.categoryId);
                      return (
                        <div key={method.id} className="card hover:translate-y-[-5px] transition-all h-full flex flex-col">
                          <div className={`p-4 ${category.color} rounded-t-lg`}>
                            <span className={`text-sm font-medium ${category.textColor}`}>{category.name}</span>
                          </div>
                          <div className="p-5 border-b border-gray-100 flex-grow">
                            <h3 className="text-xl font-bold mb-2">{method.name}</h3>
                            <p className="text-gray-700 mb-4">{method.description}</p>
                            
                            <div className="space-y-2">
                              <div className="flex items-start">
                                <span className="text-gray-500 text-sm font-medium w-36">Earning Potential:</span>
                                <span className="text-gray-900 text-sm flex-1">{method.earningPotential}</span>
                              </div>
                              
                              <div className="flex items-start">
                                <span className="text-gray-500 text-sm font-medium w-36">Time to First Earning:</span>
                                <span className="text-gray-900 text-sm flex-1">{method.timeToFirstEarning}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-gray-50 rounded-b-lg">
                            <button 
                              onClick={() => navigate(`/method/${method.id}`)}
                              className="text-blue-600 font-medium cursor-pointer inline-flex items-center"
                            >
                              View Details
                              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="text-center py-8 bg-yellow-50 rounded-lg p-6">
                  <p className="text-lg mb-4">We couldn't find methods that perfectly match all your criteria.</p>
                  <p>Try adjusting your preferences to see more options.</p>
                </div>
              )}
              
              <div className="flex justify-center mt-6">
                <button 
                  onClick={resetQuiz}
                  className="btn-primary mr-4"
                >
                  Start Over
                </button>
                <button 
                  onClick={() => navigate('/')}
                  className="btn-primary bg-white text-blue-700 border border-blue-300 hover:bg-blue-50"
                >
                  Explore All Methods
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}