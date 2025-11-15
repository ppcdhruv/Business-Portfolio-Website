import React from 'react';

const ShootingArrowIcon: React.FC<{ className?: string }> = ({ className = 'w-3 h-5' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22M12 22L7 17M12 22L17 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default ShootingArrowIcon;