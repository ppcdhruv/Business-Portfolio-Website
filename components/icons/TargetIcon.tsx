import React from 'react';

const TargetIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="1.5"
    >
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"></circle>
        <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round"></circle>
        <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round"></circle>
    </svg>
);
export default TargetIcon;
