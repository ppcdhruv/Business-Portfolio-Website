import React from 'react';

const TrendingDownIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.5-4.5L21.75 18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 18H21v-3.75" />
    </svg>
  );
};

export default TrendingDownIcon;