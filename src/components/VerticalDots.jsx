import React from 'react';

const VerticalDots = () => (
  <div className="absolute left-1 top-10 flex flex-col items-center">
    <div className="bg-white border border-gray-200 rounded-lg py-3 px-1">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className="w-1.5 h-1.5 rounded-full bg-gray-300 mb-1.5 last:mb-0"
        />
      ))}
    </div>
  </div>
);

export default VerticalDots;