import React from 'react';

const AutomationIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 0 1 4.29-4.29m-16.14 8.44a11.963 11.963 0 0 1-4.29-4.29m16.14-8.44L11.84 2.87a1.5 1.5 0 0 0-1.68 0L5.84 5.63m14.32 8.74-2.87 4.29a1.5 1.5 0 0 1-1.68 0L9.84 14.37m-5.49-8.44-2.87 4.29a1.5 1.5 0 0 0 0 1.68l4.29 2.87m0 0a1.5 1.5 0 0 0 1.68 0l4.29-2.87m0 0a1.5 1.5 0 0 0 0-1.68l-4.29-2.87" />
    </svg>
  );
};

export default AutomationIcon;