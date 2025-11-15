import React from 'react';

const VercelLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L20 18H0L10 0Z" fill="currentColor"></path>
    </svg>
  );
};

export default VercelLogo;