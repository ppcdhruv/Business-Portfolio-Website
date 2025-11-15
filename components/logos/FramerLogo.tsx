import React from 'react';

const FramerLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0h12v4h-4v4H8V4H4V0z" fill="currentColor"></path>
        <path d="M0 8h8v4H4v4H0V8z" fill="currentColor"></path>
    </svg>
  );
};

export default FramerLogo;
