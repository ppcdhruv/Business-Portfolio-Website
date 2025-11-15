import React from 'react';

const MouseCursorIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3l15 9-6 1.5-1.5 6-7.5-16.5z" />
    </svg>
);

export default MouseCursorIcon;