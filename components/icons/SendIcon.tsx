import React from 'react';

const SendIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className={className}
    >
      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.826L11.25 9.25v1.5L4.643 11.98a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.826l12.25-3.5a.75.75 0 000-1.396l-12.25-3.5a.75.75 0 00-.95-.826z" />
    </svg>
  );
};

export default SendIcon;