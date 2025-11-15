import React from 'react';

const MouseCursorIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M2,2 L22,12 L12,14 L10,22 L2,2 Z" />
    </svg>
);

export default MouseCursorIcon;