import React from 'react';

const EngineIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <style>{`
            .gear-1 { animation: spin 4s linear infinite; transform-origin: center; }
            .gear-2 { animation: spin-reverse 4s linear infinite; transform-origin: center; }
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        `}</style>
        {/* Larger Gear */}
        <g className="gear-1 text-stone-800 dark:text-stone-200">
            <circle cx="9.5" cy="9.5" r="5.5" />
            <path d="M9.5 4V2" />
            <path d="M9.5 17V15" />
            <path d="M15 9.5H17" />
            <path d="M4 9.5H2" />
            <path d="m13.4 5.6-.9.9M6.5 12.5l-.9.9" />
            <path d="m13.4 13.4-.9-.9M6.5 6.5l-.9-.9" />
        </g>
        {/* Smaller Gear */}
        <g className="gear-2 text-stone-500 dark:text-stone-400">
             <circle cx="16" cy="16" r="4" />
             <path d="M16 12V11" />
             <path d="M16 21V20" />
             <path d="M20 16H21" />
             <path d="M12 16H11" />
        </g>
    </svg>
);
export default EngineIcon;