import React from 'react';

const LeakyFunnelIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="1.5"
    >
        <g stroke="currentColor">
            {/* Funnel */}
            <path d="M3 4L10 4L10 8L14 8L14 4L21 4L14 14L10 14L3 4Z" className="text-stone-800 dark:text-stone-200" strokeLinecap="round" strokeLinejoin="round"></path>
            
            {/* Leaks */}
            <g className="text-red-500">
                <path d="M11 15L10 17" strokeLinecap="round" style={{ animation: 'drip 2s ease-out infinite', animationDelay: '0s' }}/>
                <path d="M13 15L14 17" strokeLinecap="round" style={{ animation: 'drip 2s ease-out infinite', animationDelay: '0.5s' }}/>
                <path d="M12 18L12 20" strokeLinecap="round" style={{ animation: 'drip 2s ease-out infinite', animationDelay: '1s' }}/>
            </g>
        </g>
        <style>{`
            @keyframes drip {
                0% { opacity: 0; transform: translateY(0); }
                50% { opacity: 1; }
                100% { opacity: 0; transform: translateY(4px); }
            }
        `}</style>
    </svg>
);
export default LeakyFunnelIcon;