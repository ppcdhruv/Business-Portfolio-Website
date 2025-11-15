import React from 'react';

const CostIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => {
  return (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="1.5"
    >
        <g stroke="currentColor" className="text-neutral-800 dark:text-neutral-200">
            {/* Tag body */}
            <path d="M3.23 7.82L7.82 3.23C8.42 2.64 9.28 2.3 10.17 2.3H18.5C19.88 2.3 21 3.42 21 4.8V13.13C21 14.02 20.66 14.88 20.07 15.47L15.48 20.06C14.54 21 12.96 21 12.02 20.06L3.94 11.98C3 11.04 3 9.46 3.94 8.52L3.23 7.82Z" strokeLinecap="round" strokeLinejoin="round"></path>
            {/* Tag hole */}
            <path d="M7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9Z" strokeLinecap="round" strokeLinejoin="round"></path>
            
            {/* Animated arrow */}
            <g className="arrow-path" style={{ animation: 'move-arrow 2s ease-in-out infinite' }}>
                <path d="M17 12L13 16L9 12" strokeWidth="2" className="text-red-500"></path>
                <path d="M13 8V16" strokeWidth="2" className="text-red-500"></path>
            </g>
        </g>
        <style>{`
            @keyframes move-arrow {
                0% { transform: translateY(-2px); opacity: 0; }
                50% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(2px); opacity: 0; }
            }
        `}</style>
    </svg>
  );
};

export default CostIcon;