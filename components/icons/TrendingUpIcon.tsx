import React from 'react';

const TrendingUpIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.5 4.5L21.75 6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6H21v3.75" />
    </svg>
  );
};

export default TrendingUpIcon;