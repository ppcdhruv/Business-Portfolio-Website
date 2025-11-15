import React from 'react';

const RaycastLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0417 24.5C11.0417 26.433 9.47467 28 7.54167 28C5.60867 28 4.04167 26.433 4.04167 24.5C4.04167 22.567 5.60867 21 7.54167 21C9.47467 21 11.0417 22.567 11.0417 24.5Z" fill="currentColor"></path>
        <path d="M18.0417 10.5C18.0417 12.433 16.4747 14 14.5417 14C12.6087 14 11.0417 12.433 11.0417 10.5C11.0417 8.56701 12.6087 7 14.5417 7C16.4747 7 18.0417 8.56701 18.0417 10.5Z" fill="currentColor"></path>
        <path d="M25.0417 3.5C25.0417 5.43299 23.4747 7 21.5417 7C19.6087 7 18.0417 5.43299 18.0417 3.5C18.0417 1.56701 19.6087 0 21.5417 0C23.4747 0 25.0417 1.56701 25.0417 3.5Z" fill="currentColor"></path>
        <path d="M11.0417 10.5L7.54167 21" stroke="currentColor" strokeWidth="2"></path>
    </svg>
  );
};

export default RaycastLogo;