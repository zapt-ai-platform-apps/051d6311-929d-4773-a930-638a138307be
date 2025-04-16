import React from 'react';

export default function ZaptBadge() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs bg-gray-800 text-white py-1 px-3 rounded-full hover:bg-gray-700 transition-colors shadow-md"
      >
        Made on ZAPT
      </a>
    </div>
  );
}