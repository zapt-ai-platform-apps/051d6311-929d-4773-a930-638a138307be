import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { earningCategories } from '../data/categories';
import { earningMethods } from '../data/methods';

export default function GetStartedGuide() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  return (
    <div className="container-custom py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Getting Started Guide</h1>
          <p className="text-xl text-white/90">
            Follow these step-by-step instructions to start earning money online, no matter your experience level.
          </p>
        </div>
        
        <div className="p-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Universal Steps to Online Success</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Assess Your Skills and Resources</h3>
                  <p className="text-gray-700 mb-3">
                    Take inventory of your existing skills, available time, budget, and equipment. Be honest about what you can realistically commit to.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Action Steps:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Make a list of your marketable skills (writing, design, programming, teaching, etc.)</li>
                      <li>Determine how many hours per week you can consistently dedicate</li>
                      <li>Set a realistic startup budget for tools, learning, or initial investments</li>
                      <li>Identify any equipment, software, or resources you already have access to</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Choose the Right Opportunity</h3>
                  <p className="text-gray-700 mb-3">
                    Select an earning method that aligns with your skills, interests, and circumstances. Starting with a method that fits your situation increases your chances of success.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Action Steps:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Use our <Link to="/path-finder" className="text-blue-600 hover:text-blue-800">Path Finder tool</Link> to discover opportunities that match your situation</li>
                      <li>Research the earning potential and time commitment for your top choices</li>
                      <li>Consider starting with methods that have a low barrier to entry if you're a beginner</li>
                      <li>Look for opportunities that can leverage your existing skills or knowledge</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Develop Your Skills</h3>
                  <p className="text-gray-700 mb-3">
                    Invest time in learning and improving the specific skills needed for your chosen method. Quality work leads to better rates, more clients, and growth opportunities.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Action Steps:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Identify specific skills you need to develop or improve</li>
                      <li>Find free or affordable learning resources (check our <Link to="/resources" className="text-blue-600 hover:text-blue-800">Resources page</Link>)</li>
                      <li>Allocate regular time for skill development and practice</li>
                      <li>Create sample projects to build your portfolio</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Set Up Your Online Presence</h3>
                  <p className="text-gray-700 mb-3">
                    Create professional profiles on relevant platforms and build a simple portfolio to showcase your work and services.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Action Steps:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Choose the right platforms for your earning method (freelance marketplaces, social media, etc.)</li>
                      <li>Create professional profiles with clear descriptions of your services</li>
                      <li>Develop a simple portfolio website or use platform-specific portfolios</li>
                      <li>Optimize your profiles with relevant keywords that potential clients might search for</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Get Your First Results</h3>
                  <p className="text-gray-700 mb-3">
                    Focus on gaining initial experience, feedback, and building reputation, even if it means starting with lower rates or smaller projects.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Action Steps:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Consider offering initial services at competitive rates to gain reviews</li>
                      <li>Apply to relevant opportunities consistently (aim for a specific number daily)</li>
                      <li>Ask satisfied clients for testimonials and referrals</li>
                      <li>Document your work process and results for your portfolio</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scale and Optimize</h3>
                  <p className="text-gray-700 mb-3">
                    Once you've gained experience and confidence, focus on increasing your earnings by raising rates, finding better clients, or expanding your services.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Action Steps:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Analyze which services or products are most profitable and focus on them</li>
                      <li>Gradually increase your rates as you build a solid reputation</li>
                      <li>Develop processes to work more efficiently and take on more projects</li>
                      <li>Consider diversifying your income streams with complementary methods</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12 border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold mb-6">Method-Specific Starting Guides</h2>
            <p className="mb-6">Select a category to see specific getting started guides for different earning methods:</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
              {earningCategories.map(category => (
                <button 
                  key={category.id} 
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${category.color} ${category.textColor} p-4 rounded-lg text-center hover:opacity-90 transition-opacity cursor-pointer ${selectedCategory === category.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''}`}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
            
            {selectedCategory && (
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4">
                  {earningCategories.find(c => c.id === selectedCategory)?.name} - Getting Started
                </h3>
                
                <div className="space-y-6">
                  {earningMethods
                    .filter(method => method.categoryId === selectedCategory)
                    .map(method => (
                      <div key={method.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                        <h4 className="text-lg font-semibold mb-2">{method.name}</h4>
                        <p className="mb-3 text-gray-700">{method.description}</p>
                        
                        <h5 className="font-medium text-blue-700 mb-2">First Steps:</h5>
                        <ol className="list-decimal pl-5 mb-4 space-y-1">
                          {method.categoryId === 'freelancing' && (
                            <>
                              <li>Identify your specific service offerings based on your skills</li>
                              <li>Create accounts on relevant freelance platforms ({method.platforms.map(p => p.name).join(', ')})</li>
                              <li>Develop a portfolio with 3-5 sample projects demonstrating your abilities</li>
                              <li>Create a compelling profile that highlights your expertise and unique value</li>
                              <li>Start applying for relevant projects, focusing on quality applications rather than quantity</li>
                            </>
                          )}
                          
                          {method.categoryId === 'remote-jobs' && (
                            <>
                              <li>Update your resume to highlight relevant skills and remote work capabilities</li>
                              <li>Create profiles on remote job platforms ({method.platforms.map(p => p.name).join(', ')})</li>
                              <li>Set up job alerts for positions matching your skills and experience</li>
                              <li>Prepare your home office with reliable internet and necessary equipment</li>
                              <li>Practice video interviewing and remote communication skills</li>
                            </>
                          )}
                          
                          {method.categoryId === 'passive-income' && (
                            <>
                              <li>Research successful examples in your chosen passive income method</li>
                              <li>Define your specific niche or target audience</li>
                              <li>Develop a content or product creation plan with regular milestones</li>
                              <li>Set up accounts on relevant platforms ({method.platforms.map(p => p.name).join(', ')})</li>
                              <li>Create your first assets and establish a consistent creation schedule</li>
                            </>
                          )}
                          
                          {method.categoryId === 'content-creation' && (
                            <>
                              <li>Define your content niche and target audience</li>
                              <li>Research successful creators in your chosen platform and niche</li>
                              <li>Create and optimize your profiles on relevant platforms</li>
                              <li>Develop a content calendar with regular posting schedule</li>
                              <li>Focus on content quality and audience engagement before monetization</li>
                            </>
                          )}
                          
                          {method.categoryId === 'ecommerce' && (
                            <>
                              <li>Research product opportunities and market demand</li>
                              <li>Set up accounts on chosen e-commerce platforms</li>
                              <li>Source initial products or create your designs</li>
                              <li>Create professional product listings with quality images and descriptions</li>
                              <li>Develop a marketing strategy to drive initial traffic and sales</li>
                            </>
                          )}
                          
                          {method.categoryId === 'teaching' && (
                            <>
                              <li>Identify your teaching niche and specific topics you'll cover</li>
                              <li>Create profiles on relevant teaching platforms ({method.platforms.map(p => p.name).join(', ')})</li>
                              <li>Develop your teaching methodology and material structure</li>
                              <li>Create sample lessons or course outlines</li>
                              <li>Set up your teaching environment with proper lighting, audio, and visuals</li>
                            </>
                          )}
                        </ol>
                        
                        <Link 
                          to={`/method/${method.id}`} 
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                        >
                          View Full Details
                          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">Success Principles</h3>
            <p className="text-yellow-800 mb-4">
              Regardless of which method you choose, these principles will help you achieve success:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-md p-4 border border-yellow-200">
                <h4 className="font-semibold mb-2">Consistency Beats Perfection</h4>
                <p className="text-sm">
                  Regular, consistent effort over time leads to better results than sporadic bursts of perfect work.
                  Set a sustainable schedule and stick to it.
                </p>
              </div>
              
              <div className="bg-white rounded-md p-4 border border-yellow-200">
                <h4 className="font-semibold mb-2">Focus on Value Creation</h4>
                <p className="text-sm">
                  Money follows value. Focus on providing exceptional value to your clients, customers,
                  or audience, and the financial rewards will follow.
                </p>
              </div>
              
              <div className="bg-white rounded-md p-4 border border-yellow-200">
                <h4 className="font-semibold mb-2">Measure and Adjust</h4>
                <p className="text-sm">
                  Track your results and be willing to adjust your approach based on data.
                  What gets measured improves over time.
                </p>
              </div>
              
              <div className="bg-white rounded-md p-4 border border-yellow-200">
                <h4 className="font-semibold mb-2">Build Relationships</h4>
                <p className="text-sm">
                  Network with others in your field, provide excellent customer service, and
                  focus on building genuine professional relationships.
                </p>
              </div>
              
              <div className="bg-white rounded-md p-4 border border-yellow-200">
                <h4 className="font-semibold mb-2">Continuous Learning</h4>
                <p className="text-sm">
                  Set aside time to learn new skills and stay current with trends in your field.
                  The online landscape evolves quickly.
                </p>
              </div>
              
              <div className="bg-white rounded-md p-4 border border-yellow-200">
                <h4 className="font-semibold mb-2">Patience and Persistence</h4>
                <p className="text-sm">
                  Most online income methods take time to generate substantial results.
                  Be patient and persistent through the early stages of growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}