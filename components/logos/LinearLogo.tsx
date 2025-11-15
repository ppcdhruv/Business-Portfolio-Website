import React from 'react';

const LinearLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 76 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.25 34H0L38.25 0H76L38.25 34Z" fill="currentColor"></path>
    </svg>
  );
};

export default LinearLogo;