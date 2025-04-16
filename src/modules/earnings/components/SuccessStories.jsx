import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { successStories } from '../data/success-stories';
import { earningCategories } from '../data/categories';

export default function SuccessStories() {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [expandedStory, setExpandedStory] = useState(null);
  
  const filteredStories = categoryFilter === 'all' 
    ? successStories 
    : successStories.filter(story => story.categoryId === categoryFilter);

  return (
    <div className="container-custom py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Success Stories</h1>
          <p className="text-xl text-white/90">
            Real stories from people who have successfully built online incomes through various methods.
            Learn from their experiences, challenges, and strategies.
          </p>
        </div>
        
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
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
          
          <div className="space-y-6">
            {filteredStories.length > 0 ? (
              filteredStories.map(story => {
                const category = earningCategories.find(c => c.id === story.categoryId);
                const isExpanded = expandedStory === story.id;
                
                return (
                  <div key={story.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className={`p-4 ${category.color} ${category.textColor} flex items-center`}>
                      <span className="text-sm font-medium px-2 py-0.5 bg-white/30 rounded-full">{category.name}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{story.method}</span>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <div className="flex-shrink-0 h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 overflow-hidden">
                          {story.avatar ? (
                            <img src={story.avatar} alt={story.name} className="h-full w-full object-cover" />
                          ) : (
                            <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        
                        <div>
                          <h2 className="text-2xl font-bold">{story.name}</h2>
                          <p className="text-gray-600">{story.location} • {story.yearStarted}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center text-gray-700 mb-2">
                          <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium">Starting Point:</span>
                          <span className="ml-2">{story.startingPoint}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-700 mb-2">
                          <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium">Current Achievement:</span>
                          <span className="ml-2">{story.currentAchievement}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium">Time to Success:</span>
                          <span className="ml-2">{story.timeToSuccess}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">
                        {isExpanded ? story.fullStory : `${story.fullStory.substring(0, 250)}...`}
                      </p>
                      
                      <button 
                        onClick={() => setExpandedStory(isExpanded ? null : story.id)}
                        className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                      >
                        {isExpanded ? 'Show less' : 'Read full story'}
                      </button>
                      
                      {isExpanded && (
                        <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
                          <h3 className="font-semibold mb-2">Key Lessons & Advice</h3>
                          <ul className="space-y-2">
                            {story.keyLessons.map((lesson, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                                </svg>
                                <span>{lesson}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {story.recommendedResources && story.recommendedResources.length > 0 && (
                            <>
                              <h3 className="font-semibold mt-4 mb-2">Recommended Resources</h3>
                              <ul className="space-y-1">
                                {story.recommendedResources.map((resource, index) => (
                                  <li key={index} className="text-blue-600 hover:text-blue-800">
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                      {resource.name}
                                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                      </svg>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      )}
                      
                      <div className="mt-4 flex justify-between items-center">
                        <Link 
                          to={`/method/${story.methodId}`} 
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                        >
                          Learn about {story.method}
                          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                        
                        {story.socialProfiles && story.socialProfiles.length > 0 && (
                          <div className="flex space-x-2">
                            {story.socialProfiles.map((profile, index) => (
                              <a 
                                key={index}
                                href={profile.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-700"
                                aria-label={profile.platform}
                              >
                                {profile.platform === 'Twitter' && (
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.16 10.16 0 01-3.127 1.195 4.91 4.91 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                  </svg>
                                )}
                                {profile.platform === 'LinkedIn' && (
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                  </svg>
                                )}
                                {profile.platform === 'Instagram' && (
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                  </svg>
                                )}
                                {profile.platform === 'YouTube' && (
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                  </svg>
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-500 text-lg">
                  No success stories found for this category.
                </p>
                <button 
                  onClick={() => setCategoryFilter('all')}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  View All Stories
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}