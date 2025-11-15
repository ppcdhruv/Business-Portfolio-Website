import React from 'react';

const SystemIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8 text-neutral-500 dark:text-neutral-400' }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h16.5M3.75 3v5.25A2.25 2.25 0 006 10.5h12M3.75 16.5v2.25A2.25 2.25 0 006 21h12a2.25 2.25 0 002.25-2.25V16.5m-16.5 0h16.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75h.008v.008H12V6.75z" />
    </svg>
  );
};

export default SystemIcon;