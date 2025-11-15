import React from 'react';

const BlueprintIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5-7.5-7.5 7.5-7.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" strokeDasharray="2 2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
    </svg>
  );
};

export default BlueprintIcon;