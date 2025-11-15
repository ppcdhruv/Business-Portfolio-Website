import React from 'react';

const MarTechIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6"></path>
    <path d="M12 3v12"></path>
    <path d="M18 8.7a9 9 0 0 1-12 0"></path>
  </svg>
);

export default MarTechIcon;
